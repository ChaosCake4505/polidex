// pages/nyc-mayor.js
import React, { useMemo, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const NYCCountyMap = dynamic(() => import("../components/nyc/nyccountymap"), {
  ssr: false,
});

const PREDICTION_COLORS = [
  { color: "#6495ed", label: "NYC Mayoral Election" },
  { color: "#E30022", label: "NYC Mayoral Election" },
  { color: "#A259D9", label: "NYC Mayoral Election" },
];

/**
 * Polls with all four main candidates (Adams, Cuomo, Mamdani, Sliwa).
 * Walden/Other/Undecided are pooled and split evenly across the four.
 */
const POLLS_4WAY = [
    {
    pollster: "AARP/Gotham",
    dates: "Aug 11",
    sample: 317,
    pop: "RV",
    adams: 8.8, cuomo: 23.4, mamdani: 41.8, sliwa: 16.5,
    walden: 1.4, other: 0.2, undec: 7.9,
  },
  {
    pollster: "Siena University",
    dates: "Aug 4–7",
    sample: 317,
    pop: "RV",
    adams: 7, cuomo: 25, mamdani: 44, sliwa: 12,
    walden: 0, other: 2, undec: 10,
  },
  {
    pollster: "Wick",
    dates: "Jul 18–20",
    sample: 500,
    pop: "LV",
    adams: 9, cuomo: 21, mamdani: 39, sliwa: 18,
    walden: 0, other: 0, undec: 13,
  },
  {
    pollster: "HarrisX",
    dates: "Jul 7–8",
    sample: 585,
    pop: "RV",
    adams: 13, cuomo: 23, mamdani: 26, sliwa: 22,
    walden: 0, other: 0, undec: 15,
  },
  {
    pollster: "Slingshot Strategies (D)",
    dates: "Jul 2–6",
    sample: 1036,
    pop: "RV",
    adams: 11, cuomo: 25, mamdani: 35, sliwa: 14,
    walden: 1, other: 1, undec: 13,
  },
  {
    pollster: "Data for Progress (D)",
    dates: "Jul 1–6",
    sample: 756,
    pop: "LV",
    adams: 15, cuomo: 24, mamdani: 40, sliwa: 14,
    walden: 1, other: 0, undec: 5,
  },
  {
    pollster: "Gotham Polling & Analytics",
    dates: "Jun 30–Jul 2",
    sample: 1021,
    pop: "LV",
    adams: 16, cuomo: 27, mamdani: 41, sliwa: 10,
    walden: 2, other: 0, undec: 4,
  },
  {
    pollster: "American Pulse Research & Polling",
    dates: "Jun 28–Jul 1",
    sample: 568,
    pop: "LV",
    adams: 14, cuomo: 29, mamdani: 35, sliwa: 16,
    walden: 1, other: 1, undec: 3,
  },
  {
    pollster: "Honan Strategy Group (D)",
    dates: "Jun 25",
    sample: 817,
    pop: "LV",
    adams: 13, cuomo: 39, mamdani: 39, sliwa: 7,
    walden: 0, other: 0, undec: 2,
  },
  {
    pollster: "Manhattan Institute",
    dates: "Jun 10–16",
    sample: 1000,
    pop: "LV",
    adams: 10, cuomo: 39, mamdani: 25, sliwa: 12,
    walden: 3, other: 0, undec: 11,
  },
];

// --- Simple LOESS smoother (tricube weights, local linear) ---
function loessSmoother(data, keys, { bandwidth = 0.45 } = {}) {
  const n = data.length;
  if (n === 0) return [];
  const span = Math.max(3, Math.ceil(Math.min(Math.max(bandwidth, 0.2), 0.8) * n));
  const xs = Array.from({ length: n }, (_, i) => i);
  const out = data.map((d) => ({ ...d }));

  const fitOneKey = (key) => {
    const ys = data.map((d) => Number(d[key]));
    const valid = ys.filter((v) => Number.isFinite(v));
    const outKey = key.replace(/Avg$/, "") + "Loess";
    if (valid.length < 3) {
      for (let i = 0; i < n; i++) out[i][outKey] = ys[i];
      return;
    }
    for (let i = 0; i < n; i++) {
      let left = Math.max(0, i - Math.floor(span / 2));
      let right = Math.min(n - 1, left + span - 1);
      left = Math.max(0, right - span + 1);

      const x0 = xs[i];
      const maxd =
        Math.max(Math.abs(x0 - xs[left]), Math.abs(xs[right] - x0)) || 1;

      let Sw = 0, Sx = 0, Sy = 0, Sxx = 0, Sxy = 0;
      for (let j = left; j <= right; j++) {
        const d = Math.abs(xs[j] - x0) / maxd;
        const w = Math.pow(1 - Math.pow(d, 3), 3); // tricube
        const x = xs[j], y = ys[j];
        Sw += w;
        Sx += w * x;
        Sy += w * y;
        Sxx += w * x * x;
        Sxy += w * x * y;
      }
      const denom = Sw * Sxx - Sx * Sx;
      const b = Math.abs(denom) < 1e-12 ? 0 : (Sw * Sxy - Sx * Sy) / denom;
      const a = (Sy - b * Sx) / Sw;
      out[i][outKey] = a + b * x0;
    }
  };

  keys.forEach(fitOneKey);
  return out;
}

/** Convert each poll into “effective” support after distributing non-allocations evenly */
function toEffectiveRow(p) {
  const pool = (p.undec || 0) + (p.other || 0) + (p.walden || 0);
  const add = pool / 4;
  return {
    name: p.dates,
    pollster: p.pollster,
    sample: p.sample,
    pop: p.pop,
    // raw effective shares to one decimal
    Adams: +(p.adams + add).toFixed(1),
    Cuomo: +(p.cuomo + add).toFixed(1),
    Mamdani: +(p.mamdani + add).toFixed(1),
    Sliwa: +(p.sliwa + add).toFixed(1),
  };
}

/** Running averages across the ordered list (to one decimal) */
function buildRunningAverages(rows) {
  let a = 0, c = 0, m = 0, s = 0;
  return rows.map((r, i) => {
    a += r.Adams; c += r.Cuomo; m += r.Mamdani; s += r.Sliwa;
    return {
      name: r.name,
      pollster: r.pollster,
      sample: r.sample,
      pop: r.pop,
      AdamsAvg: +(a / (i + 1)).toFixed(1),
      CuomoAvg: +(c / (i + 1)).toFixed(1),
      MamdaniAvg: +(m / (i + 1)).toFixed(1),
      SliwaAvg: +(s / (i + 1)).toFixed(1),
    };
  });
}

function CandidateCard({ name, party, percent, image, accent }) {
  // force one decimal on the card too
  const pct = typeof percent === "number"
    ? `${percent.toFixed(1)}%`
    : typeof percent === "string" && percent.endsWith("%")
    ? percent
    : percent ?? "—";

  return (
    <div className="flex items-center gap-4 bg-gray-700 p-4 rounded-xl shadow-md">
      <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-gray-600 shrink-0 bg-gray-600">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="flex-1">
        <div className="text-base">{name}</div>
        <div className="text-sm text-gray-300">{party}</div>
      </div>
      <div className="text-2xl font-semibold" style={{ color: accent }}>
        {pct}
      </div>
    </div>
  );
}

export default function NYCMayoralPage() {
  const YEAR = 2025;
  const [colorIdx, setColorIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setColorIdx((p) => (p + 1) % PREDICTION_COLORS.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  // Ingest rows
  const effRows = useMemo(() => POLLS_4WAY.map(toEffectiveRow), []);
  const pollData = useMemo(() => buildRunningAverages(effRows), [effRows]);

  // Smoothed series (not labeled as "LOESS" in the UI)
  const smoothData = useMemo(
    () =>
      loessSmoother(pollData, ["MamdaniAvg", "CuomoAvg", "AdamsAvg", "SliwaAvg"], {
        bandwidth: 0.45,
      }),
    [pollData]
  );

  const last = pollData[pollData.length - 1];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
{/* Header bar */}
<div className="w-full bg-gray-800 py-10 px-6 text-center">
  <h1 className="text-4xl font-bold mb-3 leading-tight">
    Polidex forecasts that <span className="text-[#6495ed]">Zohran Mamdani</span> will win the {YEAR} NYC Mayoral Race.
  </h1>

  <p className="text-lg">
    <span className="text-[#6495ed] font-semibold">Mamdani</span> has an{" "}
    <span className="text-[#6495ed] font-bold">86%</span> likelihood of winning.
  </p>

  <p className="max-w-3xl mx-auto text-base mt-4 text-gray-300">
    Four-way race: Zohran Mamdani (D), Andrew Cuomo (I), Eric Adams (I), Curtis Sliwa (R).
  </p>
  <p className="mt-2 italic text-sm text-gray-400">
    * Undecided/Other/Walden split evenly among the four candidates in the running averages.
  </p>
</div>


{/* Candidate cards — manual percents; pass numbers, not strings */}
<div className="max-w-7xl mx-auto my-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="flex flex-col gap-6">
    <CandidateCard
      name="Zohran Mamdani"
      party="Democratic"
      percent={86} // ← enters as 86.0% (CandidateCard formats to one decimal)
      image="/mamdani.jpg"
      accent="#6495ed"
    />
    <CandidateCard
      name="Andrew Cuomo"
      party="Independent"
      percent={14.0} // ← edit manually
      image="/cuomo.jpg"
      accent="#22c55e"
    />
  </div>
  <div className="flex flex-col gap-6">
    <CandidateCard
      name="Eric Adams"
      party="Independent"
      percent={0} // ← edit manually
      image="/adams.jpg"
      accent="#8b5cf6"
    />
    <CandidateCard
      name="Curtis Sliwa"
      party="Republican"
      percent={0} // ← edit manually
      image="/sliwa.webp"
      accent="#E30022"
    />
  </div>
</div>


      {/* Borough map */}
      <div className="bg-gray-800 p-6 rounded-lg shadow max-w-6xl mx-auto my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Borough Forecast</h2>
        <NYCCountyMap />
      </div>

      {/* Polling chart (smoothed) */}
      <div className="max-w-6xl mx-auto my-12 bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Polling Trend</h2>
        <div className="h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={smoothData}>
              <CartesianGrid stroke="#444" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis domain={[0, 70]} stroke="#ccc" tickFormatter={(v) => `${v}%`} />
              <Tooltip
                formatter={(v) => `${Number(v).toFixed(1)}%`} // one decimal everywhere
                contentStyle={{
                  backgroundColor: "#111827",
                  border: "1px solid #374151",
                  color: "#fff",
                  borderRadius: 12,
                }}
                labelStyle={{ color: "#fff" }}
              />
              <Legend wrapperStyle={{ color: "#fff" }} />
              {/* Order: Mamdani, Cuomo, Adams, Sliwa; labels without "LOESS" */}
              <Line type="monotone" dataKey="MamdaniLoess" name="Mamdani" stroke="#6495ed" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="CuomoLoess"   name="Cuomo"   stroke="#22c55e" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="AdamsLoess"   name="Adams"   stroke="#8b5cf6" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="SliwaLoess"   name="Sliwa"   stroke="#E30022" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Primary button below chart */}
        <div className="text-center mt-6">
          <Link
            href="/primaries/nyc-mayor"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
          >
            View NYC Mayoral Primaries →
          </Link>
        </div>
      </div>

      {/* Recent polls table — order: Mamdani, Cuomo, Adams, Sliwa */}
      <div className="max-w-6xl mx-auto mb-12 bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3 text-center">Recent Polls (Effective Shares)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-800/60">
              <tr>
                <th className="p-2 text-left">Dates</th>
                <th className="p-2 text-left">Pollster</th>
                <th className="p-2 text-right">Mamdani</th>
                <th className="p-2 text-right">Cuomo</th>
                <th className="p-2 text-right">Adams</th>
                <th className="p-2 text-right">Sliwa</th>
                <th className="p-2 text-right">Sample</th>
                <th className="p-2 text-right">Pop</th>
              </tr>
            </thead>
            <tbody>
              {effRows.slice().reverse().map((r, i) => (
                <tr key={i} className={i % 2 ? "bg-gray-900/20" : ""}>
                  <td className="p-2">{r.name}</td>
                  <td className="p-2">{r.pollster}</td>
                  <td className="p-2 text-right text-[#6495ed]">{r.Mamdani.toFixed(1)}%</td>
                  <td className="p-2 text-right text-green-400">{r.Cuomo.toFixed(1)}%</td>
                  <td className="p-2 text-right">{r.Adams.toFixed(1)}%</td>
                  <td className="p-2 text-right text-red-400">{r.Sliwa.toFixed(1)}%</td>
                  <td className="p-2 text-right">{r.sample.toLocaleString()}</td>
                  <td className="p-2 text-right">{r.pop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-xs text-gray-400 mt-2">
          Effective share = reported share + (Undecided + Other + Walden)/4.
        </div>
      </div>

      <Footer />
    </div>
  );
}
