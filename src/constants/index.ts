import { MenuItem, Project, Skill, Achievement, Education, Experience, ContactInfo } from '../types';
import React from 'react';
import { Code, Cpu, Brain, Server, Database, Globe, Smartphone, Trophy, Star } from 'lucide-react';

// Personal Information
// Personal info is defined at the end of the file

export const MENU_ITEMS: MenuItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'articles', label: 'Articles' },
  { id: 'contact', label: 'Contact' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Seimbang.in',
    subtitle: 'Featured Project',
    description: 'Financial management application developed as a Bangkit Capstone project with cutting-edge Machine Learning and NLP technology.',
    role: 'Back-End & Machine Learning Developer',
    details: 'Developed OCR system with PaddleOCR, text parsing, NLP-based product classification, and fine-tuned Llama 3.2 for robo-advisor.',
    technologies: ['Python', 'FastAPI', 'Docker', 'PaddleOCR', 'Llama 3.2'],
    achievements: [
      'Top 50 Bangkit Product Track',
      '1st Place GENETIC USM 2025',
      '3rd Runner-Up UNITY UNY 2025'
    ],
    github: '#',
    demo: null,
    icon: React.createElement(Trophy, { className: "w-6 h-6" }),
    gradient: 'from-yellow-500 to-orange-600',
    featured: true
  },
  {
    title: 'Certify-NFT',
    subtitle: 'Web3 Platform',
    description: 'Web3 platform for creating, managing, and verifying digital certificates as NFTs on blockchain.',
    role: 'Front-End Developer',
    details: 'Developed user interface up to API integration stage with focus on intuitive user experience.',
    technologies: ['React', 'TypeScript', 'Web3', 'Blockchain'],
    achievements: [],
    github: '#',
    demo: null,
    icon: React.createElement(Star, { className: "w-6 h-6" }),
    gradient: 'from-indigo-500 to-purple-600'
  },
  {
    title: 'Batik Vision',
    subtitle: 'Machine Learning App',
    description: 'Web application for identifying Batik classes using Machine Learning with high accuracy.',
    role: 'Full-Stack & ML Developer',
    details: 'Developed model with TensorFlow (Transfer Learning), deployed with FastAPI & Docker, and built frontend with Next.js.',
    technologies: ['TensorFlow', 'FastAPI', 'Docker', 'Railway', 'Next.js', 'Vercel'],
    achievements: [],
    github: '#',
    demo: '#',
    icon: React.createElement(Brain, { className: "w-6 h-6" }),
    gradient: 'from-emerald-500 to-teal-600'
  }
];

export const OTHER_PROJECTS = [
  {
    title: 'BoikotSampah',
    description: 'Full-stack application for recycling with comprehensive management system.',
    technologies: ['Laravel', 'SQLite', 'Tailwind CSS'],
    github: '#'
  },
  {
    title: 'Hydroease',
    description: 'IoT-based hydroponic system with real-time monitoring and automatic control.',
    technologies: ['IoT', 'Blynk', 'Arduino'],
    github: '#'
  }
];

