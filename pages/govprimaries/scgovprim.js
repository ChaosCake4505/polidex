import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function SouthCarolinaGovPrimariesPage() {
  // --- DEMOCRATIC SIDE (placeholder like NJ when no data) ---
  const democraticCandidates = []; // none yet
  const demPolling = []; // no polling yet

  // --- REPUBLICAN SIDE (your candidates + polling) ---
  const republicanCandidates = [
    {
      name: "Pamela Evette (R)",
      image: "evette.jpg",
      bio: "Lieutenant Governor of South Carolina since 2019, known for business advocacy and conservative education reform.",
      ideology: "Mainstream Conservative",
      endorsements: ["SC GOP Women's Caucus"],
      sliders: ["80%", "85%", "50%", "70%"],
    },
    {
      name: "Josh Kimbrell (R)",
      image: "kimbrell.jpg",
      bio: "State Senator from the 11th District since 2020, focusing on tax reform and parental rights.",
      ideology: "Hardline Conservative",
      endorsements: ["Freedom Caucus of SC"],
      sliders: ["85%", "80%", "60%", "75%"],
    },
    {
      name: "Alan Wilson (R)",
      image: "awilson.jpg",
      bio: "Attorney General of South Carolina since 2011, focused on legal conservatism and law enforcement.",
      ideology: "Establishment Conservative",
      endorsements: ["National Association of Attorneys General"],
      sliders: ["75%", "70%", "45%", "85%"],
    },
    {
      name: "Nancy Mace (R)",
      image: "mace.jpg",
      bio: "U.S. Representative from South Carolina's 1st congressional district.",
      ideology: "Populist Right",
      endorsements: ["Local GOP Clubs"],
      sliders: ["75%", "70%", "45%", "85%"],
    },
    {
      name: "Ralph Norman (R)",
      image: "norman.jpg",
      bio: "U.S. Representative from South Carolina's 5th congressional district.",
      ideology: "Populist Right",
      endorsements: ["Local Conservative Groups"],
      sliders: ["75%", "70%", "45%", "85%"],
    },
  ];

  // Polls you provided → redistribute undecided proportionally (like NJ page)
  const repRaw = [
    // Evette, Kimbrell, Wilson, Mace, Norman, Undecided
    { period: "Mar 8–10, 2025 (Trafalgar)",    Evette: 31, Kimbrell: 29, Wilson: 11, Mace: 27, Norman: 0,  Undecided: 2 },
    { period: "Mar 19–21, 2025 (First Tues)",  Evette: 7,  Kimbrell: 16, Wilson: 6,  Mace: 21, Norman: 3,  Undecided: 47 },
    { period: "Jul 21–25, 2025 (SCPC)",        Evette: 8,  Kimbrell: 16, Wilson: 6,  Mace: 15, Norman: 3,  Undecided: 52 },
  ];

  const repPolling = repRaw.map((d) => {
    const names = ["Evette", "Kimbrell", "Wilson", "Mace", "Norman"];
    const totalKnown = names.reduce((s, k) => s + (d[k] || 0), 0) || 1;
    const adjusted = {};
    names.forEach((k) => {
      const share = (d[k] || 0) + (d.Undecided || 0) * ((d[k] || 0) / totalKnown);
      adjusted[k] = parseFloat(share.toFixed(1));
    });
    return { period: d.period, ...adjusted };
  });

  const potentialCandidates = [
    { name: "Sean Bennett (R)", image: "sbennett.jpg" },
    { name: "Mark Sanford (R)", image: "sanford.jpg" },
    { name: "Jermaine Johnson (D)", image: "jjohnson.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          South Carolina Governor Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared candidates, ideological placements, and polling trends for South Carolina’s gubernatorial primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * South Carolina uses an <span className="font-semibold">open</span> primary system. Voters may choose either party’s primary.
        </p>
      </div>

      {/* Democratic Polling (placeholder if empty) */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Democratic Primary Polling Trends
        </h2>
        {demPolling.length === 0 ? (
          <div className="flex items-center justify-center h-[180px] text-gray-300 text-lg">
            No polling data available yet.
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={demPolling} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid stroke="#444" />
              <XAxis dataKey="period" stroke="#ccc" />
              <YAxis domain={[0, 60]} stroke="#ccc" />
              <Tooltip contentStyle={{ backgroundColor: "#222", border: "1px solid #444", color: "#fff" }} labelStyle={{ color: "#fff" }} />
              <Legend wrapperStyle={{ color: "#fff" }} />
              {/* Add <Line> series once Dem names exist */}
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Democratic County-Level Map Placeholder */}
      <div className="bg-gray-800 p-8 rounded-lg shadow max-w-7xl mx-auto my-16 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-6 text-center w-full">Democratic County Forecast</h2>
        <div className="w-full flex items-center justify-center min-h-[220px] text-gray-300">
          County map coming soon.
        </div>
      </div>

      {/* Democratic Candidates (none yet) */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Democratic Primary Candidates</h2>
        {democraticCandidates.length === 0 ? (
          <div className="text-center text-gray-300">No declared Democratic candidates at this time.</div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {democraticCandidates.map((c, i) => (
              <CandidateCard key={i} candidate={c} />
            ))}
          </div>
        )}
      </div>

      {/* Republican Polling */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Republican Primary Polling Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={repPolling} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid stroke="#444" />
            <XAxis dataKey="period" stroke="#ccc" />
            <YAxis domain={[0, 70]} stroke="#ccc" />
            <Tooltip contentStyle={{ backgroundColor: "#222", border: "1px solid #444", color: "#fff" }} labelStyle={{ color: "#fff" }} />
            <Legend wrapperStyle={{ color: "#fff" }} />
            {["Evette", "Kimbrell", "Wilson", "Mace", "Norman"].map((key, idx) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                name={key}
                stroke={["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6"][idx]}
                dot={{ r: 3 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-300 italic mt-2 text-center">
          * Undecided redistributed proportionally (same method as NJ page).
        </p>
      </div>

      {/* Republican County-Level Map Placeholder */}
      <div className="bg-gray-800 p-8 rounded-lg shadow max-w-7xl mx-auto my-16 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-6 text-center w-full">Republican County Forecast</h2>
        <div className="w-full flex items-center justify-center min-h-[220px] text-gray-300">
          County map coming soon.
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
    ["Conservative", "Progressive"],
    ["Pro-Industry", "Pro-Environment"],
    ["Establishment", "Populist"],
    ["Hawkish", "Dovish"],
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
