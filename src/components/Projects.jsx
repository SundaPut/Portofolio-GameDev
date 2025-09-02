
import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Modal'
import project1 from '../project/Project1.jpg'
import project2 from '../project/Project2.jpg'
import project3 from '../project/Project3.gif'
import project4 from '../project/Project4.jpg'
import project5 from '../project/Project5.png'

const data = [
  {
    title: 'Overnight: Un peace',
    description: 'Game 2d Sidescroller Survival Horor yang berfokus pada gameplay yang menantang dan semakin sulit di setiap levelnya.',
    tools: ['Unity', 'C#'],
    media: project1
  },
  {
    title: 'PC Pedia',
    description: 'PC Pedia adalah game simulator berbasis 2d yang berfokus pada edukasi dasar mengenai komputer. game ini mengajarkan semua hal dasar mengenai komputer dari penjelasan fungsi dari setiap komponen komputer, cara pemasangan, hingga cara penggunaannya.',
    tools: ['Unity', 'C#'],
    media: project2
  },
  {
    title: 'AnimA - The Fallen Heroes & Mystic Forest',
    description: 'AnimA adalah sebuah Game Platformer aksi-petualangan yang menghadirkan dunia gelap dan mistis terinspirasi dari cerita rakyat serta mitologi Indonesia. Jelajahi dunia penuh misteri, tempat roh kuno, makhluk mitos, dan artefak legendaris menunggu untuk ditemukan.',
    tools: ['Unity', 'C#'],
    media: project3
  },
  {
    title: 'Archer No.9',
    description: 'Archer No.9 Merupakan game 3D yang menggabungkan elemen Third person Dan First Person dimana tujuan untuk mengalahkan naga sebagai Bos Terakhir dan dipenuhi dengan Puzzel-puzzel yang menarik.',
    tools: ['Unity', 'C#'],
    media: project4
  },
  {
    title: 'Game Shooter 3D',
    description: 'Merupakan Game Yang Dibuat Untuk keperluan Tugas Kuliah.',
    tools: ['Unreal', 'C++', 'AI'],
    media: project5
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
