import Header from "../../components/header";
import Footer from "../../components/footer";

export default function LeePage() {
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
              src="/blee.jpg"
              alt="Bill Lee"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Bill Lee</h1>
          <p className="italic mb-4">
            "Elites don't always know best; everyday American people do."
          </p>

          <p className="mb-4">
            Bill Lee has served as the Governor of Tennessee since 2019. With roots in business and nonprofit leadership, he supports conservative fiscal policies, school choice programs, and criminal justice reform.
          </p>
          <p className="mb-4">
            Under his administration, Tennessee has enacted laws related to AI labeling, expanded education vouchers, and strengthened support for law enforcement and veterans.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "85%"],
              ["Pro‑Environment", "Pro‑Industry", "80%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "90%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "70%"],
            ].map(([leftLabel, rightLabel, position], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{leftLabel}</span><span>{rightLabel}</span>
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
                <li>Launched statewide school voucher and education choice programs</li>
                <li>Signed legislation on AI content labeling and lab-grown meat transparency</li>
                <li>Advanced criminal justice reforms and expanded law enforcement support</li>
                <li>Increased veteran services and rural economic development initiatives</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Critics argue voucher programs divert public school funding</li>
                <li>Environmental groups question oversight in business deregulation policies</li>
                <li>Opposition to expanded health care requirements sparked debate</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/gsmith.jpg" alt="Gresham Smith PAC" className="w-6 h-6 mr-2" />
                <strong>Gresham Smith PAC</strong> — $50,000
              </li>
              <li className="flex items-center">
                <img src="/hill.png" alt="H.G. Hill Realty PAC" className="w-6 h-6 mr-2" />
                <strong>H.G. Hill Realty PAC</strong> — $49,000
              </li>
              <li className="flex items-center">
                <img src="/chs.jpg" alt="CHS" className="w-6 h-6 mr-2" />
                <strong>Community Health Systems Inc.</strong> — $49,000
              </li>
              <li className="flex items-center">
                <img src="/volkert.jpg" alt="Volkert PAC" className="w-6 h-6 mr-2" />
                <strong>David Volkert & Assoc. Inc. Holding Co. PAC</strong> — $48,200
              </li>
              <li className="flex items-center">
                <img src="/pharma.png" alt="PhRMA PAC" className="w-6 h-6 mr-2" />
                <strong>PhRMA Tennessee PAC</strong> — $47,600
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/tennesseeLean.png", margin: "R +4.5%" },
              { year: "2022", image: "/tennessee.png", margin: "R +17.5%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Lee ${e.year}`}
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
