export default function SullivanPage() {
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
          src="/sullivan.jpg"
          alt="Dan Sullivan"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Dan Sullivan</h1>
        <p className="italic mb-4">
          "We must defend Alaska’s interests, strengthen our military, and grow our energy future."
        </p>

        <p className="mb-4">
          Senator Dan Sullivan has served Alaska in the U.S. Senate since 2015. A Marine Corps reservist
          and former Alaska Attorney General, Sullivan has emphasized strong defense, energy independence,
          and pro-business policies throughout his career.
        </p>
        <p className="mb-4">
          He has been an advocate for expanding oil and gas exploration, reducing federal regulatory
          burdens, and supporting Alaska’s military presence. His environmental positions often favor
          economic growth over strict regulation.
        </p>
        <p className="mb-4">
          Sullivan remains a strong conservative voice in the Senate, consistently supporting Republican
          leadership and national security priorities.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "85%"],
            ["Pro-Environment", "Pro-Industry", "80%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "80%"],
            ["Populist", "Establishment", "50%"],
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
              <li>Supported major military funding initiatives</li>
              <li>Advanced pro-energy and oil exploration policies</li>
              <li>Advocated for fisheries and coastal community protections</li>
              <li>Worked on U.S.-China relations and Arctic policy</li>
              <li>Strengthened Alaska’s presence in defense strategy</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for environmental deregulation positions</li>
              <li>Opposed expanded healthcare initiatives</li>
              <li>Aligned closely with Trump-era policies</li>
              <li>Debates over state vs. federal control of resources</li>
              <li>Mixed reception from Alaska Native groups</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2014", image: "/AlaskaLean.png", margin: "+2.1%" },
            { year: "2020", image: "/AlaskaLikely.png", margin: "+12.7%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Sullivan ${elect.year}`}
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
