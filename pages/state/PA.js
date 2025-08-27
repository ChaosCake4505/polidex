import Header from "../../components/header";

export default function PennsylvaniaPage() {
  const electionImages = [
    { year: "2008", image: "/PennsylvaniaLikelyD.png", margin: "D +10%" },
    { year: "2012", image: "/PennsylvaniaLikelyD.png", margin: "D +5%" },
    { year: "2016", image: "/PennsylvaniaLeanR.png", margin: "R +0.7%" },
    { year: "2020", image: "/PennsylvaniaLeanD.png", margin: "D +1.2%" },
    { year: "2024", image: "/PennsylvaniaLeanR.png", margin: "R +2.5%" },
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
          <h1 className="text-2xl font-bold mb-4">Pennsylvania:</h1>
          <p className="mb-8">
            A true swing state, Pennsylvania has oscillated between blue and red presidential outcomes. With vibrant urban hubs, rural heartlands, and suburban battlegrounds, it remains pivotal in national elections. Democrats currently hold the governorship, while Republicans gained a Senate seat in 2024. Key leaders as of 2025:
          </p>

          {/* Leader images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/shapiro" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/shapiro.jpeg"
                  alt="Josh Shapiro"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Josh Shapiro (D)</p>
            </a>

            <a href="/leader/mccormick" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/mccormick.jpg"
                  alt="David McCormick"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator David McCormick (R)</p>
            </a>

            <a href="/leader/fetterman" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/fetterman.jpg"
                  alt="John Fetterman"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator John Fetterman (D)</p>
            </a>
          </div>

          {/* Ideology scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "50%"],
              ["Pro‑Environment", "Pro‑Industry", "55%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "45%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "50%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span>
                  <span>{R}</span>
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
            {electionImages.map(({ year, image, margin }, idx) => (
              <div key={idx} className="text-center">
                <div
                  className="w-[200px] h-[200px] rounded-lg mx-auto"
                  style={{ backgroundColor: "white" }}
                >
                  <img
                    src={image}
                    alt={`Pennsylvania ${year} margin`}
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
