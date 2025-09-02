
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ open, onClose, project }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 16 }}
            className="max-w-3xl mx-auto mt-20 bg-space-card rounded-2xl border border-white/10 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <h3 className="font-display text-2xl font-bold neon-text">{project?.title}</h3>
              <button onClick={onClose} className="px-3 py-1 rounded-xl border border-white/20 hover:border-neon-purple">Close</button>
            </div>
            <p className="text-white/80 mt-4">{project?.description}</p>
            {project?.media && (
              <div className="mt-4 aspect-video rounded-xl overflow-hidden border border-white/10">
                <img src={project.media} alt={project.title} className="object-cover w-full h-full" />
              </div>
            )}
            {project?.tools && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.map(t => (
                  <span key={t} className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10">{t}</span>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
