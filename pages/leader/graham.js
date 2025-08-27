export default function GrahamPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8"
      style={{
        backgroundImage: "url('/bg4.jpg')",
        color: "black",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* Left image */}
      <div className="md:w-1/3 flex justify-center items-start">
        <img
          src="/graham.avif"
          alt="Lindsey Graham"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* Right content */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Lindsey Graham</h1>
        <p className="italic mb-4">
          "Strong defense, strong borders, and strong values make America exceptional."
        </p>

        <p className="mb-4">
          Lindsey Graham has served as U.S. Senator since 2003 and is a key figure in defense and judiciary policy debates. Known for his close alignment with conservative leadership, he’s also made bipartisan efforts on immigration and judiciary reform.
        </p>
        <p className="mb-4">
          Graham chaired the Senate Judiciary Committee and played a central role in Supreme Court confirmations.
        </p>

        {/* Ideological scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "93%"],
            ["Pro‑Environment", "Pro‑Industry", "80%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "90%"],
            ["Populist", "Establishment", "60%"],
            ["Dovish", "Hawkish", "90%"],
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

        {/* Achievements & Controversies */}
        <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Achievements</h2>
            <ul className="list-disc list-inside">
              <li>Key role in Supreme Court justice confirmations</li>
              <li>Supported major military funding and defense programs</li>
              <li>Advanced bipartisan immigration reform negotiations</li>
              <li>Led foreign policy oversight on defense committees</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for shifting alliances with Trump and other leaders</li>
              <li>Faced backlash over support for military interventions abroad</li>
              <li>Criticized by both conservatives and progressives for inconsistent stances</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2014", image: "/southcarolina.png", margin: "R +15.5%" },
            { year: "2020", image: "/southcarolinaLikely.png", margin: "R +10.3%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Graham ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
