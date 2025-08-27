import Header from "../../components/header";
import Footer from "../../components/footer";

export default function PillenPage() {
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
            src="/pillen.jpg"
            alt="Jim Pillen"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Jim Pillen</h1>
          <p className="italic mb-4">
            "True leadership is about strength, gratitude, and inspiration. You might have missed it in the mainstream media, but I was honored to express those sentiments..."
          </p>

          <p className="mb-4">
            Jim Pillen became the 41st Governor of Nebraska in January 2023, after a career as a veterinarian, livestock producer, and member of the University of Nebraska Board of Regents.
          </p>
          <p className="mb-4">
            His campaign centered on property‑tax reform, fiscal responsibility, and preserving conservative values. During the 2022 campaign, he pledged to modernize state government and support rural development.
          </p>
          <p className="mb-4">
            Pillen has continued to emphasize conservative policies, economic growth, and government transparency in office.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Conservative Republican</h2>

          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "90%"],
              ["Pro‑Environment", "Pro‑Industry", "80%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
              ["Populist", "Establishment", "70%"],
              ["Dovish", "Hawkish", "60%"],
            ].map(([left, right, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{left}</span>
                  <span>{right}</span>
                </div>
                <div className="relative h-4 rounded-full" style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}>
                  <div className="absolute top-[-10px]" style={{ left: pos, transform: "translateX(-50%)" }}>
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
                <li>Advocated for property‑tax relief and reform</li>
                <li>Expanded support for rural water and infrastructure</li>
                <li>Promoted agricultural and ethanol‑industry growth</li>
                <li>Appointed former governor Pete Ricketts to fill Senate seat</li>
                <li>Pushed for increased transparency in government hiring</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Critics say property‑tax reforms may shift burden to schools</li>
                <li>Raised concerns by bypassing public debate processes</li>
                <li>Faced scrutiny over governor's appointee selection transparency</li>
                <li>Accused of strong ties to GOP establishment</li>
                <li>Dissent over public record access delays</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/morrison.jpg" alt="Morrison Enterprises logo" className="w-6 h-6 mr-2" />
                <strong>Morrison Enterprises</strong> (Agribusiness & investments) — $250,000
              </li>
              <li className="flex items-center">
                <img src="/otb.jpg" alt="OTB Arizona LLC NE logo" className="w-6 h-6 mr-2" />
                <strong>OTB Arizona LLC NE</strong> (Agricultural operations) — $200,000
              </li>
              <li className="flex items-center">
                <img src="/ebm.png" alt="EBM Construction logo" className="w-6 h-6 mr-2" />
                <strong>EBM Construction</strong> (Construction & engineering) — $150,000
              </li>
              <li className="flex items-center">
                <img src="/csi.jpg" alt="Commodity Solutions logo" className="w-6 h-6 mr-2" />
                <strong>Commodity Solutions</strong> (Agricultural commodities) — $100,000
              </li>
              <li className="flex items-center">
                <img src="/jsmm.jpg" alt="JSMM Farms logo" className="w-6 h-6 mr-2" />
                <strong>JSMM Farms</strong> (Farming operations) — $100,000
              </li>
            </ul>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <img
                src="/nebraska.png"
                alt="Nebraska 2022"
                className="max-w-[150px] object-contain"
              />
              <p className="mt-2 text-sm">2022 Margin R +23.8%</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
