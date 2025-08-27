// components/housemap.jsx
import React, { useMemo, useState, useRef } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import forecastByIdJson from "../data/house119_forecast.json";
import DefaultTooltip from "./HouseTooltipBox"; // fallback tooltip

const geoUrl = "/geo/house.topo.json"; // your TopoJSON

// Palette (matches your site’s legend bar)
const CAT_FILL = {
  safeD:   "#1C408C",
  likelyD: "#577CCC",
  leanD:   "#8AAFFF",
  tossup:  "#C26BF7",
  leanR:   "#FF9395",
  likelyR: "#FF5865",
  safeR:   "#E30022",
  other:   "#9CA3AF",
  unknown: "#6B7280",
};

const BUCKET_LABEL = {
  safeD: "Safe D", likelyD: "Likely D", leanD: "Lean D",
  tossup: "Toss-up",
  leanR: "Lean R", likelyR: "Likely R", safeR: "Safe R",
  other: "Other", unknown: "Unknown",
};

// FIPS -> State Abbrev
const FIPS_TO_ST = {
  "01":"AL","02":"AK","04":"AZ","05":"AR","06":"CA","08":"CO","09":"CT","10":"DE","11":"DC",
  "12":"FL","13":"GA","15":"HI","16":"ID","17":"IL","18":"IN","19":"IA","20":"KS","21":"KY",
  "22":"LA","23":"ME","24":"MD","25":"MA","26":"MI","27":"MN","28":"MS","29":"MO","30":"MT",
  "31":"NE","32":"NV","33":"NH","34":"NJ","35":"NM","36":"NY","37":"NC","38":"ND","39":"OH",
  "40":"OK","41":"OR","42":"PA","44":"RI","45":"SC","46":"SD","47":"TN","48":"TX","49":"UT",
  "50":"VT","51":"VA","53":"WA","54":"WV","55":"WI","56":"WY"
};

const pad2 = (n) => String(n).padStart(2, "0");

// Normalize keys to "ST##" (e.g., AL01)
function normalizeKey(raw) {
  if (!raw && raw !== 0) return null;
  const s = String(raw).trim().toUpperCase();

  let m = /^([A-Z]{2})[-\s]?0?(\d{1,2})$/.exec(s);
  if (m) return `${m[1]}${pad2(m[2])}`;

  if (/^\d{4}$/.test(s)) {
    const stFips = s.slice(0, 2);
    let dist = s.slice(2, 4);
    if (dist === "00") dist = "01";
    const st = FIPS_TO_ST[stFips];
    if (st) return `${st}${dist}`;
  }

  m = /([A-Z]{2})[-\s]?0?(\d{1,2})/.exec(s);
  if (m) return `${m[1]}${pad2(m[2])}`;

  return null;
}
function keyFromProps(p = {}) {
  return normalizeKey(p.id) || normalizeKey(p.name) || normalizeKey(p.fips) || null;
}

// Accept several label styles -> canonical bucket
function toBucket(v) {
  if (!v) return "unknown";
  const s = String(v).toLowerCase().trim();
  if (["safed","d-safe","safe_d","sd"].includes(s)) return "safeD";
  if (["likelyd","d-likely","likely_d","ld"].includes(s)) return "likelyD";
  if (["leand","d-lean","lean_d","lnd"].includes(s)) return "leanD";

  if (["safer","r-safe","safe_r","sr"].includes(s)) return "safeR";
  if (["likelyr","r-likely","likely_r","lr"].includes(s)) return "likelyR";
  if (["leanr","r-lean","lean_r","lnr"].includes(s)) return "leanR";

  if (["tossup","tu","swing"].includes(s)) return "tossup";
  if (["i","ind","independent","other"].includes(s)) return "other";
  return "unknown";
}

