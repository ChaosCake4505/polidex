import Header from "../../components/header";
import Footer from "../../components/footer";

export default function GreenPage() {
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
            src="/green.jpg"
            alt="Josh Green"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Josh Green</h1>
          <p className="italic mb-4">
            "We will build a Hawaii where no one is left behind, and every family has an opportunity to thrive."
          </p>

          <p className="mb-4">
            Governor Josh Green is a physician and public servant who has served as the 9th Governor of Hawaii since 2022. Before becoming governor, he was lieutenant governor and a state senator, where he focused on healthcare reform and homelessness.
          </p>
          <p className="mb-4">
            As governor, Green has prioritized expanding access to affordable healthcare, addressing the homelessness crisis, and strengthening Hawaii's response to climate change and natural disasters. His medical background has shaped his approach to public health and emergency preparedness.
          </p>
          <p className="mb-4">
            Green is widely viewed as a pragmatic progressive who balances compassion with evidence-based policy, earning support across different parts of Hawaii's electorate.
          </p>

          {/* Ideology rating header */}
          <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>
          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "20%"],
              ["Pro‑Environment", "Pro‑Industry", "15%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "25%"],
              ["Populist", "Establishment", "30%"],
              ["Dovish", "Hawkish", "20%"],
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
                <li>Expanded affordable healthcare access</li>
                <li>Improved emergency response to wildfires and disasters</li>
                <li>Advanced policies to address homelessness</li>
                <li>Supported renewable energy initiatives</li>
                <li>Advocated for affordable housing developments</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticism over pace of homelessness solutions</li>
                <li>Pushback from developers on housing regulations</li>
                <li>Disagreements with legislature on budget priorities</li>
                <li>Concerns from unions over healthcare mandates</li>
                <li>Mixed reviews on COVID-19 travel restrictions</li>
              </ul>
            </div>
          </div>
          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/luke.jpg" alt="Luke logo" className="w-6 h-6 mr-2" />
                <strong>Luke, Sylvia J</strong> (Public official & attorney) — $35,382
              </li>
              <li className="flex items-center">
                <img src="/bankhawaii.png" alt="Bank of Hawaii logo" className="w-6 h-6 mr-2" />
                <strong>Bank of Hawaii</strong> (Financial services) — $32,000
              </li>
              <li className="flex items-center">
                <img src="/yamamoto.jpg" alt="Caliboso & Hetherington logo" className="w-6 h-6 mr-2" />
                <strong>Caliboso & Hetherington Yamamoto</strong> (Law and lobbying firm) — $12,000
              </li>
            </ul>
          </div>
          {/* Election images */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2022", image: "/hawaii.png", margin: "D +26.5%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Green ${elect.year}`}
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
