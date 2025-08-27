export default function MurrayPage() {
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
          src="/murray.jpg"
          alt="Patty Murray"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Patty Murray</h1>
        <p className="italic mb-4">
          "I’m just a mom in tennis shoes who wants to make a difference."
        </p>

        <p className="mb-4">
          Senator Patty Murray has served Washington since 1993, becoming one of the most senior
          women in the U.S. Senate. Known for her strong advocacy for education, healthcare,
          veterans, and family support policies, she is a powerful figure in Democratic leadership.
        </p>
        <p className="mb-4">
          Murray has championed affordable college access, expanded healthcare coverage, and worked
          to secure funding for infrastructure and transportation in Washington state.
        </p>
        <p className="mb-4">
          As chair of key Senate committees, she has played a central role in budget negotiations
          and advancing progressive priorities nationwide.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "18%"],
            ["Pro-Environment", "Pro-Industry", "15%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "20%"],
            ["Populist", "Establishment", "60%"],
            ["Dovish", "Hawkish", "35%"],
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
              <li>Expanded access to affordable education</li>
              <li>Strengthened veterans' healthcare and benefits</li>
              <li>Led bipartisan budget negotiations</li>
              <li>Improved infrastructure and transportation funding</li>
              <li>Promoted workplace protections for families</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for Washington DC "establishment" ties</li>
              <li>Faced backlash for supporting large federal budgets</li>
              <li>Accused of not prioritizing rural constituents' needs</li>
              <li>Critics question corporate and union donor influence</li>
              <li>Debated stances on defense spending and trade deals</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2010", image: "/washingtonLean.png", margin: "+4.8%" },
            { year: "2016", image: "/washington.png", margin: "+18.0%" },
            { year: "2022", image: "/washingtonLikely.png", margin: "+14.4%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Murray ${elect.year}`}
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