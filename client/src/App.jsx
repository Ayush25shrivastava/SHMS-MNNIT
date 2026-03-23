import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MapPin } from "lucide-react";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import TimerSection from "./components/TimerSection";
import AboutSection from "./components/AboutSection";
import IshmsSection from "./components/IshmsSection";
import TrackSection from "./components/TrackSection";
import ImportantDatesSection from "./components/ImportantDatesSection";
import JoinUsSection from "./components/JoinUsSection";
import CommitteePage from "./pages/Committee";
import AboutPage from "./pages/AboutPage";
import CallForPaperPage from "./pages/CallForPaperPage";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";
import SchedulePage from "./pages/SchedulePage";
import Footer from "./components/Footer";
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


// ✅ Home Page
const HomePage = () => (
  <>
    <Hero />
    <TimerSection />
    <AboutSection />
    <IshmsSection />
    <TrackSection />
    <ImportantDatesSection />
    <JoinUsSection />
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
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        <Navbar toggleTheme={() => setIsDark(!isDark)} isDark={isDark} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/call-for-paper" element={<CallForPaperPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}