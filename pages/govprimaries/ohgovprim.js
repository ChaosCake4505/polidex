import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function OhioGovPrimariesPage() {
  const democraticCandidates = [
    {
      name: "Amy Acton (D)",
      image: "acton.jpg",
      bio: "Former director of the Ohio Department of Health (2019–2020).",
      ideology: "Public Health Advocate",
      endorsements: ["Columbus Dispatch", "Medical Associations"],
      sliders: ["65%", "75%", "55%", "45%"]
    }
  ];

  const republicanCandidates = [
    {
      name: "Heather Hill (R)",
      image: "hhill.jpg",
      bio: "Former president of the Morgan County School Board.",
      ideology: "Grassroots Conservative",
      endorsements: ["Ohio Values PAC"],
      sliders: ["70%", "40%", "60%", "50%"]
    },
    {
      name: "Vivek Ramaswamy (R)",
      image: "ramaswamy.jpg",
      bio: "Former CEO of Roivant Sciences and 2024 presidential candidate.",
      ideology: "Tech-Driven Libertarian",
      endorsements: ["FreedomWorks"],
      sliders: ["80%", "45%", "65%", "55%"]
    }
  ];

  const potentialCandidates = [
    { name: "Mike Carey (R)", image: "carey.jpg" },
    { name: "Tim Ryan (D)", image: "ryan.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight font-sans">
          Ohio Governor Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared and potential candidates, ideological placements, and (coming soon) polling trends for Ohio’s 2026 gubernatorial primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * Ohio uses a semi-open primary system. Voters may request a party ballot on election day.
        </p>
      </div>

      {/* Democratic Polling */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Democratic Primary Polling Trends</h2>
        <div className="flex items-center justify-center h-[220px] text-gray-300 text-lg">
          No polling data available yet.
        </div>
        <p className="text-sm text-gray-300 italic mt-2 text-center">* Polling will be displayed here once released</p>
      </div>

      {/* Democratic Candidates */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Democratic Primary Candidates</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {democraticCandidates.map((candidate, i) => (
            <CandidateCard key={i} candidate={candidate} />
          ))}
        </div>
      </div>

      {/* Republican Polling */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Republican Primary Polling Trends</h2>
        <div className="flex items-center justify-center h-[220px] text-gray-300 text-lg">
          No polling data available yet.
        </div>
        <p className="text-sm text-gray-300 italic mt-2 text-center">* Polling will be displayed here once released</p>
      </div>

      {/* Republican Candidates */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Republican Primary Candidates</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {republicanCandidates.map((candidate, i) => (
            <CandidateCard key={i} candidate={candidate} />
          ))}
        </div>
      </div>

      {/* Potential Contenders */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Potential Contenders</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {potentialCandidates.map((p, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={`/${p.image}`} alt={p.name} className="w-32 h-32 rounded-full object-cover shadow-md mb-2" />
              <p className="mt-2 text-sm text-center text-white font-semibold">{p.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Candidate card with circular photo
function CandidateCard({ candidate }) {
  const slidersConfig = [
    ["Conservative", "Progressive"],
    ["Pro‑Industry", "Pro‑Environment"],
    ["Establishment", "Populist"],
    ["Hawkish", "Dovish"]
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
          {slidersConfig.map(([left, right], idx) => (
            <div key={idx}>
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>{left}</span>
                <span>{right}</span>
              </div>
              <div className="relative h-2 bg-gradient-to-r from-red-600 to-blue-600 rounded-full">
                <div
                  className="absolute top-[-6px]"
                  style={{
                    left: candidate.sliders[idx],
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
          <h4 className="text-lg font-semibold mb-1 text-white">Notable Endorsements</h4>
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
