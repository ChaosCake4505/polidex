import Header from "../../components/header";
import Footer from "../../components/footer";

export default function StittPage() {
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
          <img
            src="/stitt.jpg"
            alt="Kevin Stitt"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Content box */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Kevin Stitt</h1>
          <p className="italic mb-4">
            "This agency needs real reform—not politics, not corruption. We need to hold government accountable and ensure we're serving people without bureaucracy."
          </p>

          <p className="mb-4">
            Kevin Stitt has served as the 28th Governor of Oklahoma since 2019. A businessman and founder of Gateway Mortgage Group, Stitt ran on a platform of government efficiency, economic growth, and strong conservative values.
          </p>
          <p className="mb-4">
            As governor, Stitt prioritized tax cuts, deregulation, education reform, and an emphasis on state sovereignty. He has been vocal about limiting federal influence and expanding local control over policy.
          </p>
          <p className="mb-4">
            Stitt is viewed as a rising Republican figure, closely aligned with the national conservative movement and popular among the GOP base.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Republican</h2>

          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "95%"],
              ["Pro‑Environment", "Pro‑Industry", "90%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "98%"],
              ["Populist", "Establishment", "65%"],
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

          {/* Achievements & Controversies */}
          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Promoted major tax and regulation cuts to stimulate business</li>
                <li>Advocated for school choice and education reform</li>
                <li>Expanded broadband access in rural areas</li>
                <li>Improved state financial reserves and credit rating</li>
                <li>Strengthened state sovereignty through legal challenges</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for handling of COVID-19 restrictions and mandates</li>
                <li>Conflicts with tribal nations over gaming compacts</li>
                <li>Debates over public health and rural hospital funding</li>
                <li>Concerns about school voucher proposals impacting public schools</li>
                <li>Clashes with state agencies and legislature on policy priorities</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/gateway.png" alt="Gateway First Bank logo" className="w-6 h-6 mr-2" />
                <strong>Gateway First Bank</strong> (Banking & finance) — $30,625
              </li>
              <li className="flex items-center">
                <img src="/hntb.jpg" alt="HNTB Corp logo" className="w-6 h-6 mr-2" />
                <strong>HNTB Corp</strong> (Infrastructure & engineering) — $27,600
              </li>
              <li className="flex items-center">
                <img src="/hilliary.png" alt="Hilliary Communications logo" className="w-6 h-6 mr-2" />
                <strong>Hilliary Communications</strong> (Telecommunications) — $17,500
              </li>
              <li className="flex items-center">
                <img src="/crossland.png" alt="Crossland Construction logo" className="w-6 h-6 mr-2" />
                <strong>Crossland Construction</strong> (Construction services) — $17,400
              </li>
              <li className="flex items-center">
                <img src="/gateway.png" alt="Gateway Mortgage logo" className="w-6 h-6 mr-2" />
                <strong>Gateway Mortgage</strong> (Mortgage lending) — $15,875
              </li>
            </ul>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/oklahomaLikelyR.png", margin: "R +12.0%" },
              { year: "2022", image: "/oklahomaLikelyR.png", margin: "R +13.6%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Stitt ${elect.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{elect.year} Margin {elect.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
