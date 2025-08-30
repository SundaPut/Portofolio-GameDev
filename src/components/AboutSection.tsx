import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Gamepad2, 
  Code, 
  Cpu, 
  GitBranch, 
  Zap, 
  Target 
} from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skills = [
    { name: 'Unity', icon: Gamepad2, color: 'text-neon-blue' },
    { name: 'Unreal Engine', icon: Zap, color: 'text-neon-purple' },
    { name: 'C#', icon: Code, color: 'text-neon-green' },
    { name: 'C++', icon: Cpu, color: 'text-neon-blue' },
    { name: 'Git', icon: GitBranch, color: 'text-neon-purple' },
    { name: 'Game Design', icon: Target, color: 'text-neon-green' },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            About <span className="text-neon-blue">Me</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed font-inter"
            >
              I'm a passionate game programmer with over 5 years of experience creating 
              immersive gaming experiences. My expertise spans across multiple game engines 
              and programming languages, with a deep focus on performance optimization 
              and innovative gameplay mechanics.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed font-inter"
            >
              From indie mobile games to AAA console titles, I've contributed to projects 
              that have reached millions of players worldwide. I specialize in gameplay 
              programming, AI systems, and technical art integration.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <span className="px-4 py-2 bg-dark-700 rounded-full text-neon-blue border border-neon-blue/30">
                5+ Years Experience
              </span>
              <span className="px-4 py-2 bg-dark-700 rounded-full text-neon-purple border border-neon-purple/30">
                10+ Games Shipped
              </span>
              <span className="px-4 py-2 bg-dark-700 rounded-full text-neon-green border border-neon-green/30">
                Performance Expert
              </span>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)',
                }}
                className="bg-dark-700/50 p-6 rounded-xl border border-gray-600/30 hover:border-neon-blue/50 transition-all duration-300 text-center group"
              >
                <skill.icon className={`w-12 h-12 mx-auto mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-semibold text-white group-hover:text-neon-blue transition-colors duration-300">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;