// components/nyc/nyccountymap.jsx
import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { feature } from "topojson-client";
import { geoMercator } from "d3-geo";
import NycCountyTooltipBox from "./NycCountyTooltipBox";

const topoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

// NYC county FIPS
const NYC_FIPS = new Set(["36005", "36047", "36061", "36081", "36085"]);

// Candidate color map (match tooltip & chart)
const COLORS = {
  Mamdani: "#1C408C", // blue
  Cuomo: "#22c55e",   // green
  Adams: "#8b5cf6",   // purple
  Sliwa: "#E30022",   // red
};

// Example per-borough results (adjust to your model/data)
const nycBoroughResultsMayor = {
  Bronx: {
    candidates: [
      { name: "Zohran Mamdani (D)", percent: "59.0%" },
      { name: "Eric Adams (I)",     percent: "18.0%" },
      { name: "Andrew Cuomo (I)",   percent: "14.0%" },
      { name: "Curtis Sliwa (R)",   percent: "9.0%"  },
    ],
    polling: "Safe D",
  },
  Kings: {
    candidates: [
      { name: "Zohran Mamdani (D)", percent: "62.0%" },
      { name: "Eric Adams (I)",     percent: "17.0%" },
      { name: "Andrew Cuomo (I)",   percent: "13.0%" },
      { name: "Curtis Sliwa (R)",   percent: "8.0%"  },
    ],
    polling: "Safe D",
  },
  "New York": {
    candidates: [
      { name: "Zohran Mamdani (D)", percent: "58.0%" },
      { name: "Andrew Cuomo (I)",   percent: "20.0%" },
      { name: "Eric Adams (I)",     percent: "14.0%" },
      { name: "Curtis Sliwa (R)",   percent: "8.0%"  },
    ],
    polling: "Safe D",
  },
  Queens: {
    candidates: [
      { name: "Zohran Mamdani (D)", percent: "47.0%" },
      { name: "Eric Adams (I)",     percent: "24.0%" },
      { name: "Andrew Cuomo (I)",   percent: "16.0%" },
      { name: "Curtis Sliwa (R)",   percent: "13.0%" },
    ],
    polling: "Lean D",
  },
  Richmond: {
    candidates: [
      { name: "Curtis Sliwa (R)",   percent: "55.0%" },
      { name: "Zohran Mamdani (D)", percent: "24.0%" },
      { name: "Andrew Cuomo (I)",   percent: "13.0%" },
      { name: "Eric Adams (I)",     percent: "8.0%"  },
    ],
    polling: "Likely R",
  },
};

function colorFromWinner(name = "") {
  const n = name.toLowerCase();
  if (n.includes("mamdani")) return COLORS.Mamdani;
  if (n.includes("cuomo"))   return COLORS.Cuomo;
  if (n.includes("adams"))   return COLORS.Adams;
  if (n.includes("sliwa"))   return COLORS.Sliwa;
  return "#6b7280";
}
function winnerFor(boroughKey) {
  const rec = nycBoroughResultsMayor[boroughKey];
  if (!rec || !Array.isArray(rec.candidates)) return { fill: "#6b7280" };
  const top = [...rec.candidates].sort((a, b) => parseFloat(b.percent) - parseFloat(a.percent))[0];
  return { fill: colorFromWinner(top?.name) };
}

export default function NYCCountyMap() {
  const [geographies, setGeographies] = useState([]);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    fetch(topoUrl)
      .then((res) => res.json())
      .then((topo) => {
        const all = feature(topo, topo.objects.counties).features;
        const nyc = all.filter((f) => NYC_FIPS.has(String(f.id)));
        setGeographies(nyc);
      })
      .catch(console.error);
  }, []);

  const handleMouseEnter = (geo, evt) => {
    const raw = geo.properties.name || geo.properties.NAMELSAD || "";
    const boroughKey = raw.replace(" County", "").trim();
    const data = nycBoroughResultsMayor[boroughKey];
    setTooltip({
      boroughName: boroughKey,
      data: data || { candidates: [] },
      x: evt.clientX + 12,
      y: evt.clientY - 18,
    });
  };

  // Keep the SVG/tab size the same; zoom geographies so nothing clips (esp. Staten Island)
  const WIDTH = 640;
  const HEIGHT = 460;
  const PROJ = geoMercator()
    .center([-74.02, 40.69]) // slight west/south shift
    .scale(40000)            // smaller than ~56k so counties appear smaller
    .translate([335, 255]);  // recenter inside the canvas

  return (
    <div className="relative flex justify-center overflow-visible" style={{ width: "100%" }}>
      <ComposableMap projection={PROJ} width={WIDTH} height={HEIGHT} style={{ width: `${WIDTH}px`, height: `${HEIGHT}px` }}>
        <Geographies geography={{ features: geographies }}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const raw = geo.properties.name || geo.properties.NAMELSAD || "";
              const boroughKey = raw.replace(" County", "").trim();
              const { fill } = winnerFor(boroughKey);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke="#ffffff"
                  strokeWidth={0.6}
                  onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
                  onMouseLeave={() => setTooltip(null)}
                  style={{
                    default: { outline: "none", cursor: "pointer" },
                    hover: { outline: "none", fill: "#6e7180ff" },
                    pressed: { outline: "none" },
                  }}
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
            top: tooltip.y,
            left: tooltip.x,
            zIndex: 999,
            pointerEvents: "none",
          }}
        >
          <NycCountyTooltipBox boroughName={tooltip.boroughName} data={tooltip.data} />
        </div>
      )}
    </div>
  );
}
