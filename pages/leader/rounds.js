export default function RoundsPage() {
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
          src="/rounds.jpg"
          alt="Mike Rounds"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Mike Rounds</h1>
        <p className="italic mb-4">
          "I believe in common-sense solutions that protect our freedoms and strengthen our communities."
        </p>

        <p className="mb-4">
          Mike Rounds has served as U.S. Senator from South Dakota since 2015. Previously, he was Governor of South Dakota from 2003 to 2011. Rounds focuses on conservative fiscal policies, agriculture, and national security.
        </p>
        <p className="mb-4">
          In the Senate, he has worked on veterans’ affairs, rural healthcare access, and strengthening cybersecurity infrastructure. He has consistently supported pro-business legislation and robust defense funding.
        </p>
        <p className="mb-4">
          While popular in his home state, Rounds has faced criticism for his positions on entitlement reform and his cautious approach to some of the more populist conservative movements.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "85%"],
            ["Pro-Environment", "Pro-Industry", "90%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
            ["Populist", "Establishment", "65%"],
            ["Dovish", "Hawkish", "70%"],
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
              <li>Expanded veterans' healthcare and benefits access</li>
              <li>Promoted cybersecurity and defense modernization</li>
              <li>Strengthened agricultural trade and support programs</li>
              <li>Worked on rural healthcare access improvements</li>
              <li>Supported pro-business and economic growth initiatives</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for entitlement reform positions</li>
              <li>Pushback on moderate immigration stances</li>
              <li>Concerns over alignment with establishment GOP</li>
              <li>Debates on balancing defense and domestic spending</li>
              <li>Criticism on transparency and campaign finance</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2014", image: "/south dakota.png", margin: "R +20.5%" },
            { year: "2020", image: "/south dakota.png", margin: "R +32.4%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Rounds ${elect.year}`}
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
