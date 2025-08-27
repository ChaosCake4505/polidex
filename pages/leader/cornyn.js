import Header from "../../components/header";

export default function CornynPage() {
  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8"
        style={{
          backgroundImage: "url('/bg4.jpg')",
          color: "black",
          fontFamily: "Georgia, serif",
        }}
      >
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/cornyn.jpg"
              alt="John Cornyn"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator John Cornyn</h1>
          <p className="italic mb-4">
            "A strong Texas means strong national security and economic freedom for all."
          </p>

          <p className="mb-4">
            John Cornyn has served as a U.S. Senator from Texas since 2002. He previously held roles as Texas Attorney General and a justice on the Texas Supreme Court. Cornyn is known for his work on judicial appointments, border security, and tax policy.
          </p>
          <p className="mb-4">
            As a senior figure in the Senate, Cornyn has held leadership positions and often acts as a bridge between establishment Republicans and more conservative factions.
          </p>
          <p className="mb-4">
            He is widely respected within the GOP for his legal expertise and strategic influence on major legislation.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "90%"],
              ["Pro‑Environment", "Pro‑Industry", "88%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
              ["Populist", "Establishment", "80%"],
              ["Dovish", "Hawkish", "80%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span><span>{R}</span>
                </div>
                <div
                  className="relative h-4 rounded-full"
                  style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}
                >
                  <div
                    className="absolute top-[-10px]"
                    style={{ left: pos, transform: "translateX(-50%)" }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>⬆️</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Led bipartisan criminal justice reform efforts</li>
                <li>Helped advance major tax cut packages</li>
                <li>Supported strong border security measures</li>
                <li>Played key role in confirming federal judges</li>
                <li>Advocated for disaster aid and hurricane relief</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized by some conservatives for compromising on gun safety measures</li>
                <li>Faced opposition from far-right factions during leadership votes</li>
                <li>Viewed as too moderate on immigration by hardliners</li>
                <li>Mixed reception on support for certain spending bills</li>
                <li>Debates over loyalty to Trump-era priorities</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2002", image: "/texasLikelyR.png", margin: "R +12.5%" },
              { year: "2008", image: "/texasLikelyR.png", margin: "R +12.0%" },
              { year: "2014", image: "/texasR.png", margin: "R +27.2%" },
              { year: "2020", image: "/texasLikelyR.png", margin: "R +9.6%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Cornyn ${e.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
