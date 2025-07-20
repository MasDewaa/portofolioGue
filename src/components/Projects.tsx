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
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {projects.map((project, index) => (
            <div key={index} className={`group ${project.featured ? 'mb-16' : ''}`}>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/10">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <p className="text-indigo-400">{project.subtitle}</p>
                      </div>
                    </div>
                    {project.featured && (
                      <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-semibold text-slate-900">
                        Featured
                      </div>
                    )}
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
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
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
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Code className="w-6 h-6 mr-3 text-emerald-400" />
            Other Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 h-full transition-all duration-300 hover:scale-105 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10">
                  <h4 className="text-xl font-bold text-emerald-400 mb-3">{project.title}</h4>
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
                    className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;