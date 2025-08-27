export default function RischPage() {
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
          src="/risch.jpg"
          alt="Jim Risch"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Jim Risch</h1>
        <p className="italic mb-4">
          "Government works best when it gets out of the way and lets people thrive."
        </p>

        <p className="mb-4">
          Senator Jim Risch has represented Idaho in the U.S. Senate since 2009. A staunch conservative, Risch focuses on national security, energy independence, and reducing government intervention. He is known for his straightforward style and strong advocacy for Idaho’s agricultural and energy industries.
        </p>
        <p className="mb-4">
          He has supported tax cuts, deregulation, and a strong military posture. Risch has also worked to secure water rights and manage federal lands in Idaho, protecting the interests of ranchers and rural communities.
        </p>
        <p className="mb-4">
          While admired by conservatives for his unwavering positions, Risch has occasionally faced criticism for prioritizing party loyalty over bipartisan negotiation.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "95%"],
            ["Pro-Environment", "Pro-Industry", "90%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "97%"],
            ["Populist", "Establishment", "65%"],
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
              <li>Advocated for strong national defense policies</li>
              <li>Protected Idaho’s water and land rights</li>
              <li>Supported major tax cuts and deregulatory measures</li>
              <li>Promoted agricultural and energy sector growth</li>
              <li>Led foreign relations efforts on security issues</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for partisan approach in key negotiations</li>
              <li>Pushback over environmental deregulation stances</li>
              <li>Concerns about ties to large energy corporations</li>
              <li>Opposed bipartisan healthcare expansions</li>
              <li>Viewed as reluctant to support campaign finance reforms</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2014", image: "/idaho.png", margin: "R +30%" },
            { year: "2020", image: "/idaho.png", margin: "R +30%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Risch ${elect.year}`}
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
