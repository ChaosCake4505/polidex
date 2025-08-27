export default function HeinrichPage() {
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
          src="/heinrich.jpg"
          alt="Martin Heinrich"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Martin Heinrich</h1>
        <p className="italic mb-4">
          "Clean energy is the single biggest job creation opportunity of our lifetimes."
        </p>

        <p className="mb-4">
          Martin Heinrich has represented New Mexico in the U.S. Senate since 2013, after serving two terms in the U.S. House. A leading advocate for clean energy and public lands, Heinrich has worked to make New Mexico a hub for renewable energy development and conservation efforts.
        </p>
        <p className="mb-4">
          In the Senate, he has championed environmental protections, gun safety measures, and investments in science and technology education. His legislative efforts often focus on balancing economic growth with sustainability.
        </p>
        <p className="mb-4">
          Heinrich’s approach reflects New Mexico's commitment to environmental stewardship and economic diversification, resonating with both rural and urban voters.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "25%"],
            ["Pro-Environment", "Pro-Industry", "15%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "35%"],
            ["Populist", "Establishment", "40%"],
            ["Dovish", "Hawkish", "30%"],
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
              <li>Expanded federal investment in renewable energy projects</li>
              <li>Protected millions of acres of public lands</li>
              <li>Promoted STEM education and workforce training programs</li>
              <li>Advanced gun violence prevention initiatives</li>
              <li>Strengthened wildlife conservation and habitat protections</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticism over support for certain energy subsidies</li>
              <li>Pushback from oil and gas industry stakeholders</li>
              <li>Debated positions on border security funding</li>
              <li>Disagreements with moderates over defense spending levels</li>
              <li>Criticism for prioritizing environmental issues over some economic concerns</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2012", image: "/new mexicoLikelyD.png", margin: "D +5.3%" },
            { year: "2018", image: "/new mexico.png", margin: "D +23.6%" },
            { year: "2024", image: "/new mexicoLikelyD.png", margin: "D +10.12%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Heinrich ${elect.year}`}
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
