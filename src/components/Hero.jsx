
import { motion } from 'framer-motion'
import useTyping from './useTyping'

export default function Hero() {
  const typed = useTyping("Hi, I'm Alex Chen, Game Programmer specialized in Unity & Unreal Engine", 24, 500)

  return (
    <div className="min-h-screen flex items-center justify-center text-center relative">
      <div className="absolute inset-x-0 top-24 pointer-events-none">
        <motion.img
          src="/profile.png"
          alt="Profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-neon-blue shadow-neon object-cover"
        />
      </div>

      <div className="max-w-5xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="mt-36 font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight neon-text"
        >
          {typed || ' '}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .9, duration: .8 }}
          className="mt-6 text-lg md:text-xl text-white/80"
        >
          Creating immersive gaming experiences with cutting‑edge technology and innovative gameplay mechanics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a href="#projects" className="px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-neon-blue to-neon-purple text-space-dark shadow-neon">View My Work</a>
          <a href="#contact" className="px-6 py-3 rounded-2xl font-semibold border border-white/20 hover:border-neon-purple transition-all">Contact Me</a>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <a href="#about" className="inline-block animate-bounce text-white/60">▼</a>
        </motion.div>
      </div>
    </div>
  )
}
