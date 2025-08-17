import React from 'react';
import { Card } from '../ui';

interface VisionCardProps {
  vision: string;
  className?: string;
}

const VisionCard: React.FC<VisionCardProps> = ({
  vision,
  className = ''
}) => {
  return (
    <Card className={`border-l-4 border-emerald-400/30 pl-6 relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm ${className}`} hover="glow">
      <span className="absolute -left-8 top-8 w-5 h-5 bg-emerald-400 rounded-full border-4 border-white dark:border-gray-800"></span>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
        {vision}
      </p>
    </Card>
  );
};

export default VisionCard;
