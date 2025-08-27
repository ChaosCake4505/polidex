export default function TubervillePage() {
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
          src="/tuberville.jpg"
          alt="Tommy Tuberville"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Tommy Tuberville</h1>
        <p className="italic mb-4">
          "I’m not a career politician. I’m here to fight for Alabama values and common sense."
        </p>

        <p className="mb-4">
          Former Auburn football coach Tommy Tuberville has served as a U.S. Senator since 2021. Known for his staunch support of President Trump and hardline conservative positions, he focuses on national security, agriculture, and social conservatism.
        </p>
        <p className="mb-4">
          Tuberville has pushed for strict immigration enforcement, strong military funding, and protection of Second Amendment rights.
        </p>
        <p className="mb-4">
          His populist style and outsider image have made him a favorite among Alabama’s conservative base.
        </p>

        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "98%"],
            ["Pro‑Environment", "Pro‑Industry", "92%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "96%"],
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

        <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Achievements</h2>
            <ul className="list-disc list-inside">
              <li>Advocated for expanded rural broadband and farm aid</li>
              <li>Defended military and defense industry investments</li>
              <li>Introduced legislation to restrict federal mandates</li>
              <li>Supported major tax and deregulation packages</li>
              <li>Promoted veterans' health care services</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for blocking military promotions in protest</li>
              <li>Debated on election integrity and certification stance</li>
              <li>Viewed as too extreme on immigration by moderates</li>
              <li>Backlash over public comments on race and culture</li>
              <li>Accused of prioritizing national image over state needs</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center">
            <img
              src="/alabamaR.png"
              alt="2020"
              className="max-w-[150px] object-contain"
            />
            <p className="mt-2 text-sm">2020 Margin R +20.4%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
