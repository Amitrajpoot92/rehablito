"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; 

// --- REAL DYNAMIC DATA ---
const locations = [
  { 
    city: "Patna", 
    branches: "4 Active Centers", 
    addresses: [
      "Rajendra Nagar, Road No 6C",
      "Naseeb Market, Ramnagri More, Aashiyana Digha Road",
      "Feral Colony, Anisabad",
      "Boring Road"
    ],
    phones: ["9204786220", "7546060179"],
    color: "#1B6CA8", 
    tag: "Main HQ"
  },
  { 
    city: "Madhubani", 
    branches: "1 Active Center", 
    addresses: [
      "Police Line, Main Road, Opposite Dr C.K Singh, Tiwari Bhawan"
    ],
    phones: ["9204786220", "9296066687"],
    color: "#F28500", 
    tag: "Active"
  },
  { 
    city: "Siwan", 
    branches: "1 Active Center", 
    addresses: [
      "Ramrajya More, Opposite Vishal Megamart, IACT Campus"
    ],
    phones: ["9204786220", "7870066129"],
    color: "#8CBF3F", 
    tag: "Active"
  },
  { 
    city: "Hajipur", 
    branches: "1 Active Center", 
    addresses: [
      "Near Anjanpir, Jagdamba Asthan"
    ],
    phones: ["9204786220", "9288220054"],
    color: "#E32636", 
    tag: "Active"
  }
];

