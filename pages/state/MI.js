import Header from "../../components/header";

export default function MichiganPage() {
  const electionImages = [
    { year: "2008", image: "/michigan.png", margin: "D +16.4%" },
    { year: "2012", image: "/michiganLikelyD.png", margin: "D +9.5%" },
    { year: "2016", image: "/michiganLeanR.png", margin: "R +0.3%" },
    { year: "2020", image: "/michiganLeanD.png", margin: "D +2.8%" },
    { year: "2024", image: "/michiganLeanR.png", margin: "R +1.4%" },
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
          <h1 className="text-2xl font-bold mb-4">Michigan:</h1>
          <p className="mb-8">
            The Great Lakes State, admitted in 1837, blends industrial heritage with agricultural strength and evolving tech hubs. Once a reliably blue state, Michigan became a critical battleground, flipping to Trump in 2016 before returning narrowly to Democrats in 2020 and 2024. It’s known for its strong labor unions and diverse political geography. Current statewide leaders include:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/whitmer" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/whitmer.jpg" alt="Gretchen Whitmer" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Governor Gretchen Whitmer (D)</p>
            </a>

            <a href="/leader/peters" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/peters.jpg" alt="Gary Peters" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Gary Peters (D)</p>
            </a>

            <a href="/leader/slotkin" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img src="/slotkin.jpg" alt="Elissa Slotkin" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <p className="mt-2 font-medium">Senator Elissa Slotkin (D)</p>
            </a>
          </div>

          {/* State ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "45%"],
              ["Pro‑Environment", "Pro‑Industry", "40%"],
              ["Immigration‑Friendly", "Restrictive", "50%"],
              ["Social Libertarian", "Social Traditionalist", "45%"],
            ].map(([left, right, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1"><span>{left}</span><span>{right}</span></div>
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
                  <img src={image} alt={`Michigan ${year}`} className="w-full h-full object-contain rounded-lg opacity-80" />
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
