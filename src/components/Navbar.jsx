// import { useState, useEffect } from 'react';
// import { navLinks } from '../data/content';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     if (!isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? 'glass-effect py-3' : 'bg-transparent py-5'
//       }`}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <a href="#home" className="text-2xl font-bold z-50">
//           <span className="text-white">OC</span>
//           <span className="text-accent">VISION</span>
//         </a>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-6">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-white hover:text-accent transition-colors duration-300"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Navigation Toggle */}
//         <button 
//           className="md:hidden text-white z-50" 
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div 
//         className={`fixed inset-0 bg-dark/95 backdrop-blur-lg transition-transform duration-300 md:hidden ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className="flex flex-col items-center justify-center h-full space-y-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-white text-3xl font-bold hover:text-accent transition-colors duration-300"
//               onClick={toggleMenu}
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>  
//   );
// };

// export default Navbar;


import { useState, useEffect } from 'react';
import { navLinks } from '../data/content';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close menu if window resized to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass-effect py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold z-50">
            <span className="text-white">OC</span>
            <span className="text-accent">VISION</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-40 bg-dark/95 backdrop-blur-lg transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-3xl font-bold hover:text-accent transition-colors duration-300"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
