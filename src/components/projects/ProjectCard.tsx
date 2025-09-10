import React from 'react';
import { Trophy } from 'lucide-react';
import { Card, Badge, Button } from '../ui';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  role: string;
  details: string;
  technologies: string[];
  achievements: string[];
  gradient: string;
  icon: React.ReactNode;
  featured?: boolean;
  github: string;
  demo?: string;
  index: number;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  role,
  details,
  technologies,
  achievements,
  gradient,
  icon,
  featured = false,
  github,
  demo,
  index,
  className = ''
}) => {
  const cardColorClass = gradient.includes('emerald') ? 'hover:border-emerald-400/50 hover:shadow-emerald-500/10' : 
                        gradient.includes('purple') ? 'hover:border-purple-400/50 hover:shadow-purple-500/10' : 
                        'hover:border-indigo-400/50 hover:shadow-indigo-500/10';

  return (
    <div className={`group ${featured ? 'mb-16' : ''} ${className}`} data-aos="fade-up" data-aos-delay={index * 100}>
      <Card className={`${cardColorClass} overflow-hidden hover:shadow-2xl transition-all duration-300`} hover="glow">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${gradient} rounded-lg`}>
              {icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                {title}
                {featured && <Badge variant="warning" size="sm">Featured</Badge>}
              </h3>
              <p className="text-indigo-400">{subtitle}</p>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-4">{description}</p>
        
        {/* Role */}
        <div className="mb-4">
          <span className="text-sm text-purple-400 font-semibold">My Role: </span>
          <span className="text-gray-300">{role}</span>
        </div>
        
        {/* Details */}
        <p className="text-gray-300 leading-relaxed mb-6">{details}</p>
        
        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-3">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, techIndex) => (
              <Badge key={techIndex} variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white mb-3">Achievements:</h4>
            <div className="space-y-2">
              {achievements.map((achievement, achIndex) => (
                <div key={achIndex} className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Links */}
        <div className="flex space-x-4 mt-4">
          <Button
            variant="secondary"
            icon="github"
            href={github}
            className="hover:bg-indigo-600 text-indigo-400 hover:text-white"
          >
            GitHub
          </Button>
          {demo && (
            <Button
              variant="primary"
              icon="external-link"
              href={demo}
            >
              Live Demo
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
