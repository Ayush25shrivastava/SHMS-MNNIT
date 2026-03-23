import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import img1 from '../assets/about page/mnnit-campus-1-6EwwuzSY.jpeg';
import img2 from '../assets/about page/mnnit-campus-2-BIDORmLh.jpeg';
import img3 from '../assets/about page/mnnit-campus-3-C7xyItM8.jpeg';

const sliderData = [
  {
    image: img1,
    title: 'Academic Excellence',
    description: "MNNIT Allahabad stands as a beacon of technical education, producing world-class engineers and researchers since 1961. The institute consistently ranks among India's top NITs.",
    tag: "Ranked among Top 50 Engineering Institutes in India"
  },
  {
    image: img2,
    title: 'State-of-the-Art Infrastructure',
    description: 'Sprawling across 222 acres of lush greenery, the campus houses modern laboratories, research centers, and world-class facilities that foster innovation and learning.',
    tag: "222 acres of green, sustainable campus"
  },
  {
    image: img3,
    title: 'Research & Innovation Hub',
    description: "Home to cutting-edge research in engineering, technology, and sciences. The institute collaborates with global universities and industries to drive innovation.",
    tag: "500+ research publications annually"
  }
];

export default function MnnitAllahabadSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderData.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % sliderData.length);
  };

  return (
    <section className="bg-white dark:bg-[#080d1a] py-24 md:py-32 transition-colors duration-300 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Strings */}
        <div className="text-center mb-12">
          <h2 className="text-purple-500 dark:text-purple-400 font-bold tracking-[0.15em] uppercase text-[11px] md:text-sm mb-4">
            Host Institution
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
            MNNIT Allahabad
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-[14px] md:text-[16px] font-medium max-w-2xl mx-auto leading-relaxed transition-colors">
            A premier technical institution in India, ranked among the top NITs, known for excellence in education and research.
          </p>
        </div>

        {/* Main Image Slider */}
        <div className="relative w-full h-[450px] md:h-[550px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] group transition-all duration-300">
          
          {sliderData.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img 
                src={slide.image} 
                className={`w-full h-full object-cover transition-transform duration-[8500ms] ${
                   index === current ? "scale-[1.05]" : "scale-100"
                }`}
                alt={slide.title}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/60 to-transparent dark:from-[#000000] dark:via-[#000000]/70"></div>
              
              {/* Animated Inner Text Box */}
              <div 
                className={`absolute left-0 bottom-0 p-8 md:p-14 max-w-2xl transition-all duration-1000 transform ease-out ${
                  index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="text-purple-400 dark:text-purple-300 font-bold tracking-[0.15em] uppercase text-[10px] md:text-xs mb-4 flex items-center gap-2">
                  <GraduationCap size={16} className="-ml-1" />
                  MNNIT ALLAHABAD
                </div>
                <h4 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-5 transition-transform duration-500 max-w-[90%]">
                  {slide.title}
                </h4>
                <p className="text-[#d8dce6] text-[13px] md:text-[16px] mb-8 leading-relaxed font-medium md:max-w-[85%]">
                  {slide.description}
                </p>
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-purple-400/30 bg-purple-950/40 backdrop-blur-md shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  <span className="text-white text-[11px] md:text-[13px] font-semibold">{slide.tag}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600/60 backdrop-blur-lg border border-white/20 text-white transition-all scale-90 md:scale-100 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600/60 backdrop-blur-lg border border-white/20 text-white transition-all scale-90 md:scale-100 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 duration-300"
          >
            <ChevronRight size={24} />
          </button>

        </div>

        {/* Thumbnail Navigator */}
        <div className="flex flex-col items-center justify-center mt-6 mb-16 gap-5">
          {/* Morphing Dots */}
          <div className="flex gap-2">
            {sliderData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-500 rounded-full h-2 md:h-2.5 ${
                  idx === current ? "w-10 bg-purple-500" : "w-2.5 bg-slate-200 dark:bg-slate-700 hover:bg-purple-300"
                }`}
              />
            ))}
          </div>

          {/* Image Thumbnails */}
          <div className="flex gap-2.5 justify-center">
            {sliderData.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`shrink-0 overflow-hidden rounded-[10px] transition-all duration-300 border-[2.5px] ${
                  idx === current 
                  ? 'border-purple-600 scale-[1.03] shadow-[0_5px_15px_-5px_rgba(168,85,247,0.4)] opacity-100' 
                  : 'border-transparent opacity-50 hover:opacity-100 hover:border-purple-300 hover:scale-[1.03]'
                }`}
              >
                <img src={slide.image} className="w-[50px] h-[35px] md:w-[70px] md:h-[45px] object-cover" alt="" />
              </button>
            ))}
          </div>
        </div>

        {/* Informative Stat Cards (3 grid layout) */}
        <div className="grid grid-cols-3 max-w-4xl mx-auto gap-3 md:gap-5 px-2 md:px-0">
          {[
            { num: "1961", label: "Established" },
            { num: "14", label: "Departments" },
            { num: "8000+", label: "Students" },
          ].map((stat, i) => (
             <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 md:p-8 text-center shadow-sm border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-purple-200 dark:hover:border-purple-500/40 cursor-default">
              <div className="text-2xl md:text-5xl font-black text-purple-600 dark:text-purple-400 mb-2 md:mb-3 font-serif transition-colors duration-300">
                {stat.num}
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs md:text-[13px] font-semibold tracking-wide uppercase transition-colors whitespace-nowrap md:whitespace-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
