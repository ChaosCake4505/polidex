import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Poll data (running averages with undecided split)
const rawData = [
  { name: 'Sep 2023', Spanberger: 27, Sears: 26, Undecided: 47 },
  { name: 'Sep 2024', Spanberger: 39, Sears: 39, Undecided: 12 },
  { name: 'Dec 2024', Spanberger: 47, Sears: 44, Undecided: 9 },
  { name: 'Jan 2025', Spanberger: 43, Sears: 39, Undecided: 14 },
  { name: 'Feb 2025', Spanberger: 43, Sears: 32, Undecided: 24 },
  { name: 'Jun 8th 2025', Spanberger: 48, Sears: 40, Undecided: 11 },
  { name: 'Jun 19th 2025', Spanberger: 49, Sears: 37, Undecided: 14 },
  { name: 'July 2025', Spanberger: 50, Sears: 40, Undecided: 10 }
];

let cumSpan = 0;
let cumSears = 0;
const pollData = rawData.map((d, i) => {
  const effSpan = d.Spanberger + d.Undecided / 2;
  const effSears = d.Sears + d.Undecided / 2;
  cumSpan += effSpan;
  cumSears += effSears;
  const avgSpan = parseFloat((cumSpan / (i + 1)).toFixed(1));
  const avgS = parseFloat((cumSears / (i + 1)).toFixed(1));
  const margin = parseFloat((avgSpan - avgS).toFixed(1));
  return { name: d.name, avgSpan, avgS, margin };
});

export default function VirginiaGovPredPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Prediction header */}
      <div className="bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight font-sans">
          Polidex Forecasts that <span className="text-[#8AAFFF]">Abigail Spanberger</span>
          <br />is the Favorite to Win the Governor’s Race.
        </h1>
        <p className="text-lg font-sans">
          <span className="text-[#8AAFFF]">Democrats</span> have a <span className="text-[#8AAFFF]">66%</span> Chance of Victory. Predicted Margin: <strong className="text-[#8AAFFF]">D +6.2%</strong>
        </p>
        <p className="text-sm text-gray-400 italic mt-2 font-sans">
          * Virginia uses a closed primary system. Only registered party members may vote in their party’s primary election.
        </p>
      </div>

      {/* Candidate Cards Row with Centered Victory Chance */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 my-12 px-4">
        <CandidateCard
          name="Abigail Spanberger"
          party="Democrat"
          percent={<span className="text-[#8AAFFF]">51.2%</span>}
          image="/spanberger.jpg"
        />
        <div className="text-center text-gray-300">
          <p className="text-lg font-sans">Chance of Victory</p>
          <p className="text-2xl font-bold mt-1 text-[#8AAFFF] font-sans">Democrats 66%</p>
        </div>
        <CandidateCard
          name="Winsome Earle-Sears"
          party="Republican"
          percent="44.9%"
          image="/sears.jpg"
        />
      </div>

      {/* County Breakdown Map Placeholder */}
      <div className="bg-gray-800 p-6 rounded-lg shadow max-w-6xl mx-auto my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">County Forecast</h2>
        <div className="w-full flex items-center justify-center min-h-[380px] text-gray-300 text-lg">
          {/* Replace with <GovCountyMapVA /> if you build a county map */}
          County-level forecast will appear here when available.
        </div>
      </div>

      {/* Polling Average Chart */}
      <div className="max-w-5xl mx-auto my-12 bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Polling Average Trend</h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={pollData} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fill: '#fff' }} />
            <YAxis domain={[40, 60]} tick={{ fill: '#fff' }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#333' }}
              formatter={(value, name) => [`${value}%`, name]}
              labelFormatter={(label, payload) => {
                const entry = payload?.[0]?.payload;
                if (!entry) return label;
                const m = entry.margin;
                return `${label} (Margin: ${m > 0 ? `D+${m}` : `R+${-m}`})`;
              }}
            />
            <Legend wrapperStyle={{ color: '#fff' }} />
            <Line
              type="monotone"
              dataKey="avgSpan"
              name="Spanberger Avg (%)"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="avgS"
              name="Earle-Sears Avg (%)"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-center mt-2 text-white">Hover over any point to see the D+/R+ margin.</p>
      </div>

      {/* Primaries button */}
      <div className="text-center mb-12">
        <Link
          href="/govprimaries/vagovprim"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200"
        >
          View Virginia Governor Primaries →
        </Link>
      </div>

      <Footer />
    </div>
  );
}

function CandidateCard({ name, party, percent, image }) {
  const isDem = party === "Democrat";
  const isRep = party === "Republican";
  const percentColor = isDem
    ? "text-[#8AAFFF]"
    : isRep
    ? "text-red-500"
    : "text-white";

  return (
    <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg shadow-md w-64">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-bold text-white">{name}</h3>
      <p className="text-white text-sm">{party}</p>
      <p className={`text-2xl font-bold mt-2 ${percentColor}`}>{percent}</p>
    </div>
  );
}
