export default function WarnerPage() {
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
          src="/warner.jpg"
          alt="Mark Warner"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Mark Warner</h1>
        <p className="italic mb-4">
          "We must build a stronger, more inclusive economy that works for all Virginians."
        </p>

        <p className="mb-4">
          Born December 15, 1954, in Indianapolis, Indiana, Warner earned his B.A. from George Washington University and his J.D. from Harvard Law School. After a successful career in business and technology investments, he became Governor of Virginia (2002–2006) and was elected to the U.S. Senate in 2008.
        </p>
        <p className="mb-4">
          Warner is known as a centrist Democrat focused on bipartisan solutions, technology and cybersecurity policy, and fiscal responsibility. As Virginia's senior senator, he has played a leading role on the Senate Intelligence Committee and in economic recovery efforts.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Democrat</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "35%"],
            ["Pro‑Environment", "Pro‑Industry", "45%"],
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
              <li>Chairman of the Senate Intelligence Committee</li>
              <li>Key negotiator in COVID-19 economic relief legislation</li>
              <li>Advanced broadband access and technology workforce initiatives</li>
              <li>Promoted bipartisan budget and debt reduction efforts</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by progressives for moderate stances on healthcare and corporate taxes</li>
              <li>Faced scrutiny over private equity and tech industry investments</li>
              <li>Some viewed his bipartisan approach as compromising core Democratic priorities</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2008", image: "/virginiaLikelyD.png", margin: "D +5%" },
            { year: "2014", image: "/virginiaLeanD.png", margin: "D +0.8%" },
            { year: "2020", image: "/virginiaLikelyD.png", margin: "D +12%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Warner ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
