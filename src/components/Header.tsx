import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, ClipboardList } from 'lucide-react';
import LittleScholarsLogo from './LittleScholarsLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Why Little Scholars', href: '#why-us' },
    { label: 'Campus Life', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner with minimal contact info */}
      <div className="w-full bg-brand-blue text-white text-xs py-2 px-4 flex flex-wrap justify-between items-center z-50 relative gap-2 font-sans">
        <div className="flex items-center gap-4 mx-auto sm:mx-0">
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-yellow animate-ping"></span>
            <span className="text-brand-yellow font-bold uppercase tracking-widest text-[10px]">Admissions Open 2025-26</span>
          </span>
          <span className="hidden sm:inline opacity-75">| Inspiring Future Leaders</span>
        </div>
        <div className="flex items-center gap-4 mx-auto sm:mx-0">
          <a href="tel:9492848489" className="flex items-center gap-1 hover:text-brand-yellow font-medium transition-colors">
            <Phone size={12} />
            <span>94928 48489</span>
          </a>
          <a href="tel:9491737399" className="hidden md:flex items-center gap-1 hover:text-brand-yellow font-medium transition-colors">
            <Phone size={12} />
            <span>94917 37399</span>
          </a>
        </div>
      </div>

      {/* Main Bar */}
      <header
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-brand-blue/5'
            : 'bg-[#FFFDF7]/70 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with link to top */}
          <a href="#home" onClick={(e) => handleScrollToSection(e, '#home')} className="flex items-center">
            <LittleScholarsLogo size="sm" showText={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className="font-brand font-semibold text-gray-700 hover:text-brand-blue text-sm transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="text-brand-blue border-2 border-brand-blue/30 hover:border-brand-blue font-brand font-bold text-sm px-4 py-2 rounded-xl transition-all duration-300"
            >
              Visit Campus
            </a>
            <a
              href="#admissions"
              onClick={(e) => handleScrollToSection(e, '#admissions')}
              className="bg-brand-blue hover:bg-brand-blue-hover text-white font-brand font-bold text-sm px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <ClipboardList size={16} />
              <span>Apply Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-brand-blue hover:bg-brand-blue/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-b border-brand-blue/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="font-brand font-bold text-gray-700 hover:text-brand-blue px-3 py-2.5 rounded-xl hover:bg-brand-blue/5 block text-base transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-3 px-3">
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollToSection(e, '#contact')}
                    className="w-full text-center text-brand-blue border-2 border-brand-blue/30 py-2.5 rounded-xl font-brand font-bold text-sm"
                  >
                    Visit Campus
                  </a>
                  <a
                    href="#admissions"
                    onClick={(e) => handleScrollToSection(e, '#admissions')}
                    className="w-full text-center bg-brand-blue hover:bg-brand-blue-hover text-white py-3 rounded-xl font-brand font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <ClipboardList size={18} />
                    <span>Apply Now 2025-26</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
