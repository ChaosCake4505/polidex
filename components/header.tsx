import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#FFFFFF] flex flex-wrap items-center justify-between px-6 py-3 shadow sticky top-0 z-50">
      {/* Clickable logo */}
      <Link href="/">
        <div className="w-[200px] h-[70px] cursor-pointer">
          <img
            src="/Polidex2.png"
            alt="Polidex Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </Link>

      {/* Navigation links */}
      <nav className="flex flex-wrap gap-4 items-center">
        <Link href="/map" className="px-3 py-2 rounded hover:bg-gray-300 text-[#1C408C] font-bold transition">Current Makeup</Link>
        <Link href="/governor" className="px-3 py-2 rounded hover:bg-gray-300 text-[#1C408C] font-bold transition">Governor</Link>
        <Link href="/senate" className="px-3 py-2 rounded hover:bg-gray-300 text-[#1C408C] font-bold transition">Senate</Link>
        <Link href="/house" className="px-3 py-2 rounded hover:bg-gray-300 text-[#1C408C] font-bold transition">House</Link>
        <Link href="/primaries" className="px-3 py-2 rounded hover:bg-gray-300 text-[#1C408C] font-bold transition">2028 Primaries</Link>
      </nav>
    </header>
  );
}
