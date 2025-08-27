export default function JusticePage() {
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
          src="/justice.jpg"
          alt="Jim Justice"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Jim Justice</h1>
        <p className="italic mb-4">
          "I'm here to fight for West Virginians—from preserving our heritage to growing our future."
        </p>

        <p className="mb-4">
  Born April 27, 1951, in Charleston, West Virginia, Justice attended Woodrow Wilson High School and earned his BA and MBA from Marshall University. A businessman with roots in coal, agriculture, and hospitality (owner of The Greenbrier), he served as governor from 2017 to 2025 after a party switch from Democrat to Republican in 2017.
</p>
<p className="mb-4">
  In November 2024, Justice won election to the U.S. Senate with 68.8% of the vote, flipping Joe Manchin’s seat. He was sworn in on January 14, 2025, shortly after his successor took office as governor.
</p>


        <h2 className="text-center font-bold text-lg mt-8 mb-4">Populist Right</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "95%"],
            ["Pro‑Environment", "Pro‑Industry", "80%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "90%"],
            ["Populist", "Establishment", "70%"],
            ["Dovish", "Hawkish", "60%"],
          ].map(([L, R, pos], i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1"><span>{L}</span><span>{R}</span></div>
              <div className="relative h-4 rounded-full" style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}>
                <div className="absolute top-[-10px]" style={{ left: pos, transform: "translateX(-50%)" }}><span style={{ fontSize: "1.5rem" }}>⬆️</span></div>
              </div>
            </div>
          ))}
        </div>

       <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
  <div className="md:w-1/2">
    <h2 className="text-xl font-semibold mb-2">Achievements</h2>
    <ul className="list-disc list-inside">
      <li>Flipped West Virginia’s Class I Senate seat in 2024 won by ~41 points</li>
      <li>Governor who emphasized tax cuts, infrastructure upgrades, and pandemic recovery funds</li>
      <li>Enhanced rural development via The Greenbrier and AgSector support</li>
      <li>Quoted support for conservative judicial nominees and tax relief bills in first Senate term</li>
    </ul>
  </div>
  <div className="md:w-1/2">
    <h2 className="text-xl font-semibold mb-2">Controversies</h2>
    <ul className="list-disc list-inside">
      <li>Faced financial scrutiny over business debt and loan defaults involving Greenbrier and coal companies</li>
      <li>Criticized for nepotistic appointment of his wife to WV State School Board in Nov 2024</li>
      <li>Declared Senate victory early and avoided debates—raising concerns about transparency</li>
    </ul>
  </div>
</div>


        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2024", image: "/westvirginiaR.png", margin: "R +41.0%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Justice ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
