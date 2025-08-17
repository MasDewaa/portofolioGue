import React from 'react';
import { Card } from '../ui';

interface EducationCardProps {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  score?: string;
  index: number;
  className?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  degree,
  period,
  gpa,
  score,
  index,
  className = ''
}) => {
  return (
    <Card 
      className={`relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm ${className}`} 
      hover="glow" 
      data-aos="fade-right" 
      data-aos-delay={index * 100}
    >
      <span className={`absolute -left-8 top-6 w-5 h-5 ${index === 0 ? 'bg-indigo-400' : 'bg-purple-400'} rounded-full border-4 border-white dark:border-gray-800`}></span>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{institution}</h4>
        <span className="text-gray-500 dark:text-gray-400">{period}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{degree}</p>
      {gpa && <p className="text-emerald-600 dark:text-emerald-400 font-semibold">GPA: {gpa}</p>}
      {score && <p className="text-emerald-600 dark:text-emerald-400 font-semibold">Score: {score}</p>}
    </Card>
  );
};

export default EducationCard;
