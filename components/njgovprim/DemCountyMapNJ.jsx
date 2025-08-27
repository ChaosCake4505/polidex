import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoMercator } from "d3-geo";
import { feature } from "topojson-client";
import NjCountyTooltipBox from "./CountyTooltipBox"; // or wherever you define this

const topoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const countyResults = {
  "Sussex": {
    "candidates": [
      {
        "name": "Mikie Sherrill",
        "votes": 4092,
        "percent": "43.6%"
      },
      {
        "name": "Josh Gottheimer",
        "votes": 2085,
        "percent": "22.2%"
      },
      {
        "name": "Steve Fulop",
        "votes": 1086,
        "percent": "11.6%"
      },
      {
        "name": "Sean Spiller",
        "votes": 1012,
        "percent": "10.8%"
      },
      {
        "name": "Ras Baraka",
        "votes": 992,
        "percent": "10.6%"
      },
      {
        "name": "Steve Sweeney",
        "votes": 116,
        "percent": "1.2%"
      }
    ]
  },
  "Passaic": {
    "candidates": [
      {
        "name": "Mikie Sherrill",
        "votes": 12717,
        "percent": "35.7%"
      },
      {
        "name": "Ras Baraka",
        "votes": 10785,
        "percent": "30.3%"
      },
      {
        "name": "Sean Spiller",
        "votes": 4355,
        "percent": "12.2%"
      },
      {
        "name": "Josh Gottheimer",
        "votes": 3801,
        "percent": "10.7%"
      },
      {
        "name": "Steve Fulop",
        "votes": 3477,
        "percent": "9.8%"
      },
      {
        "name": "Steve Sweeney",
        "votes": 479,
        "percent": "1.3%"
      }
    ]
  },
  "Bergen": {
    "candidates": [
      {
        "name": "Josh Gottheimer",
        "votes": 30786,
        "percent": "37.1%"
      },
      {
        "name": "Mikie Sherrill",
        "votes": 18907,
        "percent": "22.8%"
      },
      {
        "name": "Steve Fulop",
        "votes": 14664,
        "percent": "17.7%"
      },
      {
        "name": "Ras Baraka",
        "votes": 13313,
        "percent": "16.0%"
      },
      {
        "name": "Sean Spiller",
        "votes": 4560,
        "percent": "5.5%"
      },
      {
        "name": "Steve Sweeney",
        "votes": 773,
        "percent": "0.9%"
      }
    ]
  },
  "Hudson": {
    "candidates": [
      {
        "name": "Mikie Sherrill",
        "votes": 25090,
        "percent": "34.4%"
      },
      {
        "name": "Steve Fulop",
        "votes": 20925,
        "percent": "28.7%"
      },
      {
        "name": "Ras Baraka",
        "votes": 16002,
        "percent": "21.9%"
      },
      {
        "name": "Josh Gottheimer",
        "votes": 5476,
        "percent": "7.5%"
      },
      {
        "name": "Sean Spiller",
        "votes": 4274,
        "percent": "5.9%"
      },
      {
        "name": "Steve Sweeney",
        "votes": 1155,
        "percent": "1.6%"
      }
    ]
  },
  "Essex": {
    "candidates": [
      {
        "name": "Ras Baraka",
        "votes": 37836,
        "percent": "40.2%"
      },
      {
        "name": "Mikie Sherrill",
        "votes": 31758,
        "percent": "33.7%"
      },
      {
        "name": "Steve Fulop",
        "votes": 12728,
        "percent": "13.5%"
      },
      {
        "name": "Josh Gottheimer",
        "votes": 6293,
        "percent": "6.7%"
      },
      {
        "name": "Sean Spiller",
        "votes": 4755,
        "percent": "5.0%"
      },
      {
        "name": "Steve Sweeney",
        "votes": 765,
        "percent": "0.8%"
      }
    ]
  },
  "Union": {
    "candidates": [
      {
        "name": "Ras Baraka",
        "votes": 20393,
        "percent": "36.3%"
      },
      {
        "name": "Mikie Sherrill",
        "votes": 15986,
        "percent": "28.5%"
      },
      {
        "name": "Steve Fulop",
        "votes": 8293,
        "percent": "14.8%"
      },
      {
        "name": "Sean Spiller",
        "votes": 6223,
        "percent": "11.1%"
      },
      {
        "name": "Josh Gottheimer",
        "votes": 4182,
        "percent": "7.5%"
      },
      {
        "name": "Steve Sweeney",
        "votes": 1063,
        "percent": "1.9%"
      }
    ]
  },
  "Morris": {
    "candidates": [
      {
        "name": "Mikie Sherrill",
        "votes": 28005,
        "percent": "62.0%"
      },
      {
        "name": "Steve Fulop",
        "votes": 5438,
        "percent": "12.1%"
      },
      {
        "name": "Ras Baraka",
        "votes": 4684,
        "percent": "10.4%"
      },
      {
        "name": "Josh Gottheimer",
        "votes": 3737,
        "percent": "8.3%"
      },
      {
        "name": "Sean Spiller",
        "votes": 2773,
        "percent": "6.1%"
      },
      {
        "name": "Steve Sweeney",
        "votes": 506,
        "percent": "1.1%"
      }
    ]
  },
  "Warren": {
    "candidates": [
      {
        "name": "Mikie Sherrill",
        "votes": 2581,
        "percent": "35.4%"
      },
      {
        "name": "Josh Gottheimer",
        "votes": 1652,
        "percent": "22.7%"
      },
      {
        "name": "Steve Fulop",
        "votes": 1078,
        "percent": "14.8%"
      },
      {
        "name": "Ras Baraka",
        "votes": 962,
        "percent": "13.2%"
      },
      {
        "name": "Sean Spiller",
        "votes": 829,
        "percent": "11.4%"
      },
      {
        "name": "Steve Sweeney",
        "votes": 189,
        "percent": "2.6%"
      }
    ]
  },
    Burlington: {
    candidates: [
      { name: "Mikie Sherrill", votes: 16937, percent: "33.9%" },
      { name: "Steve Sweeney", votes: 8396, percent: "16.8%" },
      { name: "Ras Baraka", votes: 8360, percent: "16.7%" },
      { name: "Sean Spiller", votes: 8274, percent: "16.6%" },
      { name: "Steve Fulop", votes: 5185, percent: "10.4%" },
      { name: "Josh Gottheimer", votes: 2789, percent: "5.6%" }
    ]
  },
  Atlantic: {
    candidates: [
      { name: "Mikie Sherrill", votes: 5326, percent: "24.1%" },
      { name: "Steve Sweeney", votes: 4218, percent: "19.1%" },
      { name: "Sean Spiller", votes: 4096, percent: "18.6%" },
      { name: "Ras Baraka", votes: 3805, percent: "17.3%" },
      { name: "Steve Fulop", votes: 3418, percent: "15.5%" },
      { name: "Josh Gottheimer", votes: 1188, percent: "5.4%" }
    ]
  },
  Cape_May: {
    candidates: [
      { name: "Mikie Sherrill", votes: 2819, percent: "38.7%" },
      { name: "Sean Spiller", votes: 1360, percent: "18.7%" },
      { name: "Steve Sweeney", votes: 1328, percent: "18.2%" },
      { name: "Steve Fulop", votes: 985, percent: "13.5%" },
      { name: "Josh Gottheimer", votes: 456, percent: "6.3%" },
      { name: "Ras Baraka", votes: 334, percent: "4.6%" }
    ]
  },
  Cumberland: {
    candidates: [
      { name: "Sean Spiller", votes: 2197, percent: "25.3%" },
      { name: "Steve Sweeney", votes: 2075, percent: "23.9%" },
      { name: "Mikie Sherrill", votes: 1696, percent: "19.5%" },
      { name: "Ras Baraka", votes: 1483, percent: "17.1%" },
      { name: "Steve Fulop", votes: 705, percent: "8.1%" },
      { name: "Josh Gottheimer", votes: 525, percent: "6.0%" }
    ]
  },
  Salem: {
    candidates: [
      { name: "Steve Sweeney", votes: 1669, percent: "40.0%" },
      { name: "Mikie Sherrill", votes: 809, percent: "19.4%" },
      { name: "Sean Spiller", votes: 709, percent: "17.0%" },
      { name: "Ras Baraka", votes: 355, percent: "8.5%" },
      { name: "Steve Fulop", votes: 322, percent: "7.7%" },
      { name: "Josh Gottheimer", votes: 304, percent: "7.3%" }
    ]
  },
  Gloucester: {
    candidates: [
      { name: "Steve Sweeney", votes: 13527, percent: "40.4%" },
      { name: "Mikie Sherrill", votes: 7482, percent: "22.4%" },
      { name: "Sean Spiller", votes: 5455, percent: "16.3%" },
      { name: "Ras Baraka", votes: 2987, percent: "8.9%" },
      { name: "Steve Fulop", votes: 2361, percent: "7.0%" },
      { name: "Josh Gottheimer", votes: 1665, percent: "5.0%" }
    ]
  },
  Camden: {
    candidates: [
      { name: "Mikie Sherrill", votes: 15462, percent: "24.2%" },
      { name: "Steve Sweeney", votes: 14820, percent: "23.2%" },
      { name: "Sean Spiller", votes: 14569, percent: "22.8%" },
      { name: "Ras Baraka", votes: 7785, percent: "12.2%" },
      { name: "Steve Fulop", votes: 6684, percent: "10.4%" },
      { name: "Josh Gottheimer", votes: 4629, percent: "7.2%" }
    ]
  },
  Mercer: {
    candidates: [
      { name: "Mikie Sherrill", votes: 13928, percent: "37.5%" },
      { name: "Ras Baraka", votes: 8232, percent: "22.1%" },
      { name: "Steve Fulop", votes: 6438, percent: "17.3%" },
      { name: "Sean Spiller", votes: 4678, percent: "12.6%" },
      { name: "Josh Gottheimer", votes: 2374, percent: "6.4%" },
      { name: "Steve Sweeney", votes: 1520, percent: "4.1%" }
    ]
  },
  Hunterdon: {
    candidates: [
      { name: "Mikie Sherrill", votes: 6223, percent: "50.3%" },
      { name: "Steve Fulop", votes: 2264, percent: "18.3%" },
      { name: "Ras Baraka", votes: 1542, percent: "12.4%" },
      { name: "Sean Spiller", votes: 1106, percent: "8.9%" },
      { name: "Josh Gottheimer", votes: 903, percent: "7.3%" },
      { name: "Steve Sweeney", votes: 343, percent: "2.8%" }
    ]
  },
  Middlesex: {
    candidates: [
      { name: "Mikie Sherrill", votes: 26648, percent: "34.6%" },
      { name: "Steve Fulop", votes: 16387, percent: "21.3%" },
      { name: "Ras Baraka", votes: 15934, percent: "20.7%" },
      { name: "Josh Gottheimer", votes: 8007, percent: "10.4%" },
      { name: "Sean Spiller", votes: 7664, percent: "9.9%" },
      { name: "Steve Sweeney", votes: 2399, percent: "3.1%" }
    ]
  },
  Somerset: {
    candidates: [
      { name: "Mikie Sherrill", votes: 13162, percent: "41.4%" },
      { name: "Ras Baraka", votes: 7603, percent: "23.9%" },
      { name: "Steve Fulop", votes: 4848, percent: "15.2%" },
      { name: "Sean Spiller", votes: 3003, percent: "9.4%" },
      { name: "Josh Gottheimer", votes: 2458, percent: "7.7%" },
      { name: "Steve Sweeney", votes: 749, percent: "2.4%" }
    ]
  },
  Monmouth: {
    candidates: [
      { name: "Mikie Sherrill", votes: 21908, percent: "44.4%" },
      { name: "Steve Fulop", votes: 9895, percent: "20.1%" },
      { name: "Ras Baraka", votes: 7145, percent: "14.5%" },
      { name: "Josh Gottheimer", votes: 4798, percent: "9.7%" },
      { name: "Sean Spiller", votes: 4154, percent: "8.4%" },
      { name: "Steve Sweeney", votes: 1421, percent: "2.9%" }
    ]
  },
  Ocean: {
    candidates: [
      { name: "Mikie Sherrill", votes: 14708, percent: "36.3%" },
      { name: "Josh Gottheimer", votes: 9276, percent: "22.9%" },
      { name: "Steve Fulop", votes: 7392, percent: "18.2%" },
      { name: "Sean Spiller", votes: 3426, percent: "8.4%" },
      { name: "Ras Baraka", votes: 3419, percent: "8.4%" },
      { name: "Steve Sweeney", votes: 2300, percent: "5.7%" }
    ]
  }}


const countyColors = {
  Morris: "#69359c",
  Sussex: "#69359c",
  Hunterdon: "#69359c",
  Somerset: "#69359c",
  Monmouth: "#69359c",
  "Cape May": "#69359c",
  Burlington: "#69359c",
  Passaic: "#9370DB",
  Hudson: "#9370DB",
  Mercer: "#9370DB",
  Middlesex: "#9370DB",
  Ocean: "#9370DB",
  Camden: "#9370DB",
  Atlantic: "#9370DB",
  Warren: "#9370DB",
  Gloucester: "#3F704D",
  Salem: "#3F704D",
  Cumberland: "#FFC0CB",
  Essex: "#FFA52C",
  Union: "#FFA52C",
  Bergen: "#B22222"
};
export default function DemCountyMapNJ() {
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
    const data = countyResults[countyName];

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
          .scale(12000) // ← Match state map
          .translate([450, 400])} // ← Match state map
        width={800} // ← Match state map
        height={800} // ← Match state map
        style={{ width: "800px", height: "800px" }} // ← Match state map
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
                    hover: { outline: "none", fill: "#6e7180ff" },
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
          <NjCountyTooltipBox countyName={tooltip.countyName} data={tooltip.data} />
        </div>
      )}
    </div>
  );
}
