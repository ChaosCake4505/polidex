import Header from "../../components/header";
import Footer from "../../components/footer";
import React from "react";

export default function CaliforniaGovPrimariesPage() {
  const candidates = [
    {
      name: "Toni Atkins (D)",
      image: "atkins.jpg",
      bio: "President pro Tempore of the California State Senate. Longtime LGBTQ+ advocate and former Speaker of the Assembly.",
      ideology: "Progressive",
      endorsements: ["Equality California", "Planned Parenthood"],
      sliders: ["30%", "20%", "60%", "50%"]
    },
    {
      name: "Xavier Becerra (D)",
      image: "becerra.jpg",
      bio: "Current U.S. Secretary of Health and Human Services. Former California Attorney General and U.S. Representative.",
      ideology: "Establishment Democrat",
      endorsements: ["Governor Gavin Newsom", "SEIU California"],
      sliders: ["50%", "40%", "70%", "45%"]
    },
    {
      name: "Stephen Cloobeck (D)",
      image: "cloobeck.jpg",
      bio: "Businessman and philanthropist. Founder of Diamond Resorts International.",
      ideology: "Moderate Liberal",
      endorsements: ["Independent Business Coalition"],
      sliders: ["60%", "50%", "80%", "40%"]
    },
    {
      name: "Katie Porter (D)",
      image: "porter.jpg",
      bio: "U.S. Representative known for consumer protection and tough questioning in Congress.",
      ideology: "Progressive",
      endorsements: ["Senator Elizabeth Warren", "Working Families Party"],
      sliders: ["20%", "10%", "40%", "50%"]
    },
    {
      name: "Tony Thurmond (D)",
      image: "thurmond.jpg",
      bio: "California State Superintendent of Public Instruction. Former state assemblymember.",
      ideology: "Progressive",
      endorsements: ["California Teachers Association"],
      sliders: ["25%", "15%", "50%", "40%"]
    },
    {
      name: "Antonio Villaraigosa (D)",
      image: "villaraigosa.jpg",
      bio: "Former Mayor of Los Angeles. Known for education reform and infrastructure focus.",
      ideology: "Moderate Liberal",
      endorsements: ["Los Angeles Chamber of Commerce"],
      sliders: ["50%", "35%", "70%", "45%"]
    },
    {
      name: "Betty Yee (D)",
      image: "yee.jpg",
      bio: "Former California State Controller. Advocate for fiscal responsibility and equity.",
      ideology: "Establishment Democrat",
      endorsements: ["California Democratic Party"],
      sliders: ["45%", "40%", "65%", "50%"]
    },
    {
      name: "Steve Hilton (R)",
      image: "hilton.jpg",
      bio: "Political commentator and former advisor to UK Prime Minister David Cameron. Known for conservative populist views.",
      ideology: "Populist Right",
      endorsements: ["California Liberty Caucus"],
      sliders: ["80%", "70%", "30%", "20%"]
    },
    {
      name: "Chad Bianco (R)",
      image: "bianco.jpg",
      bio: "Riverside County Sheriff. Strong advocate for law enforcement and limited government.",
      ideology: "Establishment Republican",
      endorsements: ["California Sheriff's Association"],
      sliders: ["75%", "65%", "35%", "25%"]
    },
    {
      name: "Ché Ahn (R)",
      image: "ahn.jpg",
      bio: "Pastor and leader of Harvest Rock Church. Active in conservative grassroots organizing.",
      ideology: "Libertarian-Right",
      endorsements: ["Faith and Freedom Coalition"],
      sliders: ["85%", "75%", "20%", "15%"]
    }
  ];

  const potentialCandidates = [
    { name: "Rick Caruso", image: "caruso.jpg" },
    { name: "Richard Grenell", image: "grenell.jpg" },
    { name: "Grant Cardone", image: "cardone.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section (Iowa style) */}
      <div className="bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight font-sans">
          California Governor Open Primary
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared candidates, ideological placements, and (coming soon) polling trends for California’s 2026 gubernatorial primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * California uses a <span className="font-semibold">top-two nonpartisan primary</span>. All candidates appear on the same ballot; the top two advance to the general, even if from the same party.
        </p>
      </div>

      {/* Open Primary Polling */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Open Primary Polling Trends</h2>
        <div className="flex items-center justify-center h-[220px] text-gray-300 text-lg">
          No polling data available yet.
        </div>
        <p className="text-sm text-gray-300 italic mt-2 text-center">* Polling will be displayed here once released</p>
      </div>

      {/* Declared Candidates */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Declared Candidates</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {candidates.map((c, i) => (
            <CandidateCard key={i} candidate={c} />
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

// Iowa-style circular candidate card with sliders
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
