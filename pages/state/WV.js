export default function WestVirginiaPage() {
  const electionImages = [
    { year: "2008", image: "/WestVirginiaLikelyR.png", margin: "R +13.1%" },
    { year: "2012", image: "/WestVirginiaR.png", margin: "R +26.8%" },
    { year: "2016", image: "/WestVirginiaR.png", margin: "R +42.1%" },
    { year: "2020", image: "/WestVirginiaR.png", margin: "R +38.9%" },
    { year: "2024", image: "/WestVirginiaR.png", margin: "R +39.5%" },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: "url('/bg4.jpg')",
        color: "black",
        fontFamily: "Georgia, serif",
      }}
    >
      <div className="bg-white rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">West Virginia:</h1>
        <p className="mb-8">
          Known as the Mountain State, West Virginia has transitioned from a Democratic stronghold to one of the most reliably Republican states in the country. Its electorate strongly favors conservative social values and resource-driven industry policies. Key leaders in 2025 include:
        </p>

        {/* Leader images */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <a href="/leader/morrisey" className="text-center">
            <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
              <img
                src="/morrisey.jpg"
                alt="Patrick Morrisey"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <p className="mt-2 font-medium">Governor Patrick Morrisey (R)</p>
          </a>

          <a href="/leader/capito" className="text-center">
            <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
              <img
                src="/capito.jpg"
                alt="Shelley Moore Capito"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <p className="mt-2 font-medium">Senator Shelley Moore Capito (R)</p>
          </a>

          <a href="/leader/justice" className="text-center">
            <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
              <img
                src="/justice.jpg"
                alt="Jim Justice"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <p className="mt-2 font-medium">Senator Jim Justice (R)</p>
          </a>
        </div>

        {/* Ideology scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "95%"],
            ["Pro‑Environment", "Pro‑Industry", "90%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
            ["Populist", "Establishment", "65%"],
            ["Dovish", "Hawkish", "70%"],
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
                <img
                  src={image}
                  alt={`West Virginia ${year} margin`}
                  className="w-full h-full object-contain rounded-lg opacity-80"
                />
              </div>
              <p className="mt-2 font-medium">{year}: {margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
