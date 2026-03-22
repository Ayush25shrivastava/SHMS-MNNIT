import React from 'react';
import { ExternalLink } from 'lucide-react';
import ishmsLogo from '../assets/ishms-logo.png';

export default function IshmsSection() {
  return (
    <section className="min-h-[50vh] flex items-center py-16 md:py-24 bg-[#f4ece3] dark:bg-slate-950 transition-colors duration-300 border-t border-purple-100 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-3/5 order-2 lg:order-1">
            <h2 className="text-purple-500 dark:text-purple-400 font-bold tracking-wider uppercase text-sm mb-3">
              About ISHMS
            </h2>
            
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-800 dark:text-white mb-6 leading-tight">
              Indian Structural Health Monitoring Society
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-lg">
              The Indian Structural Health Monitoring Society (ISHMS) was established in 2023 as a professional, non-profit organization dedicated to advancing SHM research and practice in India. ISHMS serves as a catalyst for the development and implementation of structural health monitoring and related futuristic multi-disciplinary technologies. The society creates an ecosystem where industry, academia, government bodies, students, and all other stakeholders can converge and collaborate.
            </p>

            <a 
              href="https://www.ishms.org.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-500 text-white font-bold rounded-lg transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20 text-sm md:text-base"
            >
              Visit ISHMS <ExternalLink size={18} className="stroke-[2.5]" />
            </a>
          </div>

          {/* Right Column: Logo */}
          <div className="w-full lg:w-2/5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="bg-[#f4ece3] dark:bg-slate-900/50 p-8 md:p-12 rounded-3xl shadow-inner border border-gray-300 dark:border-slate-800 hover:shadow-lg transition-shadow duration-300 w-full flex items-center justify-center">
              <img 
                src={ishmsLogo} 
                alt="ISHMS Logo" 
                className="w-full max-w-[280px] h-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-md"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
