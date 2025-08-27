import Header from "../../components/header";

export default function DuckworthPage() {
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
              src="/duckworth.jpg"
              alt="Tammy Duckworth"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Tammy Duckworth</h1>
          <p className="italic mb-4">
            "We must fight for a government that honors the sacrifices of all Americans."
          </p>
          <p className="mb-4">
            Tammy Duckworth, born in Bangkok in 1968, is a combat veteran and Purple Heart recipient who lost both legs while serving as an Army helicopter pilot in Iraq. She became the first Thai American woman elected to Congress and the first woman with a disability elected to the U.S. House and later the Senate.
          </p>
          <p className="mb-4">
            Elected to the U.S. Senate in 2016 and re-elected in 2022, Duckworth has focused on veterans' affairs, disability rights, and healthcare access. She has played a leading role in pushing for expanded VA services, infrastructure investments, and support for working families.
          </p>
          <p className="mb-4">
            Duckworth is known for her pragmatic and service-oriented approach, emphasizing bipartisan cooperation while maintaining progressive positions on social issues. Her leadership has made her a rising figure in the Democratic Party and a frequent spokesperson on national security and defense.
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
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span>
                  <span>{R}</span>
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
                <li>Expanded veterans’ healthcare and VA modernization efforts</li>
                <li>Advocated for paid family leave and child care support</li>
                <li>Championed disability rights and access improvements nationwide</li>
                <li>Promoted transportation infrastructure and safety initiatives</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized by conservatives for strong support of abortion rights</li>
                <li>Faced pushback for opposing certain Trump-era defense appointments</li>
                <li>Viewed by some progressives as too moderate on defense spending</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2016", image: "/illinoisLikely.png", margin: "D +14.8%" },
              { year: "2022", image: "/illinoisLikely.png", margin: "D +12.1%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Duckworth ${e.year}`}
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
