import Header from "../../components/header";

export default function MississippiPage() {
  const electionImages = [
    { year: "2008", image: "/mississippiLikelyR.png", margin: "R +13.2%" },
    { year: "2012", image: "/mississippiLikelyR.png", margin: "R +11.5%" },
    { year: "2016", image: "/mississippiR.png", margin: "R +17.8%" },
    { year: "2020", image: "/mississippiR.png", margin: "R +16.5%" },
    { year: "2024", image: "/mississippiR.png", margin: "R +22.9%" },
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
          <h1 className="text-2xl font-bold mb-4">Mississippi:</h1>
          <p className="mb-8">
            The Magnolia State, admitted in 1817, has a deeply rooted Southern heritage and strong conservative identity. Mississippi is a consistent Republican stronghold in presidential elections, with politics shaped by agricultural, cultural, and religious traditions. The economy is driven by agriculture, manufacturing, and energy. Its current statewide leaders include:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/reeves" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/reeves.jpg"
                  alt="Tate Reeves"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Tate Reeves (R)</p>
            </a>

            <a href="/leader/wicker" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/rwicker.jpg"
                  alt="Roger Wicker"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Roger Wicker (R)</p>
            </a>

            <a href="/leader/smith" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/hydesmith.jpg"
                  alt="Cindy Hyde-Smith"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Cindy Hyde-Smith (R)</p>
            </a>
          </div>

          {/* State ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "95%"],
              ["Pro-Environment", "Pro-Industry", "90%"],
              ["Immigration-Friendly", "Restrictive", "85%"],
              ["Social Libertarian", "Social Traditionalist", "95%"],
            ].map(([left, right, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{left}</span>
                  <span>{right}</span>
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
                    alt={`Mississippi ${year} margin`}
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
