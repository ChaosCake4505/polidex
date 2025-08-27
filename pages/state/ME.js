import Header from "../../components/header";

export default function MainePage() {
  const electionImages = [
    { year: "2008", image: "/maine08.png", margin: "D +17%" },
    { year: "2012", image: "/maine08.png", margin: "D +15%" },
    { year: "2016", image: "/maine16.png", margin: "D +3%" },
    { year: "2020", image: "/maine16.png", margin: "D +9%" },
    { year: "2024", image: "/maine16.png", margin: "D +5%" },
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
          <h1 className="text-2xl font-bold mb-4">Maine:</h1>
          <p className="mb-8">
            Known for its independent streak and tradition of split-ticket voting, Maine is a unique political battleground in New England. While it often leans Democratic in presidential elections, it regularly elects moderates and independents to statewide office. In 2024, Maine voted Democratic by about 5%, continuing its trend of close, competitive outcomes. The state values localism, environmental stewardship, and pragmatic leadership.
          </p>

          {/* Leader section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/mills" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/mills.jpg" alt="Janet Mills" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Governor Janet Mills (D)</p>
            </a>

            <a href="/leader/collins" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/collins.webp" alt="Susan Collins" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Susan Collins (R)</p>
            </a>

            <a href="/leader/king" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/king.jpg" alt="Angus King" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Angus King (I)</p>
            </a>
          </div>

          {/* Ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "38%"],
              ["Pro‑Environment", "Pro‑Industry", "35%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "45%"],
              ["Populist", "Establishment", "52%"],
              ["Dovish", "Hawkish", "48%"],
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
            {electionImages.map(({ year, image, margin }, id) => (
              <div key={id} className="text-center">
                <div className="w-[200px] h-[200px] rounded-lg mx-auto" style={{ backgroundColor: "white" }}>
                  <img src={image} alt={`Maine ${year} margin`} className="w-full h-full object-contain rounded-lg opacity-80" />
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
