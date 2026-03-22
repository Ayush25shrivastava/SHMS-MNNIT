import React from 'react';
import { Users, BookOpen, FileText, Award, ArrowRight } from 'lucide-react';
import acadImg from '../assets/acad image 1.jpeg';

export default function AboutSection() {
  const metrics = [
    {
      icon: <Users size={22} className="stroke-2" />,
      title: "International",
      subtitle: "Speakers & Delegates"
    },
    {
      icon: <BookOpen size={22} className="stroke-2" />,
      title: "8+",
      subtitle: "Thrust Areas"
    },
    {
      icon: <FileText size={22} className="stroke-2" />,
      title: "Paper",
      subtitle: "Submissions Welcome"
    },
    {
      icon: <Award size={22} className="stroke-2" />,
      title: "Certificate",
      subtitle: "For All Participants"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#f4ece3] dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src={acadImg} 
              alt="MNNIT Academic Building" 
              className="w-full rounded-3xl shadow-lg object-cover h-[450px] lg:h-[550px] hover:scale-102 transition-transform duration-300"
            />
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-4">
              About The Conference
            </h2>
            
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-[#1f2937] dark:text-white mb-6 leading-tigher">
              Shaping the Future of Smart Infrastructure
            </h3>
            
            <p className="text-[#4b5563] dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
              International Conference on Next Gen Structural Health Monitoring Powered by AI-ML and Smart Materials (SHMS-2026) provides a premier international platform for scientists, engineers, researchers, practitioners, and infrastructure managers to exchange knowledge on next generation technologies integrating structural health monitoring with AI-ML and smart materials, aimed at ensuring optimal performance, safety and enhanced life-span of critical infrastructure, thus contributing to overall sustainability.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 mb-10">
              {metrics.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-4 items-center group rounded-2xl p-3 md:p-3 transition-colors duration-300 hover:bg-[#eae0d2] dark:hover:bg-slate-800/80 cursor-default"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-200 dark:bg-purple-900/40 text-purple-400 flex items-center justify-center shrink-0 group-hover:bg-purple-300 dark:group-hover:bg-purple-900/60 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1f2937] dark:text-slate-200 text-sm md:text-base leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-[#4b5563] dark:text-slate-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="flex items-center gap-2 px-8 py-3.5 bg-purple-500 hover:bg-purple-500 text-white font-bold rounded-lg transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-purple-400/20 text-sm md:text-base">
              Learn More <ArrowRight size={18} className="stroke-[2.5]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
