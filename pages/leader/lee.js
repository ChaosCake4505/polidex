export default function LeePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8"
      style={{
        backgroundImage: "url('/bg4.jpg')",
        color: "black",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* Image on the left */}
      <div className="md:w-1/3 flex justify-center items-start">
        <img
          src="/lee.jpg"
          alt="Mike Lee"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Mike Lee</h1>
        <p className="italic mb-4">
          "The Constitution is not a living document. It’s a legal contract meant to be strictly interpreted and enforced."
        </p>

        <p className="mb-4">
          Senator Mike Lee, first elected in 2010, is known as one of the most prominent constitutional conservatives in the U.S. Senate. A strong advocate of limited government, strict constitutional interpretation, and fiscal conservatism, Lee has shaped the Senate's conservative agenda for over a decade.
        </p>
        <p className="mb-4">
          He has been a leading voice on issues related to federal spending, privacy rights, and decentralization of federal power. Lee also supports strong Second Amendment protections and frequently emphasizes religious liberty.
        </p>
        <p className="mb-4">
          While often aligning with the GOP’s conservative wing, Lee has occasionally broken with party leadership on civil liberties and executive overreach, maintaining an independent-minded reputation.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "90%"],
            ["Pro-Environment", "Pro-Industry", "85%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
            ["Populist", "Establishment", "65%"],
            ["Dovish", "Hawkish", "70%"],
          ].map(([leftLabel, rightLabel, position], index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span>{leftLabel}</span>
                <span>{rightLabel}</span>
              </div>
              <div
                className="relative h-4 rounded-full"
                style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}
              >
                <div
                  className="absolute top-[-10px]"
                  style={{ left: position, transform: "translateX(-50%)" }}
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
              <li>Championed constitutional and civil liberty protections</li>
              <li>Advocated for balanced budgets and reduced federal spending</li>
              <li>Strengthened religious freedom protections nationwide</li>
              <li>Led bipartisan privacy and surveillance reform efforts</li>
              <li>Promoted decentralization and states' rights policies</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for strong opposition to federal aid programs</li>
              <li>Debates on his stance against certain environmental regulations</li>
              <li>Pushback on his support for strict immigration enforcement</li>
              <li>Allegations of partisan obstructionism during negotiations</li>
              <li>Criticism for breaking with party on surveillance and defense bills</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2016", image: "/utah.png", margin: "R +40%" },
            { year: "2022", image: "/utahLikely.png", margin: "R +11%" },

          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Lee ${elect.year}`}
                className="max-w-[150px] object-contain"
              />
              <p className="mt-2 text-sm">{elect.year} Margin {elect.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
