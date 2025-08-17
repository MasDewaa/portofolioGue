import React, { useState } from 'react';
import { ThemeToggle } from './ui';
import { useScrollSpy, useScrollTo } from '../hooks';
import { MENU_ITEMS, PERSONAL_INFO } from '../constants';
import { Logo, Navigation, MobileMenuButton } from './header/index';
import { headerConfig } from '../data/headerData';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy(MENU_ITEMS.map(item => item.id));
  const { scrollToSection } = useScrollTo();

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo 
            name={PERSONAL_INFO.name}
            onClick={() => handleMenuClick('home')}
          />

          {/* Desktop Navigation */}
          <div className={headerConfig.navigation.desktop.className}>
            <Navigation
              menuItems={MENU_ITEMS}
              activeSection={activeSection}
              onMenuClick={handleMenuClick}
            />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className={headerConfig.mobileMenu.buttonContainer}>
            <ThemeToggle />
            <MobileMenuButton
              isMenuOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={headerConfig.navigation.mobile.className}>
            <Navigation
              menuItems={MENU_ITEMS}
              activeSection={activeSection}
              onMenuClick={handleMenuClick}
              isMobile={true}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;