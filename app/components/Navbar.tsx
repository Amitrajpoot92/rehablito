"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { name: "Services", href: "/services", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { name: "About", href: "/about", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "Blog", href: "/blog", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m1 4l-3.5 3.5L8 11" },
  { name: "Book", href: "/booking", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname(); // Get current active route
  const { scrollY } = useScroll();

  // Corrected Scroll Logic: Down = Hide, Up = Show
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide when scrolling down, Show when scrolling up
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <>
      {/* --- TOP HEADER (Laptop & Mobile Logo Bar) --- */}
      <motion.header
        variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: "-150%", opacity: 0 } }}
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 lg:top-6 inset-x-0 z-[100] px-4 font-plus-jakarta"
      >
        <div className="max-w-7xl mx-auto">
          <nav className="bg-white/90 backdrop-blur-xl border border-slate-100 shadow-xl rounded-full px-6 py-3 flex items-center justify-between">
            {/* LOGO SECTION */}
            <Link href="/" className="group">
              <div className="text-2xl font-black tracking-tighter flex items-center">
                {/* Yahan Logo Image Add Kiya Hai */}
                <img src="/images/rehab-logo.png" alt="Rehablito Logo" className="w-8 h-8 mr-0 object-contain" />
                <span className="text-[#ff0015]">R</span>
                <span className="text-[#F28500]">e</span>
                <span className="text-[#FFD700]">h</span>
                <span className="text-[#8CBF3F]">a</span>
                <span className="text-[#00AEEF]">b</span>
                <span className="text-[#E91E63]">l</span>
                <span className="text-[#6366F1]">i</span>
                <span className="text-[#FFD700]">t</span>
                <span className="text-[#FFD700]">o</span>
              </div>
            </Link>

            {/* LAPTOP NAVIGATION MENU (FIXED) */}
            <div className="hidden lg:flex items-center gap-2 bg-slate-50 p-1 rounded-full border border-slate-100">
              {navLinks.map((link) => {
                const isActive = pathname === link.href; // Check if current route matches link

                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className={`relative px-6 py-2 rounded-full text-[14px] font-bold transition-all ${
                      isActive 
                        ? "text-[#00AEEF] bg-white shadow-sm" // Active Styling
                        : "text-slate-600 hover:text-[#1A2E44] hover:bg-white" // Inactive Styling
                    }`}
                  >
                    {link.name}
                    {/* Active Underline Line */}
                    {isActive && (
                      <motion.div 
                        layoutId="desktop-active-line"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[3px] bg-[#00AEEF] rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-4">
              {/* Mobile Direct Call Dialer */}
              <a 
                href="tel:8271586892" 
                className="w-10 h-10 lg:hidden flex items-center justify-center bg-[#00AEEF] text-white rounded-full shadow-lg active:scale-90 transition-transform"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              {/* Laptop Book Now Button */}
              <Link 
                href="/booking" 
                className="hidden lg:block bg-[#1A2E44] text-white px-8 py-3 rounded-full font-black text-sm tracking-tight hover:shadow-2xl transition-all active:scale-95"
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* --- MOBILE BOTTOM DOCK (The Elite Bar) --- */}
      <motion.div 
        variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: "150%", opacity: 0 } }}
        animate={isVisible ? "visible" : "hidden"}
        className="lg:hidden fixed bottom-6 inset-x-0 z-[100] px-4"
      >
        <div className="relative max-w-[420px] mx-auto p-[2.5px] rounded-[2.5rem] overflow-hidden">
          
          {/* BORDER LIGHT (Conic Neon Tracer) */}
          <div className="absolute inset-0 z-0">
            <motion.div 
              className="w-full h-full"
              style={{ background: "conic-gradient(from 0deg, transparent 0%, #00AEEF 25%, transparent 50%)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* DOCK CONTENT (Sky Blue Theme) */}
          <div className="relative z-10 bg-[#E0F4FF] rounded-[2.4rem] px-2 py-3 flex items-center justify-around shadow-2xl backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href; // Check if current route matches link

              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="relative flex-1 flex flex-col items-center group py-1"
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        layoutId="active-nav-pill"
                        className="absolute inset-x-1 inset-y-[-2px] bg-white rounded-2xl z-0 shadow-sm"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>

                  <div className="relative z-10 flex flex-col items-center">
                    <svg 
                      className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-[#00AEEF]' : 'text-[#1B6CA8]/60 group-hover:text-[#1B6CA8]'}`} 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d={link.icon} />
                    </svg>
                    <span 
                      className={`text-[8px] font-black uppercase tracking-tighter mt-1 transition-colors ${isActive ? 'text-[#00AEEF]' : 'text-[#1B6CA8]/50'}`}
                    >
                      {link.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
}