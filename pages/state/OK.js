import Header from "../../components/header";

export default function OklahomaPage() {
  const electionImages = [
    { year: "2008", image: "/oklahomaR.png", margin: "R +31.3%" },
    { year: "2012", image: "/oklahomaR.png", margin: "R +33.5%" },
    { year: "2016", image: "/oklahomaR.png", margin: "R +36.4%" },
    { year: "2020", image: "/oklahomaR.png", margin: "R +33.1%" },
    { year: "2024", image: "/oklahomaR.png", margin: "R +29.5%" },
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
          <h1 className="text-2xl font-bold mb-4">Oklahoma:</h1>
          <p className="mb-8">
            The Sooner State, admitted in 1907, is among the most reliably Republican states in the country. Oklahoma has not voted for a Democratic presidential candidate since 1964, and every county has voted Republican for decades. Its economy is anchored by energy, agriculture, and aerospace, and the state embodies a strong conservative and populist culture. Current statewide leaders include:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/stitt" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/stitt.jpg"
                  alt="Kevin Stitt"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Kevin Stitt (R)</p>
            </a>

            <a href="/leader/lankford" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/lankford.jpg"
                  alt="James Lankford"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator James Lankford (R)</p>
            </a>

            <a href="/leader/mullin" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/mullin.jpg"
                  alt="Markwayne Mullin"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Markwayne Mullin (R)</p>
            </a>
          </div>

          {/* State ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "95%"],
              ["Pro-Environment", "Pro-Industry", "90%"],
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
                    alt={`Oklahoma ${year} margin`}
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
