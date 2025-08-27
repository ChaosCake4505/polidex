export default function WhitehousePage() {
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
          src="/whitehouse.jpg"
          alt="Sheldon Whitehouse"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Sheldon Whitehouse</h1>
        <p className="italic mb-4">
          "We must stand up to corporate polluters, strengthen democracy, and deliver real climate action for future generations."
        </p>

        <p className="mb-4">
          Born October 20, 1955, in New York City, Whitehouse graduated from Yale University and the University of Virginia School of Law. He served as U.S. Attorney for Rhode Island and as the state Attorney General before being elected to the U.S. Senate in 2006.
        </p>
        <p className="mb-4">
          Known for his outspoken advocacy on climate change, campaign finance reform, and judicial ethics, Whitehouse has built a national profile as a progressive voice within the Senate. He has been re-elected multiple times, including a strong win in 2018 by over 23 points.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "28%"],
            ["Pro‑Environment", "Pro‑Industry", "30%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "38%"],
            ["Populist", "Establishment", "55%"],
            ["Dovish", "Hawkish", "48%"],
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
              <li>Leader in Senate climate policy and coastal resilience funding</li>
              <li>Advocated for Supreme Court ethics and transparency reforms</li>
              <li>Championed campaign finance reform and anti-dark money initiatives</li>
              <li>Supported healthcare expansion and environmental justice measures</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for past ties to an exclusive social club lacking diversity</li>
              <li>Faced pushback for sharp rhetoric against certain business interests</li>
              <li>Debated among moderates for his aggressive climate oversight tactics</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2006", image: "/rhodeislandlikelyd.png", margin: "D +6%" },
            { year: "2012", image: "/rhode island.png", margin: "D +30%" },
            { year: "2018", image: "/rhode island.png", margin: "D +23%" },
            { year: "2024", image: "/rhode island.png", margin: "D +20%" },

          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Whitehouse ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
