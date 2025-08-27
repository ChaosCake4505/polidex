import Header from "../../components/header";
import { useRouter } from "next/router";
import states from "../../data/states";

export default function StatePage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <p>Loading...</p>;
  }

  const stateKey = id.toUpperCase();
  const stateData = states[stateKey];

  if (!stateData) {
    return <p className="p-8">State not found.</p>;
  }

  const scales = stateData.scales || [];
  let electionImages = [];

  if (stateKey === "OR") {
    electionImages = [
      { year: "2008", image: "/Oregon.png", margin: "+16.35%" },
      { year: "2012", image: "/OregonLikely.png", margin: "+12.09%" },
      { year: "2016", image: "/OregonLikely.png", margin: "+11.00%" },
      { year: "2020", image: "/Oregon.png", margin: "+16.10%" },
      { year: "2024", image: "/Oregon.png", margin: "+17.45%" },
    ];
  } else if (stateKey === "HI") {
    electionImages = [
      { year: "2008", image: "/hawaii.png", margin: "+45.3%" },
      { year: "2012", image: "/hawaii.png", margin: "+42.7%" },
      { year: "2016", image: "/hawaii.png", margin: "+32.9%" },
      { year: "2020", image: "/hawaii.png", margin: "+29.5%" },
      { year: "2024", image: "/hawaii.png", margin: "+23.1%" },
    ];
  } else if (stateKey === "AK") {
    electionImages = [
      { year: "2008", image: "/alaska.png", margin: "R +21.5%" },
      { year: "2012", image: "/alaskaLikely.png", margin: "R +14.0%" },
      { year: "2016", image: "/alaskaLikely.png", margin: "R +14.7%" },
      { year: "2020", image: "/alaskaLikely.png", margin: "R +10.1%" },
      { year: "2024", image: "/alaskaLikely.png", margin: "R +14%" },
    ];
  } else if (stateKey === "WA") {
    electionImages = [
      { year: "2008", image: "/washington.png", margin: "+17.1%" },
      { year: "2012", image: "/washington.png", margin: "+14.9%" },
      { year: "2016", image: "/washington.png", margin: "+15.7%" },
      { year: "2020", image: "/washington.png", margin: "+19.2%" },
      { year: "2024", image: "/washington.png", margin: "+18.3%" },
    ];
  } else if (stateKey === "NV") {
    electionImages = [
      { year: "2008", image: "/nevadaLikelyD.png", margin: "+12.5%" },
      { year: "2012", image: "/nevadaLikelyD.png", margin: "+6.7%" },
      { year: "2016", image: "/nevadaLeanD.png", margin: "+2.4%" },
      { year: "2020", image: "/nevadaLeanD.png", margin: "+2.4%" },
      { year: "2024", image: "/nevadaLeanR.png", margin: "R +3.1%" },
    ];
  } else if (stateKey === "UT") {
    electionImages = [
      { year: "2008", image: "/utah.png", margin: "R +28.0%" },
      { year: "2012", image: "/utah.png", margin: "R +48.0%" },
      { year: "2016", image: "/utah.png", margin: "R +18.0%" },
      { year: "2020", image: "/utah.png", margin: "R +20.5%" },
      { year: "2024", image: "/utah.png", margin: "R +21.1%" },
    ];
  } else if (stateKey === "ID") {
    electionImages = [
      { year: "2008", image: "/idaho.png", margin: "R +25.3%" },
      { year: "2012", image: "/idaho.png", margin: "R +32.0%" },
      { year: "2016", image: "/idaho.png", margin: "R +31.7%" },
      { year: "2020", image: "/idaho.png", margin: "R +30.6%" },
      { year: "2024", image: "/idaho.png", margin: "R +34.2%" },
    ];
  } else if (stateKey === "WY") {
    electionImages = [
      { year: "2008", image: "/wyoming.png", margin: "R +32.2%" },
      { year: "2012", image: "/wyoming.png", margin: "R +41.2%" },
      { year: "2016", image: "/wyoming.png", margin: "R +46.3%" },
      { year: "2020", image: "/wyoming.png", margin: "R +43.4%" },
      { year: "2024", image: "/wyoming.png", margin: "R +45.0%" },
    ];
  } else if (stateKey === "MT") {
    electionImages = [
      { year: "2008", image: "/montanaLean.png", margin: "R +2.3%" },
      { year: "2012", image: "/montanaLikely.png", margin: "R +13.7%" },
      { year: "2016", image: "/montana.png", margin: "R +20.4%" },
      { year: "2020", image: "/montana.png", margin: "R +16.4%" },
      { year: "2024", image: "/montana.png", margin: "R +19.93%" },
    ];
  } else if (stateKey === "ND") {
    electionImages = [
      { year: "2008", image: "/north dakotaLikely.png", margin: "R +8.6%" },
      { year: "2012", image: "/north dakota.png", margin: "R +19.6%" },
      { year: "2016", image: "/north dakota.png", margin: "R +36.4%" },
      { year: "2020", image: "/north dakota.png", margin: "R +33.4%" },
      { year: "2024", image: "/north dakota.png", margin: "R +36.45%" },
    ];
  } else if (stateKey === "SD") {
    electionImages = [
      { year: "2008", image: "/south dakotaLikely.png", margin: "R +8.4%" },
      { year: "2012", image: "/south dakota.png", margin: "R +18%" },
      { year: "2016", image: "/south dakota.png", margin: "R +29.8%" },
      { year: "2020", image: "/south dakota.png", margin: "R +26.2%" },
      { year: "2024", image: "/south dakota.png", margin: "R +30.5%" },
    ];
  } else if (stateKey === "AZ") {
    electionImages = [
      { year: "2008", image: "/arizonaLikelyR.png", margin: "R +9.5%" },
      { year: "2012", image: "/arizonaLikelyR.png", margin: "R +10.1%" },
      { year: "2016", image: "/arizonaLeanR.png", margin: "R +3.5%" },
      { year: "2020", image: "/arizonaLeanD.png", margin: "D +0.3%" },
      { year: "2024", image: "/arizonaLikelyR.png", margin: "R +5.5%" },
    ];
  } else if (stateKey === "NM") {
    electionImages = [
      { year: "2008", image: "/new mexico.png", margin: "D +15.1%" },
      { year: "2012", image: "/new mexicoLikelyD.png", margin: "D +10.2%" },
      { year: "2016", image: "/new mexicoLikelyD.png", margin: "D +8.3%" },
      { year: "2020", image: "/new mexicoLikelyD.png", margin: "D +10.8%" },
      { year: "2024", image: "/new mexicoLikelyD.png", margin: "D +11.9%" },
    ];
  }
