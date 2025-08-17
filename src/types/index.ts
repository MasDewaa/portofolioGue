// Core types for the portfolio application
export interface MenuItem {
  id: string;
  label: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  role: string;
  details: string;
  technologies: string[];
  achievements: string[];
  github: string;
  demo: string | null;
  icon: React.ReactNode;
  gradient: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'ml' | 'tools';
  icon: React.ReactNode;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  gradient: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  score?: string;
}

export interface Experience {
  organization: string;
  positions: {
    title: string;
    description: string;
  }[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    instagram: string;
  };
}

export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  publishedDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  url?: string;
}
