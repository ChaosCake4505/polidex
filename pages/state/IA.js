import Header from "../../components/header";

export default function IowaPage() {
  const electionImages = [
    { year: "2008", image: "/iowaLikelyD.png", margin: "D +9.5%" },
    { year: "2012", image: "/iowaLikelyD.png", margin: "D +5.0%" },
    { year: "2016", image: "/iowaLikelyR.png", margin: "R +9.5%" },
    { year: "2020", image: "/iowaLikelyR.png", margin: "R +8.2%" },
    { year: "2024", image: "/iowaLikelyR.png", margin: "R +10.3%" },
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
          <h1 className="text-2xl font-bold mb-4">Iowa:</h1>
          <p className="mb-8">
            The Hawkeye State, admitted in 1846, blends farm country with growing urban hubs like Des Moines and Iowa City. Historically a swing state, Iowa has leaned more Republican in recent years, while maintaining a strong rural and agricultural identity. Current statewide leaders are:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/reynolds" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/reynolds.jpg" alt="Kim Reynolds" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Governor Kim Reynolds (R)</p>
            </a>
            
            <a href="/leader/ernst" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/ernst.jpg" alt="Joni Ernst" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Joni Ernst (R)</p>
            </a>
            
            <a href="/leader/grassley" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/grassley.jpg" alt="Chuck Grassley" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Chuck Grassley (R)</p>
            </a>
          </div>

          {/* Ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "70%"],
              ["Pro‑Environment", "Pro‑Industry", "65%"],
              ["Immigration‑Friendly", "Restrictive", "60%"],
              ["Social Libertarian", "Social Traditionalist", "75%"],
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
                  <img src={image} alt={`Iowa ${year} margin`} className="w-full h-full object-contain rounded-lg opacity-80" />
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
