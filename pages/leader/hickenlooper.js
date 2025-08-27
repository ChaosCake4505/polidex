export default function HickenlooperPage() {
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
          src="/hickenlooper.jpeg"
          alt="John Hickenlooper"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator John Hickenlooper</h1>
        <p className="italic mb-4">
          "We can bring people together to create pragmatic solutions that work for everyone."
        </p>

        <p className="mb-4">
          John Hickenlooper has served as a U.S. Senator from Colorado since 2021, following his two terms as governor and tenure as mayor of Denver. Known for his pragmatic style and focus on bipartisanship, Hickenlooper emphasizes economic development and environmental stewardship.
        </p>
        <p className="mb-4">
          As governor, he expanded Medicaid, promoted renewable energy, and supported major infrastructure improvements. In the Senate, he has continued to prioritize climate policy, job growth, and affordable healthcare.
        </p>
        <p className="mb-4">
          Hickenlooper is viewed as a moderate Democrat with a strong emphasis on compromise and coalition-building.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "35%"],
            ["Pro-Environment", "Pro-Industry", "30%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "45%"],
            ["Populist", "Establishment", "55%"],
            ["Dovish", "Hawkish", "30%"],
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
              <li>Expanded Medicaid coverage in Colorado</li>
              <li>Promoted renewable energy and green jobs</li>
              <li>Led major infrastructure and transit projects</li>
              <li>Supported bipartisan criminal justice reform</li>
              <li>Improved economic development initiatives statewide</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for moderate stances on climate policy</li>
              <li>Faced ethics complaints over travel expenses as governor</li>
              <li>Debated positions on fracking and oil industry ties</li>
              <li>Concerns from progressives on healthcare positions</li>
              <li>Perceived reluctance to support more aggressive tax reforms</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2010", image: "/colorado.png", margin: "D +15.0%" },
            { year: "2014", image: "/coloradoLeanD.png", margin: "D +3.3%" },
            { year: "2020", image: "/coloradoLikelyD.png", margin: "D +9.3%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Hickenlooper ${elect.year}`}
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
