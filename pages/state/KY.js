export default function KentuckyPage() {
  const electionImages = [
    { year: "2008", image: "/kentuckyR.png", margin: "R +16.2%" },
    { year: "2012", image: "/kentuckyR.png", margin: "R +22.7%" },
    { year: "2016", image: "/kentuckyR.png", margin: "R +29.8%" },
    { year: "2020", image: "/kentuckyR.png", margin: "R +26.0%" },
    { year: "2024", image: "/kentuckyR.png", margin: "R +29.4%" },
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
        <h1 className="text-2xl font-bold mb-4">Kentucky:</h1>
        <p className="mb-8">
          Known as the Bluegrass State, Kentucky was admitted in 1792 and has a rich history of shifting political alliances. In recent decades, it has leaned strongly Republican in federal elections, reflecting its rural, socially conservative base. Key leaders include:
        </p>

        {/* Politician images */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Governor Andy Beshear */}
          <a href="/leader/beshear" className="text-center">
            <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
              <img
                src="/beshear.jpg"
                alt="Andy Beshear"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <p className="mt-2 font-medium">Governor Andy Beshear (D)</p>
          </a>

          {/* Senator Mitch McConnell */}
          <a href="/leader/mcconnell" className="text-center">
            <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
              <img
                src="/mcconnell.jpg"
                alt="Mitch McConnell"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <p className="mt-2 font-medium">Senator Mitch McConnell (R)</p>
          </a>

          {/* Senator Rand Paul */}
          <a href="/leader/paul" className="text-center">
            <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
              <img
                src="/paul.webp"
                alt="Rand Paul"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <p className="mt-2 font-medium">Senator Rand Paul (R)</p>
          </a>
        </div>

        {/* State ideology scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "88%"],
            ["Pro-Environment", "Pro-Industry", "85%"],
            ["Immigration-Friendly", "Restrictive", "87%"],
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
                <div className="absolute top-[-10px]" style={{ left: pos, transform: "translateX(-50%)" }}>
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
                  alt={`Kentucky ${year} margin`}
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
