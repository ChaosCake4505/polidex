import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function VirginiaGovPrimariesPage() {
  const democraticCandidates = [
    {
      name: "Abigail Spanberger (D)",
      image: "spanberger.jpg",
      bio: "U.S. Representative for Virginia's 7th district and former CIA officer.",
      ideology: "Moderate Democrat",
      endorsements: ["Virginia Democratic Party", "Working Families Party"],
      sliders: ["60%", "70%", "45%", "40%"]
    }
  ];

  const republicanCandidates = [
    {
      name: "Winsome Earle-Sears (R)",
      image: "sears.jpg",
      bio: "Lieutenant Governor and former House Delegate known for strong public safety and fiscal conservatism.",
      ideology: "Conservative",
      endorsements: ["Virginia Republican Party", "National Rifle Association"],
      sliders: ["25%", "30%", "65%", "55%"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Page header */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight font-sans">
          Virginia Governor Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Results from Virginia’s closed primaries, where registered party members selected their nominees.
        </p>
        <p className="text-sm italic text-gray-400">
          * Virginia uses a closed primary system. Only registered Democrats or Republicans may vote in their respective primaries.
        </p>
      </div>

      {/* Democratic Polling (Uncontested) */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Democratic Primary Polling Trends</h2>
        <div className="flex items-center justify-center h-[220px] text-gray-300 text-2xl font-bold">
          Uncontested
        </div>
        <p className="text-sm text-gray-300 italic mt-2 text-center">
          Spanberger ran unopposed for the Democratic nomination.
        </p>
      </div>

      {/* Democratic Candidates */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Democratic Primary Candidates</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {democraticCandidates.map((candidate, i) => (
            <CandidateCard key={i} candidate={candidate} />
          ))}
        </div>
      </div>

      {/* Republican Polling (Uncontested) */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Republican Primary Polling Trends</h2>
        <div className="flex items-center justify-center h-[220px] text-gray-300 text-2xl font-bold">
          Uncontested
        </div>
        <p className="text-sm text-gray-300 italic mt-2 text-center">
          Earle-Sears ran unopposed for the Republican nomination.
        </p>
      </div>

      {/* Republican Candidates */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Republican Primary Candidates</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {republicanCandidates.map((candidate, i) => (
            <CandidateCard key={i} candidate={candidate} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Candidate card with circular image and slider bar
function CandidateCard({ candidate }) {
  const slidersConfig = [
    ["Progressive", "Conservative"],
    ["Pro‑Environment", "Pro‑Industry"],
    ["Populist", "Establishment"],
    ["Dovish", "Hawkish"]
  ];
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-700/90 rounded-lg shadow p-6 gap-8 w-full max-w-xl">
      <img
        src={`/${candidate.image}`}
        alt={candidate.name}
        className="w-32 h-32 rounded-full object-cover shadow-md mb-4 md:mb-0"
      />
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-1 text-white">{candidate.name}</h3>
        <p className="mb-2 italic text-gray-200">{candidate.bio}</p>
        <p className="mb-3 font-semibold text-gray-300">
          Ideology: {candidate.ideology}
        </p>
        <div className="space-y-4">
          {slidersConfig.map(([left, right], idx) => (
            <div key={idx}>
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>{left}</span>
                <span>{right}</span>
              </div>
              <div className="relative h-2 bg-gradient-to-r from-blue-600 to-red-600 rounded-full">
                <div
                  className="absolute top-[-6px]"
                  style={{
                    left: `${100 - parseFloat(candidate.sliders[idx])}%`,
                    transform: "translateX(-50%)"
                  }}
                >
                  <span className="text-white text-xl">⬆️</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-1 text-white">
            Notable Endorsements
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-200">
            {candidate.endorsements.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
