import Header from "../../components/header";
import Footer from "../../components/footer";

export default function KellyPage() {
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
            src="/lkelly.jpg"
            alt="Laura Kelly"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Content box */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Laura Kelly</h1>
          <p className="italic mb-4">
            "I’m here to bring Kansans together to find common ground and create real solutions."
          </p>

          <p className="mb-4">
            Laura Kelly has served as the 48th Governor of Kansas since 2019, after years in the Kansas State Senate where she focused on education, healthcare, and bipartisan cooperation. As governor, she is known for her pragmatic approach, working across the aisle to achieve balanced budgets and invest in schools and rural communities.
          </p>
          <p className="mb-4">
            Kelly prioritized Medicaid expansion, public school funding, and rebuilding state infrastructure. She is viewed as a centrist Democrat who emphasizes moderation, fiscal responsibility, and a focus on practical outcomes.
          </p>
          <p className="mb-4">
            She successfully won reelection in 2022 despite Kansas's conservative lean, demonstrating her cross-party appeal and strong grassroots support.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Democrat</h2>

          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "40%"],
              ["Pro‑Environment", "Pro‑Industry", "45%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "55%"],
              ["Populist", "Establishment", "50%"],
              ["Dovish", "Hawkish", "35%"],
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
                <li>Fully funded Kansas public schools after years of budget cuts</li>
                <li>Secured bipartisan support for Medicaid expansion efforts</li>
                <li>Improved state credit ratings through balanced budgets</li>
                <li>Supported rural economic development and broadband access</li>
                <li>Expanded mental health resources statewide</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Clashes with GOP supermajority over vetoed tax cuts</li>
                <li>Criticism from progressives on pace of Medicaid expansion</li>
                <li>Debates over COVID-19 policy handling and restrictions</li>
                <li>Accusations of overuse of executive veto power</li>
                <li>Concerns about balancing rural vs urban funding priorities</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Top Donors</h2>
            <p className="font-medium">Funded by DNC</p>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/kansasLikelyD.png", margin: "D +5.1%" },
              { year: "2022", image: "/kansasLeanD.png", margin: "D +2.2%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Kelly ${elect.year}`}
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
