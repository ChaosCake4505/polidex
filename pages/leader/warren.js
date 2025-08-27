export default function WarrenPage() {
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
          src="/warren.jpg"
          alt="Elizabeth Warren"
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      <div className="bg-white rounded-lg p-8 md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">Senator Elizabeth Warren</h1>
        <p className="italic mb-4">
          "We need big, structural change to rebuild the middle class and make our government work for everyone, not just the wealthy and well-connected."
        </p>

        <p className="mb-4">
          Born June 22, 1949, in Oklahoma City, Warren worked as a public school teacher and went on to become a prominent bankruptcy law professor at Harvard. She gained national attention as an advocate for consumer protection and middle-class economic issues during the 2008 financial crisis, leading to the creation of the Consumer Financial Protection Bureau (CFPB).
        </p>
        <p className="mb-4">
          Elected to the U.S. Senate in 2012, Warren became a leading voice for progressive economic policy, financial regulation, and corporate accountability. She won re-election in 2018 by 24 points and has remained one of the Senate's most high-profile progressive leaders.
        </p>

        <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>

        <div className="space-y-6">
          {[
            ["Progressive", "Conservative", "20%"],
            ["Pro‑Environment", "Pro‑Industry", "28%"],
            ["Fiscal Progressivism", "Fiscal Conservatism", "30%"],
            ["Populist", "Establishment", "55%"],
            ["Dovish", "Hawkish", "45%"],
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
              <li>Key architect of the Consumer Financial Protection Bureau</li>
              <li>Championed student debt relief and college affordability measures</li>
              <li>Led major oversight efforts targeting Wall Street and large corporations</li>
              <li>Strong advocate for universal childcare and expanded healthcare access</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Controversies</h2>
            <ul className="list-disc list-inside">
              <li>Faced scrutiny over her past claims of Native American heritage</li>
              <li>Criticized for tension with more moderate Democrats and some party leadership</li>
              <li>Debated for pushing aggressive regulatory proposals viewed as divisive by business groups</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { year: "2012", image: "/massachusettslikelyd.png", margin: "D +8%" },
            { year: "2018", image: "/massachusetts.png", margin: "D +24%" },
            { year: "2024", image: "/massachusetts.png", margin: "D +29%" },

          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={e.image} alt={`Warren ${e.year}`} className="max-w-[150px] object-contain" />
              <p className="mt-2 text-sm">{e.year}: {e.margin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
