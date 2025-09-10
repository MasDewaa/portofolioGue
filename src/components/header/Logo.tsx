import React from 'react';
import { Code2 } from 'lucide-react';

interface LogoProps {
  name: string;
  onClick: () => void;
}

const Logo: React.FC<LogoProps> = ({ name, onClick }) => {
  return (
    <div 
      className="flex items-center space-x-2 cursor-pointer group"
      onClick={onClick}
    >
      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
        <Code2 className="w-5 h-5 text-white" />
      </div>
      <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {name.split(' ')[0]}
      </span>
    </div>
  );
};

export default Logo;
