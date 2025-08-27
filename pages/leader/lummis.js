export default function LummisPage() {
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
          src="/lummis.jpg"
          alt="Cynthia Lummis"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Cynthia Lummis</h1>
        <p className="italic mb-4">
          "I believe in a smaller government that respects individual freedoms and fiscal discipline."
        </p>

        <p className="mb-4">
          Senator Cynthia Lummis was elected to the U.S. Senate in 2020, making history as Wyoming's first female senator. She previously served in the U.S. House and as Wyoming’s state treasurer, known for her strong advocacy of conservative fiscal policies and individual liberties.
        </p>
        <p className="mb-4">
          Lummis has become a leading voice on cryptocurrency and digital asset policy, emphasizing innovation and deregulation. She consistently champions Wyoming's energy industries and opposes expansive environmental regulations.
        </p>
        <p className="mb-4">
          While widely respected among conservatives, she has faced criticism from environmental groups and some moderates over her staunch positions on industry and fiscal issues.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "95%"],
            ["Pro-Environment", "Pro-Industry", "95%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "99%"],
            ["Populist", "Establishment", "70%"],
            ["Dovish", "Hawkish", "75%"],
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
              <li>First woman elected to the U.S. Senate from Wyoming</li>
              <li>Leading advocate for cryptocurrency policy and blockchain innovation</li>
              <li>Strong defender of Second Amendment rights</li>
              <li>Consistent support for Wyoming's energy sector</li>
              <li>Promoted fiscal responsibility and budget discipline</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for opposing federal environmental protections</li>
              <li>Pushback on deregulatory positions in finance and tech</li>
              <li>Debates over rural healthcare funding priorities</li>
              <li>Concerns from moderates on social safety net reductions</li>
              <li>Close ties to large energy and mining interests</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2020", image: "/wyoming.png", margin: "R +46%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Lummis ${elect.year}`}
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
