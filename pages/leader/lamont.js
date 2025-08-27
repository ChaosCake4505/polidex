import Header from "../../components/header";
import Footer from "../../components/footer";

export default function LamontPage() {
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
              src="/lamont1.jpg"
              alt="Ned Lamont"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        {/* Content box */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Ned Lamont</h1>
          <p className="italic mb-4">
            "We're born alone, we live alone, we die alone. Only through our love and friendship can we create the illusion for the moment that we're not alone."
          </p>

          <p className="mb-4">
            Born January 3, 1954, in Washington, D.C., Lamont earned a B.A. from Harvard and an M.B.A. from Yale. He started his career in business and media, later serving on local boards in Greenwich before entering statewide politics. After an unsuccessful bid in 2010, Lamont won the governorship in 2018 and was re-elected in 2022 with an expanded margin, becoming the first Democrat to win consecutive terms in Connecticut since the 1980s.
          </p>
          <p className="mb-4">
            Lamont has prioritized economic growth, education investment, infrastructure modernization, and fiscal stability while maintaining Connecticut’s strong commitments to social and environmental issues.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

          {/* Ideology bars */}
          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "35%"],
              ["Pro‑Environment", "Pro‑Industry", "45%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "40%"],
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
                <li>Achieved multiple balanced budgets and reduced pension liabilities</li>
                <li>Passed legislation legalizing cannabis, sports betting, and online gaming</li>
                <li>Implemented major tax cuts for middle-class families and small businesses</li>
                <li>Invested in transportation upgrades and broadband expansion</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for large personal wealth and declining a state salary</li>
                <li>Faced backlash over stalled toll proposals and transit delays</li>
                <li>Local disputes over environmental issues on private properties</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <strong>Schlesinger Lazetera & Auchincloss LLP</strong> (Law & estate planning firm) — $18,000
              </li>
              <li className="flex items-center">
                <strong>Williams Jones Wealth Management LLC</strong> (Investment & wealth management) — $10,000
              </li>
              <li className="flex items-center">
                <strong>Wingspan Capital</strong> (Private equity & venture capital) — $8,033
              </li>
              <li className="flex items-center">
                <img src="/wonder.jpg" alt="Wonderful Company" className="w-6 h-6 mr-2" />
                <strong>Wonderful Company</strong> (Food & agriculture conglomerate) — $7,000
              </li>
              <li className="flex items-center">
                <img src="/education.png" alt="US Dept of Education" className="w-6 h-6 mr-2" />
                <strong>U.S. Department of Education</strong> (Government & education funding) — $7,000
              </li>
            </ul>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/connecticutLean.png", margin: "D +3.0%" },
              { year: "2022", image: "/connecticutLikely.png", margin: "D +13.0%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Lamont ${e.year}`} className="max-w-[150px] object-contain" />
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
