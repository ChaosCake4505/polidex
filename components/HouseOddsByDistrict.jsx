import React from "react";

/**
 * rows: [{
 *   district, rep, dem,
 *   // Predicted vote share (0..1 or 0..100)
 *   repVote?: number, demVote?: number,
 *   // Odds of winning (0..1 or 0..100); used for "NN in 100" on the right
 *   repOdds?: number, demOdds?: number,
 *   // Optional party tags for styling/labels (defaults R/D)
 *   repParty?: "R"|"D"|"I", demParty?: "R"|"D"|"I",
 * }]
 * highlightWidthPx?: number  // default ~70, widened a bit to match Senate style
 */
export default function HouseOddsByDistrict({ rows = [], highlightWidthPx = 70 }) {
  const widthPx = 360;           // track width matching Senate component
  const SCALE_MIN = 0.50;
  const SCALE_MAX = 0.60;        // mirrored to both sides of 50
  const SCALE_RANGE = SCALE_MAX - SCALE_MIN; // 0.10
  const centerX = widthPx / 2;
  const halfW = widthPx / 2;

  const hasIndependent = rows.some(
    (r) => (r.demParty || "").toUpperCase() === "I" || (r.repParty || "").toUpperCase() === "I"
  );

  return (
    <div className="bg-gray-800/80 rounded-lg p-6 shadow max-w-5xl mx-auto my-10">
      <h3 className="text-center text-xl font-bold mb-4">Most Competitive House Districts</h3>

      {/* Legend (mirrors Senate odds component) */}
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

      {/* Headers (same grid as Senate, label changes) */}
      <div className="hidden sm:grid text-xs text-gray-400 px-2 pb-2
                      grid-cols-[minmax(90px,110px)_minmax(120px,1fr)_minmax(120px,1fr)_minmax(360px,1fr)_minmax(70px,80px)]">
        <div>District</div>
        <div>Republican</div>
        <div>Democrat</div>
        <div>Predicted Vote % (50–60 mirrored)</div>
        <div className="text-right">in 100</div>
      </div>

      <div className="divide-y divide-gray-700">
        {rows.map((r) => {
          const repParty = (r.repParty || "R").toUpperCase();
          const demParty = (r.demParty || "D").toUpperCase();

          // Vote shares (0..1)
          const repVote = norm01(r.repVote ?? r.repShare ?? r.repPct ?? r.repProb ?? 0);
          const demVote = norm01(r.demVote ?? r.demShare ?? r.demPct ?? r.demProb ?? 0);

          // Leader by vote %
          const leaderIsRep = repVote >= demVote;
          const leaderParty = leaderIsRep ? repParty : demParty;
          const leaderShare = leaderIsRep ? repVote : demVote; // 0..1

          // Position on mirrored 50–60 track
          const leaderPosPx = posFromVote(leaderShare, leaderIsRep, centerX, halfW, SCALE_RANGE);

          // Odds (0..1) -> "NN in 100"
          const repOdds = norm01(r.repOdds ?? r.repProb ?? 0);
          const demOdds = norm01(r.demOdds ?? r.demProb ?? 0);
          const leaderOdds = leaderIsRep ? repOdds : demOdds;
          const leaderOdds100 = Math.round(leaderOdds * 100);

          // Colors/styles
          const repNameColor = textColor(repParty);
          const demNameColor = textColor(demParty);
          const leaderColorHex = partySolid(leaderParty);

          // Wider halo highlight like Senate
          const effectiveHighlight = (highlightWidthPx ?? 70) * 2;
          const half = Math.max(8, Math.floor(effectiveHighlight / 2));
          const bandStart = leaderPosPx - half;
          const bandWidth = half * 2;

          // Blue if left of 50, red if right; split gradient if crossing 50
          let bandBg = "rgba(96,165,250,0.22)";
          if (bandStart + bandWidth <= centerX) {
            bandBg = "rgba(96,165,250,0.22)";
          } else if (bandStart >= centerX) {
            bandBg = "rgba(255,88,101,0.22)";
          } else {
            const centerPct = clamp01((centerX - bandStart) / bandWidth) * 100;
            bandBg = `linear-gradient(to right,
              rgba(96,165,250,0.22) 0%,
              rgba(96,165,250,0.22) ${centerPct}%,
              rgba(255,88,101,0.22) ${centerPct}%,
              rgba(255,88,101,0.22) 100%)`;
          }

          return (
            <div key={r.district}
                 className="grid items-center gap-3 py-3 px-2
                            grid-cols-[minmax(90px,110px)_minmax(120px,1fr)_minmax(120px,1fr)_minmax(360px,1fr)_minmax(70px,80px)]">
              {/* District */}
              <div className="font-semibold text-sm text-gray-100">{r.district}</div>

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

                {/* Ticks: 50 center; 55/60 mirrored left/right */}
                <TickAt xPx={centerX} bold />
                <TickAt xPx={posFromVote(0.55, false, centerX, halfW, SCALE_RANGE)} />
                <TickAt xPx={posFromVote(0.60, false, centerX, halfW, SCALE_RANGE)} />
                <TickAt xPx={posFromVote(0.55, true, centerX, halfW, SCALE_RANGE)} />
                <TickAt xPx={posFromVote(0.60, true, centerX, halfW, SCALE_RANGE)} />

                {/* Tick labels */}
                <TickLabel xPx={posFromVote(0.60, false, centerX, halfW, SCALE_RANGE)} />
                <TickLabel xPx={posFromVote(0.55, false, centerX, halfW, SCALE_RANGE)} />
                <TickLabel xPx={centerX} text="50" bold />
                <TickLabel xPx={posFromVote(0.55, true, centerX, halfW, SCALE_RANGE)} />
                <TickLabel xPx={posFromVote(0.60, true, centerX, halfW, SCALE_RANGE)} />

                {/* Marker at leader position */}
                <Marker
                  leftAbsPx={leaderPosPx}
                  trackWidthPx={widthPx}
                  color={leaderColorHex}
                  title={`${partyLabel(leaderParty)} share: ${Math.round(leaderShare * 100)}%`}
                />
              </div>

              {/* Odds column */}
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

/* ---------- helpers (same as Senate component) ---------- */

function posFromVote(v, isRep, centerX, halfW, SCALE_RANGE) {
  const margin = Math.abs(v - 0.5);
  const clamped = Math.min(margin, SCALE_RANGE);        // cap at +10 pts
  const offset = (clamped / SCALE_RANGE) * halfW;       // map to pixels
  return isRep ? centerX + offset : centerX - offset;
}

function Marker({ leftAbsPx, trackWidthPx, color, title }) {
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
      style={{ left: `calc(50% - ${180 - xPx}px)` }} // 180 = widthPx/2
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
