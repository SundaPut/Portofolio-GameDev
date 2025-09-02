
export default function Footer() {
  return (
    <footer className="py-10 text-center text-white/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />
        <p>© {new Date().getFullYear()} GameDev Portfolio. Made with React, Tailwind & Framer Motion.</p>
      </div>
    </footer>
  )
}
