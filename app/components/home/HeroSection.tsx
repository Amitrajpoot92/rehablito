"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 1. REHABLITO LOGO (High-End Wave Animation)
const RehablitoLogo = () => {
  const letters = "Rehablito".split("");
  const colors = ["#ff0015", "#F28500", "#FFD700", "#3fbf54", "#00AEEF", "#fa0758", "#6366F1", "#FFD700", "#FFD700"];
  return (
    <div className="flex space-x-1 lg:space-x-2 mb-4 lg:mb-6 justify-center lg:justify-start relative z-10">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block text-3xl sm:text-4xl lg:text-7xl font-black tracking-tighter"
          style={{ color: colors[i] }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

// 2. TYPING EFFECT
const TypingEffect = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const words = ["Speech Therapy", "Autism Care", "Child Growth"];

  useEffect(() => {
    let timer = setTimeout(() => {
      const i = loopNum % words.length;
      const fullWord = words[i];
      setText(isDeleting ? fullWord.substring(0, text.length - 1) : fullWord.substring(0, text.length + 1));
      if (!isDeleting && text === fullWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, isDeleting ? 40 : 120);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return <span className="text-[#00AEEF] drop-shadow-[0_0_10px_rgba(0,174,239,0.8)] font-black">{text}</span>;
};

export default function HeroSection() {
  const services = [
    "Speech Therapy", "Occupational Therapy", "Autism Disorder", 
    "Behavioral Therapy", "Sensory Integration", "Developmental Delay", 
    "Early Intervention", "Child Psychology"
  ];

  return (
    <section className="relative min-h-screen lg:min-h-[900px] flex flex-col bg-[#FDFDFD] overflow-hidden pt-28 lg:pt-36 font-plus-jakarta">
      
      {/* --- PREMIUM DIAGONAL WAVE BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Mobile: Exact Tircha Curve (Diagonal Wave) as requested */}
        <div 
            className="absolute top-0 left-0 w-full h-[60%] sm:h-[55%] bg-[#1D3F61] block lg:hidden shadow-2xl"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 65%, 0 100%)' }}
        ></div>
        
        {/* Laptop: Architectural Diagonal */}
        <div className="absolute top-0 right-0 w-full h-full bg-[#274461] hidden lg:block shadow-2xl"
             style={{ clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 75% 100%)' }}
        ></div>
        
        {/* Decorative Glow */}
        <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-blue-100/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex items-center pb-20 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
          
          {/* --- VIDEO CONTAINER --- */}
          <div className="w-full lg:w-[48%] order-1 lg:order-2 pt-6 lg:pt-0 relative z-10">
            <motion.div 
              className="relative group mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-2 lg:-inset-4 bg-white/20 backdrop-blur-xl rounded-[2.5rem] lg:rounded-[4rem] border border-white/40 -z-10 shadow-2xl"></div>
              
              <div className="relative aspect-video lg:aspect-[4/5] w-full max-w-[500px] lg:max-w-none rounded-[2rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl bg-slate-900 ring-2 ring-white">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
                  <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <TypingEffect />
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- TEXT CONTENT --- */}
          <div className="w-full lg:w-[52%] flex flex-col text-center lg:text-left order-2 lg:order-1 lg:pr-6 mt-12 lg:mt-0 relative z-20">
            <RehablitoLogo />
            
            <div className="inline-flex items-center self-center lg:self-start space-x-2 bg-white/80 backdrop-blur-sm border border-slate-100 px-4 py-2 rounded-full shadow-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase">Trusted by 2,400+ Families</span>
            </div>

            <h1 className="text-4xl lg:text-7xl font-black text-[#1b6ba8] leading-tight lg:leading-[1.1] tracking-tighter mb-6">
              <span style={{ WebkitTextStroke: '1.5px white' }}>
                Care That Makes <br className="hidden lg:block" /> a
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B6CA8] to-[#00AEEF] animate-pulse font-black">
                Difference.
              </span>
            </h1>

            <p className="text-base lg:text-2xl text-slate-400 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed mb-10 px-2 lg:px-0">
              Transforming young lives through <span className="text-slate-900 font-bold italic underline decoration-blue-400 underline-offset-8 decoration-4">expert therapy</span> and personalized care paths.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start px-4">
              <Link href="/booking" className="group relative w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1B6CA8] to-[#00AEEF] rounded-[2rem] blur opacity-20 group-hover:opacity-60 transition duration-300"></div>
                <button className="relative w-full sm:w-auto bg-[#1B6CA8] text-white px-10 py-5 rounded-[2rem] text-lg font-bold flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl shadow-blue-500/10">
                  Book a Consultation
                </button>
              </Link>

              <Link href="/about" className="w-full sm:w-auto">
                <button className="relative w-full sm:w-auto bg-white border-2 border-slate-100 text-[#1B6CA8] px-10 py-5 rounded-[2rem] text-lg font-bold hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                  Our Specialists
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM MOVING BAR (Locked at very end) --- */}
      <div className="relative w-full bg-[#0A0F1C] border-t border-white/5 py-6 lg:py-8 overflow-hidden z-30 mt-auto">
        <div className="flex animate-marquee-stable whitespace-nowrap">
          <div className="flex items-center gap-12 lg:gap-24 px-10">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-slate-400 text-[10px] lg:text-xs font-bold uppercase tracking-[0.4em]">{service}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] shadow-[0_0_10px_#00AEEF]"></div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-12 lg:gap-24 px-10">
            {services.map((service, index) => (
              <div key={`dup-${index}`} className="flex items-center gap-4">
                <span className="text-slate-400 text-[10px] lg:text-xs font-bold uppercase tracking-[0.4em]">{service}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] shadow-[0_0_10px_#00AEEF]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-stable {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-stable {
          animation: marquee-stable 45s linear infinite;
        }
      `}</style>
    </section>
  );
}