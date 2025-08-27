import React, { useState } from "react";
import { useRouter } from "next/router";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import TooltipBox from "../components/tooltipbox";


const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";


const clickableStates = [
  "Arizona", "Nevada", "Georgia", "Wisconsin", "Michigan", "New Mexico", "Pennsylvania", "Maine", "New York",
  "New Jersey", "Virginia", "Kansas", "Texas", "Ohio", "Iowa", "Alaska", "New Hampshire",
  "California", "Oregon", "Colorado", "Minnesota", "Illinois", "Maryland", "Massachusetts", "Connecticut",
  "Rhode Island", "Hawaii", "Vermont", "South Carolina", "Tennessee", "Alabama", "Arkansas", "Oklahoma",
  "Nebraska", "South Dakota", "Wyoming", "Idaho", "Florida"
];


const noElectionStates = [
  "Utah", "Washington", "Montana", "North Dakota", "Louisiana", "Mississippi",
  "North Carolina", "Kentucky", "Missouri", "Indiana", "West Virginia", "Delaware", "District of Columbia"
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
  const lightPurpleStates = ["Arizona", "Nevada", "Georgia", "Wisconsin", "Michigan"];
  const lightBlueStates = ["New Mexico", "Pennsylvania", "Maine", "New York", "Minnesota", "Virginia"];
  const lighterBlueStates = ["New Jersey",];
  const lighterRedStates = ["Kansas"];
  const lightRedStates = ["Texas", "Ohio", "Iowa", "Alaska", "New Hampshire", "Florida"];
  const cobaltBlueStates = [
    "California", "Oregon", "Colorado", "Illinois",
    "Maryland", "Massachusetts", "Connecticut", "Rhode Island", "Hawaii"
  ];
  const cadmiumRedStates = ["South Carolina", "Tennessee", "Alabama", "Arkansas", "Oklahoma", "Vermont", "Nebraska", "South Dakota", "Wyoming", "Idaho",];


  if (noElectionStates.includes(stateName)) return "#ccc";
  if (lightPurpleStates.includes(stateName)) return "#C26BF7";
  if (lightBlueStates.includes(stateName)) return "#577CCC";
  if (lighterBlueStates.includes(stateName)) return "#8AAFFF";
  if (lighterRedStates.includes(stateName)) return "#FF9395";
  if (lightRedStates.includes(stateName)) return "#FF5865";
  if (cobaltBlueStates.includes(stateName)) return "#1C408C";
  if (cadmiumRedStates.includes(stateName)) return "#E30022";


  return "#eee";
};


const stateData = {
  Virginia: {
    candidates: [
      { name: "Abigail Spanberger (D)", percent: "TBD" },
      { name: "Winsome Earle-Sears (R)", percent: "TBD" }
    ],
    polling: "Lean D"
  },
  "New Jersey": {
    candidates: [
      { name: "Mikie Sherrill (D)", percent: "TBD" },
      { name: "Jack Ciattarelli (R)", percent: "TBD" }
    ],
    polling: "Lean D"
  },
"New Hampshire": {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "Kelly Ayotte (R)", percent: "TBD" }
    ],
    polling: "Likely R"
  },
  Vermont: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "Phill Scott (R)", percent: "TBD" }
    ],
    polling: "Safe R"
  },
    Maine: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Likely D"
  },
    Massachusetts: {
    candidates: [
      { name: "Maura Healey (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe D"
  },
    "Rhode Island": {
    candidates: [
      { name: "Dan McKee (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe D"
  },
    Connecticut: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe D"
  },
    "New York": {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Likely D"
  },
    Pennsylvania: {
    candidates: [
      { name: "Josh Shapiro (D)", percent: "TBD" },
      { name: "Stacy Garrity (R)", percent: "TBD" }
    ],
    polling: "Likely D"
  },
    Maryland: {
    candidates: [
      { name: "Wes Moore (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Safe D"
  },
    Ohio: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" }
    ],
    polling: "Likely R"
  },
    Michigan: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
      { name: "Mike Duggan (I)", percent: "TBD" },
    ],
    polling: "Tossup"
  },
    Wisconsin: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Tossup"
  },
    Illinois: {
    candidates: [
      { name: "J.B. Pritzker (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Safe D"
  },
    Minnesota: {
    candidates: [
      { name: "Tim Walz (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Likely D"
  },
    Iowa: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Likely R"
  },
    Georgia: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Tossup"
  },
    "South Carolina": {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Likely R"
  },
    Florida: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
      { name: "Jason Pizzo (I)", percent: "TBD" },
    ],
    polling: "Likely R"
  },
    Alabama: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Safe R"
  },
    Tennessee: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Safe R"
  },
    Arkansas: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "Sarah Huckabee Sanders (R)", percent: "TBD" },
    ],
    polling: "Safe R"
  },
    Texas: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "Greg Abbott (R)", percent: "TBD" },
    ],
    polling: "Likely R"
  },
    Oklahoma: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Safe R"
  },
    Kansas: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Lean R"
    },
    Nebraska: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "Jim Pillen (R)", percent: "TBD" },
    ],
    polling: "Safe R"
  },
    "South Dakota": {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Safe R"
  },
    Wyoming: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Safe R"
  },
    Idaho: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "Brad Little (R)", percent: "TBD" },
    ],
    polling: "Safe R"
  },
    Colorado: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Safe D"
  },
    "New Mexico": {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Likely D"
  },
    Arizona: {
    candidates: [
      { name: "Katie Hobbs (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Tossup"
},
    Nevada: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "Joe Lombardo (R)", percent: "TBD" },
    ],
    polling: "Tossup"
},
    California: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Safe D"
},
    Oregon: {
    candidates: [
      { name: "Tina Kotek (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Likely D"
},
    Hawaii: {
    candidates: [
      { name: "Josh Green (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Safe D"
},
    Alaska: {
    candidates: [
      { name: "TBD (D)", percent: "TBD" },
      { name: "TBD (R)", percent: "TBD" },
    ],
    polling: "Likely R"
},
};




export default function GovernorMap() {
  const router = useRouter();
  const [tooltip, setTooltip] = useState(null);


  const handleClick = (stateName) => {
    if (!clickableStates.includes(stateName)) return;
    const abbrev = nameToAbbrev[stateName];
    if (abbrev) router.push(`/govpred/${abbrev}GP`);
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


                    const eastCoastStates = new Set([
                      "Maine", "New Hampshire", "Vermont", "Massachusetts", "Rhode Island", "Connecticut",
                      "New York", "New Jersey", "Delaware", "Maryland", "Virginia",
                      "North Carolina", "South Carolina", "Georgia", "Florida", "Pennsylvania", "Michigan",
                      "Tennessee", "Wisconsin", "Ohio", "Illinois", "Minnesota", "Alabama", "Iowa", "Arkansas",
                      "Texas", "Nebraska", "Kansas", "Nebraska", "South Dakota", "Wyoming", "Idaho", "Oklahoma",
                      "Alaska", "Hawaii", "Oregon", "California", "Colorado", "New Mexico", "Arizona", "Nevada"
                    ]);


                    const isEast = eastCoastStates.has(stateName);
                    const { clientX, clientY } = e;
                    const xOffset = isEast ? -260 : 20;
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
