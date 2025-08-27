import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Link from "next/link";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";


const stateColors = {
  CA: "#1C408C", OR: "#1C408C", WA: "#1C408C", HI: "#1C408C", IL: "#1C408C", DC: "#1C408C",
  MD: "#1C408C", DE: "#1C408C", NY: "#1C408C", CT: "#1C408C", RI: "#1C408C", MA: "#1C408C",
  VT: "#1C408C", CO: "#1C408C", NJ: "#577CCF", ME: "#577CCF", NH: "#577CCF", NM: "#577CCF",
  MN: "#577CCF", VA: "#577CCF", NV: "#C26BF7", AZ: "#C26BF7", MI: "#C26BF7", WI: "#C26BF7",
  PA: "#C26BF7", NC: "#C26BF7", GA: "#C26BF7", UT: "#E30022", MT: "#E30022", ID: "#E30022",
  WY: "#E30022", ND: "#E30022", SD: "#E30022", KS: "#E30022", MO: "#E30022", AR: "#E30022",
  LA: "#E30022", MS: "#E30022", AL: "#E30022", SC: "#E30022", IN: "#E30022", KY: "#E30022",
  WV: "#E30022", OK: "#E30022", TN: "#E30022", AK: "#FF5865", TX: "#FF5865", NE: "#E30022",
  FL: "#FF5865", IA: "#FF5865", OH: "#FF5865",
};


const nameToAbbrev = {
  Alabama: "AL", Alaska: "AK", Arizona: "AZ", Arkansas: "AR", California: "CA",
  Colorado: "CO", Connecticut: "CT", Delaware: "DE", Florida: "FL", Georgia: "GA",
  Hawaii: "HI", Idaho: "ID", Illinois: "IL", Indiana: "IN", Iowa: "IA",
  Kansas: "KS", Kentucky: "KY", Louisiana: "LA", Maine: "ME", Maryland: "MD",
  Massachusetts: "MA", Michigan: "MI", Minnesota: "MN", Mississippi: "MS", Missouri: "MO",
  Montana: "MT", Nebraska: "NE", Nevada: "NV", "New Hampshire": "NH", "New Jersey": "NJ",
  "New Mexico": "NM", "New York": "NY", "North Carolina": "NC", "North Dakota": "ND", Ohio: "OH",
  Oklahoma: "OK", Oregon: "OR", Pennsylvania: "PA", "Rhode Island": "RI", "South Carolina": "SC",
  "South Dakota": "SD", Tennessee: "TN", Texas: "TX", Utah: "UT", Vermont: "VT",
  Virginia: "VA", Washington: "WA", "West Virginia": "WV", Wisconsin: "WI", Wyoming: "WY",
  "District of Columbia": "DC"
};


const Map = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <ComposableMap
        projection="geoAlbersUsa"
        style={{ width: "100%", height: "auto" }} // Responsive fill!
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const cur = geo.properties;
              const name = cur.name;
              const abbrev = nameToAbbrev[name];
              const fill = stateColors[abbrev] || "#EEE";
              return (
                <Link key={geo.rsmKey} href={`/state/${abbrev}`}>
                  <Geography
                    geography={geo}
                    fill={fill}
                    stroke="#FFF"
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", opacity: 0.8 },
                      pressed: { outline: "none" },
                    }}
                  />
                </Link>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default Map;
