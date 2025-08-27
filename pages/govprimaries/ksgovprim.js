import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function KansasGovPrimariesPage() {
  const democraticCandidates = [
    {
      name: "Cindy Holscher (D)",
      image: "holscher.jpg",
      bio: "State Senator from Overland Park known for healthcare and education advocacy.",
      ideology: "Moderate Democrat",
      endorsements: ["Kansas National Education Association"],
      sliders: ["40%","35%","55%","60%"]
    },
    {
      name: "Ethan Corson (D)",
      image: "corson.jpg",
      bio: "State Senator from Overland Park and former state party executive director, focused on economic development and public education.",
      ideology: "Moderate Democrat",
      endorsements: ["Local Democratic leaders"],
      sliders: ["45%","40%","55%","55%"]
    }
  ];

  const republicanCandidates = [
    {
      name: "Doug Billings (R)",
      image: "billings.jpg",
      bio: "Conservative radio host and political commentator.",
      ideology: "Populist Conservative",
      endorsements: ["Kansas Freedom PAC"],
      sliders: ["85%","75%","60%","70%"]
    },
    {
      name: "Jeff Colyer (R)",
      image: "colyer.jpg",
      bio: "Former Governor and Lieutenant Governor of Kansas with a focus on fiscal conservatism.",
      ideology: "Mainstream Conservative",
      endorsements: ["Kansas Republican Assembly"],
      sliders: ["70%","65%","60%","55%"]
    },
    {
      name: "Joy Eakins (R)",
      image: "eakins.jpg",
      bio: "Entrepreneur and Wichita-area civic leader.",
      ideology: "Business-Oriented Conservative",
      endorsements: ["Wichita Chamber of Commerce PAC"],
      sliders: ["75%","70%","55%","50%"]
    },
    {
      name: "Charlotte O'Hara (R)",
      image: "ohara.png",
      bio: "Johnson County Commissioner and former state representative.",
      ideology: "Social Conservative",
      endorsements: ["Kansas Right to Life"],
      sliders: ["80%","60%","70%","80%"]
    },
    {
      name: "Stacy Rogers (R)",
      image: "rogers.jpg",
      bio: "Veteran and public safety advocate running on an anti-corruption platform.",
      ideology: "Anti-Establishment Right",
      endorsements: ["Back the Blue Kansas"],
      sliders: ["85%","60%","50%","70%"]
    },
    {
      name: "Vicki Schmidt (R)",
      image: "schmidt.jpg",
      bio: "Kansas Insurance Commissioner and pharmacist with a record of bipartisan work.",
      ideology: "Moderate Republican",
      endorsements: ["Kansas Medical Society"],
      sliders: ["60%","55%","65%","50%"]
    },
    {
      name: "Scott Schwab (R)",
      image: "schwab.jpg",
      bio: "Secretary of State of Kansas with focus on election integrity.",
      ideology: "Mainstream Republican",
      endorsements: ["Kansas GOP"],
      sliders: ["70%","65%","60%","65%"]
    }
  ];

  const potentialContenders = [
    { name: "Dinah Sykes (D)", image: "sykes.jpg" },
    { name: "Chris Mann (D)", image: "mann.png" },
    { name: "David Toland (D)", image: "toland.jpg" },
    { name: "Ty Masterson (R)", image: "masterson.jpeg" },
    { name: "Dayton Moore (R)", image: "dmoore.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight font-sans">
          Kansas Governor Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared and potential candidates, ideological placements, and (coming soon) polling trends for Kansas’s 2026 gubernatorial primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * Kansas uses a closed primary system. Only registered party members may vote in their party's primary.
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
          {potentialContenders.map((p, i) => (
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
          {slidersConfig.map(([left, right], idx) => (
            <div key={idx}>
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>{left}</span>
                <span>{right}</span>
              </div>
              <div className="relative h-2 bg-gradient-to-r from-red-600 to-blue-600 rounded-full">
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
