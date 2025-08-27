import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ParsonPage() {
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
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/parson.jpg"
              alt="Mike Parson"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        {/* Content box */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Mike Parson</h1>
          <p className="italic mb-4">
            "I've always held myself to a higher standard, whether I was in law enforcement, whether I was in the military. Share this Quote Mike Parson."
          </p>
          <p className="mb-4">
            Mike Parson has served as Governor of Missouri since 2018, after previously serving as Lieutenant Governor and in the state Senate. Parson emphasizes strong support for agriculture, workforce development, and law enforcement.
          </p>
          <p className="mb-4">
            Under his administration, Missouri has expanded rural broadband, cut taxes, and passed criminal justice reforms, all while maintaining a focus on conservative social policies.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          {/* Ideology bars */}
          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "90%"],
              ["Pro‑Environment", "Pro‑Industry", "85%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "90%"],
              ["Populist", "Establishment", "65%"],
              ["Dovish", "Hawkish", "75%"],
            ].map(([left, right, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1"><span>{left}</span><span>{right}</span></div>
                <div className="relative h-4 rounded-full" style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}>
                  <div className="absolute top-[-10px]" style={{ left: pos, transform: "translateX(-50%)" }}>
                    <span style={{ fontSize: "1.5rem" }}>⬆️</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements & Controversies */}
          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Expanded rural broadband access across Missouri</li>
                <li>Signed significant tax cut packages</li>
                <li>Supported workforce development and apprenticeship programs</li>
                <li>Promoted public safety and increased law enforcement funding</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for COVID-19 policy handling and slow vaccine rollout</li>
                <li>Faced scrutiny over limited Medicaid expansion efforts</li>
                <li>Opposed stricter gun control measures despite urban violence concerns</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/burns.png" alt="Burns McDonnell logo" className="w-6 h-6 mr-2" />
                <strong>Burns McDonnell</strong> (Engineering & construction) — $35,850
              </li>
              <li className="flex items-center">
                <img src="/diamond.webp" alt="Diamond Pet Foods logo" className="w-6 h-6 mr-2" />
                <strong>Diamond Pet Foods</strong> (Pet food manufacturing) — $21,200
              </li>
              <li className="flex items-center">
                <img src="/scrap.webp" alt="Midwest Scrap logo" className="w-6 h-6 mr-2" />
                <strong>Midwest Scrap Management</strong> (Recycling & scrap metal) — $18,550
              </li>
              <li className="flex items-center">
                <img src="/enterprise.avif" alt="Enterprise logo" className="w-6 h-6 mr-2" />
                <strong>Enterprise Holdings</strong> (Transportation & car rental) — $15,250
              </li>
              <li className="flex items-center">
                <img src="/herzog.png" alt="Herzog logo" className="w-6 h-6 mr-2" />
                <strong>Herzog Contracting</strong> (Construction & rail infrastructure) — $15,900
              </li>
            </ul>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2020", image: "/missouriR.png", margin: "R +16.6%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Parson ${e.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{e.year} Margin {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
