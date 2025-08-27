import Header from "../../components/header";

export default function TexasPage() {
  const electionImages = [
    { year: "2008", image: "/texasLikelyR.png", margin: "R +11.8%" },
    { year: "2012", image: "/texasR.png", margin: "R +15.8%" },
    { year: "2016", image: "/texasLikelyR.png", margin: "R +9.0%" },
    { year: "2020", image: "/texasLikelyR.png", margin: "R +5.6%" },
    { year: "2024", image: "/texasLikelyR.png", margin: "R +13.68%" },
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
          <h1 className="text-2xl font-bold mb-4">Texas:</h1>
          <p className="mb-8">
            The Lone Star State, admitted in 1845, is known for its independent spirit, rapid growth, and strong conservative tradition. While Texas has been a Republican stronghold for decades, recent elections have shown a more competitive trend, reflecting demographic shifts and urban growth. The state economy is powered by energy, technology, and agriculture. Its current statewide leaders include:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/abbott" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/abbott.jpg"
                  alt="Greg Abbott"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Greg Abbott (R)</p>
            </a>

            <a href="/leader/cornyn" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/cornyn.jpg"
                  alt="John Cornyn"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator John Cornyn (R)</p>
            </a>

            <a href="/leader/cruz" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/cruz.jpg"
                  alt="Ted Cruz"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Ted Cruz (R)</p>
            </a>
          </div>

          {/* State ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "80%"],
              ["Pro‑Environment", "Pro‑Industry", "85%"],
              ["Immigration‑Friendly", "Restrictive", "75%"],
              ["Social Libertarian", "Social Traditionalist", "80%"],
            ].map(([left, right, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{left}</span><span>{right}</span>
                </div>
                <div
                  className="relative h-4 rounded-full"
                  style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}
                >
                  <div
                    className="absolute top-[-10px]"
                    style={{ left: pos, transform: "translateX(-50%)" }}
                  >
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
                    alt={`Texas ${year} margin`}
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
