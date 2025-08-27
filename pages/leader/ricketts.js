export default function RickettsPage() {
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
          src="/ricketts.jpg"
          alt="Pete Ricketts"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Pete Ricketts</h1>
        <p className="italic mb-4">
          "Government should be limited, taxes low, and freedom protected for every American."
        </p>

        <p className="mb-4">
          Pete Ricketts has served as a U.S. Senator from Nebraska since 2023 after being appointed to fill a vacancy and later winning election. Prior to his Senate role, he was Nebraska’s governor from 2015 to 2023, known for his strong fiscal conservatism and commitment to low-tax, pro-business policies.
        </p>
        <p className="mb-4">
          As governor, Ricketts prioritized tax cuts, opposed Medicaid expansion initially, and supported agricultural and rural development. In the Senate, he has continued to focus on reducing federal spending, strengthening border security, and opposing large-scale federal regulations.
        </p>
        <p className="mb-4">
          Ricketts is viewed as a solid conservative voice, emphasizing traditional values and economic freedom.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "90%"],
            ["Pro-Environment", "Pro-Industry", "85%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
            ["Populist", "Establishment", "60%"],
            ["Dovish", "Hawkish", "75%"],
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
              <li>Implemented significant state tax cuts as governor</li>
              <li>Promoted agricultural and rural economic development</li>
              <li>Advanced workforce training initiatives in Nebraska</li>
              <li>Strengthened public safety and law enforcement support</li>
              <li>Advocated for energy independence and pipeline projects</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for opposing Medicaid expansion initially</li>
              <li>Faced pushback over handling of pandemic policies</li>
              <li>Opposed federal environmental regulations strongly</li>
              <li>Criticism from Democrats on immigration stance</li>
              <li>Seen as prioritizing business interests over social services</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2024", image: "/nebraska.png", margin: "R +25%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Ricketts ${elect.year}`}
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
