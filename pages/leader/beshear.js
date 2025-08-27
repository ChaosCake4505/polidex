import Header from "../../components/header";
import Footer from "../../components/footer";

export default function BeshearPage() {
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
              src="/beshear2.webp"
              alt="Andy Beshear"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Andy Beshear</h1>
          <p className="italic mb-4">
            "You cannot fan the flames and condemn the fire."
          </p>
          <p className="mb-4">
            Born in Louisville, Kentucky, in 1977, Andy Beshear earned his bachelor’s degree from Vanderbilt University and his J.D. from the University of Virginia School of Law.
          </p>
          <p className="mb-4">
            Before entering politics, Beshear practiced law and served as Kentucky's Attorney General (2016–2019), focusing on consumer protection and combating the opioid epidemic.
          </p>
          <p className="mb-4">
            Elected Governor in 2019 and re-elected in 2023, Beshear is known for his pragmatic, moderate approach, emphasizing economic development, education funding, disaster recovery, and bipartisan collaboration.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Democrat</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "45%"],
              ["Pro‑Environment", "Pro‑Industry", "40%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "50%"],
              ["Populist", "Establishment", "55%"],
              ["Dovish", "Hawkish", "35%"],
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

          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Expanded Medicaid coverage and protected healthcare access</li>
                <li>Led state response to multiple natural disasters, including tornadoes and flooding</li>
                <li>Increased teacher pay and invested in public education</li>
                <li>Attracted major economic development projects to Kentucky</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced pushback from conservative legislators over COVID-19 restrictions</li>
                <li>Criticized for vetoing some GOP-backed bills related to social policy</li>
                <li>Accused by opponents of overreach in executive orders during emergencies</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/morgan.jpg" alt="Morgan & Morgan logo" className="w-6 h-6 mr-2" />
                <strong>Morgan & Morgan</strong> (Law firm & consumer protection) — $88,534
              </li>
              <li className="flex items-center">
                <img src="/churchill.svg" alt="Churchill Downs logo" className="w-6 h-6 mr-2" />
                <strong>Churchill Downs</strong> (Horse racing & entertainment) — $48,750
              </li>
              <li className="flex items-center">
                <img src="/uk.png" alt="University of Kentucky logo" className="w-6 h-6 mr-2" />
                <strong>University of Kentucky</strong> (Public university & research) — $44,973
              </li>
              <li className="flex items-center">
                <img src="/louisville.webp" alt="University of Louisville logo" className="w-6 h-6 mr-2" />
                <strong>University of Louisville</strong> (Public university & medical research) — $44,554
              </li>
              <li className="flex items-center">
                <img src="/baptist.webp" alt="Baptist Health logo" className="w-6 h-6 mr-2" />
                <strong>Baptist Health</strong> (Healthcare & hospital network) — $37,375
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2019", image: "/kentuckyLeanD.png", margin: "D +0.4%" },
              { year: "2023", image: "/kentuckyLikelyD.png", margin: "D +5%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Beshear ${e.year}`}
                  className="max-w-[150px] object-contain"
                />
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
