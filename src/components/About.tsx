import React from 'react';
import { motion } from 'motion/react';
import { Heart, Target, Sun, Award, Shield, Compass } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Heart,
      title: 'Our Loving Mission',
      description: 'To provide a passionate, secure, and nurturing nursery setting where every kid discovers their true potential at their own individual pace.',
      color: 'bg-rose-50 text-rose-600',
      border: 'border-rose-100'
    },
    {
      icon: Target,
      title: 'Our Holistic Vision',
      description: 'To inspire future empathetic leaders equipped with standard cognitive reasoning, rich cultural empathy, and robust basic literacy bases.',
      color: 'bg-indigo-50 text-brand-blue',
      border: 'border-indigo-100'
    },
    {
      icon: Compass,
      title: 'Child-Centered Pedagogy',
      description: 'Moving far beyond rigid textbooks, we follow verified early childhood activities tailored directly to physical, musical, and tactile modes.',
      color: 'bg-amber-50 text-brand-yellow',
      border: 'border-amber-100'
    }
  ];

  const stats = [
    { value: '1:8', label: 'Teacher-Student Ratio', sub: 'Guaranteed individual support' },
    { value: '100%', label: 'Certified Educators', sub: 'Montessori & early care trained' },
    { value: '7+', label: 'Activity Zones', sub: 'Sensory, play & creative yards' },
    { value: 'No. 1', label: 'Parent Trust Rating', sub: 'Top international rating' }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFDF7] relative overflow-hidden">
      {/* Decorative absolute graphic blocks */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-yellow/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-blue/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Rich visual split illustration */}
          <div className="lg:col-span-5 space-y-6 relative">
            <div className="relative">
              {/* Outer frame */}
              <div className="absolute inset-0 border-4 border-dashed border-[#F4B223]/30 rounded-[30px] translate-x-3 translate-y-3 -z-10" />
              
              {/* Primary Image */}
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
                alt="Teacher reading book to happy children"
                className="w-full h-[380px] sm:h-[480px] object-cover rounded-[28px] shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Float Card overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-4 max-w-[260px]"
              >
                <div className="p-3 bg-brand-yellow/10 text-brand-yellow rounded-xl">
                  <Award size={28} />
                </div>
                <div>
                  <h4 className="font-brand font-bold text-gray-900 text-sm">International Standard</h4>
                  <p className="text-xs text-gray-500">Premium nursery pedagogy for early brain growth</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Descriptions & pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-brand-blue font-brand font-black text-xs uppercase tracking-widest bg-[#373A9812] border border-[#373A9830] py-1.5 px-4 rounded-full inline-block shadow-sm">
                ✨ Welcome to Little Scholars
              </span>
              <h2 className="font-brand text-4xl sm:text-5xl text-brand-blue font-black tracking-tighter leading-tight">
                Empowering Kids <br />
                <span className="text-brand-yellow">One Magical Concept at a Time</span>
              </h2>
              <p className="text-gray-600 font-sans text-base sm:text-lg leading-relaxed">
                At Little Scholars International Preschool, we understand that early years form the golden blueprint of a human’s cognitive future. Founded with a vision to deliver trusted nursery paradigms, we combine high-class facilities with an incredibly affectionate coaching core of experienced teachers.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className={`p-5 rounded-2xl bg-white border ${pillar.border} shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-3`}
                  >
                    <div className={`p-2.5 rounded-xl ${pillar.color}`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-brand font-extrabold text-sm text-gray-900">{pillar.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans">{pillar.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-brand-blue/5">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-brand font-black text-2xl sm:text-3xl text-brand-blue">{stat.value}</div>
                  <div className="font-brand font-bold text-xs text-gray-800 tracking-tight">{stat.label}</div>
                  <div className="text-[10px] text-gray-500 leading-none">{stat.sub}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
