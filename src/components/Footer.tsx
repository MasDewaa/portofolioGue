import React from 'react';
import { FooterBrand, FooterDescription, FooterCopyright } from './footer/index';
import { footerConfig } from '../data/footerData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center space-y-6">
          <FooterBrand title={footerConfig.brand.title} />
          
          <FooterDescription text={footerConfig.description} />
          
          <FooterCopyright
            year={footerConfig.copyright.year}
            name={footerConfig.copyright.name}
            technologies={footerConfig.copyright.technologies}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;