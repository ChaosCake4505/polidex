export default function OssoffPage() {
  return (
    <div className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8" style={{
      backgroundImage: "url('/bg4.jpg')", color: "black", fontFamily: "Georgia, serif",
    }}>
      <div className="md:w-1/3 flex justify-center items-start">
        <img src="/ossoff.jpg" alt="Jon Ossoff" className="w-full rounded-lg shadow-lg" style={{ maxHeight: "500px", objectFit: "cover" }} />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Jon Ossoff</h1>
        <p className="italic mb-4">"Democracy works best when everyone has a seat at the table."</p>
        <p className="mb-4">Serving since 2021 after a 2020 special runoff, Ossoff is a pragmatic Democrat focused on infrastructure, voting rights, and national security.</p>
        <p className="mb-4">He co-sponsored bipartisan infrastructure bills and champions tech policy and education.</p>
        <p className="mb-4">Viewed as rising Democratic leadership within the state and nationally.</p>

        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "60%"],
            ["Pro‑Environment", "Pro‑Industry", "55%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "45%"],
            ["Populist", "Establishment", "50%"],
            ["Dovish", "Hawkish", "60%"],
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

        <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Achievements</h2>
            <ul className="list-disc list-inside">
              <li>Co-sponsored historic bipartisan infrastructure legislation</li>
              <li>Championed voting rights and election security measures</li>
              <li>Advocated for expanding rural broadband access</li>
              <li>Focused on defense and intelligence committee oversight</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for moderate stances by progressive base</li>
              <li>Faced scrutiny over campaign fundraising from tech lobbyists</li>
              <li>Accused of insufficient action on healthcare reform</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <div className="flex flex-col items-center">
            <img src="/georgiaLeanD.png" alt="2020" className="max-w-[150px] object-contain" />
            <p className="mt-2 text-sm">2020 Margin D +1.0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
