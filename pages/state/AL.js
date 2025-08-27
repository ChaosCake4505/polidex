import Header from "../../components/header";

export default function AlabamaPage() {
  const electionImages = [
    { year: "2008", image: "/alabamaR.png", margin: "R +21.0%" },
    { year: "2012", image: "/alabamaR.png", margin: "R +21.9%" },
    { year: "2016", image: "/alabamaR.png", margin: "R +27.8%" },
    { year: "2020", image: "/alabamaR.png", margin: "R +25.4%" },
    { year: "2024", image: "/alabamaR.png", margin: "R +34.2%" },
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
          <h1 className="text-2xl font-bold mb-4">Alabama:</h1>
          <p className="mb-8">
            Known as the Cotton State, Alabama was admitted in 1819 and has a strong conservative tradition, especially in federal elections. The state's culture reflects its Southern roots and evangelical heritage. Key leaders are:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/ivey" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/ivey.jpg"
                  alt="Kay Ivey"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Kay Ivey (R)</p>
            </a>

            <a href="/leader/tuberville" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/tuberville.jpg"
                  alt="Tommy Tuberville"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Tommy Tuberville (R)</p>
            </a>

            <a href="/leader/britt" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/britt.jpg"
                  alt="Katie Britt"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Katie Britt (R)</p>
            </a>
          </div>

          {/* State ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "92%"],
              ["Pro-Environment", "Pro-Industry", "89%"],
              ["Immigration-Friendly", "Restrictive", "90%"],
              ["Social Libertarian", "Social Traditionalist", "93%"],
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
                    alt={`Alabama ${year} margin`}
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
