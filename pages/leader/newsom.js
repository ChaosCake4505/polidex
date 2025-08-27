import Header from "../../components/header";
import Footer from "../../components/footer";

export default function NewsomPage() {
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
            src="/newsom.jpg"
            alt="Gavin Newsom"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Gavin Newsom</h1>
          <p className="italic mb-4">
            "As goes California, so goes the rest of the nation."
          </p>

          <p className="mb-4">
            Gavin Newsom, the 40th governor of California, is known for his progressive vision and bold policy initiatives. He has championed universal healthcare, environmental protections, and robust social safety nets throughout his political career.
          </p>
          <p className="mb-4">
            Raised in San Francisco, Newsom gained prominence as the city’s mayor, where he made national headlines by authorizing same-sex marriages in 2004. As governor, he has prioritized tackling homelessness, advancing climate policies, and expanding education and healthcare access statewide.
          </p>
          <p className="mb-4">
            Newsom’s leadership style emphasizes equity, social justice, and innovation, positioning California as a global model for progressive governance. While popular among progressives, he has faced criticism over crisis management and large-scale project delays.
          </p>

          {/* Ideology rating header */}
          <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>
          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Pro-Choice", "Pro-Life", "20%"],
              ["Socially Liberal", "Socially Conservative", "25%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "35%"],
              ["Populist", "Establishment", "70%"],
              ["Dovish", "Hawkish", "40%"],
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
                <li>Authorized same-sex marriages in San Francisco (2004)</li>
                <li>Led California’s aggressive climate change initiatives</li>
                <li>Expanded healthcare access and Medi-Cal coverage</li>
                <li>Strengthened gun safety legislation statewide</li>
                <li>Implemented robust COVID-19 early response measures</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>French Laundry dinner during COVID-19 lockdown</li>
                <li>Criticism over California’s homelessness crisis</li>
                <li>High-speed rail project delays and budget overruns</li>
                <li>Contentious business closure policies during pandemic</li>
                <li>Perceived handling of wildfires and utility failures</li>
              </ul>
            </div>
          </div>
          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/mission.png" alt="Mission Indians logo" className="w-6 h-6 mr-2" />
                <strong>Mission Indians</strong> (Tribal gaming & community development) — $162,000
              </li>
              <li className="flex items-center">
                <img src="/seiu.png" alt="SEIU logo" className="w-6 h-6 mr-2" />
                <strong>Service Employees International Union</strong> (Labor union) — $154,300
              </li>
              <li className="flex items-center">
                <img src="/liu.png" alt="Laborers Union logo" className="w-6 h-6 mr-2" />
                <strong>Laborers Union</strong> (Construction & labor union) — $129,900
              </li>
              <li className="flex items-center">
                <img src="/dreamworks.png" alt="DreamWorks logo" className="w-6 h-6 mr-2" />
                <strong>DreamWorks</strong> (Entertainment & media) — $97,200
              </li>
              <li className="flex items-center">
                <img src="/prospector.jpg" alt="Prospector LLC logo" className="w-6 h-6 mr-2" />
                <strong>Prospector LLC</strong> (Business & real estate investments) — $97,200
              </li>
            </ul>
          </div>
          {/* Election images */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/California.png", margin: "D +23.8%" },
              { year: "2021 Recall", image: "/California.png", margin: "D +24.0%" },
              { year: "2022", image: "/California.png", margin: "D +18.1%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Newsom ${elect.year}`}
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
