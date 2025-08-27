import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

export default function WisconsinGovPredPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Prediction Header */}
      <div className="bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight font-sans">
          Polidex Forecasts that <span className="text-[#C26BF7]">Wisconsin</span>
          <br />is the most competitive Governor’s Race of 2026.
        </h1>
        <p className="text-lg font-sans">
          <span className="text-[#C26BF7]">Democrats</span> have a{" "}
          <span className="text-[#C26BF7]">52%</span> Chance of Victory. Predicted Margin:{" "}
          <strong className="text-[#C26BF7]">Toss-Up</strong>
        </p>
        <p className="text-sm text-gray-400 italic mt-2 font-sans">
          * Wisconsin uses a closed primary system. Only registered party members may vote in their party's primary.
        </p>
      </div>

      {/* Candidate Cards Row with Centered Victory Chance */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 my-12 px-4">
        <CandidateCard
          name="TBA"
          party="Democrat"
          percent={<span className="text-[#C26BF7]">48.1%</span>}
          image="/demlogo.png"
        />
        <div className="text-center text-gray-300">
          <p className="text-lg font-sans">Chance of Victory</p>
          <p className="text-2xl font-bold mt-1 text-[#C26BF7] font-sans">Toss-Up</p>
        </div>
        <CandidateCard
          name="TBA"
          party="Republican"
          percent="47.7%"
          image="/goplogo2.png"
        />
      </div>

      {/* County Breakdown Map (Placeholder for now) */}
      <div className="bg-gray-800 p-6 rounded-lg shadow max-w-6xl mx-auto my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">County Forecast</h2>
        <div className="w-full flex items-center justify-center min-h-[380px] text-gray-300 text-lg">
          {/* Replace with <GovCountyMapWI /> if/when you build a county map */}
          County-level forecast will appear here when available.
        </div>
      </div>

      {/* Polling Chart */}
      <div className="max-w-5xl mx-auto my-12 bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Polling Average Trend</h2>
        <div className="flex items-center justify-center h-[180px] text-gray-300 text-lg">
          No polling data available yet.
        </div>
      </div>

      {/* Button to Primary Page */}
      <div className="text-center mb-12">
        <Link
          href="/govprimaries/wigovprim"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200"
        >
          View Wisconsin Governor Primaries →
        </Link>
      </div>

      <Footer />
    </div>
  );
}

// Card matches NH/ME/VT
function CandidateCard({ name, party, percent, image }) {
  const isDem = party === "Democrat";
  const isRep = party === "Republican";
  const percentColor = isDem
    ? "text-[#C26BF7]"
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
