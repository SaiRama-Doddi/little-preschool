import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY } from '../data';
import { GalleryItem } from '../types';

export default function CampusLife() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const categories = [
    { label: 'All Snaps', value: 'all' },
    { label: 'Classrooms', value: 'classroom' },
    { label: 'Activities', value: 'activities' },
    { label: 'Celebrations', value: 'celebration' }
  ];

  // Filter gallery items
  const filteredItems = activeTab === 'all'
    ? GALLERY
    : GALLERY.filter(item => item.category === activeTab);

  const openLightbox = (item: GalleryItem, originalIndex: number) => {
    setSelectedImage(item);
    setSelectedIndex(originalIndex);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedIndex(-1);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    let prevIndex = selectedIndex - 1;
    if (prevIndex < 0) {
      prevIndex = filteredItems.length - 1;
    }
    setSelectedIndex(prevIndex);
    setSelectedImage(filteredItems[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    let nextIndex = selectedIndex + 1;
    if (nextIndex >= filteredItems.length) {
      nextIndex = 0;
    }
    setSelectedIndex(nextIndex);
    setSelectedImage(filteredItems[nextIndex]);
  };

  // Keyboard navigation for Lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrev(e as any);
      if (e.key === 'ArrowRight') handleNext(e as any);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, selectedImage, filteredItems]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-brand-blue font-brand font-black text-xs uppercase tracking-widest bg-[#373A9812] border border-[#373A9830] py-1.5 px-4 rounded-full inline-block shadow-sm">
            ✨ Our Happy Moments
          </span>
          <h2 className="font-brand text-4xl sm:text-5xl text-brand-blue font-black tracking-tighter leading-none">
            Explore Campus Life At <br />
            <span className="text-brand-yellow">Little Scholars</span>
          </h2>
          <p className="text-gray-600 font-sans text-base max-w-2xl mx-auto">
            A visual record of happy classroom interactions, creative craft projects, sensory plays, and standard annual celebrations.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveTab(cat.value)}
              className={`px-5 py-2.5 rounded-full font-brand text-xs font-extrabold transition-all duration-300 transform active:scale-95 cursor-pointer ${
                activeTab === cat.value
                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20'
                  : 'bg-brand-cream text-gray-600 hover:bg-brand-blue/5 border border-brand-blue/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative cursor-pointer overflow-hidden rounded-[24px] bg-brand-cream border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3] flex flex-col justify-end"
                onClick={() => openLightbox(item, index)}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Color Overlay and Icons */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left" />

                {/* Image Zoom Icon */}
                <div className="absolute top-4 right-4 p-2.5 bg-white/95 backdrop-blur-xs rounded-xl shadow-md text-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ZoomIn size={16} />
                </div>

                {/* Caption context inside hover */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white text-left opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                  <span className="text-[9px] uppercase tracking-widest font-black text-brand-yellow font-brand">
                    {item.category}
                  </span>
                  <h3 className="font-brand font-black text-base mt-1 line-clamp-1">{item.title}</h3>
                  <p className="text-[11px] font-sans text-white/80 line-clamp-1 mt-0.5">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="py-20 flex flex-col items-center justify-center space-y-4 text-center">
            <div className="p-4 bg-brand-cream text-gray-400 rounded-2xl">
              <ImageIcon size={32} />
            </div>
            <p className="font-brand font-bold text-gray-500">No snapshots found under this category yet.</p>
          </div>
        )}

        {/* Lightbox Modal Carousel Overlay */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-neutral-900/95 backdrop-blur-md z-50 flex flex-col justify-between p-4 sm:p-8"
              onClick={closeLightbox}
            >
              {/* Lightbox Controls Top */}
              <div className="flex items-center justify-between w-full text-white z-10">
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-white/10 rounded-xl">
                    <ImageIcon size={18} className="text-brand-yellow" />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase font-black text-brand-yellow tracking-widest leading-none">Little Scholars Gallery</span>
                    <p className="text-xs text-stone-400 leading-none mt-1">Snapshot {selectedIndex + 1} of {filteredItems.length}</p>
                  </div>
                </div>

                <button
                  onClick={closeLightbox}
                  className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Lightbox Image Container + Controls */}
              <div className="relative flex-1 flex items-center justify-center max-h-[75vh]" onClick={(e) => e.stopPropagation()}>
                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-6 p-3 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all z-20 cursor-pointer"
                  aria-label="Previous Image"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Main Render Image */}
                <motion.img
                  key={selectedImage.imageUrl}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl relative border-2 border-white/5"
                  referrerPolicy="no-referrer"
                />

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-6 p-3 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all z-20 cursor-pointer"
                  aria-label="Next Image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Lightbox Image Captions Bottom */}
              <div className="bg-neutral-800/80 max-w-2xl mx-auto w-full p-5 rounded-2xl text-center border border-white/10 text-white z-10" onClick={(e) => e.stopPropagation()}>
                <span className="text-[10px] uppercase font-black text-brand-yellow tracking-wider font-brand px-2.5 py-1 bg-white/5 border border-white/10 rounded-full inline-block">
                  {selectedImage.category}
                </span>
                <h3 className="font-brand font-black text-lg sm:text-xl mt-3 text-white leading-none">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-stone-300 mt-2 max-w-lg mx-auto">
                  {selectedImage.description}
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
