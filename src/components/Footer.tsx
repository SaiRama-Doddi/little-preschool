import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin, Heart } from 'lucide-react';
import LittleScholarsLogo from './LittleScholarsLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <footer className="bg-brand-blue text-white overflow-hidden relative pt-16 pb-8 border-t-4 border-brand-yellow">
      {/* Background decoration */}
      <div className="absolute inset-0 dotted-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-brand-yellow rounded-full opacity-[0.03] filter blur-[60px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 text-left">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center">
              <LittleScholarsLogo size="md" showText={true} variant="white" />
            </div>
            <p className="text-stone-300 text-xs sm:text-sm font-sans leading-relaxed max-w-sm">
              Providing premium standard early-learning experiences configured for security, holistic development, and sensory-fueled discoveries since founding.
            </p>
            {/* Social media icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((soc, index) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={index}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-white/10 hover:bg-brand-yellow hover:text-brand-blue rounded-xl transition-all duration-300 transform hover:-translate-y-1 block"
                    aria-label={`Visit our ${soc.label}`}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="font-brand font-black text-brand-yellow text-sm tracking-wider uppercase">
              Explore Campus
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-stone-300">
              {[
                { label: 'Home Stage', href: '#home' },
                { label: 'About Scholars', href: '#about' },
                { label: 'Our Curriculums', href: '#programs' },
                { label: 'Why Little Scholars', href: '#why-us' },
                { label: 'Campus Snaps', href: '#gallery' },
                { label: 'Contact Coordinates', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="hover:text-brand-yellow transition-colors block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Age Groups / Tracks */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="font-brand font-black text-brand-yellow text-sm tracking-wider uppercase">
              Academic Tracks
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-stone-300">
              {[
                { label: 'Day Care Group', age: '1.5 - 10 Years' },
                { label: 'Play Group Stage', age: '2.0 - 3.0 Years' },
                { label: 'Nursery Curriculum', age: '3.0 - 4.0 Years' },
                { label: 'Junior KG Class', age: '4.0 - 5.0 Years' },
                { label: 'Senior KG Graduate', age: '5.0 - 6.0 Years' }
              ].map((prog) => (
                <li key={prog.label}>
                  <a
                    href="#programs"
                    onClick={(e) => handleScrollToSection(e, '#programs')}
                    className="hover:text-brand-yellow transition-colors block"
                  >
                    {prog.label} <span className="text-[10px] text-stone-400">({prog.age})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details summary */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-brand font-black text-brand-yellow text-sm tracking-wider uppercase">
              Quick Contact
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-yellow shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[11px] sm:text-xs">Srikakulam, AP, 532005</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-brand-yellow" />
                <a href="tel:9492848489" className="hover:text-brand-yellow transition-colors">94928 48489</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-brand-yellow" />
                <a href="tel:9491737399" className="hover:text-brand-yellow transition-colors">94917 37399</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-brand-yellow" />
                <a href="mailto:info@littlescholars.edu" className="hover:text-brand-yellow transition-colors truncate text-[11px] sm:text-xs">info@littlescholars.edu</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider and copyright panel */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-stone-400 text-center select-none">
          <p>
            &copy; {currentYear !== 2026 ? '2026 - ' + currentYear : '2026'} Little Scholars International Preschool. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Nurtured with</span>
            <Heart size={10} className="fill-brand-yellow stroke-brand-yellow animate-pulse" />
            <span>for future leaders.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
