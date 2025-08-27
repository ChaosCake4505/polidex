export default function SchumerPage() {
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
          src="/schumer.webp"
          alt="Chuck Schumer"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Chuck Schumer</h1>
        <p className="italic mb-4">
          "We must deliver real results for working families and defend democracy at every turn."
        </p>

        <p className="mb-4">
          Born November 23, 1950, in Brooklyn, New York, Schumer graduated from Harvard College and Harvard Law School. He began serving in the New York State Assembly at age 24 before being elected to the U.S. House (1981–1999). He won his U.S. Senate seat in 1998 and has since become a major Democratic leader.
        </p>
        <p className="mb-4">
          Schumer has served as Senate Majority Leader since 2021, guiding major legislation on infrastructure, economic relief, judicial confirmations, and climate policy. He is known for his strategic leadership and ability to keep the Democratic caucus unified.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "35%"],
            ["Pro‑Environment", "Pro‑Industry", "40%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "45%"],
            ["Populist", "Establishment", "65%"],
            ["Dovish", "Hawkish", "55%"],
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
              <li>Guided passage of landmark infrastructure and COVID-19 relief bills</li>
              <li>Expanded judicial confirmations and protected voting rights efforts</li>
              <li>Advanced climate and clean energy funding initiatives</li>
              <li>Strengthened gun safety legislation and public safety measures</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for close ties to Wall Street and major donors</li>
              <li>Faced pushback from progressives on certain economic policy compromises</li>
              <li>Accused of prioritizing electoral strategy over policy boldness at times</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "1998", image: "/newyorkLikelyD.png", margin: "D +10%" },
            { year: "2004", image: "/newyork.png", margin: "D +32%" },
            { year: "2010", image: "/newyork.png", margin: "D +34%" },
            { year: "2016", image: "/newyork.png", margin: "D +43%" },
            { year: "2022", image: "/newyorkLikelyD.png", margin: "D +14%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Schumer ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
