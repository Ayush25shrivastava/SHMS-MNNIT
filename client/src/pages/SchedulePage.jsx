import React, { useState } from 'react';
import { Clock, User, Coffee, Utensils, Presentation, Users, Award, MapPin, Calendar, Sparkles } from 'lucide-react';

const scheduleData = [
  {
    day: 1,
    date: "October 15, 2026 (Thursday)",
    events: [
      { time: "08:00 - 09:00", title: "Registration and Welcome", type: "administrative", icon: <User size={20} /> },
      { 
        time: "09:00 - 10:00", 
        title: "Inaugural Ceremony", 
        description: "Welcome Address by Director MNNIT, Lighting of Lamp, Address by ISHMS President", 
        type: "ceremony", 
        icon: <Sparkles size={20} /> 
      },
      { 
        time: "10:00 - 11:00", 
        title: "Keynote 1: \"Digital Twins for Smart Infrastructure\"", 
        description: "Prof. Harpal Singh, Arctic University of Norway, Norway", 
        type: "keynote", 
        icon: <Presentation size={20} /> 
      },
      { time: "11:00 - 11:30", title: "Tea/Coffee Break & Networking", type: "break", icon: <Coffee size={20} /> },
      { 
        time: "11:30 - 13:00", 
        title: "Parallel Technical Sessions I", 
        description: "Track 1: Smart Materials | Track 2: Sensor Technologies | Track 3: WSN & IoT", 
        type: "technical", 
        icon: <Users size={20} /> 
      },
      { time: "13:00 - 14:00", title: "Lunch & Exhibition Visit", type: "break", icon: <Utensils size={20} /> },
      { 
        time: "14:00 - 15:00", 
        title: "Keynote 2: \"AI-Driven Structural Health Monitoring\"", 
        description: "Prof. Suresh Bhalla, IIT Delhi, India", 
        type: "keynote", 
        icon: <Presentation size={20} /> 
      },
      { 
        time: "15:00 - 16:30", 
        title: "Parallel Technical Sessions II", 
        description: "Track 4: AI/ML in SHM | Track 5: Digital Twins | Track 6: NDE", 
        type: "technical", 
        icon: <Users size={20} /> 
      },
      { time: "16:30 - 17:00", title: "Tea/Coffee Break", type: "break", icon: <Coffee size={20} /> },
      { time: "17:00 - 18:30", title: "Poster Session I & Industry Exhibition", type: "technical", icon: <Users size={20} /> },
    ]
  },
  {
    day: 2,
    date: "October 16, 2026 (Friday)",
    events: [
      { 
        time: "09:00 - 10:00", 
        title: "Keynote 3: \"Pavement Evaluation and Assessment\"", 
        description: "Prof. Praveen Kumar, IIT Roorkee, India", 
        type: "keynote", 
        icon: <Presentation size={20} /> 
      },
      { 
        time: "10:00 - 10:45", 
        title: "Expert Lecture 1: \"Bridge SHM Using Vehicle-Bound Sensors\"", 
        description: "Dr. K. Lakshmi, CSIR-SERC, Chennai, India", 
        type: "keynote", 
        icon: <Presentation size={20} /> 
      },
      { 
        time: "10:45 - 11:30", 
        title: "Parallel Technical Sessions III", 
        description: "Track 7: Vibration-Based SHM | Track 8: Field Applications", 
        type: "technical", 
        icon: <Users size={20} /> 
      },
      { time: "11:30 - 12:00", title: "Tea/Coffee Break", type: "break", icon: <Coffee size={20} /> },
      { 
        time: "12:00 - 13:00", 
        title: "Panel Discussion: \"SHM Implementation Challenges in Indian Infrastructure\"", 
        type: "keynote", 
        icon: <Users size={20} /> 
      },
      { time: "13:00 - 14:00", title: "Lunch", type: "break", icon: <Utensils size={20} /> },
      { 
        time: "14:00 - 15:00", 
        title: "Keynote 4: \"AI-Driven Structural Health Monitoring\"", 
        description: "Prof. Hoon Sohn, KAIST, South Korea", 
        type: "keynote", 
        icon: <Presentation size={20} /> 
      },
      { 
        time: "15:00 - 16:30", 
        title: "Parallel Technical Sessions IV", 
        description: "Track 9: Seismic Monitoring | Track 10: Pavement Evaluation", 
        type: "technical", 
        icon: <Users size={20} /> 
      },
      { time: "16:30 - 17:00", title: "Tea/Coffee Break", type: "break", icon: <Coffee size={20} /> },
      { time: "17:00 - 18:30", title: "Poster Session II & ISHMS General Body Meeting", type: "technical", icon: <Users size={20} /> },
      { time: "19:30 - 22:00", title: "Conference Banquet", type: "ceremony", icon: <Utensils size={20} /> },
    ]
  },
  {
    day: 3,
    date: "October 17, 2026 (Saturday)",
    events: [
      { 
        time: "09:00 - 10:00", 
        title: "Keynote 5: \"Energy Harvesting for Self-Powered SHM Systems\"", 
        description: "Prof. Daniel J. Inman, University of Michigan, USA", 
        type: "keynote", 
        icon: <Presentation size={20} /> 
      },
      { 
        time: "10:00 - 10:45", 
        title: "Expert Lecture 2: \"Taking Piezo Sensing to the Skies\"", 
        description: "Dr. Naveet Kaur, CSIR-CRRI, New Delhi, India", 
        type: "keynote", 
        icon: <Presentation size={20} /> 
      },
      { time: "10:45 - 11:30", title: "Special Sessions: Young Researchers Forum", type: "technical", icon: <Users size={20} /> },
      { time: "11:30 - 12:00", title: "Tea/Coffee Break", type: "break", icon: <Coffee size={20} /> },
      { 
        time: "12:00 - 13:00", 
        title: "Panel: \"Future Directions in Smart Materials & SHM Research\"", 
        type: "keynote", 
        icon: <Users size={20} /> 
      },
      { time: "13:00 - 14:00", title: "Lunch", type: "break", icon: <Utensils size={20} /> },
      { 
        time: "14:00 - 15:00", 
        title: "Valedictory & Closing Ceremony", 
        description: "Best Paper Awards, Conference Summary, Vote of Thanks", 
        type: "ceremony", 
        icon: <Award size={20} /> 
      },
      { 
        time: "15:00 onwards", 
        title: "Technical Tour: Sangam (Triveni) & Heritage Sites of Prayagraj (Optional)", 
        type: "technical", 
        icon: <MapPin size={20} /> 
      },
    ]
  }
];

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <div className="pt-16 min-h-screen bg-[#fafbfc] dark:bg-slate-950 transition-colors duration-300 flex flex-col">
      
      {/* Dark Hero Banner */}
      <div className="bg-[#172033] dark:bg-[#0b1121] py-20 md:py-24 relative overflow-hidden shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 text-purple-400 text-[11px] md:text-sm font-bold tracking-[0.15em] uppercase mb-6 drop-shadow-sm">
            <Calendar size={18} className="text-purple-400" />
            <span>Tentative Timeline</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white mb-6 tracking-tight">
            Program Schedule
          </h1>

          <p className="text-slate-300 max-w-2xl text-[15px] md:text-lg leading-relaxed font-medium">
            Explore the SHMS<sup className="text-[10px] md:text-xs mx-0.5 -top-2">26</sup> three-day comprehensive conference agenda.
          </p>

        </div>
        
        {/* Faint Grid/Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Day Selector Section */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200/60 dark:border-slate-800 sticky top-16 z-40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar scroll-smooth gap-4 md:gap-8 py-4 md:py-6">
            {[1, 2, 3].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`flex-shrink-0 px-6 md:px-10 py-3 md:py-4 rounded-2xl md:rounded-[1.5rem] font-bold text-sm md:text-lg transition-all duration-300 flex flex-col items-center md:items-start gap-1 group/btn ${
                  activeDay === day
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30 scale-105"
                    : "bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-purple-600 dark:hover:text-purple-400 border border-slate-200/60 dark:border-slate-700/50"
                }`}
              >
                <span className={`text-[11px] uppercase tracking-widest opacity-70 group-hover/btn:opacity-100 transition-opacity ${activeDay === day ? 'text-purple-100' : ''}`}>Day 0{day}</span>
                <span className="font-serif">October {14 + day}, 2026</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Table Section */}
      <div className="py-12 md:py-20 bg-[#fafbfc] dark:bg-slate-950 transition-colors duration-300 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-sm border border-slate-200/60 dark:border-slate-800/80 transition-shadow hover:shadow-xl duration-500">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200/60 dark:border-slate-700/50">
                    <th className="py-6 px-6 md:px-10 font-bold text-purple-600 dark:text-purple-400 text-sm md:text-[15px] uppercase tracking-widest">Time</th>
                    <th className="py-6 px-6 md:px-10 font-bold text-slate-900 dark:text-white text-sm md:text-[16px] uppercase tracking-widest">Session / Activity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {scheduleData[activeDay - 1].events.map((event, idx) => (
                    <tr key={idx} className="group hover:bg-purple-50/40 dark:hover:bg-purple-900/10 transition-colors duration-300">
                      <td className="py-6 md:py-8 px-6 md:px-10 align-top">
                        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 group-hover:text-purple-600 transition-colors">
                          <Clock size={16} className="shrink-0" />
                          <span className="font-bold text-[13px] md:text-[15px] whitespace-nowrap">{event.time}</span>
                        </div>
                      </td>
                      <td className="py-6 md:py-8 px-6 md:px-10">
                        <div className="flex gap-5 md:gap-6 items-start">
                          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm ${
                            event.type === 'keynote' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' :
                            event.type === 'break' ? 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400' :
                            event.type === 'ceremony' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                            'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                          }`}>
                            {event.icon}
                          </div>
                          <div>
                            <h4 className={`text-lg md:text-[20px] font-serif font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors ${
                              event.type === 'keynote' ? 'text-amber-700 dark:text-amber-300' : ''
                            }`}>
                              {event.title}
                            </h4>
                            {event.description && (
                              <p className="text-slate-600 dark:text-slate-400 text-[14px] md:text-[16px] leading-relaxed max-w-3xl font-medium">
                                {event.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center text-slate-500 dark:text-slate-400 text-[14px] font-medium italic">
            * This is a tentative schedule and is subject to change.
          </div>

        </div>
      </div>

    </div>
  );
}
