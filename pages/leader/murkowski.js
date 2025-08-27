export default function MurkowskiPage() {
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
          src="/murkowski.jpg"
          alt="Lisa Murkowski"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Lisa Murkowski</h1>
        <p className="italic mb-4">
          "I will always put Alaska first and fight for our state's unique needs and priorities."
        </p>

        <p className="mb-4">
          Senator Lisa Murkowski has served Alaska in the U.S. Senate since 2002. Known for her independent
          streak, she is one of the few Republicans willing to break with her party on key votes, including
          Supreme Court confirmations and impeachment trials.
        </p>
        <p className="mb-4">
          Murkowski has focused on energy policy, Native Alaskan issues, and healthcare accessibility.
          Her moderate approach has helped her secure cross-party support and win re-election despite
          primary challenges.
        </p>
        <p className="mb-4">
          She remains a prominent voice for bipartisanship, advocating for Alaskan independence and
          environmental stewardship balanced with resource development.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "60%"],
            ["Pro-Environment", "Pro-Industry", "65%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "70%"],
            ["Populist", "Establishment", "80%"],
            ["Dovish", "Hawkish", "45%"],
          ].map(([leftLabel, rightLabel, position], index) => (
            <div key={index}>
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
              <li>Defended Alaska’s interests in energy and development</li>
              <li>Promoted bipartisan healthcare and infrastructure bills</li>
              <li>Supported protections for Native Alaskan communities</li>
              <li>Advocated for balanced environmental policy</li>
              <li>Key figure in critical Supreme Court nomination votes</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Faced conservative backlash over moderate positions</li>
              <li>Opposed some party-line energy deregulation measures</li>
              <li>Criticized for supporting certain impeachment votes</li>
              <li>Opponents question her ties to corporate donors</li>
              <li>Debated for balancing industry and environmental interests</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2010", image: "/AlaskaLean.png", margin: "+4.0%" },
            { year: "2016", image: "/AlaskaLikely.png", margin: "+15.2%" },
            { year: "2022", image: "/AlaskaLikely.png", margin: "+7.4%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Murkowski ${elect.year}`}
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
