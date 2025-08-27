export default function ScottPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8"
      style={{
        backgroundImage: "url('/bg4.jpg')",
        color: "black",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* Image on the left */}
      <div className="md:w-1/3 flex justify-center items-start">
        <img
          src="/scott.jpg"
          alt="Rick Scott"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* Content on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Rick Scott</h1>
        <p className="italic mb-4">
          "Government should work for the people, not the other way around."
        </p>

        <p className="mb-4">
          Rick Scott, former Governor of Florida (2011–2019), has served in the U.S. Senate since 2019 as a fiscal conservative.
        </p>
        <p className="mb-4">
          In the Senate, he launched his “Rescue America” plan promoting budget constraints, charitable tax reform, and veterans' priorities.
        </p>
        <p className="mb-4">
          He won re-election in 2024 by his largest margin yet, reflecting his growing statewide appeal.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "94%"],
            ["Pro‑Environment", "Pro‑Industry", "85%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "97%"],
            ["Populist", "Establishment", "70%"],
            ["Dovish", "Hawkish", "80%"],
          ].map(([leftLabel, rightLabel, position], i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span>{leftLabel}</span>
                <span>{rightLabel}</span>
              </div>
              <div
                className="relative h-4 rounded-full"
                style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}
              >
                <div
                  className="absolute top-[-10px]"
                  style={{ left: position, transform: "translateX(-50%)" }}
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
              <li>Advanced the “Rescue America” fiscal reform plan</li>
              <li>Secured disaster aid and veteran funding in Congress</li>
              <li>Supported key infrastructure legislation</li>
              <li>Promoted government transparency and accountability bills</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Accused of Medicare fraud during healthcare tenure</li>
              <li>Criticized for proposed deep cuts to federal programs</li>
              <li>Clashed with GOP moderates over spending priorities</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2018", image: "/floridaLeanR.png", margin: "R +0.1%" },
            { year: "2024", image: "/floridaLikelyR.png", margin: "R +12.8%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Scott ${elect.year}`}
                className="max-w-[150px] object-contain"
              />
              <p className="mt-2 text-sm">
                {elect.year} Margin {elect.margin}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
