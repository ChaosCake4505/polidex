export default function WarnockPage() {
  return (
    <div className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8" style={{
      backgroundImage: "url('/bg4.jpg')", color: "black", fontFamily: "Georgia, serif",
    }}>
      <div className="md:w-1/3 flex justify-center items-start">
        <img src="/warnock.jpg" alt="Raphael Warnock" className="w-full rounded-lg shadow-lg" style={{ maxHeight: "500px", objectFit: "cover" }} />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Raphael Warnock</h1>
        <p className="italic mb-4">"Georgia is stronger when its neighbors take care of one another."</p>
        <p className="mb-4">Serving since 2021 after a runoff, re-elected in 2022, Warnock champions healthcare, voting rights, and social justice.</p>
        <p className="mb-4">He has led Medicaid expansion efforts and co-sponsored key voting legislation.</p>
        <p className="mb-4">Warnock blends faith-rooted leadership with pragmatic progressive policy.</p>

        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "70%"],
            ["Pro‑Environment", "Pro‑Industry", "60%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "40%"],
            ["Populist", "Establishment", "55%"],
            ["Dovish", "Hawkish", "50%"],
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
              <li>Led efforts to expand Medicaid statewide</li>
              <li>Sponsored major voting rights bills</li>
              <li>Focused on criminal justice and prison reform</li>
              <li>Supported disaster relief funding in Georgia</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for support of federal spending by fiscal conservatives</li>
              <li>Debated over voting legislation priorities and timing</li>
              <li>Face criticism from progressive groups over moderate concessions</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <div className="flex flex-col items-center">
            <img src="/georgiaLeanD.png" alt="2022" className="max-w-[150px] object-contain" />
            <p className="mt-2 text-sm">2022 Margin D +2.0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
