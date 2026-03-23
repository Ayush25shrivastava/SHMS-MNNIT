import { Link } from 'react-router-dom';
import { 
  FileText, Cpu, Wifi, ShieldAlert, Activity, 
  Building, Navigation, Camera, Network, Layers, Search,
  Sparkles, Send
} from 'lucide-react';

export default function CallForPaperPage() {
  const tracks = [
    {
      title: "Smart Sensing Materials for SHM",
      description: "Piezoelectric, fiber optic, and MEMS sensors for structural monitoring.",
      icon: Cpu
    },
    {
      title: "Wireless Sensor Networks and IoT",
      description: "Low-power nodes, energy harvesting, and 5G/IoT architectures for SHM.",
      icon: Wifi
    },
    {
      title: "Artificial Intelligence and Machine Learning in SHM",
      description: "Deep learning, CNNs, anomaly detection and physics-informed neural networks.",
      icon: Network
    },
    {
      title: "Digital Twins and Predictive Maintenance",
      description: "Real-time simulation, BIM, and condition-based maintenance strategies.",
      icon: Layers
    },
    {
      title: "Novel Disruptions in NDE and Testing",
      description: "Ultrasonic, EMI, GPR, laser vibrometry and UAV-based inspections.",
      icon: Search
    },
    {
      title: "Vibration-Based SHM and Modal Analysis",
      description: "Output-only system identification and statistical pattern recognition.",
      icon: Activity
    },
    {
      title: "Field Applications and Case Studies",
      description: "Monitoring systems for bridges, buildings, pipelines, and heritage structures.",
      icon: Building
    },
    {
      title: "Seismic Monitoring and Disaster Resilience",
      description: "Early warning systems, retrofitting, and post-earthquake damage assessment.",
      icon: ShieldAlert
    },
    {
      title: "Pavement Evaluation and Monitoring Techniques",
      description: "Deflectometer testing, pavement condition indexing, and GPR for layer detection.",
      icon: Navigation
    },
    {
      title: "Vision based SHM",
      description: "Crack detection, modal analysis, UAV integration, and digital image correlation.",
      icon: Camera
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-[#fafbfc] dark:bg-slate-950 transition-colors duration-300">
      
      {/* Dark Hero Banner */}
      <div className="bg-[#172033] dark:bg-[#0b1121] py-16 md:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 text-purple-400 text-[11px] md:text-xs font-bold tracking-widest uppercase mb-6 drop-shadow-sm">
            <FileText size={16} className="text-purple-400" />
            <span>Submissions Open</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white mb-6 tracking-tight">
            Call for <span className="text-purple-500">Papers</span>
          </h1>

          <p className="text-slate-300 max-w-2xl text-base md:text-lg leading-relaxed font-medium">
            Submit your original contributions on Next Gen Structural Health Monitoring Powered by AI-ML and Smart Materials. The conference welcomes research findings, technological advances, and practical applications.
          </p>

        </div>
        
        {/* Faint Grid/Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Main Content Section */}
      <div className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-purple-500 dark:text-purple-400 font-bold tracking-[0.15em] uppercase text-xs md:text-sm mb-4">
              Research Topics
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors duration-300">
              Thrust Areas
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-[14px] md:text-[16px] max-w-2xl mx-auto font-medium leading-relaxed transition-colors duration-300">
              We welcome submissions on the following topics relevant to structural health monitoring and smart materials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track, idx) => (
              <div 
                key={idx} 
                className="group bg-white dark:bg-slate-800/80 rounded-2xl p-6 shadow-sm border border-slate-200/60 dark:border-slate-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-500/50 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/60">
                  <track.icon className="text-purple-500 dark:text-purple-400 w-6 h-6" strokeWidth={2.2} />
                </div>
                <h4 className="text-lg md:text-xl font-serif font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">
                  {track.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-[13px] md:text-sm leading-relaxed transition-colors duration-300">
                  {track.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Paper Submission Guidelines Section */}
      <div className="bg-[#f0ebe4] dark:bg-[#0c1322] py-20 md:py-32 transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-purple-500 dark:text-purple-400 font-bold tracking-[0.14em] uppercase text-xs md:text-sm mb-4">
              Guidelines
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors duration-300">
              Paper Submission
            </h3>
          </div>

          <div className="space-y-6 md:space-y-8 mb-16">
            
            {/* Requirements Card */}
            <div className="bg-white dark:bg-slate-800/80 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200/60 dark:border-slate-700/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-purple-300 dark:hover:border-purple-600/50 group">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/60">
                  <FileText className="text-purple-500 dark:text-purple-400 w-6 h-6" strokeWidth={2.2} />
                </div>
                <h4 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white">
                  Submission Requirements
                </h4>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[1.5rem] p-6 md:p-8 border border-slate-100 dark:border-slate-700/50 transition-colors duration-300 group-hover:border-purple-100 dark:group-hover:border-purple-800/40">
                <ul className="space-y-5 text-slate-600 dark:text-slate-300 text-[15px] md:text-[16px] font-medium leading-relaxed">
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 shrink-0"></div>
                    <span><strong className="text-slate-800 dark:text-slate-200">Abstract:</strong> 300-500 words including title, authors, affiliations, keywords</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 shrink-0"></div>
                    <span><strong className="text-slate-800 dark:text-slate-200">Full Paper:</strong> 6-10 pages following the conference template (available on website)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 shrink-0"></div>
                    <span>All submissions must be original and not previously published</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 shrink-0"></div>
                    <span>Papers will be peer-reviewed by at least two reviewers</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 shrink-0"></div>
                    <span><strong className="text-slate-800 dark:text-slate-200">Submit via online portal: </strong> 
                      <a href="https://www.icsmshm2026.mnnit.ac.in/submissions" target="_blank" rel="noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:underline transition-colors">
                        www.icsmshm2026.mnnit.ac.in/submissions
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Publications Card */}
            <div className="bg-white dark:bg-slate-800/80 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200/60 dark:border-slate-700/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-purple-300 dark:hover:border-purple-600/50 group">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/60">
                  <Sparkles className="text-purple-500 dark:text-purple-400 w-6 h-6" strokeWidth={2.2} />
                </div>
                <h4 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white">
                  Publication Opportunities
                </h4>
              </div>

              <ul className="space-y-4 text-slate-600 dark:text-slate-300 text-[15px] md:text-[16px] font-medium leading-relaxed px-2">
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-purple-500 shrink-0"></div>
                  <span>Accepted papers will be published in the conference proceedings indexed in Scopus.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-purple-500 shrink-0"></div>
                  <span>Selected papers will be invited for publication in Scopus Index Journals.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Glowing Submit Button */}
          <div className="flex justify-center mt-6">
            <Link 
              to="/register" 
              className="inline-flex items-center gap-3 bg-purple-600 text-white font-bold text-[17px] md:text-lg px-10 py-4 md:py-5 rounded-full shadow-[0_10px_30px_-10px_rgba(147,51,234,0.6)] transition-all duration-300 hover:scale-[1.05] hover:bg-purple-500 hover:shadow-[0_15px_40px_-5px_rgba(147,51,234,0.8)] active:scale-95 group"
            >
              Submit Now
              <Send className="w-5 h-5 group-hover:translate-x-1.5 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
