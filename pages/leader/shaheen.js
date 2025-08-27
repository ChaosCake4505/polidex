export default function ShaheenPage() {
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
          src="/shaheen.jpg"
          alt="Jeanne Shaheen"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Jeanne Shaheen</h1>
        <p className="italic mb-4">
          "I believe in common-sense solutions, supporting working families, and standing up for New Hampshire values in Washington."
        </p>

        <p className="mb-4">
          Born January 28, 1947, in St. Charles, Missouri, Shaheen earned her bachelor's degree from Shippensburg University and a master's from the University of Mississippi. She moved to New Hampshire in the 1970s, where she taught school and became active in politics.
        </p>
        <p className="mb-4">
          Shaheen served as New Hampshire's governor from 1997 to 2003, becoming the first woman elected to that office. She was elected to the U.S. Senate in 2008 and has since focused on bipartisan energy policy, small business support, veterans' services, and women's rights.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Center-Left Democrat</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "40%"],
            ["Pro‑Environment", "Pro‑Industry", "35%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "45%"],
            ["Populist", "Establishment", "55%"],
            ["Dovish", "Hawkish", "50%"],
          ].map(([L, R, pos], i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span>{L}</span><span>{R}</span>
              </div>
              <div
                className="relative h-4 rounded-full"
                style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}
              >
                <div
                  className="absolute top-[-10px]"
                  style={{ left: pos, transform: "translateX(-50%)" }}
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
              <li>First woman elected governor and U.S. senator from New Hampshire</li>
              <li>Championed bipartisan energy efficiency and clean energy investments</li>
              <li>Expanded small business and export support through federal grant programs</li>
              <li>Strengthened veterans' health care services and women's reproductive rights protections</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by progressives for moderate stances on healthcare and defense spending</li>
              <li>Faced opposition for supporting certain trade agreements</li>
              <li>Debated for balancing environmental protection with business and economic development priorities</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2008", image: "/newhampshireLikelyD.png", margin: "D +6%" },
            { year: "2014", image: "/newhampshireLeanD.png", margin: "D +3%" },
            { year: "2020", image: "/newhampshireLikelyD.png", margin: "D +15%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Shaheen ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
