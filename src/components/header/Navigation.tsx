import React from 'react';
import { Button } from '../ui';

interface MenuItem {
  id: string;
  label: string;
}

interface NavigationProps {
  menuItems: MenuItem[];
  activeSection: string;
  onMenuClick: (sectionId: string) => void;
  isMobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  menuItems,
  activeSection,
  onMenuClick,
  isMobile = false
}) => {
  const containerClass = isMobile 
    ? "flex flex-col space-y-2" 
    : "flex space-x-2";

  const buttonClass = isMobile
    ? "justify-start transition-all duration-200"
    : "transition-all duration-200 hover:scale-105";

  return (
    <nav className={containerClass}>
      {menuItems.map((item) => (
        <Button
          key={item.id}
          variant={activeSection === item.id ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => onMenuClick(item.id)}
          className={buttonClass}
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
};

export default Navigation;
