/**
 * Core TypeScript interfaces for DFIR Portfolio
 */

export type ProjectCategory = 'forensics' | 'malware' | 'incident-response' | 'automation' | 'research';

export type PortfolioSection = 'forensics' | 'website-designing' | 'development';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  portfolioSection: PortfolioSection;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  camera?: string;
  location?: string;
  slug: string;
  tools?: string[];
  link?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface PhotographerInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  awards: string[];
  clients: string[];
  education: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    behance?: string;
    github?: string;
  };
  portraitImage: string;
  resumeUrl?: string;
  experience?: ExperienceItem[];
  certifications?: string[];
  skills?: { category: string; items: string[] }[];
  openToRoles?: string[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'editorial' | 'commercial' | 'personal';
  message: string;
  timestamp: Date;
}
