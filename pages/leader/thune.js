export default function ThunePage() {
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
  src="/thune.webp"
  alt="John Thune"
  className="w-full rounded-lg shadow-lg"
  style={{ maxHeight: "500px", objectFit: "cover" }}
/>
      
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator John Thune</h1>
        <p className="italic mb-4">
          "We must keep our government accountable and ensure that South Dakota values are represented in Washington."
        </p>

        <p className="mb-4">
          John Thune has served as U.S. Senator for South Dakota since 2005 and is currently the Senate Republican Whip. Known for his calm demeanor and strong leadership roles, Thune focuses on agriculture, tax policy, and national defense.
        </p>
        <p className="mb-4">
          Thune has championed rural development, supported significant tax cuts, and advocated for a robust farm bill. He has also played a key part in modernizing transportation and telecommunications infrastructure.
        </p>
        <p className="mb-4">
          While widely popular in South Dakota, Thune has faced occasional criticism from the conservative base for not aligning fully with populist movements.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "85%"],
            ["Pro-Environment", "Pro-Industry", "90%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
            ["Populist", "Establishment", "70%"],
            ["Dovish", "Hawkish", "65%"],
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
              <li>Championed federal farm bill improvements</li>
              <li>Supported major tax cuts and economic growth measures</li>
              <li>Promoted rural broadband expansion</li>
              <li>Strengthened transportation and infrastructure policy</li>
              <li>Advanced national security initiatives in Senate leadership</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for perceived alignment with party establishment</li>
              <li>Opposed certain climate change policies</li>
              <li>Pushback on trade policy positions affecting farmers</li>
              <li>Concerns over corporate tax breaks</li>
              <li>Criticism for not fully backing populist conservative movements</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2010", image: "/south dakota.png", margin: "R +43.3%" },
            { year: "2016", image: "/south dakota.png", margin: "R +43.0%" },
            { year: "2022", image: "/south dakota.png", margin: "R +26.5%" },
                  ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Thune ${elect.year}`}
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
