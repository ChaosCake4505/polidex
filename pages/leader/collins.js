import Header from "../../components/header";

export default function CollinsPage() {
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
              src="/collins.webp"
              alt="Susan Collins"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Susan Collins</h1>
          <p className="italic mb-4">
            "I’ve built a reputation on bipartisan leadership and delivering results for Maine, regardless of party."
          </p>

          <p className="mb-4">
            Born December 7, 1952, in Caribou, Maine, Collins earned her B.A. from St. Lawrence University. She held several state-level administrative roles before being elected to the U.S. Senate in 1996, becoming Maine’s first female U.S. senator elected in her own right.
          </p>
          <p className="mb-4">
            Collins is widely known for her moderate and pragmatic approach, frequently ranked among the Senate’s most bipartisan members. She has chaired influential committees and maintained one of the longest continuous voting records in Senate history. In 2020, she won a fifth term by an 8-point margin despite strong national headwinds.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Republican</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "55%"],
              ["Pro‑Environment", "Pro‑Industry", "45%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "60%"],
              ["Populist", "Establishment", "58%"],
              ["Dovish", "Hawkish", "62%"],
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
                <li>Chaired the Senate Appropriations Committee, delivering major federal funding for Maine priorities</li>
                <li>Played key roles in repealing “Don’t Ask, Don’t Tell” and crafting bipartisan healthcare and tax bills</li>
                <li>Secured substantial support for veterans, aging research, and rural health programs</li>
                <li>Maintains one of the longest perfect voting records in Senate history, exceeding 8,000 consecutive votes</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for moderate stances on immigration, gun control, and abortion rights</li>
                <li>Faced backlash for votes in support of Trump-era judicial nominees and certain budget measures</li>
                <li>Debated for balancing bipartisan outreach with Maine's increasingly polarized electorate</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2008", image: "/mainecollins14.png", margin: "R +23%" },
              { year: "2014", image: "/mainecollins14.png", margin: "R +37%" },
              { year: "2020", image: "/mainecollins.png", margin: "R +8%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Collins ${e.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
