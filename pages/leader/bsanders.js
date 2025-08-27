import Header from "../../components/header";

export default function BsandersPage() {
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
              src="/bsanders.jpg"
              alt="Bernie Sanders"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Bernie Sanders</h1>
          <p className="italic mb-4">
            "Our campaign is about transforming our country and creating a government that works for all, not just the wealthy few."
          </p>

          <p className="mb-4">
            Born September 8, 1941, in Brooklyn, New York, Sanders moved to Vermont in the 1960s and began his political career as mayor of Burlington in 1981. He served in the U.S. House from 1991 to 2007 before winning his U.S. Senate seat as an Independent.
          </p>
          <p className="mb-4">
            A self-described democratic socialist, Sanders has become one of the most prominent progressive voices in American politics, known nationally for his presidential runs in 2016 and 2020. In the Senate, he has championed Medicare for All, climate action, higher minimum wages, and reducing corporate power.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive Independent</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "15%"],
              ["Pro‑Environment", "Pro‑Industry", "20%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "25%"],
              ["Populist", "Establishment", "40%"],
              ["Dovish", "Hawkish", "45%"],
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
                <li>Led national push for Medicare for All and universal healthcare</li>
                <li>Advanced major labor and union rights legislation and movements</li>
                <li>Co-authored climate initiatives and Green New Deal frameworks</li>
                <li>Transformed small-donor fundraising and grassroots organizing models</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticized for polarizing rhetoric and proposals viewed as too far left by moderates</li>
                <li>Faced scrutiny over feasibility of large-scale spending and tax plans</li>
                <li>Debated for maintaining Independent label while seeking Democratic nominations</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2006", image: "/vermontbernie.png", margin: "D +33%" },
              { year: "2012", image: "/vermontbernie.png", margin: "D +46%" },
              { year: "2018", image: "/vermontbernie.png", margin: "D +40%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={e.image}
                  alt={`Bernie Sanders ${e.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
