import Header from "../../components/header";
import Footer from "../../components/footer";

export default function LittlePage() {
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
            src="/little.jpg"
            alt="Brad Little"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Brad Little</h1>
          <p className="italic mb-4">
            "Businesses should be left to make decisions about the management of their operations and employees with limited interference from government."
          </p>

          <p className="mb-4">
            Governor Brad Little has served as Idaho’s governor since 2019, emphasizing strong fiscal conservatism, business-friendly policies, and individual liberties. His leadership has focused on keeping taxes low, supporting the agricultural sector, and maintaining Idaho’s status as one of the fastest-growing states.
          </p>
          <p className="mb-4">
            Little has expanded infrastructure projects, promoted workforce development, and prioritized rural healthcare improvements. He has also been an advocate for conservative approaches to land and water use.
          </p>
          <p className="mb-4">
            While popular in Idaho, Little has faced criticism from more hardline conservatives for not taking even stricter stances on certain social issues and pandemic management.
          </p>

          {/* Ideology rating header */}
          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Republican</h2>
          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "90%"],
              ["Pro‑Environment", "Pro‑Industry", "85%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "65%"],
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
                <li>Kept Idaho’s taxes among the lowest in the nation</li>
                <li>Expanded rural healthcare access and infrastructure</li>
                <li>Strengthened workforce and vocational training programs</li>
                <li>Promoted agricultural sector growth and trade</li>
                <li>Invested in statewide broadband expansion</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for moderate handling of pandemic restrictions</li>
                <li>Faced pushback on certain environmental policies</li>
                <li>Accused of not being conservative enough by far-right challengers</li>
                <li>Debates over land and water resource management priorities</li>
                <li>Scrutiny over business subsidies and tax incentives</li>
              </ul>
            </div>
          </div>
          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/bennett.png" alt="Bennett Lumber logo" className="w-6 h-6 mr-2" />
                <strong>Bennett Lumber Products</strong> (Lumber and forestry products) — $10,000
              </li>
              <li className="flex items-center">
                <img src="/cambia.png" alt="Cambia Health logo" className="w-6 h-6 mr-2" />
                <strong>Cambia Health Solutions</strong> (Health insurance and services) — $12,000
              </li>
              <li className="flex items-center">
                <img src="/bish.png" alt="Bish's RV logo" className="w-6 h-6 mr-2" />
                <strong>Bish's RV Inc</strong> (Recreational vehicle dealership) — $10,000
              </li>
              <li className="flex items-center">
                <img src="/burrell.webp" alt="Burrell logo" className="w-6 h-6 mr-2" />
                <strong>Burrell Diversified Investments LLC</strong> (Private investments and finance) — $10,000
              </li>
              <li className="flex items-center">
                <img src="/otter.jpeg" alt="Otter Campaign logo" className="w-6 h-6 mr-2" />
                <strong>C.L. (Butch) Otter Campaign Committee</strong> (Political campaign committee) — $10,000
              </li>
            </ul>
          </div>
          {/* Election images */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/idaho.png", margin: "R +22%" },
              { year: "2022", image: "/idaho.png", margin: "R +27%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Little ${elect.year}`}
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
