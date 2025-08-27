import Header from "../../components/header";
import Footer from "../../components/footer";

export default function CoxPage() {
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
            src="/cox.jpg"
            alt="Spencer Cox"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Spencer Cox</h1>
          <p className="italic mb-4">
            "We are confusing conservatism with anger and hate and polarization."
          </p>

          <p className="mb-4">
            Governor Spencer Cox was elected in 2020 and re-elected in 2024. Known for his calm, pragmatic leadership, Cox emphasizes bipartisanship and civil discourse while maintaining strong conservative positions on most issues. His leadership style has earned him widespread respect across party lines in Utah.
          </p>
          <p className="mb-4">
            Cox has focused on improving rural broadband access, promoting mental health initiatives, and supporting economic diversification. He is also a vocal advocate for religious freedom and local control over public land policies.
          </p>
          <p className="mb-4">
            Despite occasional disagreements with the national Republican Party, Cox remains a staunch conservative on fiscal and social issues, prioritizing Utah’s unique values.
          </p>

          {/* Ideology rating header */}
          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Conservative</h2>
          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
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

          {/* Achievements and Controversies */}
          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Expanded rural broadband infrastructure</li>
                <li>Advanced mental health initiatives statewide</li>
                <li>Promoted economic diversification and tech growth</li>
                <li>Supported religious freedom legislation</li>
                <li>Strengthened public land management policies</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for moderate COVID-19 response policies</li>
                <li>Faced pushback on water conservation efforts</li>
                <li>Debates over his stances on LGBTQ+ rights issues</li>
                <li>Conflict with national GOP on certain federal mandates</li>
                <li>Accusations of insufficient environmental protections</li>
              </ul>
            </div>
          </div>
         {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/reagan.png" alt="Reagan Outdoor logo" className="w-6 h-6 mr-2" />
                <strong>Reagan Outdoor Advertising</strong> (Advertising and billboards) — $106,000
              </li>
              <li className="flex items-center">
                <img src="/zions.jpg" alt="Zions Bancorp logo" className="w-6 h-6 mr-2" />
                <strong>Zions Bancorp</strong> (Financial services and banking) — $105,280
              </li>
              <li className="flex items-center">
                <img src="/andrus.png" alt="Andrus Family Office logo" className="w-6 h-6 mr-2" />
                <strong>Andrus Family Office Services</strong> (Private wealth and family office management) — $100,000
              </li>
              <li className="flex items-center">
                <img src="/premco.jpg" alt="Premium Incentive Sales logo" className="w-6 h-6 mr-2" />
                <strong>Premium Incentive Sales Inc</strong> (Corporate incentives and promotional goods) — $61,890
              </li>
              <li className="flex items-center">
                <img src="/miller.webp" alt="Larry H. Miller Group logo" className="w-6 h-6 mr-2" />
                <strong>Larry H. Miller Group</strong> (Automotive, sports, and real estate) — $60,500
              </li>
            </ul>
          </div>

          {/* Election images */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2020", image: "/utah.png", margin: "R +32%" },
              { year: "2024", image: "/utah.png", margin: "R +26%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Cox ${elect.year}`}
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
