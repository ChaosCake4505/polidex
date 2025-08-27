import Header from "../../components/header";
import Footer from "../../components/footer";

export default function DeWinePage() {
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
              src="/dewine.jpg"
              alt="Mike DeWine"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Mike DeWine</h1>
          <p className="italic mb-4">
            "Governing is about making tough decisions, but it's also about figuring out a better way to do things."
          </p>
          <p className="mb-4">
            Born January 5, 1947, in Columbus, Ohio, Richard Michael DeWine earned his B.A. from Miami University and J.D. from Ohio Northern University College of Law. He served as Greene County prosecutor, U.S. Representative, U.S. Senator, and Ohio Attorney General.
          </p>
          <p className="mb-4">
            Elected Governor in 2018 and re-elected in 2022, DeWine is known for his science-based approach during COVID‑19, bipartisan crisis response, and steady fiscal management.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "85%"],
              ["Pro‑Environment", "Pro‑Industry", "60%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "75%"],
              ["Populist", "Establishment", "65%"],
              ["Dovish", "Hawkish", "55%"],
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
                <li>Guided Ohio's pandemic response using public health data and leadership</li>
                <li>Expanded mental health services and support for children’s welfare</li>
                <li>Maintained fiscal discipline with balanced budgets and responsible spending</li>
                <li>Acted decisively during natural disasters and championed bipartisan solutions</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced criticism for early COVID‑19 school closures and business restrictions</li>
                <li>Accused of overuse of executive authority during emergencies</li>
                <li>Political fallout amidst state legislative bribery scandal (not involving DeWine directly)</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/arena.jpg" alt="Arena logo" className="w-6 h-6 mr-2" />
                <strong>Arena Communications</strong> (Political consulting & mail services) — $373,740
              </li>
              <li className="flex items-center">
                <img src="/ttg.jpg" alt="Tarrance logo" className="w-6 h-6 mr-2" />
                <strong>Tarrance Group</strong> (Polling & strategy consulting) — $303,589
              </li>
              <li className="flex items-center">
                <img src="/ar.png" alt="America Rising logo" className="w-6 h-6 mr-2" />
                <strong>America Rising Corporation</strong> (Opposition research & strategy) — $86,500
              </li>
              <li className="flex items-center">
                <img src="/liu.png" alt="Laborers Union logo" className="w-6 h-6 mr-2" />
                <strong>Laborers Union</strong> (Labor union & workforce advocacy) — $64,954
              </li>
              <li className="flex items-center">
                <img src="/afg.png" alt="American Financial logo" className="w-6 h-6 mr-2" />
                <strong>American Financial Group</strong> (Insurance & financial services) — $48,366
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/ohioLeanR.png", margin: "R +3.7%" },
              { year: "2022", image: "/ohioR.png", margin: "R +25.0%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`DeWine ${e.year}`} className="max-w-[150px] object-contain" />
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
