import Header from "../../components/header";

export default function MarylandPage() {
  const electionImages = [
    { year: "2008", image: "/maryland.png", margin: "D +25.4%" },
    { year: "2012", image: "/maryland.png", margin: "D +26.1%" },
    { year: "2016", image: "/maryland.png", margin: "D +26.4%" },
    { year: "2020", image: "/maryland.png", margin: "D +33.2%" },
    { year: "2024", image: "/maryland.png", margin: "D +29.5%" },
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
          <h1 className="text-2xl font-bold mb-4">Maryland:</h1>
          <p className="mb-8">
            Known as the Free State, Maryland is a solidly Democratic state with strong progressive and urban-suburban coalitions, particularly around the DC metro area. Its leadership emphasizes social equity, environmental protections, and economic modernization. Key leaders as of 2025 include:
          </p>

          {/* Leader images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/moore" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/moore.jpg"
                  alt="Wes Moore"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Wes Moore (D)</p>
            </a>

            <a href="/leader/alsobrooks" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/alsobrooks.jpg"
                  alt="Angela Alsobrooks"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Angela Alsobrooks (D)</p>
            </a>

            <a href="/leader/vanhollen" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/vanhollen.jpg"
                  alt="Chris Van Hollen"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Chris Van Hollen (D)</p>
            </a>
          </div>

          {/* Ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "25%"],
              ["Pro‑Environment", "Pro‑Industry", "30%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "35%"],
              ["Populist", "Establishment", "55%"],
              ["Dovish", "Hawkish", "45%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span><span>{R}</span>
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
            {electionImages.map(({ year, image, margin }, idx) => (
              <div key={idx} className="text-center">
                <div
                  className="w-[200px] h-[200px] rounded-lg mx-auto"
                  style={{ backgroundColor: "white" }}
                >
                  <img
                    src={image}
                    alt={`Maryland ${year} margin`}
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
