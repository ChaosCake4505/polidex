import Header from "../../components/header";
import Footer from "../../components/footer";

export default function PolisPage() {
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
            src="/polis.jpg"
            alt="Jared Polis"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Jared Polis</h1>
          <p className="italic mb-4">
            "We are a diverse country, but we are one country. And we are at our best when we come together as Americans, not despite our differences, but in celebration of them."
          </p>

          <p className="mb-4">
            Jared Polis was elected as Governor of Colorado in 2018, becoming the first openly gay man elected governor in U.S. history. Known for his progressive yet pragmatic approach, Polis has focused on healthcare expansion, education funding, and clean energy initiatives.
          </p>
          <p className="mb-4">
            Prior to serving as governor, Polis was a U.S. Representative and successful entrepreneur. His policy style often combines bold social reforms with fiscally responsible budgeting and tech-focused innovation.
          </p>
          <p className="mb-4">
            Polis has been praised for his leadership during crises, including wildfires and the COVID-19 pandemic, though he has also faced criticism over public health mandates and energy transition policies.
          </p>

          {/* Ideology rating header */}
          <h2 className="text-center font-bold text-lg mt-8 mb-4">Libertarian-Left</h2>
          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "30%"],
              ["Pro‑Environment", "Pro‑Industry", "25%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "40%"],
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
                <li>Expanded universal full-day kindergarten across Colorado</li>
                <li>Advanced bold renewable energy targets</li>
                <li>Increased healthcare coverage access statewide</li>
                <li>Supported affordable housing and tech job growth</li>
                <li>Modernized transportation and infrastructure projects</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticism over strict COVID-19 mandates and restrictions</li>
                <li>Debated approach to oil and gas regulation</li>
                <li>Opposition from rural communities on certain policies</li>
                <li>Contentious education funding negotiations</li>
                <li>Concerns about rapid urban growth impacts</li>
              </ul>
            </div>
          </div>
          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <p className="text-center italic">No Major Donors</p>
          </div>
          {/* Election images */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/coloradoLikelyD.png", margin: "D +10.6%" },
              { year: "2022", image: "/colorado.png", margin: "D +19.3%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Polis ${elect.year}`}
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
