export default function JohnsonPage() {
  return (
    <div className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8" style={{
      backgroundImage: "url('/bg4.jpg')", color: "black", fontFamily: "Georgia, serif",
    }}>
      <div className="md:w-1/3 flex justify-center items-start">
        <img src="/johnson.jpg" alt="Ron Johnson" className="w-full rounded-lg shadow-lg" style={{ maxHeight: "500px", objectFit: "cover" }} />
      </div>
      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Ron Johnson</h1>
        <p className="italic mb-4">"We need more citizen legislators and fewer career politicians."</p>
        <p className="mb-4">
          Ron Johnson, born in Minnesota in 1955, moved to Wisconsin in the late 1970s. A businessman by trade, he co-founded and ran a plastics manufacturing company before entering politics. He was first elected to the U.S. Senate in 2010 during the Tea Party wave, defeating longtime Senator Russ Feingold.
        </p>
        <p className="mb-4">
          Known as a staunch fiscal conservative and strong critic of government regulation, Johnson has focused on tax reform, reducing federal spending, and deregulatory efforts. He has also taken prominent stances on border security and healthcare, opposing the Affordable Care Act and supporting private-market solutions.
        </p>
        <p className="mb-4">
          In recent years, Johnson has become known for controversial statements regarding COVID-19 policies and vaccines, as well as election-related conspiracy claims. Despite these controversies, he has remained a popular figure among Wisconsin conservatives and narrowly won re-election in 2022.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Populist Right</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "95%"],
            ["Pro‑Environment", "Pro‑Industry", "85%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "95%"],
            ["Populist", "Establishment", "35%"],
            ["Dovish", "Hawkish", "60%"],
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
              <li>Led efforts to reduce federal regulations and spending</li>
              <li>Supported major tax reform legislation in 2017</li>
              <li>Advocated for border security and immigration enforcement</li>
              <li>Promoted private healthcare market reforms</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Criticized for COVID-19 vaccine skepticism and misinformation</li>
              <li>Involved in promoting election fraud claims after 2020</li>
              <li>Accused of downplaying January 6 Capitol attack</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2010", image: "/wisconsinLeanR.png", margin: "R +4.8%" },
            { year: "2016", image: "/wisconsinLeanR.png", margin: "R +3.4%" },
            { year: "2022", image: "/wisconsinLeanR.png", margin: "R +1.0%" },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Johnson ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
