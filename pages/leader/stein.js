import Header from "../../components/header";
import Footer from "../../components/footer";

export default function SteinPage() {
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
              src="/stein.jpeg"
              alt="Josh Stein"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Josh Stein</h1>
          <p className="italic mb-4">
            "If you want to know what kind of Governor I'll be, take a look at my track record as Attorney General."
          </p>
          <p className="mb-4">
            Josh Stein became Governor of North Carolina in 2025 after serving as Attorney General from 2017 to 2025. Known for his focus on consumer protection and public health, Stein has championed bipartisan efforts to expand Medicaid and strengthen economic development.
          </p>
          <p className="mb-4">
            Throughout his career, Stein has emphasized environmental sustainability, criminal justice reform, and expanding opportunities for working families across the state.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Liberal</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "35%"],
              ["Pro‑Environment", "Pro‑Industry", "40%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "35%"],
              ["Populist", "Establishment", "45%"],
              ["Dovish", "Hawkish", "40%"],
            ].map(([left, right, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{left}</span><span>{right}</span>
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
                <li>Expanded Medicaid to cover more low-income North Carolinians</li>
                <li>Strengthened consumer protections and cracked down on scams</li>
                <li>Promoted clean energy and environmental conservation programs</li>
                <li>Advanced criminal justice reform and police accountability measures</li>
                <li>Invested in rural broadband and infrastructure improvements</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced pushback from business groups over environmental regulations</li>
                <li>Criticized by conservatives for supporting Medicaid expansion</li>
                <li>Accused by opponents of partisanship in election security measures</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/dukeuni.png" alt="Duke University" className="w-6 h-6 mr-2" />
                <strong>Duke University</strong> (Higher education & research) — $38,058
              </li>
              <li className="flex items-center">
                <img src="/redhat.jpg" alt="Red Hat" className="w-6 h-6 mr-2" />
                <strong>Red Hat Inc</strong> (Software & open-source technology) — $14,623
              </li>
              <li className="flex items-center">
                <strong>Cozen O'Connor</strong> (Law & lobbying) — $12,650
              </li>
              <li className="flex items-center">
                <img src="/duke.jpg" alt="Duke Energy" className="w-6 h-6 mr-2" />
                <strong>Duke Energy</strong> (Utilities & energy) — $12,555
              </li>
              <li className="flex items-center">
                <img src="/meta.jpg" alt="Meta" className="w-6 h-6 mr-2" />
                <strong>Meta</strong> (Technology & social media) — $12,400
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2024", image: "/northcarolinaLikelyD.png", margin: "D +14.8%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={elect.image} alt={`Stein ${elect.year}`} className="max-w-[150px] object-contain" />
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
