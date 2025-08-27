import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

export default function MichiganSenPrimariesPage() {
  const democraticCandidates = [
    {
      name: "Abdul El-Sayed (D)",
      image: "el-sayed.jpg",
      bio: "Former Wayne County Health Director and 2018 gubernatorial candidate focused on healthcare and justice.",
      ideology: "Progressive Democrat",
      endorsements: ["Our Revolution", "Michigan Nurses Association"],
      sliders: ["80%", "85%", "65%", "45%"],
    },
    {
      name: "Mallory McMorrow (D)",
      image: "mcmorrow.jpg",
      bio: "State senator known for viral floor speeches and advocacy for reproductive rights.",
      ideology: "Progressive Democrat",
      endorsements: ["EMILY's List", "Run for Something"],
      sliders: ["75%", "85%", "55%", "40%"],
    },
    {
      name: "Haley Stevens (D)",
      image: "hstevens.jpg",
      bio: "U.S. Representative from MI-11 focused on workforce development and manufacturing.",
      ideology: "Establishment Democrat",
      endorsements: ["UAW", "DCCC"],
      sliders: ["55%", "65%", "60%", "50%"],
    },
  ];

  const republicanCandidates = [
    {
      name: "Kent Benham (R)",
      image: "benham.jpg",
      bio: "Dentist running on a platform of healthcare reform and fiscal responsibility.",
      ideology: "Moderate Conservative",
      endorsements: ["Michigan Dental PAC"],
      sliders: ["65%", "60%", "55%", "50%"],
    },
    {
      name: "Fred Heurtebise (R)",
      image: "heurtebise.png",
      bio: "Engineer and welder advocating for small businesses and infrastructure revitalization.",
      ideology: "Populist Conservative",
      endorsements: ["Michigan Right to Work"],
      sliders: ["75%", "50%", "65%", "55%"],
    },
    {
      name: "Mike Rogers (R)",
      image: "mrogers.jpg",
      bio: "Former U.S. Representative and 2024 Senate nominee focused on national security and tech.",
      ideology: "Establishment Republican",
      endorsements: ["NRSC", "Michigan GOP"],
      sliders: ["70%", "65%", "45%", "70%"],
    },
  ];

  const potentialContenders = [
    { name: "Lorenzo Sewell (D)", image: "sewell.jpg" },
    { name: "Sarah Anthony (D)", image: "anthony.jpg" },
    { name: "Dana Nessel (D)", image: "nessel.jpg" },
  ];

  const demRaw = [
    { period: "May 5–8", ElSayed: 22, McMorrow: 14, Stevens: 34, Tate: 0, Undecided: 30 },
    { period: "May 5–8 (2)", ElSayed: 24, McMorrow: 12, Stevens: 34, Tate: 0, Undecided: 30 },
    { period: "May 28 – Jun 2", ElSayed: 15, McMorrow: 20, Stevens: 24, Tate: 4, Undecided: 37 },
    { period: "July 4–7", ElSayed: 22, McMorrow: 11, Stevens: 24, Tate: 1, Undecided: 42 },
  ];

  const demPolling = demRaw.map((d) => {
    const names = ["ElSayed", "McMorrow", "Stevens", "Tate"];
    const total = names.reduce((sum, k) => sum + d[k], 0);
    const adj = {};
    names.forEach((k) => {
      const share = d[k] + d.Undecided * (d[k] / total);
      adj[k] = parseFloat(share.toFixed(1));
    });
    return { period: d.period, ...adj };
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header band (NM/OK style) */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Michigan U.S. Senate Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared candidates, polling trends, and ideological positioning for Michigan’s 2026 U.S. Senate primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * Michigan uses a closed primary system. Only registered party members may vote in their party’s primary.
        </p>
      </div>

      {/* Democratic Polling (dark card) */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Democratic Primary Polling Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={demPolling} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" tick={{ fill: "#fff", fontSize: 12 }} />
            <YAxis domain={[0, 50]} tick={{ fill: "#fff" }} />
            <Tooltip contentStyle={{ backgroundColor: "#333", borderRadius: 4 }} formatter={(v, n) => [`${v}%`, n]} />
            <Legend wrapperStyle={{ color: "#fff" }} />
            {["ElSayed", "McMorrow", "Stevens", "Tate(Withdrawn)"].map((key, idx) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                name={key === "ElSayed" ? "Abdul El-Sayed" : key}
                stroke={["#10b981", "#8b5cf6", "#3b82f6", "#f59e0b"][idx]}
                dot={{ r: 3 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-300 italic mt-2 text-center">
          * Undecided voters proportionally reallocated
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

      {/* Republican Polling (placeholder) */}
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

      {/* Potential Contenders (Oklahoma style) */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-16">
        <h2 className="text-2xl font-bold text-center mb-8">Potential Contenders</h2>
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
