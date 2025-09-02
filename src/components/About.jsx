
import { motion } from 'framer-motion'
import { FaUnity, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUnity, SiUnrealengine, SiDotnet, SiCplusplus, SiGit } from "react-icons/si";

const skills = [
  { icon: <FaUnity />, name: 'Unity', level: 95 },
  { icon: <SiUnrealengine />, name: 'Unreal Engine', level: 85 },
  { icon: <SiDotnet />, name: 'C#', level: 90 },
  { icon: <SiCplusplus />, name: 'C++', level: 80 },
  { icon: <FaGithub />, name: 'Git', level: 85 },
]

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="font-display text-4xl md:text-5xl font-extrabold neon-text mb-10"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .1 }}
          viewport={{ once: true }}
          className="text-white/85 leading-relaxed card-glass p-6 rounded-2xl"
        >
          Passionate game programmer with 5+ years of experience creating engaging and innovative gaming experiences.
          I specialize in high‑performance gameplay systems, AI, and immersive interactions. My focus is clean code,
          optimization, and delivering delightful player experiences.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, delay: i * .08 }}
              className="p-5 rounded-2xl card-glass"
            >
              <div className="flex items-center gap-3 text-xl">
                <span className="text-neon-blue text-2xl">{s.icon}</span>
                <span className="font-semibold">{s.name}</span>
              </div>
              <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple" style={{ width: s.level + '%' }} />
              </div>
              <div className="text-right text-white/60 text-sm mt-1">{s.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
