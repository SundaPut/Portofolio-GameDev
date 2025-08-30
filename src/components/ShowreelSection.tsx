import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, ExternalLink } from 'lucide-react';

const ShowreelSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="showreel" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white">
            Game Development <span className="text-neon-green">Showreel</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Watch highlights of my best game development work and see the magic in action
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Video Container */}
          <div className="relative bg-dark-700/50 rounded-2xl overflow-hidden border border-neon-blue/30 group">
            <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center">
              {/* Placeholder for YouTube embed */}
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-neon-blue/20 rounded-full border-2 border-neon-blue mb-4 cursor-pointer hover:bg-neon-blue/30 transition-all duration-300"
                >
                  <Play className="w-10 h-10 text-neon-blue ml-1" />
                </motion.div>
                <p className="text-gray-300 text-lg font-inter">
                  Game Development Showreel 2025
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Click to watch on YouTube
                </p>
              </div>
            </div>
            
            {/* Overlay with glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Video Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            {[
              { label: 'Games Developed', value: '10+', color: 'text-neon-blue' },
              { label: 'Years Experience', value: '5+', color: 'text-neon-purple' },
              { label: 'Technologies', value: '15+', color: 'text-neon-green' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-dark-700/30 rounded-xl border border-gray-600/30 hover:border-neon-blue/50 transition-all duration-300"
              >
                <div className={`text-3xl font-bold font-orbitron mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 font-inter">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              Watch on YouTube
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowreelSection;