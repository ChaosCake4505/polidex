import Header from "../../components/header";
import Footer from "../../components/footer";

export default function MorriseyPage() {
  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8 text-black font-serif"
        style={{
          backgroundImage: "url('/wash.webp')",
        }}
      >
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/morrisey.jpg"
              alt="Patrick Morrisey"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Patrick Morrisey</h1>
          <p className="italic mb-4">
            "We can start to clean up these terribly burdensome regulations."
          </p>

          <p className="mb-4">
            Born May 25, 1967, in Charleston, West Virginia, Morrisey graduated from West Virginia University and earned a J.D. from West Virginia University College of Law. He served as the state's Attorney General from 2013 to 2020, leading consumer protection efforts and challenging federal overreach.
          </p>
          <p className="mb-4">
            Elected Governor in November 2024 and sworn in January 2025. His campaign emphasized reducing taxes, expanding natural gas production, and defending conservative judicial appointments.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Republican</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "90%"],
              ["Pro‑Environment", "Pro‑Industry", "80%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "85%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "55%"],
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

          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Challenged federal environmental rules to defend state rights</li>
                <li>Led multi-state consumer protection litigation</li>
                <li>Advocated for natural gas and coal industry interests</li>
                <li>As Attorney General, secured millions in settlements for citizens</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for fighting EPA regulations during environmental disasters</li>
                <li>Faced scrutiny over acceptance of energy sector donations</li>
                <li>Accused of politicizing consumer advocacy in several AG cases</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/citynet.png" alt="Citynet" className="w-6 h-6 mr-2" />
                <strong>Citynet</strong> (Broadband & telecommunications) — $26,873
              </li>
              <li className="flex items-center">
                <img src="/msw.jpg" alt="Mountain State Waste" className="w-6 h-6 mr-2" />
                <strong>Mountain State Waste</strong> (Waste management & services) — $22,400
              </li>
              <li className="flex items-center">
                <img src="/astrorg.png" alt="Astorg Auto" className="w-6 h-6 mr-2" />
                <strong>Astorg Auto</strong> (Automotive dealership group) — $21,800
              </li>
              <li className="flex items-center">
                <img src="/village.jpg" alt="Village Caregiving" className="w-6 h-6 mr-2" />
                <strong>Village Caregiving</strong> (Home health & caregiving) — $15,241
              </li>
              <li className="flex items-center">
                <img src="/moses.jpg" alt="Moses Automotive" className="w-6 h-6 mr-2" />
                <strong>Moses Automotive</strong> (Automotive sales & service) — $15,200
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[ 
              { year: "2024", image: "/westvirginiaR.png", margin: "R +18.2%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Morrisey ${e.year}`} className="max-w-[150px] object-contain" />
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
