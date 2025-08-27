import Header from "../../components/header";
import Footer from "../../components/footer";

export default function McMasterPage() {
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
              src="/mcmaster.jpg"
              alt="Henry McMaster"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Henry McMaster</h1>
          <p className="italic mb-4">
            "Some problems in the world are not bullet-izable."
          </p>
          <p className="mb-4">
            Henry McMaster has served as Governor of South Carolina since 2017, after terms as Lieutenant Governor and Attorney General. Known for his staunch conservative positions, he has focused on economic growth, disaster response, and education reform.
          </p>
          <p className="mb-4">
            McMaster has consistently supported pro-business initiatives, opposed Medicaid expansion under the ACA, and promoted South Carolina's traditional conservative values.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "90%"],
              ["Pro‑Environment", "Pro‑Industry", "85%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
              ["Populist", "Establishment", "65%"],
              ["Dovish", "Hawkish", "75%"],
            ].map(([left, right, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1"><span>{left}</span><span>{right}</span></div>
                <div className="relative h-4 rounded-full" style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}>
                  <div className="absolute top-[-10px]" style={{ left: pos, transform: "translateX(-50%)" }}><span style={{ fontSize: "1.5rem" }}>⬆️</span></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Oversaw economic growth and record-low unemployment rates</li>
                <li>Led major hurricane and flood disaster responses</li>
                <li>Expanded workforce development and job training initiatives</li>
                <li>Championed pro-life legislation and conservative education reforms</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for rejecting Medicaid expansion under ACA</li>
                <li>Faced backlash over pandemic handling and local restrictions</li>
                <li>Accused of prioritizing corporate interests over environmental protections</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/nreca.jpg" alt="NRECA" className="w-6 h-6 mr-2" />
                <strong>National Rural Electric Cooperative Assn</strong> (Utility cooperatives & energy) — $31,000
              </li>
              <li className="flex items-center">
                <img src="/duke.jpg" alt="Duke Energy" className="w-6 h-6 mr-2" />
                <strong>Duke Energy</strong> (Energy & power) — $11,000
              </li>
              <li className="flex items-center">
                <img src="/trans.jpg" alt="Transystems" className="w-6 h-6 mr-2" />
                <strong>Transystems Corporation</strong> (Transportation & infrastructure) — $10,500
              </li>
              <li className="flex items-center">
                <strong>Nelson Mullens Riley & Scarborough</strong> (Law & lobbying) — $7,000
              </li>
              <li className="flex items-center">
                <strong>Myrtle Beach Lodging Association</strong> (Tourism & hospitality) — $7,000
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/southcarolinaLikely.png", margin: "R +8.0%" },
              { year: "2022", image: "/southcarolina.png", margin: "R +17.0%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={elect.image} alt={`McMaster ${elect.year}`} className="max-w-[150px] object-contain" />
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
