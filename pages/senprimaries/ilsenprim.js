import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function IllinoisSenPrimariesPage() {
  const democraticCandidates = [
    {
      name: "Awisi Bustos (D)",
      image: "bustos.png",
      bio: "CEO of the Illinois Alliance of Boys & Girls Clubs and daughter-in-law of former Rep. Cheri Bustos.",
      ideology: "Center-Left Democrat",
      endorsements: ["Youth Alliance PAC"],
      sliders: ["55%", "75%", "45%", "50%"],
    },
    {
      name: "Robin Kelly (D)",
      image: "rkelly.jpg",
      bio: "U.S. Representative for Illinois's 2nd district since 2013, focused on public health and gun safety.",
      ideology: "Progressive Democrat",
      endorsements: ["Brady Campaign", "Planned Parenthood"],
      sliders: ["70%", "80%", "50%", "40%"],
    },
    {
      name: "Raja Krishnamoorthi (D)",
      image: "krishnamoorthi.jpg",
      bio: "U.S. Representative for the 8th district known for work on oversight and consumer protection.",
      ideology: "Establishment Democrat",
      endorsements: ["Illinois Democratic Committee"],
      sliders: ["60%", "70%", "55%", "45%"],
    },
    {
      name: "Kevin Ryan (D)",
      image: "kryan.jpg",
      bio: "U.S. Marine Corps veteran and former teacher running on education and veteran issues.",
      ideology: "Moderate Democrat",
      endorsements: ["Illinois Veterans Network"],
      sliders: ["50%", "65%", "40%", "55%"],
    },
    {
      name: "Juliana Stratton (D)",
      image: "stratton.jpg",
      bio: "Lieutenant Governor of Illinois since 2019, focused on equity, justice reform, and education.",
      ideology: "Progressive Democrat",
      endorsements: ["SEIU Illinois", "Justice Democrats"],
      sliders: ["75%", "85%", "60%", "35%"],
    },
    {
      name: "Anthony Williams (D)",
      image: "williams.jpg",
      bio: "Pastor and former Republican U.S. Senate candidate now running as a Democrat.",
      ideology: "Independent-minded Democrat",
      endorsements: ["Faith in Action Illinois"],
      sliders: ["60%", "55%", "50%", "60%"],
    },
  ];

  const republicanCandidates = [
    {
      name: "Doug Bennett (R)",
      image: "dbennett.jpg",
      bio: "Computer engineer and 2018 nominee for IL-10, focused on tech policy and fiscal responsibility.",
      ideology: "Tech-Conservative",
      endorsements: ["Illinois Tech Voters"],
      sliders: ["65%", "60%", "55%", "50%"],
    },
    {
      name: "R. Cary Capparelli (R)",
      image: "capparelli.jpg",
      bio: "Former Port District board member and perennial candidate advocating for reform and security.",
      ideology: "Traditional Conservative",
      endorsements: ["Illinois Conservative Union"],
      sliders: ["75%", "55%", "70%", "65%"],
    },
    {
      name: "Casey Chlebek (R)",
      image: "chlebek.jpg",
      bio: "Polish-American advocate and three-time Senate candidate focused on U.S.–Eastern Europe ties.",
      ideology: "Populist Right",
      endorsements: ["Polish American Congress PAC"],
      sliders: ["70%", "50%", "65%", "60%"],
    },
    {
      name: "John Goodman (R)",
      image: "goodman.png",
      bio: "Former police officer running on law enforcement and public safety issues.",
      ideology: "Law-and-Order Conservative",
      endorsements: ["Illinois FOP"],
      sliders: ["80%", "45%", "60%", "75%"],
    },
    {
      name: "Pamela Long (R)",
      image: "long.jpeg",
      bio: "Occupational therapist focused on disability rights and health care reform from a conservative lens.",
      ideology: "Compassionate Conservative",
      endorsements: ["Illinois Health Freedom Coalition"],
      sliders: ["60%", "65%", "55%", "50%"],
    },
  ];

  const potentialContenders = [
    { name: "Rod Blagojevich (D)", image: "blagojevich.jpg" },
    { name: "Tom Demmer (R)", image: "demmer.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Illinois U.S. Senate Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared candidates, ideological placements, and (coming soon) polling trends for Illinois’s 2026 U.S. Senate primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * Illinois uses a closed primary system. Only registered party members may vote in their party’s primary.
        </p>
      </div>

      {/* Democratic Polling */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Democratic Primary Polling Trends
        </h2>
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
        <div className="grid gap-8 md:grid-cols-2">
          {republicanCandidates.map((candidate, i) => (
            <CandidateCard key={i} candidate={candidate} />
          ))}
        </div>
      </div>

      {/* Potential Contenders - Oklahoma style */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Potential Contenders</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {potentialContenders.map((p, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={`/${p.image}`}
                alt={p.name}
                className="w-32 h-32 rounded-full object-cover shadow-md mb-2"
              />
              <p className="mt-2 text-sm text-center text-white font-semibold">
                {p.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Candidate Card with circular image
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
        <p className="mb-3 font-semibold text-gray-300">
          Ideology: {candidate.ideology}
        </p>

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
            <h4 className="text-lg font-semibold mb-1 text-white">
              Notable Endorsements
            </h4>
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
