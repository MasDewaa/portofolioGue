import { Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

// Status configuration
export const statusConfig = {
  text: "Available for opportunities",
  variant: "available" as const
};

// Stats data
export const statsData = [
  {
    value: "15+",
    label: "Projects",
    color: "blue" as const,
    showOnMobile: false
  },
  {
    value: "3+",
    label: "Years",
    color: "purple" as const,
    showOnMobile: true
  },
  {
    value: "100%",
    label: "Quality",
    color: "green" as const,
    showOnMobile: false
  }
];

// Social links data
export const socialLinksData = [
  { 
    icon: Github, 
    href: CONTACT_INFO.social.github, 
    label: 'GitHub' 
  },
  { 
    icon: Linkedin, 
    href: CONTACT_INFO.social.linkedin, 
    label: 'LinkedIn' 
  },
  { 
    icon: Mail, 
    href: `mailto:${CONTACT_INFO.email}`, 
    label: 'Email' 
  }
];

// Roles for animated text
export const rolesData = [
  "Machine Learning Engineer",
  "Back-End Developer", 
  "IoT Enthusiast",
  "Problem Solver"
];

// CTA buttons configuration
export const ctaButtons = {
  primary: {
    text: "View My Work",
    action: "projects",
    icon: "sparkles"
  },
  secondary: {
    text: "Download Resume",
    action: "download",
    icon: "download"
  }
};
