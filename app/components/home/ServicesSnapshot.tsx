"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const services = [
  { 
    id: "01",
    title: "ABA Therapy", 
    desc: "Scientific positive reinforcement system to build vital communication and life skills. We focus on measurable progress and behavioral excellence.", 
    color: "#1B6CA8", 
    image: "/images/ABA.webp", 
    accent: "shadow-blue-500/20"
  },
  { 
    id: "02",
    title: "Speech Therapy", 
    desc: "Expert techniques to master verbal expression and social communication hurdles. We help children find their unique voice and confidence.", 
    color: "#F28500", 
    image: "/images/speech.webp", 
    accent: "shadow-orange-500/20"
  },
  { 
    id: "03",
    title: "Occupational Therapy", 
    desc: "Empowering kids with fine motor skills and sensory processing for daily independence. Bridge the gap in physical coordination.", 
    color: "#8CBF3F", 
    image: "/images/Occupational.webp", 
    accent: "shadow-green-500/20"
  },
  { 
    id: "04",
    title: "Physiotherapy", 
    desc: "Advanced physical care to improve posture, balance, and gross motor functions through specialized exercise paths tailored for kids.", 
    color: "#E32636", 
    image: "/images/Physiotherapy.webp", 
    accent: "shadow-red-500/20"
  },
  { 
    id: "05",
    title: "Special Education", 
    desc: "Customized learning paths and Individualized Education Plans (IEP) to unlock academic readiness and social integration.", 
    color: "#00AEEF", 
    image: "/images/specialedu.webp", 
    accent: "shadow-cyan-500/20"
  },
];

export default function ServicesSnapshot() {
  const [activeTab, setActiveTab] = useState(0);

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="relative py-20 lg:py-32 bg-[#FDFDFD] overflow-hidden font-plus-jakarta">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-10 lg:mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[#1B6CA8] font-black text-[10px] lg:text-xs uppercase tracking-[0.4em] mb-4 block">What We Offer</span>
            <h2 className="text-4xl lg:text-7xl font-black text-[#1A2E44] tracking-tighter leading-none">
              Specialized <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B6CA8] to-cyan-500">Therapy Paths.</span>
            </h2>
          </div>
        </div>

        {/* --- INTERACTIVE SWIPE PANEL --- */}
        <motion.div 
          className="relative w-full bg-white border border-slate-100 rounded-[2.5rem] lg:rounded-[3.5rem] pt-6 px-6 pb-2 lg:p-16 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] overflow-hidden cursor-grab active:cursor-grabbing flex flex-col justify-between"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset }) => {
            const swipe = offset.x;
            if (swipe < -50) handleNext();
            else if (swipe > 50) handlePrev();
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -10 }}
              transition={{ duration: 0.15, ease: "easeInOut" }} // SUPER FAST TRANSITION
              className="relative z-10 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full"
            >
              {/* --- TEXT SIDE --- */}
              <div className="flex flex-col items-start text-left">
                
                {/* --- FIX: TOP BADGES (Program + View Details) --- */}
                <div className="flex flex-wrap items-center gap-3 mb-4 lg:mb-6">
                  <div 
                      className="px-4 py-1.5 lg:px-5 lg:py-2 rounded-full text-[9px] lg:text-[10px] font-black tracking-[0.2em] uppercase border-2 transition-colors"
                      style={{ borderColor: services[activeTab].color, color: services[activeTab].color }}
                  >
                      Program {services[activeTab].id}
                  </div>

                  {/* View Details moved here in same pill design */}
                  <Link 
                    href="/services" 
                    className="group inline-flex items-center gap-2 px-4 py-1.5 lg:px-5 lg:py-2 rounded-full text-[9px] lg:text-[10px] font-black tracking-[0.2em] uppercase transition-all hover:opacity-80 text-white shadow-sm"
                    style={{ backgroundColor: services[activeTab].color }}
                  >
                    View Details
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-7xl font-black mb-4 lg:mb-6 leading-tight text-[#1A2E44]">
                  {services[activeTab].title}
                </h3>
                <p className="text-slate-500 text-base lg:text-2xl font-medium leading-relaxed mb-6 lg:mb-10 lg:max-w-lg">
                  {services[activeTab].desc}
                </p>
                
                {/* --- FIX: CONTROLS ROW (Only Arrows & Progress) --- */}
                <div className="w-full relative z-30">
                  <div className="inline-flex items-center gap-3 lg:gap-4 bg-slate-50 border border-slate-100 px-4 py-2.5 lg:px-5 lg:py-3 rounded-2xl shadow-sm">
                    {/* Previous Arrow Highlighted */}
                    <button onClick={(e) => { e.preventDefault(); handlePrev(); }} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 active:scale-90 transition-all" style={{ backgroundColor: services[activeTab].color }}>
                        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    
                    <div className="flex gap-1.5 lg:gap-2 items-center">
                        {services.map((_, i) => (
                            <div 
                                key={i} 
                                onClick={(e) => { e.preventDefault(); setActiveTab(i); }}
                                className={`h-1.5 lg:h-2 transition-all duration-300 rounded-full cursor-pointer`}
                                style={{ 
                                  width: activeTab === i ? '20px' : '6px',
                                  backgroundColor: activeTab === i ? services[activeTab].color : '#CBD5E1'
                                }}
                            />
                        ))}
                    </div>

                    {/* Next Arrow Highlighted */}
                    <button onClick={(e) => { e.preventDefault(); handleNext(); }} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 active:scale-90 transition-all" style={{ backgroundColor: services[activeTab].color }}>
                        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>

              </div>

              {/* --- IMAGE SIDE --- */}
              <div className="relative flex items-center justify-center w-full mt-6 lg:mt-0">
                <div className="absolute inset-0 rounded-full blur-[100px] lg:blur-[140px] opacity-30" style={{ backgroundColor: services[activeTab].color }}></div>
                
                {/* HEIGHT CONTROL FOR MOBILE */}
                <motion.div 
                   className="relative w-full aspect-square max-w-[300px] lg:max-w-[420px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100 z-20 mb-2 lg:mb-0"
                   initial={{ rotate: 3 }}
                   animate={{ rotate: 0 }}
                   transition={{ duration: 0.8 }}
                >
                   <img 
                    src={services[activeTab].image} 
                    alt={services[activeTab].title}
                    className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </motion.div>

                {/* Rotating Shapes */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-6 lg:-inset-16 border-[3px] lg:border-[4px] opacity-25 rounded-[3.5rem] lg:rounded-[5rem] pointer-events-none z-10" 
                    style={{ borderColor: services[activeTab].color }}
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 lg:-inset-10 border-[2px] lg:border-[3px] border-dashed opacity-20 rounded-[3rem] lg:rounded-[4.5rem] pointer-events-none z-10" 
                    style={{ borderColor: services[activeTab].color }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}