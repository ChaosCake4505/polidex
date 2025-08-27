import Header from "../../components/header";

export default function CottonPage() {
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
              src="/cotton.jpg"
              alt="Tom Cotton"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Tom Cotton</h1>
          <p className="italic mb-4">
            "The world is dangerous, and America must be strong, proud, and free."
          </p>

          <p className="mb-4">
            Tom Cotton has served as a U.S. Senator from Arkansas since 2015. A Harvard-educated Army veteran, Cotton is known for his hawkish foreign policy, tough-on-crime stance, and populist conservatism.
          </p>
          <p className="mb-4">
            He is a vocal opponent of China and Iran, a supporter of military expansion, and a strong critic of illegal immigration. Cotton is considered one of the Senate’s most aggressive culture warriors.
          </p>
          <p className="mb-4">
            He is often mentioned as a potential future presidential or cabinet candidate.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Populist Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "98%"],
              ["Pro‑Environment", "Pro‑Industry", "93%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "97%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "95%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span><span>{R}</span>
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
                <li>Led major legislation on China sanctions and military spending</li>
                <li>Advocated for tough sentencing laws and anti-riot bills</li>
                <li>Introduced immigration reform to limit legal entries</li>
                <li>Supported tax reform and deregulation under Trump</li>
                <li>Outspoken defender of traditional conservative values</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>New York Times op-ed calling for troops during protests sparked backlash</li>
                <li>Viewed as too extreme on foreign and criminal policy by critics</li>
                <li>Criticized for rhetoric on immigration and national identity</li>
                <li>Accused of undermining bipartisanship in key debates</li>
                <li>Hardline stance on abortion and LGBTQ+ rights</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <img
                src="/arkansasR.png"
                alt="2020"
                className="max-w-[150px] object-contain"
              />
              <p className="mt-2 text-sm">2020: R +33.4%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
