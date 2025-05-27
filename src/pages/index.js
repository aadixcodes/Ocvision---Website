import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PhotographySection from '../components/PhotographySection';
import VideoSection from '../components/VideoSection';
import AudioSection from '../components/AudioSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white font-montserrat">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PhotographySection />
      <VideoSection />
      <AudioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}