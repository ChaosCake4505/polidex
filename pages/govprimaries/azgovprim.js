import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function ArizonaGovPrimariesPage() {
  // --- Polling data ---
  const demPollData = [];

  const rawRepPollData = [
    { name: "Jan. 24, 2025", biggs: 71, robson: 14, undecided: 15 },
    { name: "Apr. 9, 2025", biggs: 45, robson: 16, undecided: 39 },
    { name: "May 25, 2025", biggs: 57, robson: 25, undecided: 18 },
    { name: "Jun. 18, 2025", biggs: 49, robson: 26, undecided: 17 }
  ];

  // Proportional undecided redistribution
  const repPollData = rawRepPollData.map(d => {
    const totalNamed = (d.biggs ?? 0) + (d.robson ?? 0) || 1;
    const biggs = (d.biggs ?? 0) + (d.undecided ?? 0) * ((d.biggs ?? 0) / totalNamed);
    const robson = (d.robson ?? 0) + (d.undecided ?? 0) * ((d.robson ?? 0) / totalNamed);
    return {
      name: d.name,
      Biggs: parseFloat(biggs.toFixed(1)),
      Robson: parseFloat(robson.toFixed(1))
    };
  });

  // --- Candidates ---
  const democraticCandidates = [
    {
      name: "Katie Hobbs (D)",
      image: "hobbs.jpg",
      bio: "Former Governor and Secretary of State of Arizona, known for her advocacy on voting rights and public education.",
      ideology: "Progressive Democrat",
      endorsements: ["Arizona Democratic Party", "Emily's List"],
      sliders: ["60%", "35%", "50%", "45%"]
    }
  ];

  const republicanCandidates = [
    {
      name: "Andy Biggs (R)",
      image: "biggs.png",
      bio: "U.S. Representative known for his staunch conservatism and membership in the House Freedom Caucus.",
      ideology: "Hardline Conservative",
      endorsements: ["FreedomWorks", "Arizona Republican Assembly"],
      sliders: ["95%", "80%", "70%", "80%"]
    },
    {
      name: "Karrin Taylor Robson (R)",
      image: "robson.jpg",
      bio: "Businesswoman and former Arizona Board of Regents member with a focus on conservative economic policies.",
      ideology: "Mainstream Conservative",
      endorsements: ["Business Roundtable Arizona", "AZ Chamber of Commerce"],
      sliders: ["85%", "75%", "60%", "70%"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section (Minnesota style) */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight">Arizona Governor Primaries</h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared and potential candidates, ideological placements, and polling trends for Arizona’s 2026 gubernatorial primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * Arizona runs closed primaries, but independents may request one party’s ballot (not for the presidential preference election).
        </p>
      </div>

      {/* Democratic Polling (placeholder) */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Democratic Primary Polling Trends</h2>
        {demPollData.length ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={demPollData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid stroke="#444" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis domain={[0, 100]} stroke="#ccc" />
              <Tooltip contentStyle={{ backgroundColor: "#222", border: "1px solid #444", color: "#fff" }} labelStyle={{ color: "#fff" }} />
              <Legend wrapperStyle={{ color: "#fff" }} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-[220px] text-gray-300 text-lg">No polling data available yet.</div>
        )}
        <p className="text-sm text-gray-300 italic mt-2 text-center">* Undecided redistributed proportionally when applicable</p>
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
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={repPollData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid stroke="#444" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis domain={[0, 100]} stroke="#ccc" />
            <Tooltip contentStyle={{ backgroundColor: "#222", border: "1px solid #444", color: "#fff" }} labelStyle={{ color: "#fff" }} />
            <Legend wrapperStyle={{ color: "#fff" }} />
            <Line type="monotone" dataKey="Biggs" name="Andy Biggs" stroke="#ef4444" dot={{ r: 3 }} />
            <Line type="monotone" dataKey="Robson" name="Karrin Taylor Robson" stroke="#60a5fa" dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-300 italic mt-2 text-center">* Undecided redistributed proportionally</p>
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
