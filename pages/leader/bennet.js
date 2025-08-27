import Header from "../../components/header";

export default function BennetPage() {
  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8"
        style={{
          backgroundImage: "url('/bg4.jpg')",
          color: "black",
          fontFamily: "Georgia, serif",
        }}
      >
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/bennet.jpg"
              alt="Michael Bennet"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Michael Bennet</h1>
          <p className="italic mb-4">
            "We have to build an economy that works for everyone, not just those at the top."
          </p>

          <p className="mb-4">
            Michael Bennet has served as a U.S. Senator from Colorado since 2009. Known for his pragmatic and moderate approach, Bennet focuses on education, healthcare reform, and economic equity.
          </p>
          <p className="mb-4">
            Prior to his time in the Senate, Bennet was Superintendent of Denver Public Schools, where he gained a reputation for innovative and bipartisan leadership on education policy.
          </p>
          <p className="mb-4">
            Throughout his tenure, Bennet has emphasized bipartisan cooperation and pragmatic solutions to major national issues, including immigration reform and climate policy.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Democrat</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "40%"],
              ["Pro-Environment", "Pro-Industry", "30%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "50%"],
              ["Populist", "Establishment", "55%"],
              ["Dovish", "Hawkish", "35%"],
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

          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Championed bipartisan immigration reform efforts</li>
                <li>Led initiatives to improve public education funding</li>
                <li>Supported renewable energy expansion in Colorado</li>
                <li>Worked on improving rural broadband access</li>
                <li>Advocated for healthcare affordability reforms</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticism for moderate stances on progressive economic policy</li>
                <li>Mixed reviews on healthcare public option support</li>
                <li>Debates on student loan forgiveness positions</li>
                <li>Concerns from environmentalists over certain energy votes</li>
                <li>Accusations of being too conciliatory to GOP proposals</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2010", image: "/coloradoLeanD.png", margin: "D +1.7%" },
              { year: "2016", image: "/coloradoLikelyD.png", margin: "D +5.7%" },
              { year: "2022", image: "/coloradoLikelyD.png", margin: "D +14.6%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Bennet ${elect.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{elect.year} Margin {elect.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
