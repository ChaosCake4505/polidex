export default function TillisPage() {
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
          src="/tillis.jpg"
          alt="Thom Tillis"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* Content on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Thom Tillis</h1>
        <p className="italic mb-4">
          "We owe it to North Carolinians to protect their healthcare and livelihoods."
        </p>
        <p className="mb-4">
          Thom Tillis has served in the U.S. Senate since 2015. He focuses on fiscal responsibility, defense, and bipartisan solutions. In mid-2025, he announced he will not seek reelection in 2026 citing shifting policy priorities.
        </p>
        <p className="mb-4">
          He has served on Senate Judiciary and Commerce Committees, and sponsored measures on red-flag laws, workforce development, and veterans’ affairs.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "60%"],
            ["Pro‑Environment", "Pro‑Industry", "70%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "80%"],
            ["Populist", "Establishment", "50%"],
            ["Dovish", "Hawkish", "60%"],
          ].map(([left, right, pos], i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span>{left}</span><span>{right}</span>
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
              <li>Co-sponsored red-flag legislation as part of the Safer Communities Act</li>
              <li>Secured federal funding for North Carolina military bases and veterans</li>
              <li>Supported bipartisan efforts on workplace and education initiatives</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by conservatives for voting against Trump-backed spending bills</li>
              <li>Sometimes at odds with GOP base on budget priorities</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2014", image: "/northcarolinaLeanR.png", margin: "R +4.5%" },
            { year: "2020", image: "/northcarolinaLeanR.png", margin: "R +3.0%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Tillis ${elect.year}`}
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
