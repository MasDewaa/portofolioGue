import React from 'react';
import { GraduationCap, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 md:px-8 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title" data-aos="fade-up">
          About Me
        </h2>
        <div className="section-divider mb-8" />
        {/* Introduction */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="card shadow-xl border border-indigo-400/20">
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              I am an Informatics student at Amikom University Yogyakarta with a deep interest 
              in data science and technology. My journey began with fascination for data patterns 
              that can provide valuable insights to solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              My Informatics education background provides a strong foundation in programming and 
              algorithms, which I then deepened towards Machine Learning, IoT, and Back-End Development. 
              I believe that technology can be a catalyst for creating innovative solutions 
              that have a positive impact on society.
            </p>
          </div>
        </div>
        {/* Education Timeline */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-indigo-400" />
            Education
          </h3>
          <div className="space-y-6 border-l-4 border-indigo-400/30 pl-6">
            <div className="card relative" data-aos="fade-right">
              <span className="absolute -left-8 top-6 w-5 h-5 bg-indigo-400 rounded-full border-4 border-white"></span>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h4 className="text-xl font-semibold text-indigo-400">Amikom University Yogyakarta</h4>
                <span className="text-gray-400">2022 - Present</span>
              </div>
              <p className="text-gray-300 mb-2">Bachelor of Informatics</p>
              <p className="text-emerald-400 font-semibold">GPA: 3.91/4.00</p>
            </div>
            <div className="card relative" data-aos="fade-right" data-aos-delay="100">
              <span className="absolute -left-8 top-6 w-5 h-5 bg-purple-400 rounded-full border-4 border-white"></span>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h4 className="text-xl font-semibold text-indigo-400">SMA Negeri 1 Sragen</h4>
                <span className="text-gray-400">2019 - 2022</span>
              </div>
              <p className="text-gray-300 mb-2">Science Major</p>
              <p className="text-emerald-400 font-semibold">Score: 88/100</p>
            </div>
          </div>
        </div>
        {/* Organization Experience Timeline */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Users className="w-6 h-6 mr-3 text-purple-400" />
            Organizational & Leadership Experience
          </h3>
          <div className="card border-l-4 border-purple-400/30 pl-6 relative">
            <span className="absolute -left-8 top-8 w-5 h-5 bg-purple-400 rounded-full border-4 border-white"></span>
            <h4 className="text-xl font-semibold text-purple-400 mb-4">Amikom Computer Club</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-lg font-medium text-white mb-2">HRD (Human Resource Development)</h5>
                <p className="text-gray-300 leading-relaxed">
                  Responsible for organizational human resource development, managing training programs, 
                  and facilitating member soft skill development to improve the collective quality 
                  of the organization.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-medium text-white mb-2">IoT Division Mentor</h5>
                <p className="text-gray-300 leading-relaxed">
                  Guiding and teaching members in Internet of Things technology, 
                  from electronics fundamentals to complex IoT system implementation. 
                  Developing learning curriculum and facilitating practical projects.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Goals */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Target className="w-6 h-6 mr-3 text-emerald-400" />
            Vision & Mission
          </h3>
          <div className="card border-l-4 border-emerald-400/30 pl-6 relative">
            <span className="absolute -left-8 top-8 w-5 h-5 bg-emerald-400 rounded-full border-4 border-white"></span>
            <p className="text-gray-300 leading-relaxed text-lg">
              My vision is to become a developer who can create technology solutions that are not only 
              technically innovative, but also provide real impact for society. I am committed 
              to continuously learning and growing in the dynamic technology ecosystem, and contributing 
              to building a smarter future through the implementation of Machine Learning and 
              other cutting-edge technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;