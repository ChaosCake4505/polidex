import Header from "../../components/header";

export default function SouthCarolinaPage() {
  const electionImages = [
    { year: "2008", image: "/southcarolina.png", margin: "R +16.4%" },
    { year: "2012", image: "/southcarolinaLikely.png", margin: "R +14.5%" },
    { year: "2016", image: "/southcarolinaLikely.png", margin: "R +14.3%" },
    { year: "2020", image: "/southcarolinaLikely.png", margin: "R +11.7%" },
    { year: "2024", image: "/southcarolina.png", margin: "R +17.9%" },
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
          <h1 className="text-2xl font-bold mb-4">South Carolina:</h1>
          <p className="mb-8">
            The Palmetto State, admitted in 1788, is a solid Republican stronghold with a powerful conservative bent. South Carolina has voted Republican in every presidential election since 1980, most recently by a 17.9-point margin in 2024. Its current statewide leaders are:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/mcmaster" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/mcmaster.jpg"
                  alt="Henry McMaster"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Henry McMaster (R)</p>
            </a>

            <a href="/leader/tscott" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/tscott.webp"
                  alt="Tim Scott"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Tim Scott (R)</p>
            </a>

            <a href="/leader/graham" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/graham.avif"
                  alt="Lindsey Graham"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Lindsey Graham (R)</p>
            </a>
          </div>

          {/* State ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "85%"],
              ["Pro‑Environment", "Pro‑Industry", "80%"],
              ["Immigration‑Friendly", "Restrictive", "75%"],
              ["Social Libertarian", "Social Traditionalist", "90%"],
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
                    alt={`South Carolina ${year} margin`}
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
