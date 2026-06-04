import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Gamepad, Palette, Users2, MessageSquareText, Sparkles, MonitorPlay } from 'lucide-react';

export default function LearningEnvironment() {
  const [activeDimension, setActiveDimension] = useState<number>(0);

  const dimensions = [
    {
      icon: Gamepad,
      title: 'Fun Learning',
      phrase: 'Gamified interactive methodologies',
      description: 'We believe learning is a natural byproduct of joyful play. Our curricula are rooted in high-fidelity mathematical activities, vocabulary bingo, and interactive storytelling.',
      color: 'bg-indigo-50 border-indigo-100 text-[#373A98]',
      badge: 'Activity-Centered'
    },
    {
      icon: Palette,
      title: 'Pure Creativity',
      phrase: 'Hands-on tactile adventures',
      description: 'Tactile expression plays an undisputed role in infant mental pathways. From clay modeling to watercolor canvases and children theater scripts, we unlock pure raw imagination.',
      color: 'bg-rose-50 border-rose-100 text-rose-500',
      badge: 'Unlocking Talents'
    },
    {
      icon: Users2,
      title: 'Social Development',
      phrase: 'Cooperation, empathy & sharing',
      description: 'Empathy and mutual respect are structural focus points. Through daily group challenges, shared toy boxes, and task pairings, students understand healthy social codes.',
      color: 'bg-emerald-50 border-emerald-100 text-emerald-600',
      badge: 'Empathy Loops'
    },
    {
      icon: MessageSquareText,
      title: 'Communication Skills',
      phrase: 'Bilingual fluency & public confidence',
      description: 'Early speech confidence forms leadership bases. We lead rhyming, puppet speaking, show-and-tell circles, and phonic spelling loops to develop fluent verbal command.',
      color: 'bg-amber-50 border-amber-100 text-amber-600',
      badge: 'Phonics & Speech'
    },
    {
      icon: Sparkles,
      title: 'Emotional Growth',
      phrase: 'Self-recognition & stress protection',
      description: 'Providing secure emotional shields. Our compassionate staff are certified in behavioral techniques to validate feelings, foster conflict resolution, and anchor calm confidence.',
      color: 'bg-purple-50 border-purple-100 text-purple-600',
      badge: 'Empathetic Focus'
    },
    {
      icon: MonitorPlay,
      title: 'Interactive Education',
      phrase: 'Smart digital screens & smart visual sets',
      description: 'We bridge physical playing cards with smart animated screens. Under safe teacher navigation, kids learn spatial sizing, geometry coordinates, and phonics matching.',
      color: 'bg-[#23B5D3]/5 border-cyan-100 text-[#23B5D3]',
      badge: 'Visual Technology'
    }
  ];

  return (
    <section id="learning" className="py-20 lg:py-28 bg-[#FFFDF7] relative overflow-hidden">
      
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-yellow/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-brand-blue font-brand font-black text-xs uppercase tracking-widest bg-[#373A9812] border border-[#373A9830] py-1.5 px-4 rounded-full inline-block shadow-sm">
            ✨ Our Learning Philosophy
          </span>
          <h2 className="font-brand text-4xl sm:text-5xl text-brand-blue font-black tracking-tighter leading-none animate-fade-in">
            A Multi-Dimensional <br />
            <span className="text-brand-yellow font-brand">Nurturing Environment</span>
          </h2>
          <p className="text-gray-600 font-sans text-base max-w-2xl mx-auto">
            Our specialized framework is engineered to trigger balance across physical, linguistic, cognitive, social, and emotional development curves simultaneously.
          </p>
        </div>

        {/* Premium Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Tab Buttons List */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 gap-3">
              {dimensions.map((dim, idx) => {
                const Icon = dim.icon;
                const isActive = activeDimension === idx;
                
                return (
                  <button
                    key={dim.title}
                    onClick={() => setActiveDimension(idx)}
                    className={`p-4 sm:p-5 text-left rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer transform active:scale-[0.99] ${
                      isActive
                        ? 'bg-white border-brand-blue shadow-lg shadow-brand-blue/5 translate-x-2'
                        : 'bg-white/50 border-gray-100 hover:bg-white hover:border-gray-200'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl shrink-0 ${dim.color} ${isActive ? 'scale-110' : ''} transition-transform`}>
                      <Icon size={20} />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-brand font-black text-sm text-gray-900">{dim.title}</span>
                        {isActive && (
                          <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 rounded-full font-brand">
                            {dim.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 font-sans">{dim.phrase}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Displaying detail panels based on activeDimension with seamless animation */}
          <div className="lg:col-span-6">
            <div className="relative">
              
              {/* Outer decorative dotted matrix */}
              <div className="absolute -top-6 -left-6 grid grid-cols-4 gap-1.5 opacity-20 hidden sm:grid">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                ))}
              </div>

              {/* Dynamic Animated Panel Container */}
              <motion.div
                key={activeDimension}
                initial={{ opacity: 0, scale: 0.96, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-white p-6 sm:p-8 rounded-[36px] border border-gray-100 shadow-xl text-left space-y-6 relative"
              >
                {/* Visual Backdrop Frame */}
                <div className="relative rounded-2xl overflow-hidden h-[180px] sm:h-[240px] bg-brand-cream border border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#373A98]/40 to-transparent z-10" />
                  
                  {/* Dynamic Unsplash Photos to contextualize each dimension */}
                  <img
                    src={
                      activeDimension === 0
                        ? 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800' // fun learning
                        : activeDimension === 1
                        ? 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800' // creativity
                        : activeDimension === 2
                        ? 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800' // social
                        : activeDimension === 3
                        ? 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800' // speech
                        : activeDimension === 4
                        ? 'https://images.unsplash.com/photo-1472248524440-d2a53cf0c392?auto=format&fit=crop&q=80&w=800' // emotional
                        : 'https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=800' // interactive
                    }
                    alt={dimensions[activeDimension].title}
                    className="w-full h-full object-cover transform scale-102 hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-xs text-[#373A98] font-brand font-black text-[11px] px-3.5 py-1.5 rounded-full shadow-md border border-[#373A98]/10 select-none">
                    {dimensions[activeDimension].title} Focus
                  </span>
                </div>

                {/* Text explanation content */}
                <div className="space-y-3">
                  <span className="text-[10px] tracking-widest font-extrabold uppercase text-brand-yellow font-sans block">
                    {dimensions[activeDimension].phrase}
                  </span>
                  <h3 className="font-brand font-black text-2xl text-brand-blue">
                    Nurturing {dimensions[activeDimension].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                    {dimensions[activeDimension].description}
                  </p>
                </div>

                {/* Inner decorative floating shapes */}
                <div className="pt-4 border-t border-brand-blue/5 flex items-center gap-4 text-xs font-bold text-gray-500 font-brand">
                  <span className="inline-block h-2 w-2 rounded-full bg-brand-yellow" />
                  <span>100% Kid Safe Materials Used</span>
                  <span className="inline-block h-2 w-2 rounded-full bg-[#23B5D3]" />
                  <span>Teacher Facilitated</span>
                </div>

                {/* Organic yellow floating balloon */}
                <div className="absolute bottom-[-15px] right-[-15px] h-12 w-12 rounded-full bg-brand-yellow opacity-10 blur-sm -z-10" />
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
