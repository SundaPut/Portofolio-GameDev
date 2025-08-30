import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ShowreelSection from './components/ShowreelSection';
import ContactSection from './components/ContactSection';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="bg-dark-900 text-white min-h-screen relative overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ShowreelSection />
        <ContactSection />
      </motion.main>
      
      <footer className="bg-dark-800 py-8 text-center">
        <p className="text-gray-400">© 2025 Game Programmer Portfolio. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;