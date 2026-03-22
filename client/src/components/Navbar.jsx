// import React, { useState, useEffect } from 'react';
// import { Sun, Moon, X, Menu } from 'lucide-react';
// import mnnitLogo from '../assets/mnnit logo.png';

// export default function Navbar({ toggleTheme, isDark }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeHash, setActiveHash] = useState(window.location.hash || '#');

//   useEffect(() => {
//     const handleHashChange = () => {
//       setActiveHash(window.location.hash || '#');
//     };
//     window.addEventListener('hashchange', handleHashChange);
//     return () => window.removeEventListener('hashchange', handleHashChange);
//   }, []);

//   const getDesktopClass = (href) => {
//     return activeHash === href
//       ? "bg-[#8B5CF6] text-white font-semibold text-sm px-4 py-2 rounded shadow-sm"
//       : "text-white hover:text-purple-400 hover:bg-gray-800 px-4 py-2 rounded text-sm font-medium transition-colors";
//   };

//   const getMobileClass = (href, isLast = false) => {
//     const base = "block px-6 py-4 " + (isLast ? "" : "border-b border-gray-800 ");
//     return activeHash === href
//       ? base + "bg-[#8B5CF6] text-white font-semibold"
//       : base + "text-white font-medium hover:bg-gray-800 hover:text-purple-400 transition-colors";
//   };

//   const handleLinkClick = (href) => {
//     setActiveHash(href);
//     setIsOpen(false);
//   };

//   const navLinksList = [
//     { name: 'Home', href: '#' },
//     { name: 'About', href: '#about' },
//     { name: 'Call for Paper', href: '#call' },
//     { name: 'Committee', href: '#committee' },
//     { name: 'Past Events', href: '#past' }
//   ];

//   return (
//     <nav className="fixed w-full z-50 transition-all duration-300 bg-[#172033] shadow-md border-b border-gray-800/50">
//       {/* Desktop View */}
//       <div className="hidden md:flex max-w-screen-2xl mx-auto px-4 py-2 justify-around items-center">
//         {/* Left Side */}
//         <div className="flex items-center gap-3">
          
//           {/* Vacant place for logo later */}
//           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden">
//           </div>
          
//           <div className="flex flex-col ml-1">
//             <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-tight font-serif drop-shadow-sm">SHMS<sup className="text-purple-500 text-sm mx-1">26</sup></h1>
//             <p className="text-xs md:text-sm text-gray-200 font-medium">MNNIT Allahabad</p>
//           </div>
//         </div>

//         {/* Center / Right Side Links */}
//         <div className="flex items-center space-x-2 lg:space-x-3">
//           {navLinksList.map((link) => (
//             <a 
//               key={link.name} 
//               href={link.href} 
//               onClick={() => handleLinkClick(link.href)}
//               className={getDesktopClass(link.href)}
//             >
//               {link.name}
//             </a>
//           ))}
          
//           <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white text-sm px-6 py-2.5 rounded-full font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all transform hover:scale-105 ml-4">
//             Registration
//           </button>
          
//           <a 
//             href="#contact" 
//             onClick={() => handleLinkClick('#contact')}
//             className={`${getDesktopClass('#contact')} ml-4`}
//           >
//             Contact
//           </a>
          
//           <button onClick={toggleTheme} className="text-white hover:text-purple-400 transition-colors ml-2">
//             {isDark ? <Moon size={20} /> : <Sun size={20} />}
//           </button>

//           <img src={mnnitLogo} alt="MNNIT Logo" className="w-[60px] h-[60px] object-contain drop-shadow-md" />
//         </div>
//       </div>

//       {/* Mobile view top bar */}
//       <div className="md:hidden flex justify-between items-center px-4 py-3">
//         {/* Left: Vacant place for logo */}
//         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner">
//         </div>
        
//         {/* Right side controls */}
//         <div className="flex items-center gap-4">
//           <button onClick={toggleTheme} className="text-white hover:text-purple-400 transition-colors">
//             {isDark ? <Sun size={24} /> : <Moon size={24} />}
//           </button>
          
