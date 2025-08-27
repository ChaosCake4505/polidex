export default function HustedPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8"
      style={{
        backgroundImage: "url('/bg4.jpg')",
        color: "black",
        fontFamily: "Georgia, serif",
      }}
    >
      <div className="md:w-1/3 flex justify-center items-start">
        <img
          src="/husted.jpg"
          alt="Jon Husted"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Jon Husted</h1>
        <p className="italic mb-4">
          "I'm focused on serving Ohioans with experience, integrity, and a commitment to bipartisanship in Washington."
        </p>

        <p className="mb-4">
  Born August 25, 1967, in Royal Oak, Michigan, Husted was adopted and raised in Montpelier, Ohio. He earned his B.A. and M.A. from the University of Dayton. Husted began public service in the Ohio House (2001–09), then served in the State Senate (2009–11), as Speaker (2005–09), and was Ohio Secretary of State (2011–19). He was elected Lieutenant Governor in 2018 and re-elected in 2022.
</p>
<p className="mb-4">
  In January 2025, Governor Mike DeWine appointed Husted to the U.S. Senate to fill the vacancy left by Vice President–elect J.D. Vance. He was sworn in on January 21 and will serve until a special election in November 2026.
</p>


        <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Republican</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "90%"],
            ["Pro‑Environment", "Pro‑Industry", "70%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "85%"],
            ["Populist", "Establishment", "80%"],
            ["Dovish", "Hawkish", "60%"],
          ].map(([L, R, pos], i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1"><span>{L}</span><span>{R}</span></div>
              <div
                className="relative h-4 rounded-full"
                style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}
              >
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
              <li>Long legislative career in Ohio House, Senate, and statewide office</li>
<li>Appointed U.S. Senator with unanimous GOP support from Governor DeWine</li>
<li>Delivered maiden Senate speech focusing on debt and bipartisan solutions</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Critics noted appointment bypassed primary voters in favor of insider politics</li>
<li>Potential conflicts in 2026 bid amid ongoing Ohio corruption-related investigations; he has not been accused</li>

            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {/* No election image since appointed, not elected */}
        </div>
      </div>
    </div>
  );
}
