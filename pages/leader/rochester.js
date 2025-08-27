export default function BluntRochesterPage() {
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
          src="/rochester.jpg"
          alt="Rochester"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Lisa Blunt Rochester</h1>
        <p className="italic mb-4">
          "We must fight for a Delaware and a nation where no one is left out and everyone has a chance to thrive."
        </p>

        <p className="mb-4">
          Born February 10, 1962, in Philadelphia, Pennsylvania, Blunt Rochester graduated from the University of Delaware and later earned a master’s from the University of Delaware’s School of Public Policy. She held various roles in state government and as Delaware’s Secretary of Labor before being elected to the U.S. House in 2016.
        </p>
        <p className="mb-4">
          In 2024, she became the first woman and first Black person elected to represent Delaware in the U.S. Senate. Her priorities include healthcare equity, environmental justice, voting rights, and economic opportunity for underserved communities.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "30%"],
            ["Pro‑Environment", "Pro‑Industry", "35%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "40%"],
            ["Populist", "Establishment", "55%"],
            ["Dovish", "Hawkish", "45%"],
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
              <li>First woman and first Black senator from Delaware</li>
              <li>Expanded healthcare coverage and addressed maternal health disparities</li>
              <li>Advanced environmental justice and clean water initiatives</li>
              <li>Strengthened protections for voting rights and democratic participation</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by moderates for supporting progressive budget expansions</li>
              <li>Faced pushback from industry groups over environmental policy stances</li>
              <li>Scrutinized for close alignment with national progressive leadership</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2024", image: "/delaware.png", margin: "D +21%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Rochester ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
