// components/currenthousemap.jsx
import React, { useMemo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import partyMapJson from "../data/house119_party.json"; // <- lives outside /public

const geoUrl = "/geo/house.topo.json"; // make sure this exists in /public/geo

// Palette
const PARTY_FILL = {
  D: "#1C408C",  // Democratic
  R: "#E30022",  // Republican
  I: "#9CA3AF",  // Independent / Other
  U: "#6B7280",  // Unknown / not mapped
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

// Normalize ANY plausible input key to "ST##"
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
  return (
    normalizeKey(p.id) ||
    normalizeKey(p.name) ||
    normalizeKey(p.fips) ||
    null
  );
}

export default function CurrentHouseMap({
  partyById,
  onDistrictClick,
  className = "",
  style = {},
  debug = false,
}) {
  const srcParty = partyById || partyMapJson || {};

  const normPartyMap = useMemo(() => {
    const out = {};
    for (const [k, v] of Object.entries(srcParty)) {
      const nk = normalizeKey(k);
      if (nk) out[nk] = String(v).toUpperCase();
    }
    return out;
  }, [srcParty]);

  const getFill = useMemo(() => {
    return (props) => {
      const key = keyFromProps(props);
      const party = (key && normPartyMap[key]) || "U";
      if (party === "D") return PARTY_FILL.D;
      if (party === "R") return PARTY_FILL.R;
      if (party === "I") return PARTY_FILL.I;
      return PARTY_FILL.U;
    };
  }, [normPartyMap]);

  return (
    <div className={className} style={style}>
      <ComposableMap projection="geoAlbersUsa" style={{ width: "100%", height: "auto" }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const p = geo.properties || {};
              const key = keyFromProps(p);
              const fill = getFill(p);

              if (debug) {
                const fipsStr = String(p.fips || "");
                if (fipsStr.startsWith("01")) {
                  console.log("DEBUG district:", {
                    props: p,
                    parsedKey: key,
                    party: normPartyMap[key],
                    fill
                  });
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
                  onClick={() => onDistrictClick?.(p, { key, party: normPartyMap[key] || "U" })}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {debug && (
        <p className="text-xs text-gray-400 mt-2">
          Debug on — open DevTools Console to see parsed keys & color matches.
        </p>
      )}
    </div>
  );
}
