import Header from "../../components/header";
import Footer from "../../components/footer";

export default function GianfortePage() {
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
            src="/gianforte.jpg"
            alt="Greg Gianforte"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Greg Gianforte</h1>
          <p className="italic mb-4">
            "Our Second Amendment rights are not up for negotiation."
          </p>

          <p className="mb-4">
            Greg Gianforte, elected governor in 2020 and re-elected in 2024, has focused on conservative fiscal policy, reducing regulations, and promoting Montana's resource industries. He previously served in Congress and is known for his strong support of small businesses and pro-growth economic strategies.
          </p>
          <p className="mb-4">
            As governor, Gianforte prioritized cutting taxes, expanding broadband access, and improving job training programs to boost Montana's workforce. He has consistently advocated for protecting gun rights and limiting federal influence in state affairs.
          </p>
          <p className="mb-4">
            While popular among conservatives, Gianforte has faced criticism for his environmental positions and stances on public health measures during the pandemic.
          </p>

          {/* Ideology rating header */}
          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Republican</h2>
          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "85%"],
              ["Pro‑Environment", "Pro‑Industry", "90%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
              ["Populist", "Establishment", "60%"],
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
                <li>Reduced state income tax and promoted tax reform</li>
                <li>Expanded broadband infrastructure across rural Montana</li>
                <li>Strengthened job training and workforce development programs</li>
                <li>Defended Second Amendment rights and state sovereignty</li>
                <li>Advanced pro-business regulatory reforms</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for environmental policy rollbacks</li>
                <li>Debates over public land management and conservation</li>
                <li>Pushback on pandemic health measure decisions</li>
                <li>Concerns over education funding priorities</li>
                <li>National controversy from 2017 altercation with a journalist (as Congressman)</li>
              </ul>
            </div>
          </div>
          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/audia.jpg" alt="Pfizer logo" className="w-6 h-6 mr-2" />
                <strong>Audia International Inc.</strong> (Plastics Producer) — $1000
              </li>
            </ul>
          </div>

          {/* Election images */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2020", image: "/montanaLikely.png", margin: "R +12%" },
              { year: "2024", image: "/montana.png", margin: "R +17%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Gianforte ${elect.year}`}
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
