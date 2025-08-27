import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoMercator } from "d3-geo";
import { feature } from "topojson-client";

// === GOP County Results (all counties here) ===
const repCountyResults = {
  "Sussex": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 10908, percent: "75.4%" },
      { name: "Bill Spadea", votes: 2002, percent: "13.8%" },
      { name: "Jon Bramnick", votes: 879, percent: "6.1%" },
      { name: "Mario Kranjac", votes: 452, percent: "3.1%" },
      { name: "Justin Barbera", votes: 230, percent: "1.6%" }
    ]
  },
  "Passaic": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 15383, percent: "81.6%" },
      { name: "Bill Spadea", votes: 1623, percent: "8.6%" },
      { name: "Jon Bramnick", votes: 811, percent: "4.3%" },
      { name: "Mario Kranjac", votes: 539, percent: "2.9%" },
      { name: "Justin Barbera", votes: 495, percent: "2.6%" }
    ]
  },
  "Bergen": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 30498, percent: "76.9%" },
      { name: "Bill Spadea", votes: 3551, percent: "8.9%" },
      { name: "Jon Bramnick", votes: 3513, percent: "8.8%" },
      { name: "Mario Kranjac", votes: 1661, percent: "4.2%" },
      { name: "Justin Barbera", votes: 452, percent: "1.1%" }
    ]
  },
  "Hudson": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 6845, percent: "72.5%" },
      { name: "Bill Spadea", votes: 864, percent: "9.2%" },
      { name: "Jon Bramnick", votes: 686, percent: "7.3%" },
      { name: "Mario Kranjac", votes: 652, percent: "6.9%" },
      { name: "Justin Barbera", votes: 396, percent: "4.2%" }
    ]
  },
  "Essex": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 10014, percent: "77.3%" },
      { name: "Bill Spadea", votes: 1217, percent: "9.4%" },
      { name: "Jon Bramnick", votes: 918, percent: "7.1%" },
      { name: "Mario Kranjac", votes: 654, percent: "5.0%" },
      { name: "Justin Barbera", votes: 144, percent: "1.1%" }
    ]
  },
  "Union": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 9846, percent: "58.2%" },
      { name: "Bill Spadea", votes: 3429, percent: "20.3%" },
      { name: "Jon Bramnick", votes: 3201, percent: "18.9%" },
      { name: "Mario Kranjac", votes: 297, percent: "1.8%" },
      { name: "Justin Barbera", votes: 147, percent: "0.9%" }
    ]
  },
  "Morris": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 28664, percent: "66.4%" },
      { name: "Bill Spadea", votes: 8297, percent: "19.2%" },
      { name: "Jon Bramnick", votes: 3785, percent: "8.8%" },
      { name: "Mario Kranjac", votes: 1724, percent: "4.0%" },
      { name: "Justin Barbera", votes: 678, percent: "1.6%" }
    ]
  },
  "Warren": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 7419, percent: "66.5%" },
      { name: "Bill Spadea", votes: 2669, percent: "23.9%" },
      { name: "Jon Bramnick", votes: 598, percent: "5.4%" },
      { name: "Mario Kranjac", votes: 332, percent: "3.0%" },
      { name: "Justin Barbera", votes: 145, percent: "1.3%" }
    ]
  },
  "Middlesex": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 17288, percent: "59.2%" },
      { name: "Bill Spadea", votes: 9092, percent: "31.1%" },
      { name: "Jon Bramnick", votes: 1473, percent: "5.0%" },
      { name: "Justin Barbera", votes: 760, percent: "2.6%" },
      { name: "Mario Kranjac", votes: 594, percent: "2.0%" }
    ]
  },
  "Somerset": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 12706, percent: "58.4%" },
      { name: "Bill Spadea", votes: 6624, percent: "30.4%" },
      { name: "Jon Bramnick", votes: 1907, percent: "8.8%" },
      { name: "Mario Kranjac", votes: 357, percent: "1.6%" },
      { name: "Justin Barbera", votes: 173, percent: "0.8%" }
    ]
  },
  "Hunterdon": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 7807, percent: "52.0%" },
      { name: "Bill Spadea", votes: 5806, percent: "38.6%" },
      { name: "Jon Bramnick", votes: 918, percent: "6.1%" },
      { name: "Mario Kranjac", votes: 327, percent: "2.2%" },
      { name: "Justin Barbera", votes: 167, percent: "1.1%" }
    ]
  },
  "Mercer": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 5423, percent: "48.0%" },
      { name: "Bill Spadea", votes: 4577, percent: "40.5%" },
      { name: "Jon Bramnick", votes: 852, percent: "7.5%" },
      { name: "Justin Barbera", votes: 265, percent: "2.4%" },
      { name: "Mario Kranjac", votes: 175, percent: "1.6%" }
    ]
  },
  "Monmouth": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 31475, percent: "63.0%" },
      { name: "Bill Spadea", votes: 14283, percent: "28.6%" },
      { name: "Jon Bramnick", votes: 2163, percent: "4.3%" },
      { name: "Mario Kranjac", votes: 1628, percent: "3.3%" },
      { name: "Justin Barbera", votes: 379, percent: "0.8%" }
    ]
  },
  "Ocean": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 46876, percent: "67.0%" },
      { name: "Bill Spadea", votes: 19394, percent: "27.7%" },
      { name: "Jon Bramnick", votes: 2329, percent: "3.3%" },
      { name: "Justin Barbera", votes: 784, percent: "1.1%" },
      { name: "Mario Kranjac", votes: 545, percent: "0.8%" }
    ]
  },
  "Burlington": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 16643, percent: "62.5%" },
      { name: "Bill Spadea", votes: 7694, percent: "28.9%" },
      { name: "Jon Bramnick", votes: 1488, percent: "5.6%" },
      { name: "Justin Barbera", votes: 398, percent: "1.5%" },
      { name: "Mario Kranjac", votes: 389, percent: "1.5%" }
    ]
  },
  "Atlantic": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 13861, percent: "80.7%" },
      { name: "Bill Spadea", votes: 1731, percent: "10.1%" },
      { name: "Mario Kranjac", votes: 743, percent: "4.3%" },
      { name: "Jon Bramnick", votes: 618, percent: "3.6%" },
      { name: "Justin Barbera", votes: 219, percent: "1.3%" }
    ]
  },
  "Cape May": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 8676, percent: "80.3%" },
      { name: "Bill Spadea", votes: 983, percent: "9.1%" },
      { name: "Jon Bramnick", votes: 627, percent: "5.8%" },
      { name: "Mario Kranjac", votes: 378, percent: "3.5%" },
      { name: "Justin Barbera", votes: 134, percent: "1.2%" }
    ]
  },
  "Camden": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 13659, percent: "71.8%" },
      { name: "Bill Spadea", votes: 3430, percent: "18.0%" },
      { name: "Jon Bramnick", votes: 1143, percent: "6.0%" },
      { name: "Mario Kranjac", votes: 412, percent: "2.2%" },
      { name: "Justin Barbera", votes: 391, percent: "2.0%" }
    ]
  },
  "Gloucester": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 13473, percent: "75.3%" },
      { name: "Bill Spadea", votes: 2861, percent: "16.0%" },
      { name: "Jon Bramnick", votes: 751, percent: "4.2%" },
      { name: "Mario Kranjac", votes: 573, percent: "3.2%" },
      { name: "Justin Barbera", votes: 233, percent: "1.3%" }
    ]
  },
  "Salem": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 3223, percent: "78.7%" },
      { name: "Bill Spadea", votes: 415, percent: "10.1%" },
      { name: "Mario Kranjac", votes: 235, percent: "5.7%" },
      { name: "Jon Bramnick", votes: 176, percent: "4.3%" },
      { name: "Justin Barbera", votes: 47, percent: "1.1%" }
    ]
  },
  "Cumberland": {
    candidates: [
      { name: "Jack Ciattarelli", votes: 5596, percent: "80.2%" },
      { name: "Bill Spadea", votes: 866, percent: "12.4%" },
      { name: "Jon Bramnick", votes: 294, percent: "4.2%" },
      { name: "Mario Kranjac", votes: 115, percent: "1.6%" },
      { name: "Justin Barbera", votes: 106, percent: "1.5%" }
    ]
  }
};

