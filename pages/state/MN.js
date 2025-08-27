import Header from "../../components/header";

export default function MinnesotaPage() {
  const electionImages = [
    { year: "2008", image: "/minnesotaLikelyD.png", margin: "D +10.2%" },
    { year: "2012", image: "/minnesotaLikelyD.png", margin: "D +7.7%" },
    { year: "2016", image: "/minnesotaLeanD.png", margin: "D +1.5%" },
    { year: "2020", image: "/minnesotaLikelyD.png", margin: "D +7.1%" },
    { year: "2024", image: "/minnesotaLeanD.png", margin: "D +4.3%" },
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
          <h1 className="text-2xl font-bold mb-4">Minnesota:</h1>
          <p className="mb-8">
            The North Star State, admitted in 1858, is known for its progressive legacy, high civic engagement, and strong educational and healthcare systems. With a politically active population and a tradition of supporting Democratic-Farmer-Labor (DFL) candidates, Minnesota is often seen as a Democratic-leaning state, though rural areas continue to show strong Republican support. Current statewide leaders include:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/walz" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/walz.jpg" alt="Tim Walz" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Governor Tim Walz (D)</p>
            </a>

            <a href="/leader/klobuchar" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/klobuchar.jpg" alt="Amy Klobuchar" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Amy Klobuchar (D)</p>
            </a>

            <a href="/leader/tsmith" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/smith.jpg" alt="Tina Smith" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Tina Smith (D)</p>
            </a>
          </div>

          {/* State ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "35%"],
              ["Pro‑Environment", "Pro‑Industry", "30%"],
              ["Immigration‑Friendly", "Restrictive", "40%"],
              ["Social Libertarian", "Social Traditionalist", "35%"],
            ].map(([left, right, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1"><span>{left}</span><span>{right}</span></div>
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
            {electionImages.map(({ year, image, margin }, idx) => (
              <div key={idx} className="text-center">
                <div className="w-[200px] h-[200px] rounded-lg mx-auto" style={{ backgroundColor: "white" }}>
                  <img src={image} alt={`Minnesota ${year}`} className="w-full h-full object-contain rounded-lg opacity-80" />
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
