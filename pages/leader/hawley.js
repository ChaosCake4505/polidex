export default function HawleyPage() {
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
          src="/hawley.jpg"
          alt="Josh Hawley"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Josh Hawley</h1>
        <p className="italic mb-4">
          "Big tech, big government, and big corporations should never silence the American people."
        </p>
        <p className="mb-4">
          Josh Hawley has served as U.S. Senator from Missouri since 2019, after serving as state Attorney General. He is known for his strong populist stance, emphasis on "America First" economic policies, and vocal criticism of big tech.
        </p>
        <p className="mb-4">
          Hawley has focused on antitrust issues, trade protectionism, and border security, positioning himself as a leading voice among conservative populists.
        </p>

        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "95%"],
            ["Pro‑Environment", "Pro‑Industry", "85%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "90%"],
            ["Populist", "Establishment", "80%"],
            ["Dovish", "Hawkish", "75%"],
          ].map(([left, right, pos], i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span>{left}</span><span>{right}</span>
              </div>
              <div className="relative h-4 rounded-full" style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}>
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
              <li>Led Senate efforts against big tech monopolies and censorship</li>
              <li>Supported strong border security and trade protectionism</li>
              <li>Advanced legislation supporting veterans and law enforcement</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for objecting to 2020 election results certification</li>
              <li>Viewed as polarizing even within GOP for populist rhetoric</li>
              <li>Faced backlash from corporate donors over stance on protests</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2018", image: "/missouriLikelyR.png", margin: "R +5.8%" },
            { year: "2024", image: "/missouriLikelyR.png", margin: "R +13.7%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Hawley ${elect.year}`}
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
