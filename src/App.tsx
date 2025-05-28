import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PhotographySection from './components/PhotographySection';
import VideoSection from './components/VideoSection';
import AudioSection from './components/AudioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import OurWork from './pages/OurWork';
import Collab from './components/Collabs';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Collab />
      <PhotographySection />
      <VideoSection />
      <AudioSection />
      <ContactSection />
    </>
  );
}

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'OCVISION | Photography & Media Agency';
    
    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
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
    <Router>
      <div className="min-h-screen bg-dark text-white font-montserrat">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-work" element={<OurWork />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;