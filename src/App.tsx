import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import CampusLife from './components/CampusLife';
import LearningEnvironment from './components/LearningEnvironment';
import Admissions from './components/Admissions';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-cream overflow-x-hidden font-sans">
      {/* Dynamic Header */}
      <Header />

      {/* Main Core Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <CampusLife />
        <LearningEnvironment />
        <Admissions />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

