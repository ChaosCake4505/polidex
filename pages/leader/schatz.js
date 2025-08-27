export default function SchatzPage() {
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
          src="/schatz.jpg"
          alt="Brian Schatz"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Brian Schatz</h1>
        <p className="italic mb-4">
          "We have a responsibility to act on climate change now and build a better future for our children."
        </p>

        <p className="mb-4">
          Senator Brian Schatz has served Hawaii in the U.S. Senate since 2012 after being appointed to fill a vacancy. Known for his leadership on climate change, Schatz has been a strong advocate for environmental protection, healthcare access, and expanding broadband infrastructure.
        </p>
        <p className="mb-4">
          Schatz previously served as Lieutenant Governor of Hawaii and has consistently championed progressive priorities, earning him widespread support across the state.
        </p>
        <p className="mb-4">
          He is widely recognized as a forward-thinking leader focused on equity, sustainability, and modernizing America's infrastructure and economy.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "10%"],
            ["Pro-Environment", "Pro-Industry", "5%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "18%"],
            ["Populist", "Establishment", "35%"],
            ["Dovish", "Hawkish", "20%"],
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
              <li>Championed major climate legislation</li>
              <li>Expanded federal broadband infrastructure support</li>
              <li>Promoted healthcare access and affordability</li>
              <li>Strengthened environmental conservation programs</li>
              <li>Increased federal support for Hawaii’s economy</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticism from some business groups over environmental regulations</li>
              <li>Accused by conservatives of fiscal overreach</li>
              <li>Pushback on certain progressive tax proposals</li>
              <li>Concerns over perceived alignment with national Democratic leadership</li>
              <li>Occasional friction with local infrastructure stakeholders</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2014", margin: "+41.6%", image: "/hawaii.png" },
            { year: "2016", margin: "+51.8%", image: "/hawaii.png" },
            { year: "2022", margin: "+45.2%", image: "/hawaii.png" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Schatz ${elect.year}`}
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
