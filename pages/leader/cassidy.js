import Header from "../../components/header";

export default function CassidyPage() {
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
              src="/cassidy.jpg"
              alt="Bill Cassidy"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Bill Cassidy</h1>
          <p className="italic mb-4">
            "We must solve problems with conservative principles and practical solutions."
          </p>

          <p className="mb-4">
            Bill Cassidy has served as a U.S. Senator from Louisiana since 2015, after serving in the U.S. House. A physician by training, Cassidy focuses on healthcare, energy, and disaster recovery.
          </p>
          <p className="mb-4">
            He is known for bipartisan efforts, including work on infrastructure and mental health initiatives. Cassidy has taken moderate stances compared to many in his party, especially on health policy.
          </p>
          <p className="mb-4">
            Despite facing criticism from some conservatives, Cassidy has maintained strong support in statewide elections.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "85%"],
              ["Pro‑Environment", "Pro‑Industry", "90%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "90%"],
              ["Populist", "Establishment", "80%"],
              ["Dovish", "Hawkish", "70%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span><span>{R}</span>
                </div>
                <div
                  className="relative h-4 rounded-full"
                  style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}
                >
                  <div
                    className="absolute top-[-10px]"
                    style={{ left: pos, transform: "translateX(-50%)" }}
                  >
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
                <li>Expanded mental health services and treatment access</li>
                <li>Worked on major disaster relief funding for Louisiana</li>
                <li>Promoted coastal restoration and flood mitigation efforts</li>
                <li>Supported bipartisan infrastructure legislation</li>
                <li>Advocated for medical research and public health improvements</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for vote to convict Trump in second impeachment</li>
                <li>Backlash from party activists for bipartisan deals</li>
                <li>Debates over energy policy balancing industry and environment</li>
                <li>Opposition from hardliners on healthcare compromises</li>
                <li>Mixed support for COVID-19 relief packages</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2014", image: "/louisianaLikelyR.png", margin: "R +11.9%" },
              { year: "2020", image: "/louisianaR.png", margin: "R +39.0%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Cassidy ${e.year}`}
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
