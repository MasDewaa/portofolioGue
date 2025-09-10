export const skillsConfig = {
  title: "Skills & Certifications",
  sections: {
    technical: {
      title: "Technical Skills",
      icon: "code"
    },
    certifications: {
      title: "Featured Certifications",
      icon: "award"
    }
  }
};

export const categoryConfig = {
  ml: { title: 'Machine Learning', gradient: 'from-purple-500 to-pink-600' },
  backend: { title: 'Back-End Development', gradient: 'from-emerald-500 to-teal-600' },
  frontend: { title: 'Front-End Development', gradient: 'from-orange-500 to-red-600' },
  tools: { title: 'Tools & Platforms', gradient: 'from-gray-500 to-slate-600' }
};

export const certifications = [
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