export default function NetworkReach() {
  const [activeLoc, setActiveLoc] = useState(0);

  return (
    <section className="relative py-10 lg:py-24 bg-white overflow-hidden font-plus-jakarta w-full">
      
      {/* --- ARCHITECTURAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
                <circle cx="200" cy="100" r="2" fill="#CBD5E1" />
                <circle cx="400" cy="300" r="2" fill="#CBD5E1" />
                <circle cx="600" cy="150" r="2" fill="#CBD5E1" />
                <path d="M200 100L400 300L600 150" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
        </div>
        <motion.div 
            animate={{ backgroundColor: locations[activeLoc].color }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[150px] opacity-[0.08] transition-colors duration-700"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 items-start w-full">
            
            {/* --- LEFT: CITY SELECTOR --- */}
            <div className="lg:col-span-4 flex flex-col gap-2 w-full overflow-hidden">
                <span className="text-[#1B6CA8] font-black text-[10px] lg:text-xs uppercase tracking-[0.4em] mb-1 lg:mb-4 block text-left">
                    Network Presence
                </span>
                <h2 className="text-3xl lg:text-6xl font-black text-[#1A2E44] tracking-tighter leading-none mb-3 lg:mb-10 text-left">
                    Cities We <br className="hidden lg:block"/> <span className="text-slate-400">Transform.</span>
                </h2>

                {/* Mobile horizontal scroll container - FIX: Added w-full max-w-full */}
                <div className="flex overflow-x-auto lg:flex-col gap-3 pb-3 lg:pb-0 snap-x snap-mandatory no-scrollbar w-full max-w-full">
                    {locations.map((loc, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveLoc(i)}
                            // FIX: Changed min-w-[220px] to w-[150px] to stop screen bleeding
                            className={`group relative flex items-center justify-between shrink-0 w-[150px] sm:w-[200px] lg:w-full lg:min-w-0 snap-center p-3 lg:p-6 rounded-2xl lg:rounded-3xl transition-all duration-300 outline-none
                            ${activeLoc === i ? 'bg-[#1A2E44] text-white shadow-lg lg:translate-x-2' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                        >
                            <div className="flex items-center gap-2.5 lg:gap-4">
                                <div 
                                    className={`w-2 h-2 rounded-full shrink-0 ${activeLoc === i ? 'bg-white' : 'bg-slate-300'}`}
                                    style={{ backgroundColor: activeLoc === i ? '#FFF' : loc.color }}
                                ></div>
                                <span className="text-base sm:text-lg lg:text-2xl font-black truncate">{loc.city}</span>
                            </div>
                            <span className={`hidden sm:block text-[9px] lg:text-[10px] font-bold uppercase tracking-widest transition-opacity ${activeLoc === i ? 'opacity-60' : 'opacity-0'}`}>
                                View
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* --- RIGHT: DYNAMIC HUB CARD --- */}
            <div className="lg:col-span-8 mt-1 lg:mt-0 w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeLoc}
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -10 }}
                        transition={{ duration: 0.25 }}
                        // FIX: Reduced padding for mobile (p-4) to save vertical space
                        className="relative bg-white border border-slate-100 rounded-[1.5rem] lg:rounded-[3rem] p-4 sm:p-6 lg:p-14 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] overflow-hidden w-full"
                    >
                        {/* Dynamic Background Number */}
                        <div 
                            className="absolute -top-4 -right-4 lg:-top-10 lg:-right-10 text-[6rem] lg:text-[15rem] font-black opacity-[0.03] select-none pointer-events-none"
                            style={{ color: locations[activeLoc].color }}
                        >
                            {activeLoc + 1}
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            {/* Tag & Title */}
                            <div className="flex items-center gap-2 mb-3 lg:mb-6">
                                <span className="px-2.5 py-1 lg:px-4 lg:py-1.5 rounded-full text-[8px] lg:text-[10px] font-black uppercase tracking-widest bg-slate-50 border border-slate-100 text-slate-500 whitespace-nowrap">
                                    {locations[activeLoc].tag}
                                </span>
                                <span className="px-2.5 py-1 lg:px-4 lg:py-1.5 rounded-full text-[8px] lg:text-[10px] font-black uppercase tracking-widest border whitespace-nowrap" style={{ borderColor: locations[activeLoc].color + '40', color: locations[activeLoc].color }}>
                                    {locations[activeLoc].branches}
                                </span>
                            </div>

                            {/* FIX: Title text size optimized for mobile so it doesn't break */}
                            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#1A2E44] mb-3 lg:mb-8 leading-tight break-words">
                                Rehablito <span style={{ color: locations[activeLoc].color }}>{locations[activeLoc].city}</span>
                            </h3>
                            
                            {/* --- ADDRESS GRID --- */}
                            {/* FIX: Max height controlled to keep card compact */}
                            <div className="overflow-y-auto pr-1 custom-scrollbar max-h-[140px] sm:max-h-[160px] lg:max-h-[300px] mb-4 lg:mb-8 w-full">
                                <div className={`grid gap-2 lg:gap-6 ${locations[activeLoc].addresses.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                                    {locations[activeLoc].addresses.map((addr, idx) => (
                                        <div key={idx} className="flex items-start gap-2 p-2.5 lg:p-4 bg-slate-50/50 rounded-xl border border-slate-100 transition-colors w-full">
                                            <svg className="w-4 h-4 lg:w-5 lg:h-5 shrink-0 mt-0.5" style={{ color: locations[activeLoc].color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className="text-slate-600 text-xs lg:text-base font-medium leading-snug">
                                                {addr}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* --- CONTACT & CTA BOTTOM SECTION --- */}
                            <div className="mt-auto pt-4 lg:pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4 sm:items-center justify-between w-full">
                                
                                {/* Tap to Call Buttons */}
                                <div className="flex flex-col gap-1.5 w-full sm:w-auto">
                                    <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-slate-400">Direct Contact</span>
                                    <div className="flex flex-wrap gap-2">
                                        {locations[activeLoc].phones.map((phone, pIdx) => (
                                            <a 
                                                key={pIdx} 
                                                href={`tel:${phone}`} 
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg lg:rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-700 font-bold text-xs hover:bg-white hover:shadow-md transition-all active:scale-95"
                                            >
                                                <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" style={{ color: locations[activeLoc].color }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                                {phone}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Booking CTA */}
                                <Link 
                                    href="/booking"
                                    className="group flex items-center justify-center gap-2 lg:gap-4 bg-[#1A2E44] text-white px-5 py-3 lg:px-8 lg:py-4 rounded-xl lg:rounded-2xl font-black text-xs lg:text-sm transition-all hover:shadow-lg active:scale-95 shrink-0 w-full sm:w-auto mt-2 sm:mt-0"
                                    style={{ boxShadow: `0 10px 30px -10px ${locations[activeLoc].color}40` }}
                                >
                                    Book Visit
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#1A2E44] transition-all">
                                        <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
      </div>

      {/* --- SCROLLBAR CSS --- */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E2E8F0;
          border-radius: 4px;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}