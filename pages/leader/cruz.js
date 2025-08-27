import Header from "../../components/header";

export default function CruzPage() {
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
              src="/cruz.jpg"
              alt="Ted Cruz"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Ted Cruz</h1>
          <p className="italic mb-4">
            "I will always stand and fight for liberty and for Texas values."
          </p>

          <p className="mb-4">
            Ted Cruz has served as a U.S. Senator from Texas since 2013 and is known nationally for his sharp rhetorical style and strong conservative positions. Before the Senate, he served as Solicitor General of Texas and argued cases before the Supreme Court.
          </p>
          <p className="mb-4">
            Cruz is a leader in the conservative movement, emphasizing strict constitutionalism, limited government, and strong border policies. He was a prominent figure in the 2016 presidential primary and remains a high-profile voice in national politics.
          </p>
          <p className="mb-4">
            Cruz is popular among the GOP base but has faced close elections due to strong Democratic challenges in Texas.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Populist Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "98%"],
              ["Pro‑Environment", "Pro‑Industry", "95%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "99%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "85%"],
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
                <li>Led push for major tax reform and spending cuts</li>
                <li>Advocated for Second Amendment and religious freedom</li>
                <li>Defended strict immigration enforcement measures</li>
                <li>Promoted deregulation and energy independence</li>
                <li>Strong presence in national conservative leadership</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for 2021 Cancun trip during Texas freeze</li>
                <li>Opposed bipartisan COVID-19 relief packages</li>
                <li>Faced backlash for 2020 election challenge rhetoric</li>
                <li>Mixed reception on working with party leadership</li>
                <li>Polarizing national media presence</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2012", image: "/texasR.png", margin: "R +16.1%" },
              { year: "2018", image: "/texasLeanR.png", margin: "R +2.6%" },
              { year: "2024", image: "/texasLikelyR.png", margin: "R +9.5%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Cruz ${e.year}`}
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
