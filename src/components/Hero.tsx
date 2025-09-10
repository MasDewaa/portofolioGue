import React, { useEffect, useState } from 'react';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { Button, Section, AnimatedText, ParticleBackground } from './ui';
import { useScrollTo } from '../hooks';
import { ACHIEVEMENTS, PERSONAL_INFO } from '../constants';
import BandScene from './band/BandScene';
import StatusBadge from './hero/StatusBadge';
import HeroStats from './hero/HeroStats';
import SocialLinks from './hero/SocialLinks';
import AchievementCard from './hero/AchievementCard';
import { statusConfig, statsData, socialLinksData, rolesData } from '../data/heroData';

const Hero: React.FC = () => {
  const { scrollToSection } = useScrollTo();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <section id="home" className="min-h-screen relative overflow-hidden mt-16">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float"
          style={{
            left: mousePosition.x * 0.02 + 'px',
            top: mousePosition.y * 0.02 + 'px',
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed"
          style={{
            right: mousePosition.x * -0.20 + 'px',
            bottom: mousePosition.y * 0.20 + 'px',
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 relative z-10">
        {/* 3D Scene - Responsive positioning */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-1/2 lg:h-full z-20 opacity-30 lg:opacity-100">
          <BandScene />
        </div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className={`text-center lg:text-left space-y-4 lg:space-y-6 relative z-30 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            
            {/* Status Badge */}
            <StatusBadge 
              text={statusConfig.text} 
              variant={statusConfig.variant} 
            />

            {/* Main Heading */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium tracking-wide uppercase">
                  Hello, I'm
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent animate-gradient">
                    {PERSONAL_INFO.name}
                  </span>
                </h1>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
                  <AnimatedText texts={rolesData} className="text-blue-600 dark:text-blue-400" />
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium">
                  {PERSONAL_INFO.subtitle}
                </p>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                  {PERSONAL_INFO.description}
                </p>
              </div>
            </div>

            {/* Stats */}
            <HeroStats stats={statsData} />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                <Sparkles className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                View My Work
                <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              >
                <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <SocialLinks links={socialLinksData} />
          </div>

        </div>
      </div>

      {/* Key Achievements Section */}
      <Section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Key Achievements
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Highlights of my journey in technology and development
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {ACHIEVEMENTS.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                id={achievement.id}
                title={achievement.title}
                description={achievement.description}
                icon={achievement.icon}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </Section>
    </section>
  );
};

export default Hero;