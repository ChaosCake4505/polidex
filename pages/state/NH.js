import Header from "../../components/header";

export default function NewHampshirePage() {
  const electionImages = [
    { year: "2008", image: "/newhampshireLikelyD.png", margin: "D +9.6%" },
    { year: "2012", image: "/newhampshireLikelyD.png", margin: "D +5.6%" },
    { year: "2016", image: "/newhampshireLeanD.png", margin: "D +0.4%" },
    { year: "2020", image: "/newhampshireLikelyD.png", margin: "D +7.4%" },
    { year: "2024", image: "/newhampshireLeanD.png", margin: "D +3.2%" },
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
          <h1 className="text-2xl font-bold mb-4">New Hampshire:</h1>
          <p className="mb-8">
            Known for its "Live Free or Die" spirit, New Hampshire is a fiercely independent swing state with a strong tradition of civic participation and retail politics. While it has leaned Democratic in recent presidential elections, the state often elects Republicans to state offices. In 2024, it voted Democratic by about 3%, continuing its pattern of close but blue-leaning outcomes in presidential contests.
          </p>

          {/* Leader section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/ayotte" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/ayotte.webp" alt="Kelly Ayotte" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Governor Kelly Ayotte (R)</p>
            </a>

            <a href="/leader/shaheen" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/shaheen.jpg" alt="Jeanne Shaheen" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Jeanne Shaheen (D)</p>
            </a>

            <a href="/leader/hassan" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/hassan.jpg" alt="Maggie Hassan" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Maggie Hassan (D)</p>
            </a>
          </div>

          {/* Ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "42%"],
              ["Pro‑Environment", "Pro‑Industry", "38%"],
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
                <div
                  className="w-[200px] h-[200px] rounded-lg mx-auto"
                  style={{ backgroundColor: "white" }}
                >
                  <img src={image} alt={`New Hampshire ${year} margin`} className="w-full h-full object-contain rounded-lg opacity-80" />
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
