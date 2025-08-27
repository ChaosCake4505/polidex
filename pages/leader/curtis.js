import Header from "../../components/header";

export default function CurtisPage() {
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
              src="/curtis.jpg"
              alt="John Curtis"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator John Curtis</h1>
          <p className="italic mb-4">
            "We can protect our environment and grow our economy — it doesn't have to be one or the other."
          </p>

          <p className="mb-4">
            Senator John Curtis was elected to the U.S. Senate in 2024 after serving multiple terms in the U.S. House. Known for his pragmatic approach and emphasis on environmental stewardship, Curtis has sought to bridge gaps within the Republican Party and promote practical, market-driven solutions to major issues.
          </p>
          <p className="mb-4">
            Curtis has championed clean energy innovation, supported small business growth, and advocated for transparent governance. His moderate style has earned him support from independents and younger conservatives in Utah.
          </p>
          <p className="mb-4">
            While sometimes at odds with more hardline conservatives, Curtis remains committed to Utah's core values of fiscal responsibility, religious freedom, and individual liberty.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "65%"],
              ["Pro-Environment", "Pro-Industry", "45%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "70%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "50%"],
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
                <li>Promoted clean energy innovation nationally</li>
                <li>Supported small businesses and entrepreneurship programs</li>
                <li>Championed bipartisan environmental policy efforts</li>
                <li>Improved government transparency initiatives</li>
                <li>Expanded rural internet and infrastructure development</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized by conservatives for perceived moderation</li>
                <li>Debates over support for carbon pricing policies</li>
                <li>Scrutiny on shifting positions regarding federal land policy</li>
                <li>Pushback on balancing environmental and mining interests</li>
                <li>Concerns over alignment with national GOP leadership</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <img
                src="/utah.png"
                alt="Curtis 2024"
                className="max-w-[150px] object-contain"
              />
              <p className="mt-2 text-sm">2024 Margin R +22%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
