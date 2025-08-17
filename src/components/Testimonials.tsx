import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Section, Card } from './ui';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    content: 'Outstanding developer with exceptional problem-solving skills. Delivered our project ahead of schedule with incredible attention to detail.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupXYZ',
    content: 'Brilliant technical expertise and great communication. Made complex concepts easy to understand for our entire team.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Design Lead',
    company: 'Creative Agency',
    content: 'Perfect collaboration between design and development. Brought our vision to life with pixel-perfect implementation.',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="section-title" data-aos="fade-up">
          What People Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Feedback from clients and colleagues I've had the pleasure to work with
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            variant="elevated"
            className="p-6 h-full flex flex-col"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center mb-4">
              <Quote className="w-8 h-8 text-blue-500 mb-2" />
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
              
              <div className="flex items-center space-x-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
