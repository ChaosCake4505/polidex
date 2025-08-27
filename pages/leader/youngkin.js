import Header from "../../components/header";
import Footer from "../../components/footer";

export default function YoungkinPage() {
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
              src="/youngkin.jpg"
              alt="Glenn Youngkin"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        {/* Content box */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Glenn Youngkin</h1>
          <p className="italic mb-4">
            "I will continue to work on behalf of all Virginians to lower the cost of living, keep our communities safe, make government work for the people again."
          </p>

          <p className="mb-4">
            Born December 9, 1966, in Richmond, Virginia, Youngkin attended Rice University on a basketball scholarship and later earned his MBA from Harvard Business School. He spent over 25 years in private equity at the Carlyle Group, rising to co-CEO before entering politics.
          </p>
          <p className="mb-4">
            Elected governor in 2021, Youngkin ran as a business-minded conservative emphasizing parental rights in schools, economic growth, and crime reduction.
          </p>
          <p className="mb-4">
            He has focused on lowering taxes, promoting job growth, and empowering local communities through school choice and infrastructure investment.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Republican</h2>

          {/* Ideology bars */}
          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "80%"],
              ["Pro‑Environment", "Pro‑Industry", "75%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "85%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "55%"],
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

          {/* Achievements & Controversies */}
          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Passed tax relief packages and business deregulation bills</li>
                <li>Expanded school choice programs and emphasized parental input in education policy</li>
                <li>Increased investments in rural broadband and infrastructure modernization</li>
                <li>Maintained high state economic growth and low unemployment rates</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for cultural "divisiveness" over education and gender policy debates</li>
                <li>Faced pushback from environmental groups on energy policy shifts</li>
                <li>Questioned for close ties to business interests during legislative negotiations</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/sig.jpg" alt="SIG logo" className="w-6 h-6 mr-2" />
                <strong>Susquehanna International Group</strong> (Financial trading & investments) — $2,000,000
              </li>
              <li className="flex items-center">
                <strong>Thomas Peterffy</strong> (Interactive Brokers founder, major GOP donor) — $4,000,000
              </li>
              <li className="flex items-center">
                <strong>Jeff Yass</strong> (Investor & libertarian-aligned donor) — $2,000,000
              </li>
              <li className="flex items-center">
                <strong>Future of Education LLC</strong> (Education reform advocacy) — $1,000,000
              </li>
              <li className="flex items-center">
                <strong>Tiger Lily Capital LLC</strong> (Private investment firm) — $573,220
              </li>
            </ul>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2021", image: "/virginiaLeanR.png", margin: "R +2.0%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Youngkin ${elect.year}`}
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
