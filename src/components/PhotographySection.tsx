import React from 'react';
import { portfolioItems } from '../data/content';

const PhotographySection: React.FC = () => {
  return (
    <section id="photography" className="bg-dark-gray section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="yellow-underline">Our Photography Work</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Explore our diverse portfolio of photography projects, showcasing our expertise in capturing 
            stunning visuals across various genres and styles.
          </p>
        </div>
        
        <div className="image-grid animate-fade-in">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="portfolio-item group"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-all duration-500"
              />
              <div className="portfolio-overlay flex flex-col">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <span className="text-accent text-sm">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn">
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;