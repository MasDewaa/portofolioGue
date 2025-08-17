import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'gradient' | 'pattern';
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  background = 'default'
}) => {
  const baseClasses = 'py-16 px-4 sm:px-6 md:px-8 animate-fade-in';
  
  const backgroundClasses = {
    default: '',
    gradient: 'bg-gradient-to-br from-slate-900/50 to-indigo-900/20',
    pattern: 'relative overflow-hidden'
  };
  
  const classes = `${baseClasses} ${backgroundClasses[background]} ${className}`;
  
  return (
    <section id={id} className={classes}>
      {background === 'pattern' && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 transform rotate-12 scale-150"></div>
        </div>
      )}
      <div className="container mx-auto max-w-6xl relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
