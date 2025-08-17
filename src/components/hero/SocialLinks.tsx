import React from 'react';
import { Button } from '../ui';
import { LucideIcon } from 'lucide-react';

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, className = '' }) => {
  return (
    <div className={`flex gap-3 lg:gap-4 justify-center lg:justify-start ${className}`}>
      {links.map(({ icon: Icon, href, label }) => (
        <Button 
          key={label}
          variant="ghost" 
          size="sm" 
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full hover:scale-110 hover:bg-blue-100/80 dark:hover:bg-blue-900/50 backdrop-blur-sm transition-all duration-300 group"
          onClick={() => window.open(href, '_blank')}
          aria-label={label}
        >
          <Icon className="w-4 h-4 lg:w-5 lg:h-5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;
