export interface NavLink {
  label: string;
  route: string;
  fragment?: string;
  icon?: string;
  children?: NavLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  title: string;
  typingRoles: string[];
  techStack: string[];
  description: string;
  image: string;
  cvUrl: string;
  stats: HeroStat[];
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface AboutData {
  image: string;
  biography: string;
  mission: string;
  vision: string;
  goals: string[];
  personalInfo: PersonalInfo;
  timeline: TimelineItem[];
}

export interface PersonalInfo {
  location: string;
  email: string;
  phone: string;
  languages: string[];
  nationality: string;
  availability: string;
  freelancerStatus: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  status: 'Completed' | 'In Progress' | 'Archived';
  githubUrl: string;
  liveUrl: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description: string;
  courses: string[];
}

export interface Certificate {
  id: number;
  title: string;
  institution: string;
  date: string;
  image: string;
  downloadUrl: string;
}

export interface Statistic {
  id: number;
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  review: string;
  rating: number;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  url: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  whatsapp: string;
  mapEmbedUrl: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  skills: SkillCategory[];
  services: Service[];
  projects: Project[];
  gallery: GalleryItem[];
  experience: Experience[];
  education: Education[];
  certificates: Certificate[];
  statistics: Statistic[];
  testimonials: Testimonial[];
  blog: BlogPost[];
  contact: ContactInfo;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
}
