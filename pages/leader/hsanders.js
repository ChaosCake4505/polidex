import Header from "../../components/header";
import Footer from "../../components/footer";

export default function SandersPage() {
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
              src="/huckabeesanders.jpg"
              alt="Sarah Huckabee Sanders"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Sarah Huckabee Sanders</h1>
          <p className="italic mb-4">
            "I think crime is probably driven more by morality than anything else."
          </p>

          <p className="mb-4">
            Sarah Huckabee Sanders has served as Governor of Arkansas since 2023. Prior to her election, she gained national prominence as White House Press Secretary under President Donald Trump.
          </p>
          <p className="mb-4">
            Sanders has focused her governorship on education reform, tax relief, and banning what she calls "woke indoctrination" in schools. She is a strong advocate for conservative cultural policy and school choice.
          </p>
          <p className="mb-4">
            As the daughter of former Governor Mike Huckabee, she continues a family legacy in Arkansas politics while emerging as a national figure in the GOP.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "94%"],
              ["Pro‑Environment", "Pro‑Industry", "88%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
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

          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Signed major K-12 education reform law (LEARNS Act)</li>
                <li>Cut income taxes across brackets</li>
                <li>Banned CRT-related content in public schools</li>
                <li>Expanded school voucher eligibility statewide</li>
                <li>Promoted rural infrastructure investment</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for banning AP African American Studies pilot</li>
                <li>Faced lawsuits over FOIA changes</li>
                <li>Accused of excessive partisanship on cultural issues</li>
                <li>Backlash over treatment of public school systems</li>
                <li>Concerns from media groups over press access</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <p className="font-medium text-center">Former lobbyist and backed mainly by RNC</p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <img
                src="/arkansasR.png"
                alt="2022"
                className="max-w-[150px] object-contain"
              />
              <p className="mt-2 text-sm">2022 Margin R +28.0%</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
