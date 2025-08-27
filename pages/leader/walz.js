import Header from "../../components/header";
import Footer from "../../components/footer";

export default function WalzPage() {
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
              src="/walz.jpg"
              alt="Tim Walz"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        {/* Content box */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Tim Walz</h1>
          <p className="italic mb-4">
            "My first mission is to take care of our troops. I take that mission very personally."
          </p>

          <p className="mb-4">
            Tim Walz, born in 1964 in Nebraska, is Minnesota’s 41st governor and has been in office since 2019. Before his governorship, Walz served six terms in the U.S. House representing southern Minnesota's 1st district and was known as a moderate to progressive Democrat with a focus on veterans' affairs, agriculture, and education.
          </p>
          <p className="mb-4">
            A retired command sergeant major in the Army National Guard and a former high school teacher and coach, Walz brought a pragmatic and community-focused approach to politics. His “One Minnesota” vision emphasizes bridging urban-rural divides and supporting inclusive economic growth across the state.
          </p>
          <p className="mb-4">
            As governor, he has prioritized expanding education funding, improving healthcare accessibility, and addressing climate change through clean energy investments. He has also guided Minnesota through the COVID-19 pandemic and major civil unrest following George Floyd's murder, emphasizing both public health measures and police accountability reforms.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>

          {/* Ideology bars */}
          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "45%"],
              ["Pro‑Environment", "Pro‑Industry", "35%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "40%"],
              ["Populist", "Establishment", "50%"],
              ["Dovish", "Hawkish", "40%"],
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
                <li>Passed major education funding increases and free school meals</li>
                <li>Signed landmark clean energy and climate legislation</li>
                <li>Expanded healthcare access and lowered prescription costs</li>
                <li>Implemented police accountability and criminal justice reforms</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for emergency COVID-19 restrictions and business closures</li>
                <li>Faced backlash for response to Minneapolis unrest</li>
                <li>Debates over rural representation in policy priorities</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/lsn.jpg" alt="LSN logo" className="w-6 h-6 mr-2" />
                <strong>LSN Partners</strong> (Government relations & consulting) — $6,000
              </li>
              <li className="flex items-center">
                <img src="/umn.jpg" alt="University of Minnesota logo" className="w-6 h-6 mr-2" />
                <strong>University of Minnesota</strong> (Public university & education) — $5,800
              </li>
              <li className="flex items-center">
                <img src="/lockridge.png" alt="Lockridge logo" className="w-6 h-6 mr-2" />
                <strong>Lockridge Grindal Nauen PLLP</strong> (Law & lobbying firm) — $4,875
              </li>
            </ul>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/minnesotaLikelyD.png", margin: "D +11.4%" },
              { year: "2022", image: "/minnesotaLikelyD.png", margin: "D +7.7%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Walz ${elect.year}`}
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
