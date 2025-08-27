import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function AlaskaGovPrimariesPage() {
  const candidates = [
    {
      name: "Click Bishop (R)",
      image: "bishop.jpg",
      bio: "Former State Senator and current Commissioner of the Alaska Department of Labor and Workforce Development.",
      ideology: "Conservative Republican",
      endorsements: ["Alaska Republican Party"],
      sliders: ["80%", "70%", "60%", "55%"]
    },
    {
      name: "Nancy Dahlstrom (R)",
      image: "dahlstrom.jpg",
      bio: "Lieutenant Governor of Alaska and former commissioner of the Department of Corrections.",
      ideology: "Conservative Republican",
      endorsements: ["Alaska GOP", "Alaska Police Department Association"],
      sliders: ["85%", "65%", "55%", "50%"]
    },
    {
      name: "Edna DeVries (R)",
      image: "devries.jpg",
      bio: "Mayor of Matanuska-Susitna Borough with strong focus on local infrastructure and education.",
      ideology: "Moderate Republican",
      endorsements: ["Local Business Council"],
      sliders: ["60%", "50%", "45%", "40%"]
    },
    {
      name: "Matt Heilala (R)",
      image: "heilala.jpg",
      bio: "State Representative from Anchorage, known for community development initiatives.",
      ideology: "Conservative Republican",
      endorsements: ["Anchorage Chamber of Commerce"],
      sliders: ["75%", "60%", "50%", "45%"]
    },
    {
      name: "Bernadette Wilson (R)",
      image: "wilson.jpg",
      bio: "Former state law enforcement officer and advocate for rural Alaska communities.",
      ideology: "Conservative",
      endorsements: ["Alaska Sheriffs Association"],
      sliders: ["90%", "80%", "65%", "60%"]
    }
  ];

  const potentialCandidates = [
    { name: "Tom Begich (D)", image: "begich.png" },
    { name: "Mary Peltola (D)", image: "peltola.jpg" },
    { name: "Adam Crum (R)", image: "crum.jpeg" },
    { name: "Treg Taylor (R)", image: "taylor.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section */}
      <div className="bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight font-sans">
          Alaska Governor Open Primary
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared candidates, ideological placements, and (coming soon) polling trends for Alaska’s 2026 gubernatorial <strong>top-four nonpartisan primary</strong>.
        </p>
        <p className="text-sm italic text-gray-400">
          * Alaska uses a single open primary where all candidates compete together; the top four vote-getters advance to the ranked-choice general election.
        </p>
      </div>

      {/* Polling */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Open Primary Polling Trends</h2>
        <div className="flex items-center justify-center h-[220px] text-gray-300 text-lg">
          No polling data available yet.
        </div>
        <p className="text-sm text-gray-300 italic mt-2 text-center">
          * Polling will be displayed here once released
        </p>
      </div>

      {/* Candidates */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Declared Candidates</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {candidates.map((candidate, i) => (
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
              <img
                src={`/${p.image}`}
                alt={p.name}
                className="w-32 h-32 rounded-full object-cover shadow-md mb-2"
              />
              <p className="mt-2 text-sm text-center text-white font-semibold">{p.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

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
          {slidersConfig.map(([left, right], idx) => (
            <div key={idx}>
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>{left}</span>
                <span>{right}</span>
              </div>
              <div className="relative h-2 bg-gradient-to-r from-blue-600 to-red-600 rounded-full">
                <div
                  className="absolute top-[-6px]"
                  style={{ left: candidate.sliders[idx], transform: "translateX(-50%)" }}
                >
                  <span className="text-white text-xl">⬆️</span>
                </div>
              </div>
            </div>
          ))}
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
