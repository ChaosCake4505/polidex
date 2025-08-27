import Header from "../../components/header";

export default function DurbinPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8" style={{
        backgroundImage: "url('/bg4.jpg')", color: "black", fontFamily: "Georgia, serif",
      }}>
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/durbin.jpeg"
              alt="Dick Durbin"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Dick Durbin</h1>
          <p className="italic mb-4">"Championing working families and integrity in our institutions."</p>
          <p className="mb-4">
            Richard J. Durbin, born in East St. Louis in 1944, has represented Illinois in the U.S. Senate since 1997 and previously served 14 years in the U.S. House. A graduate of Georgetown University, Durbin built his early career working in Illinois state government before entering elected office.
          </p>
          <p className="mb-4">
            In the Senate, Durbin has risen to become the Senate Democratic Whip—the second-ranking Democrat—having held that leadership role since 2005. He chaired the Judiciary Committee (2021–2025) and championed significant legislation on health, consumer protection, and judicial ethics.
          </p>
          <p className="mb-4">
            Known for his pragmatic progressive approach, Durbin has led efforts on public health funding, immigration reform such as the DREAM Act, and smoking bans on airplanes. In April 2025, he announced he will retire at the end of his current term in 2026, citing a desire to “pass the torch” after nearly three decades in the Senate.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "40%"],
              ["Pro‑Environment", "Pro‑Industry", "30%"],
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
                <li>Secured federal funding to combat asthma, AIDS, and organ donation programs</li>
                <li>Spearheaded anti-smoking air travel ban and mental health advocacy</li>
                <li>Key sponsor of DREAM Act and immigration reform initiatives</li>
                <li>Led Senate efforts on ethics reform, judicial oversight, and consumer protections</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced backlash for strong remarks about Guantanamo interrogation comparisons</li>
                <li>Criticism over ties to wife’s lobbying and potential conflicts of interest</li>
                <li>Pushback around federal power usage and health mandates</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2006", image: "/illinois.png", margin: "D +20.6%" },
              { year: "2012", image: "/illinois.png", margin: "D +18.1%" },
              { year: "2018", image: "/illinois.png", margin: "D +15.9%" },
              { year: "2020", image: "/illinois.png", margin: "D +16.0%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Durbin ${e.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
