export default function SlotkinPage() {
  return (
    <div className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8" style={{
      backgroundImage: "url('/bg4.jpg')", color: "black", fontFamily: "Georgia, serif",
    }}>
      <div className="md:w-1/3 flex justify-center items-start">
        <img
          src="/slotkin.jpg"
          alt="Elissa Slotkin"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Elissa Slotkin</h1>
        <p className="italic mb-4">"Leadership means putting country above politics and focusing on results."</p>
        <p className="mb-4">
          Born in New York in 1976, Elissa Slotkin grew up on her family farm in Holly, Michigan. She served three tours in Iraq as a CIA analyst and later worked at the Department of Defense under both Republican and Democratic administrations, focusing on counterterrorism and national security.
        </p>
        <p className="mb-4">
          Slotkin was first elected to Congress in 2018, flipping a traditionally Republican district, and gained a reputation as a centrist willing to break with party lines. In 2024, she won her U.S. Senate seat, succeeding Debbie Stabenow, emphasizing bipartisan problem-solving, strong support for veterans, and economic revitalization.
        </p>
        <p className="mb-4">
          Known for her focus on supply chain security, prescription drug costs, and water infrastructure, Slotkin has cultivated an image as a pragmatic Democrat with strong appeal to suburban and rural voters alike.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Liberal</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "50%"],
            ["Pro‑Environment", "Pro‑Industry", "45%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "50%"],
            ["Populist", "Establishment", "55%"],
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
              <li>Flipped MI-8 district in 2018, emphasizing bipartisan solutions</li>
              <li>Advanced water safety and PFAS contamination cleanup legislation</li>
              <li>Championed lower prescription drug prices and rural healthcare funding</li>
              <li>Strengthened supply chain security and domestic manufacturing incentives</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by progressives for supporting some defense spending increases</li>
              <li>Faced backlash from conservatives over impeachment vote against Trump</li>
              <li>Questioned for moderate stances on Green New Deal and energy transition pace</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2024", image: "/michiganLeanD.png", margin: "D +0.34%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Slotkin ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
