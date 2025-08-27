export default function PetersPage() {
  return (
    <div className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8" style={{
      backgroundImage: "url('/bg4.jpg')", color: "black", fontFamily: "Georgia, serif",
    }}>
      <div className="md:w-1/3 flex justify-center items-start">
        <img
          src="/peters.jpg"
          alt="Gary Peters"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Gary Peters</h1>
        <p className="italic mb-4">"We must strengthen our democracy and rebuild the middle class."</p>
        <p className="mb-4">
          Gary Peters, born in Pontiac in 1958, has represented Michigan in the U.S. Senate since 2015. A former financial advisor and U.S. Navy Reserve officer, he also served in the Michigan State Senate, as lottery commissioner, and in the U.S. House before winning his Senate seat.
        </p>
        <p className="mb-4">
          In the Senate, Peters has focused on homeland security, veterans' affairs, small business support, and environmental protection. He chaired the Homeland Security and Governmental Affairs Committee, where he played a leading role in oversight of pandemic preparedness, supply chain security, and election protection.
        </p>
        <p className="mb-4">
          Known for a pragmatic and detail-oriented approach, Peters has maintained strong support from labor unions and suburban voters. He is recognized for his work on Great Lakes funding and bipartisan infrastructure priorities.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "45%"],
            ["Pro‑Environment", "Pro‑Industry", "35%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "45%"],
            ["Populist", "Establishment", "60%"],
            ["Dovish", "Hawkish", "50%"],
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
              <li>Secured record funding for Great Lakes cleanup and preservation</li>
              <li>Strengthened cybersecurity and election security infrastructure</li>
              <li>Expanded pandemic response supply chain resilience</li>
              <li>Advanced small business relief and manufacturing support</li>
              <li>Championed veteran healthcare and benefits reform</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by some progressives for cautious approach to Green New Deal policies</li>
              <li>Faced challenges from GOP over border and security funding votes</li>
              <li>Targeted by conservative groups for votes on COVID-19 relief and infrastructure</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2014", image: "/michiganLikelyD.png", margin: "D +13.3%" },
            { year: "2020", image: "/michiganLeanD.png", margin: "D +1.7%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Peters ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
