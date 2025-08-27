import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ShapiroPage() {
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
              src="/shapiro.jpeg"
              alt="Josh Shapiro"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        {/* Content box */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Josh Shapiro</h1>
          <p className="italic mb-4">
            "Leaders have a responsibility to speak truth."
          </p>

          <p className="mb-4">
            Born June 20, 1973, in Kansas City, Missouri, Shapiro moved to Pennsylvania early in life. He graduated from the University of Rochester and the University of Virginia School of Law. He entered public service as a Montgomery County Commissioner, later serving as Pennsylvania Attorney General (2017–2023).
          </p>
          <p className="mb-4">
            Elected governor in 2022, Shapiro has focused on bipartisan governance, investing in infrastructure, expanding healthcare access, and strengthening public education. He’s widely viewed as a moderate Democrat, emphasizing practical solutions and coalition-building.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Liberal</h2>

          {/* Ideology bars */}
          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "40%"],
              ["Pro‑Environment", "Pro‑Industry", "45%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "50%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "45%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span>
                  <span>{R}</span>
                </div>
                <div
                  className="relative h-4 rounded-full"
                  style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}
                >
                  <div
                    className="absolute top-[-10px]"
                    style={{ left: pos, transform: "translateX(-50%)" }}
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
                <li>Oversaw major infrastructure rebuilding projects statewide</li>
                <li>Expanded Medicaid and improved access to behavioral healthcare</li>
                <li>Increased education funding and teacher pay across districts</li>
                <li>Launched public safety and gun violence prevention initiatives</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized by conservatives for gun safety and regulation policies</li>
                <li>Faced opposition over budget expansions for social programs</li>
                <li>Accused by Republicans of executive overreach during COVID‑19 measures</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/bloomberg.jpg" alt="Bloomberg LP" className="w-6 h-6 mr-2" />
                <strong>Bloomberg LP</strong> (Media & financial data) — $1,010,850
              </li>
              <li className="flex items-center">
                <img src="/afscme.jpg" alt="AFSCME" className="w-6 h-6 mr-2" />
                <strong>AFSCME</strong> (Public sector union) — $1,000,000
              </li>
              <li className="flex items-center">
                <img src="/nea.webp" alt="NEA" className="w-6 h-6 mr-2" />
                <strong>National Education Association</strong> (Teachers' union) — $956,566
              </li>
              <li className="flex items-center">
                <img src="/paj.jpg" alt="PA Assn for Justice" className="w-6 h-6 mr-2" />
                <strong>Pennsylvania Assn for Justice</strong> (Trial lawyers & advocacy) — $900,000
              </li>
              <li className="flex items-center">
                <img src="/seiu.png" alt="SEIU" className="w-6 h-6 mr-2" />
                <strong>SEIU</strong> (Service Employees International Union) — $750,000
              </li>
            </ul>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2022", image: "/PennsylvaniaLikelyD.png", margin: "D +14%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Shapiro ${e.year}`}
                  className="max-w-[150px] object-contain"
                />
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
