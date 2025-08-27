import Header from "../../components/header";

export default function CrapoPage() {
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
              src="/crapo.jpg"
              alt="Mike Crapo"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Mike Crapo</h1>
          <p className="italic mb-4">
            "We must continue to fight for a government that lives within its means and protects our freedoms."
          </p>

          <p className="mb-4">
            Senator Mike Crapo has served Idaho in the U.S. Senate since 1999, establishing himself as a leading voice on fiscal conservatism, tax reform, and banking policy. Known for his deep knowledge of financial and economic issues, Crapo has played key roles on the Senate Finance and Banking Committees.
          </p>
          <p className="mb-4">
            He has consistently advocated for lower taxes, reduced federal spending, and deregulation to support business growth. Crapo also supports strong Second Amendment rights and is a vocal opponent of expansive federal environmental regulations.
          </p>
          <p className="mb-4">
            While generally aligned with party leadership, he has occasionally taken independent stances on trade and privacy-related legislation.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "95%"],
              ["Pro-Environment", "Pro-Industry", "90%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "98%"],
              ["Populist", "Establishment", "65%"],
              ["Dovish", "Hawkish", "70%"],
            ].map(([leftLabel, rightLabel, position], i) => (
              <div key={i}>
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

          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Led major tax reform and banking deregulation efforts</li>
                <li>Promoted lower taxes and reduced federal deficits</li>
                <li>Protected gun rights and Second Amendment policies</li>
                <li>Expanded rural broadband and infrastructure funding</li>
                <li>Supported pro-business economic legislation</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for ties to Wall Street and large banks</li>
                <li>Faced backlash over votes against certain environmental protections</li>
                <li>Debates over his strong support for deregulation</li>
                <li>Pushback on healthcare repeal efforts</li>
                <li>Questions about corporate campaign contributions</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2016", image: "/idaho.png", margin: "R +38%" },
              { year: "2022", image: "/idaho.png", margin: "R +27%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Crapo ${e.year}`}
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
