import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, Play } from 'lucide-react';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Cyber Warfare',
      category: 'FPS Game',
      description: 'A futuristic first-person shooter built with Unreal Engine 5, featuring advanced AI systems and multiplayer capabilities.',
      longDescription: 'Cyber Warfare is an intense FPS experience set in 2087. Built with Unreal Engine 5, it features cutting-edge graphics, advanced AI behavior trees, and seamless multiplayer integration. The game includes dynamic weather systems, destructible environments, and a sophisticated weapon crafting system.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      tools: ['Unreal Engine 5', 'C++', 'Blueprints', 'Multiplayer'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 2,
      title: 'Mystic Quest',
      category: 'RPG Mobile',
      description: 'A fantasy RPG mobile game with turn-based combat system and immersive storytelling elements.',
      longDescription: 'Mystic Quest brings classic RPG elements to mobile platforms. Featuring a rich storyline, strategic turn-based combat, and beautiful 2D art. Built with Unity, it includes complex inventory systems, character progression, and social features.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      tools: ['Unity', 'C#', 'Firebase', 'Mobile Optimization'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 3,
      title: 'Space Odyssey VR',
      category: 'VR Experience',
      description: 'An immersive VR space exploration game with realistic physics and stunning visual effects.',
      longDescription: 'Space Odyssey VR transports players to the far reaches of space. Built for VR headsets, it features realistic zero-gravity physics, interactive spacecraft controls, and breathtaking cosmic environments. The experience includes educational elements about space exploration.',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800',
      tools: ['Unity XR', 'C#', 'VR SDK', 'Physics Systems'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 4,
      title: 'Racing Thunder',
      category: 'Racing Game',
      description: 'High-speed racing game with realistic car physics and dynamic weather systems.',
      longDescription: 'Racing Thunder delivers adrenaline-pumping racing action with photorealistic graphics and authentic car handling. Features include dynamic weather, day/night cycles, customizable vehicles, and both single-player and multiplayer modes.',
      image: 'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=800',
      tools: ['Unreal Engine 4', 'C++', 'Vehicle Physics', 'Networking'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 5,
      title: 'Puzzle Nexus',
      category: 'Puzzle Game',
      description: 'An innovative puzzle game combining traditional mechanics with AR technology.',
      longDescription: 'Puzzle Nexus revolutionizes puzzle gaming by blending physical and digital elements through AR. Players solve intricate puzzles that span both virtual and real-world environments, creating unique gameplay experiences.',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      tools: ['Unity AR Foundation', 'C#', 'ARCore', 'ARKit'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 6,
      title: 'Survival Island',
      category: 'Survival Game',
      description: 'Open-world survival game with crafting systems and procedural generation.',
      longDescription: 'Survival Island challenges players to survive in a hostile environment with limited resources. Features include procedural world generation, complex crafting systems, base building, and dynamic ecosystems that respond to player actions.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      tools: ['Unity', 'C#', 'Procedural Generation', 'Networking'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured <span className="text-neon-purple">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Explore some of my most exciting game development projects, each showcasing different aspects of my expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProject(project.id)}
              className="bg-dark-700/50 rounded-xl overflow-hidden border border-gray-600/30 hover:border-neon-blue/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-neon-blue/80 text-white text-sm rounded-full font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 font-inter leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.slice(0, 2).map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-dark-600/50 text-neon-blue text-sm rounded-full border border-neon-blue/30"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 2 && (
                    <span className="px-3 py-1 bg-dark-600/50 text-gray-400 text-sm rounded-full">
                      +{project.tools.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-neon-blue/30"
              >
                {projects
                  .filter((p) => p.id === selectedProject)
                  .map((project) => (
                    <div key={project.id}>
                      {/* Header */}
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent" />
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 p-2 bg-dark-700/80 rounded-full text-white hover:text-neon-blue transition-colors"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <h3 className="font-orbitron text-3xl font-bold text-white mb-2">
                              {project.title}
                            </h3>
                            <span className="px-4 py-2 bg-neon-blue/20 text-neon-blue rounded-full text-sm font-semibold">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed mb-8 font-inter">
                          {project.longDescription}
                        </p>

                        {/* Tools Used */}
                        <div className="mb-8">
                          <h4 className="font-semibold text-white mb-4 text-lg">Tools & Technologies</h4>
                          <div className="flex flex-wrap gap-3">
                            {project.tools.map((tool) => (
                              <span
                                key={tool}
                                className="px-4 py-2 bg-dark-700 text-neon-blue rounded-lg border border-neon-blue/30"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
                          >
                            <Play className="w-5 h-5" />
                            Play Demo
                          </motion.a>
                          
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-3 border-2 border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue hover:text-dark-900 transition-all duration-300"
                          >
                            <Github className="w-5 h-5" />
                            View Code
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;