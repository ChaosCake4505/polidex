import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function GeorgiaGovPrimariesPage() {
  const democraticCandidates = [
    {
      name: "Olujimi Brown (D)",
      image: "obrown.jpg",
      bio: "Community organizer and policy analyst focused on justice reform.",
      ideology: "Progressive Democrat",
      endorsements: ["Democracy for America"],
      sliders: ["30%", "35%", "65%", "45%"],
    },
    {
      name: "Jason Esteves (D)",
      image: "esteves.jpg",
      bio: "Atlanta school board member advocating for educational equity.",
      ideology: "Moderate Democrat",
      endorsements: ["Georgia Educators Association"],
      sliders: ["40%", "50%", "55%", "50%"],
    },
    {
      name: "Derrick Jackson (D)",
      image: "jackson.jpeg",
      bio: "Former state representative focused on veterans and healthcare.",
      ideology: "Mainstream Democrat",
      endorsements: ["Veterans Caucus of Georgia"],
      sliders: ["50%", "55%", "50%", "55%"],
    },
    {
      name: "Keisha Lance Bottoms (D)",
      image: "kbottoms.jpg",
      bio: "Former Atlanta mayor known for progressive policing reform.",
      ideology: "Establishment Democrat",
      endorsements: ["EMILY’s List", "BlackPAC"],
      sliders: ["35%", "45%", "60%", "50%"],
    },
  ];

  const republicanCandidates = [
    {
      name: "Chris Carr (R)",
      image: "carr.jpg",
      bio: "Georgia Attorney General with a focus on law and order policies.",
      ideology: "Mainstream Conservative",
      endorsements: ["Georgia GOP"],
      sliders: ["70%", "75%", "55%", "70%"],
    },
    {
      name: "Burt Jones (R)",
      image: "bjones.jpg",
      bio: "Lieutenant Governor of Georgia with strong pro-business views.",
      ideology: "Pro-Business Conservative",
      endorsements: ["Chamber of Commerce"],
      sliders: ["65%", "80%", "60%", "65%"],
    },
    {
      name: "Ken Yasger (R)",
      image: "yasger.jpg",
      bio: "Businessman and political outsider running on grassroots issues.",
      ideology: "Populist Conservative",
      endorsements: ["Georgia Liberty Caucus"],
      sliders: ["75%", "60%", "40%", "60%"],
    },
  ];

  const potentialCandidates = [
    { name: "Stacey Abrams (D)", image: "abrams.jpg" },
    { name: "Lucy McBath (D)", image: "mcbath.jpg" },
    { name: "Michael Thurmond (D)", image: "thurmond.jpg" },
    { name: "Van Johnson (D)", image: "vjohnson.jpg" },
    { name: "Geoff Duncan (D)", image: "duncan.jpg" },

  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Georgia Governor Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared candidates, ideological placements, and early polling trends for Georgia’s gubernatorial primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * Georgia uses an <span className="font-semibold">open</span> primary system. Voters may choose either party’s primary.
        </p>
      </div>

      {/* Democratic Polling Placeholder */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Democratic Primary Polling Trends</h2>
        <div className="flex items-center justify-center h-[180px] text-gray-300 text-lg">
          No polling data available yet.
        </div>
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

      {/* Republican Polling Placeholder */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Republican Primary Polling Trends</h2>
        <div className="flex items-center justify-center h-[180px] text-gray-300 text-lg">
          No polling data available yet.
        </div>
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
    ["Dovish", "Hawkish"],
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
        {candidate.endorsements?.length > 0 && (
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
