import Header from "../../components/header";

export default function BaldwinPage() {
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
              src="/baldwin.jpg"
              alt="Tammy Baldwin"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Tammy Baldwin</h1>
          <p className="italic mb-4">"We all do better when we all do better."</p>
          <p className="mb-4">
            Tammy Baldwin, born in Madison, Wisconsin, in 1962, has served as a U.S. Senator since 2013, becoming the first openly LGBTQ+ senator in U.S. history. Before that, she represented Wisconsin’s 2nd congressional district for 14 years and served in the Wisconsin State Assembly.
          </p>
          <p className="mb-4">
            Baldwin is known as a strong progressive voice in the Senate, focusing on healthcare reform, protecting LGBTQ+ rights, and supporting working families. She played a key role in drafting the Affordable Care Act and has pushed for lowering prescription drug costs and expanding Medicaid.
          </p>
          <p className="mb-4">
            Her leadership also extends to manufacturing and “Buy American” initiatives, mental health advocacy, and defending Social Security and Medicare. Baldwin has repeatedly won re-election in a swing state by building broad coalitions and emphasizing kitchen-table issues.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "25%"],
              ["Pro‑Environment", "Pro‑Industry", "30%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "35%"],
              ["Populist", "Establishment", "45%"],
              ["Dovish", "Hawkish", "35%"],
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
                <li>First openly LGBTQ+ senator in U.S. history</li>
                <li>Co-authored Affordable Care Act provisions and mental health expansions</li>
                <li>Led initiatives supporting manufacturing and local jobs</li>
                <li>Advocated for lower drug prices and stronger consumer protections</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized by conservatives for progressive healthcare stances</li>
                <li>Faced scrutiny over a 2015 VA hospital oversight issue in Wisconsin</li>
                <li>Viewed as too liberal by some rural and swing voters</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2012", image: "/wisconsinLikelyD.png", margin: "D +5.6%" },
              { year: "2018", image: "/wisconsinLikelyD.png", margin: "D +10.8%" },
              { year: "2024", image: "/wisconsinLeanD.png", margin: "D +0.85%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Baldwin ${e.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
