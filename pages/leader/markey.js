export default function MarkeyPage() {
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
          src="/markey.jpg"
          alt="Ed Markey"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Ed Markey</h1>
        <p className="italic mb-4">
          "A livable future, climate justice, and an economy that works for everyone — that’s what we’re fighting for."
        </p>

        <p className="mb-4">
          Born July 11, 1946, in Malden, Massachusetts, Markey graduated from Boston College and Boston College Law School. He served in the Massachusetts House of Representatives before winning a U.S. House seat in 1976, where he served for 37 years and became known for his work on telecommunications, energy policy, and nuclear non-proliferation.
        </p>
        <p className="mb-4">
          Elected to the U.S. Senate in a 2013 special election, Markey was re-elected in 2014 and again in 2020, when he defeated a primary challenge from Joe Kennedy III. He is widely recognized as a leader on climate policy, co-authoring the Green New Deal resolution and championing aggressive environmental and tech regulations.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "22%"],
            ["Pro‑Environment", "Pro‑Industry", "25%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "35%"],
            ["Populist", "Establishment", "55%"],
            ["Dovish", "Hawkish", "48%"],
          ].map(([L, R, pos], i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span>{L}</span><span>{R}</span>
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
              <li>Co-authored the Green New Deal resolution with Rep. Alexandria Ocasio-Cortez</li>
              <li>Advanced landmark clean energy and tech regulation legislation during House tenure</li>
              <li>Longtime advocate for net neutrality and consumer protections</li>
              <li>Strengthened nuclear safety and environmental oversight standards</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by moderates for aggressive climate policy stances seen as costly</li>
              <li>Faced skepticism during 2020 primary about legislative accomplishments depth</li>
              <li>Debated for maintaining close ties to longtime Massachusetts political figures despite progressive brand</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2014", image: "/massachusetts.png", margin: "D +24%" },
            { year: "2020", image: "/massachusetts.png", margin: "D +34%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Markey ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