// Build a friendly label like "CA-12" or "AK (At-Large)"
function displayLabelFromProps(p, key) {
  if (!key) return p?.NAMELSAD || "—";
  const st = key.slice(0, 2);
  const distNum = parseInt(key.slice(2), 10);
  const atLarge =
    /at[-\s]?large/i.test(p?.NAMELSAD || "") ||
    (p?.CD116FP === "00" || p?.CD118FP === "00" || p?.CD119FP === "00");
  return atLarge ? `${st} (At-Large)` : `${st}-${distNum}`;
}

export default function HouseMap({
  forecastById,
  districtDataById = {}, // candidate data from the page
  TooltipComponent,      // optional override
  onDistrictClick,
  className = "",
  style = {},
  debug = false,
}) {
  const Tip = TooltipComponent || DefaultTooltip;
  const containerRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);

  // Match your tooltip width (e.g. w-80 = 20rem = 320px)
  const TOOLTIP_WIDTH = 320;

  const srcForecast = forecastById || forecastByIdJson || {};
  const normForecast = useMemo(() => {
    const out = {};
    for (const [k, v] of Object.entries(srcForecast)) {
      const nk = normalizeKey(k);
      if (nk) out[nk] = toBucket(v);
    }
    return out;
  }, [srcForecast]);

  const getFill = useMemo(() => {
    return (props) => {
      const key = keyFromProps(props);
      const bucket = (key && normForecast[key]) || "unknown";
      return CAT_FILL[bucket] || CAT_FILL.unknown;
    };
  }, [normForecast]);

  const positionTooltip = (evt, geo) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const p = geo.properties || {};
    const key = keyFromProps(p);
    const bucket = (key && normForecast[key]) || "unknown";
    const districtLabel = displayLabelFromProps(p, key);

    // Prefer passed-in districtDataById; otherwise fallback to forecast bucket label
    const data =
      (key && districtDataById[key]) ||
      { candidates: [], polling: BUCKET_LABEL[bucket] || "—" };

    // Mouse pos relative to container
    const relX = evt.clientX - rect.left;
    const relY = evt.clientY - rect.top;

    // If we're in the right ~40% of the container, nudge tooltip left; else right
    const placeLeft = relX > rect.width * 0.6;
    const xOffset = placeLeft ? -TOOLTIP_WIDTH - 16 : 16;
    const yOffset = -12;

    setTooltip({
      x: relX + xOffset,
      y: relY + yOffset,
      key,
      districtLabel,
      data,
      bucket,
    });
  };

  return (
    <div ref={containerRef} className={`relative ${className}`} style={style}>
      <ComposableMap projection="geoAlbersUsa" style={{ width: "100%", height: "auto" }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const p = geo.properties || {};
              const key = keyFromProps(p);
              const fill = getFill(p);

              if (debug) {
                const f = String(p.fips || "");
                if (f.startsWith("06")) {
                  console.log("DEBUG House forecast:", { props: p, key, bucket: normForecast[key], fill });
                }
              }

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke="#FFFFFF"
                  strokeWidth={0.35}
                  style={{
                    default: { outline: "none", cursor: onDistrictClick ? "pointer" : "default" },
                    hover:   { outline: "none", opacity: 0.9 },
                    pressed: { outline: "none" },
                  }}
                  onClick={() => key && onDistrictClick?.(p, { key, bucket: normForecast[key] || "unknown" })}
                  onMouseEnter={(e) => positionTooltip(e, geo)}
                  onMouseMove={(e) => positionTooltip(e, geo)}
                  onMouseLeave={() => setTooltip(null)}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltip && (
        <div
          style={{
            position: "absolute",
            left: tooltip.x,
            top: tooltip.y,
            pointerEvents: "none",
            zIndex: 1000,
            width: TOOLTIP_WIDTH,
          }}
        >
          {/* Send both label + key so your tooltip can show either */}
          <Tip
            districtKey={tooltip.key}
            districtLabel={tooltip.districtLabel}
            data={tooltip.data}
          />
        </div>
      )}
    </div>
  );
}
