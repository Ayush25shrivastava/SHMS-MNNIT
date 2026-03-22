import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MapPin } from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TimerSection from "./components/TimerSection";
import AboutSection from "./components/AboutSection";
import IshmsSection from "./components/IshmsSection";
import TrackSection from "./components/TrackSection";
import ImportantDatesSection from "./components/ImportantDatesSection";
import CommitteePage from "./pages/Committee";

// ✅ Check Icon
const Check = ({ size = 24, strokeWidth = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// ✅ Sponsorship Section
const Sponsorship = () => {
  const packages = [
    {
      title: "Silver Sponsor",
      price: "₹96,560",
      perks: ["Logo on website", "1 Complimentary Reg.", "Half page in souvenir"],
    },
    {
      title: "Gold Sponsor",
      price: "₹1,93,121",
      perks: [
        "Logo prominently displayed",
        "3 Complimentary Reg.",
        "Full page in souvenir",
        "Exhibition booth",
      ],
    },
    {
      title: "Platinum Sponsor",
      price: "₹3,86,243",
      perks: [
        "Premium logo placement",
        "5 Complimentary Reg.",
        "Speaking slot (15 min)",
        "Prime exhibition booth",
      ],
    },
  ];

  return (
    <section id="sponsors" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-purple-500 font-bold uppercase text-sm mb-4">
            Partner With Us
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6">
            Sponsorship Opportunities
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`rounded-3xl p-8 transition-all ${
                i === 1
                  ? "bg-gradient-to-b from-purple-600 to-red-600"
                  : "bg-slate-800 border border-slate-700"
              }`}
            >
              <h4 className="text-2xl font-bold">{pkg.title}</h4>
              <div className="text-3xl font-bold my-4">{pkg.price}</div>

              <ul className="space-y-3 mb-6">
                {pkg.perks.map((perk, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check size={16} />
                    {perk}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-xl bg-white text-black font-bold">
                Become a Sponsor
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ✅ Footer
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <h2 className="text-white text-xl font-bold">SHMS 26</h2>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-purple-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/committee"
                  className="text-slate-400 hover:text-purple-500"
                >
                  Committee
                </Link>
              </li>
            </ul>
          </div>

          <div></div>

          <div className="text-slate-400 flex gap-2">
            <MapPin size={18} /> Prayagraj, India
          </div>
        </div>
      </div>
    </footer>
  );
};

// ✅ Home Page
const HomePage = () => (
  <>
    <Hero />
    <TimerSection />
    <AboutSection />
    <IshmsSection />
    <TrackSection />
    <ImportantDatesSection />
    <Sponsorship />
  </>
);

// ✅ MAIN APP
export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        <Navbar toggleTheme={() => setIsDark(!isDark)} isDark={isDark} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/committee" element={<CommitteePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}