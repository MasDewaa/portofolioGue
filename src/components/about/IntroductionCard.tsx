import React from 'react';
import { Card } from '../ui';

interface IntroductionCardProps {
  paragraphs: string[];
  className?: string;
}

const IntroductionCard: React.FC<IntroductionCardProps> = ({
  paragraphs,
  className = ''
}) => {
  return (
    <Card className={`p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl border border-indigo-400/20 ${className}`} hover="glow">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={`text-gray-600 dark:text-gray-300 leading-relaxed text-lg ${index < paragraphs.length - 1 ? 'mb-6' : ''}`}>
          {paragraph}
        </p>
      ))}
    </Card>
  );
};

export default IntroductionCard;
