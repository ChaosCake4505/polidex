export default function MastoPage() {
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
          src="/masto.jpg"
          alt="Catherine Cortez Masto"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Catherine Cortez Masto</h1>
        <p className="italic mb-4">
          "Nevada families deserve a fighter who will always put them first."
        </p>

        <p className="mb-4">
          Senator Catherine Cortez Masto became the first Latina elected to the U.S. Senate in 2016. Known for her strong advocacy on consumer protections, immigration reform, and women's rights, she has been a prominent voice for Nevada’s diverse communities.
        </p>
        <p className="mb-4">
          Masto has worked to improve access to healthcare, address climate change, and support economic development initiatives throughout Nevada. She has also prioritized efforts to combat human trafficking and strengthen cybersecurity protections.
        </p>
        <p className="mb-4">
          Her pragmatic approach and ability to win tight races have solidified her as a key figure in national Democratic politics.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "35%"],
            ["Pro-Environment", "Pro-Industry", "30%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "40%"],
            ["Populist", "Establishment", "55%"],
            ["Dovish", "Hawkish", "30%"],
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
              <li>First Latina elected to the U.S. Senate</li>
              <li>Strengthened consumer protection laws</li>
              <li>Advanced renewable energy initiatives in Nevada</li>
              <li>Worked to expand access to affordable healthcare</li>
              <li>Led efforts to combat human trafficking</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticism over close ties to party leadership</li>
              <li>Accused of being too moderate on immigration enforcement</li>
              <li>Faced scrutiny over campaign funding sources</li>
              <li>Pushback from progressive activists on certain votes</li>
              <li>Debates on her positions regarding public lands policy</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2016", image: "/nevadaLeanD.png", margin: "+2.4%" },
            { year: "2022", image: "/nevadaLeanD.png", margin: "+0.8%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Masto ${elect.year}`}
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
