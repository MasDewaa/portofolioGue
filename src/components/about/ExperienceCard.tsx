import React from 'react';
import { Card } from '../ui';

interface Position {
  title: string;
  description: string;
}

interface ExperienceCardProps {
  organization: string;
  positions: Position[];
  className?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  organization,
  positions,
  className = ''
}) => {
  return (
    <Card className={`border-l-4 border-purple-400/30 pl-6 relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm ${className}`} hover="glow">
      <span className="absolute -left-8 top-8 w-5 h-5 bg-purple-400 rounded-full border-4 border-white dark:border-gray-800"></span>
      <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">{organization}</h4>
      <div className="space-y-4">
        {positions.map((position, index) => (
          <div key={index}>
            <h5 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{position.title}</h5>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {position.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ExperienceCard;
