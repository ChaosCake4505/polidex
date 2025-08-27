import Header from "../../components/header";
import Footer from "../../components/footer";

export default function KotekPage() {
  return (
    <>
      <Header />

      <div
        className="min-h-screen bg-cover bg-center p-8 flex flex-col md:flex-row gap-8 text-black font-serif"
        style={{
          backgroundImage: "url('/wash.webp')",
        }}
      >
        {/* Image section */}
        <div className="md:w-1/3 flex justify-center items-start">
          <img
            src="/kotek.jpg"
            alt="Tina Kotek"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>

        {/* Gray box content */}
        <div className="bg-gray-300 rounded-lg p-8 md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Governor Tina Kotek</h1>
          <p className="italic mb-4">"My North Star is for every Oregonian to be able to afford a home. I believe that we can get this done."</p>

          <p className="mb-4">
            Tina Kotek, the current Governor of Oregon, is known for her steadfast progressive stances and her commitment to social justice. As governor, Kotek has focused on strengthening Oregon’s public services, expanding mental health programs, addressing homelessness, and pushing for strong climate action policies.
          </p>
          <p className="mb-4">
            Kotek remains one of the most progressive state leaders in the country, consistently working to advance inclusive policies and strengthen Oregon’s reputation as a national leader on progressive issues.
          </p>
          <p className="mb-4">
            While widely supported by progressives, Kotek has faced criticism from business groups and conservative voters over tax and regulatory policies. Her leadership continues to shape Oregon’s progressive agenda and national profile.
          </p>

          {/* Ideology rating header */}
          <h2 className="text-center font-bold text-lg mt-8 mb-4">Progressive</h2>
          {/* Ideology bars */}
          <div className="mt-8 space-y-6">
            {[
              ["Progressive", "Conservative", "10%"],
              ["Pro‑Environment", "Pro‑Industry", "5%"],
              ["Fiscal Progressivism", "Fiscal Conservatism", "15%"],
              ["Populist", "Establishment", "20%"],
              ["Dovish", "Hawkish", "20%"],
            ].map(([leftLabel, rightLabel, position], i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{leftLabel}</span>
                  <span>{rightLabel}</span>
                </div>
                <div className="relative h-4 rounded-full" style={{ background: "linear-gradient(to right, #0047AB, #C41E3A)" }}>
                  <div className="absolute top-[-10px]" style={{ left: position, transform: "translateX(-50%)" }}>
                    <span style={{ fontSize: "1.5rem" }}>⬆️</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements and Controversies */}
          <div className="mt-12 flex flex-col md:flex-row gap-8 border-t border-dotted pt-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li>Expanded affordable housing initiatives statewide</li>
                <li>Increased mental health funding and access</li>
                <li>Strengthened climate change action policies</li>
                <li>Improved healthcare access and equity</li>
                <li>Promoted statewide gun safety legislation</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">Controversies</h2>
              <ul className="list-disc list-inside">
                <li>Criticism over handling of Portland homelessness</li>
                <li>Pushback from business groups on environmental taxes</li>
                <li>Opposition from conservatives over tax increases</li>
                <li>Resistance to stricter land use regulations</li>
                <li>Conflicts with law enforcement unions</li>
              </ul>
            </div>
          </div>
          {/* Top Donors */}
          <div className="mt-12 border-t border-dotted pt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Top Donors</h2>
            <ul className="list-none flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <img src="/ata.png" alt="American Trucking Associations logo" className="w-6 h-6 mr-2" />
                <strong>American Trucking Associations</strong> (Trucking and logistics) — $20,733
              </li>
              <li className="flex items-center">
                <img src="/plexos.jpg" alt="Plexos Group logo" className="w-6 h-6 mr-2" />
                <strong>Plexos Group</strong> (Consulting & disaster recovery) — $20,299
              </li>
              <li className="flex items-center">
                <img src="/premier.png" alt="Premere Rehab logo" className="w-6 h-6 mr-2" />
                <strong>Premere Rehab</strong> (Rehabilitation services) — $20,000
              </li>
              <li className="flex items-center">
                <img src="/centene.jpg" alt="Centene logo" className="w-6 h-6 mr-2" />
                <strong>Centene Corp</strong> (Healthcare and insurance) — $20,000
              </li>
              <li className="flex items-center">
                <img src="/intel.png" alt="Intel logo" className="w-6 h-6 mr-2" />
                <strong>Intel Corp</strong> (Semiconductors and technology) — $11,000
              </li>
            </ul>
          </div>
          {/* Election images */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { year: "2022", image: "/OregonLean.png", margin: "D +3.4%" },
            ].map((elect, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={elect.image}
                  alt={`Kotek ${elect.year}`}
                  className="max-w-[150px] object-contain"
                />
                <p className="mt-2 text-sm">{elect.year} Margin {elect.margin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
