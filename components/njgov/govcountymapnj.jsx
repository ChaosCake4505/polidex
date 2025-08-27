import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { feature } from "topojson-client";
import { geoMercator } from "d3-geo";
import NjCountyTooltipBox from "./njcountytooltipbox";

const topoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

// Manual prediction data
const njCountyResultsGov = {
  Atlantic: {
    candidates: [
      { name: "Jack Ciattarelli (R)", percent: "52.8%" },
            { name: "Mikie Sherrill (D)", percent: "47.5%" },
    ],
    polling: "Lean R",
  },
  Bergen: {
    candidates: [
      { name: "Mikie Sherrill (D)", percent: "55.3%" },
      { name: "Jack Ciattarelli (R)", percent: "44.7%" },
    ],
    polling: "Likely D",
  },
  Burlington: {
    candidates: [
      { name: "Mikie Sherrill (D)", percent: "54.5%" },
      { name: "Jack Ciattarelli (R)", percent: "45.5%" },
    ],
    polling: "Lean D",
  },
  Camden: {
    candidates: [
      { name: "Mikie Sherrill (D)", percent: "60.1%" },
      { name: "Jack Ciattarelli (R)", percent: "39.9%" },
    ],
    polling: "Safe D",
  },
  "Cape May": {
    candidates: [
      { name: "Jack Ciattarelli (R)", percent: "62.4%" },
      { name: "Mikie Sherrill (D)", percent: "37.6%" },
    ],
    polling: "Safe R",
  },
  Cumberland: {
    candidates: [
      { name: "Jack Ciattarelli (R)", percent: "51.2%" },
      { name: "Mikie Sherrill (D)", percent: "48.8%" },
    ],
    polling: "Lean D",
  },
  Essex: {
    candidates: [
      { name: "Mikie Sherrill (D)", percent: "72.0%" },
      { name: "Jack Ciattarelli (R)", percent: "28.0%" },
    ],
    polling: "Safe D",
  },
  Gloucester: {
    candidates: [
            { name: "Jack Ciattarelli (R)", percent: "50.5%" },
            { name: "Mikie Sherrill (D)", percent: "49.5%" },   ],
    polling: "Tossup",
  },
  Hudson: {
    candidates: [
      { name: "Mikie Sherrill (D)", percent: "70.2%" },
      { name: "Jack Ciattarelli (R)", percent: "29.8%" },
    ],
    polling: "Safe D",
  },
  Hunterdon: {
    candidates: [
      { name: "Jack Ciattarelli (R)", percent: "52.6%" },
      { name: "Mikie Sherrill (D)", percent: "47.4%" },
    ],
    polling: "Lean R",
  },
  Mercer: {
    candidates: [
      { name: "Mikie Sherrill (D)", percent: "62.4%" },
      { name: "Jack Ciattarelli (R)", percent: "37.6%" },
    ],
    polling: "Safe D",
  },
  Middlesex: {
    candidates: [
      { name: "Mikie Sherrill (D)", percent: "58.9%" },
      { name: "Jack Ciattarelli (R)", percent: "41.1%" },
    ],
    polling: "Safe D",
  },
  Monmouth: {
    candidates: [
      { name: "Jack Ciattarelli (R)", percent: "53.8%" },
      { name: "Mikie Sherrill (D)", percent: "46.2%" },
    ],
    polling: "Lean R",
  },
  Morris: {
    candidates: [
      { name: "Mikie Sherrill (D)", percent: "54.7%" },
      { name: "Jack Ciattarelli (R)", percent: "46.3%" },
    ],
    polling: "Likely D",
  },
  Ocean: {
    candidates: [
      { name: "Jack Ciattarelli (R)", percent: "64.3%" },
      { name: "Mikie Sherrill (D)", percent: "35.7%" },
    ],
    polling: "Safe R",
  },
  Passaic: {
    candidates: [
      { name: "Mikie Sherrill (D)", percent: "52.1%" },
      { name: "Jack Ciattarelli (R)", percent: "48.9%" },
    ],
    polling: "Lean D",
  },
  Salem: {
    candidates: [
      { name: "Jack Ciattarelli (R)", percent: "57.9%" },
      { name: "Mikie Sherrill (D)", percent: "42.1%" },
    ],
    polling: "Safe R",
  },
  Somerset: {
    candidates: [
      { name: "Mikie Sherrill (D)", percent: "53.0%" },
      { name: "Jack Ciattarelli (R)", percent: "47.0%" },
    ],
    polling: "Lean D",
  },
  Sussex: {
    candidates: [
      { name: "Jack Ciattarelli (R)", percent: "65.2%" },
      { name: "Mikie Sherrill (D)", percent: "34.8%" },
    ],
    polling: "Safe R",
  },
  Union: {
    candidates: [
      { name: "Mikie Sherrill (D)", percent: "63.7%" },
      { name: "Jack Ciattarelli (R)", percent: "36.3%" },
    ],
    polling: "Safe D",
  },
  Warren: {
    candidates: [
      { name: "Jack Ciattarelli (R)", percent: "61.7%" },
      { name: "Mikie Sherrill (D)", percent: "38.3%" },
    ],
    polling: "Safe R",
  },
};

const countyColors = {
  Atlantic: "#FF9395",
  Bergen: "#577CCC",
  Burlington: "#577CCC",
  Camden: "#1C408C",
  "Cape May": "#E30022",
  Cumberland: "#FF9395",
  Essex: "#1C408C",
  Gloucester: "#E5B39B",
  Hudson: "#1C408C",
  Hunterdon: "#FF9395",
  Mercer: "#1C408C",
  Middlesex: "#1C408C",
  Monmouth: "#FF9395",
  Morris: "#577CCC",
  Ocean: "#E30022",
  Passaic: "#8AAFFF",
  Salem: "#FF5865",
  Somerset: "#577CCC",
  Sussex: "#E30022",
  Union: "#1C408C",
  Warren: "#E30022",
};

export default function GovCountyMapNJ() {
  const [geographies, setGeographies] = useState([]);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    fetch(topoUrl)
      .then((res) => res.json())
      .then((topo) => {
        const njCounties = feature(topo, topo.objects.counties).features.filter((f) =>
          f.id.startsWith("34")
        );
        setGeographies(njCounties);
      })
      .catch(console.error);
  }, []);

  const handleMouseEnter = (geo, evt) => {
    const rawName = geo.properties.name || geo.properties.NAMELSAD;
    const countyName = rawName.replace(" County", "").trim();

    const data = njCountyResultsGov[countyName];
    setTooltip({
      countyName,
      data: data || { candidates: [] },
      x: evt.clientX + 12,
      y: evt.clientY - 18,
    });
  };

  return (
    <div className="relative flex justify-center" style={{ width: "100%" }}>
      <ComposableMap
        projection={geoMercator()
          .center([-74.5, 40.2])
          .scale(12000) // ↑ Bigger scale
          .translate([450, 400])} // ↑ Recenter
        width={800}
        height={800}
        style={{ width: "800px", height: "800px" }}
      >
        <Geographies geography={{ features: geographies }}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name || geo.properties.NAMELSAD;
              const countyName = name.replace(" County", "").trim();
              const fill = countyColors[countyName] || "#1C408C";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke="#fff"
                  strokeWidth={0.5}
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
          <NjCountyTooltipBox countyName={tooltip.countyName} data={tooltip.data} />
        </div>
      )}
    </div>
  );
}
