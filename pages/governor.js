// pages/governors.js (or wherever your page file is)
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "../components/header";
import Footer from "../components/footer";
import GovernorOddsByState from "../components/GovernorOddsByState";

const GovernorMap = dynamic(() => import("../components/governormap"), { ssr: false });
const CurrentGovernorsMap = dynamic(() => import("../components/currentgovernorsmap"), { ssr: false });

const PREDICTION_COLORS = [
  { color: "#6495ed", label: "Governor Predictions" }, // Blue
  { color: "#E30022", label: "Governor Predictions" }, // Red
  { color: "#A259D9", label: "Governor Predictions" }, // Purple
];

// Example data — swap with your live model.
// repVote/demVote can be 0–1 or 0–100. repOdds/demOdds likewise.
// Use demParty: "I" for an independent opponent leading/competing.
const GOV_ODDS = [
  { state: "MI", rep: "Republican", dem: "Democrat",       repVote: 49.8, demVote: 50.2, repOdds: 0.40, demOdds: 0.43 },
  { state: "GA", rep: "Republican", dem: "Democrat",   repVote: 49.5, demVote: 50.5, repOdds: 0.59, demOdds: 0.51 },
  { state: "WI", rep: "Republican", dem: "Democrat",       repVote: 49, demVote: 51, repOdds: 0.48, demOdds: 0.52 },
  { state: "AZ", rep: "Republican", dem: "Katie Hobbs",       repVote: 48, demVote: 52, repOdds: 0.44, demOdds: 0.56 },
  { state: "NV", rep: "Joe Lombardo", dem: "Democrat",       repVote: 52, demVote: 48, repOdds: 0.58, demOdds: 0.42 },
  { state: "KS", rep: "Republican", dem: "Democrat",       repVote: 52, demVote: 47, repOdds: 0.67, demOdds: 0.33 },
  { state: "NJ", rep: "Jack Ciaterelli", dem: "Mikie Sherrill",       repVote: 46, demVote: 54, repOdds: 0.26, demOdds: 0.74 },
  { state: "VA", rep: "Winsome Earle-Sears", dem: "Abigail Spanberger", repVote: 45, demVote: 55, repOdds: 0.24, demOdds: 0.76 },
  { state: "OH", rep: "Vivek Ramaswamey", dem: "Democrat", repVote: 55, demVote: 45, repOdds: 0.77, demOdds: 0.23 },
  { state: "IA", rep: "Republican", dem: "Democrat", repVote: 55.5, demVote: 44.5, repOdds: 0.82, demOdds: 0.28 },
];

export default function GovernorsPage() {
  const [colorIdx, setColorIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIdx((prev) => (prev + 1) % PREDICTION_COLORS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Edge-to-edge dark header bar */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Polidex 2025 & 2026{" "}
          <span
            style={{
              color: PREDICTION_COLORS[colorIdx].color,
              transition: "color 0.8s cubic-bezier(.4,0,.2,1)",
            }}
          >
            {PREDICTION_COLORS[colorIdx].label}
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Explore Polidex’s latest projections for upcoming gubernatorial races across the United States.
        </p>
        <p className="mt-2 italic text-sm text-gray-400">
          *All candidates' top donors were RNC and DNC related organizations that have been excluded.
        </p>
      </div>

      {/* Map container */}
      <div className="w-full max-w-6xl mx-auto mb-4">
        <GovernorMap />
      </div>

      {/* FULL-WIDTH BAR, edge to edge with padding */}
      <div className="relative max-w-5xl mx-auto h-8 flex rounded overflow-hidden mb-12 mt-2 text-white text-xs font-bold px-4">
        <div className="flex items-center justify-center" style={{ width: "8%", backgroundColor: "#1C408C" }}>Uncont.</div>
        <div className="flex items-center justify-center" style={{ width: "18%", backgroundColor: "#1C408C" }}>Safe Dem</div>
        <div className="flex items-center justify-center" style={{ width: "8%", backgroundColor: "#577CCC" }}>Likely Dem</div>
        <div className="flex items-center justify-center" style={{ width: "4%", backgroundColor: "#8AAFFF" }}></div>
        <div className="flex items-center justify-center" style={{ width: "10%", backgroundColor: "#C26BF7" }}>Swing</div>
        <div className="flex items-center justify-center" style={{ width: "2%", backgroundColor: "#FF9395" }}></div>
        <div className="flex items-center justify-center" style={{ width: "10%", backgroundColor: "#FF5865" }}>Likely Rep</div>
        <div className="flex items-center justify-center" style={{ width: "20%", backgroundColor: "#E30022" }}>Safe Red</div>
        <div className="flex items-center justify-center" style={{ width: "20%", backgroundColor: "#E30022" }}>Uncontested</div>
        {/* Center markers */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-600" style={{ left: "50%" }}></div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-700" style={{ left: "8%" }}></div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-700" style={{ left: "80%" }}></div>
      </div>

      {/* NEW: 538-style odds graphic for Governors (between the maps) */}
      <GovernorOddsByState rows={GOV_ODDS} />

      {/* --- Themed section for current governors --- */}
      <div className="w-full bg-gray-800 py-8 px-6 text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Current Governors</h2>
      </div>

      {/* --- SECOND INFO BAR (after CurrentGovernors header) --- */}
      <div className="relative mx-auto max-w-3xl h-8 flex rounded overflow-hidden mb-6 mt-2">
        <div className="flex items-center justify-center text-white text-sm font-bold"
          style={{ width: "46%", backgroundColor: "#1C408C" }}>23</div>
        <div className="flex items-center justify-center text-white text-sm font-bold"
          style={{ width: "54%", backgroundColor: "#E30022" }}>27</div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-600"
          style={{ left: "50%" }}></div>
      </div>

      {/* Second map, no box */}
      <div className="w-full max-w-6xl mx-auto mb-12">
        <CurrentGovernorsMap />
      </div>

      <Footer />
    </div>
  );
}