export const SKILLS: Skill[] = [
  // Machine Learning
  { name: 'TensorFlow', level: 90, category: 'ml', icon: React.createElement(Brain, { className: "w-5 h-5" }) },
  { name: 'Python', level: 95, category: 'ml', icon: React.createElement(Code, { className: "w-5 h-5" }) },
  { name: 'Scikit-learn', level: 85, category: 'ml', icon: React.createElement(Brain, { className: "w-5 h-5" }) },
  { name: 'Pandas', level: 90, category: 'ml', icon: React.createElement(Database, { className: "w-5 h-5" }) },
  
  // Backend
  { name: 'FastAPI', level: 90, category: 'backend', icon: React.createElement(Server, { className: "w-5 h-5" }) },
  { name: 'Laravel', level: 80, category: 'backend', icon: React.createElement(Server, { className: "w-5 h-5" }) },
  { name: 'Node.js', level: 75, category: 'backend', icon: React.createElement(Server, { className: "w-5 h-5" }) },
  { name: 'PostgreSQL', level: 80, category: 'backend', icon: React.createElement(Database, { className: "w-5 h-5" }) },
  
  // Frontend
  { name: 'React', level: 85, category: 'frontend', icon: React.createElement(Globe, { className: "w-5 h-5" }) },
  { name: 'TypeScript', level: 80, category: 'frontend', icon: React.createElement(Code, { className: "w-5 h-5" }) },
  { name: 'Next.js', level: 80, category: 'frontend', icon: React.createElement(Globe, { className: "w-5 h-5" }) },
  { name: 'Tailwind CSS', level: 90, category: 'frontend', icon: React.createElement(Globe, { className: "w-5 h-5" }) },
  
  // Tools
  { name: 'Docker', level: 85, category: 'tools', icon: React.createElement(Cpu, { className: "w-5 h-5" }) },
  { name: 'Git', level: 90, category: 'tools', icon: React.createElement(Code, { className: "w-5 h-5" }) },
  { name: 'Arduino', level: 80, category: 'tools', icon: React.createElement(Smartphone, { className: "w-5 h-5" }) },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'Bangkit 2024 Graduate',
    description: 'Machine Learning path graduate with distinction from Google-Tokopedia-Gojek-Traveloka program',
    icon: React.createElement(Trophy, { className: 'w-8 h-8' }),
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: '2',
    title: '15+ Projects Completed',
    description: 'Successfully delivered various ML and web development projects with modern technologies',
    icon: React.createElement(Code, { className: 'w-8 h-8' }),
    gradient: 'from-blue-400 to-purple-500'
  },
  {
    id: '3',
    title: 'IoT Innovation',
    description: 'Developed smart solutions combining hardware and software for real-world applications',
    icon: React.createElement(Cpu, { className: 'w-8 h-8' }),
    gradient: 'from-green-400 to-blue-500'
  },
  {
    id: '4',
    title: 'Testing',
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    icon: React.createElement(Cpu, { className: 'w-8 h-8' }),
    gradient: 'from-green-400 to-blue-500'
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'Amikom University Yogyakarta',
    degree: 'Bachelor of Informatics',
    period: '2022 - Present',
    gpa: '3.91/4.00'
  },
  {
    institution: 'SMA Negeri 1 Sragen',
    degree: 'Science Major',
    period: '2019 - 2022',
    score: '88/100'
  }
];

export const EXPERIENCE: Experience = {
  organization: 'Amikom Computer Club',
  positions: [
    {
      title: 'HRD (Human Resource Development)',
      description: 'Responsible for organizational human resource development, managing training programs, and facilitating member soft skill development to improve the collective quality of the organization.'
    },
    {
      title: 'IoT Division Mentor',
      description: 'Guiding and teaching members in Internet of Things technology, from electronics fundamentals to complex IoT system implementation. Developing learning curriculum and facilitating practical projects.'
    }
  ]
};

export const CONTACT_INFO: ContactInfo = {
  email: 'rama.syailana@example.com',
  phone: '+62 123 456 7890',
  location: 'Yogyakarta, Indonesia',
  social: {
    github: 'https://github.com/ramasya',
    linkedin: 'https://linkedin.com/in/ramasya',
    instagram: 'https://instagram.com/ramasya'
  }
};

export const PERSONAL_INFO = {
  name: 'Rama Syailana Dewa',
  title: 'Machine Learning & Back-End Developer',
  subtitle: 'Informatics Student at Amikom University',
  description: 'Informatics student with high enthusiasm for Machine Learning, IoT, and Back-End development. Bangkit 2024 graduate with distinction who is passionate about building innovative data solutions.',
  vision: 'My vision is to become a developer who can create technology solutions that are not only technically innovative, but also provide real impact for society. I am committed to continuously learning and growing in the dynamic technology ecosystem, and contributing to building a smarter future through the implementation of Machine Learning and other cutting-edge technologies.'
};
