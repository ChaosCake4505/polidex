import React, { useMemo } from "react";

/**
 * HouseOutcomeSampler (wide, no scroll)
 * - Center rail: "Majority (217)"
 * - Rails on BOTH sides: 225, 240, 255
 * - Exactly 100 dots; <=12 per row; fixed 66 DEM / 34 GOP
 * - DEM split: 40% in (217..225), 55% in (225..240), 5% in (240..255)
 * - GOP split: 80% in (217..225), 8% in (225..240), 2% in (240..255) — remainder to first band
 * - Dots scattered deterministically between rails (no motion on re-render)
 */
export default function HouseOutcomeSampler({ majority = 218 }) {
  // Spread (fits typical desktops without scroll)
  const S1 = 180;  // distance to 225 rails (px)
  const S2 = 340;  // distance to 240 rails (px)
  const S3 = 500;  // distance to 255 rails (px)
  const LEFT_OFFSETS  = [-S1, -S2, -S3];
  const RIGHT_OFFSETS = [ S1,  S2,  S3];

  const LABELS = [225, 240, 255];

  const HEIGHT   = 360;
  const DOT      = 20;
  const ROW_GAP  = 8;
  const MARGIN_X = 30;
  const TOTAL_W  = 2 * S3 + 2 * MARGIN_X; // 1060px

  // ===== Deterministic RNG so dots don't move between renders =====
  const mulberry32 = (seed) => {
    return function() {
      let t = (seed += 0x6D2B79F5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };

  // Helper: Poisson-ish spacing within a band
  function spacedSamples(rand, count, lo, hi, minSep) {
    const xs = [];
    const attempts = Math.max(120, count * 50);
    for (let k = 0; k < attempts && xs.length < count; k++) {
      const candidate = lo + rand() * (hi - lo);
      let ok = true;
      for (let q = 0; q < xs.length; q++) {
        if (Math.abs(xs[q] - candidate) < minSep) { ok = false; break; }
      }
      if (ok) xs.push(candidate);
    }
    // Fallback if not filled
    while (xs.length < count) {
      const t = (xs.length + 1) / (count + 1);
      const base = lo + t * (hi - lo);
      const jitter = (rand() - 0.5) * minSep * 0.7;
      xs.push(Math.max(lo, Math.min(hi, base + jitter)));
    }
    xs.sort((a,b)=>a-b);
    return xs;
  }

  // Build rows: variable width (8..12 per row), centered vertically.
  function buildRows(rand, totalCount) {
    const MAX_PER_ROW = 12;
    const rows = [];
    let remaining = totalCount;
    while (remaining > 0) {
      const proposed = 8 + Math.floor(rand() * 5); // 8..12
      const items = Math.min(MAX_PER_ROW, Math.min(remaining, proposed));
      rows.push(items);
      remaining -= items;
    }
    const nRows  = rows.length;
    const blockH = nRows * DOT + (nRows - 1) * ROW_GAP;
    const startY = Math.max(0, Math.round((HEIGHT - blockH) / 2));
    return { rows, startY };
  }

  // Allocate items across bands for a row, proportional to remaining needs.
  function allocateRowShares(items, remain) {
    const total = remain.reduce((a,b)=>a+b,0);
    if (total === 0) return [0,0,0];
    const ideal = remain.map(r => (r / total) * items);
    const base  = ideal.map(x => Math.floor(x));
    let used = base.reduce((a,b)=>a+b,0);
    const fracIdx = [0,1,2].sort((i,j) => (ideal[j]-base[j]) - (ideal[i]-base[i]));
    let i = 0;
    while (used < items) { base[fracIdx[i % 3]] += 1; used += 1; i++; }
    // Clamp not to exceed remain
    for (let k=0;k<3;k++) base[k] = Math.min(base[k], remain[k]);
    // If clamping dropped some, push extras into bands with capacity
    let drop = items - (base[0]+base[1]+base[2]);
    if (drop > 0) {
      for (let k of [0,1,2]) {
        const room = remain[k] - base[k];
        const give = Math.min(room, drop);
        base[k] += give; drop -= give;
        if (drop <= 0) break;
      }
    }
    return base;
  }

  const { leftDots, rightDots } = useMemo(() => {
    const rand = mulberry32(20250816); // fixed seed

    // Distances from center for each band
    const LINE_BUFFER = 10;
    // Right (DEM) bands
    const RIGHT_B1 = [LINE_BUFFER, S1 - LINE_BUFFER];      // (Majority..225)
    const RIGHT_B2 = [S1 + LINE_BUFFER, S2 - LINE_BUFFER]; // (225..240)
    const RIGHT_B3 = [S2 + LINE_BUFFER, S3 - LINE_BUFFER]; // (240..255)
    // Left (GOP) bands
    const LEFT_B1  = [LINE_BUFFER, S1 - LINE_BUFFER];      // (Majority..225)
    const LEFT_B2  = [S1 + LINE_BUFFER, S2 - LINE_BUFFER]; // (225..240)
    const LEFT_B3  = [S2 + LINE_BUFFER, S3 - LINE_BUFFER]; // (240..255)

    // Counts
    const GOP = 34;
    const DEM = 66;

    // DEM band splits: 40% / 55% / 5% -> integers that sum to 66
    let d1 = Math.round(0.40 * DEM); // 26
    let d2 = Math.round(0.55 * DEM); // 36
    let d3 = DEM - d1 - d2;          // remainder
    if (d3 < 0) d3 = 0;

    // GOP band splits: 80% / 8% / 2% -> remainder to first band
    let g1 = Math.round(0.80 * GOP); // 27
    let g2 = Math.round(0.08 * GOP); // 3
    let g3 = Math.round(0.02 * GOP); // 1
    let gSum = g1 + g2 + g3;
    if (gSum !== GOP) { g1 += (GOP - gSum); } // push leftover into nearest-to-majority band

    // Row plans
    const leftPlan  = buildRows(rand, GOP);
    const rightPlan = buildRows(rand, DEM);

    const minSep = Math.max(12, DOT * 0.8);
    const yJitterMax = DOT * 0.35;

    // Place GOP (left) per requested splits
    const leftPositions = [];
    {
      let remainBands = [g1, g2, g3]; // near→far
      for (let r = 0; r < leftPlan.rows.length; r++) {
        const items = leftPlan.rows[r];
        const yBase = leftPlan.startY + r * (DOT + ROW_GAP);

        const [c1, c2, c3] = allocateRowShares(items, remainBands);
        remainBands = [remainBands[0]-c1, remainBands[1]-c2, remainBands[2]-c3];

        const xs1 = c1 > 0 ? spacedSamples(rand, c1, LEFT_B1[0], LEFT_B1[1], minSep) : [];
        const xs2 = c2 > 0 ? spacedSamples(rand, c2, LEFT_B2[0], LEFT_B2[1], minSep) : [];
        const xs3 = c3 > 0 ? spacedSamples(rand, c3, LEFT_B3[0], LEFT_B3[1], minSep) : [];

        const rowXs = [...xs1, ...xs2, ...xs3].sort((a,b)=>a-b);

        for (let i = 0; i < rowXs.length; i++) {
          const xOffset = -rowXs[i]; // left side
          const bottom  = Math.max(0, Math.min(HEIGHT - DOT, yBase + (rand()-0.5)*2*yJitterMax));
          leftPositions.push({ xOffset, bottom });
        }
      }
    }

    // Place DEM (right) per previous splits
    const rightPositions = [];
    {
      let remainBands = [d1, d2, d3];
      for (let r = 0; r < rightPlan.rows.length; r++) {
        const items = rightPlan.rows[r];
        const yBase = rightPlan.startY + r * (DOT + ROW_GAP);

        const [c1, c2, c3] = allocateRowShares(items, remainBands);
        remainBands = [remainBands[0]-c1, remainBands[1]-c2, remainBands[2]-c3];

        const xs1 = c1 > 0 ? spacedSamples(rand, c1, RIGHT_B1[0], RIGHT_B1[1], minSep) : [];
        const xs2 = c2 > 0 ? spacedSamples(rand, c2, RIGHT_B2[0], RIGHT_B2[1], minSep) : [];
        const xs3 = c3 > 0 ? spacedSamples(rand, c3, RIGHT_B3[0], RIGHT_B3[1], minSep) : [];

        const rowXs = [...xs1, ...xs2, ...xs3].sort((a,b)=>a-b);

        for (let i = 0; i < rowXs.length; i++) {
          const xOffset = +rowXs[i]; // right side
          const bottom  = Math.max(0, Math.min(HEIGHT - DOT, yBase + (rand()-0.5)*2*yJitterMax));
          rightPositions.push({ xOffset, bottom });
        }
      }
    }

    return { leftDots: leftPositions, rightDots: rightPositions };
  }, [S1, S2, S3, HEIGHT, DOT, ROW_GAP]);

  const midX = TOTAL_W / 2;

  return (
    <div className="bg-gray-800/80 rounded-lg p-8 shadow mx-auto">
      <div className="text-center">
        <h3 className="italic text-xl font-semibold mb-1">Democrats favored to win the House</h3>
        <p className="text-sm text-gray-300">
          100 simulated outcomes scattered between guide rails; ≤12 dots per row.
        </p>
      </div>

      {/* Fixed outcome counts */}
      <div className="flex justify-between text-center text-base font-semibold my-6">
        <div className="text-[#FF5865]">
          Republicans win <span className="text-2xl">34</span> in 100
        </div>
        <div className="text-blue-400">
          Democrats win <span className="text-2xl">66</span> in 100
        </div>
      </div>

      {/* Chart (no horizontal slider) */}
      <div className="relative mx-auto" style={{ width: TOTAL_W }}>
        {/* Center rail */}
        <RailLine
          left={midX}
          height={HEIGHT}
          thick
          color="#FF5865"
          label={`Majority (${majority - 1})`}
          labelColor="text-[#FF9AA4]"
        />

        {/* Left rails */}
        {LEFT_OFFSETS.map((dx, i) => (
          <RailLine
            key={`L${i}`}
            left={midX + dx}
            height={HEIGHT}
            color="#FF5865"
            label={LABELS[i]}
            labelColor="text-[#FF9AA4]"
          />
        ))}

        {/* Right rails */}
        {RIGHT_OFFSETS.map((dx, i) => (
          <RailLine
            key={`R${i}`}
            left={midX + dx}
            height={HEIGHT}
            color="#60A5FA"
            label={LABELS[i]}
            labelColor="text-blue-300"
          />
        ))}

        {/* Dots */}
        <div className="relative" style={{ height: HEIGHT }}>
          {leftDots.map(({ xOffset, bottom }, idx) => (
            <span
              key={`g${idx}`}
              className="absolute rounded-full"
              style={{
                left: midX + xOffset,
                bottom,
                width: DOT,
                height: DOT,
                backgroundColor: "#FF5865",
                border: "2px solid #ffffff",
                boxShadow: "0 1px 0 rgba(0,0,0,0.25)",
              }}
            />
          ))}
          {rightDots.map(({ xOffset, bottom }, idx) => (
            <span
              key={`d${idx}`}
              className="absolute rounded-full"
              style={{
                left: midX + xOffset,
                bottom,
                width: DOT,
                height: DOT,
                backgroundColor: "#60A5FA",
                border: "2px solid #ffffff",
                boxShadow: "0 1px 0 rgba(0,0,0,0.25)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function RailLine({ left, height, label, labelColor, thick = false, color = "#6B7280" }) {
  return (
    <div className="absolute flex flex-col items-center" style={{ left, transform: "translateX(-50%)" }}>
      <div
        className="bg-gray-600/70"
        style={{
          width: thick ? 6 : 3,
          height,
          backgroundColor: color,
        }}
      />
      <div className={`mt-2 text-[11px] ${labelColor}`}>{label}</div>
    </div>
  );
}
