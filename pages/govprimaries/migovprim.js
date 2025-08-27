import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dynamic from "next/dynamic";
//onst DemCountyMapMI = dynamic(() => import("../../components/migovprim/DemCountyMapMI"), { ssr: false });
//const RepCountyMapMI = dynamic(() => import("../../components/migovprim/RepCountyMapMI"), { ssr: false });

export default function MichiganGovPrimariesPage() {
  // POLLING DATA, proportional undecided redistribution
  const demRaw = [
    { period: 'Mar 13, 2025', Benson: 46, Gilchrist: 13, Swanson: 11, Undecided: 30 },
    { period: 'May 5–8, 2025', Benson: 59, Gilchrist: 7, Swanson: 8, Undecided: 26 },
    { period: 'Latest Average', Benson: 53, Gilchrist: 10, Swanson: 9, Undecided: 28 }
  ];
  const demPolling = demRaw.map(d => {
    const names = ['Benson', 'Gilchrist', 'Swanson'];
    const total = names.reduce((sum, k) => sum + d[k], 0);
    const adj = {};
    names.forEach(k => {
      const share = d[k] + (d.Undecided * (d[k] / total));
      adj[k] = parseFloat(share.toFixed(1));
    });
    return { period: d.period, ...adj };
  });

  const repRaw = [
  ];
  const repPolling = repRaw.map(d => {
    const names = ['Cox', 'Hudson', 'James', 'Leonard', 'Nesbitt', 'Null'];
    const total = names.reduce((sum, k) => sum + d[k], 0);
    const adj = {};
    names.forEach(k => {
      const share = d[k] + (d.Undecided * (d[k] / total));
      adj[k] = parseFloat(share.toFixed(1));
    });
    return { period: d.period, ...adj };
  });

  const democraticCandidates = [
    { name: "Jocelyn Benson (D)", image: "benson.jpg", bio: "Michigan Secretary of State with a strong record on voting rights.", ideology: "Progressive Democrat", endorsements: ["Emily’s List", "League of Women Voters"], sliders: ["75%", "80%", "60%", "50%"] },
    { name: "Garlin Gilchrist (D)", image: "gilchrist.jpg", bio: "Lieutenant Governor of Michigan focusing on tech equity and racial justice.", ideology: "Progressive", endorsements: ["Tech for Progress", "Detroit Rising PAC"], sliders: ["70%", "85%", "65%", "40%"] },
    { name: "Chris Swanson (D)", image: "swanson.png", bio: "County sheriff with a platform on reform-minded public safety.", ideology: "Moderate Democrat", endorsements: ["Law Enforcement Reform Council"], sliders: ["50%", "65%", "45%", "60%"] }
  ];

  const republicanCandidates = [
    { name: "Mike Cox (R)", image: "cox.jpeg", bio: "Former Michigan Attorney General emphasizing law and order.", ideology: "Conservative", endorsements: ["National Rifle Association"], sliders: ["85%", "40%", "70%", "80%"] },
    { name: "Anthony Hudson (R)", image: "hudson.png", bio: "Businessman and first-time candidate with a pro-growth agenda.", ideology: "Pro-Business Conservative", endorsements: ["Michigan Chamber of Commerce"], sliders: ["80%", "50%", "65%", "70%"] },
    { name: "John James (R)", image: "james.jpg", bio: "U.S. Representative and veteran, focused on opportunity and leadership.", ideology: "Center-Right", endorsements: ["Veterans for Leadership"], sliders: ["75%", "55%", "60%", "65%"] },
    { name: "Tom Leonard (R)", image: "leonard.jpeg", bio: "Former Speaker of the Michigan House, tough on crime and taxes.", ideology: "Traditional Republican", endorsements: ["Michigan GOP"], sliders: ["82%", "45%", "72%", "78%"] },
    { name: "Aric Nesbitt (R)", image: "nesbitt.jpg", bio: "State Senate leader advocating for deregulation and rural interests.", ideology: "Libertarian-Conservative", endorsements: ["Americans for Prosperity"], sliders: ["88%", "35%", "68%", "70%"] },
    { name: "William Null (R)", image: "null.jpg", bio: "Far-right activist with focus on state sovereignty and militias.", ideology: "Hardline Right", endorsements: ["Patriot Caucus"], sliders: ["95%", "20%", "90%", "90%"] }
  ];

  const independentCandidate = {
    name: "Mike Duggan (I)",
    image: "duggan.png",
    bio: "Mayor of Detroit with a pragmatic approach to urban policy and economic development.",
    ideology: "Independent Centrist",
    endorsements: ["Detroit Business Coalition"],
    sliders: ["50%", "65%", "55%", "45%"]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Header Section */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center shadow-inner">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Michigan Governor Primaries
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Explore declared, independent, and potential candidates, ideological placements, and polling trends for Michigan’s 2026 gubernatorial primaries.
        </p>
        <p className="text-sm italic text-gray-400">
          * Michigan uses an open primary system. Any registered voter may participate in any party's primary.
        </p>
      </div>

      {/* Democratic Polling */}
      <div className="w-full max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow my-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Democratic Primary Polling Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={demPolling} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid stroke="#444" />
            <XAxis dataKey="period" stroke="#ccc" />
            <YAxis domain={[0, 70]} stroke="#ccc" />
            <Tooltip contentStyle={{ backgroundColor: "#222", border: "1px solid #444", color: "#fff" }} labelStyle={{ color: "#fff" }} />
            <Legend wrapperStyle={{ color: "#fff" }} />
            {['Benson','Gilchrist','Swanson'].map((key, idx) => (
              <Line key={key} type="monotone" dataKey={key} name={key} stroke={
                ['#10b981','#3b82f6','#f59e0b'][idx]
              } dot={{ r: 3 }} />
            ))}
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-300 italic mt-2 text-center">* Undecided redistributed proportionally</p>
      </div>

      {/* Democratic County-Level Map */}
      <div className="bg-gray-800 p-8 rounded-lg shadow max-w-7xl mx-auto my-16 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-6 text-center w-full">County Forecast</h2>
        <div className="w-full flex justify-center min-w-[800px]">
          {/* Drop in <DemCountyMapMI /> when ready */}
          <span className="text-gray-400 text-lg">County-level map for the Democratic primary will be displayed here when available.</span>
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
            {['Cox','Hudson','James','Leonard','Nesbitt','Null'].map((key, idx) => (
              <Line key={key} type="monotone" dataKey={key} name={key} stroke={
                ['#ef4444','#f97316','#60a5fa','#a21caf','#facc15','#6366f1'][idx]
              } dot={{ r: 3 }} />
            ))}
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-300 italic mt-2 text-center">* Undecided redistributed proportionally</p>
      </div>

      {/* Republican County-Level Map */}
      <div className="bg-gray-800 p-8 rounded-lg shadow max-w-7xl mx-auto my-16 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-6 text-center w-full">Republican County Forecast</h2>
        <div className="w-full flex justify-center min-w-[800px]">
          {/* Drop in <RepCountyMapMI /> when ready */}
          <span className="text-gray-400 text-lg">County-level map for the Republican primary will be displayed here when available.</span>
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

      {/* Independent Candidate */}
      <div className="w-full max-w-4xl mx-auto bg-gray-800/90 rounded-lg p-8 shadow my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Independent Candidate</h2>
        <div className="flex justify-center">
          <CandidateCard candidate={independentCandidate} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Candidate card with circular photo
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
            {candidate.endorsements?.map((e,i) => (<li key={i}>{e}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
}
