import Header from "../../components/header";

export default function BrittPage() {
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
              src="/britt.jpg"
              alt="Katie Britt"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Katie Britt</h1>
          <p className="italic mb-4">
            "We must protect Alabama families and preserve the American Dream."
          </p>

          <p className="mb-4">
            Katie Britt, elected in 2022, is Alabama’s first female elected U.S. Senator. A former business advocate and chief of staff to Sen. Richard Shelby, Britt is known for her energetic conservative advocacy and strong focus on families.
          </p>
          <p className="mb-4">
            She champions border security, economic growth, and traditional values, positioning herself as a rising GOP star nationally.
          </p>
          <p className="mb-4">
            Britt has quickly established herself as a major voice on workforce and infrastructure policy.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Populist Right</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "97%"],
              ["Pro‑Environment", "Pro‑Industry", "90%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
              ["Populist", "Establishment", "65%"],
              ["Dovish", "Hawkish", "80%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span><span>{R}</span>
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
                <li>Advocated for major infrastructure upgrades</li>
                <li>Strengthened border security funding measures</li>
                <li>Focused on economic development and workforce growth</li>
                <li>Promoted rural broadband and healthcare access</li>
                <li>Advanced family-focused tax credit proposals</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for strict immigration rhetoric</li>
                <li>Accused of prioritizing partisan messaging over local issues</li>
                <li>Debated approach to reproductive rights and women’s health</li>
                <li>Pushback from Democrats on federal education stances</li>
                <li>Scrutiny over corporate ties during campaign</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <img
                src="/alabamaR.png"
                alt="2022"
                className="max-w-[150px] object-contain"
              />
              <p className="mt-2 text-sm">2022: R +35.7%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
