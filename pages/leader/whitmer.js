import Header from "../../components/header";
import Footer from "../../components/footer";

export default function WhitmerPage() {
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
              src="/whitmer.jpg"
              alt="Gretchen Whitmer"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Gretchen Whitmer</h1>
          <p className="italic mb-4">"I know that when we deprive communities of their voice, it can be dangerous."</p>
          <p className="mb-4">
            Born in Lansing in 1971, Whitmer earned her BA and JD from Michigan State University, then served in the state House (2001–06) and Senate (2006–15), becoming the Senate’s first female Democratic leader.
          </p>
          <p className="mb-4">
            After serving as Ingham County prosecutor, she was elected governor in 2018 and re-elected in 2022. She gained national prominence leading COVID-19 measures and surviving a 2020 kidnapping plot.
          </p>
          <p className="mb-4">
            Whitmer has championed bipartisan priorities: infrastructure ("fix the damn roads"), education funding, clean water, reproductive rights, economic development, and mental health resources.
          </p>
          <p className="mb-4">
            A co-chair of Biden’s 2024 campaign, she also authored the memoir “True Gretch,” with proceeds going to Michigan nonprofits.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "40%"],
              ["Pro‑Environment", "Pro‑Industry", "35%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "45%"],
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

          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Repaired 20k+ lane miles and 1,400+ bridges</li>
                <li>Signed 1,350+ bipartisan bills, expanded free school lunch</li>
                <li>Rolled back retirement tax, boosted working families tax credit</li>
                <li>Expanded reproductive rights and gun control protections</li>
                <li>Secured large EV, clean energy, and auto investment; $2B rainy day fund</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced backlash over COVID‑19 emergency orders and business restrictions</li>
                <li>Target of a foiled militia kidnapping plot in 2020</li>
                <li>Criticized for bond-funded road repairs and tax policies</li>
                <li>Tensions with GOP legislature over pandemic relief messaging</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/gmmb.png" alt="GMMB&A logo" className="w-6 h-6 mr-2" />
                <strong>GMMB&A Inc</strong> (Strategic communications & media) — $212,406
              </li>
              <li className="flex items-center">
                <img src="/blue.jpg" alt="BCBS logo" className="w-6 h-6 mr-2" />
                <strong>Blue Cross/Blue Shield of Michigan</strong> (Health insurance) — $137,858
              </li>
              <li className="flex items-center">
                <img src="/umich.png" alt="University of Michigan logo" className="w-6 h-6 mr-2" />
                <strong>University of Michigan</strong> (Public university & research) — $90,979
              </li>
              <li className="flex items-center">
                <img src="/rtw.webp" alt="Run The World logo" className="w-6 h-6 mr-2" />
                <strong>Run The World</strong> (Fundraising & event organizing) — $90,894
              </li>
              <li className="flex items-center">
                <img src="/centene.jpg" alt="Centene logo" className="w-6 h-6 mr-2" />
                <strong>Centene Corp</strong> (Healthcare services) — $85,775
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/michiganLikelyD.png", margin: "D +9.5%" },
              { year: "2022", image: "/michiganLikelyD.png", margin: "D +10.6%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Whitmer ${e.year}`} className="max-w-[150px] object-contain" />
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
