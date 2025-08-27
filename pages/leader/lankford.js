export default function LankfordPage() {
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
          src="/lankford.jpg"
          alt="James Lankford"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator James Lankford</h1>
        <p className="italic mb-4">
          "Faith and conservative values guide my work every single day for Oklahoma."
        </p>

        <p className="mb-4">
          James Lankford has served as a U.S. Senator from Oklahoma since 2015, following a term in the U.S. House. Known for his background as a Baptist youth camp director, he champions religious liberty, conservative social policies, and fiscal discipline.
        </p>
        <p className="mb-4">
          Lankford is recognized for his work on budget reform, border security, and opposition to government overreach. He has consistently ranked as one of the most conservative senators in the country.
        </p>
        <p className="mb-4">
          He remains popular among Oklahoma conservatives and has faced minimal primary opposition throughout his career.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "95%"],
            ["Pro‑Environment", "Pro‑Industry", "88%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "97%"],
            ["Populist", "Establishment", "70%"],
            ["Dovish", "Hawkish", "80%"],
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
              <li>Advocated for strong religious freedom protections</li>
              <li>Led bipartisan work on budget transparency and reform</li>
              <li>Supported major tax reform and deregulation efforts</li>
              <li>Championed border security and immigration enforcement</li>
              <li>Worked on bipartisan measures to fight human trafficking</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Faced criticism for initial support of 2020 election challenges</li>
              <li>Controversial stances on LGBTQ+ protections and social issues</li>
              <li>Opposed COVID-19 relief measures seen as excessive spending</li>
              <li>Debates over strong anti-abortion positions</li>
              <li>Viewed as too closely aligned with party leadership by some populists</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2014", image: "/oklahomaR.png", margin: "R +38.5%" },
            { year: "2022", image: "/oklahomaR.png", margin: "R +31.3%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Lankford ${elect.year}`}
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
