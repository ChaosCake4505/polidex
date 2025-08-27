import Header from "../../components/header";

export default function CramerPage() {
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
              src="/cramer.jpg"
              alt="Kevin Cramer"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Kevin Cramer</h1>
          <p className="italic mb-4">
            "North Dakota deserves a strong voice that stands up for our farmers, energy workers, and families."
          </p>

          <p className="mb-4">
            Kevin Cramer has represented North Dakota in the U.S. Senate since 2019, after serving multiple terms as the state's at-large congressman. A reliable conservative, Cramer focuses on energy independence, strong support for fossil fuels, and fiscal conservatism.
          </p>
          <p className="mb-4">
            In the Senate, he has worked on tax reform, deregulatory policies, and advocating for agricultural trade benefits. Cramer also serves on key committees influencing energy and infrastructure policy.
          </p>
          <p className="mb-4">
            His stances have drawn praise from conservatives but criticism from environmental groups and some moderate voters concerned about partisanship and climate priorities.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Populist Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "90%"],
              ["Pro-Environment", "Pro-Industry", "98%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "75%"],
            ].map(([leftLabel, rightLabel, position], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{leftLabel}</span>
                  <span>{rightLabel}</span>
                </div>
                <div
                  className="relative h-4 rounded-full"
                  style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}
                >
                  <div
                    className="absolute top-[-10px]"
                    style={{ left: position, transform: "translateX(-50%)" }}
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
                <li>Advanced tax reform and deregulatory legislation</li>
                <li>Championed North Dakota oil and gas development</li>
                <li>Supported trade deals benefiting agriculture</li>
                <li>Expanded rural broadband and infrastructure funding</li>
                <li>Strengthened military and veterans' services support</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for strong alignment with fossil fuel interests</li>
                <li>Opposed major climate change initiatives</li>
                <li>Concerns over partisan voting record</li>
                <li>Debated positions on healthcare reform and subsidies</li>
                <li>Accused of downplaying environmental protections</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/north dakotaLikely.png", margin: "R +11.1%" },
              { year: "2024", image: "/north dakota.png", margin: "R +32.93%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Cramer ${e.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
