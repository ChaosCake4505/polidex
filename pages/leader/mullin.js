export default function MullinPage() {
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
          src="/mullin.jpg"
          alt="Markwayne Mullin"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Markwayne Mullin</h1>
        <p className="italic mb-4">
          "Fighting for Oklahoma values means standing strong for freedom and family."
        </p>

        <p className="mb-4">
          Markwayne Mullin has served as a U.S. Senator from Oklahoma since 2023, after a decade in the U.S. House. Known for his business background and deep ties to rural Oklahoma, Mullin champions strong conservative social values and economic freedom.
        </p>
        <p className="mb-4">
          Mullin focuses on energy independence, deregulation, and protecting gun rights. He has taken hardline positions on immigration and is a vocal supporter of law enforcement.
        </p>
        <p className="mb-4">
          He is seen as a populist conservative and has quickly become a prominent voice in the Senate.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "98%"],
            ["Pro‑Environment", "Pro‑Industry", "95%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "99%"],
            ["Populist", "Establishment", "60%"],
            ["Dovish", "Hawkish", "85%"],
          ].map(([leftLabel, rightLabel, position], i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span>{leftLabel}</span>
                <span>{rightLabel}</span>
              </div>
              <div
                className="relative h-4 rounded-full"
                style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}
              >
                <div
                  className="absolute top-[-10px]"
                  style={{ left: position, transform: "translateX(-50%)" }}
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
              <li>Promoted major pro-energy independence policies</li>
              <li>Strong advocate for deregulation and small business</li>
              <li>Defended Second Amendment and expanded gun rights</li>
              <li>Secured funding for rural infrastructure and water projects</li>
              <li>Focused on Native American affairs and tribal sovereignty</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for January 6 comments and election objections</li>
              <li>Backlash over strong anti-immigration rhetoric</li>
              <li>Faced ethics questions over business interests while in office</li>
              <li>Opposition to COVID-19 vaccine mandates</li>
              <li>Debates over funding priorities for tribal programs</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2022", image: "/oklahomaR.png", margin: "R +26.3%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Mullin ${elect.year}`}
                className="max-w-[150px] object-contain"
              />
              <p className="mt-2 text-sm">{elect.year} Margin {elect.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
