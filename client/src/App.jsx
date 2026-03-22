import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, MapPin, Calendar, ArrowRight, Download, Users, BookOpen, Globe, Award, Shield, FileText, Activity, Zap, Building2, Recycle, Droplet, Leaf } from 'lucide-react';

import Navbar from './components/Navbar';

import Hero from './components/Hero';

import TimerSection from './components/TimerSection';
import AboutSection from './components/AboutSection';
import IshmsSection from './components/IshmsSection';
import TrackSection from './components/TrackSection';
import ImportantDatesSection from './components/ImportantDatesSection';

const Check = ({ size = 24, strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);



const Sponsorship = () => {
  const packages = [
    { title: 'Silver Sponsor', price: '₹96,560', perks: ['Logo on website', '1 Complimentary Reg.', 'Half page in souvenir'] },
    { title: 'Gold Sponsor', price: '₹1,93,121', perks: ['Logo prominently displayed', '3 Complimentary Reg.', 'Full page in souvenir', 'Exhibition booth'] },
    { title: 'Platinum Sponsor', price: '₹3,86,243', perks: ['Premium logo placement', '5 Complimentary Reg.', 'Speaking slot (15 min)', 'Prime exhibition booth'] }
  ];

  return (
    <section id="sponsors" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-purple-500 font-bold tracking-wider uppercase text-sm mb-4">Partner With Us</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6">Sponsorship Opportunities</h3>
          <p className="text-lg text-slate-400">Showcase your brand to global experts in civil infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className={`rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${i === 1 ? 'bg-gradient-to-b from-purple-600 to-red-600 shadow-2xl shadow-purple-500/20 md:-mt-4 md:mb-4' : 'bg-slate-800 border border-slate-700'}`}>
              {i === 1 && (
                <div className="absolute top-0 right-0 py-1.5 px-4 bg-white text-purple-600 text-xs font-bold rounded-bl-xl tracking-wider uppercase">Most Popular</div>
              )}
              <h4 className="text-2xl font-bold mb-2">{pkg.title}</h4>
              <div className="text-4xl font-extrabold mb-8">{pkg.price}</div>
              <ul className="space-y-4 mb-8">
                {pkg.perks.map((perk, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check size={18} className={i === 1 ? 'text-white/80' : 'text-purple-500'} />
                    <span className={i === 1 ? 'text-white' : 'text-slate-300'}>{perk}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${i === 1 ? 'bg-white text-purple-600 hover:bg-slate-50' : 'bg-slate-700 text-white hover:bg-slate-600'}`}>
                Become a Sponsor
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                C²⁶
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">SHMS<sup className="text-purple-500">26</sup></h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              International Conference on Sustainable Environment & Energy Innovations. Organized by Department of Civil Engineering, MNNIT Allahabad.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Call For Papers', 'Registration', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-purple-500 transition-colors text-sm font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-purple-500 transition-colors text-sm font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400 text-sm">
                <MapPin className="text-purple-500 shrink-0" size={20} />
                <span>Department of Civil Engineering,<br />MNNIT Allahabad, Prayagraj,<br />UP 211004, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2026 SHMS Organizing Committee. All rights reserved.
          </p>
          <div className="text-slate-500 text-xs text-center border px-4 py-2 rounded-lg border-slate-800">
            Powered by modern React + Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`font-sans min-h-screen text-slate-900 dark:text-slate-50 transition-colors duration-300 bg-white dark:bg-slate-950`}>
      <Navbar toggleTheme={() => setIsDark(!isDark)} isDark={isDark} />
      <Hero />
      <TimerSection />
      <AboutSection />
      <IshmsSection />
      <TrackSection />
      <ImportantDatesSection />
      <Sponsorship />
      <Footer />
    </div>
  );
}
