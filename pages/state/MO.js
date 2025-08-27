import Header from "../../components/header";

export default function MissouriPage() {
  const electionImages = [
    { year: "2008", image: "/missouriLeanR.png", margin: "R +0.1%" },
    { year: "2012", image: "/missouriLikelyR.png", margin: "R +9.4%" },
    { year: "2016", image: "/missouriR.png", margin: "R +18.5%" },
    { year: "2020", image: "/missouriR.png", margin: "R +15.4%" },
    { year: "2024", image: "/missouriR.png", margin: "R +18.7%" },
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
          <h1 className="text-2xl font-bold mb-4">Missouri:</h1>
          <p className="mb-8">
            The Show-Me State, admitted in 1821, is a cultural crossroads between the Midwest and the South. Missouri has shifted from a bellwether swing state to a solid Republican stronghold in recent decades, reflecting its increasingly conservative electorate. Its current statewide leaders are:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/parson" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/parson.jpg"
                  alt="Mike Parson"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Mike Parson (R)</p>
            </a>

            <a href="/leader/hawley" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/hawley.jpg"
                  alt="Josh Hawley"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Josh Hawley (R)</p>
            </a>

            <a href="/leader/schmitt" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/schmitt.jpg"
                  alt="Eric Schmitt"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Eric Schmitt (R)</p>
            </a>
          </div>

          {/* State ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "80%"],
              ["Pro‑Environment", "Pro‑Industry", "75%"],
              ["Immigration‑Friendly", "Restrictive", "70%"],
              ["Social Libertarian", "Social Traditionalist", "85%"],
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
                  <img
                    src={image}
                    alt={`Missouri ${year} margin`}
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
