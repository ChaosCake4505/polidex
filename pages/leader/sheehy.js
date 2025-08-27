export default function SheehyPage() {
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
          src="/sheehy.jpg"
          alt="Tim Sheehy"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Tim Sheehy</h1>
        <p className="italic mb-4">
          "We need bold leaders who put country above politics and service above self-interest."
        </p>

        <p className="mb-4">
          Tim Sheehy, elected to the U.S. Senate in 2024, is a businessman and combat veteran who emphasizes conservative values, national security, and economic growth. Sheehy has focused on supporting Montana's energy and agricultural sectors while advocating for reduced federal regulation and strong border security.
        </p>
        <p className="mb-4">
          A newcomer to politics, Sheehy built his campaign on an outsider message, promising to bring business efficiency and military discipline to Washington. His positions prioritize veterans' services, entrepreneurship, and rural development.
        </p>
        <p className="mb-4">
          While praised for his leadership background, Sheehy has faced criticism for his stances on environmental issues and alignment with national conservative priorities.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "90%"],
            ["Pro-Environment", "Pro-Industry", "95%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
            ["Populist", "Establishment", "60%"],
            ["Dovish", "Hawkish", "80%"],
          ].map(([leftLabel, rightLabel, position], index) => (
            <div key={index}>
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
              <li>Founder and CEO of successful aviation business</li>
              <li>Combat veteran and advocate for veteran services</li>
              <li>Championed rural infrastructure development</li>
              <li>Supported tax reform and deregulation efforts</li>
              <li>Promoted job creation in energy and agriculture</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for strong anti-regulation environmental stance</li>
              <li>Debates on balancing business interests with conservation</li>
              <li>Concerns about ties to national conservative networks</li>
              <li>Opposition to certain bipartisan immigration proposals</li>
              <li>Pushback on healthcare reform positions</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2024", image: "/montanaLikely.png", margin: "R +7.14%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Sheehy ${elect.year}`}
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
