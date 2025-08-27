import Header from "../../components/header";
import Footer from "../../components/footer";

export default function DeSantisPage() {
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
              src="/deSantis2.jpg"
              alt="Ron DeSantis"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Ron DeSantis</h1>
          <p className="italic mb-4">
            "I was always the kind of hitter that if you threw it 92 miles per hour at me, I'd hit it right back at you."
          </p>

          <p className="mb-4">
            Ron DeSantis has served as Governor of Florida since 2019. Known nationally for his strong conservative agenda, he has prioritized cultural issues, economic freedom, and aggressive opposition to federal mandates.
          </p>
          <p className="mb-4">
            DeSantis has pushed policies on education, public health, and immigration that have gained national attention and positioned him as a leading Republican figure.
          </p>
          <p className="mb-4">
            He won re-election in 2022 by a historic margin, further cementing his influence within the party.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Populist Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "95%"],
              ["Pro‑Environment", "Pro‑Industry", "85%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
              ["Populist", "Establishment", "65%"],
              ["Dovish", "Hawkish", "80%"],
            ].map(([leftLabel, rightLabel, position], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{leftLabel}</span>
                  <span>{rightLabel}</span>
                </div>
                <div
                  className="relative h-4 rounded-full"
                  style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}
                >
                  <div
                    className="absolute top-[-10px]"
                    style={{ left: position, transform: "translateX(-50%)" }}
                  >
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
                <li>Passed the "Stop WOKE Act" and restricted DEI initiatives in education</li>
                <li>Expanded school choice and voucher programs statewide</li>
                <li>Implemented aggressive COVID-19 reopening strategy</li>
                <li>Oversaw significant tax reductions and business incentives</li>
                <li>Increased Everglades restoration and environmental funding</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for controversial migrant relocation programs</li>
                <li>Backlash from Disney and corporate leaders over policy disputes</li>
                <li>Accused of limiting local COVID-19 response authority</li>
                <li>Criticism over "Don't Say Gay" legislation and educational censorship</li>
                <li>Claims of politicizing state university governance</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/seminole.webp" alt="Seminole Tribe" className="w-6 h-6 mr-2" />
                <strong>Seminole Tribe of Florida</strong> (Gaming & hospitality) — $2,000,000
              </li>
              <li className="flex items-center">
                <img src="/buckley.jpg" alt="Buckley Muething" className="w-6 h-6 mr-2" />
                <strong>Buckley Muething Capital Management</strong> (Wealth management & investments) — $750,000
              </li>
              <li className="flex items-center">
                <strong>M Jude Reyes 1999 Trust</strong> (Food distribution & beverages) — $600,000
              </li>
              <li className="flex items-center">
                <strong>J Christopher Reyes 1999 Trust</strong> (Food distribution & beverages) — $600,000
              </li>
              <li className="flex items-center">
                <strong>McCormick Drive</strong> (Real estate & private investments) — $550,000
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/floridaLeanR.png", margin: "R +0.4%" },
              { year: "2022", image: "/floridaLikelyR.png", margin: "R +19.4%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`DeSantis ${elect.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{elect.year}: {elect.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
