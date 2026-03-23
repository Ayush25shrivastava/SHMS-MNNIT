import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, MapPin, Building, Plane, Send, Phone, Globe } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-[85vh] bg-[#fafbfc] dark:bg-slate-950 transition-colors duration-300 flex flex-col">
      
      {/* Dark Hero Banner */}
      <div className="bg-[#172033] dark:bg-[#0b1121] py-24 md:py-32 relative overflow-hidden border-b border-slate-800 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 text-purple-400 text-[11px] md:text-sm font-bold tracking-[0.15em] uppercase mb-6 drop-shadow-sm">
            <Mail size={18} className="text-purple-400" />
            <span>Get in Touch</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white mb-6 tracking-tight">
            Contact Us
          </h1>

          <p className="text-slate-300 max-w-2xl text-[15px] md:text-lg leading-relaxed font-medium">
            Get in touch with the SHMS<sup className="text-[10px] md:text-xs mx-0.5 -top-2">26</sup> organizing committee
          </p>

        </div>
        
        {/* Faint Grid/Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Ready to Register Section */}
      <div className="py-12 md:py-16 bg-[#f8f9fa] dark:bg-slate-900/60 transition-colors duration-300 text-center flex items-center justify-center border-b border-slate-200/50 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-[42px] font-serif font-bold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors duration-300">
            Ready to Register?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-[15px] md:text-[16px] mb-10 max-w-2xl mx-auto leading-relaxed transition-colors duration-300 font-medium">
            Join us for the International Conference on Next Gen Structural Health Monitoring Powered by AI-ML and Smart Materials.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center justify-center bg-purple-600 text-white font-bold text-[15px] px-10 py-3.5 rounded-xl shadow-[0_10px_20px_-8px_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105 hover:bg-purple-500 hover:shadow-[0_15px_30px_-5px_rgba(147,51,234,0.7)] active:scale-95"
          >
            Register Now
          </Link>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300 border-b border-slate-200 dark:border-slate-800 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: About Prayagraj */}
            <div className="group bg-[#fafbfc] dark:bg-slate-800/50 rounded-[2rem] p-8 shadow-sm border border-slate-200 dark:border-slate-700/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:border-purple-300 dark:hover:border-purple-600/50 flex flex-col h-full relative overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/20 dark:to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
              <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center shrink-0 mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/60 relative z-10">
                <MapPin className="text-purple-600 dark:text-purple-400 w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-5 relative z-10">
                About Prayagraj
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-[15.5px] leading-relaxed font-medium relative z-10">
                Prayagraj (formerly Allahabad), located at the sacred confluence of the Ganges, Yamuna, and mythical Saraswati rivers (Triveni Sangam), is one of India's most historically and spiritually significant cities. Home to several premier educational institutions including MNNIT, the University of Allahabad, and the High Court of Judicature at Allahabad, the city offers a unique blend of academic excellence and cultural heritage. The city is well-connected by air, rail, and road to major Indian cities.
              </p>
            </div>

            {/* Card 2: Accommodation Options */}
            <div className="group bg-[#fafbfc] dark:bg-slate-800/50 rounded-[2rem] p-8 shadow-sm border border-slate-200 dark:border-slate-700/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:border-purple-300 dark:hover:border-purple-600/50 flex flex-col h-full relative overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/20 dark:to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
              <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center shrink-0 mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/60 relative z-10">
                <Building className="text-purple-600 dark:text-purple-400 w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-5 relative z-10">
                Accommodation Options
              </h3>
              <ul className="space-y-5 text-slate-600 dark:text-slate-300 text-[15.5px] leading-relaxed font-medium mb-6 flex-grow relative z-10">
                <li className="flex items-start gap-4">
                  <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                  <span><strong className="text-slate-800 dark:text-slate-200">Executive Development Centre, MNNIT:</strong> Limited rooms available on campus (advance booking required)</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                  <span><strong className="text-slate-800 dark:text-slate-200">Recommended Hotels:</strong> Hotel Kanha Shyam, The Legend Hotel, Hotel Yatrik</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                  <span><strong className="text-slate-800 dark:text-slate-200">Budget Options:</strong> OYO Hotels, Hotel Milan Palace, Hotel Presidency</span>
                </li>
              </ul>
              <div className="mt-auto pt-5 border-t border-purple-200/50 dark:border-slate-700/50 relative z-10">
                <p className="text-purple-600 dark:text-purple-400 font-bold text-[14.5px] flex items-center gap-2 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                  <span className="shrink-0 animate-pulse text-xl leading-none">✨</span>
                  Special conference rates available - details on website
                </p>
              </div>
            </div>

            {/* Card 3: Travel Information */}
            <div className="group bg-[#fafbfc] dark:bg-slate-800/50 rounded-[2rem] p-8 shadow-sm border border-slate-200 dark:border-slate-700/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:border-purple-300 dark:hover:border-purple-600/50 flex flex-col h-full relative overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/20 dark:to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
              <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center shrink-0 mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/60 relative z-10">
                <Plane className="text-purple-600 dark:text-purple-400 w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-5 relative z-10">
                Travel Information
              </h3>
              <ul className="space-y-5 text-slate-600 dark:text-slate-300 text-[15.5px] leading-relaxed font-medium relative z-10">
                <li className="flex items-start gap-4">
                  <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                  <span><strong className="text-slate-800 dark:text-slate-200">Airport:</strong> Prayagraj Airport (IXD) - 12 km from venue; Varanasi Airport (VNS) - 120 km</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                  <span><strong className="text-slate-800 dark:text-slate-200">Railway:</strong> Prayagraj Junction (PRYJ) - 8 km; Prayagraj Rambag (PRRB) - 5 km from campus</span>
                </li>
                <li className="flex items-start gap-4 bg-yellow-50/50 dark:bg-yellow-900/10 p-3 rounded-xl border border-yellow-200/50 dark:border-yellow-700/30 transition-colors group-hover:bg-yellow-50 dark:group-hover:bg-yellow-900/20">
                  <div className="mt-1 text-lg leading-none shrink-0">🌤️</div>
                  <span><strong className="text-slate-800 dark:text-slate-200">Weather:</strong> October in Prayagraj is pleasant with temperatures around 22-33°C</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Send us a Message Section */}
      <div className="py-20 md:py-32 bg-[#f0ebe4] dark:bg-[#0c1322] transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left: Contact Form */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[14px] font-semibold text-slate-600 dark:text-slate-400">First Name</label>
                    <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[14px] font-semibold text-slate-600 dark:text-slate-400">Last Name</label>
                    <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow shadow-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-semibold text-slate-600 dark:text-slate-400">Email</label>
                  <input type="email" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-semibold text-slate-600 dark:text-slate-400">Subject</label>
                  <input type="text" placeholder="Your subject" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-semibold text-slate-600 dark:text-slate-400">Message</label>
                  <textarea rows="5" placeholder="Your message..." className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow shadow-sm resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-purple-600 text-white font-bold text-[16px] py-4 rounded-xl shadow-[0_4px_14px_0_rgba(147,51,234,0.39)] transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_6px_20px_rgba(147,51,234,0.25)] active:scale-[0.98] flex items-center justify-center gap-2 group">
                  <Send className="w-5 h-5 -mt-0.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> 
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Contact Information Overview */}
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
                Contact Information
              </h3>
              
              <div className="space-y-5">
                {/* Box 1: Venue */}
                <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200/60 dark:border-slate-700/50 flex gap-5 md:gap-6 items-start transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600/50 group cursor-default">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/60">
                    <MapPin className="text-purple-500 dark:text-purple-400 w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-[16px] md:text-[17px] mb-2">Conference Venue</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-[14px] md:text-[15px] leading-relaxed">
                      Seminar Hall / Lecture Hall Complex<br/>
                      Motilal Nehru National Institute of Technology Allahabad<br/>
                      Teliyarganj, Prayagraj - 211004, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Box 2: Phones */}
                <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200/60 dark:border-slate-700/50 flex gap-5 md:gap-6 items-start transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600/50 group cursor-default">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/60">
                    <Phone className="text-purple-500 dark:text-purple-400 w-6 h-6" strokeWidth={2} />
                  </div>
                  <div className="w-full">
                    <h4 className="font-bold text-slate-900 dark:text-white text-[16px] md:text-[17px] mb-3">Phone (9:00 am - 6:00 pm)</h4>
                    <ul className="text-slate-600 dark:text-slate-400 text-[14px] md:text-[15px] space-y-2.5 w-full">
                      <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-1"><span>Office (MNNIT)</span> <span className="font-medium flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-purple-500/70" /> 532-2271581</span></li>
                      <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-1"><span>Prof. Rama Shanker</span> <span className="font-medium flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-purple-500/70" /> +91-9648710759</span></li>
                      <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-1"><span>Dr. Bharat Rajan</span> <span className="font-medium flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-purple-500/70" /> +91-9783750870</span></li>
                      <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-1"><span>Dr. Snehal K</span> <span className="font-medium flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-purple-500/70" /> +91-9901893761</span></li>
                      <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-1"><span>Dr. Varun Singh</span> <span className="font-medium flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-purple-500/70" /> +91-9473956924</span></li>
                    </ul>
                  </div>
                </div>

                {/* Box 3: Org Committee Note */}
                <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200/60 dark:border-slate-700/50 flex gap-5 md:gap-6 items-start transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600/50 group cursor-default">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/60">
                    <Mail className="text-purple-500 dark:text-purple-400 w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-[16px] md:text-[17px] mb-2">Organizing Committee (MNNIT)</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-[14px] md:text-[15px] leading-relaxed mb-1.5">
                      <strong className="text-slate-700 dark:text-slate-300">Prof. Rama Shanker &amp; Dr. Varun Singh</strong><br />
                      Conference Secretaries
                    </p>
                    <a href="mailto:shms2026@mnnit.ac.in" className="inline-block mt-1 text-purple-600 dark:text-purple-400 hover:underline text-[14.5px] font-medium transition-colors hover:text-purple-700">
                      shms2026@mnnit.ac.in
                    </a>
                  </div>
                </div>

                {/* Box 4: ISHMS Note */}
                <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200/60 dark:border-slate-700/50 flex gap-5 md:gap-6 items-start transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600/50 group cursor-default">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/60">
                    <Globe className="text-purple-500 dark:text-purple-400 w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-[16px] md:text-[17px] mb-2">ISHMS Coordination</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-[14px] md:text-[15px] leading-relaxed mb-1.5">
                      <strong className="text-slate-700 dark:text-slate-300">Prof. Suresh Bhalla</strong> - ISHMS President
                    </p>
                    <div className="flex flex-col gap-1.5 mt-3">
                       <a href="mailto:admin@ishms.org.in" className="text-purple-600 dark:text-purple-400 hover:underline text-[14.5px] font-medium transition-colors hover:text-purple-700 inline-block w-fit">
                         Email: admin@ishms.org.in
                       </a>
                       <a href="https://www.ishms.org.in" target="_blank" rel="noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline text-[14.5px] font-medium transition-colors hover:text-purple-700 inline-block w-fit">
                         Website: www.ishms.org.in
                       </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Location Map Section */}
      <div className="py-20 md:py-28 bg-[#fafbfc] dark:bg-slate-950 transition-colors duration-300 flex-grow border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-10 md:mb-14 text-center tracking-tight transition-colors duration-300">
            Location
          </h2>
          
          <div className="group rounded-[2rem] overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.3)] hover:border-purple-300 dark:hover:border-purple-600/50 hover:-translate-y-2 relative h-[400px] md:h-[500px] bg-white dark:bg-slate-900">
             
             {/* Map Iframe */}
             <iframe
               title="MNNIT Allahabad Location Map"
               src="https://maps.google.com/maps?q=Motilal%20Nehru%20National%20Institute%20of%20Technology%20Allahabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               allowFullScreen=""
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 w-full h-full"
             ></iframe>
             
             {/* Hover Overlay Ring */}
             <div className="absolute inset-0 pointer-events-none rounded-[2rem] ring-2 ring-inset ring-transparent group-hover:ring-purple-400/30 dark:group-hover:ring-purple-500/30 transition-all duration-500"></div>
          </div>
        </div>
      </div>

    </div>
  );
}
