import Header from "../../components/header";
import Footer from "../../components/footer";

export default function HochulPage() {
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
              src="/hochul.jpg"
              alt="Kathy Hochul"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        {/* Content box */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Kathy Hochul</h1>
          <p className="italic mb-4">
            "I will have no distractions in my administration because we focused on doing what's best for the people of the state."
          </p>

          <p className="mb-4">
            Born August 27, 1958, in Buffalo, New York, Hochul earned her B.A. from Syracuse University and her J.D. from Catholic University. She served as a Hamburg town board member, Erie County clerk, and as a U.S. Representative from 2011 to 2013.
          </p>
          <p className="mb-4">
            Hochul became lieutenant governor in 2015 and assumed the governorship in 2021 following Andrew Cuomo’s resignation. She was elected to a full term in 2022 and has focused on public safety, housing, economic growth, and protecting reproductive rights.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

          {/* Ideology bars */}
          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "40%"],
              ["Pro‑Environment", "Pro‑Industry", "45%"],
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
                <li>Expanded state investments in affordable housing and infrastructure</li>
                <li>Strengthened gun safety laws and red flag protections</li>
                <li>Advanced climate resilience and green energy programs</li>
                <li>Protected reproductive healthcare access statewide</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced criticism over handling of MTA budget and congestion pricing delays</li>
                <li>Debated for balancing moderate stances on criminal justice reforms</li>
                <li>Scrutinized for ties to major donors during 2022 campaign</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/aflcio.jpg" alt="AFL-CIO" className="w-6 h-6 mr-2" />
                <strong>AFL-CIO</strong> (Labor federation & union advocacy) — $147,600
              </li>
              <li className="flex items-center">
                <img src="/seiu.png" alt="SEIU" className="w-6 h-6 mr-2" />
                <strong>Service Employees International Union</strong> (Service sector union) — $116,800
              </li>
              <li className="flex items-center">
                <strong>Gair Gair Conason Rubinowitz Bloom</strong> (Personal injury & litigation law firm) — $100,000
              </li>
              <li className="flex items-center">
                <strong>Kramer Dillof Livingston & Moore</strong> (Medical malpractice law firm) — $100,000
              </li>
              <li className="flex items-center">
                <img src="/smwu.png" alt="Sheet Metal Workers" className="w-6 h-6 mr-2" />
                <strong>Sheet Metal Workers Union</strong> (Construction & trades union) — $73,200
              </li>
            </ul>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2022", image: "/newyorkLikelyD.png", margin: "D +6%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Hochul ${e.year}`} className="max-w-[150px] object-contain" />
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
