
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGamepad } from 'react-icons/fa'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#showreel', label: 'Showreel' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .6 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 ${scrolled ? 'bg-space-dim/70 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display text-xl tracking-wide">
          <FaGamepad className="text-neon-blue" />
          <span className="font-bold">GameDev</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-neon-blue transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-block bg-gradient-to-r from-neon-blue to-neon-purple text-space-dark font-semibold px-4 py-2 rounded-2xl shadow-neon">
          Hire Me
        </a>
      </div>
    </motion.nav>
  )
}
