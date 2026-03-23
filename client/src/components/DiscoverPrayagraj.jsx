import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/about page/prayagraj-sangam-B2sTfNOH.jpeg';
import img2 from '../assets/about page/prayagraj-bridge-B9HB3PPt.jpeg';
import img3 from '../assets/about page/prayagraj-university-BQfVcKav.jpeg';
import img4 from '../assets/about page/prayagraj-khusro-bagh-CWMqiYFN.jpeg';
import img5 from '../assets/about page/prayagraj-kumbh-C1oUUPfF.jpeg';

const sliderData = [
  {
    image: img1,
    title: 'Triveni Sangam',
    description: 'The sacred confluence of three rivers—Ganga, Yamuna, and the mythical Saraswati. A place of immense spiritual significance where millions gather for holy dips.',
    tag: "Hosts the world's largest religious gathering, Kumbh Mela"
  },
  {
    image: img2,
    title: 'New Yamuna Bridge',
    description: 'A modern architectural marvel spanning the Yamuna River, connecting the old city with new developments. The cable-stayed bridge is a symbol of progress.',
    tag: "One of the longest cable-stayed bridges in Uttar Pradesh"
  },
  {
    image: img3,
    title: 'Allahabad University',
    description: "Founded in 1887, one of the oldest and most prestigious universities in India. Known as the 'Oxford of the East' for its rich academic heritage.",
    tag: "Alma mater of three former Prime Ministers of India"
  },
  {
    image: img4,
    title: 'Khusro Bagh',
    description: 'A magnificent Mughal garden housing the tombs of Prince Khusro, his mother, and sister. The sandstone mausoleums showcase exquisite Mughal architecture.',
    tag: "Built in the 17th century during Jahangir's reign"
  },
  {
    image: img5,
    title: 'Kumbh Mela',
    description: 'The largest peaceful gathering of pilgrims on Earth. Held every 12 years at the Sangam, it attracts millions seeking spiritual purification.',
    tag: "UNESCO recognized as Intangible Cultural Heritage"
  }
];

export default function DiscoverPrayagraj() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % sliderData.length);
  };

  return (
    <section className="bg-[#f0ebe4] dark:bg-[#0c1322] py-24 md:py-32 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Strings */}
        <div className="text-center mb-12">
          <h2 className="text-purple-500 dark:text-purple-400 font-bold tracking-[0.15em] uppercase text-[11px] md:text-sm mb-4">
            Host City
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
            Discover Prayagraj
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-[14px] md:text-[16px] font-medium max-w-2xl mx-auto leading-relaxed transition-colors">
            One of India's most ancient and spiritually significant cities, where history, culture, and modernity converge at the sacred confluence of rivers.
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
                className={`w-full h-full object-cover transition-transform duration-[8000ms] ${
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
                  <ChevronLeft size={14} className="opacity-0 -ml-4" /> 
                  DISCOVER PRAYAGRAJ
                </div>
                <h4 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-5 transition-transform duration-500">
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

          {/* Transparent Side Click Navigators */}
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

        {/* Inter-Navigation: Dots & Thumbnails */}
        <div className="flex flex-col items-center justify-center mt-6 mb-16 gap-5">
          {/* Morphing Dots */}
          <div className="flex gap-2">
            {sliderData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-500 rounded-full h-2 md:h-2.5 ${
                  idx === current ? "w-10 bg-purple-500" : "w-2.5 bg-slate-400/80 dark:bg-slate-600 hover:bg-purple-300"
                }`}
              />
            ))}
          </div>

          {/* Image Thumbnails */}
          <div className="flex gap-2.5">
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

        {/* 4 Informative Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-[95%] mx-auto">
          {[
            { num: "3000+", label: "Years of History" },
            { num: "3", label: "Sacred Rivers" },
            { num: "120M+", label: "Kumbh Visitors" },
            { num: "1887", label: "University Founded" },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 md:p-8 text-center shadow-sm border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-purple-200 dark:hover:border-purple-500/40 cursor-default">
              <div className="text-3xl md:text-5xl font-black text-purple-600 dark:text-purple-400 mb-2 md:mb-3 font-serif transition-colors duration-300">
                {stat.num}
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-xs md:text-[13px] font-semibold tracking-wide uppercase transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
