import Header from "../../components/header";
import Footer from "../../components/footer";

export default function RhodenPage() {
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
            src="/rhoden.jpg"
            alt="Larry Rhoden"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Larry Rhoden</h1>
          <p className="italic mb-4">
            "South Dakota has become the freest state in a nation founded on the principle of freedom."
          </p>

          <p className="mb-4">
            Larry Rhoden, a longtime rancher and legislator, became Governor of South Dakota in 2023. Known for his staunch conservative values, Rhoden emphasizes agricultural strength, fiscal responsibility, and protecting individual liberties.
          </p>
          <p className="mb-4">
            During his time in office, Rhoden has focused on rural economic development, resisting federal overreach, and supporting pro-life and pro-Second Amendment policies. He is known for his practical, straightforward style and connection to grassroots voters.
          </p>
          <p className="mb-4">
            His policies have drawn praise from traditional conservatives but also faced criticism from environmentalists and advocates for expanding social services.
          </p>

          {/* Ideology rating header */}
          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Republican</h2>
          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "90%"],
              ["Pro‑Environment", "Pro‑Industry", "85%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
              ["Populist", "Establishment", "55%"],
              ["Dovish", "Hawkish", "70%"],
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
                <li>Strengthened agricultural and ranching industry support</li>
                <li>Maintained a balanced state budget with strong reserves</li>
                <li>Expanded rural broadband and infrastructure improvements</li>
                <li>Protected gun rights and reinforced pro-life measures</li>
                <li>Advanced economic incentives for small businesses</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for limited support to environmental initiatives</li>
                <li>Debated handling of public health and COVID measures</li>
                <li>Concerns about rural-urban policy divides</li>
                <li>Accusations of favoring large agricultural interests</li>
                <li>Pushback on education funding decisions</li>
              </ul>
            </div>
          </div>
          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/pfizer.webp" alt="Pfizer logo" className="w-6 h-6 mr-2" />
                <strong>Pfizer Inc.</strong> (Pharmaceutical manufacturer) — $250
              </li>
            </ul>
          </div>

          {/* Election images */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2022", image: "/south dakota.png", margin: "R +32%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Rhoden ${elect.year}`}
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
