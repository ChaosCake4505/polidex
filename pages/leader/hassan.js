export default function HassanPage() {
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
          src="/hassan.jpg"
          alt="Maggie Hassan"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Maggie Hassan</h1>
        <p className="italic mb-4">
          "We need to work across the aisle to solve problems and make life better for all Granite Staters and Americans."
        </p>

        <p className="mb-4">
          Born February 27, 1958, in Boston, Massachusetts, Hassan earned her B.A. from Brown University and her J.D. from Northeastern University. She began her political career in the New Hampshire State Senate before becoming governor in 2013.
        </p>
        <p className="mb-4">
          Hassan served two terms as governor (2013–2017), focusing on expanding Medicaid, education, and economic growth. She narrowly defeated incumbent Senator Kelly Ayotte in 2016 and was re-elected in 2022, continuing to emphasize bipartisan solutions, healthcare affordability, and veterans' support.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "42%"],
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
              <li>Expanded Medicaid coverage for tens of thousands of New Hampshire residents</li>
              <li>Advocated for lowering prescription drug prices and expanding mental health services</li>
              <li>Supported bipartisan infrastructure investments and rural broadband expansion</li>
              <li>Strengthened workforce development and higher education affordability efforts</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by progressives for moderate stances on energy and immigration policy</li>
              <li>Faced pushback for votes supporting some Trump-era defense spending bills</li>
              <li>Debated over balancing business tax incentives with social service funding priorities</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2016", image: "/newhampshireLeanD.png", margin: "D +0.1%" },
            { year: "2022", image: "/newhampshireLikelyD.png", margin: "D +9%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Hassan ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
