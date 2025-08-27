// pages/senate.js
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "../components/header";
import Footer from "../components/footer";
import SenateOddsByState from "../components/SenateOddsByState";
import SenateOutcomeSampler from "../components/SenateOutcomeSampler";

const SenateMap = dynamic(() => import("../components/senatemap"), { ssr: false });
const CurrentSenateMap = dynamic(() => import("../components/currentsenatemap"), { ssr: false });

const PREDICTION_COLORS = [
  { color: "#6495ed", label: "Senate Predictions" }, // Blue
  { color: "#E30022", label: "Senate Predictions" }, // Red
  { color: "#A259D9", label: "Senate Predictions" }, // Purple
];

// --- helper up top (safer with some bundlers) ---
function buildSamples({ right = {}, leftDemSeats = {}, centerDem50 = 0 }) {
  const arr = [];
  Object.entries(right).forEach(([d, k]) => { for (let i = 0; i < k; i++) arr.push(Number(d)); });
  for (let i = 0; i < centerDem50; i++) arr.push(50);
  Object.entries(leftDemSeats).forEach(([d, k]) => { for (let i = 0; i < k; i++) arr.push(Number(d)); });
  return arr.slice(0, 100);
}

// Distinct vote share vs odds (odds feed "NN in 100", vote share feeds slider-circle)
const SENATE_ODDS = [
  { state: "MI", rep: "Republican",    dem: "Democrat",     repVote: 49, demVote: 50, repOdds: 0.43, demOdds: 0.57 },
  { state: "GA", rep: "Republican",    dem: "Jon Ossoff",   repVote: 49, demVote: 51, repOdds: 0.41, demOdds: 0.59 },
  { state: "NC", rep: "Republican",    dem: "Roy Cooper",   repVote: 49, demVote: 51, repOdds: 0.41, demOdds: 0.59 },
  { state: "ME", rep: "Susan Collins", dem: "Democrat",     repVote: 51, demVote: 49, repOdds: 0.59, demOdds: 0.41 },
  { state: "OH", rep: "Jon Husted",    dem: "Sherrod Brown",repVote: 52, demVote: 47, repOdds: 0.72, demOdds: 0.28 },
  // Dan Osborn is independent (grey circle)
  { state: "NE", rep: "Pete Ricketts", dem: "Dan Osborn",   repVote: 53, demVote: 46, repOdds: 0.77, demOdds: 0.23, demParty: "I" },
  { state: "TX", rep: "Republican",    dem: "Democrat",     repVote: 53, demVote: 46, repOdds: 0.82, demOdds: 0.18 },
  { state: "IA", rep: "Republican",    dem: "Democrat",     repVote: 55, demVote: 45, repOdds: 0.86, demOdds: 0.14 },
  { state: "NH", rep: "Republican",    dem: "Chris Pappas", repVote: 44, demVote: 56, repOdds: 0.12, demOdds: 0.88 },
  { state: "AK", rep: "Dan Sullivan",  dem: "Democrat",     repVote: 56, demVote: 44, repOdds: 0.88, demOdds: 0.12 },
];

// Build 100 demo outcomes: ~85 GOP holds, 51–52 GOP most common, red dots on the 50 line too.
const SENATE_SAMPLES = buildSamples({
  // Dem wins (DEM seats on the right side of the chart)
  right: { 51: 5, 52: 4, 53: 3, 54: 2, 55: 1 }, // total 15
  // Center line (DEM=50) shown as red circles per your design
  centerDem50: 14,
  // GOP wins: DEM seats < 50 (so GOP has 51, 52, etc.); modal near 49–48 DEM = 51–52 GOP
  leftDemSeats: { 49: 25, 48: 22, 47: 10, 46: 8, 45: 6 }, // 71; 71 + 14 + 15 = 100
});

export default function SenatePage() {
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
          Polidex 2026{" "}
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
          Explore Polidex’s latest projections for upcoming Senate races and balance of power.
        </p>
        <p className="mt-2 italic text-sm text-gray-400">
          *All candidates' top donors were RNC and DNC related organizations that have been excluded.
        </p>
      </div>

      {/* Forecast map */}
      <div className="w-full max-w-6xl mx-auto mb-4">
        <SenateMap />
      </div>

      {/* Categories bar (kept your layout/labels) */}
      <div className="relative max-w-5xl mx-auto h-8 flex rounded overflow-hidden mb-12 mt-2 text-white text-xs font-bold px-4">
        <div className="flex items-center justify-center" style={{ width: "8%",  backgroundColor: "#1C408C" }}>Uncont.</div>
        <div className="flex items-center justify-center" style={{ width: "18%", backgroundColor: "#1C408C" }}>Safe Dem</div>
        <div className="flex items-center justify-center" style={{ width: "8%",  backgroundColor: "#577CCC" }}>Likely Dem</div>
        <div className="flex items-center justify-center" style={{ width: "4%",  backgroundColor: "#8AAFFF" }}></div>
        <div className="flex items-center justify-center" style={{ width: "10%", backgroundColor: "#C26BF7" }}>Swing</div>
        <div className="flex items-center justify-center" style={{ width: "2%",  backgroundColor: "#FF9395" }}></div>
        <div className="flex items-center justify-center" style={{ width: "10%", backgroundColor: "#FF5865" }}>Likely Rep</div>
        <div className="flex items-center justify-center" style={{ width: "20%", backgroundColor: "#E30022" }}>Safe Red</div>
        <div className="flex items-center justify-center" style={{ width: "20%", backgroundColor: "#E30022" }}>Uncontested</div>
        {/* Center markers */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-600" style={{ left: "50%" }}></div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-700" style={{ left: "8%" }}></div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-700" style={{ left: "80%" }}></div>
      </div>

      {/* Odds-by-state (vote% track + distinct 'in 100' odds) */}
      <SenateOddsByState rows={SENATE_ODDS} highlightWidthPx={140} />

      {/* Outcome sampler (100 dots, white outlined) */}
      <div className="w-full max-w-6xl mx-auto my-12">
        <SenateOutcomeSampler samples={SENATE_SAMPLES} />
      </div>

      {/* Current Senate */}
      <div className="w-full bg-gray-800 py-8 px-6 text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Current Senate</h2>
      </div>

      {/* Split bar */}
      <div className="relative mx-auto max-w-3xl h-8 flex rounded overflow-hidden mb-6 mt-2">
        <div className="flex items-center justify-center text-white text-sm font-bold" style={{ width: "48%", backgroundColor: "#1C408C" }}>48</div>
        <div className="flex items-center justify-center text-white text-sm font-bold" style={{ width: "52%", backgroundColor: "#E30022" }}>52</div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-600" style={{ left: "50%" }}></div>
      </div>

      {/* Current map */}
      <div className="w-full max-w-6xl mx-auto mb-12">
        <CurrentSenateMap />
      </div>

      <Footer />
    </div>
  );
}
