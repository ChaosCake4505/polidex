export default function SchiffPage() {
  const scales = [
    ["Pro-Choice", "Pro-Life", "20%"],
    ["Socially Liberal", "Socially Conservative", "25%"],
    ["Fiscal Progressivism", "Fiscal Conservatism", "30%"],
    ["Populist", "Establishment", "55%"],
    ["Dovish", "Hawkish", "40%"],
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row"
      style={{
        backgroundImage: "url('/bg4.jpg')",
        color: "black",
        fontFamily: "Georgia, serif",
      }}
    >
      <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0 mt-4">
        <img
          src="/schiff.jpg"
          alt="Adam Schiff"
          className="rounded-xl shadow-lg object-contain w-full max-h-[600px]"
        />
      </div>

      <div className="bg-white rounded-lg p-8 flex-1 flex flex-col">
        <h1 className="text-3xl font-bold mb-4">Senator Adam Schiff (D)</h1>

        <p className="italic mb-6">
          "An America that inspires hope in its ideals must complement an America that inspires awe in its strength."
        </p>

        <p className="mb-4">
          Adam Schiff, known nationally for leading high-profile investigations and serving as a key figure in impeachment proceedings, has built a reputation as a staunch defender of democracy and national security. Schiff has long advocated for robust oversight, civil liberties, and strong alliances abroad.
        </p>
        <p className="mb-4">
          Representing California in the U.S. House before his Senate run, Schiff has focused on intelligence, justice, and constitutional rights. His legislative work underscores the importance of accountability and resisting authoritarianism, both at home and globally.
        </p>
        <p>
          Schiff’s policy approach combines progressive social values with a pragmatic security stance. As Senator, he continues to emphasize transparent governance, protection of democratic institutions, and support for marginalized communities throughout California.
        </p>

        <div className="mt-8 space-y-6">
          {scales.map(([leftLabel, rightLabel, position], index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span>{leftLabel}</span>
                <span>{rightLabel}</span>
              </div>
              <div
                className="relative h-4 rounded-full"
                style={{
                  background: "linear-gradient(to right, #0047AB, #C41E3A)",
                }}
              >
                <div
                  className="absolute top-[-10px]"
                  style={{
                    left: position,
                    transform: "translateX(-50%)",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>⬆️</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements & Controversies */}
        <div className="mt-12 flex flex-col md:flex-row border-t border-gray-300 pt-8">
          <div className="md:w-1/2 pr-4">
            <h2 className="text-xl font-bold mb-2">Achievements</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Led key impeachment inquiries in the House</li>
              <li>Strengthened oversight of intelligence agencies</li>
              <li>Advocated for voting rights and election security</li>
              <li>Supported LGBTQ+ and civil rights legislation</li>
              <li>Promoted environmental protections and clean energy</li>
            </ul>
          </div>
          <div className="hidden md:block border-l border-dotted border-gray-500 mx-4"></div>
          <div className="md:w-1/2 pl-4 mt-8 md:mt-0">
            <h2 className="text-xl font-bold mb-2">Controversies</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Criticized for aggressive impeachment tactics</li>
              <li>Allegations of partisanship during investigations</li>
              <li>Debates over intelligence community relationships</li>
              <li>Perceived tension with progressive factions</li>
              <li>Scrutiny over media and public communications</li>
            </ul>
          </div>
        </div>

        {/* Single election result */}
        <div className="mt-12 flex justify-center items-center gap-8">
          <div className="text-center">
            <div
              className="w-[200px] h-[200px] rounded-lg mx-auto"
              style={{ backgroundColor: "white" }}
            >
              <img
                src="/California.png"
                alt="2024 Margin"
                className="w-full h-full object-cover rounded-lg opacity-80"
              />
            </div>
            <p className="mt-2 font-medium">2024: +29.10%</p>
          </div>
        </div>
      </div>
    </div>
  );
}