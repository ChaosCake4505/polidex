import React from "react";

const getColor = (name = "") => {
  const s = String(name);
  if (s.includes("(D)")) return "#1C408C";
  if (s.includes("(R)")) return "#E30022";
  if (s.includes("(I)")) return "#9CA3AF";
  return "#999";
};

// Safe helpers so React never sees {}
const asName = (v) => (v == null ? "—" : String(v));
const asPercent = (v) => {
  if (typeof v === "number") return `${v.toFixed(1)}%`;
  if (typeof v === "string") return v;
  return "—";
};
const asText = (v) => {
  if (v == null) return "—";
  if (typeof v === "number") return String(v);
  if (typeof v === "string") return v;
  return "—";
};

export default function HouseTooltipBox({ districtKey, data }) {
  const candidates = Array.isArray(data?.candidates) ? data.candidates : [];
  const polling = data?.polling;

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-300 w-80 p-4 text-sm font-sans text-black">
      <h2 className="bg-gray-800 text-white text-center font-bold py-1 rounded mb-2">
        {districtKey || "—"}
      </h2>

      <table className="w-full border-collapse text-xs">
        <thead>
          <tr className="text-left border-b border-gray-300">
            <th className="pb-1">Candidate</th>
            <th className="text-right pb-1">Chance of Victory</th>
          </tr>
        </thead>
        <tbody>
          {candidates.length > 0 ? (
            candidates.map((cand, i) => (
              <tr key={i} className="border-b border-gray-100">
                <td className="flex items-center space-x-2 py-1">
                  <div
                    style={{
                      backgroundColor: getColor(cand?.name),
                      width: "6px",
                      height: "20px",
                      borderRadius: "2px",
                      flexShrink: 0,
                    }}
                  />
                  <span className="font-medium">{asName(cand?.name)}</span>
                </td>
                <td className="text-right font-semibold">{asPercent(cand?.percent)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="text-gray-500 text-center py-2">
                No candidate data
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mt-2 text-xs text-gray-700 flex justify-between items-center">
        <span>Polling:</span>
        <span className="bg-orange-200 text-orange-800 font-bold px-2 py-0.5 rounded">
          {asText(polling)}
        </span>
      </div>
    </div>
  );
}
