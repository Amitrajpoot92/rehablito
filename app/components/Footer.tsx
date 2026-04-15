"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const therapies = [
  { name: "ABA Therapy", href: "/services#aba" },
  { name: "Speech Therapy", href: "/services#speech" },
  { name: "Occupational Therapy", href: "/services#ot" },
  { name: "Physiotherapy", href: "/services#physio" },
];

const supports = [
  { name: "Book Appointment", href: "/booking" },
  { name: "Donate Session", href: "/booking" },
  { name: "Contact Us", href: "/about" },
  { name: "FAQs", href: "/home" },
];

// --- REAL SOCIAL LINKS ---
const socialLinks = [
  { 
    name: "YouTube", 
    href: "https://www.youtube.com/@REHABLITO", 
    icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> 
  },
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/rehablito/", 
    icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> 
  },
  { 
    name: "Facebook", 
    href: "https://www.facebook.com/desire.physio/", 
    icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/></svg> 
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050A15] text-slate-400 pt-20 pb-10 overflow-hidden font-plus-jakarta border-t border-white/5">
      
      {/* --- ADVANCED BACKGROUND GRAPHICS (Deep Depth) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- DYNAMIC BOOKING ACTION HUB (High Conversion / Low Height) --- */}
        <div className="relative group mb-20">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#1B6CA8] via-[#00AEEF] to-[#8CBF3F] rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-[#0A1120]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
                <svg className="w-8 h-8 text-[#00AEEF] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tighter">Ready to See Progress?</h3>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mt-1">Book your clinical assessment today</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3 relative z-10">
              <Link 
                href="/booking" 
                className="group/btn relative px-10 py-5 bg-white text-[#1A2E44] rounded-2xl font-black text-lg transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-95 flex items-center gap-3"
              >
                Schedule Appointment
                <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Next Available Slot: Today 4:00 PM</span>
              </div>
            </div>

            {/* Background Abstract Wave */}
            <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[0.03] pointer-events-none" viewBox="0 0 400 200">
                <path d="M0,100 C150,200 250,0 400,100 L400,200 L0,200 Z" fill="#fff"></path>
            </svg>
          </div>
        </div>

        {/* --- MAIN FOOTER CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <Link href="/" className="group inline-block">
              <div className="text-3xl font-black tracking-tighter flex items-center justify-center lg:justify-start">
                <span className="text-[#E32636]">R</span>
                <span className="text-[#F28500]">e</span>
                <span className="text-[#FFD700]">h</span>
                <span className="text-[#8CBF3F]">a</span>
                <span className="text-[#00AEEF]">b</span>
                <span className="text-white">lito</span>
                <div className="w-2 h-2 bg-[#00AEEF] rounded-full ml-1" />
              </div>
            </Link>
            <p className="text-lg leading-relaxed text-slate-500 max-w-sm mx-auto lg:mx-0">
              Science-backed therapy for meaningful life changes. Leading Speech & Autism care in Uttar Pradesh.
            </p>
            
            {/* UPDATED SOCIAL LINKS MAP */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title={item.name}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#00AEEF] hover:text-white hover:scale-110 transition-all duration-300 shadow-sm"
                >
                   {item.icon}
                </a>
              ))}
            </div>

          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 text-center sm:text-left">
            <div className="space-y-6">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] opacity-50">Our Expertise</h4>
              <ul className="space-y-4">
                {therapies.map(t => (
                  <li key={t.name}>
                    <Link href={t.href} className="text-slate-500 hover:text-[#00AEEF] transition-all text-sm font-bold flex items-center justify-center sm:justify-start gap-2 group">
                      <div className="hidden sm:block w-1.5 h-[1px] bg-blue-600 transition-all group-hover:w-4" />
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 text-slate-500">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] opacity-50">Quick Help</h4>
              <ul className="space-y-4">
                {supports.map(s => (
                  <li key={s.name}>
                    <Link href={s.href} className="text-slate-500 hover:text-white transition-all text-sm font-bold">{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-6">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] opacity-50">Contact Hub</h4>
              <div className="space-y-4">
                {/* UPDATED PHONE NUMBER */}
                <a href="tel:9204786220" className="text-2xl font-black text-white block hover:text-[#00AEEF] transition-all tracking-tighter leading-none">
                  +91 92047 86220
                </a>
                {/* UPDATED EMAIL ADDRESS */}
                <a href="mailto:rehablito@gmail.com" className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] hover:text-white transition-colors block">
                  rehablito@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- DYNAMIC COPYRIGHT & CREDITS --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.3em] text-center md:text-left">© 2026 Rehablito Autism Center</p>
          
          <a 
            href="https://codewebx.in" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-6 py-2.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00AEEF]/50 transition-all"
          >
             <span className="text-[10px] font-bold text-slate-600 group-hover:text-white transition-colors uppercase tracking-widest">Built with precision by</span>
             <span className="text-xs font-black text-white group-hover:text-[#00AEEF] transition-colors">CodeWebX.in</span>
          </a>
        </div>
      </div>
    </footer>
  );
}