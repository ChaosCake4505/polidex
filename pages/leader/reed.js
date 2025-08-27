export default function ReedPage() {
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
          src="/reed.jpg"
          alt="Jack Reed"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Jack Reed</h1>
        <p className="italic mb-4">
          "We must protect our democracy, strengthen our national defense, and ensure every American has a fair shot at success."
        </p>

        <p className="mb-4">
          Born November 12, 1949, in Cranston, Rhode Island, Reed graduated from the U.S. Military Academy at West Point, earned a master’s at Harvard's Kennedy School, and a J.D. from Harvard Law School. He served as an Army Ranger and later as a state senator and U.S. Representative.
        </p>
        <p className="mb-4">
          Elected to the U.S. Senate in 1996, Reed has built a reputation as a defense policy expert and strong supporter of veterans' services, education funding, and economic opportunity. He has consistently won re-election by wide margins, including a 33-point win in 2020.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "38%"],
            ["Pro‑Environment", "Pro‑Industry", "35%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "40%"],
            ["Populist", "Establishment", "60%"],
            ["Dovish", "Hawkish", "57%"],
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
              <li>Chair of the Senate Armed Services Committee, shaping major defense bills</li>
              <li>Championed expanded veterans' healthcare and GI Bill benefits</li>
              <li>Supported increased federal investment in public education and infrastructure</li>
              <li>Advocated for housing assistance and economic security measures</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by some progressives for strong support of defense spending</li>
              <li>Faced local pushback on certain base closure and restructuring proposals</li>
              <li>Debated for cautious approach to Wall Street and financial regulation reforms</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "1996", image: "/rhode island.png", margin: "D +23%" },
            { year: "2008", image: "/rhode island.png", margin: "D +37%" },
            { year: "2014", image: "/rhode island.png", margin: "D +29%" },
            { year: "2020", image: "/rhode island.png", margin: "D +33%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Reed ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
