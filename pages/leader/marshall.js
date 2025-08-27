export default function MarshallPage() {
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
          src="/marshall.jpg"
          alt="Roger Marshall"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Roger Marshall</h1>
        <p className="italic mb-4">
          "Faith, family, and freedom are the foundation of our great nation."
        </p>

        <p className="mb-4">
          Roger Marshall has served as a U.S. Senator from Kansas since 2021, following his time in the U.S. House representing Kansas’s 1st district. Before entering politics, he worked as an obstetrician-gynecologist, giving him a medical background uncommon in Congress.
        </p>
        <p className="mb-4">
          As a Senator, Marshall has prioritized agriculture, rural healthcare, conservative social policies, and strong border security. He is known for his close alignment with the Trump wing of the GOP and has been an outspoken advocate for reducing regulations and supporting Kansas farmers.
        </p>
        <p className="mb-4">
          Marshall is seen as a reliably conservative figure, emphasizing traditional values and small government.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "95%"],
            ["Pro‑Environment", "Pro‑Industry", "90%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "98%"],
            ["Populist", "Establishment", "65%"],
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
              <li>Advocated for robust farm and agriculture support programs</li>
              <li>Expanded rural healthcare initiatives and telehealth access</li>
              <li>Strong advocate for pro-life legislation and conservative social policies</li>
              <li>Supported deregulation to benefit small businesses and farms</li>
              <li>Backed major tax cut packages during his tenure in Congress</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for objecting to 2020 election certification</li>
              <li>Faced backlash over COVID-19 misinformation comments</li>
              <li>Opposition to Medicaid expansion criticized by rural hospitals</li>
              <li>Controversial stances on immigration and border security</li>
              <li>Strong alignment with Trump-era policies drew mixed responses</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2020", image: "/kansasR.png", margin: "R +11.4%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Marshall ${elect.year}`}
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
