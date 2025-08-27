export default function SchmittPage() {
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
          src="/schmitt.jpg"
          alt="Eric Schmitt"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Eric Schmitt</h1>
        <p className="italic mb-4">
          "I will fight for freedom, push back against government overreach, and protect Missouri values."
        </p>
        <p className="mb-4">
          Eric Schmitt has served as U.S. Senator from Missouri since 2023, after serving as state Attorney General. Schmitt gained national attention for lawsuits against federal mandates and tech censorship policies.
        </p>
        <p className="mb-4">
          His priorities include economic deregulation, strong border enforcement, and protecting free speech.
        </p>

        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "93%"],
            ["Pro‑Environment", "Pro‑Industry", "85%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "92%"],
            ["Populist", "Establishment", "75%"],
            ["Dovish", "Hawkish", "80%"],
          ].map(([left, right, pos], i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span>{left}</span><span>{right}</span>
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
              <li>Led legal challenges against federal COVID-19 mandates</li>
              <li>Advocated for economic deregulation and tax relief</li>
              <li>Championed free speech protections and tech accountability</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for prioritizing lawsuits over local issues</li>
              <li>Accused of political posturing on national issues for higher office</li>
              <li>Faced scrutiny over transparency in legal settlements</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2022", image: "/missouriLikelyR.png", margin: "R +13.5%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Schmitt ${elect.year}`}
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
