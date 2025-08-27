import Header from "../../components/header";
import Footer from "../../components/footer";

export default function GrishamPage() {
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
            src="/grisham.jpg"
            alt="Michelle Lujan Grisham"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Michelle Lujan Grisham</h1>
          <p className="italic mb-4">
            "The status quo will not stand, because we believe in a very different New Mexico. Together we will find the courage to create the promise of tomorrow for our children and their children."
          </p>

          <p className="mb-4">
            Michelle Lujan Grisham has served as the Governor of New Mexico since 2019, previously representing the state in the U.S. House. Known for her focus on healthcare, education, and equity, she has prioritized expanding access to services for all New Mexicans.
          </p>
          <p className="mb-4">
            As governor, she has led efforts to increase renewable energy investments, improve the state’s education system, and address economic disparities, particularly among indigenous and rural communities.
          </p>
          <p className="mb-4">
            Lujan Grisham's administration has also worked to modernize infrastructure and promote New Mexico as a leader in clean energy and technology.
          </p>

          {/* Ideology rating header */}
          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Liberal</h2>
          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "30%"],
              ["Pro‑Environment", "Pro‑Industry", "25%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "35%"],
              ["Populist", "Establishment", "45%"],
              ["Dovish", "Hawkish", "35%"],
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
                <li>Expanded Medicaid and improved healthcare access statewide</li>
                <li>Passed landmark clean energy legislation</li>
                <li>Increased teacher salaries and education funding</li>
                <li>Strengthened protections for indigenous communities</li>
                <li>Invested in infrastructure and broadband expansion</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced criticism over COVID-19 emergency orders and spending</li>
                <li>Debates around business closures during pandemic restrictions</li>
                <li>Pushback on certain tax increases to fund social programs</li>
                <li>Concerns over transparency in budget allocations</li>
                <li>Criticism from conservatives over gun control measures</li>
              </ul>
            </div>
          </div>
          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/pueblo.png" alt="Pueblo Tribes logo" className="w-6 h-6 mr-2" />
                <strong>Pueblo Tribes</strong> (Native American tribal groups) — $181,800
              </li>
              <li className="flex items-center">
                <img src="/purlife.png" alt="Purlife logo" className="w-6 h-6 mr-2" />
                <strong>Purlife</strong> (Cannabis dispensaries) — $50,400
              </li>
              <li className="flex items-center">
                <img src="/mta.jpg" alt="Meta logo" className="w-6 h-6 mr-2" />
                <strong>Meta (formerly Facebook)</strong> (Technology & social media) — $11,000
              </li>
              <li className="flex items-center">
                <img src="/invenergy.png" alt="Invenergy logo" className="w-6 h-6 mr-2" />
                <strong>Invenergy</strong> (Renewable energy development) — $11,000
              </li>
              <li className="flex items-center">
                <img src="/sunnova.jpg" alt="Sunnova logo" className="w-6 h-6 mr-2" />
                <strong>Sunnova Energy</strong> (Solar energy services) — $2,000
              </li>
            </ul>
          </div>
          {/* Election images */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/new mexicoLikelyD.png", margin: "D +14.5%" },
              { year: "2022", image: "/new mexicoLikelyD.png", margin: "D +6.4%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Grisham ${elect.year}`}
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
