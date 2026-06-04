import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Auto scroll testimonials every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const active = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FFFDF7] relative overflow-hidden">
      {/* Decorative vector overlays */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-yellow/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#373A98]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#373A98] font-brand font-black text-xs uppercase tracking-widest bg-[#373A9812] border border-[#373A9830] py-1.5 px-4 rounded-full inline-block shadow-sm">
            ✨ Loving Endorsements
          </span>
          <h2 className="font-brand text-4xl sm:text-5xl text-brand-blue font-black tracking-tighter leading-none animate-fade-in">
            Stories from Our <br />
            <span className="text-brand-yellow">Little Scholars Family</span>
          </h2>
          <p className="text-gray-600 font-sans text-sm sm:text-base max-w-xl mx-auto">
            Discover what our parents say about our uncompromising security, hygienic campus, and dedicated teachers.
          </p>
        </div>

        {/* Testimonials Slider Body with custom slide direction */}
        <div className="relative max-w-4xl mx-auto min-h-[350px] flex items-center justify-center py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 25, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -25, scale: 0.98 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-white p-8 sm:p-12 lg:p-16 rounded-[40px] border border-gray-100 shadow-xl text-left relative flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Massive back quote icon decoration */}
              <div className="absolute top-6 right-8 text-brand-blue/5 pointer-events-none">
                <Quote size={120} strokeWidth={1.5} />
              </div>

              {/* Avatar section */}
              <div className="shrink-0 relative">
                {/* Gold ring around avatar */}
                <div className="absolute inset-0 border-4 border-brand-yellow rounded-full -m-1.5 animate-pulse" />
                <img
                  src={active.avatarUrl}
                  alt={active.parentName}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-md relative z-10"
                  referrerPolicy="no-referrer"
                />
                
                {/* Quote overlay badge */}
                <div className="absolute -bottom-2 -right-2 p-1.5 bg-brand-blue text-white rounded-lg shadow-md z-20">
                  <Quote size={14} />
                </div>
              </div>

              {/* Text review Section */}
              <div className="space-y-4 flex-1">
                {/* Render Stars */}
                <div className="flex items-center gap-1 text-brand-yellow">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                  <span className="text-xs font-bold text-gray-400 font-sans ml-1">5.0 Star Rating</span>
                </div>

                {/* Quote details */}
                <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed font-sans font-medium">
                  "{active.quote}"
                </p>

                {/* Reviewer signature info */}
                <div className="pt-2 border-t border-brand-blue/5 flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="font-brand font-black text-slate-900 text-sm">{active.parentName}</h4>
                    <p className="text-[11px] text-gray-500 font-sans mt-0.5">
                      Parent of <span className="text-brand-blue font-bold">{active.childName}</span> ({active.childClass})
                    </p>
                  </div>
                  <span className="text-[10px] text-gray-400 font-sans font-medium">{active.date}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav slider arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[-16px] sm:left-[-32px] md:left-[-54px] z-20">
            <button
              onClick={handlePrev}
              className="p-3 sm:p-4 bg-white hover:bg-[#FFFDF7] text-brand-blue rounded-2xl shadow-lg border border-gray-150 transition-transform active:scale-90 cursor-pointer"
              aria-label="Previous parent review"
            >
              <ChevronLeft size={18} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-[-16px] sm:right-[-32px] md:right-[-54px] z-20">
            <button
              onClick={handleNext}
              className="p-3 sm:p-4 bg-white hover:bg-[#FFFDF7] text-brand-blue rounded-2xl shadow-lg border border-gray-150 transition-transform active:scale-90 cursor-pointer"
              aria-label="Next parent review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel indicator dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i ? 'w-8 bg-[#373A98]' : 'w-2.5 bg-brand-blue/20'
              }`}
              aria-label={`Show review ${i + 1}`}
            />
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-12 inline-flex items-center gap-2 bg-white/60 backdrop-blur-xs scale-92 px-4 py-2 rounded-xl border border-gray-100 shadow-sm text-xs text-gray-500 max-w-sm font-sans">
          <Award size={16} className="text-brand-yellow" />
          <span>Srikakulam's top-recommended premium nursery environment</span>
        </div>

      </div>
    </section>
  );
}
