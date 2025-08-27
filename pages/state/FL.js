import Header from "../../components/header";

export default function FloridaPage() {
  const electionImages = [
    { year: "2008", image: "/floridaLeanD.png", margin: "D +2.8%" },
    { year: "2012", image: "/floridaLeanD.png", margin: "D +0.9%" },
    { year: "2016", image: "/floridaLeanR.png", margin: "R +1.2%" },
    { year: "2020", image: "/floridaLeanR.png", margin: "R +3.4%" },
    { year: "2024", image: "/floridaLikelyR.png", margin: "R +13.1%" },
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
          <h1 className="text-2xl font-bold mb-4">Florida:</h1>
          <p className="mb-8">
            The Sunshine State, admitted in 1845, is a crucial swing state with a mix of urban coastal areas and rural inland regions. Florida’s electorate is diverse—culture, tourism, retirees, and local industries like agriculture and aerospace shape its politics. Its current statewide leaders are:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/deSantis" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/deSantis.jpg"
                  alt="Ron DeSantis"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Ron DeSantis (R)</p>
            </a>

            <a href="/leader/scott" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/scott.jpg"
                  alt="Rick Scott"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Rick Scott (R)</p>
            </a>

            <a href="/leader/moody" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/moody.jpg"
                  alt="Ashley Moody"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Ashley Moody (R)</p>
            </a>
          </div>

          {/* State ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "60%"],
              ["Pro‑Environment", "Pro‑Industry", "65%"],
              ["Immigration‑Friendly", "Restrictive", "55%"],
              ["Social Libertarian", "Social Traditionalist", "60%"],
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
                    alt={`Florida ${year} margin`}
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
