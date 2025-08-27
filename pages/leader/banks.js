import Header from "../../components/header";

export default function BanksPage() {
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
              src="/banks.jpg"
              alt="Jim Banks"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Jim Banks</h1>
          <p className="italic mb-4">
            "We must defend freedom at home and around the world — with firm strength and conservative values."
          </p>
          <p className="mb-4">
            Born in Columbia City, Indiana, in 1979, Banks earned his bachelor’s degree from Indiana University before serving five years on active duty as an intelligence officer in the U.S. Navy (2001–2006).
          </p>
          <p className="mb-4">
            Following military service, he worked as a political staffer and small-business consultant, then was elected to the Indiana House (2010–2012) and the U.S. House (2017–2023). He was elected to the U.S. Senate in 2024.
          </p>
          <p className="mb-4">
            In the Senate, Banks serves on the Armed Services, Homeland Security, and Budget Committees, advocating for strong national defense, veterans’ care, and secure borders. He is aligned with conservative GOP leadership.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Establishment Conservative</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "90%"],
              ["Pro‑Environment", "Pro‑Industry", "80%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "85%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "75%"],
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
                <li>Served five years as a U.S. Navy intelligence officer</li>
                <li>Built a reputation as a conservative voice in the U.S. House representing Indiana’s 3rd district</li>
                <li>Supports national defense strengthening and veterans’ healthcare reforms</li>
                <li>Sits on Armed Services, Homeland Security, and Budget Committees</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for aligning with Trump-era foreign policy and January 6 rhetoric</li>
                <li>Faced backlash over support for strict immigration enforcement and border funding cuts</li>
                <li>Opposed bipartisan gun safety measures, drawing criticism from moderates</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2024", image: "/indianaR.png", margin: "R +19%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Banks ${e.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
