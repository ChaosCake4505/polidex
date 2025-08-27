import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { PatternLines } from "@visx/pattern";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const blueStates = ["California", "Hawaii", "Oregon", "Washington", "Nevada", "Arizona", "New Mexico", "Colorado", "Georgia", "Virginia", "Michigan", "Minnesota", "Illinois", "Maryland", "Delaware", "New Jersey", "New York", "Connecticut", "Massachusetts", "Rhode Island", "New Hampshire"];
const redStates = ["Alaska", "Idaho", "Utah", "Montana", "Wyoming", "North Dakota", "South Dakota", "Nebraska", "Kansas", "Oklahoma", "Texas", "Louisiana", "Arkansas", "Tennessee", "Mississippi", "Alabama", "Florida", "North Carolina", "South Carolina", "Kentucky", "Iowa", "Ohio", "Indiana", "West Virginia", "Missouri"];
const halfBlueRedStates = ["Wisconsin", "Pennsylvania"];
const halfBlueGrayStates = ["Vermont"];
const halfRedGrayStates = ["Maine"];

export default function CurrentSenateMap() {
  return (
    <ComposableMap projection="geoAlbersUsa">
      <defs>
        <PatternLines
          id="halfBlueRed"
          height={6}
          width={6}
          stroke="#1C408C"
          strokeWidth={2}
          background="#E30022"
          orientation={["diagonal"]}
        />
        <PatternLines
          id="halfBlueGray"
          height={6}
          width={6}
          stroke="#1C408C"
          strokeWidth={2}
          background="#ccc"
          orientation={["diagonal"]}
        />
        <PatternLines
          id="halfRedGray"
          height={6}
          width={6}
          stroke="#E30022"
          strokeWidth={2}
          background="#ccc"
          orientation={["diagonal"]}
        />
      </defs>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const stateName = geo.properties.name;

            let fill = "#ccc";

            if (blueStates.includes(stateName)) {
              fill = "#1C408C";
            } else if (redStates.includes(stateName)) {
              fill = "#E30022";
            } else if (halfBlueRedStates.includes(stateName)) {
              fill = "url(#halfBlueRed)";
            } else if (halfBlueGrayStates.includes(stateName)) {
              fill = "url(#halfBlueGray)";
            } else if (halfRedGrayStates.includes(stateName)) {
              fill = "url(#halfRedGray)";
            }

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={fill}
                stroke="#FFF"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none", cursor: "default" },
                  hover: { outline: "none", opacity: 0.9 },
                  pressed: { outline: "none" },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}
