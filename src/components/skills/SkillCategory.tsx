import React from 'react';
import { Card, Badge, ProgressBar } from '../ui';

interface SkillCategoryProps {
  title: string;
  gradient: string;
  skills: Array<{
    name: string;
    level: number;
    icon?: React.ReactNode;
  }>;
  index?: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  gradient,
  skills,
  index = 0
}) => {
  return (
    <Card 
      className="hover:shadow-2xl hover:shadow-indigo-500/20" 
      hover="glow" 
      data-aos="fade-up" 
      data-aos-delay={index * 100}
    >
      <div className="flex items-center mb-6">
        <div className={`flex items-center justify-center w-10 h-10 bg-gradient-to-br ${gradient} rounded-lg mr-3`}>
          {skills[0]?.icon}
        </div>
        <h4 className="text-lg font-bold text-white">{title}</h4>
      </div>
      <div className="space-y-4">
        {skills.map((skill, skillIndex) => (
          <div key={skillIndex} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 font-medium">{skill.name}</span>
              <Badge variant="primary" size="sm">{skill.level}%</Badge>
            </div>
            <ProgressBar value={skill.level} variant="gradient" />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SkillCategory;
