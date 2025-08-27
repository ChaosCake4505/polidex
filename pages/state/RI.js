import Header from "../../components/header";

export default function RhodeIslandPage() {
  const electionImages = [
    { year: "2008", image: "/rhode island.png", margin: "D +28%" },
    { year: "2012", image: "/rhode island.png", margin: "D +28%" },
    { year: "2016", image: "/rhode island.png", margin: "D +16%" },
    { year: "2020", image: "/rhode island.png", margin: "D +21%" },
    { year: "2024", image: "/rhodeislandLikelyD.png", margin: "D +13.8%" },
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
          <h1 className="text-2xl font-bold mb-4">Rhode Island:</h1>
          <p className="mb-8">
            Rhode Island remains one of the most reliably Democratic states in the country. In 2024, it voted Democratic by 13.8%, slightly lower than in 2020 but still firmly blue. Known for its strong union presence, coastal environmental policies, and liberal urban base centered in Providence, the state is led entirely by Democrats at the statewide level.
          </p>

          {/* Leader section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/mckee" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/mckee.jpeg" alt="Dan McKee" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Governor Dan McKee (D)</p>
            </a>

            <a href="/leader/whitehouse" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/whitehouse.jpg" alt="Sheldon Whitehouse" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Sheldon Whitehouse (D)</p>
            </a>

            <a href="/leader/reed" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/reed.jpg" alt="Jack Reed" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Jack Reed (D)</p>
            </a>
          </div>

          {/* Ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "33%"],
              ["Pro‑Environment", "Pro‑Industry", "35%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "42%"],
              ["Populist", "Establishment", "58%"],
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
                  <img src={image} alt={`Rhode Island ${year} margin`} className="w-full h-full object-contain rounded-lg opacity-80" />
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
