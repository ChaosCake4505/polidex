export default function GrassleyPage() {
  const electionImages = [
    { year: "2004", image: "/iowaLikelyR.png", margin: "R +34.6%" },
    { year: "2010", image: "/iowaLikelyR.png", margin: "R +31.1%" },
    { year: "2016", image: "/iowaLikelyR.png", margin: "R +24.4%" },
    { year: "2022", image: "/iowaLikelyR.png", margin: "R +12.2%" },
  ];

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
          src="/grassley.jpg"
          alt="Chuck Grassley"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* Content box */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Chuck Grassley</h1>
        <p className="italic mb-4">"Transparency and accountability must always come first."</p>

        <p className="mb-4">
          Born in 1933 on a farm in Butler County, Iowa, Chuck Grassley began his political career in the Iowa House of Representatives in 1958. He served in the U.S. House from 1975 to 1981 and was first elected to the U.S. Senate in 1980. Grassley is known as a tenacious legislator and is one of the longest-serving senators in American history.
        </p>
        <p className="mb-4">
          Throughout his Senate career, Grassley has been a powerful voice for agricultural interests, ethanol production, and rural economic development. He is widely respected for his work on government oversight and accountability, having led investigations into federal spending and mismanagement. As chair of key committees like Finance and Judiciary, he played a major role in shaping tax policy, trade, and judicial confirmations.
        </p>
        <p className="mb-4">
          Grassley has often emphasized bipartisan cooperation while staying firmly conservative on fiscal and social issues. His "99 county tour" tradition exemplifies his commitment to constituent engagement. Despite his advanced age, he remains an influential figure in shaping Senate debates and Republican strategy.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

        {/* Ideological scales */}
        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "80%"],
            ["Pro‑Environment", "Pro‑Industry", "70%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "85%"],
            ["Populist", "Establishment", "60%"],
            ["Dovish", "Hawkish", "65%"],
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

        {/* Achievements & Controversies */}
        <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Achievements</h2>
            <ul className="list-disc list-inside">
              <li>Longest-serving senator in Iowa history</li>
              <li>Champion of whistleblower protections and oversight</li>
              <li>Advocated for ethanol, agriculture, and rural development</li>
              <li>Key role in major tax and trade legislation</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for blocking Supreme Court hearings in 2016</li>
              <li>Concerns over age and calls for retirement</li>
              <li>Critiques of close ties to agricultural industry interests</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {electionImages.map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Grassley ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
