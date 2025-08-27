export default function KellyPage() {
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
          src="/kelly.jpg"
          alt="Mark Kelly"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Mark Kelly</h1>
        <p className="italic mb-4">
          "Public service is about putting country over politics and doing the right thing for Arizona families."
        </p>

        <p className="mb-4">
          Mark Kelly, a retired U.S. Navy captain and former astronaut, was elected to the U.S. Senate in 2020 and re-elected in 2022. His campaigns focused on healthcare, veterans' support, and commonsense gun safety measures.
        </p>
        <p className="mb-4">
          Known for his pragmatic, moderate style, Kelly has prioritized bipartisan solutions, infrastructure investment, and water security initiatives critical to Arizona's future.
        </p>
        <p className="mb-4">
          While praised for his independence and service background, he has also faced criticism from progressives on certain defense and environmental stances.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "45%"],
            ["Pro-Environment", "Pro-Industry", "50%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "50%"],
            ["Populist", "Establishment", "55%"],
            ["Dovish", "Hawkish", "60%"],
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
              <li>Secured funding for Arizona water and drought initiatives</li>
              <li>Expanded veterans’ healthcare and mental health support</li>
              <li>Supported bipartisan infrastructure legislation</li>
              <li>Championed research and tech industry development</li>
              <li>Advocated for commonsense gun safety reforms</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticism from progressives on defense spending votes</li>
              <li>Pushback over moderate positions on climate legislation</li>
              <li>Debates on border security funding compromises</li>
              <li>Concerns over ties with certain industry donors</li>
              <li>Mixed reactions to bipartisan deals on fiscal policy</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2020", image: "/arizonaLeanD.png", margin: "D +2.4%" },
            { year: "2022", image: "/arizonaLeanD.png", margin: "D +4.9%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Kelly ${elect.year}`}
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
