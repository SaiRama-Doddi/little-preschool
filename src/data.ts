import { Program, WhyChooseUsFeature, GalleryItem, Testimonial } from './types';

export const PROGRAMS: Program[] = [
  {
    id: 'day-care',
    name: 'Day Care',
    badge: '1.5 - 10 Years',
    ageRange: '1.5 Years & Above',
    duration: '08:30 AM - 06:30 PM',
    description: 'A premium, home-away-from-home care environment. Our day care is safe, dynamic, and focused on healthy routines, safe play, sleeping patterns, and caring attention.',
    highlights: [
      'Nutritious meal assistance & hygienic kitchens',
      'Dedicated nap areas with clean bedding',
      'Safe learning materials & sensory toys',
      'Constant CCTV surveillance & live updates'
    ],
    colorTheme: 'bg-[#FFEBEE] border-[#FFCDD2] text-[#C62828] hover:shadow-[#FFCDD2]/50',
    iconName: 'Baby'
  },
  {
    id: 'play-group',
    name: 'Play Group',
    badge: '2.0 - 3.0 Years',
    ageRange: '2.0 - 3.0 Years',
    duration: '09:00 AM - 12:00 PM',
    description: 'Nurturing curiosity through unstructured Play. Focus on fine motor development, socialization, sensory bins, and gentle guidance into classroom routines.',
    highlights: [
      'Sensory-based learning & sand-play zones',
      'Basic language foundations & rhymes',
      'Sharing, empathy, and social cooperation',
      'Tons of interactive toys & fun building blocks'
    ],
    colorTheme: 'bg-[#E3F2FD] border-[#BBDEFB] text-[#1565C0] hover:shadow-[#BBDEFB]/50',
    iconName: 'Smile'
  },
  {
    id: 'nursery',
    name: 'Nursery',
    badge: '3.0 - 4.0 Years',
    ageRange: '3.0 - 4.0 Years',
    duration: '09:00 AM - 12:30 PM',
    description: 'The first step into formal learning. Our comprehensive Nursery curriculum covers pre-reading, pre-writing, early tracing, phonic sounds, and creative expression.',
    highlights: [
      'Phonics recognition & vocabulary exploration',
      'Early pencil grip & pattern tracing exercises',
      'Interactive art, paper crafting & clay modeling',
      'Basic numbers & counting through music'
    ],
    colorTheme: 'bg-[#FFF3E0] border-[#FFE0B2] text-[#E65100] hover:shadow-[#FFE0B2]/50',
    iconName: 'Palette'
  },
  {
    id: 'junior-kg',
    name: 'Junior KG',
    badge: '4.0 - 5.0 Years',
    ageRange: '4.0 - 5.0 Years',
    duration: '09:00 AM - 01:00 PM',
    description: 'Unlocking academic and critical thinking potential. We transition kids into complex phonic words, comparative science, interactive matching, and structured team sports.',
    highlights: [
      'Three-letter phonic words & early sight reading',
      'Basic mathematical concepts like addition models',
      'Hands-on simple science experiments & nature walks',
      'Bilingual speaking confidence & general knowledge'
    ],
    colorTheme: 'bg-[#E8F5E9] border-[#C8E6C9] text-[#2E7D32] hover:shadow-[#C8E6C9]/50',
    iconName: 'Sparkles'
  },
  {
    id: 'senior-kg',
    name: 'Senior KG',
    badge: '5.0 - 6.0 Years',
    ageRange: '5.0 - 6.0 Years',
    duration: '09:00 AM - 01:00 PM',
    description: 'Transitioning confidently to primary school frameworks. Senior KG builds strong sentence construction, arithmetic bases, analytical reasoning, and team-leading roles.',
    highlights: [
      'Fluent reading of beginner storybooks',
      'Single-digit arithmetic & basic logic reasoning',
      'Public speaking, stage presentations & theater play',
      'Advanced general awareness & environmental care'
    ],
    colorTheme: 'bg-[#F3E5F5] border-[#E1BEE7] text-[#6A1B9A] hover:shadow-[#E1BEE7]/50',
    iconName: 'GraduationCap'
  }
];

