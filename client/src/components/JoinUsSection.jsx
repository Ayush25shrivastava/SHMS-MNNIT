import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JoinUsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#fafbfc] dark:bg-slate-950 overflow-hidden flex flex-col items-center justify-center text-center px-4 transition-colors duration-300">
      
      {/* Radial soft background glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-purple-200/60 dark:bg-purple-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen transition-all duration-300"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
        
        {/* Top pill */}
        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800/60 text-[13px] md:text-sm font-bold tracking-wide mb-10 shadow-sm cursor-default transition-transform hover:scale-105 duration-300">
          <Sparkles size={16} className="text-purple-500 dark:text-purple-400" />
          <span>Limited Early Birds Available</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
          Ready to Join <span className="text-purple-500 px-1">SHMS<sup className="text-2xl md:text-3xl -top-3">26</sup></span>?
        </h2>

        {/* Description paragraph */}
        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-lg max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
          Register now for the International Conference on Next Gen Structural Health Monitoring. Early bird registration closes on September 30, 2026.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-20 relative z-20 w-full sm:w-auto">
          {/* Register Button */}
          <Link to="/register" className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(168,85,247,0.4)] active:scale-95 text-base md:text-lg">
            Register Now 
            <ArrowRight size={20} className="stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          
          {/* Learn More Button */}
          <Link to="/about" className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 text-base md:text-lg">
            Learn More 
            <ArrowRight size={20} className="stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400" />
          </Link>
        </div>

        {/* Bottom Metrics/Stats */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold font-serif text-purple-500 mb-2">3</span>
            <span className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium tracking-wide">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold font-serif text-purple-500 mb-2">10</span>
            <span className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium tracking-wide">Tracks</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold font-serif text-purple-500 mb-2">500+</span>
            <span className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium tracking-wide">Expected Delegates</span>
          </div>
        </div>

      </div>
    </section>
  );
}
