"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = [
  {
    title: "ABA Therapy",
    desc: "Structured positive reinforcement to develop essential life & social skills.",
    who: "Children aged 2-12 with Autism spectrum.",
    expect: "1-on-1 intensive therapy, 2-3 hour clinical sessions.",
    color: "#E32636",
    id: "01",
    tag: "Behavioral"
  },
  {
    title: "Speech",
    desc: "Targeted interventions for verbal communication and language processing.",
    who: "Children with speech delays or articulation issues.",
    expect: "45-min play-based therapeutic modules.",
    color: "#00AEEF",
    id: "02",
    tag: "Communication"
  },
  {
    title: "Occupational",
    desc: "Developing fine motor skills, sensory processing, and daily independence.",
    who: "Children with Sensory Processing Disorder or CP.",
    expect: "Hands-on sensory gym activities with experts.",
    color: "#8CBF3F",
    id: "03",
    tag: "Physical"
  },
  {
    title: "Physiotherapy",
    desc: "Physical rehab to improve mobility, muscle tone, and body coordination.",
    who: "Children with motor delays or postural issues.",
    expect: "Active exercise-based strength building.",
    color: "#F28500",
    id: "04",
    tag: "Mobility"
  },
  {
    title: "Special Edu",
    desc: "Academic & cognitive support bridge for children with learning needs.",
    who: "Children with ADHD or learning disabilities.",
    expect: "1.5-hour customized academic coaching.",
    color: "#6366F1",
    id: "05",
    tag: "Cognitive"
  }
];

export default function ServiceGrid() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#F8FAFC] py-16 lg:py-40 font-plus-jakarta relative overflow-hidden w-full">
      
      {/* --- PREMIUM AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-100/40 blur-[150px] rounded-full"
        />
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* --- DYNAMIC HEADER --- */}
        <div className="mb-10 lg:mb-20">
          <div className="flex items-center gap-3 mb-4 lg:mb-6">
            <div className="w-8 lg:w-12 h-[2px] bg-[#1A2E44]" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#1A2E44]">Service Ecosystem</span>
          </div>
          <h2 className="text-5xl lg:text-[10rem] font-black text-[#1A2E44] tracking-tighter leading-[0.85] mb-2 lg:mb-4">
            Clinical <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Precision.</span>
          </h2>
        </div>

        {/* --- MAIN GRID LAYOUT (Responsive) --- */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-8 items-start w-full">
          
          {/* Left: Interactive Navigation Pills (Horizontal on Mobile, Vertical on Desktop) */}
          <div className="lg:col-span-4 flex flex-col gap-2 w-full overflow-hidden">
             <div className="flex overflow-x-auto lg:flex-col gap-3 pb-3 lg:pb-0 snap-x snap-mandatory no-scrollbar w-full max-w-full">
               {servicesData.map((s, i) => (
                 <button
                   key={i}
                   onClick={() => setActiveTab(i)}
                   className={`group relative flex items-center justify-between shrink-0 w-[160px] sm:w-[220px] lg:w-full lg:min-w-0 snap-center p-3.5 lg:px-10 lg:py-8 rounded-2xl lg:rounded-[2.5rem] text-left transition-all duration-500 outline-none overflow-hidden
                   ${activeTab === i 
                     ? "bg-[#1A2E44] text-white shadow-lg lg:shadow-2xl lg:translate-x-4" 
                     : "bg-white text-slate-400 border border-slate-100 hover:border-blue-200 hover:text-[#1A2E44]"
                   }`}
                 >
                   <div className="flex items-center lg:items-start gap-3 relative z-10">
                     {/* Mobile Color Dot */}
                     <div 
                         className={`lg:hidden w-2 h-2 rounded-full shrink-0 ${activeTab === i ? 'bg-white' : 'bg-slate-300'}`}
                         style={{ backgroundColor: activeTab === i ? '#FFF' : s.color }}
                     />
                     <div className="flex flex-col">
                       <span className="hidden lg:block text-[9px] font-black uppercase tracking-[0.3em] mb-1 opacity-50">{s.id}</span>
                       <span className="text-sm sm:text-base lg:text-2xl font-black truncate lg:tracking-tighter">{s.title}</span>
                     </div>
                   </div>
                   
                   {/* Desktop Arrow */}
                   <div className={`hidden lg:flex w-10 h-10 rounded-full border border-white/10 items-center justify-center transition-transform relative z-10 ${activeTab === i ? 'scale-100' : 'scale-0'}`}>
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
                   </div>

                   {/* Background ID Glow */}
                   {activeTab === i && (
                     <motion.div layoutId="service-hover-bg" className="absolute top-0 right-0 h-full w-1.5 lg:w-2 shadow-[0_0_40px_rgba(255,255,255,0.2)]" style={{ backgroundColor: s.color }} />
                   )}
                 </button>
               ))}
             </div>
          </div>

          {/* Right: The Data Visualization Panel (Dynamic Card) */}
          <div className="lg:col-span-8 w-full mt-1 lg:mt-0">
            <div className="bg-white rounded-[2rem] lg:rounded-[4rem] border border-slate-100 p-6 sm:p-8 lg:p-20 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] h-full relative overflow-hidden flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -15 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10"
                >
                  <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-12">
                    <div className="h-1.5 lg:h-2 w-16 lg:w-24 rounded-full overflow-hidden bg-slate-100">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: "100%" }} 
                        className="h-full" 
                        style={{ backgroundColor: servicesData[activeTab].color }} 
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.4em] text-slate-400">Clinical Focus</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-8xl font-black text-[#1A2E44] tracking-tighter leading-none mb-4 lg:mb-10">
                    {servicesData[activeTab].title}<span style={{ color: servicesData[activeTab].color }}>.</span>
                  </h3>

                  <p className="text-base sm:text-lg lg:text-3xl text-slate-500 font-medium leading-relaxed lg:leading-tight italic mb-8 lg:mb-16 max-w-2xl">
                    "{servicesData[activeTab].desc}"
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 border-t border-slate-100 pt-6 lg:pt-16">
                    <div className="space-y-2 lg:space-y-4">
                      <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Primary Audience</span>
                      <p className="text-base lg:text-2xl font-black text-[#1A2E44] tracking-tight leading-snug">{servicesData[activeTab].who}</p>
                    </div>
                    <div className="space-y-2 lg:space-y-4">
                      <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">Service Delivery</span>
                      <p className="text-base lg:text-2xl font-black text-[#1A2E44] tracking-tight leading-snug">{servicesData[activeTab].expect}</p>
                    </div>
                  </div>

                  <Link 
                    href="/booking" 
                    className="mt-8 lg:mt-16 inline-flex px-8 py-4 lg:px-16 lg:py-6 bg-[#1A2E44] text-white rounded-xl lg:rounded-3xl font-black text-[10px] lg:text-xs uppercase tracking-[0.3em] hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all w-full sm:w-auto justify-center"
                    style={{ boxShadow: `0 10px 30px -10px ${servicesData[activeTab].color}40` }}
                  >
                    Register Case
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Huge Background Label */}
              <div className="absolute -bottom-6 -right-2 lg:-bottom-10 lg:-right-5 text-[8rem] lg:text-[22rem] font-black text-slate-900/[0.03] uppercase select-none pointer-events-none">
                {servicesData[activeTab].id}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SCROLLBAR CSS --- */}
      <style jsx>{`
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