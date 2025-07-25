import React from 'react';
import { ChevronDown, Award, Code, Cpu, Brain, Server } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Rama Syailana Dewa
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Machine Learning & Back-End Developer
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Informatics Student at Amikom University
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Informatics student with high enthusiasm for Machine Learning, IoT, and Back-End development. 
              Bangkit 2024 graduate with distinction who is passionate about building innovative data solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              View My Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-indigo-400 rounded-lg font-semibold transition-all duration-300 hover:bg-indigo-400 hover:text-slate-900"
            >
              Contact Me
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bangkit Graduate */}
            <div className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 h-full transition-all duration-300 hover:scale-105 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-indigo-400">Bangkit Graduate</h3>
                <p className="text-gray-300 leading-relaxed">
                  Graduate with distinction (Top 10%) from Bangkit Academy 2024, 
                  Indonesia's leading technology talent development program.
                </p>
              </div>
            </div>

            {/* Featured Project */}
            <div className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 h-full transition-all duration-300 hover:scale-105 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10">
              <p className="text-gray-300 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Seimbang.in</h3>
                <p className="text-gray-300 leading-relaxed">
                  1st Place winner GENETIC USM & Top 50 Bangkit Capstone. 
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
                </p>
              </div>
            </div>

            {/* Core Skills */}
            <div className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 h-full transition-all duration-300 hover:scale-105 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg mb-6 group-hover:scale-110 transition-transform">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-emerald-400">Core Skills</h3>
                <p className="text-gray-300 leading-relaxed">
                  Proficient in TensorFlow, FastAPI, Docker, and Python for developing 
                  scalable Machine Learning and Back-End solutions.
            <div className="animate-bounce lg:hidden">
              </div>
            </div>
          </div>

          {/* Right Photo */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"></div>
              
              {/* Photo container */}
              <div className="relative z-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 animate-float">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                    alt="Rama Syailana Dewa - ML & Back-End Developer"
                    className="w-full h-96 object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </div>
                
                {/* Tech stack indicators */}
                <div className="absolute -right-2 top-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-2 shadow-lg">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -left-2 bottom-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg p-2 shadow-lg">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -right-2 bottom-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-2 shadow-lg">
                  <Server className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
  )
}