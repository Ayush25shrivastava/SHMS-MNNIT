import React from 'react';
import { 
  Calendar, MapPin, Sparkles, BookOpen, Zap, Target, 
  Globe, Users, Building2, Cpu, Network, GraduationCap, 
  Beaker, Book, UserCircle, Briefcase, Award,
  Building, Home, Send
} from 'lucide-react';
import acadImg from '../assets/acad image 1.jpeg';
import MnnitAllahabadSection from '../components/MnnitAllahabadSection';
import DiscoverPrayagraj from '../components/DiscoverPrayagraj';

export default function AboutPage() {
  const objectives = [
    { text: "Present state-of-the-art research", icon: BookOpen },
    { text: "Futuristic technologies in structural monitoring", icon: Zap },
    { text: "Science, systems and sustainability aspects of SHM", icon: Target },
    { text: "Challenges and solutions for implementing SHM in developing countries", icon: Globe },
    { text: "Bridge academia-industry gap through collaborative sessions and exhibitions", icon: Users },
    { text: "Promote sustainable infrastructure development using smart health monitoring systems", icon: Building2 },
    { text: "Explore integration of AI, IoT, and digital twins in infrastructure management", icon: Cpu },
    { text: "Foster international collaboration and knowledge exchange in smart materials and SHM", icon: Network }
  ];

  const participants = [
    { name: "Faculty Members", icon: GraduationCap },
    { name: "Scientists", icon: Beaker },
    { name: "Research Scholars", icon: Book },
    { name: "UG & PG Scholars", icon: UserCircle },
    { name: "Industrial Representatives", icon: Briefcase },
    { name: "Other Academicians", icon: Award }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* Dark Hero Banner */}
      <div className="bg-[#172033] dark:bg-[#0b1121] py-16 md:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 text-purple-400 text-[11px] md:text-xs font-bold tracking-widest uppercase mb-6 drop-shadow-sm">
            <Sparkles size={16} className="text-purple-400" />
            <span>International Conference</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white mb-4 tracking-tight">
            About <span className="text-purple-500">SHMS<sup className="text-3xl md:text-4xl -top-4">26</sup></span>
          </h1>

          <p className="text-slate-300 max-w-2xl text-base md:text-lg leading-relaxed mb-10 font-medium">
            International Conference on Next Gen Structural Health Monitoring Powered by AI-ML and Smart Materials
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-5 py-2.5 border border-slate-700/80 rounded-full text-slate-300 text-sm font-medium hover:bg-slate-800/80 hover:border-slate-500 hover:text-white transition-all cursor-default">
              <Calendar size={18} className="text-purple-400" />
              <span>October 15-17, 2026</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 border border-slate-700/80 rounded-full text-slate-300 text-sm font-medium hover:bg-slate-800/80 hover:border-slate-500 hover:text-white transition-all cursor-default">
              <MapPin size={18} className="text-purple-400" />
              <span>MNNIT Allahabad, Prayagraj</span>
            </div>
          </div>
        </div>
        
        {/* Faint Grid/Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Main Content Section */}
      <div className="bg-[#fafbfc] dark:bg-slate-900 py-20 md:py-32 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
            
            {/* Left Content */}
            <div className="w-full lg:w-[55%]">
              <h2 className="text-purple-500 dark:text-purple-400 font-bold tracking-[0.15em] uppercase text-xs md:text-sm mb-4">
                Conference Overview
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
                About the Conference
              </h3>
              
              <div className="space-y-6 text-slate-600 dark:text-slate-300 text-[15px] md:text-[16px] leading-relaxed font-medium">
                <p>
                  International Conference on Next Gen Structural Health Monitoring Powered by AI-ML and Smart Materials (SHMS-2026) provides a premier international platform for scientists, engineers, researchers, practitioners, and infrastructure managers to exchange knowledge on next generation technologies integrating structural health monitoring with AI-ML and smart materials, aimed at ensuring optimal performance, safety and enhanced life-span of critical infrastructure, thus contributing to overall sustainability.
                </p>
                <p>
                  With rapid urbanization and aging infrastructure worldwide, the need for intelligent monitoring systems has become crucial in recent times. This conference addresses the convergence of advanced materials science, sensor technologies, artificial intelligence, and structural engineering to create resilient, self-monitoring, and self-healing infrastructure systems.
                </p>
                <p>
                  The conference will feature keynote lectures by world-renowned experts, technical sessions covering both fundamental research and practical applications, industrial exhibitions, and networking opportunities. Special emphasis will be placed on bridging the gap between laboratory research and field implementation, with particular focus on infrastructure challenges world-wide.
                </p>
              </div>

              {/* Notification Box */}
              <div className="mt-12 p-6 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/50 flex gap-4 items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-purple-300 dark:hover:border-purple-700/70 group">
                <Sparkles size={24} className="text-purple-500 dark:text-purple-400 shrink-0 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                <p className="text-purple-700 dark:text-purple-300 text-sm md:text-[15px] font-semibold leading-relaxed">
                  The Inaugural function and Keynote address will be held in Institute Seminar Hall.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[45%] relative group mt-8 lg:mt-0">
              {/* Abstract decorative background behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-400 dark:from-purple-900/40 dark:to-purple-700/60 rounded-[2rem] transform translate-y-5 translate-x-5 -z-10 transition-transform duration-500 group-hover:translate-y-8 group-hover:translate-x-8 opacity-70"></div>
              
              <img 
                src={acadImg} 
                alt="Academic Building" 
                className="w-full rounded-[2rem] shadow-2xl object-cover h-[400px] sm:h-[500px] md:h-[600px] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] border-4 border-white dark:border-slate-800"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Conference Objectives Section */}
      <div className="bg-[#f0ebe4] dark:bg-[#0c1322] py-20 md:py-32 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-purple-500 dark:text-purple-400 font-bold tracking-[0.15em] uppercase text-xs md:text-sm mb-4">
              Our Goals
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
              Conference Objectives
            </h3>
          </div>

          <div className="space-y-4 md:space-y-5">
            {objectives.map((obj, i) => (
              <div 
                key={i} 
                className="group bg-white dark:bg-slate-800 rounded-2xl p-3 md:p-4 flex items-center gap-5 md:gap-6 shadow-sm border border-transparent transition-all duration-300 hover:shadow-lg hover:border-purple-200 dark:hover:border-purple-700/50 hover:translate-x-3 cursor-default"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/60">
                  <obj.icon className="text-purple-500 dark:text-purple-400 w-5 h-5 md:w-6 md:h-6" strokeWidth={2.2} />
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-[14px] md:text-[16px] font-medium leading-relaxed">
                  {obj.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligible Participants Section */}
      <div className="bg-[#fafbfc] dark:bg-slate-900 py-20 md:py-24 transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
          <div className="mb-16">
            <h2 className="text-purple-500 dark:text-purple-400 font-bold tracking-[0.15em] uppercase text-xs md:text-sm mb-4">
              Who Can Attend
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
              Eligible Participants
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-5">
            {participants.map((p, i) => (
              <div 
                key={i} 
                className="group flex flex-col sm:flex-row items-center gap-3 px-6 py-4 md:px-8 md:py-4 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 hover:scale-[1.05] hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-xl hover:shadow-purple-500/10 hover:bg-purple-500/10 cursor-default"
              >
                <p.icon className="text-purple-500 dark:text-purple-400 w-5 h-5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
                <span className="text-slate-700 dark:text-slate-200 font-bold text-[13px] md:text-[15px]">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Discover Prayagraj Slider Section */}
      <DiscoverPrayagraj />

      {/* MNNIT Allahabad Section */}
      <MnnitAllahabadSection />


      {/* Accommodation Section */}
      <div className="bg-[#f0ebe4] dark:bg-[#0c1322] py-20 md:py-32 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
          <div className="mb-14">
            <h2 className="text-purple-500 dark:text-purple-400 font-bold tracking-[0.15em] uppercase text-xs md:text-sm mb-4">
              Stay
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
              Accommodation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left mb-16 max-w-4xl mx-auto">
            {/* On-Campus Card */}
            <div className="bg-white dark:bg-slate-800/80 rounded-[1.5rem] p-8 md:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-purple-200 dark:hover:border-purple-600/50 group cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0 mb-6 transition-colors duration-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/60">
                <Building className="text-purple-500 dark:text-purple-400 w-6 h-6" strokeWidth={2.2} />
              </div>
              <h4 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                On-Campus (Limited)
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-[15px] md:text-[16px] leading-relaxed font-medium">
                Limited accommodation will be available on a first-come, first-served basis. Campus stay provides convenient access to conference venues.
              </p>
            </div>

            {/* Off-Campus Card */}
            <div className="bg-white dark:bg-slate-800/80 rounded-[1.5rem] p-8 md:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-purple-200 dark:hover:border-purple-600/50 group cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0 mb-6 transition-colors duration-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/60">
                <Home className="text-purple-500 dark:text-purple-400 w-6 h-6" strokeWidth={2.2} />
              </div>
              <h4 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                Off-Campus Hotels
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-[15px] md:text-[16px] leading-relaxed font-medium">
                Several hotels near MNNIT campus cater to various budgets. Details will be shared with registered participants.
              </p>
            </div>
          </div>

          {/* Contact Footer */}
          <div className="flex flex-col items-center justify-center space-y-5 mt-4">
            <p className="text-slate-600 dark:text-slate-400 text-[15px] md:text-[16px] font-medium">
              For accommodation assistance, contact:
            </p>
            <a 
              href="mailto:shms2026@mnnit.ac.in"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border-2 border-purple-300 dark:border-purple-500/40 text-purple-600 dark:text-purple-400 font-semibold text-sm md:text-[15px] transition-all duration-300 hover:bg-purple-500 hover:text-white hover:border-purple-500 dark:hover:bg-purple-500 active:scale-95 shadow-[0_2px_10px_-3px_rgba(168,85,247,0.4)] group"
            >
              <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
              shms2026@mnnit.ac.in
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}
