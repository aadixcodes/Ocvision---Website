import React from 'react';
import { videoItems } from '../data/content';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="bg-dark section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="yellow-underline">Cinematic Storytelling</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Our video production team creates compelling visual narratives that engage, inspire, and captivate audiences.
          </p>
        </div>
        
        <div className="video-grid animate-fade-in">
          {videoItems.map((item) => (
            <div 
              key={item.id} 
              className="portfolio-item aspect-[9/16] group"
            >
              <img 
                src={item.thumbnailUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="portfolio-overlay flex flex-col items-center justify-center">
                <div className="bg-accent rounded-full p-3 mb-3 text-dark">
                  <Play size={24} fill="currentColor" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;