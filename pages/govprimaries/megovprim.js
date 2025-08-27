import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function MaineGovPrimariesPage() {
  const democraticCandidates = [
    {
      name: "Shenna Bellows (D)",
      image: "bellows.jpg",
      bio: "Maine Secretary of State and 2014 U.S. Senate nominee.",
      ideology: "Progressive Democrat",
      endorsements: ["Maine Democratic Party"],
      sliders: ["55%", "65%", "60%", "45%"]
    },
    {
      name: "Troy Jackson (D)",
      image: "tjackson.jpg",
      bio: "Former President of the Maine Senate and 2014 congressional candidate.",
      ideology: "Labor Democrat",
      endorsements: ["AFL-CIO"],
      sliders: ["60%", "50%", "55%", "40%"]
    },
    {
      name: "Angus King III (D)",
      image: "king3.jpg",
      bio: "Energy executive and son of U.S. Senator and former Governor Angus King.",
      ideology: "Moderate Democrat",
      endorsements: ["Clean Energy Coalition"],
      sliders: ["40%", "70%", "50%", "60%"]
    },
    {
      name: "Kenneth Pinet (D)",
      image: "pinet.jpg",
      bio: "Retired hotel worker with grassroots organizing experience.",
      ideology: "Populist Democrat",
      endorsements: ["Hospitality Workers Union"],
      sliders: ["50%", "60%", "70%", "35%"]
    },
    {
      name: "Hannah Pingree (D)",
      image: "pingree.jpg",
      bio: "Former Speaker of the Maine House and daughter of Rep. Chellie Pingree.",
      ideology: "Policy-Oriented Democrat",
      endorsements: ["Planned Parenthood Action Fund"],
      sliders: ["45%", "65%", "60%", "55%"]
    }
  ];

  const republicanCandidates = [
    {
      name: "Ken Capron (R)",
      image: "capron.jpg",
      bio: "Retired accountant and community volunteer.",
      ideology: "Fiscal Conservative",
      endorsements: ["Maine GOP"],
      sliders: ["75%", "40%", "65%", "60%"]
    },
    {
      name: "Robert Charles (R)",
      image: "charles.jpg",
      bio: "Lawyer and former U.S. Assistant Secretary of State.",
      ideology: "National Security Conservative",
      endorsements: ["State Defense PAC"],
      sliders: ["80%", "45%", "60%", "70%"]
    },
    {
      name: "David Jones (R)",
      image: "djones.jpg",
      bio: "Real estate executive and 2006 gubernatorial candidate.",
      ideology: "Business Conservative",
      endorsements: ["Chamber of Commerce"],
      sliders: ["70%", "50%", "55%", "50%"]
    },
    {
      name: "James Libby (R)",
      image: "libby.jpg",
      bio: "State senator and 2002 gubernatorial candidate.",
      ideology: "Libertarian-Conservative",
      endorsements: ["Freedom Caucus of Maine"],
      sliders: ["85%", "60%", "65%", "45%"]
    },
    {
      name: "Owen McCarthy (R)",
      image: "mccarthy.png",
      bio: "University of Maine System trustee and tech entrepreneur.",
      ideology: "Moderate Conservative",
      endorsements: ["Innovation Forward PAC"],
      sliders: ["65%", "55%", "60%", "55%"]
    },
    {
      name: "Steven Sheppard (R)",
      image: "sheppard.jpg",
      bio: "Rapper and political outsider.",
      ideology: "Anti-Establishment Conservative",
      endorsements: ["Youth Voter Movement"],
      sliders: ["75%", "45%", "80%", "50%"]
    },
    {
      name: "Robert Wessels (R)",
      image: "wessels.jpg",
      bio: "Former Paris selectman and veteran.",
      ideology: "Localist Conservative",
      endorsements: ["Veterans First PAC"],
      sliders: ["70%", "50%", "60%", "65%"]
    }
  ];

  const potentialCandidates = [
    { name: "Dan Kleban (D)", image: "kleban.jpg" },
    { name: "Rachel Talbot Ross (D)", image: "ross.jpg" },
    { name: "Jonathan Bush (R)", image: "bush.jpg" },
    { name: "Garrett Mason (R)", image: "mason.jpg" },
    { name: "Travis Mills (R)", image: "mills.jpg" },
    { name: "Shawn Moody (R)", image: "moody.jpg" },
    { name: "Peter Cianchette (R)", image: "cianchette.jpg" },
    { name: "Ben Midgely (R)", image: "midgley.jpg" },
    { name: "Laurel Libby (R)", image: "libby.jpg" },
    { name: "Bruce Poliquin (R)", image: "poliquin.jpeg" },
    { name: "Mike Soboleski (R)", image: "soboleski.jpg" },
    { name: "Trey Stewart (R)", image: "stewart.jpg" }
  ];

  // No polling data yet
  const emptyData = [];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Maine Governor Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared candidates, ideological placements, and (coming soon) polling trends for Maine’s 2026 gubernatorial primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * Maine uses a semi-open primary system. Unenrolled voters may choose a party primary to vote in.
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

      {/* Democratic County-Level Map (placeholder for now) */}
      <div className="bg-gray-800 p-8 rounded-lg shadow max-w-7xl mx-auto my-16 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-6 text-center w-full">County Forecast</h2>
        <div className="w-full flex justify-center min-w-[800px] min-h-[420px] items-center text-gray-400">
          {/* Drop in <DemCountyMapME /> when ready */}
          County-level map for the Democratic primary will be displayed here when available.
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

      {/* Republican Polling */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Republican Primary Polling Trends</h2>
        <div className="flex items-center justify-center h-[220px] text-gray-300 text-lg">
          No polling data available yet.
        </div>
        <p className="text-sm text-gray-300 italic mt-2 text-center">* Polling will be displayed here once released</p>
      </div>

      {/* Republican County-Level Map (placeholder for now) */}
      <div className="bg-gray-800 p-8 rounded-lg shadow max-w-7xl mx-auto my-16 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-6 text-center w-full">Republican County Forecast</h2>
        <div className="w-full flex justify-center min-w-[800px] min-h-[420px] items-center text-gray-400">
          {/* Drop in <RepCountyMapME /> when ready */}
          County-level map for the Republican primary will be displayed here when available.
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

// Candidate card (same as NJ)
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
                <div className="absolute top-[-6px]" style={{ left: candidate.sliders[idx], transform: "translateX(-50%)" }}>
                  <span className="text-white text-xl">⬆️</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-1 text-white">Notable Endorsements</h4>
          <ul className="list-disc list-inside text-sm text-gray-200">
            {candidate.endorsements.map((e, i) => (<li key={i}>{e}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
}
