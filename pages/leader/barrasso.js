import Header from "../../components/header";

export default function BarrassoPage() {
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
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/barrasso.jpg"
              alt="John Barrasso"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator John Barrasso</h1>
          <p className="italic mb-4">
            "Wyoming’s energy, agriculture, and people are our greatest strengths — and I’ll always fight to protect them."
          </p>

          <p className="mb-4">
            Senator John Barrasso has served in the U.S. Senate since 2007, becoming a prominent Republican leader on energy, healthcare, and infrastructure issues. A staunch defender of Wyoming's fossil fuel industry, Barrasso has opposed federal environmental regulations that he argues harm state economies.
          </p>
          <p className="mb-4">
            As a physician, Barrasso has been deeply involved in health policy, opposing the Affordable Care Act and advocating for market-driven reforms. He also emphasizes national security and strong defense spending.
          </p>
          <p className="mb-4">
            While popular in Wyoming, Barrasso has sometimes been criticized nationally for resisting bipartisan climate and healthcare initiatives.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "95%"],
              ["Pro-Environment", "Pro-Industry", "95%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "98%"],
              ["Populist", "Establishment", "70%"],
              ["Dovish", "Hawkish", "80%"],
            ].map(([L, R, pos], index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span>
                  <span>{R}</span>
                </div>
                <div
                  className="relative h-4 rounded-full"
                  style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}
                >
                  <div
                    className="absolute top-[-10px]"
                    style={{ left: pos, transform: "translateX(-50%)" }}
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
                <li>Championed support for Wyoming’s energy sector</li>
                <li>Led efforts to reduce federal environmental regulations</li>
                <li>Advocated for market-driven healthcare reforms</li>
                <li>Strengthened rural infrastructure and water projects</li>
                <li>Promoted strong national defense and security policies</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for opposing bipartisan climate initiatives</li>
                <li>Faced pushback on healthcare repeal stances</li>
                <li>Concerns over close ties with energy industry donors</li>
                <li>Debates on approach to federal budget negotiations</li>
                <li>Resistance to certain bipartisan infrastructure provisions</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2012", image: "/wyoming.png", margin: "R +53%" },
              { year: "2018", image: "/wyoming.png", margin: "R +37%" },
              { year: "2024", image: "/wyoming.png", margin: "R +50.99%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Barrasso ${elect.year}`}
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
