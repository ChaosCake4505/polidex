import Header from "../../components/header";

export default function GallegoPage() {
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
              src="/gallego.jpg"
              alt="Ruben Gallego"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Ruben Gallego</h1>
          <p className="italic mb-4">
            "I believe in fighting for working families and putting people before special interests."
          </p>

          <p className="mb-4">
            Ruben Gallego was elected to the U.S. Senate from Arizona in 2024, after serving multiple terms in the U.S. House. A progressive voice, Gallego has focused on economic equity, veterans' affairs, and immigration reform.
          </p>
          <p className="mb-4">
            Known for his direct, outspoken style, Gallego has been an advocate for expanding healthcare access, protecting voting rights, and supporting labor unions. He emphasizes building an inclusive economy that works for all Arizonans.
          </p>
          <p className="mb-4">
            While celebrated by progressives, Gallego has faced pushback from more moderate voters and Republicans, particularly regarding his stances on border security and taxation.
          </p>

          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "25%"],
              ["Pro-Environment", "Pro-Industry", "35%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "30%"],
              ["Populist", "Establishment", "40%"],
              ["Dovish", "Hawkish", "35%"],
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
                <li>Advocated for expanded veterans' benefits and support services</li>
                <li>Promoted affordable housing initiatives statewide</li>
                <li>Championed voting rights protections and access</li>
                <li>Secured funding for border community infrastructure</li>
                <li>Strengthened labor protections and union support</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for progressive tax and spending proposals</li>
                <li>Pushback on positions regarding border security and enforcement</li>
                <li>Debates over universal healthcare support</li>
                <li>Concerns from business groups on regulatory policy</li>
                <li>Contentious primary campaign tactics in 2024 race</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <img
                src="/arizonaLeanD.png"
                alt="Arizona 2024"
                className="max-w-[150px] object-contain"
              />
              <p className="mt-2 text-sm">2024: D +2.4%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
