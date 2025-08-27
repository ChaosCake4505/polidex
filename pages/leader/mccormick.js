export default function McCormickPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8"
      style={{
        backgroundImage: "url('/bg4.jpg')",
        color: "black",
        fontFamily: "Georgia, serif",
      }}
    >
      <div className="md:w-1/3 flex justify-center items-start">
        <img
          src="/mccormick.jpg"
          alt="David McCormick"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator David McCormick</h1>
        <p className="italic mb-4">
          "Pennsylvania deserves bold leadership that bolsters jobs, secures our borders, and champions energy independence."
        </p>

        <p className="mb-4">
          Born August 17, 1965, in Washington, D.C., McCormick earned his B.S. from West Point and an M.B.A. from Harvard Business School. He served as an Army officer and later became a successful hedge fund manager at Bridgewater Associates.
        </p>
        <p className="mb-4">
          He entered public service as U.S. Under Secretary of the Treasury (2007–2009) and ran for governor in 2022. In 2024, McCormick won the U.S. Senate seat, defeating incumbent Bob Casey in a notable GOP victory for swing-state Pennsylvania.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "75%"],
            ["Pro‑Environment", "Pro‑Industry", "70%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "80%"],
            ["Populist", "Establishment", "60%"],
            ["Dovish", "Hawkish", "55%"],
          ].map(([L, R, pos], i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1"><span>{L}</span><span>{R}</span></div>
              <div className="relative h-4 rounded-full" style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}>
                <div className="absolute top-[-10px]" style={{ left: pos, transform: "translateX(-50%)" }}>
                  <span style={{ fontSize: "1.5rem" }}>⬆️</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Achievements</h2>
            <ul className="list-disc list-inside">
              <li>Led Treasury efforts in economic stabilization and cybersecurity</li>
              <li>Built reputation as a fiscal conservative and business innovator</li>
              <li>Advocated for energy independence and manufacturing revitalization</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for ties to Wall Street and hedge-fund interests</li>
              <li>Faced questions on specifying health care and social policy details</li>
              <li>Some progressives opposed his energy-first agenda on environmental grounds</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2024", image: "/PennsylvaniaLeanR.png", margin: "R +0.22%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`McCormick ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
