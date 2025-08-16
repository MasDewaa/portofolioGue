import React from 'react';
import { Code, Brain, Server, Database, PenTool as Tool, Award, ExternalLink } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      gradient: 'from-blue-500 to-indigo-600',
      skills: ['Python', 'JavaScript', 'PHP', 'SQL', 'TypeScript']
    },
    {
      title: 'Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-600',
      skills: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'PaddleOCR']
    },
    {
      title: 'Back-End',
      icon: <Server className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-teal-600',
      skills: ['FastAPI', 'Laravel', 'Docker', 'Node.js', 'REST API']
    },
    {
      title: 'Front-End',
      icon: <Code className="w-6 h-6" />,
      gradient: 'from-orange-500 to-red-600',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      gradient: 'from-cyan-500 to-blue-600',
      skills: ['MySQL', 'SQLite', 'PostgreSQL', 'Database Design']
    },
    {
      title: 'Tools & Platforms',
      icon: <Tool className="w-6 h-6" />,
      gradient: 'from-gray-500 to-slate-600',
      skills: ['Git', 'GitHub', 'Vercel', 'Railway', 'AWS', 'Google Cloud']
    }
  ];

  const certifications = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI',
      logo: '🎓',
      featured: true
    },
    {
      title: 'TensorFlow Developer',
      issuer: 'DeepLearning.AI',
      logo: '🧠',
      featured: true
    },
    {
      title: 'Natural Language Processing Specialization',
      issuer: 'DeepLearning.AI',
      logo: '💬',
      featured: true
    },
    {
      title: 'Machine Learning Operations',
      issuer: 'Dicoding',
      logo: '⚙️',
      featured: false
    },
    {
      title: 'Cloud Practitioner Essentials',
      issuer: 'AWS Cloud - Dicoding',
      logo: '☁️',
      featured: false
    },
    {
      title: 'Web Programming Fundamentals',
      issuer: 'Dicoding',
      logo: '🌐',
      featured: false
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 md:px-8 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title" data-aos="fade-up">
          Skills & Certifications
        </h2>
        <div className="section-divider mb-8" />
        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center" data-aos="fade-up">
            <Code className="w-6 h-6 mr-3 text-indigo-400" />
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="group card hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className={`flex items-center mb-4`}>
                  <div className={`flex items-center justify-center w-10 h-10 bg-gradient-to-br ${category.gradient} rounded-lg mr-3`}>
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white">{category.title}</h4>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 px-3 py-2 bg-slate-700/30 border border-slate-600/30 rounded-lg text-gray-300 text-sm transition-all duration-300 hover:bg-slate-600/50 hover:text-white"
                    >
                      <span>{skill}</span>
                      <span className="flex-1 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full ml-2" style={{width: `${80 - skillIndex * 10}%`, minWidth: '40px', maxWidth: '100px'}}></span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Certifications */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-yellow-400" />
            Featured Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {certifications.filter(cert => cert.featured).map((cert, index) => (
              <div key={index} className="group card card-yellow hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{cert.logo}</div>
                  <div>
                    <h4 className="text-lg font-bold text-yellow-400">{cert.title}</h4>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Other Certifications */}
          <div className="card" data-aos="fade-up" data-aos-delay="600">
            <h4 className="text-xl font-bold text-white mb-6">Other Certifications</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.filter(cert => !cert.featured).map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
                  <div className="text-lg">{cert.logo}</div>
                  <div>
                    <h5 className="text-white font-medium">{cert.title}</h5>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-600/50">
              <button className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                <ExternalLink className="w-4 h-4" />
                <span>View All Certificates on LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;