import React from 'react';

interface FooterCopyrightProps {
  year: number;
  name: string;
  technologies: string[];
  className?: string;
}

const FooterCopyright: React.FC<FooterCopyrightProps> = ({
  year,
  name,
  technologies,
  className = ''
}) => {
  return (
    <div className={`border-t border-gray-700 pt-6 ${className}`}>
      <p className="text-gray-400 text-sm">
        {year} {name}. Built with {technologies.join(', ')}.
      </p>
    </div>
  );
};

export default FooterCopyright;
