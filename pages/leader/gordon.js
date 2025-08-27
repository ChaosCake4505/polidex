import Header from "../../components/header";
import Footer from "../../components/footer";

export default function GordonPage() {
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
            src="/gordon.jpg"
            alt="Mark Gordon"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Mark Gordon</h1>
          <p className="italic mb-4">
            "Even the best-designed reforms can stall out if they aren't grounded in the lived experience of educators, families and students."
          </p>

          <p className="mb-4">
            Governor Mark Gordon has led Wyoming since 2019, emphasizing fiscal responsibility, energy independence, and safeguarding Wyoming's agricultural and natural resource-based economy. He has focused on maintaining balanced budgets and keeping taxes low despite economic pressures.
          </p>
          <p className="mb-4">
            Gordon has defended Wyoming’s coal and oil industries while supporting diversification efforts in technology and tourism. He has also prioritized local control, opposing federal overreach into state policies.
          </p>
          <p className="mb-4">
            While widely popular among conservatives, Gordon has faced criticism from some on the right for occasional pragmatic stances on pandemic management and public land use.
          </p>

          {/* Ideology rating header */}
          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Republican</h2>
          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "95%"],
              ["Pro‑Environment", "Pro‑Industry", "90%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "98%"],
              ["Populist", "Establishment", "65%"],
              ["Dovish", "Hawkish", "70%"],
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
                <li>Maintained balanced budgets without raising taxes</li>
                <li>Defended Wyoming's coal and oil industries</li>
                <li>Expanded broadband and rural infrastructure</li>
                <li>Promoted economic diversification efforts</li>
                <li>Strengthened state sovereignty against federal mandates</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for moderate COVID-19 response measures</li>
                <li>Debates over public land and wildlife management policies</li>
                <li>Pushback on certain budget allocation priorities</li>
                <li>Concerns from far-right groups on federal funding acceptance</li>
                <li>Questions over support for renewable energy projects</li>
              </ul>
            </div>
          </div>
 {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/farmers.png" alt="Farmers logo" className="w-6 h-6 mr-2" />
                <strong>Farmers Insurance Agents & Employees of Wyoming</strong> (Insurance sector) — $12,149
              </li>
              <li className="flex items-center">
                <img src="/devon.webp" alt="Devon Energy logo" className="w-6 h-6 mr-2" />
                <strong>Devon Energy</strong> (Oil & natural gas) — $10,000
              </li>
              <li className="flex items-center">
                <img src="/bh.png" alt="Berkshire Hathaway logo" className="w-6 h-6 mr-2" />
                <strong>Berkshire Hathaway</strong> (Conglomerate investments) — $10,000
              </li>
              <li className="flex items-center">
                <img src="/cr.jpg" alt="Continental Resources logo" className="w-6 h-6 mr-2" />
                <strong>Continental Resources</strong> (Oil exploration & production) — $7,500
              </li>
              <li className="flex items-center">
                <img src="/realtors.png" alt="National Association of Realtors logo" className="w-6 h-6 mr-2" />
                <strong>National Assn of Realtors</strong> (Real estate trade group) — $7,500
              </li>
            </ul>
          </div>
          {/* Election images */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/wyoming.png", margin: "R +40%" },
              { year: "2022", image: "/wyoming.png", margin: "R +45%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Gordon ${elect.year}`}
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
