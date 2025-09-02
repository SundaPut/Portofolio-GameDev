
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Showreel from './components/Showreel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'

export default function App() {
  useEffect(() => {
    // Fix hash scroll offset for sticky navbar
    const onHashChange = () => {
      const hash = window.location.hash
      if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <div className="relative overflow-x-clip">
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        <section id="home"><Hero /></section>
        <section id="about" className="pt-24"><About /></section>
        <section id="projects" className="pt-24"><Projects /></section>
        <section id="showreel" className="pt-24"><Showreel /></section>
        <section id="contact" className="pt-24"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}
