import dynamic from "next/dynamic";
import Header from "../components/header";
import Footer from "../components/footer";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function MapPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Edge-to-edge dark header bar */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Current Political Makeup</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Use the interactive map below to explore America's political landscape — see who represents you and how each state and district is shaped today.
        </p>
      </div>

      {/* Main content */}
      <div className="py-12 flex justify-center">
        <div className="w-full max-w-6xl mx-auto">
          <Map />
        </div>
      </div>

      <Footer />
    </div>
  );
}
