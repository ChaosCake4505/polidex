export default function SmithPage() {
  return (
    <div className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8" style={{
      backgroundImage: "url('/bg4.jpg')", color: "black", fontFamily: "Georgia, serif",
    }}>
      <div className="md:w-1/3 flex justify-center items-start">
        <img src="/smith.jpg" alt="Tina Smith" className="w-full rounded-lg shadow-lg" style={{ maxHeight: "500px", objectFit: "cover" }} />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Tina Smith</h1>
        <p className="italic mb-4">"Minnesota needs leadership that listens, acts, and fights for working families."</p>
        <p className="mb-4">
          Tina Smith was born in New Mexico in 1958 and moved to Minnesota in the 1980s. She served as chief of staff to both Minneapolis Mayor R.T. Rybak and Governor Mark Dayton before being appointed lieutenant governor in 2015. When Senator Al Franken resigned in 2018, Smith was appointed to the U.S. Senate and later won a special election to keep her seat.
        </p>
        <p className="mb-4">
          In the Senate, Smith has focused on expanding access to affordable healthcare, supporting mental health initiatives, protecting reproductive rights, and promoting clean energy. She has built a reputation as a pragmatic progressive voice, working on policies that address both urban and rural community needs.
        </p>
        <p className="mb-4">
          Smith has also championed agricultural policy important to Minnesota’s farmers and supported robust investments in infrastructure and broadband. Her collaborative style has made her a trusted ally among progressives while maintaining connections with moderate Democrats across the Midwest.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "30%"],
            ["Pro‑Environment", "Pro‑Industry", "25%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "35%"],
            ["Populist", "Establishment", "45%"],
            ["Dovish", "Hawkish", "40%"],
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
              <li>Expanded mental health services and access</li>
              <li>Supported comprehensive climate and clean energy legislation</li>
              <li>Advocated for rural broadband and agricultural support</li>
              <li>Defended reproductive rights and women’s health access</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized by conservatives for strong abortion rights advocacy</li>
              <li>Faced pushback on aggressive environmental regulations</li>
              <li>Some rural voters view her as too urban-focused</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2018", image: "/minnesotaLikelyD.png", margin: "D +10.6%" },
            { year: "2020", image: "/minnesotaLikelyD.png", margin: "D +5.2%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Smith ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
