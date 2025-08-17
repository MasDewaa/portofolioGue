import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Section } from './ui';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';
import QuickResponseCard from './contact/QuickResponseCard';
import { contactConfig } from '../data/contactData';

const Contact: React.FC = () => {
  const handleFormSubmit = (formData: any) => {
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent.');
  };

  return (
    <Section id="contact" className="max-w-4xl mx-auto">
      <h2 className="section-title" data-aos="fade-up">
        {contactConfig.title}
      </h2>
      <div className="section-divider mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Information */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-bold mb-8 text-white">{contactConfig.sections.info.title}</h3>
          <p className="text-gray-300 leading-relaxed mb-8">
            {contactConfig.sections.info.description}
          </p>
          <ContactInfo
            email={CONTACT_INFO.email}
            linkedin={CONTACT_INFO.social.linkedin}
            github={CONTACT_INFO.social.github}
            location={CONTACT_INFO.location}
          />
        </div>
        {/* Contact Form */}
        <div data-aos="fade-up" data-aos-delay="200">
          <ContactForm onSubmit={handleFormSubmit} />
          <QuickResponseCard
            title={contactConfig.sections.quickResponse.title}
            description={contactConfig.sections.quickResponse.description}
          />
        </div>
      </div>
    </Section>
  );
};

export default Contact;