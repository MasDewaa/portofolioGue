import React from 'react';

interface StatusBadgeProps {
  text: string;
  variant?: 'available' | 'busy' | 'offline';
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  text, 
  variant = 'available', 
  className = '' 
}) => {
  const variants = {
    available: {
      bg: 'bg-green-100/90 dark:bg-green-900/50',
      text: 'text-green-700 dark:text-green-300',
      dot: 'bg-green-500'
    },
    busy: {
      bg: 'bg-yellow-100/90 dark:bg-yellow-900/50',
      text: 'text-yellow-700 dark:text-yellow-300',
      dot: 'bg-yellow-500'
    },
    offline: {
      bg: 'bg-gray-100/90 dark:bg-gray-900/50',
      text: 'text-gray-700 dark:text-gray-300',
      dot: 'bg-gray-500'
    }
  };

  const currentVariant = variants[variant];

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-2 lg:px-4 ${currentVariant.bg} backdrop-blur-sm ${currentVariant.text} rounded-full text-xs lg:text-sm font-medium animate-pulse-glow ${className}`}>
      <div className={`w-2 h-2 ${currentVariant.dot} rounded-full animate-ping`} />
      {text}
    </div>
  );
};

export default StatusBadge;
