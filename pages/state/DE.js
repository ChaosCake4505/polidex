import Header from "../../components/header";

export default function DelawarePage() {
  const electionImages = [
    { year: "2008", image: "/delaware.png", margin: "D +25%" },
    { year: "2012", image: "/delaware.png", margin: "D +19%" },
    { year: "2016", image: "/delaware.png", margin: "D +11%" },
    { year: "2020", image: "/delaware.png", margin: "D +19%" },
    { year: "2024", image: "/delawareLikely.png", margin: "D +14.7%" },
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
          <h1 className="text-2xl font-bold mb-4">Delaware:</h1>
          <p className="mb-8">
            The First State, Delaware is a solid Democratic stronghold with a strong history of moderate, business-friendly, and pragmatic politics. Leaders emphasize equity, coastal resilience, healthcare, and technology-driven economic growth. Key leaders as of 2025 include:
          </p>

          {/* Leader images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/meyer" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/meyer.jpg"
                  alt="Matt Meyer"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Matt Meyer (D)</p>
            </a>

            <a href="/leader/coons" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/coons.jpg"
                  alt="Chris Coons"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Chris Coons (D)</p>
            </a>

            <a href="/leader/rochester" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/rochester.jpg"
                  alt="Lisa Blunt Rochester"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Lisa Blunt Rochester (D)</p>
            </a>
          </div>

          {/* Ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "30%"],
              ["Pro‑Environment", "Pro‑Industry", "35%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "40%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "45%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span><span>{R}</span>
                </div>
                <div
                  className="relative h-4 rounded-full"
                  style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}
                >
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
                <div
                  className="w-[200px] h-[200px] rounded-lg mx-auto"
                  style={{ backgroundColor: "white" }}
                >
                  <img
                    src={image}
                    alt={`Delaware ${year} margin`}
                    className="w-full h-full object-contain rounded-lg opacity-80"
                  />
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
