import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ColoradoGovPrimariesPage() {
  const democraticCandidates = [
    {
      name: "Michael Bennet (D)",
      image: "bennet.jpg",
      bio: "U.S. Senator from Colorado with a focus on education, tax reform, and bipartisanship.",
      ideology: "Centrist Democrat",
      endorsements: ["Colorado Democratic Party"],
      sliders: ["45%", "50%", "55%", "50%"]
    },
    {
      name: "Phil Weiser (D)",
      image: "weiser.jpg",
      bio: "Colorado Attorney General known for antitrust reform and consumer protection.",
      ideology: "Liberal Democrat",
      endorsements: ["Planned Parenthood Votes Colorado"],
      sliders: ["60%", "40%", "50%", "45%"]
    }
  ];

  const republicanCandidates = [
    {
      name: "Mark Baisley (R)",
      image: "baisley.jpg",
      bio: "State Senator emphasizing individual liberties and limited government.",
      ideology: "Conservative",
      endorsements: ["Colorado Republican Party"],
      sliders: ["80%", "70%", "60%", "65%"]
    },
    {
      name: "Scott Bottoms (R)",
      image: "bottoms.jpg",
      bio: "Colorado state representative and pastor focused on religious liberty and traditional values.",
      ideology: "Hardline Conservative",
      endorsements: ["Conservative Colorado"],
      sliders: ["90%", "65%", "75%", "70%"]
    },
    {
      name: "Jason Clark (R)",
      image: "clark.jpg",
      bio: "Entrepreneur advocating for small business growth and deregulation.",
      ideology: "Pro-Business Conservative",
      endorsements: [],
      sliders: ["75%", "80%", "60%", "60%"]
    },
    {
      name: "Greg Lopez (R)",
      image: "lopez.jpg",
      bio: "Former mayor and frequent candidate with a focus on grassroots conservatism.",
      ideology: "Populist Conservative",
      endorsements: ["Latino Republicans of Colorado"],
      sliders: ["85%", "70%", "80%", "75%"]
    },
    {
      name: "Jason Mikesell (R)",
      image: "mikesell.jpg",
      bio: "Sheriff emphasizing public safety, law enforcement, and border security.",
      ideology: "Law-and-Order Conservative",
      endorsements: ["County Sheriffs of Colorado PAC"],
      sliders: ["80%", "60%", "65%", "85%"]
    }
  ];

  const potentialCandidates = [
    { name: "Ken Salazar (D)", image: "salazar.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight font-sans">
          Colorado Governor Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared and potential candidates, ideological placements, and (coming soon) polling trends for Colorado’s 2026 gubernatorial primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * Unaffiliated voters may participate in one party’s primary without changing affiliation.
        </p>
      </div>

      {/* Democratic Polling (placeholder) */}
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

      {/* Republican Polling (placeholder) */}
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
        <div className="grid gap-8 md:grid-cols-2">
          {republicanCandidates.map((candidate, i) => (
            <CandidateCard key={i} candidate={candidate} />
          ))}
        </div>
      </div>

      {/* Potential Contenders */}
      {potentialCandidates.length > 0 && (
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
      )}

      <Footer />
    </div>
  );
}

// Candidate card with circular photo (Minnesota style)
function CandidateCard({ candidate }) {
  const slidersConfig = [
    ["Conservative", "Progressive"],
    ["Pro-Industry", "Pro-Environment"],
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
          {slidersConfig.map(([left, right], idx) => {
            const pos = candidate.sliders?.[idx] ?? "50%";
            return (
              <div key={idx}>
                <div className="flex justify-between text-xs text-gray-300 mb-1">
                  <span>{left}</span><span>{right}</span>
                </div>
                <div className="relative h-2 bg-gradient-to-r from-red-600 to-blue-600 rounded-full">
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
              {candidate.endorsements.map((e, i) => (<li key={i}>{e}</li>))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
