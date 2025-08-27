import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ReevesPage() {
  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8 text-black font-serif"
        style={{
          backgroundImage: "url('/wash.webp')",
        }}
      >
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/reeves.jpg"
              alt="Tate Reeves"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Tate Reeves</h1>
          <p className="italic mb-4">
            "I fully support everyone's individual right to protest their government."
          </p>

          <p className="mb-4">
            Tate Reeves has served as Governor of Mississippi since 2020, after serving as Lieutenant Governor and State Treasurer. He is a staunch conservative focusing on economic growth, education reform, and resisting federal mandates.
          </p>
          <p className="mb-4">
            Reeves has pushed for tax cuts, school choice expansion, and pro-business policies. He is known for strong opposition to federal COVID-19 restrictions and has prioritized Mississippi's conservative cultural identity.
          </p>
          <p className="mb-4">
            His tenure has been marred by a major corruption controversy involving misuse of welfare funds, which drew national criticism and ongoing scrutiny of state-level oversight.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "96%"],
              ["Pro‑Environment", "Pro‑Industry", "90%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "97%"],
              ["Populist", "Establishment", "65%"],
              ["Dovish", "Hawkish", "80%"],
            ].map(([leftLabel, rightLabel, position], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{leftLabel}</span>
                  <span>{rightLabel}</span>
                </div>
                <div
                  className="relative h-4 rounded-full"
                  style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}
                >
                  <div
                    className="absolute top-[-10px]"
                    style={{ left: position, transform: "translateX(-50%)" }}
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
                <li>Enacted major state income tax cuts</li>
                <li>Expanded charter schools and school choice options</li>
                <li>Strengthened pro‑life and pro‑gun legislation</li>
                <li>Improved workforce training programs</li>
                <li>Led conservative COVID‑19 response efforts</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Major corruption controversy involving misuse of welfare funds</li>
                <li>Criticism over handling of pandemic funding transparency</li>
                <li>Accusations of underfunding public schools</li>
                <li>Disputes with local governments over health policies</li>
                <li>Opposed Medicaid expansion, sparking healthcare debates</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/centene.jpg" alt="Centene" className="w-6 h-6 mr-2" />
                <strong>Centene Management Company LLC</strong> (Managed care & health services) — $318,000
              </li>
              <li className="flex items-center">
                <img src="/davidson.jpg" alt="Marty Davidson" className="w-6 h-6 mr-2" />
                <strong>Marty Davidson</strong> (Retail & business) — $275,000
              </li>
              <li className="flex items-center">
                <img src="/wells.jpg" alt="Robert Wells" className="w-6 h-6 mr-2" />
                <strong>Robert Wells</strong> (Finance & real estate) — $167,500
              </li>
              <li className="flex items-center">
                <img src="/wanek.webp" alt="McCormick Drive LLC" className="w-6 h-6 mr-2" />
                <strong>McCormick Drive LLC (Ronald Wanek)</strong> (Furniture & property) — $100,000
              </li>
              <li className="flex items-center">
                <img src="/power.png" alt="Mississippi Power PAC" className="w-6 h-6 mr-2" />
                <strong>Mississippi Power Company State PAC</strong> (Energy & utilities) — $94,500
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2019", image: "/mississippiLikelyR.png", margin: "R +5.1%" },
              { year: "2023", image: "/mississippiLeanR.png", margin: "R +3.2%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Reeves ${e.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{e.year} Margin {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
