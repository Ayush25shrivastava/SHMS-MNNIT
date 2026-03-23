import React from 'react';
import { Sparkles, Calendar, GraduationCap, CheckCircle, Building2, QrCode, FileText, Send } from 'lucide-react';
import qrCode from '../assets/register page/qrcode-D1XQeMfS.png';

export default function RegisterPage() {
  return (
    <div className="pt-16 min-h-screen bg-[#fafbfc] dark:bg-slate-950 transition-colors duration-300 flex flex-col">
      
      {/* Dark Hero Banner */}
      <div className="bg-[#172033] dark:bg-[#0b1121] py-20 md:py-24 relative overflow-hidden shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 text-purple-400 text-[11px] md:text-sm font-bold tracking-[0.15em] uppercase mb-6 drop-shadow-sm">
            <Sparkles size={18} className="text-purple-400" />
            <span>Join Us</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white mb-6 tracking-tight">
            Registration
          </h1>

          <p className="text-slate-300 max-w-2xl text-[15px] md:text-lg leading-relaxed font-medium">
            Register for SHMS<sup className="text-[10px] md:text-xs mx-0.5 -top-2">26</sup> - International Conference on Next Gen Structural Health Monitoring Powered by AI-ML and Smart Materials
          </p>

        </div>
        
        {/* Faint Grid/Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Important Dates Section */}
      <div className="bg-[#f0ebe4] dark:bg-[#0c1322] py-16 md:py-24 border-b border-slate-200/50 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-10 text-center tracking-tight">
            Important Dates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-5 transition-transform duration-300 hover:scale-105 group cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0 transition-colors group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50">
                <Calendar className="text-purple-500 dark:text-purple-400 w-6 h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-purple-600 dark:text-purple-400 text-[12px] md:text-[13px] font-bold tracking-wide uppercase mb-1">
                  Submission of Abstract
                </span>
                <span className="text-slate-900 dark:text-white font-bold text-[16px] md:text-[18px]">
                  June 30, 2026
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-5 transition-transform duration-300 hover:scale-105 group cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0 transition-colors group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50">
                <Calendar className="text-purple-500 dark:text-purple-400 w-6 h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-purple-600 dark:text-purple-400 text-[12px] md:text-[13px] font-bold tracking-wide uppercase mb-1">
                  Intimation of Acceptance
                </span>
                <span className="text-slate-900 dark:text-white font-bold text-[16px] md:text-[18px]">
                  July 31, 2026
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-5 transition-transform duration-300 hover:scale-105 group cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0 transition-colors group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50">
                <Calendar className="text-purple-500 dark:text-purple-400 w-6 h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-purple-600 dark:text-purple-400 text-[12px] md:text-[13px] font-bold tracking-wide uppercase mb-1">
                  Registration Deadline
                </span>
                <span className="text-slate-900 dark:text-white font-bold text-[16px] md:text-[18px]">
                  September 30, 2026
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Registration Process Section */}
      <div className="py-20 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300 border-b border-slate-200/50 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <div className="w-20 h-20 rounded-[1.25rem] bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 duration-300">
              <GraduationCap className="text-purple-600 dark:text-purple-400 w-10 h-10" strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                Registration
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-[16px] md:text-[18px] font-medium leading-relaxed max-w-2xl">
                The paper/extended abstract submission will start soon. The details of submission procedure will be shared shortly.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Conference Registration Section */}
      <div className="py-20 md:py-28 bg-[#fafbfc] dark:bg-[#090d18] transition-colors duration-300 flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-purple-600 dark:text-purple-400 font-bold tracking-[0.2em] text-[13px] uppercase mb-4 block">
              Registration Fee
            </span>
            <h2 className="text-3xl md:text-[42px] font-serif font-bold text-slate-900 dark:text-white mb-6">
              Conference Registration
            </h2>
            <div className="inline-flex items-center gap-2 bg-purple-100/80 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-5 py-2.5 rounded-full font-semibold text-[14.5px] border border-purple-200 dark:border-purple-500/30">
              <Calendar className="w-4 h-4" />
              Early Bird till August 31, 2026
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-sm border border-slate-200/60 dark:border-slate-700/50 mb-10 transition-shadow hover:shadow-lg duration-500">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-purple-600 dark:bg-purple-700 text-white">
                    <th className="py-6 px-6 md:px-8 font-semibold text-[15px] md:text-[16px] whitespace-nowrap">Category</th>
                    <th className="py-6 px-6 md:px-8 font-semibold text-[15px] md:text-[16px] whitespace-nowrap leading-tight">Early Bird<br/><span className="text-purple-200 text-xs font-normal tracking-wide">(by Aug 31)</span></th>
                    <th className="py-6 px-6 md:px-8 font-semibold text-[15px] md:text-[16px] whitespace-nowrap leading-tight">Regular<br/><span className="text-purple-200 text-xs font-normal tracking-wide">(after Aug 31)</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                  
                  <tr className="group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-300">
                    <td className="py-6 px-6 md:px-8 text-slate-700 dark:text-slate-300 font-medium text-[14.5px] md:text-[15px]">Students / Research Scholars</td>
                    <td className="py-6 px-6 md:px-8 text-purple-600 dark:text-purple-400 font-bold text-[15px] md:text-[16px]">₹ 7,080</td>
                    <td className="py-6 px-6 md:px-8 text-slate-500 dark:text-slate-400 font-medium text-[14.5px] md:text-[15px]">₹ 8,850</td>
                  </tr>
                  
                  <tr className="group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-300 bg-slate-50/50 dark:bg-slate-800/30">
                    <td className="py-6 px-6 md:px-8 text-slate-700 dark:text-slate-300 font-medium text-[14.5px] md:text-[15px]">Faculty Members</td>
                    <td className="py-6 px-6 md:px-8 text-purple-600 dark:text-purple-400 font-bold text-[15px] md:text-[16px]">₹ 8,260</td>
                    <td className="py-6 px-6 md:px-8 text-slate-500 dark:text-slate-400 font-medium text-[14.5px] md:text-[15px]">₹ 10,030</td>
                  </tr>

                  <tr className="group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-300">
                    <td className="py-6 px-6 md:px-8 text-slate-700 dark:text-slate-300 font-medium text-[14.5px] md:text-[15px]">ISHMS Members</td>
                    <td className="py-6 px-6 md:px-8 text-purple-600 dark:text-purple-400 font-bold text-[15px] md:text-[16px]">₹ 5,900</td>
                    <td className="py-6 px-6 md:px-8 text-slate-500 dark:text-slate-400 font-medium text-[14.5px] md:text-[15px]">₹ 7,670</td>
                  </tr>

                  <tr className="group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-300 bg-slate-50/50 dark:bg-slate-800/30">
                    <td className="py-6 px-6 md:px-8 text-slate-700 dark:text-slate-300 font-medium text-[14.5px] md:text-[15px]">Industry Participants</td>
                    <td className="py-6 px-6 md:px-8 text-purple-600 dark:text-purple-400 font-bold text-[15px] md:text-[16px]">₹ 14,160</td>
                    <td className="py-6 px-6 md:px-8 text-slate-500 dark:text-slate-400 font-medium text-[14.5px] md:text-[15px]">₹ 15,930</td>
                  </tr>

                  <tr className="group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-300">
                    <td className="py-6 px-6 md:px-8 text-slate-700 dark:text-slate-300 font-medium text-[14.5px] md:text-[15px]">Foreign Delegates</td>
                    <td className="py-6 px-6 md:px-8 text-purple-600 dark:text-purple-400 font-bold text-[15px] md:text-[16px]">USD 150</td>
                    <td className="py-6 px-6 md:px-8 text-slate-500 dark:text-slate-400 font-medium text-[14.5px] md:text-[15px]">USD 200</td>
                  </tr>

                </tbody>
              </table>
            </div>
            {/* GST Note attached at bottom of table internally */}
            <div className="bg-slate-50 dark:bg-[#131b2e] px-6 py-4.5 border-t border-slate-200/50 dark:border-slate-700/50">
              <p className="text-[14px] text-slate-500 dark:text-slate-400 font-medium">
                * Above fees are inclusive of applicable GST.
              </p>
            </div>
          </div>

          {/* Registration Includes List */}
          <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-200/60 dark:border-slate-700/50 transition-shadow hover:shadow-lg duration-500">
            <h3 className="text-[22px] md:text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6">
              Registration Includes
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-slate-600 dark:text-slate-300 text-[15.5px] leading-relaxed group">
                <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Access to all technical sessions, keynote lectures, and panel discussions</span>
              </li>
              <li className="flex items-start gap-4 text-slate-600 dark:text-slate-300 text-[15.5px] leading-relaxed group">
                <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Conference kit, proceedings (USB), and certificate of participation</span>
              </li>
              <li className="flex items-start gap-4 text-slate-600 dark:text-slate-300 text-[15.5px] leading-relaxed group">
                <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Lunch, tea/coffee breaks for all three days</span>
              </li>
              <li className="flex items-start gap-4 text-slate-600 dark:text-slate-300 text-[15.5px] leading-relaxed group">
                <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Welcome reception and conference banquet</span>
              </li>
              <li className="flex items-start gap-4 text-slate-600 dark:text-slate-300 text-[15.5px] leading-relaxed group">
                <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Exhibition access and networking opportunities</span>
              </li>
            </ul>
          </div>

          {/* Payment Details Section */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left: Bank Transfer Details */}
            <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200/60 dark:border-slate-700/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center shrink-0 transition-colors group-hover:bg-purple-200 dark:group-hover:bg-purple-900/60">
                  <Building2 className="text-purple-600 dark:text-purple-400 w-6 h-6" />
                </div>
                <h3 className="text-[22px] md:text-2xl font-serif font-bold text-slate-900 dark:text-white">
                  Bank Transfer Details
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Account Name", value: "SNFCE MNNIT Allahabad" },
                  { label: "Account Number", value: "10424975574" },
                  { label: "Ifsc", value: "SBIN0002580" },
                  { label: "Micr", value: "211002016" },
                  { label: "Branch", value: "SBI, MNNIT Allahabad" },
                  { label: "Swift", value: "SBININBB828" },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-slate-100 dark:border-slate-700/50 last:border-0 gap-1 sm:gap-4">
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">{item.label}</span>
                    <span className="text-slate-900 dark:text-white font-bold text-[15px] md:text-[16px] text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Scan to Pay */}
            <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200/60 dark:border-slate-700/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group flex flex-col items-center">
              <div className="flex items-center gap-4 mb-8 w-full justify-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center shrink-0 transition-colors group-hover:bg-purple-200 dark:group-hover:bg-purple-900/60">
                  <QrCode className="text-purple-600 dark:text-purple-400 w-6 h-6" />
                </div>
                <h3 className="text-[22px] md:text-2xl font-serif font-bold text-slate-900 dark:text-white">
                  Scan to Pay
                </h3>
              </div>

              <div className="bg-white p-4 rounded-3xl border border-slate-200 dark:border-slate-700 mb-8 shadow-inner group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={qrCode} 
                  alt="Payment QR Code" 
                  className="w-48 h-48 md:w-56 md:h-56 object-contain"
                />
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 px-6 py-3 rounded-2xl border border-purple-200 dark:border-purple-500/30 flex flex-col items-center gap-1 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 transition-colors">
                <span className="text-purple-600 dark:text-purple-400 text-[11px] font-extrabold uppercase tracking-[0.1em]">UPI ID</span>
                <span className="text-slate-900 dark:text-white font-mono font-bold text-[15px] md:text-[16px]">
                  10424975574@sbi
                </span>
              </div>
            </div>

          </div>

          {/* Paper Submission Section */}
          <div className="mt-20 py-16 px-4 md:px-8 bg-white/50 dark:bg-slate-900/40 rounded-[3rem] border border-slate-200/50 dark:border-slate-800/50">
            <div className="text-center mb-10">
              <span className="text-sm font-bold tracking-[0.2em] text-purple-600 dark:text-purple-400 uppercase mb-3 block italic">
                Paper Submission
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                Submit Your Research
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200/60 dark:border-slate-700/50 group transition-all duration-300 hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-600/50">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-purple-200 transition-all">
                  <FileText className="text-purple-600 dark:text-purple-400 w-8 h-8" />
                </div>
                <div className="flex-grow">
                  <p className="text-slate-600 dark:text-slate-300 text-[16px] md:text-[18px] leading-relaxed mb-8 font-medium">
                    We welcome submissions on original research, reviews and case studies on topics related to the thrust areas of the conference.
                  </p>

                  <div className="bg-[#f0ebe4]/60 dark:bg-slate-900/60 rounded-2xl p-6 md:p-8 border border-slate-200/60 dark:border-slate-700/50">
                    <h4 className="text-lg font-serif font-bold text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200 dark:border-slate-700 pb-3">
                      Abstract Format (One Page)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 font-medium">
                      <div className="flex justify-between sm:justify-start sm:gap-4 items-baseline">
                        <span className="text-slate-500 dark:text-slate-400 text-sm">Font:</span>
                        <span className="text-slate-800 dark:text-slate-200 text-sm font-bold">Times New Roman, 12pt</span>
                      </div>
                      <div className="flex justify-between sm:justify-start sm:gap-4 items-baseline">
                        <span className="text-slate-500 dark:text-slate-400 text-sm">Title:</span>
                        <span className="text-slate-800 dark:text-slate-200 text-sm font-bold">Bold, 14pt</span>
                      </div>
                      <div className="flex justify-between sm:justify-start sm:gap-4 items-baseline">
                        <span className="text-slate-500 dark:text-slate-400 text-sm">Authors:</span>
                        <span className="text-slate-800 dark:text-slate-200 text-sm font-bold">Bold, 12pt</span>
                      </div>
                      <div className="flex justify-between sm:justify-start sm:gap-4 items-baseline">
                        <span className="text-slate-500 dark:text-slate-400 text-sm">Keywords:</span>
                        <span className="text-slate-800 dark:text-slate-200 text-sm font-bold">Max 5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Need Help Section */}
          <div className="mt-24 pb-12 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-3">
              Need Help?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-10 text-center font-medium">
              Contact us for any queries regarding registration or payment
            </p>
            
            <a 
              href="mailto:shms2026@mnnit.ac.in" 
              className="flex items-center gap-3 bg-purple-50 dark:bg-purple-900/30 px-8 py-4 rounded-xl border border-purple-200 dark:border-purple-500/30 text-purple-600 dark:text-purple-400 font-bold hover:bg-purple-100 dark:hover:bg-purple-900/50 hover:shadow-lg transition-all group"
            >
              <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              shms2026@mnnit.ac.in
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}
