import Header from "../../components/header";

export default function AlsobrooksPage() {
  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8"
        style={{
          backgroundImage: "url('/bg4.jpg')",
          color: "black",
          fontFamily: "Georgia, serif",
        }}
      >
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/alsobrooks.jpg"
              alt="Angela Alsobrooks"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Angela Alsobrooks</h1>
          <p className="italic mb-4">
            "I believe in fighting for every Marylander — for equity, opportunity, and justice."
          </p>

          <p className="mb-4">
            Born February 23, 1971, in Suitland, Maryland, Alsobrooks earned her B.A. from Duke University and J.D. from the University of Maryland School of Law. She served as Prince George’s County State’s Attorney (2011–2018) and County Executive (2018–2025), where she focused on public safety and economic development.
          </p>
          <p className="mb-4">
            Elected to the U.S. Senate in 2024, Alsobrooks became the first Black woman to represent Maryland in the Senate. Her platform emphasizes criminal justice reform, reproductive rights, healthcare access, and expanding economic opportunity across the state.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "25%"],
              ["Pro‑Environment", "Pro‑Industry", "30%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "35%"],
              ["Populist", "Establishment", "50%"],
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
                <li>First Black woman elected to the U.S. Senate from Maryland</li>
                <li>Expanded healthcare and education access in Prince George’s County</li>
                <li>Championed economic revitalization and small business growth initiatives</li>
                <li>Led statewide efforts on public safety modernization and criminal justice reform</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized by opponents for prioritizing progressive policies over fiscal restraint</li>
                <li>Faced pushback from police unions on criminal justice reforms</li>
                <li>Questioned for close ties to national Democratic donor networks</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2024", image: "/maryland.png", margin: "D +25%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Alsobrooks ${e.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
