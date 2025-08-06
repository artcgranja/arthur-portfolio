import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'featured-projects', 'skills', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section === 'featured-projects' ? 'projects' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen dark-bg">
      <Navigation activeSection={activeSection} />
      
      <main id="main-content">
        <HeroSection />
        <FeaturedProjects />
        <SkillsSection />
        <AboutSection />
      </main>
    </div>
  );
};

export default Index;
