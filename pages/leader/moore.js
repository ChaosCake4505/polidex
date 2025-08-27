import Header from "../../components/header";
import Footer from "../../components/footer";

export default function MoorePage() {
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
              src="/moore.jpg"
              alt="Wes Moore"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        {/* Content box */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Wes Moore</h1>
          <p className="italic mb-4">
            "The expectations that others place on us help us form our expectations of ourselves."
          </p>

          <p className="mb-4">
            Born October 15, 1978, in Takoma Park, Maryland, Moore is an Army veteran, author, and former nonprofit CEO. He earned his B.A. from Johns Hopkins University and was a Rhodes Scholar at Oxford. Before politics, he led the Robin Hood Foundation, a major anti-poverty nonprofit in New York.
          </p>
          <p className="mb-4">
            Moore was elected Maryland’s first Black governor in 2022 and quickly became a rising star in national Democratic politics. His leadership emphasizes economic equity, education, public safety reform, and environmental resilience.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>

          {/* Ideology bars */}
          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "20%"],
              ["Pro‑Environment", "Pro‑Industry", "25%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "30%"],
              ["Populist", "Establishment", "45%"],
              ["Dovish", "Hawkish", "40%"],
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
                <li>First Black governor of Maryland, elected by a historic margin</li>
                <li>Launched economic mobility programs for low-income families</li>
                <li>Expanded state investment in public education and green jobs</li>
                <li>Strengthened climate adaptation and clean energy initiatives</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for ambitious spending proposals by fiscal conservatives</li>
                <li>Faced pushback from police unions on public safety reforms</li>
                <li>Scrutinized over ties to national progressive donor networks</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <strong>HNTB Holdings</strong> (Engineering & infrastructure) — $6,000
              </li>
              <li className="flex items-center">
                <img src="/pediatrix.jpg" alt="Pediatrix logo" className="w-6 h-6 mr-2" />
                <strong>Pediatrix Medical Group</strong> (Pediatric healthcare services) — $6,000
              </li>
              <li className="flex items-center">
                <strong>HA Sustainable Infrastructure Capital</strong> (Green infrastructure) — $6,000
              </li>
              <li className="flex items-center">
                <strong>US Acute Care Solutions</strong> (Emergency medical care) — $6,000
              </li>
              <li className="flex items-center">
                <img src="/homedepot.png" alt="Home Depot" className="w-6 h-6 mr-2" />
                <strong>Home Depot</strong> (Home improvement retail) — $6,000
              </li>
            </ul>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2022", image: "/maryland.png", margin: "D +32%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Moore ${e.year}`}
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
