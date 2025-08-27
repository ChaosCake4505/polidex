export default function OhioPage() {
  const electionImages = [
    { year: "2008", image: "/ohioLeanD.png", margin: "D +4.6%" },
    { year: "2012", image: "/ohioLeanD.png", margin: "D +3.0%" },
    { year: "2016", image: "/ohioLikelyR.png", margin: "R +8.1%" },
    { year: "2020", image: "/ohioLikelyR.png", margin: "R +8.0%" },
    { year: "2024", image: "/ohioLikelyR.png", margin: "R +11.2%" },
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
        <h1 className="text-2xl font-bold mb-4">Ohio:</h1>
        <p className="mb-8">
          Known as the Buckeye State, Ohio has long been a bellwether and political battleground. Once a reliable swing state, it’s shifted more Republican since 2016. Key leadership in 2025 includes:
        </p>

        {/* Leader images */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Governor Mike DeWine */}
          <a href="/leader/dewine" className="text-center">
            <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
              <img
                src="/dewine.jpg"
                alt="Mike DeWine"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <p className="mt-2 font-medium">Governor Mike DeWine (R)</p>
          </a>

          {/* Senator Bernie Moreno */}
          <a href="/leader/moreno" className="text-center">
            <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
              <img
                src="/moreno.jpg"
                alt="Bernie Moreno"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <p className="mt-2 font-medium">Senator Bernie Moreno (R)</p>
          </a>

          {/* Senator Jon Husted */}
          <a href="/leader/husted" className="text-center">
            <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
              <img
                src="/husted.jpg"
                alt="Jon Husted"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <p className="mt-2 font-medium">Senator Jon Husted (R)</p>
          </a>
        </div>

        {/* Ideology scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "55%"],
            ["Pro‑Environment", "Pro‑Industry", "60%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "65%"],
            ["Populist", "Establishment", "50%"],
            ["Dovish", "Hawkish", "65%"],
          ].map(([L, R, pos], i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span>{L}</span>
                <span>{R}</span>
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

        {/* Presidential margins */}
        <div className="mt-12 flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
          {electionImages.map(({ year, image, margin }, idx) => (
            <div key={idx} className="text-center">
              <div
                className="w-[200px] h-[200px] rounded-lg mx-auto"
                style={{ backgroundColor: "white" }}
              >
                <img
                  src={image}
                  alt={`Ohio ${year} margin`}
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
