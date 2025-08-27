export default function PadillaPage() {
  const scales = [
    ["Pro-Choice", "Pro-Life", "20%"],
    ["Socially Liberal", "Socially Conservative", "25%"],
    ["Fiscal Progressivism", "Fiscal Conservatism", "30%"],
    ["Populist", "Establishment", "60%"],
    ["Dovish", "Hawkish", "35%"],
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
          src="/padilla.jpg"
          alt="Alex Padilla"
          className="rounded-xl shadow-lg object-contain w-full max-h-[600px]"
        />
      </div>

      <div className="bg-white rounded-lg p-8 flex-1 flex flex-col">
        <h1 className="text-3xl font-bold mb-4">Senator Alex Padilla (D)</h1>

        <p className="italic mb-6">
          "We all have a right for our voices to be heard, not stifled."
        </p>

        <p className="mb-4">
          Alex Padilla, California's first Latino U.S. Senator, has dedicated his career to expanding voting rights and championing immigrant communities. Padilla has pushed for strong environmental protections, robust COVID‑19 response policies, and improved infrastructure, often highlighting equity and accessibility in public services.
        </p>
        <p className="mb-4">
          Born and raised in Los Angeles, Padilla served on the LA City Council, as California's Secretary of State, and now as Senator. He is widely respected for his efforts to protect and expand access to the ballot box and to modernize the state's election systems. His policy agenda combines progressive values with a pragmatic approach to governance.
        </p>
        <p>
          Padilla believes that strong democratic institutions and a fair immigration system are essential to the nation’s future. His leadership emphasizes inclusivity, economic opportunity, and protecting civil rights, reflecting California’s diverse and forward-looking electorate.
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
              <li>Expanded voter registration and election security</li>
              <li>Championed immigration reform and DACA protections</li>
              <li>Supported major infrastructure modernization bills</li>
              <li>Promoted environmental justice initiatives</li>
              <li>Advocated for pandemic relief and health equity</li>
            </ul>
          </div>
          <div className="hidden md:block border-l border-dotted border-gray-500 mx-4"></div>
          <div className="md:w-1/2 pl-4 mt-8 md:mt-0">
            <h2 className="text-xl font-bold mb-2">Controversies</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Criticism over mail‑in ballot rollout issues</li>
              <li>Concerns about appointment to Senate without election</li>
              <li>Scrutiny over campaign finance transparency</li>
              <li>Debates on balancing security vs. voting access</li>
              <li>Perceived closeness to party establishment</li>
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
                alt="2022 Margin"
                className="w-full h-full object-cover rounded-lg opacity-80"
              />
            </div>
            <p className="mt-2 font-medium">2022: +22.12%</p>
          </div>
        </div>
      </div>
    </div>
  );
}