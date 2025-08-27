import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function NebraskaSenPrimariesPage() {
  const democraticCandidates = []; // none declared yet

  const republicanCandidates = [
    {
      name: "Pete Ricketts (R)",
      image: "ricketts.jpg",
      bio: "Incumbent U.S. Senator and former Governor of Nebraska, known for conservative leadership and strong party backing.",
      ideology: "Conservative Republican",
      endorsements: ["Nebraska Republican Party", "Senate Leadership Fund"],
      sliders: ["80%", "65%", "55%", "70%"]
    }
  ];

  // Independents don't run in party primaries, but we'll show them below.
  const independentCandidates = [
    {
      name: "Dan Osborn (Independent)",
      image: "osborn.jpg",
      bio: "Union leader and independent voice focused on working-class priorities and bipartisan cooperation.",
      ideology: "Labor-Oriented Independent",
      endorsements: ["Nebraska AFL-CIO", "U.S. Labor Coalition"],
      sliders: ["40%", "60%", "45%", "35%"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section (Idaho-style) */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Nebraska U.S. Senate Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared candidates, ideological placements, and (coming soon) polling trends for Nebraska’s 2026 U.S. Senate primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * Nebraska uses a closed primary system. Only registered party members may vote in their party's primary. Independent candidates do not participate in party primaries and advance directly to the general election.
        </p>
      </div>

      {/* Republican Polling */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Republican Primary Polling Trends</h2>
        <div className="flex items-center justify-center h-[220px] text-gray-300 text-lg">
          No polling data available yet.
        </div>
        <p className="text-sm text-gray-300 italic mt-2 text-center">
          * Polling will be displayed here once released
        </p>
      </div>

      {/* Republican Candidates */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Republican Primary Candidates</h2>
        {republicanCandidates.length === 0 ? (
          <p className="text-center text-white text-lg italic">No declared candidates at this time.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {republicanCandidates.map((candidate, i) => (
              <CandidateCard key={i} candidate={candidate} />
            ))}
          </div>
        )}
      </div>

      {/* Independent Candidate (General Election) */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Independent Candidate (General Election)</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {independentCandidates.map((candidate, i) => (
            <CandidateCard key={i} candidate={candidate} />
          ))}
        </div>
        <p className="text-xs text-gray-300 italic mt-4 text-center">
          * Independent candidates do not appear on party primary ballots.
        </p>
      </div>

      <Footer />
    </div>
  );
}

// Candidate card with circular photo (Idaho-style)
function CandidateCard({ candidate }) {
  const slidersConfig = [
    ["Progressive", "Conservative"],
    ["Pro-Environment", "Pro-Industry"],
    ["Populist", "Establishment"],
    ["Dovish", "Hawkish"]
  ];

  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-700/90 rounded-lg shadow p-6 gap-8">
      <img
        src={`/${candidate.image}`}
        alt={candidate.name}
        className="w-32 h-32 rounded-full object-cover shadow-md mb-4 md:mb-0"
      />
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-1 text-white">{candidate.name}</h3>
        <p className="mb-2 italic text-gray-200">{candidate.bio}</p>
        <p className="mb-3 font-semibold text-gray-300">Ideology: {candidate.ideology}</p>
        <div className="space-y-4">
          {slidersConfig.map(([left, right], idx) => {
            const pos = candidate.sliders?.[idx] ?? "50%";
            return (
              <div key={idx}>
                <div className="flex justify-between text-xs text-gray-300 mb-1">
                  <span>{left}</span>
                  <span>{right}</span>
                </div>
                <div className="relative h-2 bg-gradient-to-r from-blue-600 to-red-600 rounded-full">
                  <div
                    className="absolute top-[-6px]"
                    style={{ left: pos, transform: "translateX(-50%)" }}
                  >
                    <span className="text-white text-xl">⬆️</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {!!candidate.endorsements?.length && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-1 text-white">Notable Endorsements</h4>
            <ul className="list-disc list-inside text-sm text-gray-200">
              {candidate.endorsements.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
