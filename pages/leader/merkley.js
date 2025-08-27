export  default function MerkleyPage() {
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
          src="/merkley.jpg"
          alt="Jeff Merkley"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Jeff Merkley</h1>
        <p className="italic mb-4">
          "Americans have powerfully sensed that we're off track. There is a structural challenge in our economy that needs to be addressed."
        </p>

        <p className="mb-4">
          Senator Jeff Merkley has served Oregon in the U.S. Senate since 2009. Known for his bold
          progressive vision, Merkley has been a champion of climate action, affordable housing, and
          voting rights protections throughout his career.
        </p>
        <p className="mb-4">
          Prior to the Senate, Merkley was Speaker of the Oregon House of Representatives. In Washington,
          he has pushed for strong financial reforms, environmental protections, and efforts to limit
          corporate influence in politics.
        </p>
        <p className="mb-4">
          Merkley is widely viewed as one of the most progressive voices in the Senate, often leading
          efforts on key issues like filibuster reform and climate change legislation.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "8%"],
            ["Pro-Environment", "Pro-Industry", "5%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "15%"],
            ["Populist", "Establishment", "25%"],
            ["Dovish", "Hawkish", "15%"],
          ].map(([leftLabel, rightLabel, position], index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span>{leftLabel}</span>
                <span>{rightLabel}</span>
              </div>
              <div
                className="relative h-4 rounded-full"
                style={{
                  background: "linear-gradient(to right, #0047AB, #C41E3A)",
                }}
              >
                <div
                  className="absolute top-[-10px]"
                  style={{
                    left: position,
                    transform: "translateX(-50%)",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>⬆️</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements & Controversies */}
        <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Achievements</h2>
            <ul className="list-disc list-inside">
              <li>Led efforts on filibuster reform in the Senate</li>
              <li>Key architect of Wall Street financial regulations</li>
              <li>Strong advocate for affordable housing programs</li>
              <li>Advanced sweeping climate change legislation</li>
              <li>Promoted voting rights protections nationwide</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by moderates for progressive stances</li>
              <li>Faced resistance on filibuster rule changes</li>
              <li>Opposition from business groups over climate bills</li>
              <li>Criticized for limited bipartisan outreach</li>
              <li>Accused by some conservatives of excessive regulation support</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2008", margin: "+3.3%", image: "/OregonLean.png" },
            { year: "2014", margin: "+18.8%", image: "/Oregon.png" },
            { year: "2020", margin: "+19.3%", image: "/Oregon.png" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Merkley ${elect.year}`}
                className="max-w-[150px] object-contain"
              />
              <p className="mt-2 text-sm">{elect.year} Margin {elect.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