// === County color assignment (Ciattarelli win = red for all) ===
const countyColors = {
  Morris: "#E30022",
  Sussex: "#E30022",
  Hunterdon: "#FF5865",
  Somerset: "#FF5865",
  Monmouth: "#E30022",
  "Cape May": "#E30022",
  Burlington: "#E30022",
  Passaic: "#E30022",
  Hudson: "#E30022",
  Mercer: "#FF5865",
  Middlesex: "#FF5865",
  Ocean: "#E30022",
  Camden: "#E30022",
  Atlantic: "#E30022",
  Warren: "#E30022",
  Gloucester: "#E30022",
  Salem: "#E30022",
  Cumberland: "#E30022",
  Essex: "#E30022",
  Union: "#FF5865",
  Bergen: "#E30022"
};

// === MAIN MAP COMPONENT ===
export default function RepCountyMapNJ() {
  const [geographies, setGeographies] = useState([]);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json")
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
    const data = repCountyResults[countyName];

    setTooltip({
      countyName,
      data: data || { candidates: [] },
      x: evt.clientX + 12,
      y: evt.clientY - 18
    });
  };

  return (
    <div className="relative flex justify-center" style={{ width: "100%" }}>
      <ComposableMap
        projection={geoMercator()
          .center([-74.5, 40.2])
          .scale(12000)
          .translate([450, 400])}
        width={800}
        height={800}
        style={{ width: "800px", height: "800px" }}
      >
        <Geographies geography={{ features: geographies }}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name || geo.properties.NAMELSAD;
              const countyName = name.replace(" County", "").trim();
              const fill = countyColors[countyName] || "#ccc";

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
                    hover: { outline: "none", fill: "#8a1c27" }, // dark red on hover
                    pressed: { outline: "none" }
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
            pointerEvents: "none"
          }}
        >
          <NjGopTooltipBox countyName={tooltip.countyName} data={tooltip.data} />
        </div>
      )}
    </div>
  );
}

