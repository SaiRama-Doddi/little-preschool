export interface Program {
  id: string;
  name: string;
  badge: string;
  ageRange: string;
  duration: string;
  description: string;
  highlights: string[];
  colorTheme: string;
  iconName: string;
}

export interface WhyChooseUsFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  colorClass: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "classroom" | "activities" | "celebration" | "outdoor";
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childName: string;
  childClass: string;
  quote: string;
  rating: number;
  avatarUrl: string;
  date: string;
}

export interface ContactInquiry {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  programOfInterest: string;
  message: string;
}
