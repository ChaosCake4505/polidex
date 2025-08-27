import Header from "../../components/header";

export default function NewJerseyPage() {
  const electionImages = [
    { year: "2008", image: "/new jersey.png", margin: "D +15%" },
    { year: "2012", image: "/new jersey.png", margin: "D +17%" },
    { year: "2016", image: "/newjerseyLikelyD.png", margin: "D +13%" },
    { year: "2020", image: "/new jersey.png", margin: "D +15%" },
    { year: "2024", image: "/newjerseyLikelyD.png", margin: "D +5.9%" },
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
          <h1 className="text-2xl font-bold mb-4">New Jersey:</h1>
          <p className="mb-8">
            A reliably blue state in federal races, New Jersey saw a closer margin in 2024, voting Democratic by 5.9%. Longtime Senator Bob Menendez did not run for re-election and was succeeded by Andy Kim, who won by 9.6%, becoming a rising progressive voice. Key leaders as of 2025:
          </p>

          {/* Leader images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/murphy" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/murphy.jpg" alt="Phil Murphy" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Governor Phil Murphy (D)</p>
            </a>

            <a href="/leader/kim" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/kim.jpg" alt="Andy Kim" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Andy Kim (D)</p>
            </a>

            <a href="/leader/booker" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/booker.jpg" alt="Cory Booker" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Cory Booker (D)</p>
            </a>
          </div>

          {/* Ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "30%"],
              ["Pro‑Environment", "Pro‑Industry", "35%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "40%"],
              ["Populist", "Establishment", "55%"],
              ["Dovish", "Hawkish", "45%"],
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

          {/* Election margins */}
          <div className="mt-12 flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
            {electionImages.map(({ year, image, margin }, idx) => (
              <div key={idx} className="text-center">
                <div className="w-[200px] h-[200px] rounded-lg mx-auto" style={{ backgroundColor: "white" }}>
                  <img src={image} alt={`New Jersey ${year} margin`} className="w-full h-full object-contain rounded-lg opacity-80" />
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
