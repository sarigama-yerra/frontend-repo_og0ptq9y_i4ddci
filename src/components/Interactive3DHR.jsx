import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, IdCard, Sparkles, LineChart, Stars } from 'lucide-react'

export default function Interactive3DHR() {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const ry = ((x - midX) / midX) * 10 // rotateY
    const rx = -((y - midY) / midY) * 10 // rotateX
    setTilt({ rx, ry })
  }

  const onLeave = () => setTilt({ rx: 0, ry: 0 })

  return (
    <section id="demo" className="py-16 sm:py-24 bg-gradient-to-b from-transparent to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-gray-700 backdrop-blur"
            >
              <Sparkles size={14} className="text-blue-600" /> Live 3D talent matching
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900"
            >
              See how profiles transform into job‑specific sub‑CVs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-gray-600"
            >
              Move your cursor over the scene. Cards float in 3D, connect, and produce a transparent match score with reasoning.
            </motion.p>
          </div>

          <div className="lg:col-span-3">
            <div
              ref={ref}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-600/10 to-fuchsia-600/10 p-6 overflow-hidden"
              style={{ perspective: 1000 }}
            >
              {/* Starfield background */}
              {[...Array(24)].map((_, i) => (
                <motion.span
                  key={i}
                  className="pointer-events-none absolute h-1 w-1 rounded-full bg-blue-400/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 6 + i * 0.2, repeat: Infinity, delay: i * 0.15 }}
                  style={{ top: 20 + (i * 22) % 260, left: `${10 + (i * 7) % 90}%`, filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.6))' }}
                />
              ))}

              {/* 3D stack container */}
              <motion.div
                className="absolute inset-0"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
                transition={{ type: 'spring', stiffness: 120, damping: 12, mass: 0.3 }}
              >
                {/* Candidate Profile card */}
                <motion.div
                  className="absolute left-6 top-8 w-[48%] rounded-xl bg-white shadow-xl ring-1 ring-black/10"
                  style={{ transform: 'translateZ(60px)', transformStyle: 'preserve-3d' }}
                  whileHover={{ translateZ: 80 }}
                  transition={{ type: 'spring', stiffness: 140, damping: 14 }}
                >
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-gray-900 font-semibold"><IdCard size={16}/> Candidate profile</div>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• React, TypeScript, Node.js</li>
                      <li>• 5 yrs, remote‑friendly</li>
                      <li>• English, Spanish</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Job Requirement card */}
                <motion.div
                  className="absolute right-6 bottom-10 w-[48%] rounded-xl bg-white shadow-xl ring-1 ring-black/10"
                  style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}
                  whileHover={{ translateZ: 70 }}
                  transition={{ type: 'spring', stiffness: 140, damping: 14 }}
                >
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-gray-900 font-semibold"><Briefcase size={16}/> Frontend Engineer</div>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• React + Tailwind</li>
                      <li>• 4+ yrs, EU timezone</li>
                      <li>• English B2+</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Connection ribbon */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full bg-gradient-to-tr from-blue-600 to-fuchsia-600 text-white grid place-content-center shadow-lg"
                  style={{ transform: 'translateZ(100px)', transformStyle: 'preserve-3d' }}
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Stars size={24} className="opacity-90" />
                </motion.div>

                {/* Match score panel */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 top-6 w-[70%] rounded-xl bg-white/90 backdrop-blur shadow-xl ring-1 ring-black/10"
                  style={{ transform: 'translateZ(120px)', transformStyle: 'preserve-3d' }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-900 font-semibold"><LineChart size={16}/> Match score</div>
                      <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">92%</div>
                    </div>
                    <div className="mt-2 grid grid-cols-3 gap-3 text-xs text-gray-600">
                      <div className="rounded-lg bg-white p-2 ring-1 ring-black/10">Skills 95%</div>
                      <div className="rounded-lg bg-white p-2 ring-1 ring-black/10">Seniority 90%</div>
                      <div className="rounded-lg bg-white p-2 ring-1 ring-black/10">Language 88%</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
