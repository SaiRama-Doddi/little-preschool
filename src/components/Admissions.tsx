import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Phone, Mail, Baby, FileText, Send, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';
import { ContactInquiry } from '../types';

export default function Admissions() {
  // Let the target countdown date be June 30, 2026 (Enrollment final cutoff)
  const targetDate = new Date('2026-06-30T23:59:59');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isOver: false
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  // Inquiry Form state
  const [formData, setFormData] = useState<ContactInquiry>({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    programOfInterest: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validations
    if (!formData.parentName || !formData.phone || !formData.childName || !formData.programOfInterest) {
      setFormStatus('error');
      setErrorMessage('Please fill in all mandatory fields (*)');
      return;
    }

    setFormStatus('submitting');

    // Simulate standard fast asynchronous API transaction
    setTimeout(() => {
      setFormStatus('success');
      // local persistence support if desired
      const currentInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
      currentInquiries.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('inquiries', JSON.stringify(currentInquiries));
      
      // Reset form fields
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        programOfInterest: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="admissions" className="py-20 lg:py-28 bg-[#FFFDF7] relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 left-1/10 w-[350px] h-[350px] bg-brand-yellow/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-brand-blue/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Interactive admissions instructions & countdown */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 text-left bg-gradient-to-br from-brand-blue to-brand-blue-hover text-white p-8 sm:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-brand-yellow rounded-full opacity-10 filter blur-xl" />
            <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-white rounded-full opacity-5 filter blur-lg" />

            <div className="space-y-4">
              <span className="bg-white/10 border border-white/20 text-brand-yellow font-brand font-black text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block shadow-sm">
                🔥 Seat Allotment Active
              </span>
              <h2 className="font-brand text-4xl sm:text-5xl font-black tracking-tighter leading-none">
                Admissions Open <br />
                <span className="text-brand-yellow">Batch 2025-2026</span>
              </h2>
              <p className="text-neutral-200 text-sm font-sans leading-relaxed">
                Little Scholars limits batch strength to keep a highly targeted, stress-free 1:8 teacher-student ratio. Join our safety circles soon!
              </p>
            </div>

            {/* Pulsing Limited Seats Warning */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3.5 border border-white/10">
              <div className="p-2 bg-brand-yellow text-brand-blue rounded-xl animate-bounce shrink-0">
                <AlertTriangle size={20} />
              </div>
              <div className="text-left font-sans text-xs">
                <span className="font-bold text-brand-yellow uppercase tracking-wide block">Only 12 Seats Left!</span>
                <span className="opacity-80">Remaining vacancies are allocated strictly on a first-come, first-registered basis.</span>
              </div>
            </div>

            {/* Countdown timer container */}
            <div className="space-y-4">
              <h3 className="font-brand font-black text-sm tracking-widest uppercase text-brand-yellow text-left">
                Enrollment Ends In
              </h3>
              
              <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-sm">
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hrs' },
                  { value: timeLeft.minutes, label: 'Mins' },
                  { value: timeLeft.seconds, label: 'Secs' }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-white/5 relative overflow-hidden group">
                      <div className="absolute inset-x-0 top-0 h-1/2 bg-neutral-50/50" />
                      <span className="font-brand font-black text-xl sm:text-2xl text-brand-blue relative z-10">
                        {String(item.value).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-brand font-bold text-neutral-300 mt-2 tracking-wide font-sans">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core instructions block */}
            <div className="pt-6 border-t border-white/10 space-y-3 font-sans text-xs opacity-90">
              <p className="font-bold text-brand-yellow uppercase tracking-wide">Quick Admissions Ladder:</p>
              <div className="flex gap-2 items-center">
                <span className="inline-block w-5 h-5 rounded-full bg-white/20 text-center font-bold font-brand text-xs">1</span>
                <span>Dispatch digital inquiry form in 60 seconds</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="inline-block w-5 h-5 rounded-full bg-white/20 text-center font-bold font-brand text-xs">2</span>
                <span>Caring desk officer calls you for slot schedule validation</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="inline-block w-5 h-5 rounded-full bg-white/20 text-center font-bold font-brand text-xs">3</span>
                <span>Confirm enrollment on beautiful physical campus round</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Inquiry Form Setup */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 lg:p-12 rounded-[40px] border border-gray-100 shadow-xl text-left relative">
            <div className="space-y-2 mb-8">
              <h3 className="font-brand font-black text-2xl text-brand-blue">
                Quick Enquiry Form
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-sans">
                Type details below to book parent interaction sessions. Our help desk will ring you back inside 2 operating hours.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 px-6 text-center space-y-4 flex flex-col items-center justify-center"
                >
                  <div className="p-4 bg-emerald-50 text-emerald-500 rounded-full animate-bounce">
                    <CheckCircle2 size={44} />
                  </div>
                  <h4 className="font-brand font-black text-xl text-brand-blue">Inquiry Sent Successfully!</h4>
                  <p className="text-gray-600 text-sm max-w-sm mx-auto font-sans">
                    Thank you! We have logged your details. A certified Admissions executive Counselor will contact you via phone or WhatsApp shortly to coordinate your safe campus visit.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 px-6 py-2.5 bg-brand-blue text-white rounded-xl hover:bg-brand-blue-hover transition-colors font-brand font-bold text-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-sans text-left">
                  {formStatus === 'error' && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3.5 rounded-xl flex items-center gap-2.5 text-xs">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Two columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Parent Name */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="parentName" className="text-xs font-bold text-gray-700 block">
                        Parent's Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <User size={16} />
                        </span>
                        <input
                          type="text"
                          id="parentName"
                          name="parentName"
                          required
                          value={formData.parentName}
                          onChange={handleInputChange}
                          className="w-full bg-[#FFFDF7] pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm transition-all"
                          placeholder="e.g. Rajesh Kumar"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="phone" className="text-xs font-bold text-gray-700 block">
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Phone size={16} />
                        </span>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-[#FFFDF7] pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm transition-all"
                          placeholder="e.g. 94928 48489"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="email" className="text-xs font-bold text-gray-700 block">
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Mail size={16} />
                        </span>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-[#FFFDF7] pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm transition-all"
                          placeholder="e.g. parent@mail.com"
                        />
                      </div>
                    </div>

                    {/* Child Name */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="childName" className="text-xs font-bold text-gray-700 block">
                        Child's Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Baby size={16} />
                        </span>
                        <input
                          type="text"
                          id="childName"
                          name="childName"
                          required
                          value={formData.childName}
                          onChange={handleInputChange}
                          className="w-full bg-[#FFFDF7] pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm transition-all"
                          placeholder="e.g. Ananya Kumar"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Child Age / DOB */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="childAge" className="text-xs font-bold text-gray-700 block">
                        Approx Child Age
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Calendar size={16} />
                        </span>
                        <select
                          id="childAge"
                          name="childAge"
                          value={formData.childAge}
                          onChange={handleInputChange}
                          className="w-full bg-[#FFFDF7] pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm transition-all appearance-none"
                        >
                          <option value="">Select approx age range</option>
                          <option value="1.5-2.5">1.5 – 2.5 Years</option>
                          <option value="2.5-3.5">2.5 – 3.5 Years</option>
                          <option value="3.5-4.5">3.5 – 4.5 Years</option>
                          <option value="4.5-5.5">4.5 – 5.5 Years</option>
                          <option value="5.5+">5.5+ Years</option>
                        </select>
                      </div>
                    </div>

                    {/* Program of Interest */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="programOfInterest" className="text-xs font-bold text-gray-700 block">
                        Program of Interest <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <CheckCircle2 size={16} />
                        </span>
                        <select
                          id="programOfInterest"
                          name="programOfInterest"
                          required
                          value={formData.programOfInterest}
                          onChange={handleInputChange}
                          className="w-full bg-[#FFFDF7] pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm transition-all appearance-none"
                        >
                          <option value="">Select interest track</option>
                          <option value="Day Care">Day Care</option>
                          <option value="Play Group">Play Group</option>
                          <option value="Nursery">Nursery</option>
                          <option value="Junior KG">Junior KG</option>
                          <option value="Senior KG">Senior KG</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="message" className="text-xs font-bold text-gray-700 block">
                      Parent Messages / Additional Notes
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-4 text-gray-400">
                        <FileText size={16} />
                      </span>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-[#FFFDF7] pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm transition-all"
                        placeholder="Tell us about your child's specific requirements, sleep patterns, etc."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-4 px-6 rounded-xl font-brand font-extrabold text-base transition-all duration-300 shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/30 flex items-center justify-center gap-2 transform active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Submit Online Enrollment Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
