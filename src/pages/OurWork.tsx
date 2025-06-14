import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowRight } from 'lucide-react';

// Sample data
const creativeDisciplines = [
    {
        id: 1,
        title: "Photography",
        description: "Capturing moments that tell your story",
        image: "/assets/images/work8.jpg"
       
        
      },
    {
        id: 2,
        title: "Photography",
         description: "Capturing moments that tell your story",
        image: "/assets/images/work9.jpg"
      },
    {
        id: 3,
        title: "Photography",
        description: "Capturing moments that tell your story",
        image: "/assets/images/work1.jpg"
      },
    {
        id: 4,
        title: "Photography",
        description: "Capturing moments that tell your story",
        image: "/assets/images/work2.jpg"
      },
    {
        id: 5,
        title: "Photography",
        description: "Capturing moments that tell your story",
        image: "/assets/images/work3.png"
      },
    {
        id: 6,
        title: "Photography",
        description: "Capturing moments that tell your story",
        image: "/assets/images/work4.jpg"
      },
    {
        id: 7,
        title: "Photography",
        description: "Capturing moments that tell your story",
        image: "/assets/images/work5.jpg"
      },
    {
        id: 8,
        title: "Photography",
        description: "Capturing moments that tell your story",
        image: "/assets/images/work6.jpg"
      },
    {
        id: 9,
        title: "Photography",
        description: "Capturing moments that tell your story",
        image: "/assets/images/work7.jpg"
      },
    {
        id: 10,
        title: "Photography",
        description: "Capturing moments that tell your story",
        image: "/assets/images/about2.png"
        
      },
    {
        id: 11,
        title: "Photography",
        description: "Capturing moments that tell your story",
        image: "/assets/images/about1.png"
      },

  {
    id: 12,
    title: "Photography",
    description: "Capturing moments that tell your story",
    image: "/assets/images/fash_photo1.jpg"
  },
  {
    id: 13,
    title: "Videography",
    description: "Motion pictures that bring ideas to life",
    image: "/assets/images/fash_photo2.jpg"
  },
  {
    id: 14,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo3.jpg"
  },
  {
    id: 15,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo4.jpg"
  },
  {
    id: 16,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo5.jpg"
  },
  {
    id: 17,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo6.JPG"
  },
  {
    id: 18,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo7.JPG"
  },
  {
    id: 19,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo8.JPG"
  },
  {
    id: 20,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo9.JPG"
  },
  {
    id: 21,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo10.JPG"
  },
  {
    id: 22,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo11.JPG"
  },
  {
    id: 23,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo12.JPG"
  },
  {
    id: 24,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo13.JPG"
  },
  {
    id: 25,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo14.JPG"
  },
  {
    id: 26,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo15.JPG"
  },
  {
    id: 27,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo16.JPG"
  },
  {
    id: 28,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo17.JPG"
  },
  {
    id: 29,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo18.jpeg"
  },
  {
    id: 30,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo19.jpeg"
  },
  {
    id: 31,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo20.jpeg"
  },
  {
    id: 32,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo21.jpeg"
  },
  {
    id: 33,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo22.jpeg"
  },
  {
    id: 34,
    title: "Design",
    description: "Visual solutions that communicate effectively",
    image: "/assets/images/fash_photo23.jpeg"
  }  
];


// Videos 
const featuredProjects = [
  {
    id: 8,
    title: "Summer Campaign",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877779/otla_new_08_fabdd1.mp4",
    thumbnail: "/assets/images/thumb_08.JPG"
  },
  {
    id: 9,
    title: "Summer Campaign",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877811/Dazzzlin_09_tbpbeg.mp4",
    thumbnail: "/assets/images/thumb_09.JPG"
  },
  {
    id: 10,
    title: "Summer Campaign",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877674/another_women_10_jxpmn8.mp4",
    thumbnail: "/assets/images/thumb_10.JPG"
  },
  {
    id: 1,
    title: "Summer Campaign",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877932/Sequence_01_hvakn8.mp4",
    thumbnail: "/assets/images/thumb_01.JPG"
  },
  {
    id: 2,
    title: "Product Launch",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877967/Sequence_02_whz5wg.mp4",
    thumbnail: "/assets/images/thumb_02.JPG"
  },
  {
    id: 3,
    title: "Brand Story",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877961/otla_x_ocvision_03_ljefuc.mp4",
    thumbnail: "/assets/images/thumb_03.JPG"
  },
  {
    id: 4,
    title: "Brand Story",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877992/numb_04_sqpefa.mp4",
    thumbnail: "/assets/images/thumb_04.JPG"
  },
  {
    id: 5,
    title: "Brand Story",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877933/ocvision_bhs_05_occoij.mp4",
    thumbnail: "/assets/images/thumb_05.JPG"
  },
  {
    id: 6,
    title: "Brand Story",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877923/ocvision_recording_studio_06_tyoumf.mp4",
    thumbnail: "/assets/images/thumb_06.JPG"
  },
  {
    id: 7,
    title: "Brand Story",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877966/cine_oc_vision_07_mr0v6l.mp4",
    thumbnail: "/assets/images/thumb_07.JPG"
  },
];

