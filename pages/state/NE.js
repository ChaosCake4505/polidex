import Header from "../../components/header";

export default function NebraskaPage() {
  const electionImages = [
    { year: "2008", image: "/nebraska8.png", margin: "R +14%" },
    { year: "2012", image: "/nebraska12.png", margin: "R +22%" },
    { year: "2016", image: "/nebraska16.png", margin: "R +25%" },
    { year: "2020", image: "/nebraska20.png", margin: "R +19%" },
    { year: "2024", image: "/nebraska20.png", margin: "R +20.46%" },
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
          <h1 className="text-2xl font-bold mb-4">Nebraska:</h1>
          <p className="mb-8">
            The Cornhusker State, admitted in 1867, is known for its strong Republican tradition and deeply conservative values. Nebraska has consistently voted Republican in presidential elections since 1972 and reflects a strong agricultural and rural character. Its current statewide leaders are:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/pillen" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/pillen.jpg"
                  alt="Jim Pillen"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Jim Pillen (R)</p>
            </a>

            <a href="/leader/fischer" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/fischer.jpg"
                  alt="Deb Fischer"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Deb Fischer (R)</p>
            </a>

            <a href="/leader/ricketts" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/ricketts.jpg"
                  alt="Pete Ricketts"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Pete Ricketts (R)</p>
            </a>
          </div>

          {/* State ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "80%"],
              ["Pro-Environment", "Pro-Industry", "75%"],
              ["Immigration-Friendly", "Restrictive", "70%"],
              ["Social Libertarian", "Social Traditionalist", "85%"],
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
                    alt={`Nebraska ${year} margin`}
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
