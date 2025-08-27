import Header from "../../components/header";

export default function IndianaPage() {
  const electionImages = [
    { year: "2008", image: "/indianaleanD.png", margin: "R +1.03%" },
    { year: "2012", image: "/indianaLikelyD.png", margin: "R +11.1%" },
    { year: "2016", image: "/indianaR.png", margin: "R +19.1%" },
    { year: "2020", image: "/indianaR.png", margin: "R +17.0%" },
    { year: "2024", image: "/indianaR.png", margin: "R +18.96%" },
  ];

  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center p-8"
        style={{
          backgroundImage: "url('/bg4.jpg')",
          color: "black",
          fontFamily: "Georgia, serif",
        }}
      >
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-4">Indiana:</h1>
          <p className="mb-8">
            Indiana, known as the Hoosier State and admitted to the Union in 1816, blends rich agricultural heritage with a strong manufacturing and logistics economy. Its cultural identity is shaped by Midwestern values, a deep passion for basketball and motorsports, and a tradition of civic engagement. While it has consistently favored Republicans in federal elections in recent decades, Indiana’s urban centers like Indianapolis and college towns bring a balance of political and cultural diversity. The state is also recognized for its robust higher education institutions, vibrant small towns, and strong community ties.
          </p>

          {/* Politicians */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/braun" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/braun.jpg" alt="Mike Braun" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Governor Mike Braun (R)</p>
            </a>

            <a href="/leader/young" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/young.jpg" alt="Todd Young" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Todd Young (R)</p>
            </a>

            <a href="/leader/banks" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/banks.jpg" alt="Jim Banks" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Jim Banks (R)</p>
            </a>
          </div>

          {/* Ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "85%"],
              ["Pro‑Environment", "Pro‑Industry", "80%"],
              ["Immigration‑Friendly", "Restrictive", "75%"],
              ["Social Libertarian", "Social Traditionalist", "85%"],
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

          {/* Presidential election margins */}
          <div className="mt-12 flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
            {electionImages.map(({ year, image, margin }, idx) => (
              <div key={idx} className="text-center">
                <div className="w-[200px] h-[200px] rounded-lg mx-auto" style={{ backgroundColor: "white" }}>
                  <img src={image} alt={`Indiana ${year}`} className="w-full h-full object-contain rounded-lg opacity-80" />
                </div>
                <p className="mt-2 font-medium">{year}: {margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
