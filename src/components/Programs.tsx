import React from 'react';
import { motion } from 'motion/react';
import { Baby, Smile, Palette, Sparkles, GraduationCap, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { PROGRAMS } from '../data';

// Map string icon name to Lucide components safely
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Baby: Baby,
  Smile: Smile,
  Palette: Palette,
  Sparkles: Sparkles,
  GraduationCap: GraduationCap
};

export default function Programs() {
  const triggerInquiryPreFill = (programName: string) => {
    // Notify custom state/form or scroll and select
    const formElement = document.querySelector('#admissions');
    const selectElement = document.querySelector('#programOfInterest') as HTMLSelectElement;
    
    if (selectElement) {
      selectElement.value = programName;
      // Dispatch event to update state in react if listening
      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
    }
    
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#FFFDF7] relative overflow-hidden text-center">
      {/* Decorative vectors */}
      <div className="absolute top-1/3 left-[-100px] w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/10 right-[-100px] w-80 h-80 bg-brand-yellow/10 rounded-full filter blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#373A98] font-brand font-black text-xs uppercase tracking-widest bg-[#373A9812] border border-[#373A9830] py-1.5 px-4 rounded-full inline-block shadow-sm">
            ✨ Our Learning Wings
          </span>
          <h2 className="font-brand text-4xl sm:text-5xl text-brand-blue font-black tracking-tighter leading-none">
            Curriculums Tailored for <br />
            <span className="text-brand-yellow">Every Early Milestone</span>
          </h2>
          <p className="text-gray-600 font-sans text-base max-w-2xl mx-auto">
            Our age-appropriate learning tracks follow international scientific child development standards, ensuring school readiness while focusing heavily on fun exploration.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {PROGRAMS.map((prog, idx) => {
            const IconComponent = iconMap[prog.iconName] || Smile;
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.95, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className={`bg-white rounded-[32px] p-6 border-2 flex flex-col justify-between text-left shadow-lg transition-all duration-300 ${prog.colorTheme}`}
              >
                <div>
                  {/* Icon & Age Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md text-brand-blue">
                      <IconComponent size={24} />
                    </div>
                    <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 bg-white rounded-full shadow-xs text-slate-700">
                      {prog.badge}
                    </span>
                  </div>

                  {/* Program Title */}
                  <h3 className="font-brand font-black text-xl text-gray-900 mb-2">
                    {prog.name}
                  </h3>

                  {/* Timing indicator */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-sans mb-4">
                    <Clock size={13} className="text-gray-400" />
                    <span>{prog.duration}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-600 font-sans leading-relaxed mb-6 h-20 overflow-y-auto pr-1">
                    {prog.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-8">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block mb-1">Curricular Focus</span>
                    {prog.highlights.slice(0, 3).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-[11px] text-gray-700 font-semibold leading-tight">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0 mt-1" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA prefill button */}
                <button
                  onClick={() => triggerInquiryPreFill(prog.name)}
                  className="w-full mt-auto flex items-center justify-center gap-1.5 py-2.5 px-4 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-xl text-xs font-brand font-extrabold transition-all duration-300 shadow-md shadow-brand-blue/10 transform hover:scale-[1.02] cursor-pointer"
                >
                  <span>Enquire Class</span>
                  <ArrowRight size={13} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* High visual reassurance footer segment */}
        <div className="mt-16 inline-flex flex-wrap items-center justify-center gap-6 py-4 px-6 rounded-2xl bg-[#373A98]/5 border border-[#373A98]/10 text-brand-blue text-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-emerald-500" />
            <span className="font-brand font-bold text-gray-700">Certified International Montessori Standards</span>
          </div>
          <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-brand-yellow" />
          <p className="font-sans text-xs text-gray-600">
            *Uniquely structured physical development plans for infant to kindergarten stages.
          </p>
        </div>

      </div>
    </section>
  );
}
