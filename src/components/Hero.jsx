import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -8, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i }
  })
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* Aurora background */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1600px] h-[1600px] rounded-full bg-[conic-gradient(at_50%_20%,theme(colors.blue.100),theme(colors.fuchsia.100),transparent_60%)] blur-3xl opacity-70" />

      {/* Particles */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-blue-400/60 shadow-[0_0_12px_theme(colors.blue.300)]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, (i % 2 ? 1 : -1) * (60 + i * 8)],
            y: [0, (i % 3 ? 1 : -1) * (40 + i * 6)],
          }}
          transition={{ duration: 6 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
          style={{ top: 120 + i * 24, left: `${30 + (i * 7) % 90}%` }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-gray-700 backdrop-blur"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <Sparkles size={14} className="text-blue-600" />
              AI-first recruiting, flipped.
            </motion.div>
            <motion.h1
              className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-gray-900"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              One global profile.
              <span className="block bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">Infinite tailored CVs.</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-gray-600 max-w-xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              Jobbydone turns your single profile into job-specific sub-CVs, continuously matching you to every relevant offer and tracking your entire journey.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-3"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black">
                Create your profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-black/10 hover:bg-gray-50">
                See how it works
              </a>
            </motion.div>

            <motion.div
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-600"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
            >
              {[
                { k: '+82%', l: 'Reply rate' },
                { k: '-60%', l: 'Time to hire' },
                { k: '24/7', l: 'AI coaching' },
                { k: 'Multi-tenant', l: 'Workspaces' },
              ].map((m, i) => (
                <motion.div key={i} variants={floatVariants} initial="initial" animate="animate">
                  <p className="text-2xl font-bold text-gray-900">{m.k}</p>
                  <p>{m.l}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl border border-black/10 bg-white/70 p-4 shadow-xl backdrop-blur"
            >
              <motion.div
                className="aspect-[4/3] rounded-xl bg-gradient-to-br from-blue-600/10 to-fuchsia-600/10 p-6"
                variants={floatVariants}
                initial="initial"
                animate="animate"
              >
                <div className="h-full w-full rounded-lg border border-dashed border-black/10 grid place-content-center text-center">
                  <p className="text-sm text-gray-600">Live matching preview</p>
                  <p className="mt-2 text-3xl font-semibold bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">Profile → Sub‑CV → Match Score</p>
                </div>
              </motion.div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-gray-600">
                {[
                  { t: 'Global profile', d: 'Skills, experience, salary, preferences' },
                  { t: 'Sub‑CVs', d: 'Auto‑generated for each job' },
                  { t: 'AI scoring', d: 'Why this candidate? Explained.' },
                ].map((c, i) => (
                  <motion.div key={i} className="rounded-lg bg-white p-3 ring-1 ring-black/10" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                    <p className="font-semibold text-gray-900">{c.t}</p>
                    <p>{c.d}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
