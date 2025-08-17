import { Article } from '../types';

export const articlesConfig = {
  title: "My Articles",
  subtitle: "Sharing knowledge and insights from my journey in technology",
  sections: {
    featured: {
      title: "Featured Articles"
    },
    recent: {
      title: "Recent Articles"
    }
  }
};

export const articles: Article[] = [
  {
    id: '1',
    title: 'Getting Started with Machine Learning in 2024',
    description: 'A comprehensive guide for beginners who want to dive into the world of machine learning and AI.',
    content: 'Machine learning has become one of the most sought-after skills in the tech industry...',
    publishedDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Machine Learning',
    tags: ['ML', 'AI', 'Python', 'Beginner'],
    featured: true,
    image: '/images/ml-guide.jpg',
    url: 'https://medium.com/@ramasailana/getting-started-with-ml-2024'
  },
  {
    id: '2',
    title: 'Building IoT Solutions with Arduino and ESP32',
    description: 'Learn how to create smart IoT devices using popular microcontrollers and sensors.',
    content: 'Internet of Things (IoT) is revolutionizing how we interact with everyday objects...',
    publishedDate: '2024-02-20',
    readTime: '12 min read',
    category: 'IoT',
    tags: ['IoT', 'Arduino', 'ESP32', 'Hardware'],
    featured: true,
    image: '/images/iot-arduino.jpg',
    url: 'https://medium.com/@ramasailana/iot-arduino-esp32'
  },
  {
    id: '3',
    title: 'Modern Web Development with React and TypeScript',
    description: 'Best practices for building scalable web applications using React and TypeScript.',
    content: 'React with TypeScript provides a powerful combination for building modern web applications...',
    publishedDate: '2024-03-10',
    readTime: '10 min read',
    category: 'Web Development',
    tags: ['React', 'TypeScript', 'Frontend', 'JavaScript'],
    featured: false,
    image: '/images/react-typescript.jpg',
    url: 'https://medium.com/@ramasailana/react-typescript-guide'
  },
  {
    id: '4',
    title: 'My Journey Through Bangkit 2024 Program',
    description: 'Reflections on my experience as a Machine Learning cohort in Google\'s Bangkit program.',
    content: 'Bangkit 2024 has been an incredible journey of learning and growth...',
    publishedDate: '2024-04-05',
    readTime: '6 min read',
    category: 'Personal',
    tags: ['Bangkit', 'Google', 'Career', 'Learning'],
    featured: false,
    image: '/images/bangkit-journey.jpg',
    url: 'https://medium.com/@ramasailana/bangkit-2024-journey'
  },
  {
    id: '5',
    title: 'Data Science Project: From Idea to Deployment',
    description: 'A step-by-step guide on how to take your data science project from concept to production.',
    content: 'Building a successful data science project requires more than just good algorithms...',
    publishedDate: '2024-05-18',
    readTime: '15 min read',
    category: 'Data Science',
    tags: ['Data Science', 'MLOps', 'Deployment', 'Python'],
    featured: true,
    image: '/images/ds-deployment.jpg',
    url: 'https://medium.com/@ramasailana/data-science-deployment'
  }
];
