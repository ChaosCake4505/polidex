export default function PaulPage() {
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
          src="/paul.webp"
          alt="Rand Paul"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Rand Paul</h1>
        <p className="italic mb-4">
          "Liberty thrives when government is limited and individuals are empowered to make their own choices."
        </p>
        <p className="mb-4">
          Born in Pittsburgh, Pennsylvania, in 1963, Rand Paul is the son of former Congressman Ron Paul. He studied at Baylor University and earned his M.D. from Duke University School of Medicine, later practicing as an ophthalmologist in Kentucky.
        </p>
        <p className="mb-4">
          First elected to the U.S. Senate in 2010 as part of the Tea Party wave, Paul has positioned himself as a libertarian-leaning conservative, advocating for limited government, civil liberties, and non-interventionist foreign policy.
        </p>
        <p className="mb-4">
          Known for his willingness to challenge both parties, Paul has frequently criticized federal spending, surveillance programs, and military interventions abroad.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Libertarian-Conservative</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "90%"],
            ["Pro‑Environment", "Pro‑Industry", "85%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
            ["Populist", "Establishment", "75%"],
            ["Dovish", "Hawkish", "30%"],
          ].map(([L, R, pos], i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1"><span>{L}</span><span>{R}</span></div>
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
              <li>Prominent voice for civil liberties and privacy rights</li>
              <li>Led filibusters against surveillance laws and war authorizations</li>
              <li>Advocated for balanced budgets and reduced federal spending</li>
              <li>Influenced Republican Party debates on foreign policy restraint</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for positions against foreign aid and some defense spending</li>
              <li>Faced backlash over opposition to certain COVID-19 mandates and funding</li>
              <li>Accused of downplaying threats posed by foreign adversaries</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2016", image: "/kentuckyR.png", margin: "R +15%" },
            { year: "2022", image: "/kentuckyR.png", margin: "R +23%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Paul ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
