import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

/** ---------- Utilities ---------- */

const DAY_MS = 24 * 60 * 60 * 1000;

function mdISO(year, m, d) {
  const mm = String(m).padStart(2, "0");
  const dd = String(d).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}

function midISO(startISO, endISO) {
  const s = new Date(startISO).getTime();
  const e = new Date(endISO).getTime();
  const mid = new Date(Math.round((s + e) / 2));
  return mid.toISOString().slice(0, 10);
}

function fmtShortDate(iso) {
  const dt = new Date(iso);
  return dt.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

/** Deterministic RNG (Mulberry32) for any light jitter you might add later */
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * LOESS / LOWESS (local linear regression with tricube kernel).
 * - x: array of numeric x (days since epoch)
 * - y: array of numeric y
 * - hDays: bandwidth in days
 * - w: optional base weights (e.g., sample weights), same length as x
 * Returns yhat array aligned with x.
 */
function loess(x, y, hDays = 28, w = null) {
  const n = x.length;
  const h = hDays; // bandwidth in "days" since x is in days
  const yhat = new Array(n);

  for (let i = 0; i < n; i++) {
    const x0 = x[i];

    // Collect weights using tricube kernel
    let sw = 0, swx = 0, swy = 0, swxx = 0, swxy = 0;
    let count = 0;

    for (let j = 0; j < n; j++) {
      const dist = Math.abs(x[j] - x0);
      if (dist > h) continue;
      const u = dist / h; // 0..1
      // tricube kernel
      const k = Math.pow(1 - Math.pow(u, 3), 3);
      const base = w ? w[j] : 1;
      const wij = Math.max(0, k * base);

      sw += wij;
      swx += wij * x[j];
      swy += wij * y[j];
      swxx += wij * x[j] * x[j];
      swxy += wij * x[j] * y[j];
      count++;
    }

    // If no neighbors within bandwidth, fallback to nearest single point
    if (count === 0 || sw === 0) {
      yhat[i] = y[i];
      continue;
    }

    // Solve weighted linear regression
    const denom = sw * swxx - swx * swx;
    if (Math.abs(denom) < 1e-9) {
      // fallback to weighted mean
      yhat[i] = swy / sw;
    } else {
      const beta1 = (sw * swxy - swx * swy) / denom;   // slope
      const beta0 = (swy - beta1 * swx) / sw;          // intercept
      yhat[i] = beta0 + beta1 * x0;
    }
  }

  return yhat;
}

/** Sample-type weight multipliers */
function sampleTypeFactor(t) {
  const T = (t || "").toUpperCase();
  if (T === "LV") return 1.15; // likely voters (stronger)
  if (T === "RV") return 1.00; // registered voters
  if (T === "A")  return 0.85; // adults (weaker)
  return 1.0;
}

/** ---------- Source Data (2025, as given) ---------- */

const POLLS_2025 = [
  // Pollster, startISO, endISO, sample, type, dem, gop
  ["Quantus Insights", mdISO(2025, 8,11), mdISO(2025, 8,13), 1000, "RV", 45, 42],
  ["Economist/YouGov", mdISO(2025, 8, 9), mdISO(2025, 8,11), 1474, "RV", 42, 40],
  ["Cygnal",           mdISO(2025, 8, 7), mdISO(2025, 8, 9), 1500, "RV", 47, 46],
  ["Economist/YouGov", mdISO(2025, 8, 1), mdISO(2025, 8, 4), 1528, "RV", 44, 38],
  ["CNBC",             mdISO(2025, 7,29), mdISO(2025, 8, 3), 1000, "A",  49, 44],
  ["Economist/YouGov", mdISO(2025, 7,25), mdISO(2025, 7,28), 1610, "RV", 43, 41],
  ["Yahoo News",       mdISO(2025, 7,24), mdISO(2025, 7,28), 1167, "RV", 46, 39],
  ["Emerson",          mdISO(2025, 7,21), mdISO(2025, 7,22), 1400, "RV", 44, 42],
  ["Wall Street Journal", mdISO(2025, 7,16), mdISO(2025, 7,20), 1500, "RV", 46, 43],
  ["Atlas Intel",      mdISO(2025, 7,13), mdISO(2025, 7,18), 1935, "A",  51, 43],
  ["Rasmussen Reports",mdISO(2025, 7,13), mdISO(2025, 7,17), 2288, "LV", 46, 42],
  ["Quantus Insights", mdISO(2025, 7,14), mdISO(2025, 7,16), 1000, "RV", 44, 42],
  ["Big Data Poll",    mdISO(2025, 7,12), mdISO(2025, 7,14), 3022, "RV", 42, 41],
  ["Cygnal",           mdISO(2025, 7, 1), mdISO(2025, 7, 2), 1500, "LV", 47, 46],
  ["Emerson",          mdISO(2025, 6,24), mdISO(2025, 6,25), 1000, "RV", 43, 40],
  ["Quantus Insights", mdISO(2025, 6, 9), mdISO(2025, 6,11), 1000, "RV", 43, 43],
  ["Cygnal",           mdISO(2025, 6, 3), mdISO(2025, 6, 4), 1500, "LV", 47, 47],
  ["Quantus Insights", mdISO(2025, 6, 1), mdISO(2025, 6, 4), 1000, "RV", 46, 45],
  ["Economist/YouGov", mdISO(2025, 5,30), mdISO(2025, 6, 2), 1436, "RV", 44, 42],
  ["Atlas Intel",      mdISO(2025, 5,21), mdISO(2025, 5,27), 3469, "A",  51, 42],
  ["Rasmussen Reports",mdISO(2025, 5,14), mdISO(2025, 5,15), 1012, "LV", 45, 44],
  ["Quantus Insights", mdISO(2025, 5, 5), mdISO(2025, 5, 7), 1000, "RV", 45, 45],
  ["Big Data Poll",    mdISO(2025, 5, 3), mdISO(2025, 5, 5), 3128, "RV", 40, 42],
  ["Newsnation",       mdISO(2025, 4,23), mdISO(2025, 4,27), 1448, "RV", 45, 40],
  ["NY Times/Siena",   mdISO(2025, 4,21), mdISO(2025, 4,24),  913, "RV", 47, 44],
  ["FOX News",         mdISO(2025, 4,18), mdISO(2025, 4,21), 1104, "RV", 49, 42],
  ["CNBC",             mdISO(2025, 4, 9), mdISO(2025, 4,13),  800, "RV", 48, 46],
  ["Economist/YouGov", mdISO(2025, 4, 5), mdISO(2025, 4, 8), 1563, "RV", 43, 42],
  ["Cygnal",           mdISO(2025, 4, 1), mdISO(2025, 4, 3), 1500, "LV", 48, 47],
  ["Wall Street Journal", mdISO(2025, 3,27), mdISO(2025, 4, 1), 1500, "RV", 44, 43],
  ["Quantus Insights", mdISO(2025, 3,25), mdISO(2025, 3,27), 1000, "RV", 45, 46],
  ["NBC News",         mdISO(2025, 3, 7), mdISO(2025, 3,11), 1000, "RV", 48, 47],
  ["Emerson",          mdISO(2025, 3, 2), mdISO(2025, 3, 3), 1000, "RV", 44, 41],
  ["Cygnal",           mdISO(2025, 2, 4), mdISO(2025, 2, 5), 1500, "LV", 46, 47],
  ["Fabrizio/Anzalone",mdISO(2025, 1,27), mdISO(2025, 2, 1), 3000, "RV", 43, 43],
];

/** ---------- Transform + Smooth ---------- */

function buildSeries(bwDays = 28) {
  // Map to mid-dated points
  const points = POLLS_2025.map(([pollster, s, e, n, typ, dem, gop]) => {
    const mid = midISO(s, e);
    return {
      pollster,
      start: s,
      end: e,
      date: mid,
      t: new Date(mid).getTime() / DAY_MS, // days since epoch
      dem,
      gop,
      n,
      typ,
      lead: dem - gop,
    };
  }).sort((a, b) => new Date(a.date) - new Date(b.date));

  // Weights: sqrt(sample size) * sampleTypeFactor
  const weights = points.map(p => Math.sqrt(p.n) * sampleTypeFactor(p.typ));

  const x = points.map(p => p.t);
  const yDem = points.map(p => p.dem);
  const yGop = points.map(p => p.gop);

  const demSmooth = loess(x, yDem, bwDays, weights);
  const gopSmooth = loess(x, yGop, bwDays, weights);

  // Attach smoothed values
  const data = points.map((p, i) => ({
    ...p,
    dem_smooth: demSmooth[i],
    gop_smooth: gopSmooth[i],
  }));

  return data;
}

/** ---------- Page ---------- */

export default function GenericBallotPage() {
  const data = useMemo(() => buildSeries(28), []); // 28-day bandwidth
  const rand = useMemo(() => mulberry32(42), []); // not used, but handy for tweaks

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-8 text-center">
        <h1 className="text-3xl font-bold">Generic Ballot — 2025</h1>
        <p className="text-gray-300 mt-2">
          Raw polls (dots) and LOESS trends (lines). Hover for details.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-gray-800/80 rounded-lg p-6 shadow">
          <div className="flex items-baseline justify-between mb-3">
            <h3 className="text-xl font-semibold">Polling Averages</h3>
            <div className="text-xs text-gray-300">
              Smoothing window: <span className="font-semibold">28 days</span>
            </div>
          </div>

          <div style={{ width: "100%", height: 420 }}>
            <ResponsiveContainer>
              <LineChart data={data} margin={{ top: 10, right: 18, bottom: 8, left: 0 }}>
                <CartesianGrid stroke="#374151" strokeDasharray="4 4" />
                <XAxis
                  dataKey="date"
                  tickFormatter={fmtShortDate}
                  tick={{ fill: "#CBD5E1", fontSize: 12 }}
                  axisLine={{ stroke: "#4B5563" }}
                  tickLine={{ stroke: "#4B5563" }}
                  tickMargin={8}
                />
                <YAxis
                  yAxisId="left"
                  domain={[35, 60]}
                  tick={{ fill: "#CBD5E1", fontSize: 12 }}
                  axisLine={{ stroke: "#4B5563" }}
                  tickLine={{ stroke: "#4B5563" }}
                  tickMargin={6}
                />

                {/* Lead zero line (optional reference) */}
                <ReferenceLine
                  yAxisId="left"
                  y={50}
                  stroke="#6B7280"
                  strokeDasharray="3 3"
                  ifOverflow="extendDomain"
                  label={{ value: "", position: "right", fill: "#9CA3AF" }}
                />

                <Tooltip
                  contentStyle={{ background: "#111827", border: "1px solid #374151", borderRadius: 8 }}
                  labelStyle={{ color: "#E5E7EB" }}
                  formatter={(value, name, payload) => {
                    if (name === "dem_smooth") return [`${value.toFixed(1)}%`, "Dem (LOESS)"];
                    if (name === "gop_smooth") return [`${value.toFixed(1)}%`, "GOP (LOESS)"];
                    if (name === "dem") return [`${value.toFixed(1)}%`, "Dem (poll)"];
                    if (name === "gop") return [`${value.toFixed(1)}%`, "GOP (poll)"];
                    return [value, name];
                  }}
                  labelFormatter={(label, payload) => {
                    if (!payload?.[0]?.payload) return fmtShortDate(label);
                    const p = payload[0].payload;
                    return `${fmtShortDate(p.date)} — ${p.pollster}`;
                  }}
                />
                <Legend
                  wrapperStyle={{ color: "#E5E7EB" }}
                  formatter={(value) =>
                    value === "dem_smooth"
                      ? "Dem (LOESS)"
                      : value === "gop_smooth"
                      ? "GOP (LOESS)"
                      : value === "dem"
                      ? "Dem (polls)"
                      : value === "gop"
                      ? "GOP (polls)"
                      : value
                  }
                />

                {/* Raw dots (no connecting stroke) */}
                <Line
                  yAxisId="left"
                  dataKey="dem"
                  stroke="transparent"
                  dot={{ r: 3, stroke: "#ffffff", strokeWidth: 1, fill: "#60A5FA" }}
                  activeDot={{ r: 4 }}
                />
                <Line
                  yAxisId="left"
                  dataKey="gop"
                  stroke="transparent"
                  dot={{ r: 3, stroke: "#ffffff", strokeWidth: 1, fill: "#FF5865" }}
                  activeDot={{ r: 4 }}
                />

                {/* LOESS trend lines */}
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="dem_smooth"
                  stroke="#60A5FA"
                  strokeWidth={2.8}
                  dot={false}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="gop_smooth"
                  stroke="#FF5865"
                  strokeWidth={2.8}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <p className="text-[11px] text-gray-400 mt-3">
            Weights: √(sample size) × sample-type factor (LV=1.15, RV=1.00, A=0.85). Lines use LOESS with a tricube kernel and local linear fit.
          </p>
        </div>

        {/* Optional: a compact table of latest 8 polls */}
        {/* Add below if you want a quick recent list */}
      </main>
    </div>
  );
}
