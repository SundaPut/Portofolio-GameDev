
import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Modal'

const data = [
  {
    title: 'Neon Runner VR',
    description: 'High‑speed VR racing with cyberpunk aesthetics. Built with Unity XR, custom physics and haptics.',
    tools: ['Unity', 'C#', 'XR Interaction Toolkit'],
    media: 'https://images.unsplash.com/photo-1526406915894-6f3d2ce3f6be?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Shadow Realms RPG',
    description: 'Dark fantasy ARPG with combo‑driven combat, state machines and behavior trees.',
    tools: ['Unreal', 'C++', 'Gameplay Ability System'],
    media: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Quantum Puzzle Platform',
    description: 'Mind‑bending platformer using time rewind mechanics and shader graph tricks.',
    tools: ['Unity', 'Shader Graph', 'C#'],
    media: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Multiplayer Arena Shooter',
    description: 'Fast‑paced online shooter featuring client prediction and lag compensation.',
    tools: ['Unreal', 'C++', 'Replication'],
    media: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Procedural Worlds',
    description: 'GPU‑accelerated terrain generation with marching cubes and compute shaders.',
    tools: ['Unity', 'Compute Shader', 'C#'],
    media: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'AI Companion',
    description: 'Companion AI using navmesh, utility AI scoring and context steering.',
    tools: ['Unreal', 'C++', 'AI'],
    media: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [project, setProject] = useState(null)

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="font-display text-4xl md:text-5xl font-extrabold neon-text mb-10"
      >
        Featured Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((p, i) => (
          <motion.button
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5, delay: i * .06 }}
            className="group relative rounded-2xl overflow-hidden card-glass border border-white/10 text-left"
            onClick={() => { setProject(p); setOpen(true) }}
          >
            <div className="aspect-video overflow-hidden">
              <img src={p.media} alt={p.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-white/70 text-sm mt-1 line-clamp-2">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tools.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">{t}</span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{ boxShadow: 'inset 0 0 120px rgba(92,200,255,.15), inset 0 0 200px rgba(176,124,255,.15)'}} />
          </motion.button>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} project={project} />
    </div>
  )
}
