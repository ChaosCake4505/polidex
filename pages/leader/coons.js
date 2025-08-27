import Header from "../../components/header";

export default function CoonsPage() {
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
              src="/coons.jpg"
              alt="Chris Coons"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Chris Coons</h1>
          <p className="italic mb-4">
            "We need principled leadership that bridges divides and delivers results for every Delawarean."
          </p>

          <p className="mb-4">
            Born September 9, 1963, in Greenwich, Connecticut, Coons earned degrees from Amherst College, Yale Divinity School, and Yale Law School. He worked as an attorney and in nonprofit leadership before entering politics. He served as New Castle County Executive before being elected to the U.S. Senate in a 2010 special election to succeed Joe Biden.
          </p>
          <p className="mb-4">
            Known for his bipartisan approach, Coons focuses on judiciary issues, foreign relations, and science and technology policy. He has close ties to President Biden and often plays a bridge-building role between moderates and progressives in the Democratic caucus.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "45%"],
              ["Pro‑Environment", "Pro‑Industry", "40%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "50%"],
              ["Populist", "Establishment", "70%"],
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
                <li>Key voice on Senate Foreign Relations and Judiciary Committees</li>
                <li>Advanced bipartisan legislation on science, research, and innovation funding</li>
                <li>Strong advocate for judicial independence and voting rights protections</li>
                <li>Worked to expand workforce training and STEM education programs</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized by progressives for perceived moderation on tax and healthcare policy</li>
                <li>Faced scrutiny over close relationships with corporate and finance donors</li>
                <li>Occasional tensions with party left wing on foreign military aid votes</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2010", image: "/delaware.png", margin: "D +17%" },
              { year: "2014", image: "/delawareLikely.png", margin: "D +13%" },
              { year: "2020", image: "/delaware.png", margin: "D +19%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Coons ${e.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
