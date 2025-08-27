// pages/senateoddsbystate.jsx
import React, { useMemo, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SenateOddsByState from "../components/SenateOddsByState";

const BASE_ROWS = [
  // Use your live forecasts here
  { state: "GA", rep: "Walker", dem: "Warnock", repProb: 0.57, demProb: 0.43 },
  { state: "PA", rep: "Oz", dem: "Fetterman", repProb: 0.46, demProb: 0.54 },
  { state: "NV", rep: "Laxalt", dem: "Cortez Masto", repProb: 0.57, demProb: 0.43 },
  { state: "AZ", rep: "Masters", dem: "Kelly", repProb: 0.35, demProb: 0.65 },
  { state: "NH", rep: "Bolduc", dem: "Hassan", repProb: 0.26, demProb: 0.74 },
  { state: "WI", rep: "Johnson", dem: "Barnes", repProb: 0.77, demProb: 0.23 },
  { state: "NC", rep: "Budd", dem: "Beasley", repProb: 0.81, demProb: 0.19 },
  { state: "OH", rep: "Vance", dem: "Ryan", repProb: 0.82, demProb: 0.18 },
  { state: "CO", rep: "O'Dea", dem: "Bennet", repProb: 0.08, demProb: 0.92 },
  { state: "WA", rep: "Smiley", dem: "Murray", repProb: 0.09, demProb: 0.91 },
  { state: "FL", rep: "Rubio", dem: "Demings", repProb: 0.95, demProb: 0.05 },
];

export default function SenateOddsByStatePage() {
  const [sort, setSort] = useState("state"); // "state" | "leader" | "close"

  const rows = useMemo(() => {
    const copy = [...BASE_ROWS];
    if (sort === "state") {
      copy.sort((a, b) => a.state.localeCompare(b.state));
    } else if (sort === "leader") {
      // Sort by favorite's win chance (desc)
      copy.sort((a, b) => {
        const aFav = Math.max(a.repProb, a.demProb);
        const bFav = Math.max(b.repProb, b.demProb);
        return bFav - aFav;
      });
    } else if (sort === "close") {
      // Sort by closeness to 50/50 (asc)
      copy.sort((a, b) => {
        const aDelta = Math.abs(0.5 - Math.max(a.repProb, a.demProb));
        const bDelta = Math.abs(0.5 - Math.max(b.repProb, b.demProb));
        return aDelta - bDelta;
      });
    }
    return copy;
  }, [sort]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Page header */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Polidex — Senate Odds by State</h1>
        <p className="max-w-3xl mx-auto text-gray-300">
          Side-by-side probabilities for every competitive state. Red filled circles mark the Republican chance; blue outlined squares mark the Democratic chance.
          A vertical line indicates 50%.
        </p>

        {/* Sort controls */}
        <div className="mt-5 flex items-center justify-center gap-2">
          <span className="text-sm text-gray-400">Sort:</span>
          <button
            onClick={() => setSort("state")}
            className={`px-3 py-1 rounded text-sm ${sort === "state" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"}`}
          >
            State (A–Z)
          </button>
          <button
            onClick={() => setSort("leader")}
            className={`px-3 py-1 rounded text-sm ${sort === "leader" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"}`}
          >
            Favorite strength
          </button>
          <button
            onClick={() => setSort("close")}
            className={`px-3 py-1 rounded text-sm ${sort === "close" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"}`}
          >
            Closest first
          </button>
        </div>
      </div>

      {/* Odds block */}
      <SenateOddsByState rows={rows} />

      <Footer />
    </div>
  );
}
