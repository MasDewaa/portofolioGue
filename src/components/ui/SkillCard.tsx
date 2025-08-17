import React from 'react';
import { Card, ProgressBar } from './';
import { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <Card 
      variant="elevated" 
      className="p-6 hover:scale-105 transition-all duration-300 group"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl group-hover:scale-110 transition-transform">
          <div className="text-blue-600 dark:text-blue-400">
            {skill.icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {skill.name}
          </h3>
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <span className="capitalize">{skill.category}</span>
            <span className="font-medium">{skill.level}%</span>
          </div>
        </div>
      </div>
      
      <ProgressBar 
        value={skill.level} 
        className="h-2"
        variant="animated"
      />
    </Card>
  );
};
