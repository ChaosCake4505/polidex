export default function HagertyPage() {
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
          src="/hagerty.jpg"
          alt="Bill Hagerty"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* Content on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Bill Hagerty</h1>
        <p className="italic mb-4">
          "I'm committed to protecting Tennessee values, supporting small businesses, and standing strong on national defense."
        </p>
        <p className="mb-4">
          Bill Hagerty has served as U.S. Senator from Tennessee since 2021. Previously, he was U.S. Ambassador to Japan (2017–2019) under President Trump and had an extensive background in business and economic development.
        </p>
        <p className="mb-4">
          Hagerty focuses on trade, technology expansion, and strong U.S. alliances, working across party lines particularly on national security and veterans' issues.
        </p>

        {/* Ideology Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "90%"],
            ["Pro‑Environment", "Pro‑Industry", "80%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "90%"],
            ["Populist", "Establishment", "70%"],
            ["Dovish", "Hawkish", "85%"],
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
              <li>As ambassador, strengthened U.S.–Japan economic and defense ties</li>
              <li>Supported veterans' legislation, including VA modernization efforts</li>
              <li>Authored trade and technology initiatives benefiting Tennessee businesses</li>
              <li>Worked on bipartisan national security and infrastructure bills</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by progressives for alignment with Trump-era policies</li>
              <li>Faced scrutiny over corporate ties after his private sector career</li>
              <li>Some questioned his positions on climate and environmental regulation</li>
            </ul>
          </div>
        </div>

        {/* Electoral History */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2020", image: "/tennessee.png", margin: "R +16.2%" },
            { year: "2024", image: "/tennessee.png", margin: "R +20.1%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Hagerty ${elect.year}`}
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
