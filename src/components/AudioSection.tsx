
import React, { useRef, useEffect } from 'react';
import { audioItems } from '../data/content';
import { PlayCircle, PauseCircle } from 'lucide-react';

const AudioSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  
  useEffect(() => {
    // Pause all other audio when one is playing
    audioRefs.current.forEach((audio, index) => {
      if (audio && index !== activeIndex) {
        audio.pause();
      }
    });
  }, [activeIndex]);

  const togglePlay = (index: number) => {
    if (activeIndex === index) {
      // Clicking the currently playing audio should pause it
      audioRefs.current[index]?.pause();
      setActiveIndex(null);
    } else {
      // Pause any currently playing audio and play the new one
      if (activeIndex !== null) {
        audioRefs.current[activeIndex]?.pause();
      }
      audioRefs.current[index]?.play();
      setActiveIndex(index);
    }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {audioItems.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-dark p-6 rounded-lg flex flex-col items-center"
            >
              {/* Hidden audio element */}
              <audio
                ref={el => { audioRefs.current[index] = el }}
                src={item.audioUrl}
                onEnded={() => setActiveIndex(null)}
              />
              
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
                <img 
                  src={item.coverArt} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => togglePlay(index)}
                  className="absolute inset-0 flex items-center justify-center bg-dark/50 hover:bg-dark/70 transition-colors duration-300"
                  aria-label={activeIndex === index ? "Pause audio" : "Play audio"}
                >
                  {activeIndex === index ? (
                    <PauseCircle size={48} className="text-accent" />
                  ) : (
                    <PlayCircle size={48} className="text-accent" />
                  )}
                </button>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-center">{item.title}</h3>
              
              <div className="wave-container w-full h-16 flex items-center justify-center space-x-1">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i}
                    className={`wave-bar w-2 bg-accent rounded-t ${
                      activeIndex === index ? 'animate-pulse' : ''
                    }`}
                    style={{ 
                      height: activeIndex === index ? 
                        `${8 + Math.random() * 20}%` : 
                        '8%',
                      animation: activeIndex === index ? 
                        'wave 1s infinite ease-in-out' : 
                        'none',
                      animationDelay: `${i * 0.05}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { height: 8%; }
          50% { height: 28%; }
        }
      `}</style>
    </section>
  );
};

export default AudioSection;