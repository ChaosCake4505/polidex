import Header from "../../components/header";
import Footer from "../../components/footer";

export default function McKeePage() {
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
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/mckee.jpeg"
              alt="Dan McKee"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        {/* Content box */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Dan McKee</h1>
          <p className="italic mb-4">
            "Our mission is to make Rhode Island the best place to live, work, and raise a family — with opportunity for all."
          </p>

          <p className="mb-4">
            Born June 16, 1951, in Cumberland, Rhode Island, McKee graduated from Assumption College and earned an M.A. from Harvard Kennedy School. Before serving as governor, he was mayor of Cumberland and later lieutenant governor from 2015 to 2021.
          </p>
          <p className="mb-4">
            McKee assumed the governorship in 2021 after Gina Raimondo’s departure to the Biden administration, and he was elected to a full term in 2022. His tenure has focused on small business support, educational investments, and pandemic recovery efforts.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Liberal</h2>

          {/* Ideology bars */}
          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "45%"],
              ["Pro‑Environment", "Pro‑Industry", "50%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "50%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "50%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1"><span>{L}</span><span>{R}</span></div>
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
                <li>Expanded small business relief and economic recovery programs post-COVID</li>
                <li>Increased state investments in public education and early learning</li>
                <li>Improved infrastructure funding for roads, bridges, and public transit</li>
                <li>Advanced renewable energy initiatives and coastal resilience projects</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced scrutiny over vaccine rollout delays during early pandemic stages</li>
                <li>Criticized for handling of certain state contract awards</li>
                <li>Debates over balancing economic growth and environmental protections</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <strong>RI Medical Imaging</strong> (Healthcare & diagnostic services) — $13,400
              </li>
              <li className="flex items-center">
                <strong>Sheehan Adler Pollock</strong> (Law & lobbying firm) — $9,650
              </li>
              <li className="flex items-center">
                <strong>Rhode Island Medical Imaging</strong> (Healthcare & imaging services) — $6,200
              </li>
              <li className="flex items-center">
                <img src="/okonite.jpg" alt="Okonite" className="w-6 h-6 mr-2" />
                <strong>Okonite Company</strong> (Cable & electrical manufacturing) — $6,000
              </li>
              <li className="flex items-center">
                <strong>Motley Rice LLC</strong> (Law firm & litigation) — $6,000
              </li>
            </ul>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2022", image: "/rhodeislandLikely.png", margin: "D +18%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`McKee ${e.year}`} className="max-w-[150px] object-contain" />
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
