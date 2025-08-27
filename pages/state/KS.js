import Header from "../../components/header";

export default function KansasPage() {
  const electionImages = [
    { year: "2008", image: "/kansaslikelyR.png", margin: "R +14.9%" },
    { year: "2012", image: "/kansasR.png", margin: "R +21.7%" },
    { year: "2016", image: "/kansasR.png", margin: "R +20.4%" },
    { year: "2020", image: "/kansasLikelyR.png", margin: "R +14.6%" },
    { year: "2024", image: "/kansasR.png", margin: "R +16.1%" },
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
          <h1 className="text-2xl font-bold mb-4">Kansas:</h1>
          <p className="mb-8">
            The Sunflower State, admitted in 1861, is a traditionally Republican stronghold in presidential elections, having not backed a Democratic nominee since 1964. However, it has shown independent streaks at the state level, electing moderate Democrats to governorships. Kansas reflects a strong agricultural base, rural values, and a reputation for fiscal conservatism.
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/lkelly" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/lkelly.jpg"
                  alt="Laura Kelly"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Laura Kelly (D)</p>
            </a>

            <a href="/leader/moran" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/moran.jpg"
                  alt="Jerry Moran"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Jerry Moran (R)</p>
            </a>

            <a href="/leader/marshall" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/marshall.jpg"
                  alt="Roger Marshall"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Roger Marshall (R)</p>
            </a>
          </div>

          {/* State ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "75%"],
              ["Pro-Environment", "Pro-Industry", "70%"],
              ["Immigration-Friendly", "Restrictive", "65%"],
              ["Social Libertarian", "Social Traditionalist", "80%"],
            ].map(([left, right, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{left}</span>
                  <span>{right}</span>
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
            {electionImages.map(({ year, image, margin }, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-[200px] h-[200px] rounded-lg mx-auto"
                  style={{ backgroundColor: "white" }}
                >
                  <img
                    src={image}
                    alt={`Kansas ${year} margin`}
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
