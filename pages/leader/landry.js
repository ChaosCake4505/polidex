import Header from "../../components/header";
import Footer from "../../components/footer";

export default function LandryPage() {
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
              src="/landry.jpg"
              alt="Jeff Landry"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Jeff Landry</h1>
          <p className="italic mb-4">
            "I don't intend to spend my morning being lectured to by a president whose failed policies have put our children and grandchildren in a huge burden of debt."
          </p>

          <p className="mb-4">
            Jeff Landry has served as the Governor of Louisiana since 2024, following his tenure as Attorney General. Known for his strong conservative positions, Landry has prioritized law enforcement, economic growth, and resisting federal overreach.
          </p>
          <p className="mb-4">
            As governor, he has focused on tax reforms, boosting the energy sector, and supporting traditional social values. Landry is viewed as a staunch defender of conservative principles and a rising figure in Southern Republican politics.
          </p>
          <p className="mb-4">
            His leadership has strengthened his support among Louisiana's Republican base and business community.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "95%"],
              ["Pro‑Environment", "Pro‑Industry", "92%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "97%"],
              ["Populist", "Establishment", "70%"],
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
                <li>Strengthened state support for energy and oil industries</li>
                <li>Advanced tough-on-crime policies as governor and AG</li>
                <li>Promoted tax cuts for businesses and individuals</li>
                <li>Expanded rural infrastructure investments</li>
                <li>Resisted federal mandates on healthcare and environment</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticism over aggressive law enforcement policies</li>
                <li>Pushback from environmental groups over energy expansion</li>
                <li>Accused of prioritizing business over coastal protection</li>
                <li>Debates over Medicaid and healthcare funding reductions</li>
                <li>Clashes with local governments on COVID-19 restrictions</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/rv.png" alt="Great American RV" className="w-6 h-6 mr-2" />
                <strong>Great American RV</strong> (RV sales & service) — $30,000
              </li>
              <li className="flex items-center">
                <img src="/lasalle.jpg" alt="Lasalle Management" className="w-6 h-6 mr-2" />
                <strong>Lasalle Management</strong> (Correctional facility management) — $15,000
              </li>
              <li className="flex items-center">
                <img src="/nissan.png" alt="Ford of Slidell" className="w-6 h-6 mr-2" />
                <strong>Ford Lincoln-Mercury Nissan of Slidell</strong> (Automotive sales) — $10,000
              </li>
              <li className="flex items-center">
                <img src="/bw.jpg" alt="Blue Williams" className="w-6 h-6 mr-2" />
                <strong>Blue Williams LLC</strong> (Law firm) — $10,000
              </li>
              <li className="flex items-center">
                <img src="/southern.png" alt="Southern Wine" className="w-6 h-6 mr-2" />
                <strong>Southern Wine & Spirits</strong> (Alcohol distribution) — $10,000
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2023", image: "/louisianaLikelyR.png", margin: "R +12.0%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Landry ${elect.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{elect.year} Margin {elect.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
