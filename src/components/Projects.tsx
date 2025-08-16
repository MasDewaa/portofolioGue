import React from 'react';
import { ExternalLink, Github, Trophy, Star, Code, Brain } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Seimbang.in',
      subtitle: 'Featured Project',
      description: 'Financial management application developed as a Bangkit Capstone project with cutting-edge Machine Learning and NLP technology.',
      role: 'Back-End & Machine Learning Developer',
      details: 'Developed OCR system with PaddleOCR, text parsing, NLP-based product classification, and fine-tuned Llama 3.2 for robo-advisor.',
      technologies: ['Python', 'FastAPI', 'Docker', 'PaddleOCR', 'Llama 3.2'],
      achievements: [
        'Top 50 Bangkit Product Track',
        '1st Place GENETIC USM 2025',
        '3rd Runner-Up UNITY UNY 2025'
      ],
      github: '#',
      demo: null,
      icon: <Trophy className="w-6 h-6" />,
      gradient: 'from-yellow-500 to-orange-600',
      featured: true
    },
    {
      title: 'Certify-NFT',
      subtitle: 'Web3 Platform',
      description: 'Web3 platform for creating, managing, and verifying digital certificates as NFTs on blockchain.',
      role: 'Front-End Developer',
      details: 'Developed user interface up to API integration stage with focus on intuitive user experience.',
      technologies: ['React', 'TypeScript', 'Web3', 'Blockchain'],
      achievements: [],
      github: '#',
      demo: null,
      icon: <Star className="w-6 h-6" />,
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Batik Vision',
      subtitle: 'Machine Learning App',
      description: 'Web application for identifying Batik classes using Machine Learning with high accuracy.',
      role: 'Full-Stack & ML Developer',
      details: 'Developed model with TensorFlow (Transfer Learning), deployed with FastAPI & Docker, and built frontend with Next.js.',
      technologies: ['TensorFlow', 'FastAPI', 'Docker', 'Railway', 'Next.js', 'Vercel'],
      achievements: [],
      github: '#',
      demo: '#',
      icon: <Brain className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  const otherProjects = [
    {
      title: 'BoikotSampah',
      description: 'Full-stack application for recycling with comprehensive management system.',
      technologies: ['Laravel', 'SQLite', 'Tailwind CSS'],
      github: '#'
    },
    {
      title: 'Hydroease',
      description: 'IoT-based hydroponic system with real-time monitoring and automatic control.',
      technologies: ['IoT', 'Blynk', 'Arduino'],
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 md:px-8 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title" data-aos="fade-up">
          My Projects
        </h2>
        <div className="section-divider mb-8" />
        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {projects.map((project, index) => (
            <div key={index} className={`group ${project.featured ? 'mb-16' : ''}`} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={`card ${project.gradient.includes('emerald') ? 'card-emerald' : project.gradient.includes('purple') ? 'card-purple' : ''} overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300` + (project.featured ? ' md:flex md:items-center md:gap-8' : '')}>
                <div className="p-8 w-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                          {project.title}
                          {project.featured && <span className="px-2 py-1 text-xs rounded bg-yellow-400/20 text-yellow-500 font-semibold ml-2">Featured</span>}
                        </h3>
                        <p className="text-indigo-400">{project.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                  {/* Role */}
                  <div className="mb-4">
                    <span className="text-sm text-purple-400 font-semibold">My Role: </span>
                    <span className="text-gray-300">{project.role}</span>
                  </div>
                  {/* Details */}
                  <p className="text-gray-300 leading-relaxed mb-6">{project.details}</p>
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Achievements */}
                  {project.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Achievements:</h4>
                      <div className="space-y-2">
                        {project.achievements.map((achievement, achIndex) => (
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
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 hover:bg-indigo-600 rounded-lg transition-colors text-indigo-400 hover:text-white font-semibold"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors text-white font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Other Projects */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Code className="w-6 h-6 mr-3 text-emerald-400" />
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="group card card-emerald hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <h4 className="text-xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                  {project.title}
                  <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400 font-semibold">Other</span>
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700/50 border border-slate-600/50 rounded text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.github}
                  className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;