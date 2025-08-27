// pages/senate.js
import React, { useState, useEffect, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import Header from "../components/header";
import Footer from "../components/footer";
import SenateOddsByState from "../components/SenateOddsByState";

const SenateMap = dynamic(() => import("../components/senatemap"), { ssr: false });
const CurrentSenateMap = dynamic(() => import("../components/currentsenatemap"), { ssr: false });

const PREDICTION_COLORS = [
  { color: "#6495ed", label: "Senate Predictions" },
  { color: "#E30022", label: "Senate Predictions" },
  { color: "#A259D9", label: "Senate Predictions" },
];

/* ============================ DATA SOURCE ============================ */
/** Paste/extend this table so it includes ALL sitting 2025 senators.
 *  Format: rank name PARTY STATE Crucial_Lifetime Crucial_2025 Overall_Lifetime Overall_2025  ...  vsStateTilt
 *  (This is the same format you shared earlier.)
 */
const RAW_RANK_TABLE = `
1 Warren, Elizabeth D MA 98.53 100.00 99.13 99.37 Strong Dem +15.20 rank 5
2 Hirono, Mazie D HI 98.50 100.00 98.36 99.17 Strong Dem +15.17 rank 5
3 Blunt Rochester, Lisa D DE 98.31 98.31 98.13 98.13 Strong Dem +14.98 rank 5
4 Markey, Ed D MA 98.06 100.00 98.94 99.79 Strong Dem +14.73 rank 5
5 Merkley, Jeff D OR 97.15 100.00 98.24 100.00 Strong Dem +13.82 rank 5
6 Schatz, Brian D HI 96.17 99.15 96.82 97.29 Strong Dem +12.84 rank 5
7 Van Hollen, Chris D MD 95.91 100.00 96.30 99.58 Strong Dem +12.58 rank 5
8 Padilla, Alex D CA 95.62 96.89 97.61 96.28 Strong Dem +12.29 rank 5
9 Smith, Tina 1 D MN 95.54 99.54 96.08 98.24 Leans Dem +15.54 rank 5
10 Booker, Cory D NJ 95.50 92.70 97.23 93.79 Leans Dem +15.50 rank 5
11 Gillibrand, Kirsten D NY 95.29 88.66 97.49 90.78 Strong Dem +11.96 rank 5
12 Baldwin, Tammy D WI 95.21 96.22 95.35 94.18 Swing +18.54 rank 5
13 Welch, Peter D VT 94.99 93.13 96.59 94.00 Strong Dem +11.66 rank 5
14 Sanders, Bernie I VT 94.95 96.85 96.49 98.19 Strong Dem +11.62 rank 5
15 Durbin, Dick D IL 94.59 93.56 94.91 93.19 Strong Dem +11.26 rank 5
16 Alsobrooks, Angela D MD 94.51 94.51 94.29 94.29 Strong Dem +11.18 rank 5
17 Blumenthal, Richard D CT 94.41 96.20 96.34 96.03 Strong Dem +11.08 rank 5
18 Reed, Jack D RI 93.98 89.50 95.20 91.16 Strong Dem +10.65 rank 5
19 Lujan, Ben D NM 93.97 92.86 96.86 94.34 Leans Dem +13.97 rank 5
20 Whitehouse, Sheldon D RI 92.62 95.24 94.50 94.17 Strong Dem +9.29 rank 5
21 Ossoff, Jon D GA 92.61 90.18 95.55 90.97 Swing +15.94 rank 5
22 Warnock, Raphael D GA 92.51 87.66 95.13 88.77 Swing +15.84 rank 5
23 Schumer, Chuck D NY 92.06 98.74 94.88 96.67 Strong Dem +8.73 rank 5
24 Heinrich, Martin D NM 91.93 83.47 94.05 87.82 Leans Dem +11.93 rank 5
25 Duckworth, Tammy D IL 91.52 95.32 93.45 95.33 Strong Dem +8.19 rank 5
26 Kim, Andy D NJ 90.80 90.76 92.76 92.71 Leans Dem +10.80 rank 5
27 Schiff, Adam D CA 90.36 91.56 91.75 92.37 Strong Dem +7.03 rank 5
28 Hickenlooper, John D CO 90.34 86.02 94.58 88.42 Strong Dem +7.01 rank 5
29 Cantwell, Maria D WA 89.94 96.64 93.59 94.59 Strong Dem +6.61 rank 5
30 Wyden, Ron D OR 89.71 98.70 93.39 97.67 Strong Dem +6.38 rank 5
31 Murray, Patty D WA 89.62 91.03 93.24 94.78 Strong Dem +6.29 rank 5
32 Murphy, Chris D CT 88.77 97.89 92.32 98.72 Strong Dem +5.44 rank 5
33 Cortez Masto, Catherine D NV 88.66 86.55 91.16 87.82 Swing +11.99 rank 5
34 Peters, Gary D MI 87.80 87.98 90.98 89.60 Swing +11.13 rank 5
35 Klobuchar, Amy D MN 87.65 88.19 92.50 89.77 Leans Dem +7.65 rank 5
36 Kelly, Mark D AZ 86.65 80.09 92.11 84.55 Swing +9.98 rank 5
37 Coons, Chris D DE 84.31 88.31 90.52 90.69 Strong Dem +0.98 rank 5
38 Kaine, Tim D VA 83.83 83.05 89.71 88.05 Leans Dem +3.83 rank 5
39 Rosen, Jacky D NV 83.77 79.32 89.40 82.98 Swing +7.10 rank 5
40 Bennet, Michael D CO 83.30 90.99 89.97 91.72 Strong Dem -0.03 rank 5
41 Shaheen, Jeanne D NH 80.85 77.49 89.07 82.11 Leans Dem +0.85 rank 5
42 Fetterman, John 1 D PA 80.72 75.88 86.58 79.65 Swing +4.05 rank 5
43 Hassan, Maggie D NH 79.93 74.37 86.78 82.01 Leans Dem -0.07 rank 5
44 Slotkin, Elissa D MI 79.15 79.15 84.15 84.15 Swing +2.48 rank 5
45 Gallego, Ruben D AZ 78.67 78.67 82.89 82.89 Swing +2.00 rank 5
46 King, Angus I ME 77.54 82.40 85.87 84.96 Leans Dem -2.46 rank 5
47 Warner, Mark D VA 77.30 77.02 87.12 82.52 Leans Dem -2.70 rank 5
48 Collins, Susan R ME 24.20 22.69 38.46 13.49 Leans Dem -55.80 rank 5
49 Murkowski, Lisa R AK 11.80 22.03 28.68 12.92 Strong Rep -58.20 rank 5
50 Paul, Rand 1 R KY 10.60 11.21 8.76 7.66 Strong Rep -59.40 rank 5
51 Lee, Mike R UT 5.19 0.85 5.52 0.42 Strong Rep -64.81 rank 5
52 Graham, Lindsey R SC 4.73 0.00 16.00 0.22 Strong Rep -65.27 rank 5
53 Hawley, Josh R MO 4.28 8.62 3.58 5.16 Strong Rep -65.72 rank 5
54 Grassley, Chuck R IA 3.93 0.00 8.71 0.41 Strong Rep -66.07 rank 5
55 Sullivan, Dan R AK 3.14 4.26 5.89 2.75 Strong Rep -66.86 rank 5
56 Daines, Steve R MT 2.55 0.43 3.71 0.21 Strong Rep -67.45 rank 5
57 Moran, Jerry R KS 2.54 0.87 7.82 0.65 Strong Rep -67.46 rank 5
58 Cruz, Ted R TX 2.44 0.00 2.09 0.00 Strong Rep -67.56 rank 5
59 Kennedy, John R LA 2.13 0.00 5.76 0.21 Strong Rep -67.87 rank 5
60 Lummis, Cynthia R WY 2.02 0.43 3.11 0.21 Strong Rep -67.98 rank 5
61 Hoeven, John R ND 1.86 0.00 5.82 0.21 Strong Rep -68.14 rank 5
62 Thune, John R SD 1.83 0.00 4.38 0.42 Strong Rep -68.17 rank 5
63 McConnell, Mitch R KY 1.71 3.83 6.25 2.61 Strong Rep -68.29 rank 5
64 Crapo, Mike R ID 1.32 0.00 3.92 0.21 Strong Rep -68.68 rank 5
65 Rounds, Mike R SD 1.29 0.00 11.11 0.21 Strong Rep -68.71 rank 5
66 Cassidy, Bill R LA 1.29 0.00 7.24 0.43 Strong Rep -68.71 rank 5
67 Capito, Shelley R WV 1.28 0.00 11.62 0.21 Strong Rep -68.72 rank 5
68 Tuberville, Tommy R AL 1.21 0.00 1.03 0.00 Strong Rep -68.79 rank 5
69 Marshall, Roger R KS 1.20 0.00 2.62 0.00 Strong Rep -68.80 rank 5
70 Scott, Rick R FL 1.20 0.00 1.29 0.21 Strong Rep -68.80 rank 5
71 Johnson, Ron R WI 1.17 0.00 2.36 0.00 Swing -75.50 rank 5
72 Schmitt, Stephen R MO 1.14 0.00 1.78 0.00 Strong Rep -68.86 rank 5
73 Cramer, Kevin R ND 1.10 0.00 5.72 0.21 Strong Rep -68.90 rank 5
74 Tillis, Thom R NC 1.05 1.74 12.31 1.55 Swing -75.62 rank 5
75 Scott, Tim R SC 0.98 0.00 2.16 0.21 Strong Rep -69.02 rank 5
76 Hagerty, Bill R TN 0.95 0.00 2.33 0.00 Strong Rep -69.05 rank 5
77 Young, Todd R IN 0.94 0.00 9.77 0.21 Strong Rep -69.06 rank 5
78 Wicker, Roger R MS 0.91 0.00 7.45 0.21 Strong Rep -69.09 rank 5
79 Barrasso, John R WY 0.87 0.00 2.16 0.21 Strong Rep -69.13 rank 5
80 Lankford, James R OK 0.87 0.00 2.04 0.21 Strong Rep -69.13 rank 5
81 Cornyn, John R TX 0.87 0.00 5.69 0.00 Strong Rep -69.13 rank 5
82 Curtis, John R UT 0.84 0.84 0.42 0.42 Strong Rep -69.16 rank 5
83 Boozman, John R AR 0.83 0.00 3.45 0.21 Strong Rep -69.17 rank 5
84 Ernst, Joni R IA 0.72 0.00 3.62 0.00 Strong Rep -69.28 rank 5
85 Blackburn, Marsha R TN 0.67 0.00 1.13 0.00 Strong Rep -69.33 rank 5
86 Risch, James R ID 0.57 0.00 3.02 0.00 Strong Rep -69.43 rank 5
87 Mullin, Markwayne R OK 0.46 0.00 2.70 0.21 Strong Rep -69.54 rank 5
88 Sheehy, Tim R MT 0.43 0.43 0.21 0.21 Strong Rep -69.57 rank 5
89 Cotton, Tom R AR 0.40 0.00 1.73 0.00 Strong Rep -69.60 rank 5
90 Fischer, Deb R NE 0.38 0.42 2.87 0.42 Strong Rep -69.62 rank 5
91 Britt, Elizabeth R AL 0.23 0.00 0.50 0.00 Strong Rep -69.77 rank 5
92 Budd, Ted R NC 0.23 0.42 1.59 0.21 Swing -76.44 rank 5
93 Hyde-Smith, Cindy R MS 0.20 0.00 3.67 0.21 Strong Rep -69.80 rank 5
94 Banks, Jim R IN 0.23 0.42 1.59 0.21 Swing -76.44 rank 5
94 Husted, Jon R OH 0.98 0.00 2.16 0.21 Strong Rep -69.02 rank 5
94 Justice, Jim R WV 0.23 0.42 1.59 0.21 Swing -76.44 rank 5
94 McCormick, Dave R PA 0.00 0.00 0.21 0.21 Swing -76.67 rank 5
94 Moody, Ashley R FL 0.98 0.00 2.16 0.21 Strong Rep -69.02 rank 5
94 Moreno, Bernie R OH 0.98 0.00 2.16 0.21 Strong Rep -69.02 rank 5
94 Ricketts, Pete R NE 0.98 0.00 2.16 0.21 Strong Rep -69.02 rank 5
`.trim();

/* ====================== BUILD Social (x) & Economic (y) ====================== */
/** x = Social Liberalism (higher → more socially liberal) from Crucial Votes (2025–26)
 *  y = Economic Progressivism (higher → more progressive) from Overall (2025–26)
 *  Normalize both 0..100 to -1..1 with 50 centered at 0.
 */
function parseSocEconRows(raw) {
  const lines = raw.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  const out = [];
  // rank  name...  PARTY  STATE  crucial_L  crucial_25  overall_L  overall_25  ...  vsTilt
  const re = /^\s*\d+\s+(.+?)\s+([DRI])\s+([A-Z]{2})\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+.*?([+\-]\d+(?:\.\d+)?)/;

  for (const line of lines) {
    const m = line.match(re);
    if (!m) continue;
    let name = m[1].replace(/\s+\d+$/, "").trim();
    const party = m[2];
    const state = m[3];
    const crucial25 = parseFloat(m[5]);
    const crucialL  = parseFloat(m[4]);
    const overall25 = parseFloat(m[7]);
    const overallL  = parseFloat(m[6]);
    const vsTilt    = parseFloat(m[8]);

    const socialRaw = (crucial25 > 0 ? crucial25 : crucialL);
    const econRaw   = (overall25 > 0 ? overall25 : overallL);

    const norm = (v) => Math.max(-1, Math.min(1, (Number(v) - 50) / 50));
    let x = norm(socialRaw);
    let y = norm(econRaw);

    // If missing, nudge from vsTilt sign so they don't stack on (0,0)
    const s = Math.sign(vsTilt || 0) || 0;
    if (!isFinite(x) || socialRaw === 0) x = s * 0.15;
    if (!isFinite(y) || econRaw   === 0) y = s * 0.15;

    out.push({ name: `${name} (${state})`, party, state, x: Number(x.toFixed(3)), y: Number(y.toFixed(3)) });
  }
  return out;
}

const SENATE_SOC_ECON_POINTS = parseSocEconRows(RAW_RANK_TABLE);

/* ===================== Example odds table (stub) ===================== */
const SENATE_ODDS = [
  { state: "MI", rep: "Republican",   dem: "Democrat",      repVote: 49, demVote: 50, repOdds: 0.43, demOdds: 0.57 },
  { state: "GA", rep: "Republican",   dem: "Jon Ossoff",    repVote: 49, demVote: 51, repOdds: 0.41, demOdds: 0.59 },
  { state: "NC", rep: "Republican",   dem: "Roy Cooper",    repVote: 49, demVote: 51, repOdds: 0.41, demOdds: 0.59 },
  { state: "ME", rep: "Susan Collins",dem: "Democrat",      repVote: 51, demVote: 49, repOdds: 0.59, demOdds: 0.41 },
  { state: "OH", rep: "Jon Husted",   dem: "Sherrod Brown", repVote: 52, demVote: 47, repOdds: 0.72, demOdds: 0.28 },
  { state: "NE", rep: "Pete Rickets", dem: "Dan Osborn",    repVote: 53, demVote: 46, repOdds: 0.77, demOdds: 0.23, demParty: "I" },
  { state: "TX", rep: "Republican",   dem: "Democrat",      repVote: 53, demVote: 46, repOdds: 0.82, demOdds: 0.18 },
  { state: "IA", rep: "Republican",   dem: "Democrat",      repVote: 55, demVote: 45, repOdds: 0.86, demOdds: 0.14 },
  { state: "NH", rep: "Republican",   dem: "Chris Pappas",  repVote: 44, demVote: 56, repOdds: 0.12, demOdds: 0.88 },
  { state: "AK", rep: "Dan Sullivan", dem: "Democrat",      repVote: 56, demVote: 44, repOdds: 0.88, demOdds: 0.12 },
];

/* ===================== Outcome Sampler (same as prior inline) ===================== */
function SenateOutcomeSamplerInline({
  majority = 50,
  totalDots = 100,
  repCount = 90,
  demCount = 10,
}) {
  const S1 = 110, S2 = 200, S3 = 290, S4 = 380, S5 = 470;
  const HEIGHT = 360, DOT = 20, GAP = 24, CLOSE_W = 10, H_SIG = 3.5, TOP_PAD = 6, BOT_PAD = 6, MARGIN_X = 30;
  const TOTAL_W = 2 * S5 + 2 * MARGIN_X;
  const midX = TOTAL_W / 2;

  const r52 = Math.round(0.50 * repCount);
  const r51 = Math.round(0.35 * repCount);
  const r53 = Math.round(0.05 * repCount);
  const r50 = repCount - (r52 + r51 + r53);
  const d51 = demCount;

  const RAILS = [-S5, -S4, -S3, -S2, -S1, 0, +S1, +S2, +S3, +S4, +S5];
  const mulberry32 = (seed) => () => { let t = (seed = (seed + 0x6D2B79F5) >>> 0); t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const rand = mulberry32(0xC0FFEE);
  const gauss = (mu = 0, sigma = 1) => { const u1 = Math.max(1e-9, rand()); const u2 = Math.max(1e-9, rand()); const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2); return mu + sigma * z; };

  function halfWidthFor(x0) {
    const idx = RAILS.indexOf(x0);
    const left = idx > 0 ? RAILS[idx - 1] : null;
    const right = idx < RAILS.length - 1 ? RAILS[idx + 1] : null;
    let wLeft = Infinity, wRight = Infinity;
    if (left !== null) wLeft = Math.max(0, (x0 - left) / 2 - GAP / 2);
    if (right !== null) wRight = Math.max(0, (right - x0) / 2 - GAP / 2);
    const safe = Math.min(wLeft, wRight);
    return Math.max(6, Math.min(safe, CLOSE_W));
  }
  const off = (lab) => (lab === 51 ? S1 : lab === 52 ? S2 : lab === 53 ? S3 : lab === 54 ? S4 : lab === 55 ? S5 : 0);

  function makeColumnScatter({ count, x0, color, centerShift = 0 }) {
    if (count <= 0) return [];
    const halfW = halfWidthFor(x0);
    const yMin = BOT_PAD, yMax = HEIGHT - DOT - TOP_PAD;
    const rngY = Math.max(1, yMax - yMin);
    const step = rngY / count;
    const yJit = Math.min(6, step * 0.35);
    const dots = [];
    for (let i = 0; i < count; i++) {
      const baseY = yMin + i * step + step / 2;
      const bottom = Math.max(0, Math.min(HEIGHT - DOT, baseY + gauss(0, yJit)));
      let dx = Math.max(-halfW + 2, Math.min(halfW - 2, gauss(0, 3.5)));
      dots.push({ left: midX + x0 + dx + centerShift, bottom, color });
    }
    return dots;
  }

  const placements = useMemo(() => ([
    ...makeColumnScatter({ count: r52, x0: -off(52), color: "#FF5865" }),
    ...makeColumnScatter({ count: r51, x0: -off(51), color: "#FF5865" }),
    ...makeColumnScatter({ count: r53, x0: -off(53), color: "#FF5865" }),
    ...makeColumnScatter({ count: r50, x0: 0, centerShift: -5, color: "#FF5865" }),
    ...makeColumnScatter({ count: d51, x0: +off(51), color: "#60A5FA" }),
  ]), [r52, r51, r53, r50, d51]); // eslint-disable-line react-hooks/exhaustive-deps

  const RailLine = ({ x, label, thick = false, color = "#6B7280", labelColor = "text-gray-300" }) => (
    <div className="absolute flex flex-col items-center" style={{ left: midX + x, transform: "translateX(-50%)" }}>
      <div className="bg-gray-600/70" style={{ width: thick ? 6 : 3, height: HEIGHT, backgroundColor: color }} />
      <div className={`mt-2 text-[11px] ${labelColor}`}>{label}</div>
    </div>
  );

  return (
    <div className="bg-gray-800/80 rounded-lg p-8 shadow mx-auto">
      <div className="text-center">
        <h3 className="italic text-xl font-semibold mb-1">Republicans favored to control the Senate</h3>
        <p className="text-sm text-gray-300">100 simulated outcomes; dots fill each column vertically and hug the rail horizontally.</p>
      </div>

      <div className="flex justify-between text-center text-base font-semibold my-6">
        <div className="text-[#FF5865]">Republicans win <span className="text-2xl">{90}</span> in {totalDots}</div>
        <div className="text-blue-400">Democrats win <span className="text-2xl">{10}</span> in {totalDots}</div>
      </div>

      <div className="relative mx-auto" style={{ width: 2 * S5 + 2 * MARGIN_X }}>
        <RailLine x={0} label={`Majority (${majority})`} thick color="#FF5865" labelColor="text-[#FF9AA4]" />
        {[51,52,53,54,55].map((lab) => (<RailLine key={`L${lab}`} x={-off(lab)} label={lab} color="#FF5865" labelColor="text-[#FF9AA4]" />))}
        {[51,52,53,54,55].map((lab) => (<RailLine key={`R${lab}`} x={+off(lab)} label={lab} color="#60A5FA" labelColor="text-blue-300" />))}
        <div className="relative" style={{ height: 360 }}>
          {placements.map((p, idx) => (
            <span key={idx} className="absolute rounded-full" style={{
              left: p.left, bottom: p.bottom, width: DOT, height: DOT, backgroundColor: p.color,
              border: "2px solid #ffffff", boxShadow: "0 1px 0 rgba(0,0,0,0.25)",
            }}/>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===================== Social/Economic Compass (tooltip over dot) ===================== */
function SocialEconCompass({ points }) {
  const PARTY_COLORS = { D: "#60A5FA", R: "#FF5865", I: "#9CA3AF" };

  // Least-squares best-fit over provided points
  const { m, b } = useMemo(() => {
    const n = Math.max(1, points.length);
    let sx = 0, sy = 0, sxx = 0, sxy = 0;
    points.forEach(({ x, y }) => { sx += x; sy += y; sxx += x * x; sxy += x * y; });
    const denom = n * sxx - sx * sx;
    const m = denom !== 0 ? (n * sxy - sx * sy) / denom : 0;
    const b = sy / n - m * (sx / n);
    return { m, b };
  }, [points]);

  // Layout (extra side margins so dots never clip)
  const viewW = 1180, viewH = 660;
  const margin = { top: 64, right: 140, bottom: 84, left: 140 };
  const plotW = viewW - margin.left - margin.right;
  const plotH = viewH - margin.top - margin.bottom;
  const xToSvg = (x) => margin.left + ((x + 1) / 2) * plotW;
  const yToSvg = (y) => margin.top + ((1 - (y + 1) / 2) * plotH); // y=1 top
  const ticks = [-1, -0.5, 0, 0.5, 1];

  // Tooltip anchored to the dot position
  const wrapRef = useRef(null); // the absolute-positioning container
  const svgRef = useRef(null);  // the <svg> element
  const [tip, setTip] = useState(null); // {x,y,name,party,xVal,yVal}

  const showTip = (p) => (/* MouseEvent e */) => {
    const wrapRect = wrapRef.current?.getBoundingClientRect();
    const svgRect  = svgRef.current?.getBoundingClientRect();
    if (!wrapRect || !svgRect) return;

    // Convert the dot’s SVG coords to CSS pixels inside the wrapping container
    const sx = svgRect.width / viewW;
    const sy = svgRect.height / viewH;
    const px = xToSvg(p.x) * sx + (svgRect.left - wrapRect.left);
    const py = yToSvg(p.y) * sy + (svgRect.top  - wrapRect.top);

    setTip({
      x: px,
      y: py,
      name: p.name,
      party: p.party,
      xVal: p.x,
      yVal: p.y,
    });
  };
  const hideTip = () => setTip(null);

  return (
    <div ref={wrapRef} className="bg-gray-800/80 rounded-lg p-6 shadow relative overflow-visible">
      <div className="text-center mb-2">
        <h3 className="text-xl font-semibold">Senate Social & Economic Compass (2025)</h3>
        <p className="text-sm text-gray-300">
          Right = <b>More Socially Liberal</b> · Left = <b>More Socially Conservative</b> · Up = <b>More Economically Progressive</b> · Down = <b>More Economically Conservative</b>
        </p>
      </div>

      <svg
        ref={svgRef}
        viewBox={`0 0 ${viewW} ${viewH}`}
        className="w-full h-auto overflow-visible"
        style={{ display: "block" }}
      >
        {/* Background */}
        <rect x={margin.left} y={margin.top} width={plotW} height={plotH}
              fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>

        {/* Grid + ticks */}
        {ticks.map((t, i) => (
          <g key={`gx-${i}`}>
            <line x1={xToSvg(t)} y1={margin.top} x2={xToSvg(t)} y2={margin.top + plotH}
                  stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4"/>
            <text x={xToSvg(t)} y={margin.top + plotH + 18} fill="#d1d5db" fontSize="11" textAnchor="middle">{t}</text>
          </g>
        ))}
        {ticks.map((t, i) => (
          <g key={`gy-${i}`}>
            <line x1={margin.left} y1={yToSvg(t)} x2={margin.left + plotW} y2={yToSvg(t)}
                  stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4"/>
            <text x={margin.left - 18} y={yToSvg(t) + 4} fill="#d1d5db" fontSize="11" textAnchor="end">{t}</text>
          </g>
        ))}

        {/* Axes */}
        <line x1={xToSvg(-1)} y1={yToSvg(0)} x2={xToSvg(1)} y2={yToSvg(0)} stroke="#9CA3AF" strokeWidth="1.5"/>
        <line x1={xToSvg(0)} y1={yToSvg(-1)} x2={xToSvg(0)} y2={yToSvg(1)} stroke="#9CA3AF" strokeWidth="1.5"/>

        {/* Axis labels */}
        <text x={xToSvg(0)} y={margin.top - 16} fill="#e5e7eb" fontSize="12" textAnchor="middle">Fiscally Progressive ↑</text>
        <text x={xToSvg(0)} y={margin.top + plotH + 36} fill="#e5e7eb" fontSize="12" textAnchor="middle">↓Fiscally Conservative</text>
        <text x={margin.left - 28} y={yToSvg(0)} fill="#e5e7eb" fontSize="12" textAnchor="end">Socially Conservative ←</text>
        <text x={margin.left + plotW + 28} y={yToSvg(0)} fill="#e5e7eb" fontSize="12" textAnchor="start">→ Socially Liberal</text>

        {/* Best-fit line */}
        <line x1={xToSvg(-1)} y1={yToSvg(m * -1 + b)} x2={xToSvg(1)} y2={yToSvg(m * 1 + b)} stroke="#FBBF24" strokeWidth="3" opacity="0.9"/>

        {/* Points (hover tooltips; no legend; no controls) */}
        {points.map((p, idx) => (
          <g key={idx} onMouseEnter={showTip(p)} onMouseMove={showTip(p)} onMouseLeave={hideTip}>
            <circle cx={xToSvg(p.x)} cy={yToSvg(p.y)} r={5.5}
                    fill={p.party === "D" ? "#60A5FA" : p.party === "R" ? "#FF5865" : "#9CA3AF"}
                    stroke="#ffffff" strokeWidth="1.4" opacity="0.96">
              <title>{p.name}</title>
            </circle>
          </g>
        ))}
      </svg>

      {/* Tooltip (centered over the dot) */}
      {tip && (
        <div
          className="absolute z-50 pointer-events-none bg-gray-900/95 text-white text-xs rounded px-2 py-1 shadow-lg border border-gray-700"
          style={{ left: tip.x, top: tip.y, transform: "translate(-50%, -110%)" }}
        >
          <div className="font-semibold">{tip.name}</div>
          <div className="text-gray-300">x: {tip.xVal.toFixed(2)} · y: {tip.yVal.toFixed(2)}</div>
        </div>
      )}

      <p className="text-xs text-gray-400 italic mt-3 text-center">
        Hover a dot for details. (Legend & importer removed by request.)
      </p>
    </div>
  );
}


/* ===================== Page ===================== */
export default function SenatePage() {
  const [colorIdx, setColorIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setColorIdx((p) => (p + 1) % PREDICTION_COLORS.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Polidex 2026{" "}
          <span style={{ color: PREDICTION_COLORS[colorIdx].color, transition: "color 0.8s cubic-bezier(.4,0,.2,1)" }}>
            {PREDICTION_COLORS[colorIdx].label}
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg">Explore Polidex’s latest projections for upcoming Senate races and balance of power.</p>
        <p className="mt-2 italic text-sm text-gray-400">*All candidates' top donors were RNC and DNC related organizations that have been excluded.</p>
      </div>

      {/* Map */}
      <div className="w-full max-w-6xl mx-auto mb-4"><SenateMap /></div>

      {/* Category bar */}
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
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-600" style={{ left: "50%" }} />
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-700" style={{ left: "8%" }} />
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-700" style={{ left: "80%" }} />
      </div>

      {/* Odds table */}
      <SenateOddsByState rows={SENATE_ODDS} />

      {/* Outcome sampler */}
      <section className="max-w-6xl mx-auto px-4 mt-8"><SenateOutcomeSamplerInline /></section>

      {/* Current Senate */}
      <div className="w-full bg-gray-800 py-8 px-6 text-center mb-6 mt-8"><h2 className="text-2xl font-bold mb-2">Current Senate</h2></div>

      {/* Current balance bar */}
      <div className="relative mx-auto max-w-3xl h-8 flex rounded overflow-hidden mb-6 mt-2">
        <div className="flex items-center justify-center text-white text-sm font-bold" style={{ width: "48%", backgroundColor: "#1C408C" }}>48</div>
        <div className="flex items-center justify-center text-white text-sm font-bold" style={{ width: "52%", backgroundColor: "#E30022" }}>52</div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-600" style={{ left: "50%" }} />
      </div>

      {/* Current map */}
      <div className="w-full max-w-6xl mx-auto mb-12"><CurrentSenateMap /></div>

      {/* NEW: Social/Economic Compass (no legend, no importer) */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <SocialEconCompass points={SENATE_SOC_ECON_POINTS} />
      </section>

      <Footer />
    </div>
  );
}
