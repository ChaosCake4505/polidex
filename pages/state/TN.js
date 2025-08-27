import Header from "../../components/header";

export default function TennesseePage() {
  const electionImages = [
    { year: "2008", image: "/tennessee.png", margin: "R +15.6%" },
    { year: "2012", image: "/tennessee.png", margin: "R +20.5%" },
    { year: "2016", image: "/tennessee.png", margin: "R +26.2%" },
    { year: "2020", image: "/tennessee.png", margin: "R +23.2%" },
    { year: "2024", image: "/tennessee.png", margin: "R +29.7%" },
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
          <h1 className="text-2xl font-bold mb-4">Tennessee:</h1>
          <p className="mb-8">
            The Volunteer State, admitted in 1796, blends a rich mix of urban centers like Nashville and Memphis with rural and Appalachian regions. It's known for its strong cultural heritage and robust conservative leanings. Presidential elections have favored Republicans by increasing margins steadily, reaching nearly 30 points in 2024. Current statewide leaders include:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/blee" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/blee.jpg"
                  alt="Bill Lee"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Bill Lee (R)</p>
            </a>

            <a href="/leader/blackburn" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/blackburn.jpg"
                  alt="Marsha Blackburn"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Marsha Blackburn (R)</p>
            </a>

            <a href="/leader/hagerty" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/hagerty.jpg"
                  alt="Bill Hagerty"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Bill Hagerty (R)</p>
            </a>
          </div>

          {/* Ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "85%"],
              ["Pro‑Environment", "Pro‑Industry", "80%"],
              ["Immigration‑Friendly", "Restrictive", "75%"],
              ["Social Libertarian", "Social Traditionalist", "88%"],
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
                    alt={`Tennessee ${year} margin`}
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

