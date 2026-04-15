"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Aapke REHABLITO channel ke original video IDs
const videoItems = [
  { 
    id: 1, 
    ytId: "eFLYLv19P08", 
    title: "Inside Rehablito Clinic", 
    span: "md:col-span-2 md:row-span-2" 
  },
  { 
    id: 2, 
    ytId: "GvGVjNOgpEQ", 
    title: "Therapy & Engagement", 
    span: "md:col-span-1 md:row-span-1" 
  },
  { 
    id: 3, 
    ytId: "oc5bXmy8BQw", 
    title: "Sensory Development", 
    span: "md:col-span-1 md:row-span-1" 
  },
  { 
    id: 4, 
    ytId: "besr4eJgh-w", 
    title: "Speech & Communication", 
    span: "md:col-span-1 md:row-span-1" 
  },
  { 
    id: 5, 
    ytId: "kLEj_1rv-Zo", 
    title: "Motor Skills Session", 
    span: "md:col-span-1 md:row-span-1" 
  },
  { 
    id: 6, 
    ytId: "KXuU_dHzpkI", 
    title: "Parent's Journey & Progress", 
    span: "md:col-span-2 md:row-span-1" 
  },
];

export default function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Background scroll lock logic for smooth UX
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedVideo]);

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC] font-plus-jakarta relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#E32636] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Video Gallery</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-[#1A2E44] tracking-tighter"
          >
            Watch Us in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E32636] to-[#F28500]">Action.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto text-base lg:text-lg"
          >
            Experience our therapeutic approaches, clinic environment, and success stories directly through our video highlights.
          </motion.p>
        </div>

        {/* --- HORIZONTAL MOBILE SCROLL & DESKTOP BENTO GRID --- */}
        <div className="flex md:grid md:grid-cols-4 gap-4 md:auto-rows-[250px] overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 no-scrollbar">
          {videoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedVideo(item.ytId)}
              className={`relative flex-none w-[80vw] sm:w-[60vw] h-[350px] md:w-auto md:h-auto snap-center rounded-3xl lg:rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 bg-slate-900 ${item.span}`}
            >
              {/* YouTube Thumbnail (Automatically Fetched) */}
              <img 
                src={`https://img.youtube.com/vi/${item.ytId}/maxresdefault.jpg`} 
                alt={item.title}
                onError={(e) => {
                  // Fallback if maxresdefault is not available
                  (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${item.ytId}/hqdefault.jpg`;
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/90 via-[#0A0F1C]/30 to-transparent transition-opacity duration-500" />
              
              {/* YouTube Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#E32636] group-hover:scale-110 transition-all duration-300 border border-white/30 shadow-xl">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                 </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 w-full p-6 transition-all duration-500 flex flex-col justify-end">
                <h3 className="text-white font-black text-xl lg:text-2xl tracking-tight leading-tight group-hover:text-[#F28500] transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MOBILE HINT --- */}
        <div className="mt-6 flex justify-center lg:hidden">
          <div className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            Swipe to View More 
            <svg className="w-4 h-4 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </div>
        </div>

      </div>

      {/* --- THEATER MODE (VIDEO MODAL) --- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-2 sm:p-4 lg:p-10"
          >
            {/* Close Background Click */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedVideo(null)} />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              // aspect-video Ensures exact YouTube 16:9 ratio on all screens
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(227,38,54,0.15)] border border-white/10 z-10"
            >
              {/* Close Button - Responsive size & position */}
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-2 right-2 lg:top-4 lg:right-4 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-black/50 hover:bg-[#E32636] text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/20"
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* YouTube iFrame Player */}
              <iframe 
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}