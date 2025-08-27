import Header from "../../components/header";

export default function DainesPage() {
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
              src="/daines.jpg"
              alt="Steve Daines"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Steve Daines</h1>
          <p className="italic mb-4">
            "Montana values — faith, freedom, and family — guide me every day in Washington."
          </p>

          <p className="mb-4">
            Steve Daines has represented Montana in the U.S. Senate since 2015, following a term in the U.S. House. A staunch conservative, Daines has focused on supporting Montana's energy and mining industries, cutting taxes, and protecting Second Amendment rights.
          </p>
          <p className="mb-4">
            He has been a strong advocate for reducing federal regulations and increasing access to public lands for hunting, fishing, and recreation. Daines emphasizes economic growth, entrepreneurship, and traditional Montana lifestyles.
          </p>
          <p className="mb-4">
            While popular among conservatives, Daines has faced criticism over his positions on healthcare, environmental issues, and his support of former President Trump’s agenda.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Conservative Republican</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "90%"],
              ["Pro-Environment", "Pro-Industry", "95%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
              ["Populist", "Establishment", "65%"],
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

          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Championed tax cuts and pro-business policies</li>
                <li>Supported expansion of public land access for sportsmen</li>
                <li>Advocated for energy and mining industry jobs</li>
                <li>Strengthened cybersecurity and border security efforts</li>
                <li>Promoted deregulation and economic growth initiatives</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for opposing ACA and healthcare expansions</li>
                <li>Debates on environmental deregulation impacts</li>
                <li>Close ties to large energy corporations</li>
                <li>Pushback on support for Trump policies</li>
                <li>Concerns over climate change policy positions</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2014", image: "/montana.png", margin: "R +17.8%" },
              { year: "2020", image: "/montanaLikely.png", margin: "R +10%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Daines ${elect.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{elect.year}: {elect.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
