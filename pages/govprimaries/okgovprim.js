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
// When ready, wire county maps like:
// import dynamic from "next/dynamic";
// const DemCountyMapOK = dynamic(() => import("../../components/okgovprim/DemCountyMapOK"), { ssr: false });
// const RepCountyMapOK = dynamic(() => import("../../components/okgovprim/RepCountyMapOK"), { ssr: false });

export default function OklahomaGovPrimariesPage() {
  // ---- POLLING (add rows when available) ----
  const demRaw = [
    // Example: { period: "Jun 10–12, 2025", Munson: 38, Undecided: 62 }
  ];
  const repRaw = [
    // Example: { period: "Jun 10–12, 2025", Drummond: 28, Haynes: 6, Mazzei: 12, McCall: 18, Merrick: 10, Undecided: 26 }
  ];

  // Helper: proportional undecided redistribution
  const redistribute = (rows, keys) =>
    rows.map((d) => {
      const totalNamed = keys.reduce((s, k) => s + (d[k] || 0), 0) || 1;
      const adj = {};
      keys.forEach((k) => {
        const share = (d[k] || 0) + ((d.Undecided || 0) * ((d[k] || 0) / totalNamed));
        adj[k] = parseFloat(share.toFixed(1));
      });
      return { period: d.period, ...adj };
    });

  const demKeys = ["Munson"];
  const repKeys = ["Drummond", "Haynes", "Mazzei", "McCall", "Merrick"];

  const demPolling = redistribute(demRaw, demKeys);
  const repPolling = redistribute(repRaw, repKeys);

  // ---- CANDIDATES ----
  const democraticCandidates = [
    {
      name: "Cyndi Munson (D)",
      image: "munson.jpg",
      bio: "Minority Leader of the Oklahoma House of Representatives, known for education advocacy and bipartisan initiatives.",
      ideology: "Moderate Democrat",
      endorsements: ["Oklahoma Democratic Party", "Moms Demand Action"],
      sliders: ["45%", "40%", "55%", "50%"],
    },
  ];

  const republicanCandidates = [
    {
      name: "Gentner Drummond (R)",
      image: "drummond.jpg",
      bio: "Oklahoma Attorney General known for efforts to restore state legal authority and prosecute corruption.",
      ideology: "Establishment Conservative",
      endorsements: ["Oklahoma Chamber PAC"],
      sliders: ["70%", "65%", "45%", "60%"],
    },
    {
      name: "Leisa Mitchell Haynes (R)",
      image: "haynes.png",
      bio: "Attorney and advocate focused on constitutional rights and religious liberty.",
      ideology: "Libertarian-Right",
      endorsements: ["Oklahoma Patriots Coalition"],
      sliders: ["85%", "60%", "40%", "55%"],
    },
    {
      name: "Mike Mazzei (R)",
      image: "mazzei.jpg",
      bio: "Former State Senator and financial advisor with a focus on fiscal policy.",
      ideology: "Mainstream Conservative",
      endorsements: ["Americans for Prosperity"],
      sliders: ["65%", "70%", "55%", "65%"],
    },
    {
      name: "Charles McCall (R)",
      image: "mccall.jpg",
      bio: "Speaker of the Oklahoma House of Representatives and advocate for rural infrastructure.",
      ideology: "Establishment Conservative",
      endorsements: ["Oklahoma Farm Bureau"],
      sliders: ["60%", "75%", "50%", "70%"],
    },
    {
      name: "Jake Merrick (R)",
      image: "merrick.jpg",
      bio: "Former State Senator known for strong stances on social issues and limited government.",
      ideology: "Religious Conservative",
      endorsements: ["Oklahoma Right to Life"],
      sliders: ["90%", "80%", "30%", "80%"],
    },
  ];

  const potentialCandidates = [
    { name: "Ryan Walters (R)", image: "walters.png" },
    { name: "Chip Keating (R)", image: "keating.jpg" },
    { name: "Matt Pinnell (R)", image: "pinnell.jpg" },
    { name: "Kayse Shrum (R)", image: "shrum.jpg" },
    { name: "Greg Treat (R)", image: "treat.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section (Michigan-style) */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight">Oklahoma Governor Primaries</h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared, potential candidates, ideological placements, and polling trends for Oklahoma’s 2026 gubernatorial primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * Oklahoma allows parties to invite independents. Democrats typically allow independents; Republicans are closed.
        </p>
      </div>

      {/* Democratic Polling */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Democratic Primary Polling Trends</h2>
        {demPolling.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={demPolling} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid stroke="#444" />
              <XAxis dataKey="period" stroke="#ccc" />
              <YAxis domain={[0, 80]} stroke="#ccc" />
              <Tooltip contentStyle={{ backgroundColor: "#222", border: "1px solid #444", color: "#fff" }} labelStyle={{ color: "#fff" }} />
              <Legend wrapperStyle={{ color: "#fff" }} />
              {demKeys.map((key, idx) => (
                <Line key={key} type="monotone" dataKey={key} name={key} stroke={["#10b981"][idx % 1]} dot={{ r: 3 }} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-32 flex items-center justify-center text-gray-300 italic">
            No polling data available yet.
          </div>
        )}
        {demPolling.length > 0 && (
          <p className="text-sm text-gray-300 italic mt-2 text-center">* Undecided redistributed proportionally</p>
        )}
      </div>

      {/* Democratic County-Level Map Placeholder */}
      <div className="bg-gray-800 p-8 rounded-lg shadow max-w-7xl mx-auto my-16 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-6 text-center w-full">Democratic County Forecast</h2>
        <div className="w-full flex justify-center min-w-[800px]">
          {/* <DemCountyMapOK /> */}
          <span className="text-gray-400 text-lg">County-level map for the Democratic primary will appear here when available.</span>
        </div>
      </div>

      {/* Democratic Candidates */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Democratic Primary Candidates</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {democraticCandidates.map((c, i) => (
            <CandidateCard key={i} candidate={c} />
          ))}
        </div>
      </div>

      {/* Republican Polling */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Republican Primary Polling Trends</h2>
        {repPolling.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={repPolling} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid stroke="#444" />
              <XAxis dataKey="period" stroke="#ccc" />
              <YAxis domain={[0, 90]} stroke="#ccc" />
              <Tooltip contentStyle={{ backgroundColor: "#222", border: "1px solid #444", color: "#fff" }} labelStyle={{ color: "#fff" }} />
              <Legend wrapperStyle={{ color: "#fff" }} />
              {repKeys.map((key, idx) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  name={key}
                  stroke={["#ef4444", "#60a5fa", "#f97316", "#a21caf", "#facc15"][idx % 5]}
                  dot={{ r: 3 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-32 flex items-center justify-center text-gray-300 italic">
            No polling data available yet.
          </div>
        )}
        {repPolling.length > 0 && (
          <p className="text-sm text-gray-300 italic mt-2 text-center">* Undecided redistributed proportionally</p>
        )}
      </div>

      {/* Republican County-Level Map Placeholder */}
      <div className="bg-gray-800 p-8 rounded-lg shadow max-w-7xl mx-auto my-16 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-6 text-center w-full">Republican County Forecast</h2>
        <div className="w-full flex justify-center min-w-[800px]">
          {/* <RepCountyMapOK /> */}
          <span className="text-gray-400 text-lg">County-level map for the Republican primary will appear here when available.</span>
        </div>
      </div>

      {/* Republican Candidates */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Republican Primary Candidates</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {republicanCandidates.map((c, i) => (
            <CandidateCard key={i} candidate={c} />
          ))}
        </div>
      </div>

      {/* Potential Contenders */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-16">
        <h2 className="text-2xl font-bold text-center mb-8">Potential Contenders</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {potentialCandidates.map((p, i) => (
            <div key={i} className="flex flex-col items-center bg-gray-700/80 rounded-lg p-4">
              <img src={`/${p.image}`} alt={p.name} className="w-40 h-40 rounded-full object-cover shadow-md" />
              <p className="mt-3 text-sm text-center text-gray-200 font-semibold">{p.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Candidate card (circular photo) — matches Michigan style
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
