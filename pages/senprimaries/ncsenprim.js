import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function NorthCarolinaSenPrimariesPage() {
  const democraticCandidates = [
    {
      name: "Roy Cooper (D)",
      image: "rcooper.jpg",
      bio: "Former Governor of North Carolina (2017–2025) focused on education, healthcare, and economic opportunity.",
      ideology: "Moderate Democrat",
      endorsements: ["NC Democratic Party"],
      sliders: ["60%", "70%", "55%", "50%"],
    },
  ];

  const republicanCandidates = [
    {
      name: "Don Brown (R)",
      image: "dbrown.jpg",
      bio: "Attorney and author who ran for North Carolina’s 8th congressional district in 2024.",
      ideology: "Conservative Republican",
      endorsements: [],
      sliders: ["70%", "65%", "50%", "60%"],
    },
    {
      name: "Michael Whatley (R)",
      image: "whatley.webp",
      bio: "Chair of the RNC.",
      ideology: "Populist Conservative",
      endorsements: [],
      sliders: ["65%", "70%", "45%", "65%"],
    },
  ];

  const potentialContenders = [
    { name: "Don Davis (D)", image: "ddavis.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header band (NM/OK style) */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          North Carolina U.S. Senate Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared candidates, ideological profiles, and early match-up potential in North Carolina’s 2026 Senate primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * North Carolina uses a closed primary system. Only registered party members may vote in their party’s primary.
        </p>
      </div>

      {/* Democratic Polling (placeholder) */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Democratic Primary Polling Trends
        </h2>
        <div className="flex items-center justify-center h-[220px] text-gray-300 text-lg italic">
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
          <p className="text-center text-white italic">No declared candidates at this time.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {democraticCandidates.map((c, i) => (
              <CandidateCard key={i} candidate={c} />
            ))}
          </div>
        )}
      </div>

      {/* Republican Polling (placeholder) */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Republican Primary Polling Trends
        </h2>
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
          <p className="text-center text-white italic">No declared candidates at this time.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {republicanCandidates.map((c, i) => (
              <CandidateCard key={i} candidate={c} />
            ))}
          </div>
        )}
      </div>

      {/* Potential Contenders (Oklahoma style) */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-16">
        <h2 className="text-2xl font-bold text-center mb-8">Potential Contenders</h2>
        {potentialContenders.length === 0 ? (
          <p className="text-center text-white text-lg italic">
            No notable potential contenders at this time.
          </p>
        ) : (
          <div className="flex flex-wrap justify-center gap-8">
            {potentialContenders.map((p, i) => (
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
        )}
      </div>

      <Footer />
    </div>
  );
}

/** Shared Candidate Card (circular image, NM/OK style) */
function CandidateCard({ candidate }) {
  const slidersConfig = [
    ["Progressive", "Conservative"],
    ["Pro-Environment", "Pro-Industry"],
    ["Populist", "Establishment"],
    ["Dovish", "Hawkish"],
  ];

  const pos = (i) => candidate.sliders?.[i] ?? "50%";

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
                <span>{left}</span><span>{right}</span>
              </div>
              <div className="relative h-2 bg-gradient-to-r from-blue-600 to-red-600 rounded-full">
                <div
                  className="absolute top-[-6px]"
                  style={{ left: pos(idx), transform: "translateX(-50%)" }}
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
