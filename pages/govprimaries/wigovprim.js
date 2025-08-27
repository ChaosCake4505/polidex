import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function WisconsinGovPrimariesPage() {
  const democraticCandidates = [
    {
      name: "Zachary Roper (D)",
      image: "roper.jpg",
      bio: "Educator and political newcomer emphasizing grassroots governance and economic justice.",
      ideology: "Progressive Democrat",
      endorsements: ["Wisconsin Educators United"],
      sliders: ["40%", "35%", "60%", "30%"]
    },
    {
      name: "Sara Rodriguez (D)",
      image: "rodriguez.png",
      bio: "Current Lieutenant Governor of Wisconsin since 2023.",
      ideology: "Progressive Democrat",
      endorsements: ["Wisconsin Educators United"],
      sliders: ["40%", "35%", "60%", "30%"]
    }
  ];

  const republicanCandidates = [
    {
      name: "Bill Berrien (R)",
      image: "berrien.png",
      bio: "Manufacturing executive advocating for workforce development, innovation, and deregulation.",
      ideology: "Business Conservative",
      endorsements: ["Wisconsin Manufacturers & Commerce"],
      sliders: ["55%", "80%", "60%", "65%"]
    },
    {
      name: "Josh Schoemann (R)",
      image: "schoemann.jpg",
      bio: "County executive focused on fiscal responsibility, rural infrastructure, and public safety.",
      ideology: "Local Conservative",
      endorsements: ["Washington County GOP"],
      sliders: ["65%", "65%", "50%", "70%"]
    }
  ];

  const potentialCandidates = [
    { name: "Mandela Barnes (D)", image: "barnes.png" },
    { name: "David Crowley (D)", image: "crowley.jpg" },
    { name: "Sarah Godlewski (D)", image: "godlewski.jpg" },
    { name: "Cavalier Johnson (D)", image: "cjohnson.jpg" },
    { name: "Josh Kaul (D)", image: "kaul.jpg" },
    { name: "Chris Larson (D)", image: "larson.jpg" },
    { name: "Tom Nelson (D)", image: "nelson.jpg" },
    { name: "Kelda Roys (D)", image: "roys.jpg" },
    { name: "Ben Wikler (D)", image: "wikler.jpg" },
    { name: "Patrick Testin (R)", image: "testin.jpg" },
    { name: "Tom Tiffany (R)", image: "tiffany.jpg" },
    { name: "Mary Felzkowski (R)", image: "felzkowski.jpg" },
    { name: "Eric Hovde (R)", image: "hovde.jpg" },
    { name: "Will Martin (R)", image: "martin.jpg" },
    { name: "Tim Michels (R)", image: "michels1.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight font-sans">
          Wisconsin Governor Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared and potential candidates, ideological placements, and (coming soon) polling trends for Wisconsin’s 2026 gubernatorial primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * Wisconsin uses a closed primary system. Only registered party members may vote in their party's primary.
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

// Candidate card with circular photo (Ohio style)
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
