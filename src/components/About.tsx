import React from 'react';
import { GraduationCap, Users, Target } from 'lucide-react';
import { EDUCATION, EXPERIENCE, PERSONAL_INFO } from '../constants';
import { Section } from './ui';
import EducationCard from './about/EducationCard';
import ExperienceCard from './about/ExperienceCard';
import VisionCard from './about/VisionCard';
import IntroductionCard from './about/IntroductionCard';
import { introductionData, aboutSections } from '../data/aboutData';

const About: React.FC = () => {
  return (
    <Section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {aboutSections.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {aboutSections.subtitle}
          </p>
        </div>
      {/* Introduction */}
      <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
        <IntroductionCard paragraphs={introductionData} />
      </div>
      {/* Education Timeline */}
      <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-2xl font-bold mb-8 flex items-center">
          <GraduationCap className="w-6 h-6 mr-3 text-indigo-400" />
          {aboutSections.education.title}
        </h3>
        <div className="space-y-6 border-l-4 border-indigo-400/30 pl-6">
          {EDUCATION.map((edu, index) => (
            <EducationCard
              key={index}
              institution={edu.institution}
              degree={edu.degree}
              period={edu.period}
              gpa={edu.gpa}
              score={edu.score}
              index={index}
            />
          ))}
        </div>
      </div>
      {/* Organization Experience Timeline */}
      <div className="mb-16" data-aos="fade-up" data-aos-delay="300">
        <h3 className="text-2xl font-bold mb-8 flex items-center">
          <Users className="w-6 h-6 mr-3 text-purple-400" />
          {aboutSections.experience.title}
        </h3>
        <ExperienceCard
          organization={EXPERIENCE.organization}
          positions={EXPERIENCE.positions}
        />
      </div>
      {/* Goals */}
      <div data-aos="fade-up" data-aos-delay="400">
        <h3 className="text-2xl font-bold mb-8 flex items-center">
          <Target className="w-6 h-6 mr-3 text-emerald-400" />
          {aboutSections.vision.title}
        </h3>
        <VisionCard vision={PERSONAL_INFO.vision} />
        </div>
      </div>
    </Section>
  );
};

export default About;