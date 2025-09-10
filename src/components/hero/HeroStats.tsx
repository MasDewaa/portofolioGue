import React from 'react';
import StatsCard from './StatsCard';

interface StatItem {
  value: string;
  label?: string;
  color: 'blue' | 'purple' | 'green' | 'orange' | 'red';
  showOnMobile?: boolean;
}

interface HeroStatsProps {
  stats: StatItem[];
  className?: string;
}

const HeroStats: React.FC<HeroStatsProps> = ({ stats, className = '' }) => {
  return (
    <div className={`grid grid-cols-3 gap-2 sm:gap-4 py-4 lg:py-6 ${className}`}>
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          value={stat.value}
          label={stat.showOnMobile !== false ? stat.label : undefined}
          color={stat.color}
          className={stat.showOnMobile === false ? 'hidden sm:block' : ''}
        />
      ))}
    </div>
  );
};

export default HeroStats;