//           {/* MNNIT Logo */}
//           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
//              <img src={mnnitLogo} alt="MNNIT Logo" className="w-full h-full object-contain" />
//           </div>

//           <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 border border-purple-500 rounded p-1 hover:text-purple-500 hover:bg-[#463125]/50 transition-colors">
//             {isOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-[#172033] shadow-2xl border-t border-gray-800">
//           <div className="flex flex-col pb-4">
//             {navLinksList.map((link) => (
//               <a 
//                 key={link.name} 
//                 href={link.href} 
//                 onClick={() => handleLinkClick(link.href)} 
//                 className={getMobileClass(link.href)}
//               >
//                 {link.name}
//               </a>
//             ))}
//             <a 
//               href="#contact" 
//               onClick={() => handleLinkClick('#contact')} 
//               className={getMobileClass('#contact', true)}
//             >
//               Contact
//             </a>
            
//             <div className="px-6 pt-2 relative">
//                <button className="w-full bg-gradient-to-r from-purple-500 to-red-500 text-white py-3.5 rounded-xl font-bold shadow-lg">
//                  Register Now
//                </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Sun, Moon, X, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import mnnitLogo from '../assets/mnnit logo.png';

export default function Navbar({ toggleTheme, isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const getDesktopClass = (href) => {
    return activePath === href
      ? "bg-[#8B5CF6] text-white font-semibold text-sm px-4 py-2 rounded shadow-sm"
      : "text-white hover:text-purple-400 hover:bg-gray-800 px-4 py-2 rounded text-sm font-medium transition-colors";
  };

  const getMobileClass = (href, isLast = false) => {
    const base = "block px-6 py-4 " + (isLast ? "" : "border-b border-gray-800 ");
    return activePath === href
      ? base + "bg-[#8B5CF6] text-white font-semibold"
      : base + "text-white font-medium hover:bg-gray-800 hover:text-purple-400 transition-colors";
  };

  const handleLinkClick = (href) => {
    setActivePath(href);
    setIsOpen(false);
  };

  const navLinksList = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/' },
    { name: 'Call for Paper', href: '/' },
    { name: 'Committee', href: '/committee' },
    { name: 'Past Events', href: '/' }
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-[#172033] shadow-md border-b border-gray-800/50">
      
      {/* Desktop View */}
      <div className="hidden md:flex max-w-screen-2xl mx-auto px-4 py-2 justify-around items-center">
        
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden"></div>
          
          <div className="flex flex-col ml-1">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-tight font-serif drop-shadow-sm">
              SHMS<sup className="text-purple-500 text-sm mx-1">26</sup>
            </h1>
            <p className="text-xs md:text-sm text-gray-200 font-medium">MNNIT Allahabad</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-2 lg:space-x-3">
          {navLinksList.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={getDesktopClass(link.href)}
            >
              {link.name}
            </Link>
          ))}

          <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white text-sm px-6 py-2.5 rounded-full font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all transform hover:scale-105 ml-4">
            Registration
          </button>

          <Link
            to="/"
            onClick={() => handleLinkClick('/')}
            className={`${getDesktopClass('/')} ml-4`}
          >
            Contact
          </Link>

          <button onClick={toggleTheme} className="text-white hover:text-purple-400 transition-colors ml-2">
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <img src={mnnitLogo} alt="MNNIT Logo" className="w-[60px] h-[60px] object-contain drop-shadow-md" />
        </div>
      </div>

      {/* Mobile Top */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner"></div>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="text-white hover:text-purple-400">
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
            <img src={mnnitLogo} alt="MNNIT Logo" className="w-full h-full object-contain" />
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 border border-purple-500 rounded p-1">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#172033] shadow-2xl border-t border-gray-800">
          <div className="flex flex-col pb-4">
            {navLinksList.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={getMobileClass(link.href)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/"
              onClick={() => handleLinkClick('/')}
              className={getMobileClass('/', true)}
            >
              Contact
            </Link>

            <div className="px-6 pt-2">
              <button className="w-full bg-gradient-to-r from-purple-500 to-red-500 text-white py-3.5 rounded-xl font-bold shadow-lg">
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}