import { brandLogos } from '../data/content'; // You'll define your brand logos here

const BrandCollaboration = () => {
  return (
    <section 
      id="collaboration" 
      className="py-16 md:py-24 bg-dark-900 relative overflow-hidden"
    >
      {/* Section Background Pattern (Optional) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/assets/images/bg_banner.png')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Work For </span>
            <span className="text-accent">Top Brands</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with top brands to deliver exceptional production results that drive real impact.
          </p>
        </div>
        
        {/* Brand Logos Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brandLogos.map((brand, index) => (
              <div 
                key={brand.id}
                className="flex items-center justify-center p-2 bg-dark-800 rounded-lg hover:bg-dark-700 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={brand.logoUrl} 
                  alt={brand.name} 
                  className="h-12 md:h-16 w-auto object-contain transition-all duration-500 hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Button (Optional) */}
        {/* <div className="text-center mt-16 animate-fade-in">
          <button className="bg-accent hover:bg-accent-dark text-black font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Become A Partner
          </button>
        </div> */}
        <div className="text-center mt-16 animate-fade-in">
  <a 
    href="https://wa.me/8109941748" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="bg-accent hover:bg-accent-dark text-black font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
      Become A Partner
    </button>
  </a>
</div>
      </div>
    </section>
  );
};

export default BrandCollaboration;