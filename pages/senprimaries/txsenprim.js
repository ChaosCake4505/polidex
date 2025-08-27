import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function TexasSenatePrimariesPage() {
  // --- Candidates ---
  const republicanCandidates = [
    {
      name: "Virgil Bierschwale (R)",
      image: "bierschwale.jpg",
      bio: "Software developer and political outsider running on a grassroots conservative platform.",
      ideology: "Populist Conservative",
      endorsements: ["Grassroots TX Coalition"],
      sliders: ["70%", "40%", "75%", "60%"]
    },
    {
      name: "John Cornyn (R)",
      image: "cornyn.jpg",
      bio: "Incumbent U.S. Senator since 2002 and former Senate Majority Whip.",
      ideology: "Establishment Conservative",
      endorsements: ["NRSC", "Texas GOP Leadership"],
      sliders: ["50%", "55%", "30%", "45%"]
    },
    {
      name: "Rennie Mann (R)",
      image: "rmann.jpg",
      bio: "School board president emphasizing rural education and traditional values.",
      ideology: "Social Conservative",
      endorsements: ["Rural Educators PAC"],
      sliders: ["60%", "45%", "65%", "50%"]
    },
    {
      name: "Ken Paxton (R)",
      image: "paxton.jpg",
      bio: "Texas Attorney General since 2015 known for his legal battles on immigration and voting rights.",
      ideology: "Hardline Conservative",
      endorsements: ["Texas Values Action", "Club for Growth"],
      sliders: ["85%", "35%", "80%", "70%"]
    }
  ];

  const democraticCandidates = [
    {
      name: "Colin Allred (D)",
      image: "allred.jpg",
      bio: "Former U.S. Representative and 2024 Senate nominee focused on healthcare and voting rights.",
      ideology: "Moderate Democrat",
      endorsements: ["Texas AFL-CIO", "Planned Parenthood"],
      sliders: ["50%", "75%", "45%", "60%"]
    },
    {
      name: "Terry Virts (D)",
      image: "virtis.jpg",
      bio: "Retired NASA astronaut and media personality advocating for science and innovation.",
      ideology: "Technocratic Democrat",
      endorsements: ["STEM Action Fund"],
      sliders: ["55%", "85%", "50%", "45%"]
    }
  ];

  const potentialContenders = [
    { name: "Joaquin Castro (D)", image: "castro.jpg" },
    { name: "Beto O'Rourke (D)", image: "orourke.jpg" },
    { name: "James Talarico (D)", image: "talarico.jpg" }
  ];

  // --- Polling (GOP) ---
  const repRaw = [
    { period: "Jan 4–6", Cornyn: 34, Paxton: 42, Undecided: 25 },
    { period: "Jan 28 – Feb 2", Cornyn: 28, Paxton: 53, Undecided: 19 },
    { period: "Mar 7–10", Cornyn: 27, Paxton: 38, Undecided: 35 },
    { period: "Mid–Apr", Cornyn: 33, Paxton: 50, Undecided: 17 },
    { period: "Apr 27 – May 1", Cornyn: 40, Paxton: 56, Undecided: 4 },
    { period: "Apr 29 – May 1", Cornyn: 35, Paxton: 52, Undecided: 13 },
    { period: "May 9–19", Cornyn: 34, Paxton: 43, Undecided: 23 },
    { period: "May 27–28", Cornyn: 28, Paxton: 50, Undecided: 21 },
    { period: "May 28 – Jun 7", Cornyn: 34, Paxton: 44, Undecided: 22 },
    { period: "Jun 6–8", Cornyn: 33, Paxton: 49, Undecided: 18 },
    { period: "Jun 17–22", Cornyn: 38, Paxton: 57, Undecided: 5 }
  ];

  const repPolling = repRaw.map(d => {
    const totalNamed = (d.Cornyn ?? 0) + (d.Paxton ?? 0) || 1;
    const cornynAdj = (d.Cornyn ?? 0) + (d.Undecided ?? 0) * ((d.Cornyn ?? 0) / totalNamed);
    const paxtonAdj = (d.Paxton ?? 0) + (d.Undecided ?? 0) * ((d.Paxton ?? 0) / totalNamed);
    return {
      period: d.period,
      Cornyn: parseFloat(cornynAdj.toFixed(1)),
      Paxton: parseFloat(paxtonAdj.toFixed(1))
    };
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section (Idaho-style) */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Texas U.S. Senate Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared candidates, ideological placements, and (coming soon) polling trends for Texas’s 2026 U.S. Senate primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * Texas uses an open primary system. Voters may choose which party’s primary to participate in.
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
            {democraticCandidates.map((c, i) => (
              <CandidateCard key={i} candidate={c} />
            ))}
          </div>
        )}
      </div>

      {/* Republican Polling (chart) */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Republican Primary Polling Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={repPolling} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid stroke="#444" />
            <XAxis dataKey="period" stroke="#ccc" />
            <YAxis domain={[0, 70]} stroke="#ccc" />
            <Tooltip contentStyle={{ backgroundColor: "#222", border: "1px solid #444", color: "#fff" }} labelStyle={{ color: "#fff" }} />
            <Legend wrapperStyle={{ color: "#fff" }} />
            <Line type="monotone" dataKey="Cornyn" name="John Cornyn" stroke="#60a5fa" dot={{ r: 3 }} />
            <Line type="monotone" dataKey="Paxton" name="Ken Paxton" stroke="#ef4444" dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-300 italic mt-2 text-center">* Undecided voters proportionally reallocated</p>
      </div>

      {/* Republican Candidates */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Republican Primary Candidates</h2>
        {republicanCandidates.length === 0 ? (
          <p className="text-center text-white text-lg italic">No declared candidates at this time.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {republicanCandidates.map((c, i) => (
              <CandidateCard key={i} candidate={c} />
            ))}
          </div>
        )}
      </div>

      {/* Potential Democratic Contenders */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Potential Democratic Contenders</h2>
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
      </div>

      <Footer />
    </div>
  );
}

// Idaho-style circular Candidate card
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
          {slidersConfig.map(([left, right], idx) => {
            const pos = candidate.sliders?.[idx] ?? "50%";
            return (
              <div key={idx}>
                <div className="flex justify-between text-xs text-gray-300 mb-1">
                  <span>{left}</span><span>{right}</span>
                </div>
                <div className="relative h-2 bg-gradient-to-r from-blue-600 to-red-600 rounded-full">
                  <div className="absolute top-[-6px]" style={{ left: pos, transform: "translateX(-50%)" }}>
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
