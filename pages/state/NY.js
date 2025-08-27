import Header from "../../components/header";

export default function NewYorkPage() {
  const electionImages = [
    { year: "2008", image: "/newyork.png", margin: "D +26%" },
    { year: "2012", image: "/newyork.png", margin: "D +29%" },
    { year: "2016", image: "/newyork.png", margin: "D +21%" },
    { year: "2020", image: "/newyork.png", margin: "D +21.3%" },
    { year: "2024", image: "/newyorkLikelyD.png", margin: "D +12.6%" },
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
          <h1 className="text-2xl font-bold mb-4">New York:</h1>
          <p className="mb-8">
            The Empire State, admitted in 1788, is a Democratic stronghold characterized by its global city centers, diverse population, and progressive policy leadership. Known for its strong labor history, financial sector, and cultural influence, New York consistently votes blue in presidential elections. Its current statewide leaders include:
          </p>

          {/* Leader images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/hochul" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/hochul.jpg" alt="Kathy Hochul" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Governor Kathy Hochul (D)</p>
            </a>

            <a href="/leader/schumer" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/schumer.webp" alt="Chuck Schumer" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Chuck Schumer (D)</p>
            </a>

            <a href="/leader/gillibrand" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/gillibrand.jpg" alt="Kirsten Gillibrand" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Kirsten Gillibrand (D)</p>
            </a>
          </div>

          {/* Ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "35%"],
              ["Pro‑Environment", "Pro‑Industry", "40%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "45%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "50%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1"><span>{L}</span><span>{R}</span></div>
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
                  <img src={image} alt={`New York ${year} margin`} className="w-full h-full object-contain rounded-lg opacity-80" />
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
