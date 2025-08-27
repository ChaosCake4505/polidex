import Header from "../../components/header";

export default function FettermanPage() {
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
              src="/fetterman.jpg"
              alt="John Fetterman"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator John Fetterman</h1>
          <p className="italic mb-4">
            "I'm committed to bringing bold, authentic representation to Washington—for working families and rural communities."
          </p>

          <p className="mb-4">
            Born August 15, 1969, in Reading, Pennsylvania, Fetterman attended Albright College before earning a master's from Harvard University. He served as mayor of Braddock (2006–2013) and as Lieutenant Governor of Pennsylvania (2019–2023).
          </p>
          <p className="mb-4">
            Fetterman was elected to the U.S. Senate in 2022 on a progressive platform focused on economic equity, criminal justice reform, and expanding healthcare access. He is known for his direct communication style and advocacy for working-class voters.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive Maverick</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "30%"],
              ["Pro‑Environment", "Pro‑Industry", "35%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "50%"],
              ["Populist", "Establishment", "65%"],
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
                <li>Delivered economic relief and advocacy for working-class communities</li>
                <li>Championed criminal justice reform, including sentencing reforms</li>
                <li>Advanced veterans’ healthcare and mental health service expansions</li>
                <li>Focused on rural broadband and infrastructure investments</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced criticism after stroke in 2022 over office and voting capacity</li>
                <li>Criticized by conservatives for progressive economic proposals</li>
                <li>Debated for blunt rhetoric on cultural issues and public policy</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2022", image: "/PennsylvaniaLeanD.png", margin: "D +4.9%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Fetterman ${e.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
