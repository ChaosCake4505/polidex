import Header from "../../components/header";
import Footer from "../../components/footer";

export default function MillsPage() {
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
              src="/mills.jpg"
              alt="Janet Mills"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Janet Mills</h1>
          <p className="italic mb-4">
            "You don't have to concern yourself with other people's points of view. Once you can see that nothing others say or do is about you, it doesn't matter."
          </p>

          <p className="mb-4">
            Born December 30, 1947, in Farmington, Maine, Mills earned her B.A. from the University of Massachusetts Boston and her J.D. from the University of Maine School of Law. She served as a district attorney and as Maine's first female Attorney General before being elected governor in 2018.
          </p>
          <p className="mb-4">
            As governor, Mills has focused on expanding healthcare access, investing in clean energy, and promoting workforce and education initiatives. She won re-election in 2022 with a double-digit margin, emphasizing bipartisanship and pragmatic problem-solving.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "38%"],
              ["Pro‑Environment", "Pro‑Industry", "32%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "42%"],
              ["Populist", "Establishment", "55%"],
              ["Dovish", "Hawkish", "48%"],
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
                <li>Expanded Medicaid, increasing healthcare coverage for tens of thousands of Mainers</li>
                <li>Advanced ambitious clean energy and climate goals, including offshore wind projects</li>
                <li>Increased public education funding and supported free community college programs</li>
                <li>Invested in rural broadband, workforce training, and small business support</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced criticism from conservatives for expanding state spending and social programs</li>
                <li>Debated over COVID-19 emergency powers and business restrictions during the pandemic</li>
                <li>Received pushback on certain environmental regulations seen as burdensome by some industries</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/umaine.png" alt="University of Maine" className="w-6 h-6 mr-2" />
                <strong>University of Maine</strong> (Public higher education & research) — $22,294
              </li>
              <li className="flex items-center">
                <strong>Drummond Woodsum</strong> (Legal services & public policy consulting) — $17,725
              </li>
              <li className="flex items-center">
                <img src="/mainehealth.webp" alt="MaineHealth" className="w-6 h-6 mr-2" />
                <strong>MaineHealth</strong> (Hospital & integrated healthcare system) — $13,362
              </li>
              <li className="flex items-center">
                <strong>Maine Medical Center</strong> (Regional medical & trauma center) — $9,800
              </li>
              <li className="flex items-center">
                <strong>Preti Flaherty</strong> (Law & government affairs) — $9,359
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/mainemills.png", margin: "D +7%" },
              { year: "2022", image: "/mainemills.png", margin: "D +13%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Mills ${e.year}`} className="max-w-[150px] object-contain" />
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
