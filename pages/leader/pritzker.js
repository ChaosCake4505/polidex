import Header from "../../components/header";
import Footer from "../../components/footer";

export default function PritzkerPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8 text-black font-serif" style={{
        backgroundImage: "url('/wash.webp')",
      }}>
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img src="/pritzker.jpg" alt="J.B. Pritzker" className="w-full h-full object-cover transition hover:scale-105" />
          </div>
        </div>
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor J.B. Pritzker</h1>
          <p className="italic mb-4">"There are not 'many sides' in the fight against hatred and bigotry. There is only right and wrong."</p>
          <p className="mb-4">
            Jay Robert "J.B." Pritzker, born in 1965 in California, is a businessman, philanthropist, and the 43rd governor of Illinois since 2019. A member of the prominent Pritzker family, he founded and led tech-focused investments and philanthropic initiatives before entering politics.
          </p>
          <p className="mb-4">
            As governor, Pritzker has prioritized progressive taxation, social equity, and infrastructure modernization. He successfully enacted a major capital plan to rebuild roads, bridges, and schools, and pushed for a graduated income tax amendment (though it was rejected by voters).
          </p>
          <p className="mb-4">
            Pritzker's tenure also included legalization of recreational cannabis, significant expansion of healthcare access, and nation-leading climate legislation aimed at reaching 100% clean energy by 2050. He earned national recognition for his COVID-19 response, often clashing with the Trump administration over public health measures.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "35%"],
              ["Pro‑Environment", "Pro‑Industry", "30%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "40%"],
              ["Populist", "Establishment", "60%"],
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

          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Legalized recreational cannabis in Illinois</li>
                <li>Passed largest infrastructure investment in state history</li>
                <li>Expanded access to healthcare and mental health services</li>
                <li>Advanced ambitious clean energy transition goals</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for property tax appeals on his mansion to lower bills</li>
                <li>Faced opposition over proposed graduated income tax</li>
                <li>Conflict with business groups over labor and environmental policies</li>
              </ul>
            </div>
          </div>

          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Top Donors</h2>
            <p className="font-medium">Self-funded billionaire</p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2018", image: "/illinois.png", margin: "D +15.0%" },
              { year: "2022", image: "/illinoisLikely.png", margin: "D +12.5%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Pritzker ${e.year}`} className="max-w-[150px] object-contain" />
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
