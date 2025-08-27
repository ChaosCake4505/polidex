export default function GillibrandPage() {
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
          src="/gillibrand.jpg"
          alt="Kirsten Gillibrand"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Kirsten Gillibrand</h1>
        <p className="italic mb-4">
          "We must fight for families, equality, and a stronger future built on compassion and justice."
        </p>

        <p className="mb-4">
          Born December 9, 1966, in Albany, New York, Gillibrand graduated from Dartmouth College and UCLA School of Law. She worked as an attorney and served as special counsel at HUD before entering politics.
        </p>
        <p className="mb-4">
          Elected to the U.S. House in 2006, she was appointed to the Senate in 2009 to succeed Hillary Clinton and has since won multiple full terms. Gillibrand is known for championing military sexual assault reforms, paid family leave, and environmental protections.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "30%"],
            ["Pro‑Environment", "Pro‑Industry", "35%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "40%"],
            ["Populist", "Establishment", "55%"],
            ["Dovish", "Hawkish", "45%"],
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
              <li>Led efforts on military sexual assault prevention legislation</li>
              <li>Championed paid family leave and affordable childcare bills</li>
              <li>Advanced environmental protections and clean water funding</li>
              <li>Strengthened workplace harassment laws and gender equity initiatives</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for moderate House positions before shifting left in Senate</li>
              <li>Faced pushback over calls for Al Franken’s resignation</li>
              <li>Viewed by some as over-focused on national aspirations during 2020 run</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2010", image: "/newyork.png", margin: "D +28%" },
            { year: "2012", image: "/newyork.png", margin: "D +45%" },
            { year: "2018", image: "/newyork.png", margin: "D +34%" },
            { year: "2024", image: "/newyork.png", margin: "D +18.4%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Gillibrand ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
