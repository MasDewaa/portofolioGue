import React from 'react';

interface StatsCardProps {
  value: string;
  label?: string;
  color: 'blue' | 'purple' | 'green' | 'orange' | 'red';
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  value, 
  label, 
  color, 
  className = '' 
}) => {
  const colorVariants = {
    blue: 'text-blue-600 dark:text-blue-400',
    purple: 'text-purple-600 dark:text-purple-400',
    green: 'text-green-600 dark:text-green-400',
    orange: 'text-orange-600 dark:text-orange-400',
    red: 'text-red-600 dark:text-red-400'
  };

  return (
    <div className={`text-center p-2 sm:p-3 lg:p-4 bg-white/90 dark:bg-gray-800/90 rounded-lg lg:rounded-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300 ${className}`}>
      <div className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold ${colorVariants[color]}`}>
        {value}
      </div>
      {label && (
        <div className="text-xs text-gray-600 dark:text-gray-400">
          {label}
        </div>
      )}
    </div>
  );
};

export default StatsCard;
