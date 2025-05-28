// import { heroImages } from '../data/content';
// import { ChevronDown } from 'lucide-react';

// const HeroSection = () => {
//   return (
//     <section 
//       id="home" 
//       className="min-h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat relative flex flex-col justify-center items-center pt-24 md:pt-0"
//     >
//       <div className="container mx-auto px-4 text-center">
//         <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
//           <span className="text-white">OC</span>
//           <span className="text-accent">VISION</span>
//         </h1>
//         <p className="text-xl md:text-2xl mb-12 animate-slide-up">
//         Professional Production, Proven Results.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
//           {heroImages.map((image) => (
//             <div key={image.id} className="portfolio-item animate-slide-up" style={{animationDelay: `${image.id * 0.2}s`}}>
//               <img 
//                 src={image.imageUrl} 
//                 alt={image.alt} 
//                 className="w-full h-64 object-cover transition-all duration-500"
//               />
//               <div className="portfolio-overlay">
//                 <span className="text-accent text-lg font-medium">{image.alt}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <a 
//         href="#about" 
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white hover:text-accent transition-colors duration-300"
//       >
//         <ChevronDown size={32} />
//       </a>
//     </section>
//   );
// };

// export default HeroSection;


import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        {/* Landscape video for larger screens */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="hidden md:block w-full h-full object-cover"
        >
          <source src="/assets/videos/hero_banner_vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Portrait video for mobile devices */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="md:hidden w-full h-full object-cover"
        >
          <source src="/assets/videos/hero_banner_vid_m.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo - Replace with your actual logo image */}
        <div className="mb-6 animate-fade-in">
          <img 
            src="/assets/logos2/ocvision_logo.png" 
            alt="OCVISION" 
            className="mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl"
          />
        </div>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white animate-slide-up">
          Professional Production, Proven Results.
        </p>
      </div>
      
      {/* Scroll Down Arrow */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white hover:text-accent transition-colors duration-300 z-10"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;