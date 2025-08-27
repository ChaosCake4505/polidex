import Header from "../../components/header";

export default function GeorgiaPage() {
  const electionImages = [
    { year: "2008", image: "/georgiaLikelyR.png", margin: "R +5.2%" },
    { year: "2012", image: "/georgiaLeanR.png", margin: "R +7.8%" },
    { year: "2016", image: "/georgiaLikelyR.png", margin: "R +5.0%" },
    { year: "2020", image: "/georgiaLeanD.png", margin: "D +0.2%" },
    { year: "2024", image: "/georgiaLeanR.png", margin: "R +2.2%" },
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
          <h1 className="text-2xl font-bold mb-4">Georgia:</h1>
          <p className="mb-8">
            The Peach State, admitted in 1788, is a pivotal battleground with a mix of growing suburban and urban areas and conservative rural regions. Georgia's political landscape has shifted in recent years, reflecting its growing diversity. Current statewide leaders include:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/kemp" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/kemp.jpg"
                  alt="Brian Kemp"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Brian Kemp (R)</p>
            </a>

            <a href="/leader/ossoff" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/ossoff.jpg"
                  alt="Jon Ossoff"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Jon Ossoff (D)</p>
            </a>

            <a href="/leader/warnock" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/warnock.jpg"
                  alt="Raphael Warnock"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Raphael Warnock (D)</p>
            </a>
          </div>

          {/* State ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "55%"],
              ["Pro‑Environment", "Pro‑Industry", "50%"],
              ["Immigration‑Friendly", "Restrictive", "55%"],
              ["Social Libertarian", "Social Traditionalist", "55%"],
            ].map(([left, right, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{left}</span>
                  <span>{right}</span>
                </div>
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
            {electionImages.map(({ year, image, margin }, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-[200px] h-[200px] rounded-lg mx-auto"
                  style={{ backgroundColor: "white" }}
                >
                  <img
                    src={image}
                    alt={`Georgia ${year} margin`}
                    className="w-full h-full object-contain rounded-lg opacity-80"
                  />
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
