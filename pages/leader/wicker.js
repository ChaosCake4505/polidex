export default function WickerPage() {
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
          src="/Rwicker.jpg"
          alt="Roger Wicker"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Roger Wicker</h1>
        <p className="italic mb-4">
          "Strong defense, strong economy, strong Mississippi."
        </p>

        <p className="mb-4">
          Roger Wicker has served in the U.S. Senate since 2007 and previously spent over a decade in the House. He focuses on military policy, transportation, and rural development.
        </p>
        <p className="mb-4">
          A strong advocate for defense spending, infrastructure, and veterans' issues, he also champions rural broadband access.
        </p>
        <p className="mb-4">
          Wicker is a reliable conservative voice who occasionally collaborates on bipartisan infrastructure and tech initiatives.
        </p>

        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "90%"],
            ["Pro‑Environment", "Pro‑Industry", "88%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "93%"],
            ["Populist", "Establishment", "80%"],
            ["Dovish", "Hawkish", "85%"],
          ].map(([leftLabel, rightLabel, position], i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span>{leftLabel}</span>
                <span>{rightLabel}</span>
              </div>
              <div className="relative h-4 rounded-full" style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}>
                <div className="absolute top-[-10px]" style={{ left: position, transform: "translateX(-50%)" }}>
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
              <li>Secured billions for military infrastructure and shipbuilding</li>
              <li>Expanded rural broadband across Mississippi</li>
              <li>Advocated for veteran healthcare access and benefits</li>
              <li>Led federal funding for highway and bridge projects</li>
              <li>Supported tax relief and regulatory reform</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for backing large defense budgets</li>
              <li>Perceived as establishment-aligned by populist conservatives</li>
              <li>Occasionally broke from party on some healthcare issues</li>
              <li>Debated for supporting bipartisan tech legislation</li>
              <li>Accused of favoring urban areas over rural communities</li>
            </ul>
          </div>
        </div>

        {/* Updated electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2012", image: "/mississippiR.png", margin: "R +16.4%" },
            { year: "2018", image: "/mississippiR.png", margin: "R +19.1%" },
            { year: "2024", image: "/mississippiR.png", margin: "R +25.6%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Wicker ${elect.year}`}
                className="max-w-[150px] object-contain"
              />
              <p className="mt-2 text-sm">{elect.year}: Margin {elect.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
