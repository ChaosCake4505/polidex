import React, { useState } from "react";
import { useRouter } from "next/router";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import TooltipBox from "../components/tooltipbox";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const clickableStates = [
  "Oregon", "Alaska", "Idaho", "Montana", "Wyoming", "South Dakota", "Kansas", "Texas", "Nebraska",
  "Oklahoma", "Louisiana", "Colorado", "New Mexico", "Arkansas", "Mississippi", "Alabama", "Georgia",
  "Florida", "South Carolina", "North Carolina", "Tennessee", "Kentucky", "Virginia", "Delaware", "Iowa",
  "Minnesota", "Michigan", "Ohio", "West Virginia", "Illinois", "New Jersey", "New Hampshire",
  "Rhode Island", "Maine", "Massachusetts"
];

const nameToAbbrev = {
  Alabama: "al", Alaska: "ak", Arizona: "az", Arkansas: "ar", California: "ca", Colorado: "co", Connecticut: "ct",
  Delaware: "de", Florida: "fl", Georgia: "ga", Hawaii: "hi", Idaho: "id", Illinois: "il", Indiana: "in",
  Iowa: "ia", Kansas: "ks", Kentucky: "ky", Louisiana: "la", Maine: "me", Maryland: "md", Massachusetts: "ma",
  Michigan: "mi", Minnesota: "mn", Mississippi: "ms", Missouri: "mo", Montana: "mt", Nebraska: "ne", Nevada: "nv",
  "New Hampshire": "nh", "New Jersey": "nj", "New Mexico": "nm", "New York": "ny", "North Carolina": "nc",
  "North Dakota": "nd", Ohio: "oh", Oklahoma: "ok", Oregon: "or", Pennsylvania: "pa", "Rhode Island": "ri",
  "South Carolina": "sc", "South Dakota": "sd", Tennessee: "tn", Texas: "tx", Utah: "ut", Vermont: "vt",
  Virginia: "va", Washington: "wa", "West Virginia": "wv", Wisconsin: "wi", Wyoming: "wy",
  "District of Columbia": "dc"
};

const getFillColor = (stateName) => {
  const tossupStates = ["Georgia", "Michigan"];
  const likelyDemStates = ["New Mexico", "Virginia", "New Hampshire", "New Jersey"];
  const likelyGOPStates = ["Texas", "Nebraska", "Florida", "Iowa", "Alaska"];
  const leandem = ["North Carolina"]
  const leangop = ["Ohio", "Maine"];
  const safedem = ["Oregon", "Delaware", "Colorado", "Illinois", "Minnesota", "Rhode Island", "Massachusetts"];
  const safegop = ["Idaho", "Wyoming", "Montana", "South Dakota", "Kansas", "Oklahoma", "Louisiana", "Arkansas", "Mississippi", "Alabama", "South Carolina", "West Virginia", "Tennessee", "Kentucky"];

  if (safedem.includes(stateName)) return "#1C408C";
  if (safegop.includes(stateName)) return "#E30022";
  if (tossupStates.includes(stateName)) return "#C26BF7";
  if (likelyDemStates.includes(stateName)) return "#577CCC";
  if (likelyGOPStates.includes(stateName)) return "#FF5865";
  if (leangop.includes(stateName)) return "#FF9395";
  if (leandem.includes(stateName)) return "#8AAFFF";


  return "#ccc";
};

