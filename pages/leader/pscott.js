import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ScottPage() {
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
              src="/pscott.jpg"
              alt="Phil Scott"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Phil Scott</h1>
          <p className="italic mb-4">
            "We must speak out against racism and fascism in any form, at any scale, any time they rear their ugly head."
          </p>

          <p className="mb-4">
            Born August 4, 1958, in Barre, Vermont, Scott graduated from the University of Vermont with a B.S. in community development. He began his career as a small-business owner and served in the state senate, then as lieutenant governor for six years before being elected governor in 2016.
          </p>
          <p className="mb-4">
            A moderate Republican, Scott has won five consecutive terms (2016–2024), each by increasingly large margins. In 2024, he secured his largest victory yet — 73.4% of the vote — marking one of the most decisive wins in Vermont's history.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Liberal Republican</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "45%"],
              ["Pro‑Environment", "Pro‑Industry", "40%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "48%"],
              ["Populist", "Establishment", "55%"],
              ["Dovish", "Hawkish", "50%"],
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

          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Won five straight terms, securing 73.4% in 2024 — a historic landslide victory</li>
                <li>Led bipartisan climate, infrastructure, and housing investments using federal recovery funds</li>
                <li>Maintained high approval ratings across party lines and among independents</li>
                <li>Advanced budgets focused on tax relief, clean water, education, and workforce development</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Vetoed a strong renewable energy mandate for 2035, prompting legislative overrides</li>
                <li>Overrode a broad data privacy bill citing business and compliance concerns</li>
                <li>Criticized for frequent veto use and resistance to higher-tax climate and housing measures</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/realtors.png" alt="National Association of Realtors" className="w-6 h-6 mr-2" />
                <strong>National Association of Realtors</strong> (Real estate advocacy & lobbying) — $4,480
              </li>
              <li className="flex items-center">
                <strong>Georgians First Leadership</strong> (Conservative leadership PAC) — $4,480
              </li>
              <li className="flex items-center">
                <strong>Stand For America</strong> (Conservative policy advocacy) — $4,480
              </li>
              <li className="flex items-center">
                <strong>Benoit Electric Inc</strong> (Electrical contracting & services) — $4,480
              </li>
              <li className="flex items-center">
                <img src="/busch.png" alt="Anheuser-Busch" className="w-6 h-6 mr-2" />
                <strong>Anheuser-Busch</strong> (Beverage & brewing industry) — $4,480
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2022", image: "/vermontR.png", margin: "R +47%" },
              { year: "2024", image: "/vermontR.png", margin: "R +52%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Scott ${e.year}`} className="max-w-[150px] object-contain" />
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
