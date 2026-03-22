import React from 'react';
import { Cpu, Wifi, Brain, Layers, Search, Activity, Building2, Shield, Map, Eye } from 'lucide-react';

export default function TrackSection() {
  const row1 = [
    {
      title: "Smart Sensing Materials",
      desc: "Piezoelectric, fiber optic, and nano-reinforced materials for advanced sensing.",
      icon: <Cpu size={24} />
    },
    {
      title: "Wireless Sensor Networks & IoT",
      desc: "Energy-harvesting nodes, 5G architectures, and real-time edge computing.",
      icon: <Wifi size={24} />
    },
    {
      title: "AI and Machine Learning",
      desc: "Deep learning, CNNs, and PINNs for robust damage detection and analysis.",
      icon: <Brain size={24} />
    },
    {
      title: "Digital Twins & Maintenance",
      desc: "Real-time BIM integration, lifespan prediction, and secure data management.",
      icon: <Layers size={24} />
    },
    {
      title: "Novel Disruptions in NDE",
      desc: "Ultrasonic, thermal, and GPR systems for non-destructive robotic inspections.",
      icon: <Search size={24} />
    }
  ];

  const row2 = [
    {
      title: "Vibration-Based SHM",
      desc: "Modal analysis, wavelet methods, and dynamic fatigue damage tracking.",
      icon: <Activity size={24} />
    },
    {
      title: "Field Applications & Cases",
      desc: "Monitoring long-span bridges, high-rises, railways, and heritage structures.",
      icon: <Building2 size={24} />
    },
    {
      title: "Seismic Monitoring & Resilience",
      desc: "Early warning, rapid assessment, and SMA-based resilient retrofitting.",
      icon: <Shield size={24} />
    },
    {
      title: "Pavement Evaluation",
      desc: "Deflectometer testing, GPR thickness, and network ride quality evaluation.",
      icon: <Map size={24} />
    },
    {
      title: "Vision Based SHM",
      desc: "UAV integration, edge AI, and digital image correlation for visual monitoring.",
      icon: <Eye size={24} />
    }
  ];

  // Helper to render a card
  const TrackCard = ({ item }) => (
    <div className="w-[300px] md:w-[350px] shrink-0 bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-100 dark:border-slate-800 transition-transform duration-300 hover:-translate-y-[5px] shadow-sm hover:shadow-xl dark:shadow-none hover:border-purple-200 dark:hover:border-purple-800 mx-3 md:mx-4 cursor-default">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/40 text-purple-400 flex items-center justify-center mb-5 md:mb-6 shadow-inner">
        {item.icon}
      </div>
      <h4 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 md:mb-3 font-serif">
        {item.title}
      </h4>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {item.desc}
      </p>
    </div>
  );

  return (
    <section id="tracks" className="py-24 overflow-hidden bg-[#fafbfc] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h3 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">
          Conference Themes and Technical Tracks
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-[15px] md:text-lg max-w-4xl mx-auto">
          The conference encompasses ten major thematic tracks covering the breadth of smart materials and structural health monitoring research and applications
        </p>
      </div>

      {/* Scrolling container wrapper */}
      <div className="relative w-full flex flex-col gap-6 md:gap-8 overflow-hidden group/wrapper">
        
        {/* Row 1: Scrolling Left */}
        <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
          {/* Render 2 sets of cards to create seamless infinite scroll */}
          {[...row1, ...row1].map((item, idx) => (
            <TrackCard key={`row1-${idx}`} item={item} />
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused] -ml-24">
          {/* Render 2 sets of cards to create seamless infinite scroll */}
          {[...row2, ...row2].map((item, idx) => (
            <TrackCard key={`row2-${idx}`} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