export const FEATURES: WhyChooseUsFeature[] = [
  {
    id: 'digital-classes',
    title: 'Digital Classrooms',
    description: 'Smart animated projections and visual storytelling tablets let children visually absorb math, phonics, and science concepts dynamically.',
    iconName: 'Tv',
    colorClass: 'text-[#373A98] bg-[#373A98]/10'
  },
  {
    id: 'cctv',
    title: 'CCTV Surveillance',
    description: 'Comprehensive 100% video coverage in play zones, standard classrooms, and corridors. High-grade security guards ensure a premium safety ring.',
    iconName: 'ShieldCheck',
    colorClass: 'text-emerald-600 bg-emerald-50'
  },
  {
    id: 'hygiene',
    title: 'Safe & Hygienic Campus',
    description: 'Child-proofed rounded furniture edges, daily multi-stage hospital-grade sanitization, and ultra-safe toddlers washrooms.',
    iconName: 'HeartHandshake',
    colorClass: 'text-amber-600 bg-amber-50'
  },
  {
    id: 'teachers',
    title: 'Experienced Teachers',
    description: 'A stellar, international-grade team of teachers trained in early childhood care and Montessori methodologies with a loving, caring attitude.',
    iconName: 'Users',
    colorClass: 'text-blue-600 bg-blue-50'
  },
  {
    id: 'ventilation',
    title: 'Fully Ventilated Premises',
    description: 'Sunlit, spacious interactive learning rooms. Fully ventilated air and central air-conditioning provide a comfortable, dust-free environment.',
    iconName: 'Wind',
    colorClass: 'text-[#23B5D3] bg-[#23B5D3]/10'
  },
  {
    id: 'activities',
    title: 'Activity-Based Learning',
    description: 'Hands-on sensory bins, puzzle matches, clay sculpting, theater, gardening, and music sessions keep learning absolutely joyful and practical.',
    iconName: 'Gamepad2',
    colorClass: 'text-purple-600 bg-purple-50'
  },
  {
    id: 'holistic',
    title: 'Holistic Child Development',
    description: 'A curriculum designed to advance fine motor skills, emotional resilience, bilingual language command, social sharing, and logic.',
    iconName: 'Sprout',
    colorClass: 'text-[#E15B5B] bg-[#E15B5B]/10'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Collaborative Block Building',
    category: 'classroom',
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800',
    description: 'Learning structural physics and cooperation with colorful geometric wooden blocks.'
  },
  {
    id: 'gal-2',
    title: 'Storytelling Circle Time',
    category: 'activities',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    description: 'Immersive imagination trips guided by our certified language teachers.'
  },
  {
    id: 'gal-3',
    title: 'Expressive Watercolor Painting',
    category: 'activities',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
    description: 'Nurturing tactile creativity and color theory through fingers and brush craft.'
  },
  {
    id: 'gal-4',
    title: 'Rhythmic Music and Movement',
    category: 'celebration',
    imageUrl: 'https://images.unsplash.com/photo-1472248524440-d2a53cf0c392?auto=format&fit=crop&q=80&w=800',
    description: 'Singing phonics and practicing motor synchronization in our acoustic music hall.'
  },
  {
    id: 'gal-5',
    title: 'Fine Motor Geometric Play',
    category: 'classroom',
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800',
    description: 'Developing spatial reasoning and patience with natural wood puzzles.'
  },
  {
    id: 'gal-6',
    title: 'Annual Performance & Graduation',
    category: 'celebration',
    imageUrl: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=800',
    description: 'Pre-school graduates celebrating their milestone transition to primary schools.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    parentName: 'Dr. Sneha Rao',
    childName: 'Vihaan Rao',
    childClass: 'Junior KG',
    quote: 'We are incredibly amazed by the individual care Vihaan receives! His phonics pronunciations and social confidence have skyrocketed since joining. The campus hygiene standard is absolutely exceptional!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    date: '2 months ago'
  },
  {
    id: 'test-2',
    parentName: 'Mr. Rajesh Kumar',
    childName: 'Ananya Kumar',
    childClass: 'Play Group',
    quote: 'Finding a preschool with absolute hygiene and loving teachers was our topmost priority. Little Scholars has exceeded every single one of our expectations. The real-time CCTV transparency is brilliant!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    date: '1 month ago'
  },
  {
    id: 'test-3',
    parentName: 'Mrs. Priya Patel',
    childName: 'Arav Patel',
    childClass: 'Senior KG',
    quote: 'Arav has been thoroughly prepared for formal school layout at Little Scholars! He easily reads small storybooks, understands key math blocks, and is extremely motivated to run to school every single morning.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    date: '3 weeks ago'
  }
];
