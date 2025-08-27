import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dynamic from "next/dynamic";
const DemCountyMapNJ = dynamic(() => import("../../components/njgovprim/DemCountyMapNJ"), { ssr: false });
const RepCountyMapNJ = dynamic(() => import("../../components/njgovprim/RepCountyMapNJ"), { ssr: false });


export default function NewJerseyGovPrimariesPage() {
  const democraticCandidates = [
    { name: "Mikie Sherrill (D)", image: "sherrill.jpg", bio: "U.S. Representative for NJ's 11th district and former Navy pilot.", ideology: "Moderate Democrat", endorsements: ["NJ Democratic Party", "Working Families Party"], sliders: ["60%", "70%", "50%", "40%"] },
    { name: "Ras Baraka (D)",    image: "baraka.jpg",   bio: "Mayor of Newark focusing on community-driven policy and social justice.", ideology: "Progressive", endorsements: ["NJEA", "Labor Unions"], sliders: ["80%", "90%", "60%", "30%"] },
    { name: "Steven Fulop (D)",   image: "fulop.jpg",    bio: "Mayor of Jersey City known for tech innovation and economic development.", ideology: "Moderate Liberal", endorsements: ["Mayor’s Association", "Business Council"], sliders: ["65%", "75%", "55%", "45%"] },
    { name: "Josh Gottheimer (D)",image: "gottheimer.jpg", bio: "U.S. Representative for NJ's 5th district and centrist Democrat.", ideology: "Establishment Democrat", endorsements: ["Congressional Progressive Caucus"], sliders: ["55%", "65%", "45%", "50%"] },
    { name: "Sean Spiller (D)",   image: "spiller.jpg",   bio: "Mayor of Montclair focused on affordable housing and environmental policy.", ideology: "Progressive", endorsements: ["Environmental Groups", "NJ Clean Energy"], sliders: ["75%", "85%", "60%", "35%"] },
    { name: "Stephen Sweeney (D)",image: "sweeny.png",    bio: "Former NJ Senate President advocating for labor rights and fiscal responsibility.", ideology: "Moderate Democrat", endorsements: ["NJ Senate Democratic Caucus"], sliders: ["50%", "60%", "40%", "45%"] }
  ];

  const republicanCandidates = [
    { name: "Jack Ciattarelli (R)", image: "ciattarelli.jpg", bio: "Former State Assemblyman and 2021 gubernatorial nominee.", ideology: "Moderate Republican", endorsements: ["NJ Republican Party"], sliders: ["40%", "60%", "35%", "55%"] },
    { name: "Justin Barbera (R)",  image: "barbera.jpeg",   bio: "Business consultant and conservative activist.", ideology: "Conservative", endorsements: ["NJ Conservative Union"], sliders: ["30%", "50%", "60%", "70%"] },
    { name: "Jon Bramnick (R)",    image: "bramnick.jpeg",  bio: "State Senator and former Minority Leader with focus on public safety.", ideology: "Moderate Conservative", endorsements: ["NJ GOP Leadership"], sliders: ["35%", "55%", "50%", "60%"] },
    { name: "Mario Kranjac (R)",   image: "kranjac.jpeg",    bio: "Entrepreneur and longtime grassroots organizer.", ideology: "Conservative", endorsements: ["Tea Party NJ"], sliders: ["25%", "50%", "55%", "65%"] },
    { name: "Bill Spadea (R)",     image: "spadea.png",    bio: "Radio host and business commentator known for libertarian principles.", ideology: "Libertarian-Right", endorsements: ["NJ Libertarian Network"], sliders: ["20%", "40%", "65%", "60%"] }
  ];

  const demRaw = [
    { period: 'Jan–Feb 2025',    Baraka: 12, Fulop: 12, Gottheimer: 9,  Sherrill: 25, Spiller: 11, Sweeney: 5,  Undecided: 26 },
    { period: 'Feb–Mar 2025',    Baraka: 14, Fulop: 10, Gottheimer: 9,  Sherrill: 20, Spiller: 15, Sweeney: 8,  Undecided: 24 },
    { period: 'Mar 19–20, 2025', Baraka: 12, Fulop: 9,  Gottheimer: 5,  Sherrill: 14, Spiller: 8,  Sweeney: 5,  Undecided: 47 },
    { period: 'Apr 1–3, 2025',   Baraka: 11, Fulop: 13, Gottheimer: 14, Sherrill: 19, Spiller: 11, Sweeney: 5,  Undecided: 27 },
    { period: 'Apr 6–8, 2025',   Baraka: 13, Fulop: 13, Gottheimer: 15, Sherrill: 25, Spiller: 12, Sweeney: 6,  Undecided: 16 },
    { period: 'Apr 1–10, 2025',  Baraka: 9,  Fulop: 12, Gottheimer: 9,  Sherrill: 17, Spiller: 10, Sweeney: 7,  Undecided: 32 },
    { period: 'May 7–10, 2025',  Baraka: 21, Fulop: 19, Gottheimer: 10, Sherrill: 31, Spiller: 9,  Sweeney: 9,  Undecided: 1  },
    { period: 'May 10–13, 2025', Baraka: 15, Fulop: 16, Gottheimer: 11, Sherrill: 33, Spiller: 6,  Sweeney: 7,  Undecided: 12 },
    { period: 'May 11–13, 2025', Baraka: 11, Fulop: 11, Gottheimer: 11, Sherrill: 28, Spiller: 10, Sweeney: 5,  Undecided: 24 },
    { period: 'Primary Results', Baraka: 20.67, Fulop: 15.99, Gottheimer: 11.57, Sherrill: 34.02, Spiller: 10.63, Sweeney: 7.11, Undecided: 0 }
  ];

  const demPolling = demRaw.map(d => {
    const names = ['Baraka','Fulop','Gottheimer','Sherrill','Spiller','Sweeney'];
    const total = names.reduce((sum, k) => sum + d[k], 0);
    const adj = {};
    names.forEach(k => {
      const share = d[k] + (d.Undecided * (d[k] / total));
      adj[k] = parseFloat(share.toFixed(1));
    });
    return { period: d.period, ...adj };
  });

  const repRaw = [
    { period: 'Jun 12–14, 2024', Bramnick: 3,  Ciattarelli: 44, Kranjac: 0,  Spadea: 11, Barbera: 0, Undecided: 38 },
    { period: 'Jan 18–21, 2025', Bramnick: 4,  Ciattarelli: 26, Kranjac: 0,  Spadea: 13, Barbera: 0, Undecided: 47 },
    { period: 'Feb 5–7, 2025',   Bramnick: 4,  Ciattarelli: 42, Kranjac: 2,  Spadea: 13, Barbera: 0, Undecided: 35 },
    { period: 'Apr 1–10, 2025',  Bramnick: 4,  Ciattarelli: 42, Kranjac: 0,  Spadea: 12, Barbera: 7, Undecided: 34 },
    { period: 'Apr 8–10, 2025',  Bramnick: 9,  Ciattarelli: 50, Kranjac: 3,  Spadea: 22, Barbera: 0, Undecided: 14 },
    { period: 'May 6–8, 2025',   Bramnick: 10, Ciattarelli: 54, Kranjac: 2,  Spadea: 23, Barbera: 0, Undecided: 11 },
    { period: 'May 11–13, 2025', Bramnick: 8,  Ciattarelli: 44, Kranjac: 2,  Spadea: 18, Barbera: 4, Undecided: 23 },
    { period: 'Primary Results', Bramnick: 6.25, Ciattarelli: 67.82, Kranjac: 2.74, Spadea: 21.75, Barbera: 1.45, Undecided: 0 }
  ];

  const repPolling = repRaw.map(d => {
    const names = ['Bramnick','Ciattarelli','Kranjac','Spadea','Barbera'];
    const total = names.reduce((sum, k) => sum + d[k], 0);
    const adj = {};
    names.forEach(k => {
      const share = d[k] + (d.Undecided * (d[k] / total));
      adj[k] = parseFloat(share.toFixed(1));
    });
    return { period: d.period, ...adj };
  });


    return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          New Jersey Governor Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared candidates, ideological placements, and polling trends for New Jersey’s gubernatorial primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * New Jersey uses a closed primary system. Voters must be registered party members to participate in their party's primary.
        </p>
      </div>

      {/* Democratic Polling */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Democratic Primary Polling Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={demPolling} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid stroke="#444" />
            <XAxis dataKey="period" stroke="#ccc" />
            <YAxis domain={[0, 40]} stroke="#ccc" />
            <Tooltip contentStyle={{ backgroundColor: "#222", border: "1px solid #444", color: "#fff" }} labelStyle={{ color: "#fff" }} />
            <Legend wrapperStyle={{ color: "#fff" }} />
            {['Baraka','Fulop','Gottheimer','Sherrill','Spiller','Sweeney'].map((key, idx) => (
              <Line key={key} type="monotone" dataKey={key} name={key} stroke={
                ['#8AAFFF','#10b981','#f59e0b','#3b82f6','#f43f5e','#6366f1'][idx]
              } dot={{ r: 3 }} />
            ))}
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-300 italic mt-2 text-center">* Final point represents official primary results</p>
      </div>

{/* Democratic County-Level Map */}
<div className="bg-gray-800 p-8 rounded-lg shadow max-w-7xl mx-auto my-16 flex flex-col items-center">
  <h2 className="text-xl font-semibold mb-6 text-center w-full">County Forecast</h2>
  <div className="w-full flex justify-center min-w-[800px]">
    <DemCountyMapNJ />
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
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={repPolling} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid stroke="#444" />
            <XAxis dataKey="period" stroke="#ccc" />
            <YAxis domain={[0, 70]} stroke="#ccc" />
            <Tooltip contentStyle={{ backgroundColor: "#222", border: "1px solid #444", color: "#fff" }} labelStyle={{ color: "#fff" }} />
            <Legend wrapperStyle={{ color: "#fff" }} />
            {['Ciattarelli','Spadea','Bramnick','Kranjac','Barbera'].map((key, idx) => (
              <Line key={key} type="monotone" dataKey={key} name={key} stroke={
                ['#ef4444','#f97316','#eab308','#a21caf','#facc15'][idx]
              } dot={{ r: 3 }} />
            ))}
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-300 italic mt-2 text-center">* Final point represents official primary results</p>
      </div>

{/* Republican County-Level Map */}
<div className="bg-gray-800 p-8 rounded-lg shadow max-w-7xl mx-auto my-16 flex flex-col items-center">
  <h2 className="text-xl font-semibold mb-6 text-center w-full">Republican County Forecast</h2>
  <div className="w-full flex justify-center min-w-[800px]">
    <RepCountyMapNJ />
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

      <Footer />
    </div>
  );
}

function CandidateCard({ candidate }) {
  const slidersConfig = [
    ["Conservative","Progressive"],
    ["Pro‑Industry","Pro‑Environment"],
    ["Establishment","Populist"],
    ["Hawkish","Dovish"]
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
          {slidersConfig.map(([left,right], idx) => (
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
            {candidate.endorsements.map((e,i) => (<li key={i}>{e}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
}