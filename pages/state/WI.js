import Header from "../../components/header";

export default function WisconsinPage() {
  const electionImages = [
    { year: "2008", image: "/wisconsinLikelyD.png", margin: "D +13.9%" },
    { year: "2012", image: "/wisconsinLeanD.png", margin: "D +6.9%" },
    { year: "2016", image: "/wisconsinLeanR.png", margin: "R +0.7%" },
    { year: "2020", image: "/wisconsinLeanD.png", margin: "D +0.6%" },
    { year: "2024", image: "/wisconsinLeanR.png", margin: "R +1.5%" },
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
          <h1 className="text-2xl font-bold mb-4">Wisconsin:</h1>
          <p className="mb-8">
            The Badger State, admitted in 1848, is a quintessential battleground state with a deeply rooted tradition of progressive politics balanced by strong conservative regions. Known for its high levels of civic participation, Wisconsin has swung back and forth in recent presidential elections and remains a key Midwestern bellwether. Current statewide leaders include:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/evers" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/evers.jpg" alt="Tony Evers" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Governor Tony Evers (D)</p>
            </a>

            <a href="/leader/baldwin" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/baldwin.jpg" alt="Tammy Baldwin" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Tammy Baldwin (D)</p>
            </a>

            <a href="/leader/rjohnson" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/johnson.jpg" alt="Ron Johnson" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Ron Johnson (R)</p>
            </a>
          </div>

          {/* State ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "50%"],
              ["Pro‑Environment", "Pro‑Industry", "45%"],
              ["Immigration‑Friendly", "Restrictive", "55%"],
              ["Social Libertarian", "Social Traditionalist", "50%"],
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
                  <img src={image} alt={`Wisconsin ${year}`} className="w-full h-full object-contain rounded-lg opacity-80" />
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
