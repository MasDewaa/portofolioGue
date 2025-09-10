import React from 'react';

interface FooterDescriptionProps {
  text: string;
  className?: string;
}

const FooterDescription: React.FC<FooterDescriptionProps> = ({
  text,
  className = ''
}) => {
  return (
    <p className={`text-gray-300 max-w-2xl mx-auto leading-relaxed ${className}`}>
      {text}
    </p>
  );
};

export default FooterDescription;