else if (id === "CO") {
  electionImages = [
    { year: "2008", image: "/coloradoLikelyD.png", margin: "D +9.0%" },
    { year: "2012", image: "/coloradoLikelyD.png", margin: "D +5.4%" },
    { year: "2016", image: "/coloradoLeanD.png", margin: "D +4.9%" },
    { year: "2020", image: "/coloradoLikelyD.png", margin: "D +13.5%" },
    { year: "2024", image: "/coloradoLikelyD.png", margin: "D +12.2%" },
  ];
}

return (
    <>
      {/* Header imported at the very top, outside the white container */}
      <Header />

      <div
        className="min-h-screen bg-cover bg-center p-8"
        style={{
          backgroundImage: "url('/bg4.jpg')",
          color: "black",
          fontFamily: "Georgia, serif",
        }}
      >
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-4">{stateData.name}</h1>
          <p className="mb-8">{stateData.description}</p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            {stateData.leaders.map((leader, index) => (
              <a key={index} href={leader.link} className="text-center">
                <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>
                <p className="mt-2 font-medium">
                  {leader.name} ({leader.party})
                </p>
              </a>
            ))}
          </div>

          {scales.length > 0 && (
            <div className="mt-8 space-y-6">
              {scales.map(([leftLabel, rightLabel, position], index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{leftLabel}</span>
                    <span>{rightLabel}</span>
                  </div>
                  <div
                    className="relative h-4 rounded-full"
                    style={{
                      background: "linear-gradient(to right, #0047AB, #C41E3A)",
                    }}
                  >
                    <div
                      className="absolute top-[-10px]"
                      style={{
                        left: position,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <span style={{ fontSize: "1.5rem" }}>⬆️</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {electionImages.length > 0 && (
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {electionImages.map((election, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={election.image}
                    alt={`${stateData.name} ${election.year}`}
                    className="max-w-[150px] object-contain"
                  />
                  <p className="mt-2 text-sm">
                    {election.margin.startsWith("R") ? "GOP Margin " : "Dem Margin "}
                    {election.margin.replace("R ", "")}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}