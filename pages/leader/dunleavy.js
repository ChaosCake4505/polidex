import Header from "../../components/header";
import Footer from "../../components/footer";

export default function DunleavyPage() {
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
          <img
            src="/dunleavy.jpg"
            alt="Mike Dunleavy"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Mike Dunleavy</h1>
          <p className="italic mb-4">
            "Public safety is the number one responsibility for any government."
          </p>

          <p className="mb-4">
            Governor Mike Dunleavy has led Alaska since 2018. A former state senator and educator, he has prioritized fiscal conservatism, strong Permanent Fund dividends, and resource development as core pillars of his administration.
          </p>
          <p className="mb-4">
            His first term saw significant budget cuts aimed at restoring full Permanent Fund dividend payments. Re-elected under Alaska’s new ranked-choice system, Dunleavy continues to focus on conservative economic policies, energy expansion, and cost-of-living relief.
          </p>
          <p className="mb-4">
            While praised for fiscal discipline and defending state independence, he has faced strong criticism for deep cuts to education, healthcare, and public services, making him a polarizing figure in Alaskan politics.
          </p>

          {/* Ideology rating header */}
          <h2 className="text-center font-bold text-lg mt-8 mb-4">Populist Right</h2>
          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "80%"],
              ["Pro‑Environment", "Pro‑Industry", "75%"],
              ["Immigration-Friendly", "Restrictive", "60%"],
              ["Social Libertarian", "Social Traditionalist", "55%"],
              ["Populist", "Establishment", "30%"],
            ].map(([leftLabel, rightLabel, position], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{leftLabel}</span>
                  <span>{rightLabel}</span>
                </div>
                <div className="relative h-4 rounded-full" style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}>
                  <div className="absolute top-[-10px]" style={{ left: position, transform: "translateX(-50%)" }}>
                    <span style={{ fontSize: "1.5rem" }}>⬆️</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements and Controversies */}
          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Restored full Permanent Fund dividend distributions</li>
                <li>Re-elected under Alaska’s ranked-choice voting system</li>
                <li>Appointed carbon-monetization commission</li>
                <li>Prioritized pro-family and pro-life legislative agenda</li>
                <li>Improved reading scores in K–12 education</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Deep budget cuts to healthcare and education</li>
                <li>Recall efforts over performance and spending cuts</li>
                <li>Allegations of misuse of state funds in campaign operations</li>
                <li>Criticized for ferry service cuts and rural funding reductions</li>
                <li>Debated for stance on pro-life policies and social services cuts</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <p className="text-center italic">Self-financed</p>
          </div>
          {/* Election images */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/AlaskaLean.png", margin: "R +2.16%" },
              { year: "2022", image: "/AlaskaLikely.png", margin: "R +12.7%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Dunleavy ${elect.year}`}
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