const stateData = {
  Nebraska: {
    candidates: [
      { name: "Dan Osborn (I)", percent: "TBD" },
      { name: "Pete Rickets (R)", percent: "TBD" }
    ],
    polling: "Likely R"
  },
 Texas: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Likely R"
  },
   Oregon: {
    candidates: [
     { name: "Jeff Merkley (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe D"
  },
 Alaska: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "Dan Sullivan (R)", percent: "TBD" }
    ],
    polling: "Likely R"
  },
 Idaho: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "Jim Risch (R)", percent: "TBD" }
    ],
    polling: "Safe R"
  },
 Montana: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "Steve Daines (R)", percent: "TBD" }
    ],
    polling: "Safe R"
  },
 Wyoming: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "Cynthia Lummis (R)", percent: "TBD" }
    ],
    polling: "Safe R"
  },
 "South Dakota": {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "Mike Rounds (R)", percent: "TBD" }
    ],
    polling: "Safe R"
  },
 Kansas: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "Rodger Marshall (R)", percent: "TBD" }
    ],
    polling: "Safe R"
  },
 Colorado: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe D"
  },
 "New Mexico": {
    candidates: [
     { name: "Ben Ray Luján (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Likely R"
  },
 Oklahoma: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe R"
  },
 Minnesota: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe D"
  },
 Iowa: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Likely R"
  },
 Michigan: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "Mike Rogers (R)", percent: "TBD" }
    ],
    polling: "Tossup"
  },
 Illinois: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe D"
  },
 Ohio: {
    candidates: [
     { name: "Sherrod Brown (D)", percent: "TBD" },
      { name: "Jon Husted (R)", percent: "TBD" }
    ],
    polling: "Lean R"
  },
 Delaware: {
    candidates: [
     { name: "Chris Coons (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe D"
  },
 "New Jersey": {
    candidates: [
     { name: "Cory Booker (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Likely D"
  },
 "Rhode Island": {
    candidates: [
     { name: "Jack Reed (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe D"
  },
 Massachusetts: {
    candidates: [
     { name: "Ed Markey (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe D"
  },
 "New Hampshire": {
    candidates: [
     { name: "Chris Pappas (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Likely D"
  },
 Maine: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "Susan Collins (R)", percent: "TBD" }
    ],
    polling: "Tossup"
  },
 "West Virginia": {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe R"
  },
 Tennessee: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "Bill Hagerty (R)", percent: "TBD" }
    ],
    polling: "Safe R"
  },
 Kentucky: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe R"
  },
 Arkansas: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "Tom Cotton (R)", percent: "TBD" }
    ],
    polling: "Safe R"
  },
 Louisiana: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe R"
  },
  Mississippi: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "Cindy Hyde-Smith (R)", percent: "TBD" }
    ],
    polling: "Safe R"
  },
 Alabama: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe R"
  },
 Virginia: {
    candidates: [
     { name: "Mark Warner (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Likely D"
  },
 "North Carolina": {
    candidates: [
     { name: "Roy Cooper (D)", percent: "TBD" },
      { name: "Michael Whatley (R)", percent: "TBD" }
    ],
    polling: "Lean D"
  },
 "South Carolina": {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe R"
  },
 Georgia: {
    candidates: [
     { name: "Jon Ossoff (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Tossup"
  },
 Florida: {
    candidates: [
     { name: "TBD (D)", percent: "TBD" },
      { name: "Ashley Moody (R)", percent: "TBD" }
    ],
    polling: "Likely R"
  },
};

export default function SenateMap() {
  const router = useRouter();
  const [tooltip, setTooltip] = useState(null);

  const handleClick = (stateName) => {
    if (!clickableStates.includes(stateName)) return;
    const abbrev = nameToAbbrev[stateName];
    if (abbrev) router.push(`/senpred/${abbrev}SP`);
  };

  return (
    <div className="relative">
      <ComposableMap projection="geoAlbersUsa" style={{ width: "100%", height: "auto" }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName = geo.properties.name;
              const isInteractive = clickableStates.includes(stateName);
              const fill = getFillColor(stateName);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke="#fff"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none", cursor: isInteractive ? "pointer" : "default" },
                    hover: { outline: "none", opacity: isInteractive ? 0.8 : 1 },
                    pressed: { outline: "none" }
                  }}
                  onMouseEnter={(e) => {
                    if (!isInteractive) return;

                    const { clientX, clientY } = e;
                    const xOffset = -260;
                    const yOffset = -10;

                    setTooltip({
                      x: clientX + xOffset,
                      y: clientY + yOffset,
                      stateName,
                      data: stateData[stateName]
                    });
                  }}
                  onMouseLeave={() => setTooltip(null)}
                  onClick={() => handleClick(stateName)}
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
            zIndex: 1000
          }}
        >
          <TooltipBox stateName={tooltip.stateName} data={tooltip.data} />
        </div>
      )}
    </div>
  );
}
