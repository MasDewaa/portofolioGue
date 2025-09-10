import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, Button } from '../ui';
import CertificationCard from './CertificationCard';

interface Certification {
  title: string;
  issuer: string;
  logo: string;
  featured: boolean;
}

interface CertificationSectionProps {
  certifications: Certification[];
}

const CertificationSection: React.FC<CertificationSectionProps> = ({ certifications }) => {
  const featuredCertifications = certifications.filter(cert => cert.featured);
  const otherCertifications = certifications.filter(cert => !cert.featured);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featuredCertifications.map((cert, index) => (
          <CertificationCard
            key={index}
            title={cert.title}
            issuer={cert.issuer}
            logo={cert.logo}
            featured={true}
            index={index}
          />
        ))}
      </div>
      
      {/* Other Certifications */}
      <Card data-aos="fade-up" data-aos-delay="600">
        <h4 className="text-xl font-bold text-white mb-6">Other Certifications</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {otherCertifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              logo={cert.logo}
              featured={false}
            />
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-slate-600/50">
          <Button variant="ghost" icon={ExternalLink} className="text-indigo-400 hover:text-indigo-300">
            View All Certificates on LinkedIn
          </Button>
        </div>
      </Card>
    </>
  );
};

export default CertificationSection;
