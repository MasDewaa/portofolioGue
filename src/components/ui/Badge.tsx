import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center font-semibold rounded-full transition-colors';
  
  const variantClasses = {
    default: 'bg-slate-700/50 border border-slate-600/50 text-gray-300',
    primary: 'bg-indigo-500/20 border border-indigo-400/30 text-indigo-400',
    secondary: 'bg-purple-500/20 border border-purple-400/30 text-purple-400',
    success: 'bg-emerald-500/20 border border-emerald-400/30 text-emerald-400',
    warning: 'bg-yellow-500/20 border border-yellow-400/30 text-yellow-400',
    error: 'bg-red-500/20 border border-red-400/30 text-red-400'
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;
