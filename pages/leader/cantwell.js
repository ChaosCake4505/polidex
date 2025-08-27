import Header from "../../components/header";

export default function CantwellPage() {
  return (
    <>
      <Header />
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
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/cantwell.jpg"
              alt="Maria Cantwell"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        {/* White content box on the right */}
        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Maria Cantwell</h1>
          <p className="italic mb-4">
            "We must protect consumers, safeguard our environment, and keep our economy strong for future generations."
          </p>

          <p className="mb-4">
            Senator Maria Cantwell has represented Washington since 2001. Known for her leadership on technology, energy,
            and environmental issues, she has helped shape major legislation on broadband access, net neutrality,
            and clean energy.
          </p>
          <p className="mb-4">
            Cantwell is a strong advocate for consumer protection and environmental conservation, often leading efforts to
            combat climate change and protect public lands. She has also prioritized job creation and economic innovation.
          </p>
          <p className="mb-4">
            Her pragmatic, policy-focused approach has earned her widespread support across Washington’s diverse electorate.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "20%"],
              ["Pro-Environment", "Pro-Industry", "10%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "18%"],
              ["Populist", "Establishment", "55%"],
              ["Dovish", "Hawkish", "35%"],
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

          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Championed net neutrality protections</li>
                <li>Advanced clean energy and climate initiatives</li>
                <li>Promoted broadband access in rural areas</li>
                <li>Led efforts to protect public lands and salmon habitats</li>
                <li>Supported small business and tech sector growth</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for ties to tech industry donors</li>
                <li>Debated positions on tax incentives for corporations</li>
                <li>Faced scrutiny over moderate stances on defense bills</li>
                <li>Accused of focusing more on national than local issues</li>
                <li>Concerns over balance of environmental and economic priorities</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2012", image: "/washington.png", margin: "+20.8%" },
              { year: "2018", image: "/washington.png", margin: "+17.0%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Cantwell ${elect.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{elect.year} Margin {elect.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
