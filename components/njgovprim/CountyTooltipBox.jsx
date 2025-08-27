import React from "react";

// Map candidate name to their unique color
const getColor = (name) => {
  if (name.includes("Sherrill")) return "#69359c";
  if (name.includes("Ciattarelli")) return "#E30022";
  if (name.includes("Baraka")) return "#FFA52C";
  if (name.includes("Sweeney")) return "#3F704D";
  if (name.includes("Spiller")) return "#FFC0CB";
  if (name.includes("Gottheimer")) return "#B22222";
  if (name.includes("Fulop")) return "#5AC8FA";
  return "#999"; // fallback gray
};

export default function CountyTooltipBox({ countyName, data }) {
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
