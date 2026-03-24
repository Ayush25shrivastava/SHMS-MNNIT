import React, { useState, useEffect } from 'react';
import { Zap, Calendar, MapPin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg1 from '../assets/hero-section/academic building image.jpg';
import heroImg2 from '../assets/hero-section/front image.jpeg';
import heroImg3 from '../assets/hero-section/hostels.png';
import heroImg4 from '../assets/hero-section/mnnit image.png';
import mnnitLogo from '../assets/mnnit logo.png';
import ishmsLogo from '../assets/ishms-logo.png';

const Hero = () => {
  const images = [heroImg1, heroImg2, heroImg3, heroImg4];
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-slate-900 min-h-screen flex items-center">
      {/* Background Images Slider */}
      {images.map((img, idx) => (
        <img 
          key={idx}
          src={img}
          alt={`Slide ${idx}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out blur-xs ${idx === currentImg ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
        />
      ))}
      
      {/* Reduced overlay opacity and removed blur to make background images clearer */}
      <div className="absolute inset-0 bg-slate-900/40 z-0"></div>
      
      {/* Enhanced text shadow to retain readability against bright images */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left animate-slide-up w-full">
        <div className="flex flex-col items-start gap-3 mt-8">
          <div className="flex items-center gap-2 text-purple-400 font-bold tracking-widest text-xs md:text-sm uppercase bg-black/60 border border-white/10 rounded-full px-4 py-1.5 drop-shadow-md">
            <Zap size={14} />
            INTERNATIONAL CONFERENCE
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight drop-shadow-xl">
            Next Gen Structural Health Monitoring for Engineering Structures<span className="ml-2 text-purple-400 text-2xl md:text-4xl">2026</span>
          </h1>
          
          <h2 className="text-lg md:text-2xl font-medium text-white font-serif mt-1 border-b border-white/20 pb-3 pr-8 inline-block drop-shadow-lg">
            Intelligent Monitoring for Smarter, Safer Infrastructure
          </h2>
          
          <p className="text-sm md:text-base text-gray-100 italic mb-6 max-w-3xl drop-shadow-xl font-semibold">
            Shaping the Future of Sustainable Infrastructure with AI-Driven Structural Intelligence
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-black/60 border border-white/10 rounded-full px-4 py-1.5 text-white font-medium text-xs md:text-sm shadow-sm backdrop-blur-sm">
            <Calendar className="text-purple-400" size={16} />
            <span>October 15-17, 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-black/60 border border-white/10 rounded-full px-4 py-1.5 text-white font-medium text-xs md:text-sm shadow-sm backdrop-blur-sm">
            <MapPin className="text-purple-400" size={16} />
            <span>MNNIT Allahabad, Prayagraj</span>
          </div>
        </div>

        <div className="mb-8 text-white/100 drop-shadow-lg text-xs md:text-sm max-w-xl leading-relaxed font-bold tracking-wide">
          Organized by Department of Civil Engineering,<br />
          Motilal Nehru National Institute of Technology Allahabad jointly with Indian Structural Health Monitoring Society (ISHMS)
        </div>
        <div className="flex flex-wrap items-center gap-6 mt-8">
          <div className="dark:bg-slate-900/50 border border-gray-300 dark:border-slate-800 rounded-2xl w-40 h-40 md:w-48 md:h-48 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <img 
              src={mnnitLogo} 
              alt="MNNIT Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
          <div className="dark:bg-slate-900/50 border border-gray-300 dark:border-slate-800 rounded-2xl w-40 h-40 md:w-48 md:h-48 flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 transition-transform p-3">
            <img 
              src={ishmsLogo} 
              alt="ISHMS Logo" 
              className="h-14 md:h-16 w-auto object-contain"
            />
            <span className="mt-2 text-xs md:text-sm font-semibold text-white dark:text-white tracking-wide">
              Organizing Partner
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 py-10">
          <Link to="/register" className="px-5 py-2.5 bg-purple-600 text-white hover:bg-purple-700 rounded transition-all font-bold text-xs md:text-sm tracking-wide shadow-xl hover:scale-105 active:scale-95 transform inline-block">
            Register Now
          </Link>
          <Link to="/about" className="px-5 py-2.5 bg-black/40 backdrop-blur-sm border border-white text-white hover:bg-white/20 rounded transition-all font-bold text-xs md:text-sm tracking-wide shadow-xl hover:scale-105 active:scale-95 transform inline-block">
            Learn More
          </Link>
          <a 
            href="https://docs.google.com/document/d/1CVUtMExrXQJilKAYBu9fF6C55zXwskpf/edit?usp=sharing&ouid=112142989139608804289&rtpof=true&sd=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-black/40 backdrop-blur-sm border border-purple-500 text-purple-400 hover:bg-purple-500/20 rounded transition-all font-bold text-xs md:text-sm tracking-wide shadow-xl flex items-center gap-2 hover:scale-105 active:scale-95 transform"
          >
            <Download size={16} />
            Download Brochure
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
