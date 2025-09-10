import React from 'react';
import { Mail, MapPin, Linkedin, Github, LucideIcon } from 'lucide-react';

interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
  gradient: string;
  hoverColor: string;
}

interface ContactInfoProps {
  email: string;
  linkedin: string;
  github: string;
  location: string;
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  email,
  linkedin,
  github,
  location,
  className = ''
}) => {
  const contactItems: ContactInfoItem[] = [
    {
      icon: Mail,
      title: 'Email',
      value: email,
      href: `mailto:${email}`,
      gradient: 'from-indigo-500 to-purple-600',
      hoverColor: 'text-indigo-400 hover:text-indigo-300'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: linkedin.replace('https://', ''),
      href: linkedin,
      gradient: 'from-blue-500 to-cyan-600',
      hoverColor: 'text-blue-400 hover:text-blue-300'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: github.replace('https://', ''),
      href: github,
      gradient: 'from-gray-500 to-slate-600',
      hoverColor: 'text-gray-400 hover:text-gray-300'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: location,
      gradient: 'from-emerald-500 to-teal-600',
      hoverColor: 'text-gray-400'
    }
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {contactItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg shadow-lg`}>
            <item.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-white font-semibold">{item.title}</h4>
            {item.href ? (
              <a 
                href={item.href}
                className={`${item.hoverColor} transition-colors`}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.value}
              </a>
            ) : (
              <p className={item.hoverColor}>{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
