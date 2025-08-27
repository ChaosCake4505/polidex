import Header from "../../components/header";

export default function VermontPage() {
  const electionImages = [
    { year: "2008", image: "/vermont.png", margin: "D +37%" },
    { year: "2012", image: "/vermont.png", margin: "D +36%" },
    { year: "2016", image: "/vermont.png", margin: "D +26%" },
    { year: "2020", image: "/vermont.png", margin: "D +35%" },
    { year: "2024", image: "/vermont.png", margin: "D +32%" },
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
          <h1 className="text-2xl font-bold mb-4">Vermont:</h1>
          <p className="mb-8">
            Vermont is known for its strong progressive streak, independent-minded voters, and deep commitment to social and environmental issues. Once a traditionally Republican state in the mid-20th century, Vermont has become one of the most reliably Democratic states in presidential elections, voting Democratic by over 30 points in 2024. Its culture is defined by small-town civic life, environmental stewardship, and an active local democracy.
          </p>

          {/* Leader section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/pscott" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/pscott.jpg" alt="Phil Scott" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Governor Phil Scott (R)</p>
            </a>

            <a href="/leader/bsanders" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/bsanders.jpg" alt="Bernie Sanders" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Bernie Sanders (I)</p>
            </a>

            <a href="/leader/welch" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/welch.jpg" alt="Peter Welch" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Peter Welch (D)</p>
            </a>
          </div>

          {/* Ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "20%"],
              ["Pro‑Environment", "Pro‑Industry", "25%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "35%"],
              ["Populist", "Establishment", "50%"],
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
                  <img src={image} alt={`Vermont ${year} margin`} className="w-full h-full object-contain rounded-lg opacity-80" />
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
