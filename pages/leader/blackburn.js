import Header from "../../components/header";

export default function BlackburnPage() {
  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8"
        style={{
          backgroundImage: "url('/bg4.jpg')",
          color: "black",
          fontFamily: "Georgia, serif",
        }}
      >
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/blackburn.jpg"
              alt="Marsha Blackburn"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Marsha Blackburn</h1>
          <p className="italic mb-4">
            "I stand for Tennessee values — personal liberty, strong families, and a thriving economy."
          </p>
          <p className="mb-4">
            Marsha Blackburn has represented Tennessee in the U.S. Senate since 2019, previously serving in the U.S. House since 2003. She is a vocal advocate for conservative priorities such as national security, deregulation, and traditional values.
          </p>
          <p className="mb-4">
            Blackburn chairs key committees and is recognized for her work on healthcare policy, tech oversight, and supporting small businesses across the district.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "95%"],
              ["Pro‑Environment", "Pro‑Industry", "85%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "90%"],
              ["Populist", "Establishment", "65%"],
              ["Dovish", "Hawkish", "80%"],
            ].map(([L, R, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{L}</span><span>{R}</span>
                </div>
                <div
                  className="relative h-4 rounded-full"
                  style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}
                >
                  <div
                    className="absolute top-[-10px]"
                    style={{ left: pos, transform: "translateX(-50%)" }}
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
                <li>Authored legislation to protect small businesses and reduce regulations</li>
                <li>Championed efforts to reform healthcare transparency and pricing</li>
                <li>Led initiatives on government surveillance oversight and privacy rights</li>
                <li>Advocated for veterans’ programs and rural broadband expansion</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced criticism over support for restrictive voting laws</li>
                <li>Accused by opponents of promoting misinformation on social platforms</li>
                <li>Controversy around her stance on COVID‑19 relief and lockdown opposition</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2020", image: "/tennesseeLikely.png", margin: "R +11.9%" },
              { year: "2024", image: "/tennessee.png", margin: "R +18.1%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Blackburn ${elect.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{elect.year} Margin {elect.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
