import Header from "../../components/header";
import Footer from "../../components/footer";

export default function HealeyPage() {
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
              src="/healey.jpg"
              alt="Maura Healey"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        {/* Content box */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Maura Healey</h1>
          <p className="italic mb-4">
            "The Constitution is clear — every child born within our borders deserves the same rights and freedoms as anyone else."
          </p>

          <p className="mb-4">
            Born in 1971 and raised in New Hampshire, Healey graduated from Harvard College, where she was captain of the basketball team, and later earned her J.D. from Northeastern University School of Law. She began her career as a civil rights attorney and led the Civil Rights Division in the Massachusetts Attorney General’s office before being elected Attorney General in 2014.
          </p>
          <p className="mb-4">
            In 2022, Healey was elected as Massachusetts’ first woman and openly LGBTQ+ governor, winning by nearly 30 points. Since taking office, she has emphasized climate leadership, affordability, and workforce development, positioning Massachusetts as a national model for progressive governance.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>

          {/* Ideology bars */}
          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "25%"],
              ["Pro‑Environment", "Pro‑Industry", "30%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "38%"],
              ["Populist", "Establishment", "52%"],
              ["Dovish", "Hawkish", "45%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1"><span>{L}</span><span>{R}</span></div>
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
                <li>Established the state’s first cabinet-level Climate Chief and launched major clean energy initiatives</li>
                <li>Expanded free school meal programs and increased public education funding</li>
                <li>Implemented tuition-free community college for adults over 25 and strengthened job training programs</li>
                <li>Advanced major housing affordability and infrastructure plans across the state</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced criticism for perceived slow rollout of some transit and infrastructure improvements</li>
                <li>Debated over balancing environmental goals with business incentives and economic growth</li>
                <li>Some skepticism over transparency and communication in large-scale contract negotiations</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <strong>WilmerHale</strong> (Law firm & legal services) — $34,745
              </li>
              <li className="flex items-center">
                <strong>Massachusetts Mutual Life Insurance</strong> (Insurance & financial services) — $21,705
              </li>
              <li className="flex items-center">
                <img src="/liberty.jpg" alt="Liberty Mutual" className="w-6 h-6 mr-2" />
                <strong>Liberty Mutual</strong> (Insurance & risk management) — $20,623
              </li>
              <li className="flex items-center">
                <img src="/deloitte.png" alt="Deloitte" className="w-6 h-6 mr-2" />
                <strong>Deloitte Touche Tohmatsu</strong> (Consulting & audit services) — $17,395
              </li>
              <li className="flex items-center">
                <img src="/newmark.jpg" alt="Newmark" className="w-6 h-6 mr-2" />
                <strong>Newmark</strong> (Real estate & advisory services) — $16,400
              </li>
            </ul>
          </div>

          {/* Electoral history */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2022", image: "/massachusetts.png", margin: "D +29.1%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Healey ${e.year}`} className="max-w-[150px] object-contain" />
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
