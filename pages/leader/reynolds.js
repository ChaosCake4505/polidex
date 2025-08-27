import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ReynoldsPage() {
  return (
    <>
      <Header />

      <div
        className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8 text-black font-serif"
        style={{
          backgroundImage: "url('/wash.webp')",
        }}
      >
        {/* Image section */}
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/reynolds.jpg"
              alt="Kim Reynolds"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        {/* Content box */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Kim Reynolds</h1>
          <p className="italic mb-4">"My message is that it's never too late. If it's something you want to do or if it's important to you, go for it."</p>

          <p className="mb-4">
            Kimberly Kay Reynolds began her public service as Clarke County Treasurer in 1994, holding that office through four terms. In 2009 she was elected to the Iowa Senate, and in 2011 became Lieutenant Governor under Terry Branstad. When Branstad resigned to become U.S. ambassador in 2017, Reynolds ascended to Iowa's governorship—the first woman to hold the office in state history—and was subsequently elected in her own right in 2018 and re-elected in 2022.
          </p>
          <p className="mb-4">
            During her tenure, Reynolds has championed tax relief, government efficiency, rural broadband expansion, and workforce development. She steered Iowa through the COVID‑19 crisis by opposing broad mandates while supporting targeted interventions, and recently signed a six‑week abortion ban and education reforms.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          {/* Ideology bars */}
          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "85%"],
              ["Pro‑Environment", "Pro‑Industry", "70%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "90%"],
              ["Populist", "Establishment", "65%"],
              ["Dovish", "Hawkish", "60%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1"><span>{L}</span><span>{R}</span></div>
                <div className="relative h-4 rounded-full" style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}>
                  <div className="absolute top-[-10px]" style={{ left: pos, transform: "translateX(-50%)" }}>
                    <span style={{ fontSize: "1.5rem" }}>⬆️</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements & Controversies */}
          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>First woman elected governor of Iowa</li>
                <li>Launched state “DOGE” Task Force to streamline government</li>
                <li>Expanded rural broadband, telehealth, and education funding</li>
                <li>Led conservative tax and regulatory reform efforts</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for COVID‑19 policy balance and reopening strategy</li>
                <li>Legislated six‑week abortion ban and limited transgender protections</li>
                <li>Endorsed DeSantis over Trump in 2024 GOP primary, causing intra‑party friction</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/doll.png" alt="Doll logo" className="w-6 h-6 mr-2" />
                <strong>Doll Distributing</strong> (Beverage distribution) — $75,000
              </li>
              <li className="flex items-center">
                <img src="/health.png" alt="IHCA logo" className="w-6 h-6 mr-2" />
                <strong>Iowa Health Care Association / Iowa Center For Assisted Living</strong> (Healthcare & senior living) — $35,000
              </li>
              <li className="flex items-center">
                <img src="/commodities.png" alt="Iowa Commodities logo" className="w-6 h-6 mr-2" />
                <strong>Iowa Commodities</strong> (Agriculture commodities) — $25,000
              </li>
              <li className="flex items-center">
                <strong>J T Broin Trust</strong> (Agriculture & philanthropy) — $25,000
              </li>
              <li className="flex items-center">
                <strong>Kent, James H</strong> (Agriculture & agribusiness) — $25,000
              </li>
            </ul>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/iowaLeanR.png", margin: "R +2.8%" },
              { year: "2022", image: "/iowaLikelyR.png", margin: "R +18.5%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Reynolds ${e.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{e.year} Margin {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
