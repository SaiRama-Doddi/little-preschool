import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Star, Sparkles, Pencil, GraduationCap, Palette } from 'lucide-react';

interface FloatingElementProps {
  type: 'book' | 'star' | 'sparkle' | 'pencil' | 'cap' | 'palette';
  delay?: number;
  duration?: number;
  className?: string;
  size?: number;
}

const iconMap = {
  book: BookOpen,
  star: Star,
  sparkle: Sparkles,
  pencil: Pencil,
  cap: GraduationCap,
  palette: Palette
};

const colorMap = {
  book: 'text-[#23B5D3] opacity-15',
  star: 'text-[#F4B223] opacity-20',
  sparkle: 'text-[#F4B223] opacity-25',
  pencil: 'text-[#E15B5B] opacity-15',
  cap: 'text-[#373A98] opacity-15',
  palette: 'text-purple-400 opacity-15'
};

export default function FloatingElement({
  type,
  delay = 0,
  duration = 6,
  className = '',
  size = 40
}: FloatingElementProps) {
  const IconComponent = iconMap[type];
  const colorClass = colorMap[type];

  // Random motion paths for authentic preschool fluidity
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className} ${colorClass}`}
      initial={{ y: 0, x: 0, rotate: 0 }}
      animate={{
        y: [0, -35, 10, -20, 0],
        x: [0, 15, -15, 10, 0],
        rotate: [0, 15, -15, 10, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay: delay
      }}
      style={{ width: size, height: size }}
    >
      <IconComponent size={size} strokeWidth={1.5} />
    </motion.div>
  );
}
