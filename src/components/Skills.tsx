import React from 'react';
import { Code, Award } from 'lucide-react';
import { SKILLS } from '../constants';
import { Section } from './ui';
import { SkillCategory, CertificationSection } from './skills/index';
import { skillsConfig, categoryConfig, certifications } from '../data/skillsData';

const Skills: React.FC = () => {
  const skillsByCategory = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);


  return (
    <Section id="skills">
      <h2 className="section-title" data-aos="fade-up">
        {skillsConfig.title}
      </h2>
      <div className="section-divider mb-8" />
      {/* Technical Skills */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-8 flex items-center" data-aos="fade-up">
          <Code className="w-6 h-6 mr-3 text-indigo-400" />
          {skillsConfig.sections.technical.title}
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills], index) => {
            const config = categoryConfig[category as keyof typeof categoryConfig];
            if (!config) return null;
            
            return (
              <SkillCategory
                key={category}
                title={config.title}
                gradient={config.gradient}
                skills={skills}
                index={index}
              />
            );
          })}
        </div>
      </div>
      {/* Certifications */}
      <div data-aos="fade-up" data-aos-delay="400">
        <h3 className="text-2xl font-bold mb-8 flex items-center">
          <Award className="w-6 h-6 mr-3 text-yellow-400" />
          {skillsConfig.sections.certifications.title}
        </h3>
        <CertificationSection certifications={certifications} />
      </div>
    </Section>
  );
};

export default Skills;