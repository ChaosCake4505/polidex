import Header from "../../components/header";

export default function BoozmanPage() {
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
              src="/boozman.jpg"
              alt="John Boozman"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator John Boozman</h1>
          <p className="italic mb-4">
            "I’ve always fought for the people of Arkansas — to strengthen farms, families, and freedom."
          </p>

          <p className="mb-4">
            John Boozman has represented Arkansas in the U.S. Senate since 2011 and previously served in the House. He focuses on agriculture, veterans' services, and conservative fiscal policy.
          </p>
          <p className="mb-4">
            Boozman is seen as a steady, establishment Republican voice who brings infrastructure and agriculture funding back to Arkansas. He is a senior member on multiple Senate committees including Appropriations and Agriculture.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "88%"],
              ["Pro‑Environment", "Pro‑Industry", "85%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "92%"],
              ["Populist", "Establishment", "75%"],
              ["Dovish", "Hawkish", "70%"],
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
                <li>Secured federal funding for Arkansas farmers and rural hospitals</li>
                <li>Expanded veterans’ healthcare access and benefits</li>
                <li>Led bipartisan bills on flood protection and infrastructure</li>
                <li>Chair of Agriculture Appropriations subcommittee</li>
                <li>Backed major tax cut legislation in 2017</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for cautious stance on 2020 election challenges</li>
                <li>Seen by some conservatives as too moderate on immigration</li>
                <li>Low-profile approach viewed as too passive by critics</li>
                <li>Opposed expanded social spending bills in pandemic era</li>
                <li>Supported gun rights bills drawing national attention</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2016", image: "/arkansasR.png", margin: "R +23.2%" },
              { year: "2022", image: "/arkansasR.png", margin: "R +34.6%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Boozman ${e.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{e.year} Margin {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
