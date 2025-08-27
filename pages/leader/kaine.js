export default function KainePage() {
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
          src="/kaine.jpg"
          alt="Tim Kaine"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Tim Kaine</h1>
        <p className="italic mb-4">
          "Service to community and country must always come before party or politics."
        </p>

        <p className="mb-4">
          Born February 26, 1958, in St. Paul, Minnesota, Kaine attended the University of Missouri and earned his J.D. from Harvard Law School. He practiced civil rights law before entering politics, serving as Mayor of Richmond (1998–2001), Lieutenant Governor of Virginia (2002–2006), and Governor of Virginia (2006–2010).
        </p>
        <p className="mb-4">
          Elected to the U.S. Senate in 2012, Kaine is known for his emphasis on bipartisanship, military families, and foreign policy. In 2016, he was Hillary Clinton's vice presidential running mate, raising his national profile.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "40%"],
            ["Pro‑Environment", "Pro‑Industry", "45%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "55%"],
            ["Populist", "Establishment", "65%"],
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
              <li>Key voice on Armed Services and Foreign Relations Committees</li>
              <li>Advocated for veterans' healthcare and benefits expansion</li>
              <li>Supported bipartisan infrastructure and disaster relief bills</li>
              <li>Advanced voting rights and civil rights protections throughout his career</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by progressives for moderate positions on trade and defense spending</li>
              <li>Faced backlash for 2016 campaign performance as VP nominee</li>
              <li>Scrutinized for ties to corporate donors despite his focus on ethics reform</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2012", image: "/virginiaLikelyD.png", margin: "D +6%" },
            { year: "2018", image: "/virginiaLikelyD.png", margin: "D +16%" },
                        { year: "2018", image: "/virginiaLikelyD.png", margin: "D +8.9%" },

          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Kaine ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
