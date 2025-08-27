export default function WydenPage() {
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
          src="/wyden.jpeg"
          alt="Ron Wyden"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Ron Wyden</h1>
        <p className="italic mb-4">
          "I don't care who you love. If you love this country enough to risk your life for it, you shouldn't have to hide who you are."
        </p>

        <p className="mb-4">
          Senator Ron Wyden has served Oregon in the U.S. Senate since 1996, known for his strong
          advocacy on privacy rights, healthcare reform, and environmental protection...
        </p>
        <p className="mb-4">
          Wyden has been a vocal critic of mass surveillance programs and has championed consumer
          privacy protections. He is also known for advancing progressive tax policies and expanding
          access to affordable healthcare.
        </p>
        <p className="mb-4">
          With a reputation for bipartisan cooperation when necessary, Wyden continues to be a
          prominent voice for civil liberties and economic fairness on the national stage.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "15%"],
            ["Pro-Environment", "Pro-Industry", "10%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "20%"],
            ["Populist", "Establishment", "40%"],
            ["Dovish", "Hawkish", "25%"],
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
              <li>Champion for digital privacy and internet freedom</li>
              <li>Advanced progressive tax reform proposals</li>
              <li>Expanded access to affordable healthcare</li>
              <li>Strong supporter of environmental protections</li>
              <li>Secured key infrastructure investments for Oregon</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for perceived compromises on surveillance bills</li>
              <li>Pushback from progressive activists on some trade positions</li>
              <li>Accused of not pushing hard enough on single-payer healthcare</li>
              <li>Questioned for relationships with tech industry donors</li>
              <li>Occasional criticism for bipartisan tax negotiations</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2022", margin: "+14.9%", image: "/Oregon.png" },
            { year: "2016", margin: "+23.3%", image: "/Oregon.png" },
            { year: "2010", margin: "+18.9%", image: "/Oregon.png" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Wyden ${elect.year}`}
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
