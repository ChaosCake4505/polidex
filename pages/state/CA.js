import Header from "../../components/header";

export default function CaliforniaPage() {
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
          <h1 className="text-2xl font-bold mb-4">California:</h1>
          <p className="mb-8">
            The Golden State, established in 1850, is the bastion of liberal values, being one of the most Democratic states in the Union. Having voted for the Democratic Party 7/7 times since 2000, California is known for its progressive views on almost every issue. Current statewide leaders include:
          </p>

          {/* Politician images */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="/leader/newsom" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/newsom.jpg"
                  alt="Gavin Newsom"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Governor Gavin Newsom (D)</p>
            </a>

            <a href="/leader/padilla" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/padilla.jpg"
                  alt="Alex Padilla"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Alex Padilla (D)</p>
            </a>

            <a href="/leader/schiff" className="text-center">
              <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                <img
                  src="/schiff.jpg"
                  alt="Adam Schiff"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 font-medium">Senator Adam Schiff (D)</p>
            </a>
          </div>

          {/* State scales */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "20%"],
              ["Pro-Environment", "Pro-Industry", "25%"],
              ["Immigration-Friendly", "Restrictive", "20%"],
              ["Social Libertarian", "Social Traditionalist", "25%"],
            ].map(([leftLabel, rightLabel, position], index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{leftLabel}</span>
                  <span>{rightLabel}</span>
                </div>
                <div
                  className="relative h-4 rounded-full"
                  style={{
                    background: "linear-gradient(to right, #0047AB, #C41E3A)",
                  }}
                >
                  <div
                    className="absolute top-[-10px]"
                    style={{
                      left: position,
                      transform: "translateX(-50%)",
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>⬆️</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Presidential election margins */}
          <div className="mt-12 flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
            {[
              { year: "2008", margin: "+24.0%" },
              { year: "2012", margin: "+23.1%" },
              { year: "2016", margin: "+30.1%" },
              { year: "2020", margin: "+29.2%" },
              { year: "2024", margin: "+20.15%" },
            ].map(({ year, margin }, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-[200px] h-[200px] rounded-lg mx-auto"
                  style={{ backgroundColor: "white" }}
                >
                  <img
                    src="/California.png"
                    alt={`${year} Margin`}
                    className="w-full h-full object-cover rounded-lg opacity-80"
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
