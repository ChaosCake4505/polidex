import Header from "../../components/header";
import Footer from "../../components/footer";

export default function AbbottPage() {
  return (
    <>
      <Header />

      <div
        className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8 text-black font-serif"
        style={{
          backgroundImage: "url('/wash.webp')",
        }}
      >
        {/* Image section */}
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/abbott.jpg"
              alt="Greg Abbott"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        {/* Content box */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Greg Abbott</h1>
          <p className="italic mb-4">
            "America is ready for livable communities. America is ready for high-speed rail."
          </p>

          <p className="mb-4">
            Greg Abbott has served as the Governor of Texas since 2015, following his time as Attorney General and a Texas Supreme Court Justice. A staunch conservative, Abbott has emphasized border security, economic growth, and limited government throughout his career.
          </p>
          <p className="mb-4">
            As governor, Abbott has championed tax cuts, business-friendly policies, and strong stances on social issues, including abortion and gun rights. He has been a national figure in conservative politics and a vocal critic of federal overreach.
          </p>
          <p className="mb-4">
            Abbott remains popular among Texas Republicans and has easily won reelection campaigns.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          {/* Ideology bars */}
          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "95%"],
              ["Pro‑Environment", "Pro‑Industry", "92%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "98%"],
              ["Populist", "Establishment", "70%"],
              ["Dovish", "Hawkish", "85%"],
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

          {/* Achievements & Controversies */}
          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Strengthened Texas border security operations</li>
                <li>Expanded economic incentives and job growth programs</li>
                <li>Advocated for strong gun rights legislation</li>
                <li>Led response to natural disasters with rapid mobilization</li>
                <li>Advanced major tax cut initiatives</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for COVID-19 response and lifting restrictions early</li>
                <li>Controversial positions on abortion and social policy bills</li>
                <li>Backlash over handling of power grid failures during winter storm</li>
                <li>Disputes with local governments over mask and vaccine mandates</li>
                <li>Legal battles with the federal government over immigration policy</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/sig.jpg" alt="Susquehanna logo" className="w-6 h-6 mr-2" />
                <strong>Susquehanna International Group</strong> (Financial trading & investments) — $4,000,000
              </li>
              <li className="flex items-center">
                <img src="/midland.png" alt="Midland Energy logo" className="w-6 h-6 mr-2" />
                <strong>Midland Energy Inc</strong> (Oil & energy) — $1,597,900
              </li>
              <li className="flex items-center">
                <img src="/et.jpg" alt="Energy Transfer logo" className="w-6 h-6 mr-2" />
                <strong>Energy Transfer LP</strong> (Pipelines & energy infrastructure) — $700,000
              </li>
              <li className="flex items-center">
                <img src="/bcox.png" alt="Bobby Cox Companies logo" className="w-6 h-6 mr-2" />
                <strong>Bobby Cox Companies Inc</strong> (Restaurants & hospitality) — $527,200
              </li>
              <li className="flex items-center">
                <img src="/doggett.jpg" alt="Doggett Company logo" className="w-6 h-6 mr-2" />
                <strong>Doggett Company</strong> (Equipment & heavy machinery) — $520,416
              </li>
            </ul>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2014", image: "/texasR.png", margin: "R +20.4%" },
              { year: "2018", image: "/texasLikelyR.png", margin: "R +13.3%" },
              { year: "2022", image: "/texasLikelyR.png", margin: "R +11.1%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Abbott ${elect.year}`}
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
