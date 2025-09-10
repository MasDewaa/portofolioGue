import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, Button, Badge } from './';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Card 
      variant="elevated" 
      className="group overflow-hidden hover:scale-105 transition-all duration-500"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-xl">
        <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="text-white text-4xl">
            {project.icon}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <Button
              size="sm"
              variant="ghost"
              className="bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
              onClick={() => window.open(project.github, '_blank')}
            >
              <Github className="w-4 h-4" />
            </Button>
          )}
          {project.demo && (
            <Button
              size="sm"
              variant="ghost"
              className="bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
              onClick={() => project.demo && window.open(project.demo, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <Badge 
              key={techIndex}
              variant="secondary"
              className="text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-2">
          {project.github && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.github, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
          {project.demo && (
            <Button
              size="sm"
              className="flex-1"
              onClick={() => project.demo && window.open(project.demo, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
