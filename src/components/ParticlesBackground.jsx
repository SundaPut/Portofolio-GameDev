
import { useEffect, useRef } from 'react'

export default function ParticlesBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    const count = Math.min(120, Math.floor(w * h / 15000))
    const particles = new Array(count).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - .5) * .3,
      vy: (Math.random() - .5) * .3,
      r: Math.random() * 1.8 + .4
    }))

    function draw() {
      ctx.clearRect(0,0,w,h)
      ctx.fillStyle = 'rgba(92,200,255,.8)'
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
        ctx.fill()
      })
      // subtle gradient blur glow
      const g = ctx.createRadialGradient(w/2,h/2,0,w/2,h/2,Math.max(w,h)/1.2)
      g.addColorStop(0,'rgba(176,124,255,.07)')
      g.addColorStop(1,'rgba(11,15,26,0)')
      ctx.fillStyle = g
      ctx.fillRect(0,0,w,h)
      requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 -z-10 opacity-70"
      aria-hidden="true"
    />
  )
}
