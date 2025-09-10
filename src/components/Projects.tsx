import React from 'react';
import { Code } from 'lucide-react';
import { PROJECTS, OTHER_PROJECTS } from '../constants';
import { Section } from './ui';
import ProjectCard from './projects/ProjectCard';
import OtherProjectCard from './projects/OtherProjectCard';
import { projectsConfig } from '../data/projectsData';

const Projects: React.FC = () => {

  return (
    <Section id="projects">
      <h2 className="section-title" data-aos="fade-up">
        {projectsConfig.title}
      </h2>
      <div className="section-divider mb-8" />
      {/* Featured Projects */}
      <div className="space-y-12 mb-20">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            role={project.role}
            details={project.details}
            technologies={project.technologies}
            achievements={project.achievements}
            gradient={project.gradient}
            icon={project.icon}
            featured={project.featured}
            github={project.github}
            demo={project.demo}
            index={index}
          />
        ))}
      </div>
      {/* Other Projects */}
      <div data-aos="fade-up" data-aos-delay="400">
        <h3 className="text-2xl font-bold mb-8 flex items-center">
          <Code className="w-6 h-6 mr-3 text-emerald-400" />
          {projectsConfig.sections.other.title}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {OTHER_PROJECTS.map((project, index) => (
            <OtherProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;