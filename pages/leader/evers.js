import Header from "../../components/header";
import Footer from "../../components/footer";

export default function EversPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8 text-black font-serif" style={{
        backgroundImage: "url('/wash.webp')",
      }}>
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/evers.jpg"
              alt="Tony Evers"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Tony Evers</h1>
          <p className="italic mb-4">"Doing what's best for our kids means restoring balance, commonsense and conservation to the management of our natural resources."</p>
          <p className="mb-4">
            Tony Evers, born in 1951 in Plymouth, Wisconsin, is the 46th Governor of Wisconsin, first elected in 2018 and re-elected in 2022. Before entering statewide politics, Evers had a long career as an educator, serving as a teacher, principal, district administrator, and later as Wisconsin State Superintendent of Public Instruction for nearly a decade.
          </p>
          <p className="mb-4">
            Evers's policy focus centers on public education, healthcare expansion, and protecting voting rights. His approach is often described as pragmatic and consensus-seeking, aiming to balance Wisconsin’s sharply divided political climate. During the COVID-19 pandemic, Evers implemented health mandates and clashed with the Republican-controlled legislature over emergency powers and statewide responses.
          </p>
          <p className="mb-4">
            His leadership has emphasized fair maps, investment in rural communities, and environmental sustainability. Despite facing strong partisan opposition, Evers has maintained popularity by projecting a calm, measured style and prioritizing issues like funding for public schools and expanding broadband.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Liberal</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "40%"],
              ["Pro‑Environment", "Pro‑Industry", "35%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "45%"],
              ["Populist", "Establishment", "55%"],
              ["Dovish", "Hawkish", "40%"],
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
                <li>Increased public school funding and teacher support</li>
                <li>Expanded broadband access in rural communities</li>
                <li>Protected voting access and vetoed restrictive legislation</li>
                <li>Advanced clean water and environmental protection initiatives</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized by conservatives for COVID-19 mandates and emergency orders</li>
                <li>Faced pushback on redistricting and fair maps policies</li>
                <li>Accusations of not engaging enough with Republican legislative leaders</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/we.png" alt="Wisconsin Energy logo" className="w-6 h-6 mr-2" />
                <strong>Wisconsin Energy Corp</strong> (Utilities & energy) — $25,000
              </li>
              <li className="flex items-center">
                <img src="/beer.jpg" alt="Beer Distributors logo" className="w-6 h-6 mr-2" />
                <strong>Wisconsin Beer Distributors Association</strong> (Beverage distribution) — $20,000
              </li>
              <li className="flex items-center">
                <img src="/os.jpg" alt="Engineers logo" className="w-6 h-6 mr-2" />
                <strong>Operating Engineers Local 139</strong> (Construction labor union) — $15,000
              </li>
              <li className="flex items-center">
                <img src="/forest.png" alt="Potawatomi logo" className="w-6 h-6 mr-2" />
                <strong>Forest County Potawatomi</strong> (Tribal & gaming interests) — $25,000
              </li>
              <li className="flex items-center">
                <img src="/liu.png" alt="Laborers Union logo" className="w-6 h-6 mr-2" />
                <strong>Laborers Union</strong> (Construction & general labor union) — $10,000
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/wisconsinLeanD.png", margin: "D +1.1%" },
              { year: "2022", image: "/wisconsinLeanD.png", margin: "D +3.4%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Evers ${e.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{e.year} Margin {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
