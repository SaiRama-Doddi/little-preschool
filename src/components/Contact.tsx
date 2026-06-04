import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2, Navigation, MessageSquarePlus } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1200);
  };

  // WhatsApp helper link
  const whatsappUrl = `https://wa.me/919492848489?text=Hello%2520Little%2520Scholars%2520Preschool%252C%2520I%2520am%2520interested%2520in%2520booking%2520a%252520visit%2520or%2520enquiring%2520about%2520admission!`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-yellow/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-brand-blue font-brand font-black text-xs uppercase tracking-widest bg-[#373A9812] border border-[#373A9830] py-1.5 px-4 rounded-full inline-block shadow-sm">
            ✨ Get In Touch
          </span>
          <h2 className="font-brand text-4xl sm:text-5xl text-brand-blue font-black tracking-tighter leading-none">
            Schedule a Visit or <br />
            <span className="text-brand-yellow">Ring Our Help Desk</span>
          </h2>
          <p className="text-gray-600 font-sans text-base max-w-2xl mx-auto">
            We are always happy to hear from parents! Book campus tours or drop any question regarding your toddler's routines.
          </p>
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Coordinates details & Google Maps */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Coordinates list */}
            <div className="space-y-6">
              
              {/* Address card */}
              <div className="flex gap-4 items-start bg-brand-cream/80 p-5 rounded-2xl border border-[#373A98]/10 shadow-sm">
                <div className="p-3 bg-brand-blue text-white rounded-xl">
                  <MapPin size={22} className="stroke-brand-yellow" />
                </div>
                <div className="space-y-1 font-sans">
                  <h4 className="font-brand font-black text-sm text-[#373A98]">Preschool Address</h4>
                  <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                    Plot No: 14, Kalki Nagar, Near Kerala Building, Thotapalem Road, Srikakulam – 532005
                  </p>
                </div>
              </div>

              {/* Call card */}
              <div className="flex gap-4 items-start bg-brand-cream/80 p-5 rounded-2xl border border-[#373A98]/10 shadow-sm">
                <div className="p-3 bg-brand-blue text-white rounded-xl">
                  <Phone size={22} className="stroke-brand-yellow" />
                </div>
                <div className="space-y-1 font-sans">
                  <h4 className="font-brand font-black text-sm text-[#373A98]">Telephone Lines</h4>
                  <div className="flex flex-col gap-1 mt-1 text-xs sm:text-sm font-bold text-gray-700">
                    <a href="tel:9492848489" className="hover:text-brand-blue transition-colors">94928 48489</a>
                    <a href="tel:9491737399" className="hover:text-brand-blue transition-colors">94917 37399</a>
                  </div>
                </div>
              </div>

              {/* Operating hours */}
              <div className="flex gap-4 items-start bg-brand-cream/80 p-5 rounded-2xl border border-[#373A98]/10 shadow-sm">
                <div className="p-3 bg-brand-blue text-white rounded-xl">
                  <Clock size={22} className="stroke-brand-yellow" />
                </div>
                <div className="space-y-1 font-sans">
                  <h4 className="font-brand font-black text-sm text-[#373A98]">Operating Hours</h4>
                  <p className="text-xs sm:text-sm text-gray-700 font-semibold">
                    Monday – Saturday: 08:30 AM – 06:30 PM
                  </p>
                  <p className="text-[10px] text-gray-500">Sundays & Public holidays: Closed</p>
                </div>
              </div>

            </div>

            {/* Direct Instant WhatsApp CTA Link button */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-brand font-extrabold text-sm rounded-2xl shadow-lg shadow-emerald-500/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageCircle size={20} fill="currentColor" />
                <span>Chat via Official WhatsApp</span>
              </a>
            </div>

            {/* Google map iframe */}
            <div className="relative rounded-[32px] overflow-hidden border-2 border-[#373A98]/10 h-[260px] shadow-lg bg-gray-50">
              <iframe
                title="Little Scholars Srikakulam Google Map"
                src="https://maps.google.com/maps?q=Plot%20No%2014,%20Kalki%20Nagar,%20Thotapalem%20Road,%20Srikakulam%20532005&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Overlay visual badge */}
              <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-xs py-1.5 px-3.5 rounded-xl text-[11px] font-brand font-extrabold text-brand-blue shadow-md flex items-center gap-1.5 hover:bg-white transition-colors">
                <Navigation size={12} className="text-brand-yellow fill-brand-yellow" />
                <span>Srikakulam Campus Pin</span>
              </div>
            </div>

          </div>

          {/* Right Column: General Contact Mail Message form */}
          <div className="lg:col-span-7 bg-brand-cream/80 p-6 sm:p-10 lg:p-12 rounded-[45px] border border-brand-blue/5 shadow-xl text-left relative">
            <div className="mb-8">
              <h3 className="font-brand font-black text-2xl text-brand-blue">
                Send A Quick Message
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-sans mt-2 leading-relaxed">
                Have specific concerns, suggestions, or career inquiries? Complete the quick panel below to dispatch.
              </p>
            </div>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4 flex flex-col items-center justify-center"
              >
                <div className="p-4 bg-emerald-50 text-emerald-500 rounded-full animate-bounce">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="font-brand font-black text-xl text-brand-blue">Message Dispatched!</h4>
                <p className="text-gray-600 text-xs sm:text-sm max-w-sm font-sans mx-auto leading-relaxed">
                  Excellent! We have received your query message file. An administrator on our campus will follow up with you shortly via the contact coordination loops you provided.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2.5 bg-brand-blue text-white rounded-xl hover:bg-brand-blue-hover transition-colors font-brand font-bold text-xs"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                
                {/* Full name input */}
                <div className="space-y-1 text-left">
                  <label htmlFor="name" className="text-xs font-bold text-gray-700 block">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white pr-4 pl-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-xs sm:text-sm transition-all"
                    placeholder="e.g. Snehitha Murthy"
                  />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="contactEmail" className="text-xs font-bold text-gray-700 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white pr-4 pl-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-xs sm:text-sm transition-all"
                      placeholder="e.g. yourname@mail.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="contactPhone" className="text-xs font-bold text-gray-700 block">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white pr-4 pl-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-xs sm:text-sm transition-all"
                      placeholder="e.g. 94917 37399"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1 text-left">
                  <label htmlFor="subject" className="text-xs font-bold text-gray-700 block">
                    Subject Heading
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-white pr-4 pl-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-xs sm:text-sm transition-all"
                    placeholder="e.g. Transport service queries, Fees structures"
                  />
                </div>

                {/* Message body */}
                <div className="space-y-1 text-left">
                  <label htmlFor="contactMessage" className="text-xs font-bold text-gray-700 block">
                    Message Content <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white pr-4 pl-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-xs sm:text-sm transition-all resize-none"
                    placeholder="Type details of your question here..."
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-3 px-6 rounded-xl font-brand font-extrabold text-sm transition-all duration-300 shadow-md shadow-brand-blue/10 flex items-center justify-center gap-2 cursor-pointer transform active:scale-98"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending message file...</span>
                      </>
                    ) : (
                      <>
                        <MessageSquarePlus size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
