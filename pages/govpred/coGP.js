import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

export default function ColoradoGovPredPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Prediction Header */}
      <div className="bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight font-sans">
          Polidex Forecasts that <span className="text-blue-400">Democrats</span>
          <br />are Favored to Win the Governor’s Race.
        </h1>
        <p className="text-lg font-sans">
          <span className="text-blue-400">Democrats</span> have a{" "}
          <span className="text-blue-400">95%</span> Chance of Victory. Predicted Margin:{" "}
          <strong className="text-blue-400">Safe D</strong>
        </p>
        <p className="text-sm text-gray-400 italic mt-2 font-sans">
          * Colorado uses a semi-closed primary system. Unaffiliated voters may choose a party’s ballot.
        </p>
      </div>

      {/* Candidate Cards Row with Centered Victory Chance */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 my-12 px-4">
        <CandidateCard
          name="TBA"
          party="Democrat"
          percent={<span className="text-blue-400">57.7%</span>}
          image="/demlogo.png"
        />
        <div className="text-center text-gray-300">
          <p className="text-lg font-sans">Chance of Victory</p>
          <p className="text-2xl font-bold mt-1 text-blue-400 font-sans">Democrats 95%</p>
        </div>
        <CandidateCard
          name="TBA"
          party="Republican"
          percent={<span className="text-[#FF5865]">42.1%</span>}
          image="/goplogo2.png"
        />
      </div>

      {/* County Breakdown Map Placeholder */}
      <div className="bg-gray-800 p-6 rounded-lg shadow max-w-6xl mx-auto my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">County Forecast</h2>
        <div className="w-full flex items-center justify-center min-h-[380px] text-gray-300 text-lg">
          {/* Replace with <GovCountyMapCO /> when ready */}
          County-level forecast will appear here when available.
        </div>
      </div>

      {/* Polling Chart Placeholder */}
      <div className="max-w-5xl mx-auto my-12 bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Polling Average Trend</h2>
        <div className="flex items-center justify-center h-[180px] text-gray-300 text-lg">
          No polling data available yet.
        </div>
      </div>

      {/* Button to Primary Page */}
      <div className="text-center mb-12">
        <Link
          href="/govprimaries/cogovprim"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200"
        >
          View Colorado Governor Primaries →
        </Link>
      </div>

      <Footer />
    </div>
  );
}

function CandidateCard({ name, party, percent, image }) {
  const isDem = party === "Democrat";
  const isRep = party === "Republican";
  const percentColor = isDem ? "text-blue-400" : isRep ? "text-[#FF5865]" : "text-white";

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
