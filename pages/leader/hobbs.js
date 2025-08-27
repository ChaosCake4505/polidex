import Header from "../../components/header";
import Footer from "../../components/footer";

export default function HobbsPage() {
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
            src="/hobbs.jpg"
            alt="Katie Hobbs"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Katie Hobbs</h1>
          <p className="italic mb-4">
            "I know we've got what it takes to turn our challenges into opportunities — opportunities to make Arizona the best place to live, work, and raise a family."
          </p>

          <p className="mb-4">
            Katie Hobbs was elected Governor of Arizona in 2022 after serving as Secretary of State. Known for her steadfast defense of election integrity and voting rights, Hobbs represents a pragmatic progressive approach in a rapidly shifting state.
          </p>
          <p className="mb-4">
            As Governor, she has prioritized public education funding, reproductive rights, and water security amid ongoing drought concerns. Hobbs has also worked to expand access to healthcare and support rural development initiatives.
          </p>
          <p className="mb-4">
            While she has gained strong support from Democrats and independents, Hobbs has faced pushback from conservatives over her stances on immigration and pandemic policy measures.
          </p>

          {/* Ideology rating header */}
          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Liberal</h2>
          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "35%"],
              ["Pro‑Environment", "Pro‑Industry", "40%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "45%"],
              ["Populist", "Establishment", "50%"],
              ["Dovish", "Hawkish", "35%"],
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
                <li>Defended Arizona's election system against misinformation</li>
                <li>Increased funding for public education and teacher pay</li>
                <li>Advanced reproductive health protections</li>
                <li>Implemented new water conservation measures</li>
                <li>Expanded healthcare access in rural communities</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for handling of border security and enforcement</li>
                <li>Debates over pandemic-related executive orders</li>
                <li>Opposition from GOP-led legislature on budget priorities</li>
                <li>Pushback on renewable energy transition strategies</li>
                <li>Legal challenges regarding reproductive policy initiatives</li>
              </ul>
            </div>
          </div>
         {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/asu.webp" alt="ASU logo" className="w-6 h-6 mr-2" />
                <strong>Arizona State University</strong> (Public university and research) — $45,514
              </li>
              <li className="flex items-center">
                <img src="/uarizona.png" alt="University of Arizona logo" className="w-6 h-6 mr-2" />
                <strong>University of Arizona</strong> (Public university and research) — $37,932
              </li>
              <li className="flex items-center">
                <img src="/srp.png" alt="Salt River Project logo" className="w-6 h-6 mr-2" />
                <strong>Salt River Project</strong> (Water & power utility) — $27,911
              </li>
              <li className="flex items-center">
                <img src="/bannerH.jpg" alt="Banner Health logo" className="w-6 h-6 mr-2" />
                <strong>Banner Health</strong> (Healthcare services) — $25,839
              </li>
              <li className="flex items-center">
                <img src="/intel.png" alt="Intel logo" className="w-6 h-6 mr-2" />
                <strong>Intel Corp</strong> (Semiconductor and tech) — $22,985
              </li>
            </ul>
          </div>
          {/* Election images */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2022", image: "/arizonaLeanD.png", margin: "D +0.3%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Hobbs ${elect.year}`}
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
