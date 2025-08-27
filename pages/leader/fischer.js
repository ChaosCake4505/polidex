import Header from "../../components/header";

export default function FischerPage() {
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
              src="/fischer.jpg"
              alt="Deb Fischer"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Deb Fischer</h1>
          <p className="italic mb-4">
            "Our mission as public servants is to fight for Nebraska values—common‑sense, not extremism."
          </p>

          <p className="mb-4">
            Deb Fischer has served as a U.S. Senator from Nebraska since 2013. A former state legislator and cattle rancher, she's known for her conservative leadership on issues like agriculture, national defense, and fiscal responsibility.
          </p>
          <p className="mb-4">
            She has championed policies supporting veterans, rural development, and Second Amendment rights. Throughout her tenure, Fischer has sought to lower taxes, reduce federal spending, and bolster U.S. agriculture.
          </p>
          <p className="mb-4">
            Fischer is regarded as a reliably conservative Republican with deep ties to Nebraska’s rural character and tradition.
          </p>

          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "95%"],
              ["Pro‑Environment", "Pro‑Industry", "90%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "98%"],
              ["Populist", "Establishment", "65%"],
              ["Dovish", "Hawkish", "80%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span>
                  <span>{R}</span>
                </div>
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
                <li>Secured increased funding for rural water and infrastructure</li>
                <li>Strong advocate for Second Amendment and veterans affairs</li>
                <li>Co‑sponsored legislation supporting agricultural bioenergy</li>
                <li>Championed federal oversight of natural disaster response</li>
                <li>Vetted federal spending to protect taxpayers</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for opposing Medicaid expansion</li>
                <li>Faced scrutiny over virtual committee attendance</li>
                <li>Accused of voting against bipartisan bills on criminal justice</li>
                <li>Debated on rollbacks to environmental protections</li>
                <li>Seen as closely aligned with party leadership at expense of compromise</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2012", image: "/nebraska.png", margin: "R +15.6%" },
              { year: "2018", image: "/nebraska.png", margin: "R +19.1%" },
              { year: "2024", image: "/nebraskaLikely.png", margin: "R +6.6%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Fischer ${e.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
