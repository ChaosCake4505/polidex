import Header from "../../components/header";

export default function MassachusettsPage() {
  const electionImages = [
    { year: "2008", image: "/massachusettsSolidD.png", margin: "D +26%" },
    { year: "2012", image: "/massachusettsSolidD.png", margin: "D +23%" },
    { year: "2016", image: "/massachusettsSolidD.png", margin: "D +27%" },
    { year: "2020", image: "/massachusettsSolidD.png", margin: "D +33%" },
    { year: "2024", image: "/massachusettsSolidD.png", margin: "D +29%" },
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
          <h1 className="text-2xl font-bold mb-4">Massachusetts:</h1>
          <p className="mb-8">
            Massachusetts is one of the most reliably Democratic states in the nation, known for its liberal base centered in Boston and progressive policy leadership in healthcare, climate action, and education. In 2024, the state voted Democratic by 29%, maintaining its deep blue status. It is home to a strong academic and tech-driven economy, robust union presence, and a history of championing social reform.
          </p>

          {/* Leader section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/healey" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/healey.jpg" alt="Maura Healey" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Governor Maura Healey (D)</p>
            </a>

            <a href="/leader/warren" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/warren.jpg" alt="Elizabeth Warren" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Elizabeth Warren (D)</p>
            </a>

            <a href="/leader/markey" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/markey.jpg" alt="Ed Markey" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Ed Markey (D)</p>
            </a>
          </div>

          {/* Ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "25%"],
              ["Pro‑Environment", "Pro‑Industry", "30%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "38%"],
              ["Populist", "Establishment", "52%"],
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

          {/* Presidential election margins */}
          <div className="mt-12 flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
            {electionImages.map(({ year, image, margin }, id) => (
              <div key={id} className="text-center">
                <div className="w-[200px] h-[200px] rounded-lg mx-auto" style={{ backgroundColor: "white" }}>
                  <img src={image} alt={`Massachusetts ${year} margin`} className="w-full h-full object-contain rounded-lg opacity-80" />
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
