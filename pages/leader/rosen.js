export default function RosenPage() {
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
          src="/rosen.jpg"
          alt="Jacky Rosen"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Jacky Rosen</h1>
        <p className="italic mb-4">
          "We need leaders who are committed to finding commonsense solutions that put people first."
        </p>

        <p className="mb-4">
          Senator Jacky Rosen was elected to the U.S. Senate in 2018 after serving a term in the U.S. House. Known for her focus on bipartisanship and pragmatic problem-solving, Rosen has emphasized issues like workforce development, healthcare, and veterans’ affairs.
        </p>
        <p className="mb-4">
          A former computer programmer, she has advocated for STEM education and tech industry growth in Nevada. Rosen has also championed efforts to lower prescription drug costs and improve access to affordable healthcare.
        </p>
        <p className="mb-4">
          Rosen's centrist approach and focus on working across the aisle have positioned her as a moderate voice within the Senate Democratic caucus.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "40%"],
            ["Pro-Environment", "Pro-Industry", "35%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "45%"],
            ["Populist", "Establishment", "50%"],
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
              <li>Expanded veteran healthcare and benefits access</li>
              <li>Championed workforce and apprenticeship programs</li>
              <li>Advocated for increased STEM education funding</li>
              <li>Supported measures to reduce prescription drug costs</li>
              <li>Worked to improve cybersecurity and tech innovation</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for perceived lack of legislative accomplishments early on</li>
              <li>Faced pushback on moderate healthcare positions</li>
              <li>Debated stances on immigration enforcement policy</li>
              <li>Concerns over balancing business interests with environmental protections</li>
              <li>Criticism from progressives on certain budget votes</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2018", image: "/nevadaLikelyD.png", margin: "+5.0%" },
            { year: "2024", image: "/nevadaLeanD.png", margin: "+1.55%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Rosen ${elect.year}`}
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
