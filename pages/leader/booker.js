import Header from "../../components/header";

export default function BookerPage() {
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
              src="/booker.jpg"
              alt="Cory Booker"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Cory Booker</h1>
          <p className="italic mb-4">
            "Our work must be guided by empathy, justice, and collective action—for Newark, New Jersey, and our nation."
          </p>

          <p className="mb-4">
            Born April 27, 1969, in Washington, D.C., Booker graduated from Stanford University and Oxford University as a Rhodes Scholar, then earned his J.D. from Yale Law School. He served as Mayor of Newark from 2006 to 2013, where he focused on urban revitalization and community engagement.
          </p>
          <p className="mb-4">
            Elected to the U.S. Senate in 2013, Booker has championed criminal justice reform, affordable housing, and urban development. Known for his inspirational style, he also ran for the 2020 Democratic presidential nomination.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "30%"],
              ["Pro‑Environment", "Pro‑Industry", "35%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "40%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "50%"],
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
                <li>Authored and passed major criminal justice reform bills</li>
                <li>Advocated for affordable housing and anti-poverty initiatives in urban areas</li>
                <li>Led bipartisan efforts on gun control and sensible immigration policies</li>
                <li>Named a leading voice on ethics, anti-corruption, and social justice</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for charismatic public style over policy depth by some analysts</li>
                <li>Faced scrutiny during his presidential campaign for questionably grand statements</li>
                <li>Occasionally conflicted with Jersey City officials over Newark development ties</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2013", image: "/newjerseyLikelyD.png", margin: "D +10.9%" },
              { year: "2014", image: "/newjerseyLikelyD.png", margin: "D +13.5%" },
              { year: "2020", image: "/new jersey.png", margin: "D +16.3%" },
            ].map((e, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img src={e.image} alt={`Booker ${e.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
