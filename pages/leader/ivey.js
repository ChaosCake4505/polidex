import Header from "../../components/header";
import Footer from "../../components/footer";


export default function IveyPage() {
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
            src="/ivey.jpg"
            alt="Kay Ivey"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }} // Taller image
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Kay Ivey</h1>
          <p className="italic mb-4">
            "Providing a high-quality education for all Alabamians, at every stage of life, is my goal."
          </p>

<p className="mb-4">
  Kay Ivey has served as Alabama’s governor since 2017, after previously holding office as lieutenant governor and state treasurer. Known for her steady, pragmatic leadership style, she has championed economic growth, rural infrastructure, and workforce development as central pillars of her administration.
</p>
<p className="mb-4">
  A strong supporter of pro-business initiatives, Ivey has also prioritized expanding broadband access and modernizing the state’s transportation systems to better connect communities. In education, she has emphasized career readiness and technical training to prepare students for Alabama’s evolving job market.
</p>
<p className="mb-4">
  Ivey maintains firm conservative positions on social issues, including strict anti-abortion laws and strong Second Amendment protections, aligning her closely with Alabama’s Republican base. While she has faced criticism for her approaches to healthcare expansion and prison reform, she remains one of the state’s most popular and influential leaders.
</p>

{/* Ideology rating header */}
          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Republican</h2>
          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "94%"],
              ["Pro‑Environment", "Pro‑Industry", "88%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "96%"],
              ["Populist", "Establishment", "70%"],
              ["Dovish", "Hawkish", "75%"],
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
                <li>Expanded major workforce development initiatives</li>
                <li>Led record economic development and job recruitment</li>
                <li>Improved rural broadband access statewide</li>
                <li>Strengthened pro-life and pro-gun policies</li>
                <li>Promoted infrastructure modernization projects</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for slow Medicaid expansion consideration</li>
                <li>Faced opposition over COVID-19 vaccine messaging</li>
                <li>Accused of inadequate prison reform efforts</li>
                <li>Debated approach to teacher pay and school funding</li>
                <li>Challenges balancing industrial growth with environment</li>
              </ul>
            </div>
          </div>
{/* Top Donors */}
<div className="mt-12 border-t border-dotted pt-8">
  <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
  <ul className="list-none flex flex-col items-start space-y-4">
    <li className="flex items-center">
      <img src="/fine.png" alt="Fine Geddie & Associates" className="w-6 h-6 mr-2" />
      <strong>Fine Geddie & Associates</strong> (Government relations & lobbying) — $415,000
    </li>
    <li className="flex items-center">
      <strong>Richardson, E Clark</strong> (Business executive & agriculture) — $363,500
    </li>
    <li className="flex items-center">
      <img src="/commerce.png" alt="US Chamber of Commerce" className="w-6 h-6 mr-2" />
      <strong>US Chamber of Commerce</strong> (National business advocacy group) — $175,000
    </li>
    <li className="flex items-center">
      <strong>Moore, Eh</strong> (Construction & real estate developer) — $165,000
    </li>
    <li className="flex items-center">
      <img src="/apower.png" alt="Alabama Power Co" className="w-6 h-6 mr-2" />
      <strong>Alabama Power Co</strong> (Energy & utilities) — $130,000
    </li>
  </ul>
</div>

          {/* Election images */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/alabamaR.png", margin: "R +19.0%" },
              { year: "2022", image: "/alabamaR.png", margin: "R +35.9%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Ivey ${elect.year}`}
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
