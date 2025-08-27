export default function WelchPage() {
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
          src="/welch.jpg"
          alt="Peter Welch"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Peter Welch</h1>
        <p className="italic mb-4">
          "We must fight for working families, protect our democracy, and make sure every voice is heard in Washington."
        </p>

        <p className="mb-4">
          Born May 2, 1947, in Springfield, Massachusetts, Welch earned his undergraduate and law degrees from the University of California, Berkeley. He moved to Vermont in the 1970s, where he worked as an attorney and community organizer before serving in the Vermont Senate, eventually becoming its president pro tempore.
        </p>
        <p className="mb-4">
          Welch was elected to the U.S. House in 2006, where he served until 2023. He won election to the U.S. Senate in 2022 to succeed retiring Senator Patrick Leahy, continuing Vermont’s strong progressive tradition. In Congress, he has focused on climate change, healthcare access, and strengthening democratic institutions.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "30%"],
            ["Pro‑Environment", "Pro‑Industry", "25%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "35%"],
            ["Populist", "Establishment", "50%"],
            ["Dovish", "Hawkish", "45%"],
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
              <li>Secured funding for clean energy projects and rural broadband expansion</li>
              <li>Advocated for lower prescription drug costs and expanded healthcare access</li>
              <li>Supported voting rights protections and campaign finance reform</li>
              <li>Worked to strengthen mental health services and veteran support programs</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by some progressives for a cautious approach to large-scale spending proposals</li>
              <li>Faced pushback for bipartisan compromises on certain energy and infrastructure bills</li>
              <li>Debated for balancing Vermont’s independent spirit with national party priorities</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2022", image: "/vermontSolidD.png", margin: "D +40%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Welch ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
