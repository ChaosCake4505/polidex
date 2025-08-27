import { useRouter } from "next/router";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const blueStates = [
  "Oregon", "California", "Colorado", "Arizona", "New Mexico", "Kansas", "Minnesota",
  "Wisconsin", "Hawaii", "Illinois", "Michigan", "Pennsylvania", "Maryland", "New York",
  "New Jersey", "Connecticut", "Rhode Island", "Massachusetts", "Maine",
  "Washington", "Delaware", "Kentucky", "North Carolina"
];

const redStates = [
  "Alaska", "Nevada", "Idaho", "Wyoming", "Nebraska", "South Dakota", "Iowa", "Ohio",
  "Oklahoma", "Texas", "Arkansas", "Tennessee", "Alabama", "Georgia", "South Carolina",
  "Florida", "Vermont", "New Hampshire", "Utah", "Montana", "North Dakota", "Missouri",
  "Louisiana", "Mississippi", "Indiana", "Virginia", "West Virginia"
];

const stateLinks = {
  "Alabama": "/leader/ivey",
  "Alaska": "/leader/dunleavy",
  "Arizona": "/leader/hobbs",
  "Arkansas": "/leader/hsanders",
  "California": "/leader/newsom",
  "Colorado": "/leader/polis",
  "Connecticut": "/leader/lamont",
  "Delaware": "/leader/meyer",
  "Florida": "/leader/deSantis",
  "Georgia": "/leader/kemp",
  "Hawaii": "/leader/green",
  "Idaho": "/leader/little",
  "Illinois": "/leader/pritzker",
  "Indiana": "/leader/braun",
  "Iowa": "/leader/reynolds",
  "Kansas": "/leader/lkelly",
  "Kentucky": "/leader/beshear",
  "Louisiana": "/leader/landry",
  "Maine": "/leader/mills",
  "Maryland": "/leader/moore",
  "Massachusetts": "/leader/healey",
  "Michigan": "/leader/whitmer",
  "Minnesota": "/leader/walz",
  "Mississippi": "/leader/reeves",
  "Missouri": "/leader/parson",
  "Montana": "/leader/gianforte",
  "Nebraska": "/leader/pillen",
  "Nevada": "/leader/lombardo",
  "New Hampshire": "/leader/ayotte",
  "New Jersey": "/leader/murphy",
  "New Mexico": "/leader/grisham",
  "New York": "/leader/hochul",
  "North Carolina": "/leader/stein",
  "North Dakota": "/leader/armstrong",
  "Ohio": "/leader/dewine",
  "Oklahoma": "/leader/stitt",
  "Oregon": "/leader/kotek",
  "Pennsylvania": "/leader/shapiro",
  "Rhode Island": "/leader/mckee",
  "South Carolina": "/leader/mccmaster",
  "South Dakota": "/leader/rhoden",
  "Tennessee": "/leader/blee",
  "Texas": "/leader/abbott",
  "Utah": "/leader/cox",
  "Vermont": "/leader/pscott",
  "Virginia": "/leader/youngkin",
  "Washington": "/leader/inslee",
  "West Virginia": "/leader/morrisey",
  "Wisconsin": "/leader/evers",
  "Wyoming": "/leader/gordon"
};


export default function CurrentGovernorsMap() {
  const router = useRouter();

  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const stateName = geo.properties.name;

            let fill = "#ccc";
            if (blueStates.includes(stateName)) {
              fill = "#1C408C";
            } else if (redStates.includes(stateName)) {
              fill = "#E30022";
            }

            const link = stateLinks[stateName];

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={fill}
                stroke="#FFF"
                strokeWidth={0.5}
                onClick={() => {
                  if (link) {
                    router.push(link);
                  }
                }}
                style={{
                  default: { outline: "none", cursor: link ? "pointer" : "default" },
                  hover: { outline: "none", opacity: 0.8 },
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
