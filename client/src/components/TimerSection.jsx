import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const TimerSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    // Target date set to October 15, 2026, 00:00:00
    const targetDate = new Date('2026-10-15T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <section className="relative w-full min-h-[400px] flex flex-col items-center justify-center py-20 px-4 bg-[#f4ece3] dark:bg-slate-900 transition-colors duration-300 overflow-hidden border-b border-slate-200/50 dark:border-slate-800/50">
      {/* Subtle radial gradient background effect analogous to the image */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div 
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full blur-3xl opacity-60 dark:opacity-20"
          style={{ 
            background: 'radial-gradient(circle, rgba(234,221,209,0.8) 0%, rgba(244,236,227,0) 70%)',
            border: 'none'
          }}
        ></div>
        {/* Dark mode gradient */}
        <div 
          className="absolute hidden dark:block w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full blur-3xl opacity-20"
          style={{ 
            background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(15,23,42,0) 70%)',
            border: 'none'
          }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Date Badge */}
        <div className="flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-purple-200 bg-purple-50 dark:bg-slate-800 dark:border-slate-700 text-purple-400 dark:text-purple-400 font-medium text-sm md:text-base shadow-sm backdrop-blur-sm">
          <Calendar size={18} />
          <span className="tracking-wide">October 15-17, 2026</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4c5b6b] dark:text-slate-200 mb-10 tracking-wider drop-shadow-sm">
          Conference Starts In
        </h2>

        {/* Timer Blocks */}
        <div className="flex items-start justify-center space-x-3 md:space-x-8">
          {timeBlocks.map((block, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-28 md:h-28 bg-[#f2ede6]/80 dark:bg-slate-800/90 rounded-2xl border border-white dark:border-slate-700 shadow-[0_4px_15px_rgba(0,0,0,0.03)] dark:shadow-none flex items-center justify-center mb-3 md:mb-4 backdrop-blur-md">
                  <span className="text-2xl md:text-5xl font-serif font-bold text-[#1f2937] dark:text-white drop-shadow-sm">
                    {String(block.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[10px] md:text-xs font-semibold text-[#8a94a6] dark:text-slate-400 tracking-widest uppercase">
                  {block.label}
                </span>
              </div>
              
              {/* Colon Separator */}
              {i < timeBlocks.length - 1 && (
                <div className="pt-3 md:pt-8 text-2xl md:text-4xl font-serif font-bold text-purple-400 dark:text-purple-400 animate-pulse">
                  :
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimerSection;
