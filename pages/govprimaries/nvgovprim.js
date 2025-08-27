import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function NevadaGovPrimariesPage() {
  // Raw polling holders (add rows when available)
  const demRaw = [];
  const repRaw = [];

  // Proportional undecided redistribution helper
  const redistribute = (rows, keys) =>
    rows.map((d) => {
      const totalNamed = keys.reduce((s, k) => s + (d[k] ?? 0), 0) || 1;
      const adj = {};
      keys.forEach((k) => {
        const v = d[k] ?? 0;
        const share = v + (d.Undecided ?? 0) * (v / totalNamed);
        adj[k] = parseFloat(share.toFixed(1));
      });
      return { period: d.period || d.name || "—", ...adj };
    });

  const demKeys = []; // add Dem candidate keys when polling exists
  const repKeys = []; // add GOP candidate keys when polling exists

  const demPolling = redistribute(demRaw, demKeys);
  const repPolling = redistribute(repRaw, repKeys);

  // Candidates
  const democraticCandidates = [
    {
      name: "Aaron Ford (D)",
      image: "ford.png",
      bio: "Nevada Attorney General and former state senator representing Clark County.",
      ideology: "Moderate Democrat",
      endorsements: ["Nevada Democratic Party", "Sierra Club Nevada Chapter"],
      sliders: ["40%","25%","55%","65%"]
    }
  ];

  const republicanCandidates = [
    {
      name: "Joe Lombardo (R)",
      image: "lombardo.jpg",
      bio: "Governor of Nevada and former Clark County Sheriff focused on public safety.",
      ideology: "Conservative Republican",
      endorsements: ["Nevada Republican Party", "Nevada Fraternal Order of Police"],
      sliders: ["80%","70%","65%","70%"]
    },
    {
      name: "Irina Hansen (R)",
      image: "hansen.jpeg",
      bio: "Businesswoman and Republican activist advocating for small government and tax cuts.",
      ideology: "Conservative",
      endorsements: ["Nevada GOP", "Nevada Free Market Coalition"],
      sliders: ["90%","80%","55%","75%"]
    }
  ];

  const potentialContenders = [
    { name: "Steve Sisolak (D)", image: "sisolak.jpeg" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight font-sans">
          Nevada Governor Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared and potential candidates, ideological placements, and (coming soon) polling trends for Nevada’s 2026 gubernatorial primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * Nevada runs closed party primaries. Voters must be registered with a party to vote in that party’s primary.
        </p>
      </div>

      {/* Democratic Polling (placeholder) */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Democratic Primary Polling Trends</h2>
        {demPolling.length > 0 ? (
          <div className="text-center text-gray-300">Polling chart will render here.</div>
        ) : (
          <div className="flex items-center justify-center h-[220px] text-gray-300 text-lg">
            No polling data available yet.
          </div>
        )}
        <p className="text-sm text-gray-300 italic mt-2 text-center">
          * Undecided redistributed proportionally when applicable
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

      {/* Republican Polling (placeholder) */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Republican Primary Polling Trends</h2>
        {repPolling.length > 0 ? (
          <div className="text-center text-gray-300">Polling chart will render here.</div>
        ) : (
          <div className="flex items-center justify-center h-[220px] text-gray-300 text-lg">
            No polling data available yet.
          </div>
        )}
        <p className="text-sm text-gray-300 italic mt-2 text-center">
          * Undecided redistributed proportionally when applicable
        </p>
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
      {potentialContenders.length > 0 && (
        <div className="w-full max-w-6xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
          <h2 className="text-2xl font-bold text-center mb-8">Potential Contenders</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {potentialContenders.map((p, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={`/${p.image}`} alt={p.name} className="w-32 h-32 rounded-full object-cover shadow-md mb-2" />
                <p className="mt-2 text-sm text-center text-white font-semibold">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

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
          {slidersConfig.map(([left, right], idx) => {
            const pos = candidate.sliders?.[idx] ?? "50%";
            return (
              <div key={idx}>
                <div className="flex justify-between text-xs text-gray-300 mb-1">
                  <span>{left}</span>
                  <span>{right}</span>
                </div>
                <div className="relative h-2 bg-gradient-to-r from-red-600 to-blue-600 rounded-full">
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
