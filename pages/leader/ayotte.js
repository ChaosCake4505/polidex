import Header from "../../components/header";
import Footer from "../../components/footer";

export default function AyottePage() {
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
              src="/ayotte.webp"
              alt="Kelly Ayotte"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Kelly Ayotte</h1>
          <p className="italic mb-4">
            "I'm the only pro-life woman in the Senate. I take this issue very seriously. I'm the mother of two children."
          </p>

          <p className="mb-4">
            Born June 27, 1968, in Nashua, New Hampshire, Ayotte earned her B.A. from Pennsylvania State University and her J.D. from Villanova University School of Law. She served as New Hampshire's Attorney General from 2004 to 2009, becoming the first woman to hold the role in the state.
          </p>
          <p className="mb-4">
            Ayotte was elected to the U.S. Senate in 2010, serving one term and developing a reputation as a moderate Republican focused on national security and fiscal conservatism. After losing reelection in 2016, she returned to public service and was elected governor in 2024, emphasizing economic growth, public safety, and bipartisan problem-solving.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Republican</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "55%"],
              ["Pro‑Environment", "Pro‑Industry", "45%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "60%"],
              ["Populist", "Establishment", "58%"],
              ["Dovish", "Hawkish", "62%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span><span>{R}</span>
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

          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>First woman elected Attorney General in New Hampshire history</li>
                <li>Strengthened state economic development and business recruitment strategies</li>
                <li>Promoted bipartisan initiatives on opioid crisis prevention and public safety</li>
                <li>Advocated for tax relief and regulatory reform to support small businesses</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced criticism from the right for moderate stances on social issues and immigration</li>
                <li>Criticized for supporting some federal gun control measures while in the Senate</li>
                <li>Debated for balancing climate action goals with business interests in recent state policies</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/gold.png" alt="Goldman Sachs" className="w-6 h-6 mr-2" />
                <strong>Goldman Sachs</strong> (Investment banking & financial services) — $91,650
              </li>
              <li className="flex items-center">
                <img src="/ge.png" alt="General Electric" className="w-6 h-6 mr-2" />
                <strong>General Electric</strong> (Diversified industrial & tech manufacturing) — $89,350
              </li>
              <li className="flex items-center">
                <img src="/fidelity.png" alt="Fidelity Investments" className="w-6 h-6 mr-2" />
                <strong>Fidelity Investments</strong> (Financial management & retirement services) — $79,150
              </li>
              <li className="flex items-center">
                <strong>Aetna Inc</strong> (Healthcare & insurance services) — $56,450
              </li>
              <li className="flex items-center">
                <img src="/american.png" alt="American Airlines" className="w-6 h-6 mr-2" />
                <strong>American Airlines</strong> (Aviation & travel) — $41,650
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2024", image: "/newhampshireLikelyR.png", margin: "R +6%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Ayotte ${e.year}`}
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
