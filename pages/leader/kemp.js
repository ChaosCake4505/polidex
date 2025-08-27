import Header from "../../components/header";
import Footer from "../../components/footer";

export default function KempPage() {
  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8 text-black font-serif"
        style={{
          backgroundImage: "url('/wash.webp')",
        }}
      >
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/kemp.jpg"
              alt="Brian Kemp"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Brian Kemp</h1>
          <p className="italic mb-4">
            "That's something I've prided myself on: doing exactly what I tell people when I'm running."
          </p>
          <p className="mb-4">
            Brian Kemp has served as Governor of Georgia since 2019, following his term as Secretary of State. A staunch conservative, he emphasizes election security, economic growth, and rural development.
          </p>
          <p className="mb-4">
            Kemp has championed tax cuts, expanded broadband, and conservative education reforms. He signed significant election legislation post-2020 and defeated Stacey Abrams in a high-profile 2022 rematch.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "80%"],
              ["Pro‑Environment", "Pro‑Industry", "70%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "85%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "55%"],
            ].map(([leftLabel, rightLabel, position], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{leftLabel}</span>
                  <span>{rightLabel}</span>
                </div>
                <div className="relative h-4 rounded-full" style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}>
                  <div className="absolute top-[-10px]" style={{ left: position, transform: "translateX(-50%)" }}>
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
                <li>Passed major tax cuts and business incentives</li>
                <li>Expanded rural broadband and infrastructure funding</li>
                <li>Signed conservative election reform laws</li>
                <li>Promoted vocational education and workforce training</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for restrictive voting access and absentee ballot policies</li>
                <li>Faced backlash over COVID-era school funding decisions</li>
                <li>Accused of politicizing state elections infrastructure</li>
                <li>Debated approach to Medicaid expansion and healthcare policy</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <strong>James Raymond</strong> (Private investor & philanthropist) — $4,011,917
              </li>
              <li className="flex items-center">
                <img src="/sands.jpg" alt="Las Vegas Sands" className="w-6 h-6 mr-2" />
                <strong>Las Vegas Sands</strong> (Casino & hospitality) — $1,000,000
              </li>
              <li className="flex items-center">
                <strong>Hardworking Georgians</strong> (Georgia-based conservative PAC) — $500,000
              </li>
              <li className="flex items-center">
                <img src="/ice.png" alt="Intercontinental Exchange" className="w-6 h-6 mr-2" />
                <strong>Intercontinental Exchange Inc</strong> (Financial services & trading platforms) — $341,397
              </li>
              <li className="flex items-center">
                <img src="/crown.jpg" alt="Georgia Crown" className="w-6 h-6 mr-2" />
                <strong>Georgia Crown Distributing Co.</strong> (Beverage distribution) — $300,000
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/georgiaLikelyR.png", margin: "R +7.0%" },
              { year: "2022", image: "/georgiaLeanR.png", margin: "R +4.0%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Kemp ${elect.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{elect.year}: {elect.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
