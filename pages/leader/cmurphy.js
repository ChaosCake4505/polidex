import Header from "../../components/header";

export default function cmurphyPage() {
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
              src="/cmurphy1.jpg"
              alt="Chris Murphy"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Chris Murphy</h1>
          <p className="italic mb-4">
            "I'm committed to ending gun violence, expanding healthcare, and standing up for working families in Connecticut and across America."
          </p>

          <p className="mb-4">
            Born August 3, 1973, in White Plains, New York, Murphy earned a B.A. from Williams College and a J.D. from the University of Connecticut School of Law. He served in the Connecticut House and State Senate before winning a seat in the U.S. House of Representatives.
          </p>
          <p className="mb-4">
            In 2012, Murphy defeated Linda McMahon to become the youngest senator at that time. Since then, he has become a national leader on gun safety, mental health, and foreign policy. He was re-elected in 2018 and again in 2024 with an 18.9% margin.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "35%"],
              ["Pro‑Environment", "Pro‑Industry", "38%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "42%"],
              ["Populist", "Establishment", "60%"],
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
                <li>Co-authored and passed the Bipartisan Safer Communities Act, advancing major gun safety reforms</li>
                <li>Expanded mental health services and advocated for opioid crisis solutions</li>
                <li>Championed environmental initiatives to protect Long Island Sound</li>
                <li>Secured funding for transportation and infrastructure improvements statewide</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized by some activists for compromises in gun legislation negotiations</li>
                <li>Faced scrutiny from progressives over moderate positions on military funding and foreign policy</li>
                <li>Debated for previous acceptance of PAC donations despite reform-focused messaging</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2012", image: "/connecticutLikely.png", margin: "D +11%" },
              { year: "2018", image: "/connecticut.png", margin: "D +20%" },
              { year: "2024", image: "/connecticut.png", margin: "D +18.9%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Murphy ${e.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
