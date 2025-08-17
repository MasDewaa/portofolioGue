import React from 'react';
import { Calendar, Clock, ExternalLink, Tag } from 'lucide-react';
import { Card, Badge, Button } from '../ui';
import { Article } from '../../types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  index?: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  featured = false, 
  index = 0 
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (featured) {
    return (
      <Card 
        className="group hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden" 
        hover="glow"
        data-aos="fade-up" 
        data-aos-delay={index * 100}
      >
        {article.image && (
          <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 left-4">
              <Badge variant="primary" size="sm">
                {article.category}
              </Badge>
            </div>
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(article.publishedDate)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {article.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {article.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag, tagIndex) => (
              <div key={tagIndex} className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                <Tag className="w-3 h-3" />
                <span>{tag}</span>
              </div>
            ))}
          </div>
          
          {article.url && (
            <Button
              variant="ghost"
              size="sm"
              icon={ExternalLink}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              onClick={() => window.open(article.url, '_blank')}
            >
              Read Article
            </Button>
          )}
        </div>
      </Card>
    );
  }

  return (
    <Card 
      className="group hover:shadow-lg hover:shadow-gray-500/10" 
      hover="glow"
      data-aos="fade-up" 
      data-aos-delay={index * 100}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" size="sm">
            {article.category}
          </Badge>
          <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
            <Clock className="w-3 h-3" />
            <span>{article.readTime}</span>
          </div>
        </div>
        
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {article.title}
        </h4>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {article.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {formatDate(article.publishedDate)}
          </span>
          
          {article.url && (
            <Button
              variant="ghost"
              size="sm"
              icon={ExternalLink}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-xs"
              onClick={() => window.open(article.url, '_blank')}
            >
              Read
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ArticleCard;
