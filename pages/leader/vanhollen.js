export default function VanHollenPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8"
      style={{
        backgroundImage: "url('/bg4.jpg')",
        color: "black",
        fontFamily: "Georgia, serif",
      }}
    >
      <div className="md:w-1/3 flex justify-center items-start">
        <img
          src="/vanhollen.jpg"
          alt="Chris Van Hollen"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Chris Van Hollen</h1>
        <p className="italic mb-4">
          "We must protect democracy, expand opportunity, and invest in a fairer future for every American."
        </p>

        <p className="mb-4">
          Born January 10, 1959, in Karachi, Pakistan, while his father was in the U.S. Foreign Service, Van Hollen graduated from Swarthmore College, earned a master’s at Harvard Kennedy School, and a J.D. from Georgetown University. He served in the Maryland State Legislature and the U.S. House (2003–2017) before being elected to the U.S. Senate in 2016.
        </p>
        <p className="mb-4">
          As senator, Van Hollen focuses on voting rights, economic equality, healthcare, and environmental protection. He is seen as a key progressive voice within the Democratic caucus and a strong advocate for campaign finance reform.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "25%"],
            ["Pro‑Environment", "Pro‑Industry", "30%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "35%"],
            ["Populist", "Establishment", "55%"],
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
              <li>Led efforts to strengthen voting rights protections nationally</li>
              <li>Advanced climate legislation and Chesapeake Bay cleanup initiatives</li>
              <li>Championed healthcare affordability and mental health services expansion</li>
              <li>Key voice on budget and tax policy, emphasizing progressive revenue measures</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by moderates for supporting high spending proposals</li>
              <li>Faced pushback from business groups on corporate tax reforms</li>
              <li>Occasional tension with centrist Democrats over progressive priorities</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2016", image: "/maryland.png", margin: "D +25%" },
            { year: "2022", image: "/maryland.png", margin: "D +32%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Van Hollen ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
