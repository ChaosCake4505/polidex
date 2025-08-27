export default function TScottPage() {
  return (
    <div className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8" style={{
      backgroundImage: "url('/bg4.jpg')", color: "black", fontFamily: "Georgia, serif",
    }}>
      <div className="md:w-1/3 flex justify-center items-start">
        <img
          src="/tscott.webp"
          alt="Tim Scott"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Tim Scott</h1>
        <p className="italic mb-4">
          "Opportunity is created through hard work and community support."
        </p>
        <p className="mb-4">
          Tim Scott has served in the U.S. Senate since 2013, becoming the first Black senator elected from South Carolina. He focuses on economic empowerment, criminal justice reform, and education access.
        </p>
        <p className="mb-4">
          He gained national attention for leading the Opportunity Zones initiative and supporting bipartisan police reform efforts.
        </p>

        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "90%"],
            ["Pro‑Environment", "Pro‑Industry", "75%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "85%"],
            ["Populist", "Establishment", "65%"],
            ["Dovish", "Hawkish", "60%"],
          ].map(([left, right, pos], i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1"><span>{left}</span><span>{right}</span></div>
              <div className="relative h-4 rounded-full" style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}>
                <div className="absolute top-[-10px]" style={{ left: pos, transform: "translateX(-50%)" }}><span style={{ fontSize: "1.5rem" }}>⬆️</span></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Achievements</h2>
            <ul className="list-disc list-inside">
              <li>Led creation of Opportunity Zones in 2017 tax reform</li>
              <li>Supported bipartisan police reform legislation</li>
              <li>Championed workforce and education grants</li>
              <li>Served as first Black Republican senator elected from South since Reconstruction</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by some conservatives for police reform negotiations</li>
              <li>Faced opposition over opposition to large spending bills</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2016", image: "/southcarolina.png", margin: "R +30.4%" },
            { year: "2022", image: "/southcarolina.png", margin: "R +18.9%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={elect.image} alt={`Scott ${elect.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{elect.year} Margin {elect.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
