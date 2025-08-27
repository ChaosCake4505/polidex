import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

export default function MichiganGovPredPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Prediction Header */}
      <div className="bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight font-sans">
          Polidex Forecasts a <span className="text-[#c26bf7]">Competitive 3-Way Race</span> for Governor in Michigan.
        </h1>
        <p className="text-lg font-sans">
          <span className="text-[#6495ed]">Democrats</span> have a <span className="text-[#6495ed]">43%</span> Chance of Victory. <br />
          <span className="text-gray-300">Mike Duggan (Independent)</span> has a <span className="text-gray-300">17%</span> Chance of Victory. <br />
          <span className="text-[#fc6b6b]">Republicans</span> have a <span className="text-[#fc6b6b]">40%</span> Chance of Victory. <br />
          Predicted Margin: <strong className="text-[#c26bf7]">Tilt R</strong>
        </p>
        <p className="text-sm text-gray-400 italic mt-2 font-sans">
          * Michigan uses a closed primary system. Only registered party members may vote in their party's primary.
        </p>
      </div>

      {/* Candidate Cards Row (3 candidates) */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 my-12 px-4">
        <CandidateCard
          name="TBA"
          party="Democrat"
          percent={<span className="text-[#6495ed]">38.0%</span>}
          image="/demlogo.png"
        />
        <CandidateCard
          name="Mike Duggan"
          party="Independent"
          percent={<span className="text-gray-300">19.0%</span>}
          image="/duggan.png"
        />
        <CandidateCard
          name="TBA"
          party="Republican"
          percent={<span className="text-[#fc6b6b]">36.5%</span>}
          image="/goplogo2.png"
        />
      </div>

      {/* Chance of Victory */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 bg-gray-800/90 rounded-lg py-8 shadow">
          <VictoryStat label="Democrat" percent="43%" color="#6495ed" />
          <VictoryStat label="Independent" percent="17%" color="#a3a3a3" />
          <VictoryStat label="Republican" percent="40%" color="#fc6b6b" />
        </div>
        <div className="mt-2 text-sm text-gray-400">
          * Polidex projects a narrow Republican advantage but all three candidates impact the dynamics.
        </div>
      </div>

      {/* County Breakdown Map (Placeholder) */}
      <div className="bg-gray-800 p-6 rounded-lg shadow max-w-6xl mx-auto my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">County Forecast</h2>
        <div className="w-full flex items-center justify-center min-h-[380px] text-gray-300 text-lg">
          {/* Replace with <GovCountyMapMI /> if/when you build a county map */}
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
          href="/govprimaries/migovprim"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200"
        >
          View Michigan Governor Primaries →
        </Link>
      </div>

      <Footer />
    </div>
  );
}

function CandidateCard({ name, party, percent, image }) {
  const isDem = party === "Democrat";
  const isRep = party === "Republican";
  const isInd = party === "Independent";
  const percentColor = isDem
    ? "text-[#6495ed]"
    : isRep
    ? "text-[#fc6b6b]"
    : isInd
    ? "text-gray-300"
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

// Victory chance display
function VictoryStat({ label, percent, color }) {
  return (
    <div className="flex flex-col items-center min-w-[120px]">
      <span className="text-lg font-semibold" style={{ color }}>{label}</span>
      <span className="text-2xl font-bold" style={{ color }}>{percent}</span>
    </div>
  );
}
