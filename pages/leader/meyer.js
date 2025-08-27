import Header from "../../components/header";
import Footer from "../../components/footer";

export default function MeyerPage() {
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
              src="/meyer.jpg"
              alt="Matt Meyer"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        {/* Content box */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Matt Meyer</h1>
          <p className="italic mb-4">
            "Accepting an order produced by a power holder — internalizing its assumptions about duty, honor, and justice — delivers a stable form of obedience."
          </p>

          <p className="mb-4">
            Born in 1971 in Wilmington, Delaware, Meyer graduated from Brown University and earned his J.D. from the University of Michigan Law School. He worked as a teacher, diplomat, and attorney before entering politics. Meyer gained attention when elected New Castle County Executive in 2016, emphasizing fiscal responsibility and community development.
          </p>
          <p className="mb-4">
            Elected Governor in 2024, Meyer ran on a platform of economic modernization, climate leadership, and public health investment. His administration has prioritized technology-driven growth, coastal protection, and inclusive economic policies.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

          {/* Ideology bars */}
          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "35%"],
              ["Pro‑Environment", "Pro‑Industry", "30%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "45%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "45%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span>
                  <span>{R}</span>
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

          {/* Achievements & Controversies */}
          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Implemented statewide economic innovation initiatives</li>
                <li>Expanded coastal resilience and green infrastructure projects</li>
                <li>Improved access to affordable healthcare and mental health services</li>
                <li>Advanced public education investments and workforce training programs</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized by some progressives for pragmatic tax policy compromises</li>
                <li>Pushback from business groups over environmental regulations</li>
                <li>Questioned for close ties to tech and finance sector donors</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <strong>Michael Bloomberg</strong> (Media & philanthropy) — $250,000
              </li>
            </ul>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2024", image: "/delaware.png", margin: "D +17%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Meyer ${e.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
