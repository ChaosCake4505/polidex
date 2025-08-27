import Header from "../../components/header";

export default function CapitoPage() {
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
              src="/capito.jpg"
              alt="Shelley Moore Capito"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Shelley Moore Capito</h1>
          <p className="italic mb-4">
            "My mission is to deliver practical, bipartisan solutions for the people of West Virginia."
          </p>

          <p className="mb-4">
            Born November 26, 1953, in Glen Dale, West Virginia, Capito is the daughter of former Governor Arch A. Moore Jr. She earned a bachelor’s degree from Duke University and a master’s from the University of Virginia. 
          </p>
          <p className="mb-4">
            Capito served in the U.S. House (2001–2015) before becoming the first woman elected to the U.S. Senate from West Virginia in 2014. Reelected in 2020, she has focused on infrastructure, broadband expansion, opioid crisis response, and economic development.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "85%"],
              ["Pro‑Environment", "Pro‑Industry", "70%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "80%"],
              ["Populist", "Establishment", "75%"],
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
                <li>Key negotiator on bipartisan infrastructure package</li>
                <li>Advanced broadband and transportation funding for rural areas</li>
                <li>Advocated for opioid treatment funding and prevention initiatives</li>
                <li>Focused on coal and energy industry protection for WV economy</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized by some conservatives for occasional bipartisan votes</li>
                <li>Faced scrutiny over support for certain large federal spending bills</li>
                <li>Accused by progressive groups of insufficient environmental action</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2014", image: "/westvirginiaR.png", margin: "R +27%" },
              { year: "2020", image: "/westvirginiaR.png", margin: "R +43%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Capito ${e.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
