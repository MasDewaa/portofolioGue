import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient' | 'elevated';
  onClick?: () => void;
  hover?: 'scale' | 'glow' | 'none';
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hover = 'scale',
  className = ''
}) => {
  const baseClasses = 'rounded-xl p-6 transition-all duration-300';
  
  const variants = {
    default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm',
    glass: 'bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 border border-blue-200 dark:border-gray-700',
    elevated: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl'
  };
  
  const hoverClasses = {
    scale: 'hover:scale-105 hover:border-indigo-400/50 hover:shadow-xl',
    glow: 'hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-400/50',
    none: ''
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${hoverClasses[hover]} ${className}`;
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;
