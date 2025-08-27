export default function KingPage() {
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
          src="/king.jpg"
          alt="Angus King"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Angus King</h1>
        <p className="italic mb-4">
          "I believe in putting Maine and America first — beyond party labels — by finding common ground and practical solutions."
        </p>

        <p className="mb-4">
          Born March 31, 1944, in Alexandria, Virginia, King earned his B.A. from Dartmouth College and his J.D. from the University of Virginia. He worked as an attorney and energy entrepreneur before entering politics. As an Independent, he served two terms as Maine's governor from 1995 to 2003.
        </p>
        <p className="mb-4">
          King was elected to the U.S. Senate in 2012 as an Independent, succeeding Olympia Snowe. While he caucuses with the Democrats, he maintains an independent voting record, emphasizing bipartisan cooperation on issues like energy policy, cybersecurity, and veterans' support.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Independent</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "45%"],
            ["Pro‑Environment", "Pro‑Industry", "35%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "48%"],
            ["Populist", "Establishment", "55%"],
            ["Dovish", "Hawkish", "50%"],
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
              <li>Promoted bipartisan energy policy and supported clean energy expansion</li>
              <li>Strengthened cybersecurity initiatives and election security efforts</li>
              <li>Advanced veterans' healthcare and mental health support services</li>
              <li>Worked on rural broadband access and economic development in Maine</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Faced criticism from progressives for occasionally siding with Republicans on fiscal issues</li>
              <li>Criticized for ambiguity on certain tax policy stances and regulatory measures</li>
              <li>Debated over balancing independent branding with frequent Democratic caucusing</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2012", image: "/maineking.png", margin: "I +22%" },
            { year: "2018", image: "/maineking.png", margin: "I +20%" },
            { year: "2024", image: "/maineking.png", margin: "I +18%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`King ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
