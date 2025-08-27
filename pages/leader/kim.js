export default function KimPage() {
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
          src="/kim.jpg"
          alt="Andy Kim"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Andy Kim</h1>
        <p className="italic mb-4">
          "I'm honored to serve New Jersey — advancing equity, defending democracy, and delivering for working families."
        </p>

        <p className="mb-4">
          Born July 12, 1982, in Boston, Massachusetts, Kim graduated from Duke University and Oxford University as a Rhodes Scholar, and earned his J.D. from Harvard Law School. He served in the Obama and Biden administrations on foreign policy and national security.
        </p>
        <p className="mb-4">
          Kim was elected to the U.S. House in 2018 and re-elected in 2020 and 2022. In 2024, he won the open Senate seat by approximately 9.6%, succeeding Bob Menendez. His priorities include campaign finance reform, reproductive rights, climate action, and social justice.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive Democrat</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "30%"],
            ["Pro‑Environment", "Pro‑Industry", "35%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "40%"],
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
              <li>Won a high-profile open Senate race in 2024 with a 9.6% margin</li>
              <li>Championed voting rights and campaign finance reforms</li>
              <li>Advanced climate resilience and clean energy legislation</li>
              <li>Supported reproductive freedom and healthcare equity policies</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for progressive stances that drew opposition in swing suburbs</li>
              <li>Faced scrutiny over national security background versus local focus</li>
              <li>Debated for centrist compromises on budget and business regulation</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2024", image: "/newjerseyLikelyD.png", margin: "D +9.6%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Kim ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
