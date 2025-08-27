// components/njgov/NjCountyTooltipBox.jsx

// Utility to assign color by candidate name
const getColor = (name) => {
  if (name.includes("Sherrill")) return "#1C408C";
  if (name.includes("Ciattarelli")) return "#E30022";
  return "#999"; // fallback
};

export default function NjCountyTooltipBox({ countyName, data }) {
  const candidates = Array.isArray(data?.candidates) ? data.candidates : [];

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-300 w-80 p-4 text-sm font-sans">
      <h2 className="bg-gray-800 text-white text-center font-bold py-1 rounded mb-2">
        {countyName}
      </h2>

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
                  <span className="font-semibold text-black">{cand.name}</span>
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
          No candidate data for {countyName}
        </div>
      )}
    </div>
  );
}
