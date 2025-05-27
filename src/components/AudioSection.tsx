import React from 'react';
import { audioItems } from '../data/content';
import { PlayCircle, PauseCircle } from 'lucide-react';

const AudioSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  
  const togglePlay = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section id="audio" className="bg-dark-gray section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="yellow-underline">Soundscapes & Audio</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Our audio production services deliver rich, immersive soundscapes that elevate visual storytelling to new heights.
          </p>
        </div>
        
        <div className="audio-grid animate-fade-in">
          {audioItems.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-dark p-6 rounded-lg w-full md:w-80 flex flex-col items-center"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
                <img 
                  src={item.coverArt} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => togglePlay(index)}
                  className="absolute inset-0 flex items-center justify-center bg-dark/50 hover:bg-dark/70 transition-colors duration-300"
                >
                  {activeIndex === index ? (
                    <PauseCircle size={48} className="text-accent" />
                  ) : (
                    <PlayCircle size={48} className="text-accent" />
                  )}
                </button>
              </div>
              
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              
              <div className="wave-container w-full h-16 flex items-end space-x-1">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i}
                    className={`wave-bar w-2 bg-accent rounded-t ${
                      activeIndex === index ? 'h-full' : 'h-2'
                    }`}
                    style={{ 
                      height: activeIndex === index ? `${Math.random() * 100}%` : '8%',
                      animationPlayState: activeIndex === index ? 'running' : 'paused'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudioSection;