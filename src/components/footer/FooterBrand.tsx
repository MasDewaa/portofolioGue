import React from 'react';
import { Code2 } from 'lucide-react';

interface FooterBrandProps {
  title: string;
  className?: string;
}

const FooterBrand: React.FC<FooterBrandProps> = ({
  title,
  className = ''
}) => {
  return (
    <div className={`flex justify-center items-center space-x-2 ${className}`}>
      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
        <Code2 className="w-5 h-5 text-white" />
      </div>
      <span className="text-2xl font-bold">{title}</span>
    </div>
  );
};

export default FooterBrand;
