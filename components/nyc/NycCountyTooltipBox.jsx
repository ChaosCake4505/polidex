// components/nyc/NycCountyTooltipBox.jsx

const BORO_DISPLAY = {
  Bronx: "Bronx",
  Kings: "Brooklyn",
  "New York": "Manhattan",
  Queens: "Queens",
  Richmond: "Staten Island",
};

// Cuomo -> green; names NOT bold
const getColor = (name = "") => {
  const n = name.toLowerCase();
  if (n.includes("mamdani")) return "#1C408C";
  if (n.includes("cuomo"))   return "#22c55e";
  if (n.includes("adams"))   return "#8b5cf6";
  if (n.includes("sliwa"))   return "#E30022";
  return "#999";
};

export default function NycCountyTooltipBox({ boroughName, data }) {
  const candidates = Array.isArray(data?.candidates) ? data.candidates : [];
  const title = BORO_DISPLAY[boroughName] || boroughName || "—";

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-300 w-80 p-4 text-sm font-sans">
      <h2 className="bg-gray-800 text-white text-center font-bold py-1 rounded mb-2">
        {title}
      </h2>

      {data?.polling && (
        <div className="text-center text-xs text-gray-600 mb-2">
          Status: <span className="font-semibold">{data.polling}</span>
        </div>
      )}

      {candidates.length > 0 ? (
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="text-left border-b border-gray-300 text-black">
              <th className="pb-1 text-black">Candidate</th>
              <th className="text-right pb-1 text-black">Votes</th>
              <th className="text-right pb-1 text-black">Pct.</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((cand, i) => (
              <tr key={i} className="border-b border-gray-100 text-black">
                <td className="flex items-center space-x-2 py-1 text-black">
                  <div
                    style={{
                      backgroundColor: getColor(cand.name),
                      width: "6px",
                      height: "20px",
                      borderRadius: "2px",
                      flexShrink: 0,
                    }}
                  />
                  {/* names NOT bold */}
                  <span className="text-black">{cand.name}</span>
                </td>
                <td className="text-right text-black">
                  {typeof cand.votes === "number"
                    ? cand.votes.toLocaleString()
                    : "—"}
                </td>
                <td className="text-right font-bold text-black">
                  {cand.percent || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-gray-500 text-center py-2">
          No candidate data for {title}
        </div>
      )}
    </div>
  );
}
