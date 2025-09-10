import React from 'react';
import { Card, Badge, Button } from '../ui';

interface OtherProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  index: number;
  className?: string;
}

const OtherProjectCard: React.FC<OtherProjectCardProps> = ({
  title,
  description,
  technologies,
  github,
  index,
  className = ''
}) => {
  return (
    <Card 
      className={`group hover:border-emerald-400/50 hover:shadow-emerald-500/20 ${className}`} 
      hover="glow" 
      data-aos="fade-up" 
      data-aos-delay={index * 100}
    >
      <h4 className="text-xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
        {title}
        <Badge variant="success" size="sm">Other</Badge>
      </h4>
      <p className="text-gray-300 leading-relaxed mb-4">{description}</p>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <Badge key={techIndex} variant="default">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      <Button
        variant="ghost"
        icon="github"
        href={github}
        className="text-emerald-400 hover:text-emerald-300"
      >
        GitHub
      </Button>
    </Card>
  );
};

export default OtherProjectCard;
