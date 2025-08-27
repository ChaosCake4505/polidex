import Header from "../../components/header";

export default function BlumenthalPage() {
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
              src="/blumenthal.jpg"
              alt="Richard Blumenthal"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Richard Blumenthal</h1>
          <p className="italic mb-4">
            "I will always fight for Connecticut's families, protect consumers, and hold powerful interests accountable."
          </p>

          <p className="mb-4">
            Born February 13, 1946, in New York City, Blumenthal graduated from Harvard College and Yale Law School, where he was editor of the Yale Law Journal. He served in the U.S. Marine Corps Reserve and began his political career as a state legislator before becoming Connecticut's Attorney General, a role he held for 20 years.
          </p>
          <p className="mb-4">
            Blumenthal was elected to the U.S. Senate in 2010 and has been re-elected twice since, including a 15-point victory in 2022. Known for his consumer protection work, aggressive oversight, and strong stance on healthcare and veterans' issues, he remains one of the Senate’s most vocal advocates for accountability.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "32%"],
              ["Pro‑Environment", "Pro‑Industry", "35%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "40%"],
              ["Populist", "Establishment", "62%"],
              ["Dovish", "Hawkish", "50%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1"><span>{L}</span><span>{R}</span></div>
                <div className="relative h-4 rounded-full" style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}>
                  <div className="absolute top-[-10px]" style={{ left: pos, transform: "translateX(-50%)" }}>
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
                <li>Advocated for stronger consumer and data privacy protections nationwide</li>
                <li>Championed veterans' healthcare improvements and mental health support</li>
                <li>Led efforts to address opioid crisis and hold pharmaceutical companies accountable</li>
                <li>Supported landmark climate and infrastructure investments</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced criticism for past statements about military service during Vietnam era</li>
                <li>Criticized by progressives for cautious approach to tech regulation enforcement</li>
                <li>Scrutinized for close ties to longstanding Connecticut political establishment</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2010", image: "/connecticutLikely.png", margin: "D +12%" },
              { year: "2016", image: "/connecticut.png", margin: "D +29%" },
              { year: "2022", image: "/connecticut.png", margin: "D +15%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Blumenthal ${e.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