// === GOP TOOLTIP COMPONENT ===
function NjGopTooltipBox({ countyName, data }) {
  // Assign color for each candidate (edit as needed)
  const getColor = (name) => {
    if (name.includes("Ciattarelli")) return "#E30022"; // Red
    if (name.includes("Spadea")) return "#1a3d7c";     // Navy
    if (name.includes("Bramnick")) return "#FFA52C";   // Orange
    if (name.includes("Kranjac")) return "#3F704D";    // Green
    if (name.includes("Barbera")) return "#4B0082";    // Indigo
    return "#999"; // fallback gray
  };

  const candidates = Array.isArray(data?.candidates) ? data.candidates : [];

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-300 w-80 p-4 text-sm font-sans text-black">
      <h2 className="bg-gray-800 text-white text-center font-bold py-1 rounded mb-2">
        {countyName}
      </h2>
      {candidates.length > 0 ? (
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="text-left border-b border-gray-300 text-black">
              <th className="pb-1">Candidate</th>
              <th className="text-right pb-1">Votes</th>
              <th className="text-right pb-1">Pct.</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((cand, i) => (
              <tr key={i} className="border-b border-gray-100 text-black">
                <td className="flex items-center space-x-2 py-1">
                  <div
                    style={{
                      backgroundColor: getColor(cand.name),
                      width: "6px",
                      height: "20px",
                      borderRadius: "2px",
                    }}
                  />
                  <span>{cand.name}</span>
                </td>
                <td className="text-right">{cand.votes?.toLocaleString?.() || "—"}</td>
                <td className="text-right">{cand.percent != null ? `${cand.percent}` : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
    </div>
  );
}
