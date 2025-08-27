import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white px-8 py-12 flex flex-col md:flex-row justify-center items-start gap-12 mt-8">
      {/* Left side: Logo */}
      <div className="flex flex-col items-start max-w-xs">
        <div className="w-[220px] h-auto mb-4">
          <img src="/polidexfoot.png" alt="Polidex Logo" className="w-full h-auto object-contain" />
        </div>
      </div>

      {/* Center: Links as a grid */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 text-base">
          <Link href="/map" className="hover:text-[#6495ed] transition-colors">Current Makeup</Link>
          <Link href="/governor" className="hover:text-[#6495ed] transition-colors">Governor</Link>
          <Link href="/senate" className="hover:text-[#6495ed] transition-colors">Senate</Link>
          <Link href="/house" className="hover:text-[#6495ed] transition-colors">House</Link>
          <Link href="/presidential" className="hover:text-[#6495ed] transition-colors">Presidential</Link>
          <Link href="/primaries" className="hover:text-[#6495ed] transition-colors">2028 Primaries</Link>
          <Link href="/about" className="hover:text-[#6495ed] transition-colors">About</Link>
          <Link href="/archives" className="hover:text-[#6495ed] transition-colors">Archives</Link>
          <Link href="/contact" className="hover:text-[#6495ed] transition-colors">Contact</Link>
        </div>

        {/* Right side: Contact */}
        <div className="flex flex-col gap-2 text-base min-w-[160px]">
          <p className="font-bold">Get in touch</p>
          <p className="text-gray-300">thepolidex@gmail.com</p>
          <p className="font-bold mt-2">Call us</p>
          <p className="text-gray-300">973-615-9911</p>
        </div>
      </div>
    </footer>
  );
}
