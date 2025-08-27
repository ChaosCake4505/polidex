import Header from "../../components/header";

export default function ArkansasPage() {
  const electionImages = [
    { year: "2008", image: "/arkansasR.png", margin: "R +19.9%" },
    { year: "2012", image: "/arkansasR.png", margin: "R +23.7%" },
    { year: "2016", image: "/arkansasR.png", margin: "R +26.9%" },
    { year: "2020", image: "/arkansasR.png", margin: "R +27.6%" },
    { year: "2024", image: "/arkansasR.png", margin: "R +25.5%" },
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
          <h1 className="text-2xl font-bold mb-4">Arkansas:</h1>
          <p className="mb-8">
            The Natural State, admitted in 1836, has a rich agricultural history and strong Southern cultural roots. Once a Democratic stronghold, Arkansas has shifted solidly Republican in recent decades. Its economy is centered around agriculture, retail, and natural resources. Current statewide leaders include:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Governor */}
            <a href="/leader/hsanders" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/Huckabeesanders.jpg"
                  alt="Sarah Huckabee Sanders"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Sarah Huckabee Sanders (R)</p>
            </a>

            {/* Senator John Boozman */}
            <a href="/leader/boozman" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/boozman.jpg"
                  alt="John Boozman"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator John Boozman (R)</p>
            </a>

            {/* Senator Tom Cotton */}
            <a href="/leader/cotton" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/cotton.jpg"
                  alt="Tom Cotton"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Tom Cotton (R)</p>
            </a>
          </div>

          {/* State ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "90%"],
              ["Pro-Environment", "Pro-Industry", "88%"],
              ["Immigration-Friendly", "Restrictive", "85%"],
              ["Social Libertarian", "Social Traditionalist", "90%"],
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
                    alt={`Arkansas ${year} margin`}
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
