// components/footer.js
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-200">
      <div className="mx-auto max-w-screen-xl w-full px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left: Logo + blurb */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/PolidexFoot.png"   // must exist at public/PolidexFoot.png (case-exact)
                alt="Polidex"
                width={220}
                height={60}
                priority
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400">Where data meets democracy.</p>
          </div>

          {/* Center: Nav links */}
          <nav aria-label="Footer links" className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
            <Link href="/map" className="hover:text-[#6495ed]">Current Makeup</Link>
            <Link href="/governor" className="hover:text-[#6495ed]">Governor</Link>
            <Link href="/senate" className="hover:text-[#6495ed]">Senate</Link>
            <Link href="/house" className="hover:text-[#6495ed]">House</Link>
            <Link href="/presidential" className="hover:text-[#6495ed]">Presidential</Link>
            <Link href="/primaries" className="hover:text-[#6495ed]">2028 Primaries</Link>
            <Link href="/about" className="hover:text-[#6495ed]">About</Link>
            <Link href="/archives" className="hover:text-[#6495ed]">Archives</Link>
            <Link href="/contact" className="hover:text-[#6495ed]">Contact</Link>
          </nav>

          {/* Right: Contact */}
          <div className="space-y-2">
            <p className="font-semibold text-white">Get in touch</p>
            <a href="mailto:thepolidex@gmail.com" className="text-gray-300 hover:text-[#6495ed]">
              thepolidex@gmail.com
            </a>

            <p className="font-semibold mt-4 text-white">Call us</p>
            <a href="tel:19736159911" className="text-gray-300 hover:text-[#6495ed]">
              973-615-9911
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Polidex. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="/privacy" className="hover:text-[#6495ed]">Privacy</Link>
            <Link href="/terms" className="hover:text-[#6495ed]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
