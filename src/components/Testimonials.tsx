import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Section, Button } from './ui';
import { ArticleCard } from './articles';
import { articles, articlesConfig } from '../data/articlesData';

const Articles: React.FC = () => {
  const featuredArticles = articles.filter(article => article.featured);
  const recentArticles = articles.filter(article => !article.featured);

  return (
    <Section id="articles" className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="section-title" data-aos="fade-up">
          {articlesConfig.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          {articlesConfig.subtitle}
        </p>
      </div>

      {/* Featured Articles */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center" data-aos="fade-up">
          <BookOpen className="w-6 h-6 mr-3 text-blue-400" />
          {articlesConfig.sections.featured.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              featured={true}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Recent Articles */}
      <div data-aos="fade-up" data-aos-delay="400">
        <h3 className="text-2xl font-bold mb-8 flex items-center">
          <BookOpen className="w-6 h-6 mr-3 text-green-400" />
          {articlesConfig.sections.recent.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {recentArticles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              featured={false}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <Button
            variant="outline"
            size="lg"
            icon={ExternalLink}
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            onClick={() => window.open('https://medium.com/@ramasailana', '_blank')}
          >
            View All Articles on Medium
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Articles;
