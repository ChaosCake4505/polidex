export default function McConnellPage() {
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
          src="/mcconnell.jpg"
          alt="Mitch McConnell"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Mitch McConnell</h1>
        <p className="italic mb-4">
          "My goal has always been to make America stronger and preserve conservative values for future generations."
        </p>
        <p className="mb-4">
          Born in Sheffield, Alabama, in 1942 and raised in Louisville, Kentucky, Mitch McConnell earned his B.A. from the University of Louisville and a J.D. from the University of Kentucky College of Law.
        </p>
        <p className="mb-4">
          McConnell began his political career as a legislative assistant in Washington and later served as Jefferson County Judge/Executive. Elected to the U.S. Senate in 1984, he became the longest-serving Senate Republican leader in history.
        </p>
        <p className="mb-4">
          Known for his strategic leadership and mastery of Senate rules, McConnell has played a central role in shaping the federal judiciary, tax policy, and blocking major Democratic initiatives.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "95%"],
            ["Pro‑Environment", "Pro‑Industry", "90%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
            ["Populist", "Establishment", "20%"],
            ["Dovish", "Hawkish", "70%"],
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
              <li>Longest-serving Senate Republican leader in U.S. history</li>
              <li>Instrumental in confirming three Supreme Court justices during the Trump administration</li>
              <li>Advocated major tax cuts and deregulation policies</li>
              <li>Successfully blocked or reshaped significant Democratic legislation</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for obstructing bipartisan legislation and prioritizing judicial appointments</li>
              <li>Blocked a Supreme Court nomination in 2016, leading to accusations of hypocrisy in later confirmations</li>
              <li>Seen by some as enabling partisan gridlock and undermining Senate norms</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2008", image: "/kentuckyLikelyR.png", margin: "R +5.94%" },
            { year: "2014", image: "/kentuckyR.png", margin: "R +15%" },
            { year: "2020", image: "/kentuckyR.png", margin: "R +20%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`McConnell ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
