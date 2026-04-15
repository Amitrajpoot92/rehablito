"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Free Consultation",
    nextUp: "Assessment",
    desc: "Map out the first phase of your child's developmental journey through a personalized digital session.",
    color: "#1B6CA8", 
  },
  {
    id: "02",
    title: "Deep Assessment",
    nextUp: "Elite Therapy",
    desc: "Gentle, play-based evaluation by certified specialists to identify the core developmental path.",
    color: "#F28500", 
  },
  {
    id: "03",
    title: "Elite Therapy",
    nextUp: "Goal Reached",
    desc: "Execution of evidence-based sessions in a tech-advanced environment with precision milestone tracking.",
    color: "#8CBF3F", 
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-20 lg:py-32 bg-[#0A0F1C] overflow-hidden font-plus-jakarta border-b border-white/5">
      
      {/* Background Gradients for Depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-cyan-400 font-black text-[10px] uppercase tracking-[0.5em] mb-3 block">Process Architecture</span>
            <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tighter leading-none">
              How It <span className="text-slate-600">Flows.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-base lg:text-lg border-l border-white/10 pl-6">
            A 3-step kinetic journey designed for precision care and rapid progress.
          </p>
        </div>

        {/* --- THE HUD CARD WITH HIGHLIGHTED MOVING DOT BORDER --- */}
        <div className="relative group">
          
          {/* MOVING DOT BORDER (Enhanced Visibility & Smoothness) */}
          <div className="absolute -inset-[2.5px] rounded-[3.5rem] overflow-hidden pointer-events-none z-0">
             <svg className="w-full h-full" preserveAspectRatio="none">
                {/* Static base border for context */}
                <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="54" fill="transparent" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                
                {/* Moving Highlight Light */}
                <motion.rect
                  x="2" y="2"
                  width="calc(100% - 4px)" height="calc(100% - 4px)"
                  rx="54"
                  fill="transparent"
                  stroke={steps[activeStep].color}
                  strokeWidth="3"
                  strokeDasharray="100 400"
                  animate={{ strokeDashoffset: [0, -500] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  style={{ stroke: steps[activeStep].color }}
                />
             </svg>
          </div>

          <div className="relative bg-[#0A0F1C]/90 border border-white/10 rounded-[3.5rem] p-8 lg:p-16 backdrop-blur-2xl overflow-hidden shadow-2xl z-10">
            
            {/* Step Selector Buttons */}
            <div className="flex items-center justify-between mb-12 lg:mb-24 relative px-2">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 -z-10"></div>
              
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="relative group outline-none"
                >
                  <div 
                      className={`w-16 h-16 lg:w-24 lg:h-24 rounded-3xl flex items-center justify-center border transition-all duration-500 
                      ${activeStep === index 
                          ? 'bg-white border-white shadow-[0_0_50px_rgba(255,255,255,0.25)] scale-110' 
                          : 'bg-white/5 border-white/10 hover:border-white/20'}`}
                  >
                    <span className={`text-2xl lg:text-4xl font-black transition-colors ${activeStep === index ? 'text-[#0A0F1C]' : 'text-slate-600'}`}>
                      {step.id}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* --- CONTENT DISPLAY --- */}
            <div className="min-h-[250px] flex flex-col lg:flex-row lg:items-center justify-between gap-12">
              <div className="flex-1 text-center lg:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-4xl lg:text-7xl font-black mb-6 tracking-tighter" style={{ color: steps[activeStep].color }}>
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-slate-400 text-lg lg:text-2xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      {steps[activeStep].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* --- NAVIGATION CONTROLS (PREV & NEXT) --- */}
              <div className="flex items-end justify-center gap-6 lg:gap-10 lg:w-1/3">
                  
                  {/* PREVIOUS BUTTON */}
                  <AnimatePresence mode="popLayout">
                    {activeStep > 0 && (
                      <motion.div 
                        key="prev"
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, x: 20 }}
                        className="flex flex-col items-center gap-5 cursor-pointer group"
                        onClick={() => setActiveStep(activeStep - 1)}
                      >
                         <div className="text-white font-black text-[10px] uppercase tracking-[0.4em] opacity-60 group-hover:opacity-100 transition-opacity">
                            Go <span style={{ color: steps[activeStep - 1].color }}>Back</span>
                         </div>
                         <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            <svg className="w-7 h-7 text-white group-hover:text-[#0A0F1C] transition-colors animate-bounce-x-reverse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* NEXT BUTTON OR COMPLETED STATE */}
                  <AnimatePresence mode="popLayout">
                    {activeStep < steps.length - 1 ? (
                      <motion.div 
                        key="next"
                        initial={{ opacity: 0, scale: 0.9, x: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, x: -20 }}
                        className="flex flex-col items-center gap-5 cursor-pointer group"
                        onClick={() => setActiveStep(activeStep + 1)}
                      >
                         <div className="text-white font-black text-[10px] uppercase tracking-[0.4em] opacity-60 group-hover:opacity-100 transition-opacity">
                            Next Up: <span style={{ color: steps[activeStep + 1].color }}>{steps[activeStep].nextUp}</span>
                         </div>
                         <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            <svg className="w-7 h-7 text-white group-hover:text-[#0A0F1C] transition-colors animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                         </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                         key="optimized"
                         initial={{ opacity: 0, scale: 0.9 }} 
                         animate={{ opacity: 1, scale: 1 }}
                         exit={{ opacity: 0, scale: 0.9 }}
                         className="px-8 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 font-bold text-xs uppercase tracking-[0.3em] mb-4"
                      >
                         Path Optimized
                      </motion.div>
                    )}
                  </AnimatePresence>
              </div>

            </div>

            {/* Bottom Energy Progress Line */}
            <div className="mt-16 h-[2px] w-full bg-white/5 relative rounded-full overflow-hidden">
               <motion.div 
                  animate={{ width: `${((activeStep + 1) / steps.length) * 100}%`, backgroundColor: steps[activeStep].color }}
                  className="h-full shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  transition={{ duration: 0.8 }}
               />
            </div>
          </div>
        </div>

        {/* --- GLOBAL START JOURNEY CTA --- */}
        <div className="mt-16 flex justify-center">
            <button className="px-12 py-5 bg-white text-[#0A0F1C] rounded-2xl font-black text-xl hover:bg-cyan-400 transition-all active:scale-95 shadow-2xl hover:shadow-cyan-500/20">
                Start Your Onboarding
            </button>
        </div>

      </div>

      <style jsx>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1.2s infinite ease-in-out;
        }
        
        /* New Animation For Left Arrow */
        @keyframes bounce-x-reverse {
          0%, 100% { transform: translateX(0) rotate(180deg); }
          50% { transform: translateX(-10px) rotate(180deg); }
        }
        .animate-bounce-x-reverse {
          animation: bounce-x-reverse 1.2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}