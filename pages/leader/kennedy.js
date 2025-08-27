export default function KennedyPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8"
      style={{
        backgroundImage: "url('/bg4.jpg')",
        color: "black",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* Image on the left */}
      <div className="md:w-1/3 flex justify-center items-start">
        <img
          src="/kennedy.jpg"
          alt="John Kennedy"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator John Kennedy</h1>
        <p className="italic mb-4">
          "I believe in common sense, Louisiana values, and speaking plainly."
        </p>

        <p className="mb-4">
          John Neely Kennedy has served as a U.S. Senator from Louisiana since 2017 and previously served as the state treasurer from 2000 to 2017.
        </p>
        <p className="mb-4">
          Known for his folksy demeanor and sharp wit, he focuses on fiscal restraint, border security, and deregulation. In the Senate, he serves on key committees including Appropriations, Banking, Budget, and Judiciary.
        </p>
        <p className="mb-4">
          Popular with Louisiana conservatives, Kennedy has easily secured reelection and is often mentioned as a potential candidate for higher office.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "95%"],
            ["Pro‑Environment", "Pro‑Industry", "92%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "98%"],
            ["Populist", "Establishment", "65%"],
            ["Dovish", "Hawkish", "80%"],
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

        {/* Achievements & Controversies */}
        <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Achievements</h2>
            <ul className="list-disc list-inside">
              <li>Returned over $400 million in unclaimed property to Louisianans</li>
              <li>Led disaster relief funding efforts</li>
              <li>Served on influential Senate committees</li>
              <li>Fought for fiscal accountability and reduced federal waste</li>
              <li>Defended Louisiana’s oil and gas industry</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for blunt, sometimes divisive rhetoric</li>
              <li>Faced pushback over votes against certain disaster aid bills</li>
              <li>Debates over healthcare positions and Medicaid expansion</li>
              <li>Strong alignment with Trump administration policies</li>
              <li>Comments on foreign policy seen as overly combative</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2016", image: "/louisianaR.png", margin: "R +21.6%" },
            { year: "2022", image: "/louisianaR.png", margin: "R +25.8%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Kennedy ${elect.year}`}
                className="max-w-[150px] object-contain"
              />
              <p className="mt-2 text-sm">{elect.year} Margin {elect.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
