import Header from "../../components/header";
import Footer from "../../components/footer";

export default function MurphyPage() {
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
              src="/murphy.jpg"
              alt="Phil Murphy"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        {/* Content box */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Phil Murphy</h1>
          <p className="italic mb-4">
            "We must build a stronger and fairer New Jersey that works for every family, not just the wealthy and well-connected."
          </p>

          <p className="mb-4">
            Phil Murphy has served as Governor of New Jersey since 2018. A former U.S. ambassador to Germany and Goldman Sachs executive, Murphy brought a global perspective and business experience to state leadership.
          </p>
          <p className="mb-4">
            As governor, he has focused on progressive economic policy, expanding healthcare access, strengthening public education, and leading on climate and environmental initiatives. Murphy has emphasized fairness and equity across his agenda.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>

          {/* Ideology bars */}
          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "25%"],
              ["Pro‑Environment", "Pro‑Industry", "30%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "35%"],
              ["Populist", "Establishment", "50%"],
              ["Dovish", "Hawkish", "40%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span>
                  <span>{R}</span>
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

          {/* Achievements & Controversies */}
          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Expanded paid family leave and increased minimum wage</li>
                <li>Implemented tuition-free community college program</li>
                <li>Advanced strong climate and offshore wind initiatives</li>
                <li>Strengthened gun safety laws and public health measures</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced criticism over high tax rates and business climate</li>
                <li>Pushback from conservatives on COVID‑19 restrictions</li>
                <li>Debated response to NJ Transit funding and reliability issues</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <strong>GP Management LLC</strong> (Real estate & private investments) — $49,000
              </li>
              <li className="flex items-center">
                <img src="/cwa.png" alt="CWA" className="w-6 h-6 mr-2" />
                <strong>Communications Workers of America</strong> (Labor union) — $38,800
              </li>
              <li className="flex items-center">
                <img src="/riverside.webp" alt="Riverside Medical" className="w-6 h-6 mr-2" />
                <strong>Riverside Medical Group</strong> (Healthcare & medical services) — $30,000
              </li>
              <li className="flex items-center">
                <img src="/ibew.jpg" alt="IBEW" className="w-6 h-6 mr-2" />
                <strong>International Brotherhood of Electrical Workers</strong> (Labor union) — $29,400
              </li>
              <li className="flex items-center">
                <strong>AJD Construction</strong> (Construction & development) — $19,600
              </li>
            </ul>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2017", image: "/newjerseylikelyD.png", margin: "D +13.3%" },
              { year: "2021", image: "/newjerseyLeanD.png", margin: "D +3.2%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Murphy ${e.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
