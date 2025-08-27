export default function MoodyPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8"
      style={{
        backgroundImage: "url('/bg4.jpg')",
        color: "black",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* Image on the left */}
      <div className="md:w-1/3 flex justify-center items-start">
        <img
          src="/moody.jpg"
          alt="Ashley Moody"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* Content on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Ashley Moody</h1>
        <p className="italic mb-4">
          "Defending Florida means defending freedom and law and order."
        </p>

        <p className="mb-4">
          Former Florida Attorney General (2019–2025), Moody was appointed to the U.S. Senate by Governor Ron DeSantis on January 21, 2025. She is Florida’s second female senator.
        </p>
        <p className="mb-4">
          As AG, Moody aggressively defended state policies — filing suits against the Affordable Care Act, opposing marijuana legalization and abortion initiatives, and challenging federal pandemic mandates.
        </p>
        <p className="mb-4">
          In 2025, she began her Senate term and is set to run in a 2026 special election to complete the term.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "95%"],
            ["Pro‑Environment", "Pro‑Industry", "88%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "94%"],
            ["Populist", "Establishment", "70%"],
            ["Dovish", "Hawkish", "85%"],
          ].map(([leftLabel, rightLabel, position], i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span>{leftLabel}</span><span>{rightLabel}</span>
              </div>
              <div className="relative h-4 rounded-full" style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}>
                <div className="absolute top-[-10px]" style={{ left: position, transform: "translateX(-50%)" }}>
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
              <li>Secured opioid settlement funds and promoted naloxone distribution</li>
              <li>Led legal fights on immigration enforcement and vaccine mandates</li>
              <li>Blocked marijuana and abortion ballot initiatives on legal grounds</li>
              <li>Received “Back the Blue” awards and supported law enforcement initiatives</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for blocking voter initiatives on marijuana and abortion</li>
              <li>Joined lawsuit attempting to overturn the 2020 presidential election</li>
              <li>Accused of partisanship in legal challenges to federal policy</li>
            </ul>
          </div>
        </div>

        {/* Appointment Info */}
        <div className="mt-12">
          <p>
            Appointed on January 21, 2025, to fill Marco Rubio's seat. She will run in the November 2026 special election to complete the term.
          </p>
        </div>
      </div>
    </div>
  );
}
