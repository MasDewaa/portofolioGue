import React from 'react';
import { Card } from '../ui';

interface QuickResponseCardProps {
  title: string;
  description: string;
  className?: string;
}

const QuickResponseCard: React.FC<QuickResponseCardProps> = ({
  title,
  description,
  className = ''
}) => {
  return (
    <Card variant="gradient" className={`mt-8 ${className}`} data-aos="fade-up" data-aos-delay="300">
      <h4 className="text-lg font-semibold text-indigo-400 mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">
        {description}
      </p>
    </Card>
  );
};

export default QuickResponseCard;
