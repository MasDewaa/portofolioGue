import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showValue?: boolean;
  variant?: 'default' | 'gradient' | 'animated';
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  className = '',
  showValue = false,
  variant = 'default'
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const baseClasses = 'w-full bg-slate-700/50 rounded-full h-2 overflow-hidden';
  
  const variantClasses = {
    default: 'bg-indigo-500',
    gradient: 'bg-gradient-to-r from-indigo-500 to-purple-500',
    animated: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-size-200 animate-gradient-x'
  };
  
  return (
    <div className={`${className}`}>
      <div className={baseClasses}>
        <div
          className={`h-full transition-all duration-1000 ease-out ${variantClasses[variant]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showValue && (
        <div className="text-right text-sm text-gray-400 mt-1">
          {value}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
