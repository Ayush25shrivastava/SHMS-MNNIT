import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Committee', path: '/committee' },
    { name: 'Call for Paper', path: '/call-for-paper' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Registration', path: '/register' },
  ];

  return (
    <footer className="bg-[#eae5e0] dark:bg-slate-900 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Column 1: Branding and Details */}
          <div className="col-span-1">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-purple-600 dark:text-purple-400 mb-6 tracking-wide drop-shadow-sm flex items-start gap-0.5 transition-colors duration-300 cursor-default hover:text-purple-700 dark:hover:text-purple-300">
              SHMS<sup className="text-xl md:text-2xl font-bold mt-1.5">26</sup>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-medium max-w-sm">
              International Conference on Next Gen Structural Health Monitoring Powered by AI-ML and Smart Materials
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold tracking-wide">
              October 15-17, 2026
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 md:ml-12 lg:ml-24">
            <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-6 cursor-default">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('/#') ? (
                    <a href={link.path.replace('/', '')} className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm font-medium transition-all duration-300 inline-block hover:translate-x-1.5 focus:outline-none">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm font-medium transition-all duration-300 inline-block hover:translate-x-1.5 focus:outline-none">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="col-span-1">
            <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-6 cursor-default">
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group cursor-default">
                <MapPin className="text-purple-500 dark:text-purple-400 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" size={18} />
                <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-slate-200">
                  MNNIT Allahabad, Prayagraj,<br />Uttar Pradesh, India - 211004
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Phone className="text-purple-500 dark:text-purple-400 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" size={18} />
                <span className="text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-slate-200">
                  +91-532-2271581
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="text-purple-500 dark:text-purple-400 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" size={18} />
                <a href="mailto:shms2026@mnnit.ac.in" className="text-slate-600 dark:text-slate-400 text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 focus:outline-none">
                  shms2026@mnnit.ac.in
                </a>
              </li>
            </ul>
          </div>
          {/* Column 4: Website Visitors */}
          <div className="col-span-1 md:ml-auto">
            <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-6 cursor-default">
              Visitor Statistics
            </h3>
            <div className="bg-white/40 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-300/40 dark:border-slate-700/50 inline-block shadow-sm transition-transform hover:-translate-y-1 duration-300">
              <a href="https://info.flagcounter.com/pu9j">
                <img 
                  src="https://s01.flagcounter.com/count/pu9j/bg_EAE5E0/txt_000000/border_000000/columns_3/maxflags_12/viewers_0/labels_1/pageviews_0/flags_0/percent_0/" 
                  alt="Flag Counter" 
                  border="0"
                  className="rounded-lg" 
                />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Rule & Copyright */}
        <div className="pt-8 border-t border-purple-200/60 dark:border-slate-800 flex flex-col items-center justify-center">
          <p className="text-slate-500 dark:text-slate-400 text-[13px] md:text-sm text-center font-medium tracking-wide">
            © 2026 SHMS<sup className="text-[10px]">26</sup> - MNNIT Allahabad | Department of Civil Engineering
          </p>
        </div>

      </div>
    </footer>
  );
}
