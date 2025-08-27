import Header from "../../components/header";

export default function BuddPage() {
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
        {/* Image on the left */}
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/budd.jpg"
              alt="Ted Budd"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        {/* Content on the right */}
        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Ted Budd</h1>
          <p className="italic mb-4">
            "We need to stand up for working families, defend our freedoms, and put America first."
          </p>
          <p className="mb-4">
            Ted Budd has served as U.S. Senator from North Carolina since 2023 after previously representing the state's 13th congressional district. Budd is known for his strong conservative positions on fiscal policy, gun rights, and border security.
          </p>
          <p className="mb-4">
            A former businessman and gun shop owner, Budd has emphasized tax cuts, deregulation, and limiting federal government reach during his tenure.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Populist Right</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "95%"],
              ["Pro‑Environment", "Pro‑Industry", "85%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
              ["Populist", "Establishment", "70%"],
              ["Dovish", "Hawkish", "75%"],
            ].map(([left, right, pos], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{left}</span><span>{right}</span>
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
                <li>Helped pass tax cut packages and deregulation initiatives</li>
                <li>Advanced Second Amendment protections and concealed carry reciprocity</li>
                <li>Advocated for stricter border security and immigration enforcement</li>
                <li>Supported relief measures for farmers and rural businesses</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Faced criticism for opposing bipartisan infrastructure investments</li>
                <li>Opposed expanded Medicaid and COVID-19 relief provisions</li>
                <li>Questioned for close ties to national gun rights lobbying groups</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2022", image: "/northcarolinaLeanR.png", margin: "R +3.2%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={elect.image} alt={`Budd ${elect.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{elect.year}: {elect.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
