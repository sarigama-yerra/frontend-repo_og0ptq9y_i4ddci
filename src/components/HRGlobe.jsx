import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Lightweight canvas particle globe to represent global talent network
export default function HRGlobe() {
  const canvasRef = useRef(null)
  const animRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    const points = Array.from({ length: 220 }, (_, i) => ({
      // spherical distribution
      phi: Math.acos(2 * Math.random() - 1),
      theta: Math.random() * Math.PI * 2,
      r: 150 + Math.random() * 6,
      speed: 0.001 + Math.random() * 0.002,
    }))

    const project = (x, y, z) => {
      const scale = 400 / (z + 800)
      return [x * scale + width / 2, y * scale + height / 2]
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(59,130,246,0.08)'
      ctx.beginPath()
      ctx.arc(width / 2, height / 2, 160, 0, Math.PI * 2)
      ctx.fill()

      for (const p of points) {
        p.theta += p.speed
        const x = p.r * Math.sin(p.phi) * Math.cos(p.theta)
        const y = p.r * Math.cos(p.phi)
        const z = p.r * Math.sin(p.phi) * Math.sin(p.theta)
        const [sx, sy] = project(x, y, z)
        const alpha = 0.3 + Math.max(0, (z + p.r) / (2 * p.r)) * 0.6
        ctx.fillStyle = `rgba(99,102,241,${alpha})`
        ctx.beginPath()
        ctx.arc(sx, sy, 2, 0, Math.PI * 2)
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900"
            >
              Global talent graph
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-3 text-gray-600"
            >
              A real‑time view of candidates and opportunities worldwide. Our engine maps skills, seniority and preferences to the right roles across borders.
            </motion.p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl bg-white ring-1 ring-black/10 shadow-xl overflow-hidden">
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"/>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-blue-600/5 to-fuchsia-600/5"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
