
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="font-display text-4xl md:text-5xl font-extrabold neon-text mb-10"
      >
        Get in Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="space-y-4"
          onSubmit={(e) => { e.preventDefault(); alert('Thanks! This demo form does not send emails.'); }}
        >
          <input className="w-full input-glow bg-space-card border border-white/10 rounded-xl px-4 py-3" placeholder="Your Name" required />
          <input type="email" className="w-full input-glow bg-space-card border border-white/10 rounded-xl px-4 py-3" placeholder="Email Address" required />
          <textarea rows="6" className="w-full input-glow bg-space-card border border-white/10 rounded-xl px-4 py-3" placeholder="Message" required></textarea>
          <button className="px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-neon-blue to-neon-purple text-space-dark shadow-neon">Send Message</button>
        </motion.form>

        <div className="space-y-4">
          <a href="mailto:agussundawaputra@gmail.com" className="block p-4 rounded-xl card-glass border border-white/10 hover:border-neon-purple transition">
            <FaEnvelope className="inline-block mr-2 text-neon-blue" /> agussundawaputra@gmail.com
          </a>
          <a href="https://github.com/SundaPut" target="_blank" className="block p-4 rounded-xl card-glass border border-white/10 hover:border-neon-purple transition">
            <FaGithub className="inline-block mr-2 text-neon-blue" /> @SundaPut
          </a>
          <a href="https://www.linkedin.com/in/muhamad-agus-sundawa-putra-804020322/" target="_blank" className="block p-4 rounded-xl card-glass border border-white/10 hover:border-neon-purple transition">
            <FaLinkedin className="inline-block mr-2 text-neon-blue" /> Muhamad Agus Sundawa Putra
          </a>
        </div>
      </div>
    </div>
  )
}
