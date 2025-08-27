import Header from "../../components/header";

export default function ErnstPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8" style={{
        backgroundImage: "url('/bg4.jpg')", color: "black", fontFamily: "Georgia, serif",
      }}>
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/ernst.jpg"
              alt="Joni Ernst"
              className="w-full h-full object-cover transition hover:scale-105"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Senator Joni Ernst</h1>
          <p className="italic mb-4">"We must remain vigilant in saving what's best for America."</p>
          <p className="mb-4">
            Elected in 2014 and re‑elected in 2020, Joni Ernst is Iowa’s senior U.S. Senator and the first woman elected to federal office from Iowa. A former lieutenant colonel in the Iowa Army National Guard, she served during Operation Iraqi Freedom and has become known for her strong support of the military and veterans’ issues. 
          </p>
          <p className="mb-4">
            Ernst gained national attention with her first campaign ad promising to "make 'em squeal," highlighting her pledge to cut government spending and reduce waste. She has built her brand on a populist message of fiscal responsibility, personal grit, and rural Iowa values. As a senator, she has prioritized agriculture policy, biofuels, and protecting Iowa farmers, while also taking a tough stance on border security and regulatory reform. 
          </p>
          <p className="mb-4">
            In Washington, Ernst has served on several important committees, including Armed Services, Agriculture, and Environment and Public Works. She has pushed for accountability through her work on government oversight and was a founding member of the "DOGE" caucus focused on efficiency. Her independent-minded tone and ability to connect with rural voters make her a key figure in the Republican Party’s outreach to Midwestern states.
          </p>

          <h2 className="text-center font-bold text-lg mt-8 mb-4">Populist Right</h2>

          <div className="space-y-6">
            {[
              ["Progressive", "Conservative", "90%"],
              ["Pro‑Environment", "Pro‑Industry", "75%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "85%"],
              ["Populist", "Establishment", "60%"],
              ["Dovish", "Hawkish", "65%"],
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
                <li>First female combat veteran in U.S. Senate</li>
                <li>Chair of Senate Small Business Committee</li>
                <li>Founded DOGE caucus for federal efficiency</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Town-hall remark “we’re all going to die” defending budget cuts</li>
                <li>Opposed Medicaid and food-assistance expansions</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2014", image: "/iowaLikelyR.png", margin: "R +8.3%" },
              { year: "2020", image: "/iowaLikelyR.png", margin: "R +6.6%" },
            ].map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={e.image} alt={`Ernst ${e.year}`} className="max-w-[150px] object-contain" />
                <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
