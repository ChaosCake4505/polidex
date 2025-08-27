export default function HironoPage() {
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
          src="/hirono.jpg"
          alt="Mazie Hirono"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* White content box on the right */}
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Mazie Hirono</h1>
        <p className="italic mb-4">
          "Fighting for the people of Hawaii and standing up for those who have no voice is at the core of everything I do."
        </p>

        <p className="mb-4">
          Senator Mazie Hirono has served Hawaii in the U.S. Senate since 2013, and was the first Asian-American woman elected to the Senate as well as the first U.S. senator born in Japan. She previously served as Hawaii’s lieutenant governor and in the U.S. House of Representatives.
        </p>
        <p className="mb-4">
          Hirono is known for her strong advocacy on women's rights, immigration reform, and healthcare. She has been a vocal critic of conservative Supreme Court nominations and has worked to protect Hawaii's unique environmental and cultural heritage.
        </p>
        <p className="mb-4">
          She continues to be a progressive champion in the Senate, consistently advocating for social justice and civil rights both locally and nationally.
        </p>

        {/* Scales */}
        <div className="mt-8 space-y-6">
          {[
            ["Progressive", "Conservative", "12%"],
            ["Pro-Environment", "Pro-Industry", "10%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "20%"],
            ["Populist", "Establishment", "35%"],
            ["Dovish", "Hawkish", "15%"],
          ].map(([leftLabel, rightLabel, position], index) => (
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
        <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Achievements</h2>
            <ul className="list-disc list-inside">
              <li>Advocated for immigration reform and family reunification</li>
              <li>Strong supporter of reproductive rights and gender equality</li>
              <li>Defended Hawaii's environmental and cultural resources</li>
              <li>Increased funding for veterans’ services in Hawaii</li>
              <li>Advanced healthcare access initiatives statewide</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticism for sharp rhetoric during judicial hearings</li>
              <li>Accused by conservatives of partisanship on court issues</li>
              <li>Pushback from business groups on environmental policies</li>
              <li>Critiques of handling federal infrastructure negotiations</li>
              <li>Concerns over alignment with national progressive agenda</li>
            </ul>
          </div>
        </div>

        {/* Electoral history */}
<div className="mt-12 flex flex-wrap justify-center gap-6">
  {[
    { year: "2024", margin: "+30%", image: "/hawaii.png" },
    { year: "2018", margin: "+42.4%", image: "/hawaii.png" },
    { year: "2012", margin: "+25.2%", image: "/hawaii.png" },
  ].map((elect, i) => (
    <div key={i} className="flex flex-col items-center">
      <img
        src={elect.image}
        alt={`Hirono ${elect.year}`}
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
