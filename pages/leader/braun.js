import Header from "../../components/header";
import Footer from "../../components/footer";

export default function BraunPage() {
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
              src="/braun.jpg"
              alt="Mike Braun"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Mike Braun</h1>
          <p className="italic mb-4">
            "As governor, I’ll bring small‑town roots and business experience to move Hoosier families forward."
          </p>
          <p className="mb-4">
            Born in Jasper, Indiana, in 1954, Braun graduated summa cum laude in economics from Wabash College before earning an MBA from Harvard Business School. He returned to Indiana to grow a small truck-body company into a multi-state enterprise employing thousands.
          </p>
          <p className="mb-4">
            His public service began on the Jasper school board (2004–14) and in the Indiana House (2014–17), focusing on infrastructure and local priorities. In 2018, Braun was elected U.S. Senator, and in 2024 he won the governorship with 54.4% over 41.1%, a 13.3-point victory over Democrat Jennifer McCormick.
          </p>
          <p className="mb-4">
            Known as a conservative outsider, he supports lower taxes, job growth, expanded broadband, and rural healthcare. He opposes ACA expansion, abortion rights, same-sex marriage, and pathway-to-citizenship reforms.
          </p>
          <p className="mb-4">
            Braun emphasizes government efficiency, saying the governor’s role is “running something” rather than ideological combat — prioritizing property tax relief, healthcare cost reductions, and local empowerment.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Populist Right</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "85%"],
              ["Pro‑Environment", "Pro‑Industry", "80%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "80%"],
              ["Populist", "Establishment", "65%"],
              ["Dovish", "Hawkish", "70%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span><span>{R}</span>
                </div>
                <div className="relative h-4 rounded-full" style={{ background: 'linear-gradient(to right, #0047AB, #C41E3A)' }}>
                  <div className="absolute top-[-10px]" style={{ left: pos, transform: 'translateX(-50%)' }}>
                    <span style={{ fontSize: '1.5rem' }}>⬆️</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Grew family-run business from 15 to 300+ employees across multiple states</li>
                <li>Authored long-term road funding plan in Indiana legislature</li>
                <li>Ranked among most effective GOP freshmen in Senate; chaired aging committee</li>
                <li>Won 2024 governor race with largest open-seat margin since 2004</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Strong socially conservative positions on abortion, LGBTQ+ rights, and immigration</li>
                <li>Criticized for opposing some COVID-19 relief measures</li>
                <li>Comments on 2020 election certification sparked backlash from moderates</li>
                <li>Choice of controversial running mate for lieutenant governor drew scrutiny</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/bh.png" alt="Berkshire logo" className="w-6 h-6 mr-2" />
                <strong>Berkshire Hathaway</strong> (Conglomerate & investments) — $41,390
              </li>
              <li className="flex items-center">
                <img src="/sema.png" alt="SEMA logo" className="w-6 h-6 mr-2" />
                <strong>Specialty Equipment Market Assn</strong> (Automotive specialty group) — $29,250
              </li>
              <li className="flex items-center">
                <img src="/lily.jpg" alt="Eli Lilly logo" className="w-6 h-6 mr-2" />
                <strong>Eli Lilly & Co</strong> (Pharmaceuticals) — $28,973
              </li>
              <li className="flex items-center">
                <img src="/electronics.png" alt="Electronics Inc logo" className="w-6 h-6 mr-2" />
                <strong>Electronics Inc</strong> (Manufacturing & equipment) — $27,350
              </li>
              <li className="flex items-center">
                <img src="/clear.jpg" alt="ClearPath logo" className="w-6 h-6 mr-2" />
                <strong>ClearPath Foundation</strong> (Clean energy advocacy) — $25,800
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/indianaLikelyD.png", margin: "R +6.0%" },
              { year: "2024", image: "/indianaLikelyD.png", margin: "R +13.3%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Braun ${e.year}`} className="max-w-[150px] object-contain" />
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
