// components/SenateOddsByState.jsx
import React from "react";

/**
 * rows: [{
 *   state, rep, dem,
 *   // Predicted vote share (0..1 or 0..100)
 *   repVote?: number, demVote?: number,
 *   // Odds of winning (0..1 or 0..100); used for "NN in 100" on the right
 *   repOdds?: number, demOdds?: number,
 *   // Back-compat fallbacks if you still have these:
 *   repProb?: number, demProb?: number,
 *   repParty?: "R"|"D"|"I", demParty?: "R"|"D"|"I",
 * }]
 * highlightWidthPx?: number  // default 70
 */
export default function SenateOddsByState({ rows = [], highlightWidthPx = 70 }) {
  const widthPx = 360; // slightly wider scale for 50–55–60 layout
  const SCALE_MIN = 0.50;
  const SCALE_MAX = 0.60; // we mirror this to the left for D/Ind
  const SCALE_RANGE = SCALE_MAX - SCALE_MIN; // 0.10
  const centerX = widthPx / 2;
  const halfW = widthPx / 2;

  const hasIndependent = rows.some(
    (r) => (r.demParty || "").toUpperCase() === "I" || (r.repParty || "").toUpperCase() === "I"
  );

  return (
    <div className="bg-gray-800/80 rounded-lg p-6 shadow max-w-5xl mx-auto my-10">
      <h3 className="text-center text-xl font-bold mb-4">Most Competitive Senate Races</h3>

      {/* Legend */}
      <div className="text-xs text-gray-400 flex items-center justify-center gap-6 mb-4">
        <span className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-[#60A5FA]"/>
          Democrat
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-[#FF5865]"/>
          Republican
        </span>
        {hasIndependent && (
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-gray-400"/>
            Independent
          </span>
        )}
        <span className="hidden sm:flex items-center gap-1">
          <span className="w-px h-4 bg-gray-500"/> center = 50%
        </span>
      </div>

      {/* Headers */}
      <div className="hidden sm:grid text-xs text-gray-400 px-2 pb-2
                      grid-cols-[minmax(70px,90px)_minmax(120px,1fr)_minmax(120px,1fr)_minmax(360px,1fr)_minmax(70px,80px)]">
        <div>State</div>
        <div>Republican</div>
        <div>Democrat</div>
        <div>Predicted Vote % (50–60 mirrored)</div>
        <div className="text-right">in 100</div>
      </div>

      <div className="divide-y divide-gray-700">
        {rows.map((r) => {
          const repParty = (r.repParty || "R").toUpperCase();
          const demParty = (r.demParty || "D").toUpperCase();

          // --- Vote shares drive circle position (0..1) ---
          const repVote = norm01(r.repVote ?? r.repShare ?? r.repPct ?? r.repProb ?? 0);
          const demVote = norm01(r.demVote ?? r.demShare ?? r.demPct ?? r.demProb ?? 0);

          // Who leads by vote %
          const leaderIsRep = repVote >= demVote;
          const leaderParty = leaderIsRep ? repParty : demParty;
          const leaderShare = leaderIsRep ? repVote : demVote; // 0..1

          // Map vote to mirrored position around 50 with max at 60
          const leaderPosPx = posFromVote(leaderShare, leaderIsRep, centerX, halfW, SCALE_RANGE);

          // --- Odds (different number) for the right column ---
          const repOdds = norm01(r.repOdds ?? r.repProb ?? 0);
          const demOdds = norm01(r.demOdds ?? r.demProb ?? 0);
          const leaderOdds = leaderIsRep ? repOdds : demOdds;
          const leaderOdds100 = Math.round(leaderOdds * 100);

          // Colors
          const repNameColor = textColor(repParty);
          const demNameColor = textColor(demParty);
          const leaderColorHex = partySolid(leaderParty);

// Continuous halo centered on circle; blue left of 50, red right of 50
const effectiveHighlight = (highlightWidthPx ?? 70) * 2; // DOUBLE the width
const half = Math.max(8, Math.floor(effectiveHighlight / 2));
const bandStart = leaderPosPx - half;
const bandWidth = half * 2;


          // If band crosses 50, split at 50; else solid by side
          let bandBg = "rgba(96,165,250,0.22)"; // blue
          if (bandStart + bandWidth <= centerX) {
            bandBg = "rgba(96,165,250,0.22)"; // entirely left of 50
          } else if (bandStart >= centerX) {
            bandBg = "rgba(255,88,101,0.22)"; // entirely right of 50
          } else {
            const centerPct = clamp01((centerX - bandStart) / bandWidth) * 100;
            bandBg = `linear-gradient(to right,
              rgba(96,165,250,0.22) 0%,
              rgba(96,165,250,0.22) ${centerPct}%,
              rgba(255,88,101,0.22) ${centerPct}%,
              rgba(255,88,101,0.22) 100%)`;
          }

          return (
            <div key={r.state}
                 className="grid items-center gap-3 py-3 px-2
                            grid-cols-[minmax(70px,90px)_minmax(120px,1fr)_minmax(120px,1fr)_minmax(360px,1fr)_minmax(70px,80px)]">
              {/* State */}
              <div className="font-semibold text-sm text-gray-100">{r.state}</div>

              {/* Names */}
              <div className={`${repNameColor} truncate`}>{r.rep}</div>
              <div className={`${demNameColor} truncate`}>{r.dem}</div>

              {/* Track */}
              <div className="relative h-10 overflow-visible">
                {/* Halo */}
                <div className="absolute inset-y-3 left-1/2 -translate-x-1/2 pointer-events-none"
                     style={{ width: widthPx }} aria-hidden="true">
                  <div className="absolute top-0 h-full rounded"
                       style={{ left: bandStart, width: bandWidth, background: bandBg }} />
                </div>

                {/* Center & mirrored tick lines: 50, 55(D), 60(D) on left; 55(R), 60(R) on right */}
                <TickAt xPx={centerX} bold />
                <TickAt xPx={posFromVote(0.55, false, centerX, halfW, SCALE_RANGE)} />
                <TickAt xPx={posFromVote(0.60, false, centerX, halfW, SCALE_RANGE)} />
                <TickAt xPx={posFromVote(0.55, true, centerX, halfW, SCALE_RANGE)} />
                <TickAt xPx={posFromVote(0.60, true, centerX, halfW, SCALE_RANGE)} />

                {/* Labels under ticks */}
                <TickLabel xPx={posFromVote(0.60, false, centerX, halfW, SCALE_RANGE)} />
                <TickLabel xPx={posFromVote(0.55, false, centerX, halfW, SCALE_RANGE)} />
                <TickLabel xPx={centerX} text="50" bold />
                <TickLabel xPx={posFromVote(0.55, true, centerX, halfW, SCALE_RANGE)}  />
                <TickLabel xPx={posFromVote(0.60, true, centerX, halfW, SCALE_RANGE)} />

                {/* Leader circle (at mirrored position) */}
                <Marker leftAbsPx={leaderPosPx} trackWidthPx={widthPx} color={leaderColorHex}
                        title={`${partyLabel(leaderParty)} share: ${Math.round(leaderShare*100)}%`} />
              </div>

              {/* Odds column shows a different number (odds, not vote share) */}
              <div className="text-right font-semibold" style={{ color: leaderColorHex }}>
                {leaderOdds100} <span className="text-gray-300 font-normal">in</span> 100
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

// Map a vote share (0..1) to a mirrored 50→60 scale.
// If leader is GOP: center → right; if Dem/Ind: center → left.
// Values beyond 60% clamp to the edge.
function posFromVote(v, isRep, centerX, halfW, SCALE_RANGE) {
  const margin = Math.abs(v - 0.5);                    // 0..0.5
  const clamped = Math.min(margin, SCALE_RANGE);       // cap at 10 pts
  const offset = (clamped / SCALE_RANGE) * halfW;      // 0..halfW
  return isRep ? centerX + offset : centerX - offset;
}

function Marker({ leftAbsPx, trackWidthPx, color, title }) {
  // Convert absolute px to positioned element inside a track centered at 50%
  const left = `calc(50% - ${trackWidthPx / 2 - leftAbsPx}px)`;
  return (
    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30"
         style={{ left }} title={title} aria-label={title}>
      <span className="inline-block w-3.5 h-3.5 rounded-full" style={{ backgroundColor: color }} />
    </div>
  );
}

function TickAt({ xPx, bold = false }) {
  return (
    <div
      className={`absolute ${bold ? "top-1 bottom-1 bg-gray-500 w-[2px]" : "top-2 bottom-2 bg-gray-600/60 w-px"} z-20`}
      style={{ left: `calc(50% - ${180 - xPx}px)` }} // 180 = widthPx/2; keep centered track
      aria-hidden="true"
    />
  );
}

function TickLabel({ xPx, text, bold = false }) {
  return (
    <div
      className={`absolute -bottom-4 text-[10px] sm:text-xs ${bold ? "font-semibold text-gray-300" : "text-gray-400"}`}
      style={{ left: `calc(50% - ${180 - xPx}px)`, transform: "translateX(-50%)" }}
    >
      {text}
    </div>
  );
}

function norm01(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return 0;
  return n > 1 ? clamp01(n / 100) : clamp01(n);
}
function clamp01(n) { return Math.max(0, Math.min(1, n)); }

function partySolid(p) {
  switch ((p || "").toUpperCase()) {
    case "D": return "#60A5FA";
    case "R": return "#FF5865";
    case "I": return "#9CA3AF";
    default:  return "#9CA3AF";
  }
}
function textColor(p) {
  switch ((p || "").toUpperCase()) {
    case "D": return "text-blue-400";
    case "R": return "text-[#FF5865]";
    case "I": return "text-gray-300";
    default:  return "text-gray-300";
  }
}
function partyLabel(p) {
  switch ((p || "").toUpperCase()) {
    case "D": return "Dem";
    case "R": return "GOP";
    case "I": return "Ind";
    default:  return "Ind";
  }
}
