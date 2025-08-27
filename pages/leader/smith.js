export default function HydeSmithPage() {
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
          src="/hydesmith.jpg"
          alt="Cindy Hyde-Smith"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Cindy Hyde-Smith</h1>
        <p className="italic mb-4">
          "I will always protect Mississippi values and fight for our way of life."
        </p>

        <p className="mb-4">
          Cindy Hyde-Smith was appointed to the Senate in 2018 and won special and full terms thereafter. She is Mississippi's first female senator and focuses on agriculture, conservative social policies, and strong support for President Trump.
        </p>
        <p className="mb-4">
          Hyde-Smith has emphasized protecting gun rights, opposing abortion, and backing law enforcement. She has also prioritized rural development and farming policy.
        </p>
        <p className="mb-4">
          While popular among conservatives, she has faced controversies over public remarks and positions on social issues.
        </p>

        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "97%"],
            ["Pro‑Environment", "Pro‑Industry", "90%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
            ["Populist", "Establishment", "65%"],
            ["Dovish", "Hawkish", "80%"],
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
              <li>Supported major agricultural subsidies and disaster aid</li>
              <li>Strengthened protections for gun ownership</li>
              <li>Promoted rural broadband expansion</li>
              <li>Championed anti-abortion legislation</li>
              <li>Improved resources for law enforcement agencies</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for comments referencing "public hangings"</li>
              <li>Faced scrutiny for support of Confederate symbols</li>
              <li>Opposed pandemic restrictions, sparking debate</li>
              <li>Accused of limited engagement with Democratic constituencies</li>
              <li>Viewed as overly partisan by state Democrats</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2018", image: "/mississippiLikelyR.png", margin: "R +7.3%" },
            { year: "2020", image: "/mississippiR.png", margin: "R +21.5%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Hyde-Smith ${elect.year}`}
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
