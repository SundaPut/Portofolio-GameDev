import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Alex Johnson, Game Programmer specialized in Unity & Unreal Engine";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">{text}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-neon-blue"
            >
              |
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 font-inter"
        >
          Creating immersive gaming experiences with cutting-edge technology
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg transition-all duration-300"
          >
            View My Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue hover:text-dark-900 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-dark-700/50 border border-neon-blue/30 hover:border-neon-blue hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
            >
              <Icon className="w-6 h-6 text-neon-blue" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
          whileHover={{ y: 5 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-neon-blue"
          >
            <span className="text-sm mb-2 font-inter">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;