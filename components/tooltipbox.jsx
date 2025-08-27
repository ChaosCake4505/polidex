import React from "react";

// Map candidate name to their unique color
const getColor = (name) => {
  if (name.includes("Sherrill")) return "#1C408C";
  if (name.includes("Ciattarelli")) return "#E30022";
  if (name.includes("Spanberger")) return "#1C408C";
  if (name.includes("Earle-Sears")) return "#E30022";
  if (name.includes("Ayotte")) return "#E30022";
  if (name.includes("Phill")) return "#E30022";
  if (name.includes("Healey")) return "#1C408C";
  if (name.includes("McKee")) return "#1C408C";
  if (name.includes("Shapiro")) return "#1C408C";
  if (name.includes("Moore")) return "#1C408C";
  if (name.includes("Pritzker")) return "#1C408C";
  if (name.includes("Walz")) return "#1C408C";
  if (name.includes("(D)")) return "#1C408C";
  if (name.includes("(R)")) return "#E30022";


  // Add more mappings as needed
  return "#999"; // fallback gray
};

export default function TooltipBox({ stateName, data }) {
  const candidates = Array.isArray(data?.candidates) ? data.candidates : [];

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-300 w-80 p-4 text-sm font-sans text-black">
      <h2 className="bg-gray-800 text-white text-center font-bold py-1 rounded mb-2">
        {stateName}
      </h2>

      <table className="w-full border-collapse text-xs">
        <thead>
          <tr className="text-left border-b border-gray-300 text-black">
            <th className="pb-1">Candidate</th>
            <th className="text-right pb-1">%</th>
          </tr>
        </thead>
        <tbody>
          {candidates.length > 0 ? (
            candidates.map((cand, i) => (
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
                <td className="text-right">{cand.percent}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-gray-500 text-center py-2">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mt-2 text-xs text-gray-700 flex justify-between items-center">
        <span>Polling Average:</span>
        <span className="bg-orange-200 text-orange-800 font-bold px-2 py-0.5 rounded">
          {data?.polling || "—"}
        </span>
      </div>
    </div>
  );
}
