export default function MorenoPage() {
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
          src="/moreno.jpg"
          alt="Bernie Moreno"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Bernie Moreno</h1>
        <p className="italic mb-4">
          "As an immigrant, entrepreneur, and American, I’ll fight to deliver opportunity, secure our borders, and grow Ohio’s economy."
        </p>

        <p className="mb-4">
          Born February 14, 1967, in Bogotá, Colombia, Moreno moved to the U.S. at age 5 and became a citizen at 18. He earned his BBA from the University of Michigan and built a large auto-dealership business employing over 1,000 Ohioans.
        </p>
        <p className="mb-4">
          Elected to the U.S. Senate in November 2024, he took office January 3, 2025, defeating longtime incumbent Sherrod Brown in a major upset pivotal to Senate control. In July 2025, he joined the Senate GOP Whip Team.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Populist Republican</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "85%"],
            ["Pro‑Environment", "Pro‑Industry", "75%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "80%"],
            ["Populist", "Establishment", "70%"],
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
              <li>Became one of the first two Colombian-American U.S. Senators</li>
              <li>Joined Senate GOP Whip Team in July 2025</li>
              <li>Championed legislation on transportation, digital assets, and economic development</li>
              <li>Helped secure major funding for Ohio hospitals and infrastructure</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Faced lawsuits regarding dealership practices (settled 2015–2017)</li>
              <li>Criticized for attending fundraisers with controversial donors</li>
              <li>Questioned on shifting positions during Senate campaign debates</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2024", image: "/ohioLeanR.png", margin: "R +3.6%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Moreno ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
