import Header from "../../components/header";
import Footer from "../../components/footer";

export default function LombardoPage() {
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
            src="/lombardo.jpg"
            alt="Joe Lombardo"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Joe Lombardo</h1>
          <p className="italic mb-4">
            "'s time to enact common sense legislation that restores safety to our streets and delivers justice for crime victims."
          </p>

          <p className="mb-4">
            Governor Joe Lombardo, elected in 2022, brought a law enforcement background to Nevada politics after serving as Clark County Sheriff. Lombardo ran as a moderate Republican, promising to focus on public safety, economic growth, and education reform.
          </p>
          <p className="mb-4">
            He has prioritized balancing economic development with maintaining Nevada’s low-tax environment and supporting small businesses. Lombardo has also focused on increasing school funding and improving government efficiency.
          </p>
          <p className="mb-4">
            While known for his pragmatic style, Lombardo has faced challenges navigating Nevada’s divided political climate and balancing bipartisan cooperation with conservative priorities.
          </p>

          {/* Ideology rating header */}
          <h2 className="text-center font-bold text-lg mt-8 mb-4">Moderate Conservative</h2>
          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "75%"],
              ["Pro‑Environment", "Pro‑Industry", "65%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "80%"],
              ["Populist", "Establishment", "40%"],
              ["Dovish", "Hawkish", "60%"],
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
                <li>Improved public safety initiatives statewide</li>
                <li>Expanded funding for K-12 education programs</li>
                <li>Promoted economic development and job creation</li>
                <li>Focused on reducing regulatory burdens for small businesses</li>
                <li>Strengthened law enforcement training and resources</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticism over school voucher proposals</li>
                <li>Debated stances on gun control and Second Amendment rights</li>
                <li>Pushback on handling of COVID-19 recovery funds</li>
                <li>Concerns over cooperation with Democratic legislature</li>
                <li>Accused of prioritizing business interests over environmental concerns</li>
              </ul>
            </div>
          </div>

          {/* Election images */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2022", image: "/nevadaLeanR.png", margin: "R +1.5%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Lombardo ${elect.year}`}
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
