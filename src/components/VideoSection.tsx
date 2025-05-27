

import React, { useState } from 'react';
import { videoItems } from '../data/content';
import { Play, Pause } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handleVideoClick = (id: number) => {
    setPlayingVideo(playingVideo === id ? null : id);
  };

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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in">
          {videoItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group aspect-[9/16] cursor-pointer"
              onClick={() => handleVideoClick(item.id)}
            >
              {playingVideo === item.id ? (
                <div className="w-full h-full bg-black">
                  <video
                    autoPlay
                    muted
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source src={item.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <button 
                    className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPlayingVideo(null);
                    }}
                  >
                    <Pause size={20} />
                  </button>
                </div>
              ) : (
                <>
                  <img 
                    src={item.thumbnailUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-accent rounded-full p-3 mb-3 text-dark">
                      <Play size={24} fill="currentColor" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;