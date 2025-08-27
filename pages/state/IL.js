import Header from "../../components/header";

export default function IllinoisPage() {
  const electionImages = [
    { year: "2008", image: "/illinois.png", margin: "D +25.1%" },
    { year: "2012", image: "/illinois.png", margin: "D +16.9%" },
    { year: "2016", image: "/illinois.png", margin: "D +17.0%" },
    { year: "2020", image: "/illinois.png", margin: "D +17.0%" },
    { year: "2024", image: "/illinoisLikely.png", margin: "D +10.9%" },
  ];

  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center p-8"
        style={{
          backgroundImage: "url('/bg4.jpg')",
          color: "black",
          fontFamily: "Georgia, serif",
        }}
      >
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-4">Illinois:</h1>
          <p className="mb-8">
            The Prairie State, admitted in 1818, is a Democratic stronghold anchored by Chicago’s deep blue electorate while maintaining more conservative rural and southern regions. Known for its strong labor history, diverse economy, and progressive social policies, Illinois remains a cornerstone of Democratic electoral strength in the Midwest. Current statewide leaders include:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/pritzker" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/pritzker.jpg" alt="J.B. Pritzker" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Governor J.B. Pritzker (D)</p>
            </a>

            <a href="/leader/durbin" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/durbin.jpeg" alt="Dick Durbin" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Dick Durbin (D)</p>
            </a>

            <a href="/leader/duckworth" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/duckworth.jpg" alt="Tammy Duckworth" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Tammy Duckworth (D)</p>
            </a>
          </div>

          {/* State ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "30%"],
              ["Pro‑Environment", "Pro‑Industry", "35%"],
              ["Immigration‑Friendly", "Restrictive", "30%"],
              ["Social Libertarian", "Social Traditionalist", "35%"],
            ].map(([left, right, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1"><span>{left}</span><span>{right}</span></div>
                <div className="relative h-4 rounded-full" style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}>
                  <div className="absolute top-[-10px]" style={{ left: pos, transform: "translateX(-50%)" }}>
                    <span style={{ fontSize: "1.5rem" }}>⬆️</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Presidential election margins */}
          <div className="mt-12 flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
            {electionImages.map(({ year, image, margin }, idx) => (
              <div key={idx} className="text-center">
                <div className="w-[200px] h-[200px] rounded-lg mx-auto" style={{ backgroundColor: "white" }}>
                  <img src={image} alt={`Illinois ${year}`} className="w-full h-full object-contain rounded-lg opacity-80" />
                </div>
                <p className="mt-2 font-medium">{year}: {margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
