import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ArmstrongPage() {
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
            src="/armstrong.jpg"
            alt="Governor Kelly Armstrong"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Kelly Armstrong</h1>
          <p className="italic mb-4">
            "Everyone is the sum total of past experiences. A character doesn't just spring to life at age thirty."
          </p>

          <p className="mb-4">
            Kelly Armstrong was elected Governor in November 2024 after serving three terms as North Dakota's sole U.S. Representative. He focuses on economic development, energy independence, and improving quality of life for rural communities.
          </p>
          <p className="mb-4">
            Armstrong prioritizes infrastructure upgrades, property tax reform, and leveraging North Dakota's fossil fuel and agricultural strengths in the state's transition to clean energy.
          </p>
          <p className="mb-4">
            While widely supported statewide, he's faced some criticism over the push to eliminate property taxes and debates over balancing energy versus environmental protections.
          </p>

          {/* Ideology rating header */}
          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Republican</h2>
          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "85%"],
              ["Pro‑Environment", "Pro‑Industry", "80%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "90%"],
              ["Populist", "Establishment", "55%"],
              ["Dovish", "Hawkish", "60%"],
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
                <li>Led statewide infrastructure and broadband expansion</li>
                <li>Introduced plan to reduce or eliminate property taxes</li>
                <li>Advanced energy development policies</li>
                <li>Promoted rural community and education initiatives</li>
                <li>Focused on fiscal responsibility and balanced budgeting</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized by some for tax plan sustainability</li>
                <li>Debate over property tax impacts on urban vs rural areas</li>
                <li>Concerns about environmental trade-offs in energy policies</li>
                <li>Questions about offsetting revenue from tax reforms</li>
                <li>Pushback over potential regulation changes</li>
              </ul>
            </div>
          </div>
          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/armstrong.png" alt="Armstrong Corp logo" className="w-6 h-6 mr-2" />
                <strong>Armstrong Corp</strong> (Governor's campaign committee) — $10,000
              </li>
              <li className="flex items-center">
                <img src="/cnh.png" alt="Case New Holland logo" className="w-6 h-6 mr-2" />
                <strong>Case New Holland</strong> (Agricultural equipment manufacturer) — $10,000
              </li>
              <li className="flex items-center">
                <img src="/charter.png" alt="Charter Communications logo" className="w-6 h-6 mr-2" />
                <strong>Charter Communications</strong> (Telecommunications provider) — $10,000
              </li>
              <li className="flex items-center">
                <img src="/koch.jpg" alt="Koch Inc logo" className="w-6 h-6 mr-2" />
                <strong>Koch Inc</strong> (Conglomerate / energy & chemicals) — $10,000
              </li>
              <li className="flex items-center">
                <img src="/realtors.png" alt="National Association of Realtors logo" className="w-6 h-6 mr-2" />
                <strong>National Assn of Realtors</strong> (Real estate trade group) — $10,000
              </li>
            </ul>
          </div>
          {/* Election images */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2024", image: "/north dakota.png", margin: "R +36.45%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Armstrong ${elect.year}`}
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
