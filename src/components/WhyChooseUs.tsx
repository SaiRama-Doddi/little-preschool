import React from 'react';
import { motion } from 'motion/react';
import { Tv, ShieldCheck, HeartHandshake, Users, Wind, Gamepad2, Sprout, ArrowUpRight } from 'lucide-react';
import { FEATURES } from '../data';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Tv: Tv,
  ShieldCheck: ShieldCheck,
  HeartHandshake: HeartHandshake,
  Users: Users,
  Wind: Wind,
  Gamepad2: Gamepad2,
  Sprout: Sprout
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#FFFDF7] relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-10 right-1/10 w-[300px] h-[300px] bg-emerald-50 rounded-full filter blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 left-1/10 w-[350px] h-[350px] bg-blue-50 rounded-full filter blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-brand-blue font-brand font-black text-xs uppercase tracking-widest bg-[#373A9812] border border-[#373A9830] py-1.5 px-4 rounded-full inline-block shadow-sm">
            ✨ Proven Safety & Quality
          </span>
          <h2 className="font-brand text-4xl sm:text-5xl text-brand-blue font-black tracking-tighter leading-none animate-fade-in">
            Why Little Scholars is the <br />
            <span className="text-brand-yellow">Trusted Choice of Parents</span>
          </h2>
          <p className="text-gray-600 font-sans text-base max-w-2xl mx-auto">
            From active live monitoring loops to digital learning systems, we prioritize premium standards so your child grows in an unmatched loving framework.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName] || ShieldCheck;
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-[28px] border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-start text-left group"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`p-4 rounded-2xl inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${feature.colorClass}`}>
                    <IconComponent size={26} strokeWidth={2} />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-brand font-black text-lg text-gray-900 group-hover:text-brand-blue transition-colors flex items-center gap-1.5">
                      <span>{feature.title}</span>
                    </h3>
                    <p className="text-xs text-gray-500 font-sans leading-relaxed group-hover:text-gray-600 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Small indicator dot at bottom corner */}
                <div className="mt-6 flex items-center justify-start w-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow group-hover:w-8 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
