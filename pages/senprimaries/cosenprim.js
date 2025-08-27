import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ColoradoSenPrimariesPage() {
  const democraticCandidates = [
    {
      name: "Karen Breslin (D)",
      image: "breslin.jpg",
      bio: "College professor and past candidate for U.S. Senate (2022) and CO-4 (2024).",
      ideology: "Progressive Democrat",
      endorsements: ["Colorado Educators Association"],
      sliders: ["70%", "60%", "75%", "50%"]
    },
    {
      name: "John Hickenlooper (D)",
      image: "hickenlooper.jpeg",
      bio: "Incumbent U.S. Senator and former Colorado Governor with a record of moderate pragmatism.",
      ideology: "Centrist Democrat",
      endorsements: ["Colorado Democratic Party", "League of Conservation Voters"],
      sliders: ["50%", "45%", "60%", "55%"]
    }
  ];

  const republicanCandidates = [
    {
      name: "George Markert (R)",
      image: "markert.jpg",
      bio: "Businessman focused on economic development and government efficiency.",
      ideology: "Pro-Business Conservative",
      endorsements: ["Colorado Chamber of Commerce"],
      sliders: ["80%", "85%", "70%", "65%"]
    },
    {
      name: "Janak Joshi (R)",
      image: "joshi.png",
      bio: "Former state legislator known for fiscal conservatism and healthcare reform.",
      ideology: "Traditional Conservative",
      endorsements: ["Colorado Right to Life"],
      sliders: ["85%", "75%", "65%", "60%"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section (Idaho-style) */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Colorado U.S. Senate Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared candidates, ideological placements, and (coming soon) polling trends for Colorado’s 2026 U.S. Senate primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * Colorado uses a closed primary system. Only registered party members may vote in their party's primary.
        </p>
      </div>

      {/* Democratic Polling */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Democratic Primary Polling Trends</h2>
        <div className="flex items-center justify-center h-[220px] text-gray-300 text-lg">
          No polling data available yet.
        </div>
        <p className="text-sm text-gray-300 italic mt-2 text-center">
          * Polling will be displayed here once released
        </p>
      </div>

      {/* Democratic Candidates */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Democratic Primary Candidates</h2>
        {democraticCandidates.length === 0 ? (
          <p className="text-center text-white text-lg italic">No declared candidates at this time.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {democraticCandidates.map((candidate, i) => (
              <CandidateCard key={i} candidate={candidate} />
            ))}
          </div>
        )}
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
