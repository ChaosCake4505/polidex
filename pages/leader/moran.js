export default function MoranPage() {
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
          src="/moran.jpg"
          alt="Jerry Moran"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Jerry Moran</h1>
        <p className="italic mb-4">
          "Kansas values mean hard work, community, and making sure government stays accountable."
        </p>

        <p className="mb-4">
          Jerry Moran has served as a U.S. Senator from Kansas since 2011, following a long tenure in the U.S. House representing Kansas’s 1st district. Known for his focus on rural issues, agriculture, and veterans' affairs, Moran has earned a reputation as a pragmatic conservative with a strong Kansas identity.
        </p>
        <p className="mb-4">
          In the Senate, Moran has supported tax cuts, deregulation, and defense spending, while also prioritizing rural broadband, agricultural subsidies, and access to healthcare for veterans. He is often viewed as a steady, establishment conservative voice.
        </p>
        <p className="mb-4">
          Moran has maintained high popularity in Kansas, comfortably winning reelection and avoiding major intra-party challenges.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "90%"],
            ["Pro‑Environment", "Pro‑Industry", "85%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
            ["Populist", "Establishment", "70%"],
            ["Dovish", "Hawkish", "75%"],
          ].map(([leftLabel, rightLabel, position], i) => (
            <div key={i}>
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
              <li>Expanded rural broadband access and telehealth services</li>
              <li>Advocated strongly for veterans' healthcare improvements</li>
              <li>Supported significant agricultural policy and disaster relief</li>
              <li>Backed major federal tax cut legislation</li>
              <li>Worked on bipartisan banking and small business initiatives</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for votes against some COVID-19 relief measures</li>
              <li>Faced pushback over support for deregulation affecting small farms</li>
              <li>Scrutiny over support for large agribusiness subsidies</li>
              <li>Mixed reception from conservatives on immigration votes</li>
              <li>Debates over positions on military spending increases</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2010", image: "/kansasR.png", margin: "R +43.0%" },
            { year: "2016", image: "/kansasR.png", margin: "R +29.9%" },
            { year: "2022", image: "/kansasR.png", margin: "R +23.6%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Moran ${elect.year}`}
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
