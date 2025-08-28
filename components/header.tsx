// components/header.js
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 w-full">
      <div className="mx-auto max-w-screen-xl w-full px-4 py-3 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Polidex2.png"      // file must be at: public/Polidex2.png (case-exact)
            alt="Polidex"
            width={200}
            height={70}
            priority
            className="h-10 w-auto md:h-14"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden md:flex items-center gap-3">
          <Link href="/map" className="px-3 py-2 rounded hover:bg-gray-200 text-[#1C408C] font-bold transition">Current Makeup</Link>
          <Link href="/governor" className="px-3 py-2 rounded hover:bg-gray-200 text-[#1C408C] font-bold transition">Governor</Link>
          <Link href="/senate" className="px-3 py-2 rounded hover:bg-gray-200 text-[#1C408C] font-bold transition">Senate</Link>
          <Link href="/house" className="px-3 py-2 rounded hover:bg-gray-200 text-[#1C408C] font-bold transition">House</Link>
          <Link href="/primaries" className="px-3 py-2 rounded hover:bg-gray-200 text-[#1C408C] font-bold transition">2028 Primaries</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(v => !v)}
          className="ml-auto md:hidden p-2 rounded border border-gray-300"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-gray-200">
          <nav className="px-4 py-2 grid gap-1">
            <Link href="/map" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100 text-[#1C408C] font-bold">Current Makeup</Link>
            <Link href="/governor" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100 text-[#1C408C] font-bold">Governor</Link>
            <Link href="/senate" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100 text-[#1C408C] font-bold">Senate</Link>
            <Link href="/house" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100 text-[#1C408C] font-bold">House</Link>
            <Link href="/primaries" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100 text-[#1C408C] font-bold">2028 Primaries</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
