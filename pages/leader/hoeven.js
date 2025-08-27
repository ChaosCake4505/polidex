export default function HoevenPage() {
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
          src="/hoeven.jpg"
          alt="John Hoeven"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator John Hoeven</h1>
        <p className="italic mb-4">
          "We need policies that empower our farmers, grow our economy, and protect North Dakota values."
        </p>

        <p className="mb-4">
          John Hoeven has represented North Dakota in the U.S. Senate since 2011, after serving as Governor for a decade. Known for his focus on energy development, agriculture, and economic growth, Hoeven emphasizes a strong private sector and local control over federal mandates.
        </p>
        <p className="mb-4">
          As a senior member of key Senate committees, Hoeven has championed infrastructure investments, crop insurance programs, and pro-business tax reforms. He is a consistent advocate for North Dakota’s oil and gas industries.
        </p>
        <p className="mb-4">
          While widely popular statewide, Hoeven has faced criticism from environmental groups and progressives for his strong alignment with fossil fuel interests and his opposition to certain climate initiatives.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "88%"],
            ["Pro-Environment", "Pro-Industry", "95%"],
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
              <li>Expanded North Dakota's oil and gas production as governor and senator</li>
              <li>Secured major infrastructure and highway funding</li>
              <li>Supported farm bill programs and crop insurance</li>
              <li>Advocated for tax reform and economic growth initiatives</li>
              <li>Strengthened support for rural broadband expansion</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for strong ties to fossil fuel industry</li>
              <li>Opposed comprehensive climate change legislation</li>
              <li>Concerns over federal aid distribution priorities</li>
              <li>Pushback on certain healthcare reform votes</li>
              <li>Accused of favoring large agribusiness interests</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2010", image: "/north dakota.png", margin: "R +54%" },
            { year: "2016", image: "/north dakota.png", margin: "R +61.5%" },
            { year: "2022", image: "/north dakota.png", margin: "R +31.4%" },
          ].map((elect, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={elect.image}
                alt={`Hoeven ${elect.year}`}
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
