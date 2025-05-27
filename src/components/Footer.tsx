import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-dark-gray py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} OCVISION. All rights reserved.
          </p>
        </div>
        
        <button
          onClick={scrollToTop}
          className="mt-4 md:mt-0 bg-accent p-2 rounded-full text-dark hover:scale-110 transition-transform duration-300"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;