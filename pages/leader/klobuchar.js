export default function KlobucharPage() {
  return (
    <div className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8" style={{
      backgroundImage: "url('/bg4.jpg')", color: "black", fontFamily: "Georgia, serif",
    }}>
      <div className="md:w-1/3 flex justify-center items-start">
        <img src="/klobuchar.jpg" alt="Amy Klobuchar" className="w-full rounded-lg shadow-lg" style={{ maxHeight: "500px", objectFit: "cover" }} />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Amy Klobuchar</h1>
        <p className="italic mb-4">"Courage is about taking action, standing up for what's right, and getting things done."</p>
        <p className="mb-4">
          Amy Klobuchar, born in Plymouth, Minnesota, in 1960, has served as Minnesota’s senior U.S. Senator since 2007. Before her Senate career, Klobuchar was Hennepin County Attorney, where she gained a reputation for tough, pragmatic leadership and community-focused reforms.
        </p>
        <p className="mb-4">
          In the Senate, she is known for her bipartisan work on infrastructure, consumer protection, election security, and antitrust issues. Klobuchar has sponsored or co-sponsored a large number of bills, earning recognition as one of the Senate’s most effective legislators. She ran for president in 2020, emphasizing Midwest pragmatism and "common-sense politics," ultimately finishing third in the New Hampshire primary before endorsing Joe Biden.
        </p>
        <p className="mb-4">
          Klobuchar’s approach blends moderate liberalism with a strong focus on practical governance, making her a prominent figure in the Democratic Party's centrist wing. She remains popular in Minnesota, winning re-election with large margins.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Liberal</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "40%"],
            ["Pro‑Environment", "Pro‑Industry", "35%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "45%"],
            ["Populist", "Establishment", "55%"],
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
              <li>Led bipartisan legislation on infrastructure and antitrust reform</li>
              <li>Expanded support for veterans and rural broadband</li>
              <li>Championed election security and voting access improvements</li>
              <li>Known for high legislative productivity and consensus-building</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for tough management style and treatment of staff</li>
              <li>Faced scrutiny over handling of police misconduct cases as county attorney</li>
              <li>Moderate stances sometimes criticized by progressive activists</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2006", image: "/minnesotaLikelyD.png", margin: "D +20.2%" },
            { year: "2012", image: "/minnesotaLikelyD.png", margin: "D +34.7%" },
            { year: "2018", image: "/minnesotaLikelyD.png", margin: "D +24.1%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Klobuchar ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
