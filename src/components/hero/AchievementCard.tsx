import React from 'react';
import { Card } from '../ui';

interface AchievementCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  id,
  title,
  description,
  icon,
  delay = 0,
  className = ''
}) => {
  return (
    <Card 
      key={id}
      variant="elevated"
      className={`text-center group hover:scale-105 transition-all duration-500 hover:shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm ${className}`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <div className="text-blue-600 dark:text-blue-400">
            {icon}
          </div>
        </div>
      </div>
      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </Card>
  );
};

export default AchievementCard;