const OurWork = () => {
    const [playingVideo, setPlayingVideo] = useState<number | null>(null);
    const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});
    const [visibleImages, setVisibleImages] = useState<number>(3);
    const [visibleVideos, setVisibleVideos] = useState<number>(3);
    const videoRefs = useRef<{[key: number]: HTMLVideoElement | null}>({});
  
    // Handle image load
    const handleImageLoad = (id: string) => {
      setLoadedImages(prev => ({ ...prev, [id]: true }));
    };
  
    // Toggle video play/pause
    const toggleVideo = (id: number) => {
      if (playingVideo === id) {
        videoRefs.current[id]?.pause();
        setPlayingVideo(null);
      } else {
        if (playingVideo) videoRefs.current[playingVideo]?.pause();
        setPlayingVideo(id);
        setTimeout(() => videoRefs.current[id]?.play(), 100);
      }
    };
  
    // Load more images
    const loadMoreImages = () => {
      setVisibleImages(prev => Math.min(prev + 3, creativeDisciplines.length));
    };
  
    // Load more videos
    const loadMoreVideos = () => {
      setVisibleVideos(prev => Math.min(prev + 3, featuredProjects.length));
    };
  
    // Check if image is landscape (width > height)
    const isLandscape = (imgUrl: string) => {
      // In a real app, you would check the actual image dimensions
      // For this example, we'll assume certain images are landscape
      return imgUrl.includes('work') || imgUrl.includes('thumb');
    };
  
    return (
      <div className="bg-dark text-gray-100 min-h-screen">
        {/* Hero Banner Section */}
        <section className="relative h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url('https://i.pinimg.com/736x/cd/79/ea/cd79ea220072c42e7710b77a15be73d4.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          
          <div className="relative z-20 text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our <span className="text-accent">Creative</span> Work
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto mb-8"
            >
              Explore our portfolio of visual storytelling across multiple disciplines
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="animate-bounce mt-12"
            >
              <ArrowRight className="w-8 h-8 mx-auto rotate-90" />
            </motion.div>
          </div>
        </section>
  
        {/* Creative Disciplines - Image Gallery */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="yellow-underline">Our Creative Photography</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Specialized services tailored to bring your vision to life
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeDisciplines.slice(0, visibleImages).map((discipline) => (
              <motion.div 
                key={discipline.id}
                whileHover={{ scale: 1.03 }}
                className="relative group rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`relative ${isLandscape(discipline.image) ? 'h-[400px]' : 'h-[600px]'} w-full`}>
                  {/* Low-quality placeholder */}
                  {!loadedImages[discipline.id.toString()] && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
                  )}
                  
                  {/* Lazy-loaded high-quality image */}
                  <img 
                    src={discipline.image} 
                    alt={discipline.title}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                      loadedImages[discipline.id.toString()] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(discipline.id.toString())}
                  />
                </div>
              </motion.div>
            ))}
          </div>
  
          {visibleImages < creativeDisciplines.length && (
            <div className="text-center mt-12">
              <button 
                onClick={loadMoreImages}
                className="btn btn-accent px-8 py-3 rounded-full text-lg font-medium"
              >
                Load More
              </button>
            </div>
          )}
        </section>
  
        {/* Featured Projects - Video Gallery */}
        <section className="py-20 bg-dark-gray">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="yellow-underline">Our Creative Videography</span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-300">
                Our most impactful work that tells compelling visual stories
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.slice(0, visibleVideos).map((project) => (
                <div 
                  key={project.id} 
                  className="group relative rounded-2xl overflow-hidden"
                  style={{ height: isLandscape(project.thumbnail) ? '600px' : '600px' }}
                >
                  <div className="relative h-full w-full">
                    {playingVideo === project.id ? (
                      <video
                        ref={(el) => { videoRefs.current[project.id] = el }}
                        src={project.videoUrl}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        preload="none"
                        onClick={() => toggleVideo(project.id)}
                      />
                    ) : (
                      <>
                        <img 
                          src={project.thumbnail} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onLoad={() => handleImageLoad(`video-${project.id}`)}
                        />
                        <div 
                          className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
                          onClick={() => toggleVideo(project.id)}
                        >
                        </div>
                      </>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                      <div className="flex justify-between items-start">
                        <button 
                          onClick={() => toggleVideo(project.id)}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                          aria-label={playingVideo === project.id ? "Pause video" : "Play video"}
                        >
                          {playingVideo === project.id ? (
                            <Pause className="w-5 h-5 text-white" />
                          ) : (
                            <Play className="w-5 h-5 text-white" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            {visibleVideos < featuredProjects.length && (
              <div className="text-center mt-12">
                <button 
                  onClick={loadMoreVideos}
                  className="btn btn-accent px-8 py-3 rounded-full text-lg font-medium"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  };
  
  export default OurWork;