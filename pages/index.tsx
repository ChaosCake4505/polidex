import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

const POLIDEX_COLORS = [
  "#6495ed", // Blue
  "#E30022", // Red
  "#A259D9", // Purple
];

export default function HomePage() {
  const [colorIdx, setColorIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIdx((prev) => (prev + 1) % POLIDEX_COLORS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />

      {/* Edge-to-edge dark header bar */}
      <div className="w-full bg-gray-800 py-10 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to{" "}
          <span
            style={{
              color: POLIDEX_COLORS[colorIdx],
              transition: "color 0.8s cubic-bezier(.4,0,.2,1)",
            }}
          >
            Polidex
          </span>
        </h1>
        <p className="max-w-4xl mx-auto text-lg">
          Polidex is a nonpartisan educational tool designed to help you explore America's political landscape. 
          Navigate the map, learn about your representatives, and understand where they stand on key issues — all in one place.
        </p>
      </div>

      {/* Main content grid */}
      <div className="py-12 flex justify-center">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 px-4">

          {/* Left column */}
          <div className="flex flex-col flex-1 gap-6">
            <Link href="/map" className="block group">
              <div
                className="w-full h-[300px] bg-gray-700 rounded-lg shadow-lg hover:scale-105 transition bg-cover bg-center group-hover:ring-2 group-hover:ring-[#6495ed]"
                style={{
                  backgroundImage: "url('/119th.png')",
                }}
              ></div>
            </Link>

            <div className="grid grid-cols-2 gap-6">
              <Link href="/governor" className="block group">
                <div
                  className="h-[150px] bg-gray-700 rounded-lg shadow-lg hover:scale-105 transition bg-cover bg-center group-hover:ring-2 group-hover:ring-[#6495ed]"
                  style={{
                    backgroundImage: "url('/gov2.png')",
                  }}
                ></div>
              </Link>

              <Link href="/senate" className="block group">
                <div
                  className="h-[150px] bg-gray-700 rounded-lg shadow-lg hover:scale-105 transition bg-cover bg-center group-hover:ring-2 group-hover:ring-[#6495ed]"
                  style={{
                    backgroundImage: "url('/senate2.png')",
                  }}
                ></div>
              </Link>

              <Link href="/house" className="block group">
                <div
                  className="h-[150px] bg-gray-700 rounded-lg shadow-lg hover:scale-105 transition bg-cover bg-center group-hover:ring-2 group-hover:ring-[#6495ed]"
                  style={{
                    backgroundImage: "url('/house2.png')",
                  }}
                ></div>
              </Link>

              {/* NYC Mayoral Race box (was Presidential) */}
              <Link href="/nyc" className="block group">
                <div
                  className="h-[150px] bg-gray-700 rounded-lg shadow-lg hover:scale-105 transition bg-cover bg-center group-hover:ring-2 group-hover:ring-[#6495ed]"
                  style={{
                    backgroundImage: "url('/nyc2.png')",
                  }}
                ></div>
              </Link>
            </div>
          </div>

          {/* Right column (2028 Primary) */}
          <Link href="/primaries" className="flex-1 block group">
            <div
              className="h-full min-h-[660px] bg-gray-700 rounded-lg shadow-lg hover:scale-105 transition bg-cover bg-center group-hover:ring-2 group-hover:ring-[#6495ed]"
              style={{
                backgroundImage: "url('/prim3.png')",
              }}
            ></div>
          </Link>
        </div>
      </div>

      {/* Long rectangular box under House, NYC Mayoral, and 2028 Primary */}
      <div className="px-4 pb-12">
        <div className="w-full max-w-7xl mx-auto">
          <Link href="/trump" className="block group" aria-label="Trump Approval Rating">
            <div
              className="w-full h-[160px] bg-gray-700 rounded-lg shadow-lg hover:scale-[1.02] transition group-hover:ring-2 group-hover:ring-[#6495ed] relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('/trump.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/35 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-between px-6">
                <h2 className="text-2xl md:text-3xl font-semibold">Trump Approval Rating</h2>
                <span className="text-sm opacity-90 hidden sm:block">Explore trends →</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
