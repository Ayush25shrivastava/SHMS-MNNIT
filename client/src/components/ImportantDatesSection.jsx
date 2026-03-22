import React from 'react';
import { Calendar, PenTool, MailCheck, FileText, CheckSquare, Printer, Clock, Users } from 'lucide-react';

export default function ImportantDatesSection() {
  const dates = [
    { milestone: 'Abstract Submission Opens', date: 'March 15, 2026', icon: Calendar },
    { milestone: 'Abstract Submission Deadline', date: 'June 30, 2026', icon: PenTool },
    { milestone: 'Notification of Abstract Acceptance', date: 'July 31, 2026', icon: MailCheck },
    { milestone: 'Full Paper Submission Deadline', date: 'August 16, 2026', icon: FileText },
    { milestone: 'Notification of Paper Acceptance', date: 'September 15, 2026', icon: CheckSquare },
    { milestone: 'Camera-Ready Paper Submission', date: 'September 30, 2026', icon: Printer },
    { milestone: 'Early Bird Registration Deadline', date: 'September 30, 2026', icon: Clock },
    { milestone: 'Conference Dates', date: 'October 15-17, 2026', icon: Users }
  ];

  return (
    <section id="dates" className="py-24 bg-[#f4ece3] dark:bg-slate-900 transition-colors duration-300 tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-purple-500 dark:text-purple-400 font-bold tracking-[0.15em] uppercase text-sm mb-4">
            Mark Your Calendar
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 dark:text-white mb-6">
            Important Dates
          </h3>
        </div>

        {/* Timeline wrapper */}
        <div className="relative max-w-4xl mx-auto">
          {dates.map((item, index) => (
            <div key={index} className="flex gap-4 md:gap-10 group cursor-default">
              
              {/* Left timeline column */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl shrink-0 bg-white dark:bg-slate-800 border-2 border-purple-200 dark:border-slate-600 flex items-center justify-center text-purple-400 transition-all duration-300 group-hover:bg-purple-400 group-hover:border-purple-400 group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(192,132,252,0.3)] dark:group-hover:shadow-[0_0_20px_rgba(192,132,252,0.1)] z-10 mt-2">
                  <item.icon className="w-5 h-5 md:w-[26px] md:h-[26px] stroke-[2.5]" />
                </div>
                
                {/* Connecting Line segment */}
                {index !== dates.length - 1 && (
                  <div className="w-[2px] md:w-[3px] bg-purple-200 dark:bg-slate-700 flex-grow my-2 transition-all duration-300 group-hover:bg-purple-400 dark:group-hover:bg-purple-500 rounded-full ml-0 md:ml-[1px]"></div>
                )}
              </div>

              {/* Right content column */}
              <div className="flex-grow pb-10">
                <div className="bg-white dark:bg-slate-800/80 rounded-[1.25rem] p-4 md:p-5 shadow-sm border border-transparent transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_15px_30px_-10px_rgba(192,132,252,0.15)] dark:group-hover:shadow-none dark:group-hover:border-slate-600/50 group-hover:border-purple-100">
                  <h4 className="text-md md:text-xl font-semibold font-serif text-purple-500 dark:text-purple-400 mb-2 transition-colors duration-300">
                    {item.date}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base font-medium">
                    {item.milestone}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
