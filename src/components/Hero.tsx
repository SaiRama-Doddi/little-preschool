import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Calendar, Sparkles, BookOpen, GraduationCap, ShieldCheck } from 'lucide-react';
import LittleScholarsLogo from './LittleScholarsLogo';
import FloatingElement from './FloatingElement';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-100px)] py-12 lg:py-24 overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#FFFDF7] to-white flex items-center">
      {/* Decorative Dots Pattern Overlay */}
      <div className="absolute inset-0 dotted-pattern pointer-events-none" />

      {/* Radial Glow Ambient Lights */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-[#373A98]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Elements Background Animation */}
      <FloatingElement type="cap" size={48} className="top-16 left-6 md:left-24" delay={0.5} duration={7} />
      <FloatingElement type="book" size={42} className="bottom-24 left-12 md:left-48" delay={1.5} duration={6.5} />
      <FloatingElement type="star" size={36} className="top-1/3 left-1/3" delay={2} duration={5} />
      <FloatingElement type="pencil" size={32} className="top-24 right-1/3" delay={0.8} duration={8} />
      <FloatingElement type="palette" size={40} className="bottom-1/3 right-12 md:right-32" delay={2.5} duration={7.5} />
      <FloatingElement type="sparkle" size={28} className="top-12 right-12 md:right-48" delay={1.2} duration={5.5} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Admissions Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#373A9812] border border-[#373A9830] text-[#373A98] text-xs font-brand font-black uppercase tracking-wider shadow-sm"
            >
              <div className="w-2 h-2 bg-[#F4B223] rounded-full animate-pulse" />
              <span>✨ Admissions Open 2025-2026</span>
              <span className="hidden sm:inline-block px-2 py-0.5 ml-1 text-[9px] bg-[#F4B223] text-[#373A98] rounded-full font-black">AC CAMPUS</span>
            </motion.div>

            {/* School Logo Concept for visual recognition */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-3 bg-[#373A9808] border border-[#373A9815] py-2 px-4 rounded-full"
            >
              <LittleScholarsLogo size="xs" showText={true} />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-brand text-5xl sm:text-6xl lg:text-7xl text-brand-blue font-black tracking-tighter leading-[0.95]"
            >
              Nurturing <br className="hidden sm:inline" />
              <span className="text-brand-yellow font-black">Young Minds</span> <br />
              for a Bright Future
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-600 text-lg sm:text-xl font-normal max-w-2xl leading-relaxed font-sans"
            >
              Little Scholars provides a safe, hygienic, and fully air-conditioned environment where hands-on, activity-based learning prepares future leaders with curiosity and trust.
            </motion.p>

            {/* Key trust bullets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-y-3 gap-x-6 py-2 w-full max-w-md font-brand font-bold text-gray-700 text-sm"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-brand-blue" size={20} />
                <span>CCTV Surveillance</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="text-brand-yellow" size={20} />
                <span>Digital Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="text-emerald-500" size={20} />
                <span>Montessori Mentors</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="text-purple-500" size={20} />
                <span>Holistic Pedagogy</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4"
            >
              <button
                onClick={() => scrollToSection('#admissions')}
                className="bg-brand-blue hover:bg-brand-blue-hover text-white font-brand font-bold text-base px-8 py-4 rounded-2xl shadow-xl shadow-brand-blue/20 hover:shadow-2xl hover:shadow-brand-blue/30 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 cursor-pointer"
              >
                Apply Now 2025-26
                <ChevronRight size={18} />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-white hover:bg-brand-cream text-brand-blue border-2 border-brand-blue/20 hover:border-brand-blue font-brand font-bold text-base px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 cursor-pointer"
              >
                <Calendar size={18} />
                Schedule a Visit
              </button>
            </motion.div>
          </div>

          {/* Graphics section */}
          <div className="lg:col-span-5 relative w-full h-full flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
            {/* Background geometric shapes */}
            <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-brand-yellow rounded-full -bottom-4 -left-4 opacity-15 filter blur-xl animate-pulse" />
            <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] bg-brand-blue rounded-3xl rotate-12 -top-8 -right-8 opacity-5 filter blur-lg" />

            {/* Interactive Badge: AC Campus */}
            <motion.div
              animate={{ rotate: [0, -4, 4, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -top-4 left-6 sm:left-12 z-30 bg-brand-yellow text-brand-blue border-4 border-white font-brand font-black px-4 py-2 rounded-2xl shadow-xl leading-none text-center select-none"
            >
              <span className="text-[10px] uppercase font-semibold">Premium</span>
              <div className="text-xl">AC Campus</div>
            </motion.div>

            {/* Little Scholars Crest Graphic Centerpiece */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative z-25 bg-[#FFFDF7] p-8 sm:p-12 rounded-[40px] shadow-2xl border-2 border-brand-blue/10 flex flex-col items-center justify-center max-w-sm sm:max-w-md w-full"
            >
              {/* Outer decorative dots */}
              <div className="absolute -top-3 -right-3 grid grid-cols-5 gap-1.5 opacity-20">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                ))}
              </div>

              {/* Big High-Fidelity SVG Crest */}
              <LittleScholarsLogo size="xl" showText={false} variant="color" />

              {/* Tagline */}
              <div className="mt-6 text-center">
                <h3 className="font-brand font-extrabold text-[#373A98] text-xl tracking-tight">Little Scholars</h3>
                <p className="font-sans font-semibold text-brand-yellow uppercase tracking-widest text-xs mt-1">International Preschool</p>
                <div className="h-0.5 w-16 bg-brand-yellow/50 mx-auto my-3" />
                <p className="font-brand font-bold text-gray-500 text-sm">"Inspiring Future Leaders"</p>
              </div>
            </motion.div>

            {/* Side Hanging Polaroid Snapshots */}
            <motion.div
              initial={{ x: 50, opacity: 0, rotate: 15 }}
              animate={{ x: 0, opacity: 1, rotate: 6 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-[-10px] right-2 sm:-right-8 z-30 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 max-w-[140px] sm:max-w-[180px] pointer-events-none hover:z-35 transition-transform"
            >
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=300"
                alt="Kids playing and painting"
                className="w-full aspect-square object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="mt-2 text-center">
                <span className="font-brand font-black text-xs text-brand-blue">Active Learning</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0, rotate: -15 }}
              animate={{ x: 0, opacity: 1, rotate: -10 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute top-[20px] left-[-20px] sm:left-[-40px] z-20 bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 max-w-[120px] sm:max-w-[150px] pointer-events-none hover:z-35 transition-transform"
            >
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=300"
                alt="Preschool blocks"
                className="w-full aspect-square object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="mt-1.5 text-center">
                <span className="font-brand font-black text-[11px] text-brand-yellow">Creative Play</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
