import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Correct dynamic import of the county map
const GovCountyMapNJ = dynamic(() => import("../../components/njgov/govcountymapnj"), { ssr: false });

export default function NewJerseyGovPredPage() {
  const rawData = [
    { name: "May 28–30", Sherrill: 51, Ciattarelli: 38, Undecided: 12 },
    { name: "Jun 11–12", Sherrill: 45, Ciattarelli: 42, Undecided: 12 },
    { name: "Jun 13–16", Sherrill: 56, Ciattarelli: 35, Undecided: 9 },
    { name: "Jun 19–20", Sherrill: 50, Ciattarelli: 43, Undecided: 7 },
    { name: "Jun 24–27", Sherrill: 47, Ciattarelli: 42, Undecided: 11 },
    { name: "July 17-23", Sherrill: 45, Ciattarelli: 37, Undecided: 15}
  ];

  let cumSh = 0;
  let cumCi = 0;
  const pollData = rawData.map((d, i) => {
    const effSh = d.Sherrill + d.Undecided / 2;
    const effCi = d.Ciattarelli + d.Undecided / 2;
    cumSh += effSh;
    cumCi += effCi;
    const avgSh = parseFloat((cumSh / (i + 1)).toFixed(1));
    const avgCi = parseFloat((cumCi / (i + 1)).toFixed(1));
    const margin = parseFloat((avgSh - avgCi).toFixed(1));
    return { name: d.name, avgSh, avgCi, margin };
  });

  const last = pollData[pollData.length - 1];
  const predicted = last.margin > 0 ? `D+${last.margin}%` : `R+${-last.margin}%`;

  return (
    <div className="min-h-screen bg-gray-900 text-white font-serif">
      <Header />

      {/* Prediction Header */}
      <div className="bg-gray-800 py-10 px-6 text-center shadow-inner">
<h1 className="text-4xl font-bold mb-4 leading-tight">
  Polidex Forecasts that{" "}
  <span className="text-[#6495ed]">Mikie Sherrill</span><br />
  is the Favorite to Win the New Jersey Governor’s Race.
</h1>
        <p className="text-lg">
          <span className="text-[#6495ed]">Sherrill</span> has a{" "}
          <span className="text-[#6495ed]">68%</span> Chance of Victory. Predicted Margin:{" "}
          <strong className="text-[#6495ed]">{predicted}</strong>
        </p>
        <p className="text-sm text-gray-400 italic mt-2">
          * New Jersey uses a closed primary system. Only registered party members may vote in their party’s primary election.
        </p>
      </div>

      {/* Candidate Cards */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 my-12 px-4">
        <CandidateCard
          name="Mikie Sherrill"
          party="Democrat"
          percent={<span className="text-[#6495ed]">52.0%</span>}
          image="/sherrill.jpg"
        />
        <div className="text-center text-gray-300">
          <p className="text-lg">Chance of Victory</p>
          <p className="text-2xl font-bold mt-1 text-[#6495ed]">Sherrill 68%</p>
        </div>
        <CandidateCard
          name="Jack Ciattarelli"
          party="Republican"
          percent="46.1%"
          image="/ciattarelli.jpg"
        />
      </div>

      {/* County Breakdown Map */}
      <div className="bg-gray-800 p-6 rounded-lg shadow max-w-6xl mx-auto my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">County Forecast</h2>
        <GovCountyMapNJ />
      </div>

      {/* Polling Chart */}
      <div className="max-w-5xl mx-auto my-12 bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Polling Average Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={pollData}>
            <CartesianGrid stroke="#444" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis domain={[30, 60]} stroke="#ccc" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#222",
                border: "1px solid #444",
                color: "#fff",
              }}
              labelStyle={{ color: "#fff" }}
            />
            <Legend wrapperStyle={{ color: "#fff" }} />
            <Line
              type="monotone"
              dataKey="avgSh"
              name="Sherrill Avg (%)"
              stroke="#6495ed"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="avgCi"
              name="Ciattarelli Avg (%)"
              stroke="#ef4444"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Button to Primary Page */}
      <div className="text-center mb-12">
        <Link
          href="/govprimaries/njgovprim"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200"
        >
          View New Jersey Governor Primaries →
        </Link>
      </div>

      <Footer />
    </div>
  );
}

function CandidateCard({ name, party, percent, image }) {
  const isSherrill = name.includes("Sherrill");
  const isCiattarelli = name.includes("Ciattarelli");

  const percentColor = isSherrill
    ? "text-[#6495ed]"
    : isCiattarelli
    ? "text-red-500"
    : "text-white";

  const nameColor = isSherrill ? "text-white" : "";

  return (
    <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg shadow-md w-64">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h3 className={`text-lg font-bold ${nameColor}`}>{name}</h3>
      <p className="text-white text-sm">{party}</p>
      <p className={`text-2xl font-bold mt-2 ${percentColor}`}>{percent}</p>
    </div>
  );
}
