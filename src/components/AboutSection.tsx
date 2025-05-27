import React from "react";
import { aboutImages, servicesOffered } from "../data/content";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-dark section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="yellow-underline">About Us</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Theocvision Team Production specializes in e-commerce photography
              and high-quality video production and Audio Production. From crisp
              product images to engaging brand commercials, we ensure visually
              compelling content that enhances online presence and boosts sales.
              With expert lighting, advanced equipment, and creative execution,
              we bring products to life with a professional touch.
            </p>
            {/* <p className="text-lg mb-8 leading-relaxed">
              Our mission is to transform ordinary moments into extraordinary
              memories through innovative techniques and a deep understanding of
              visual aesthetics. We pride ourselves on our attention to detail
              and commitment to excellence.
            </p> */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {servicesOffered.map((service, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-dark-gray hover:bg-light-gray transition-colors duration-300"
                >
                  <service.icon
                    className="mx-auto text-accent mb-4"
                    size={36}
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-slide-left">
            {aboutImages.map((image) => (
              <div key={image.id} className="portfolio-item h-full">
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

export default AboutSection;
