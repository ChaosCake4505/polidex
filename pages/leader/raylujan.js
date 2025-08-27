export default function RayLujanPage() {
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
          src="/raylujan.jpg"
          alt="Ben Ray Luján"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Ben Ray Luján</h1>
        <p className="italic mb-4">
          "We must build an economy that works for everyone, not just those at the top."
        </p>

        <p className="mb-4">
          Ben Ray Luján has served New Mexico in the U.S. Senate since 2021, after multiple terms in the U.S. House and as a member of state government. Known for his advocacy on healthcare, broadband expansion, and climate change, Luján has focused on policies aimed at reducing inequality and supporting rural communities.
        </p>
        <p className="mb-4">
          In the Senate, he has championed investments in renewable energy, healthcare affordability, and infrastructure improvements. His leadership in expanding internet access has been critical for New Mexico’s rural areas.
        </p>
        <p className="mb-4">
          Luján's approach aligns with progressive values while emphasizing practical solutions to uplift working families and promote equitable economic development.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "20%"],
            ["Pro-Environment", "Pro-Industry", "20%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "30%"],
            ["Populist", "Establishment", "35%"],
            ["Dovish", "Hawkish", "25%"],
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
              <li>Expanded broadband internet to rural communities</li>
              <li>Strengthened renewable energy policies in New Mexico</li>
              <li>Improved healthcare coverage and affordability</li>
              <li>Secured investments for tribal and indigenous programs</li>
              <li>Championed mental health and opioid crisis initiatives</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticism for close ties to Democratic leadership</li>
              <li>Pushback on support for tax increases to fund programs</li>
              <li>Concerns from moderate voters over progressive policies</li>
              <li>Debates on balancing energy production and climate goals</li>
              <li>Criticized for prioritizing national issues over local needs</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2020", image: "/new mexicoLikelyD.png", margin: "D +5.9%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Luján ${elect.year}`}
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
