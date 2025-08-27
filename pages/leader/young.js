export default function YoungPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8"
      style={{
        backgroundImage: "url('/bg4.jpg')",
        color: "black",
        fontFamily: "Georgia, serif",
      }}
    >
      <div className="md:w-1/3 flex justify-center items-start">
        <img
          src="/young.jpg"
          alt="Todd Young"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Todd Young</h1>
        <p className="italic mb-4">"Indiana needs commonsense conservatives who can get things done across the aisle."</p>
        <p className="mb-4">
          Born in Pennsylvania in 1972 and raised in suburban Indianapolis, Young graduated from the U.S. Naval Academy in 1995, then served as an intelligence officer in the U.S. Marine Corps through 2000.
        </p>
        <p className="mb-4">
          After earning an MBA from the University of Chicago, a master's degree from the University of London, and a JD from Indiana University, he entered public service: serving on a school board, then in the U.S. House (2011–17) before winning a Senate seat in 2016.
        </p>
        <p className="mb-4">
          In the Senate, Young has focused on bipartisan priorities such as supply chain security, veterans’ affairs, and technology competitiveness. He helped lead passage of the CHIPS and Science Act and supported repealing outdated war authorizations.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "80%"],
            ["Pro‑Environment", "Pro‑Industry", "70%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "75%"],
            ["Populist", "Establishment", "60%"],
            ["Dovish", "Hawkish", "65%"],
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
              <li>Led passage of the CHIPS & Science Act to boost U.S. manufacturing</li>
              <li>Co-sponsored repeal of outdated war authorizations</li>
              <li>Ranked among most bipartisan senators in recent sessions</li>
              <li>Serves on Commerce, Foreign Relations, Finance, and Small Business committees</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for votes supporting large defense budgets</li>
              <li>Faced backlash for voting against an independent January 6 commission</li>
              <li>Opposes federal protections for abortion and same-sex marriage</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2016", image: "/indianaLikelyD.png", margin: "R +10.0%" },
            { year: "2022", image: "/indianaLikelyD.png", margin: "R +20.7%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Young ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
