
import { motion } from 'framer-motion'
import { FaUnity, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUnity, SiUnrealengine, SiDotnet, SiCplusplus, SiGit } from "react-icons/si";

const skills = [
  { icon: <FaUnity />, name: 'Unity', level: 65 },
  { icon: <SiUnrealengine />, name: 'Unreal Engine', level: 35 },
  { icon: <SiDotnet />, name: 'C#', level: 68 },
  { icon: <SiCplusplus />, name: 'C++', level: 25 },
  { icon: <FaGithub />, name: 'Git', level: 45 },
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
          Students of the Jakarta Creative Media State Polytechnic, have interests and expertise in programming, 
          especially in developing games. I have been involved in several game projects. 
          I am experienced in using popular game engines and have a good understanding of game design and programming logic.
          I have experience in game development, where I have been involved in various projects that strengthen my programming skills. 
          Through each project, I strive to create an interesting and innovative gaming experience. 
          I am constantly learning and adapting to the latest trends in game development, with the aim of making a meaningful contribution in every project I work on.
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
