import React from 'react';
import { Card } from '../ui';

interface CertificationCardProps {
  title: string;
  issuer: string;
  logo: string;
  featured?: boolean;
  index?: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  logo,
  featured = false,
  index = 0
}) => {
  if (featured) {
    return (
      <Card 
        className="group hover:border-yellow-400/50 hover:shadow-yellow-500/20" 
        hover="glow" 
        data-aos="fade-up" 
        data-aos-delay={index * 100}
      >
        <div className="flex items-center mb-4">
          <div className="text-2xl mr-3">{logo}</div>
          <div>
            <h4 className="text-lg font-bold text-yellow-400">{title}</h4>
            <p className="text-gray-400 text-sm">{issuer}</p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
      <div className="text-lg">{logo}</div>
      <div>
        <h5 className="text-white font-medium">{title}</h5>
        <p className="text-gray-400 text-sm">{issuer}</p>
      </div>
    </div>
  );
};

export default CertificationCard;
