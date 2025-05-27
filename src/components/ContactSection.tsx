import React from 'react';
import { contactInfo, socialLinks, contactImages } from '../data/content';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const ContactSection: React.FC = () => {
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Facebook':
        return <Facebook size={24} />;
      case 'Instagram':
        return <Instagram size={24} />;
      case 'Twitter':
        return <Twitter size={24} />;
      case 'Youtube':
        return <Youtube size={24} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="bg-dark section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="yellow-underline">Get in Touch</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Phone className="text-accent mr-4" size={24} />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-accent mr-4" size={24} />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="text-accent mr-4" size={24} />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors duration-300"
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
            
            <div className="mt-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="bg-dark-gray border border-light-gray p-3 w-full focus:border-accent focus:outline-none transition-colors duration-300"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-dark-gray border border-light-gray p-3 w-full focus:border-accent focus:outline-none transition-colors duration-300"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="bg-dark-gray border border-light-gray p-3 w-full focus:border-accent focus:outline-none transition-colors duration-300"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={5}
                  className="bg-dark-gray border border-light-gray p-3 w-full focus:border-accent focus:outline-none transition-colors duration-300"
                ></textarea>
                <button type="submit" className="btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-left">
            {contactImages.map((image) => (
              <div key={image.id} className="portfolio-item h-64">
                <img 
                  src={image.imageUrl} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
                <div className="portfolio-overlay">
                  <span className="text-accent">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;