"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DonationBanner() {
  return (
    <section className="relative bg-[#FFF7ED] py-24 lg:py-32 overflow-hidden font-plus-jakarta border-t border-orange-100/50">
      
      {/* --- PREMIUM BACKGROUND GRAPHICS --- */}
      <div className="absolute inset-0 z-0">
        {/* Abstract Pulsing Halos */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-200/40 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.1, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-300/20 blur-[150px] rounded-full"
        />
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#EA580C 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/40 backdrop-blur-xl border border-orange-100 rounded-[3.5rem] p-10 lg:p-20 shadow-[0_40px_100px_-20px_rgba(234,88,12,0.1)] text-center overflow-hidden"
        >
          {/* Decorative Top Icon */}
          <div className="flex justify-center mb-8">
             <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-[0_15px_30px_rgba(234,88,12,0.3)] rotate-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
             </div>
          </div>

          <h2 className="text-4xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]">
            Be the Reason a Child <br />
            Speaks Their <span className="text-orange-600">First Word.</span>
          </h2>
          
          <p className="text-xl lg:text-3xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Your contribution directly funds therapy for underprivileged families. 
            Together, we can <span className="text-slate-900 font-bold underline decoration-orange-400">unlock their potential</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              href="/booking" 
              className="group relative w-full sm:w-auto px-12 py-6 bg-orange-500 text-white rounded-2xl text-xl font-black transition-all hover:bg-orange-600 hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.5)] active:scale-95 overflow-hidden text-center"
            >
              <span className="relative z-10">Donate Now</span>
              {/* Animated Inner Shine */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>

            <Link 
              href="/about" 
              className="w-full sm:w-auto px-12 py-6 bg-white border-2 border-orange-200 text-orange-600 rounded-2xl text-xl font-black hover:bg-orange-50 hover:border-orange-300 transition-all text-center"
            >
              See Our Impact
            </Link>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-12 pt-10 border-t border-orange-100/50 flex flex-wrap justify-center gap-8 lg:gap-16">
             <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">500+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Children Helped</span>
             </div>
             <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">100%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Direct Funding</span>
             </div>
             <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">Secured</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Verified Payment</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}