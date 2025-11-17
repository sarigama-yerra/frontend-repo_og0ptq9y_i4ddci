import { motion } from 'framer-motion'
import { Brain, FileCode2, GitBranch, ShieldCheck, Workflow, Telescope, Users2, Sparkles, CheckCircle2, Bot } from 'lucide-react'

const featureItems = [
  {
    icon: Brain,
    title: 'AI matching engine',
    desc: 'Continuously scores every profile against every job to surface perfect fits, with clear explanations.'
  },
  {
    icon: FileCode2,
    title: 'Auto sub‑CVs',
    desc: 'Generates tailored CVs for each offer from one global profile — no more re‑writing.'
  },
  {
    icon: Workflow,
    title: 'Full lifecycle tracking',
    desc: 'Tests, interviews, feedback and status automatically organized per company pipeline.'
  },
  {
    icon: ShieldCheck,
    title: 'Multi‑tenant workspaces',
    desc: 'Companies manage their own private pipelines, roles, and permissions at scale.'
  },
  {
    icon: Telescope,
    title: 'Insights & analytics',
    desc: 'Time to hire, source quality, funnel drop‑offs and match quality at a glance.'
  },
  {
    icon: Bot,
    title: 'Built‑in AI assistants',
    desc: 'Interview coach for candidates and evaluators for recruiters — fast and consistent.'
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
}

export default function Sections() {
  return (
    <div>
      {/* Product features */}
      <section id="product" className="py-20 sm:py-28 bg-gradient-to-b from-transparent to-blue-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-gray-700 backdrop-blur">
              <Sparkles size={14} className="text-fuchsia-600" /> Core product
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">All‑in‑one recruiting, flipped</h2>
            <p className="mt-3 text-gray-600">One source of truth for candidates, automated matching for companies, and a single pipeline to track everything.</p>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {featureItems.map((f, i) => (
              <motion.div key={i} variants={item} className="rounded-xl bg-white p-5 ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-blue-600 to-fuchsia-500 text-white grid place-content-center">
                  <f.icon size={18} />
                </div>
                <h3 className="mt-3 text-base font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-gray-900">For candidates</h3>
              <ol className="mt-5 space-y-4">
                {[
                  { title: 'Create one profile', text: 'Experience, skills, portfolio, preferences and expectations.' },
                  { title: 'Continuous matching', text: 'Your profile is automatically matched to all active jobs.' },
                  { title: 'Auto sub‑CVs', text: 'Tailored to each offer, ready to share with context.' },
                  { title: 'Guided by AI', text: 'Interview coach helps you practice and improve your profile.' }
                ].map((s, i) => (
                  <motion.li key={i} className="flex gap-3" variants={item}>
                    <div className="mt-1 h-6 w-6 flex-none rounded-full bg-blue-600 text-white grid place-content-center text-xs font-semibold">{i+1}</div>
                    <div>
                      <p className="font-semibold text-gray-900">{s.title}</p>
                      <p className="text-sm text-gray-600">{s.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
              <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
                <CheckCircle2 className="text-green-600" size={16}/> No separate applications • No duplicate CVs • Faster responses
              </div>
            </motion.div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-gray-900">For recruiters</h3>
              <ol className="mt-5 space-y-4">
                {[
                  { title: 'Create workspace & post jobs', text: 'Define requirements: skills, seniority, languages, contract, location.' },
                  { title: 'Receive ranked matches', text: 'Each candidate comes with a score, explanation, and a sub‑CV.' },
                  { title: 'Manage the pipeline', text: 'Shortlist, reject, schedule interviews and hire with full context.' },
                  { title: 'Leverage AI evaluators', text: 'Generate tailored questions, take quick assessments, add notes.' }
                ].map((s, i) => (
                  <motion.li key={i} className="flex gap-3" variants={item}>
                    <div className="mt-1 h-6 w-6 flex-none rounded-full bg-fuchsia-600 text-white grid place-content-center text-xs font-semibold">{i+1}</div>
                    <div>
                      <p className="font-semibold text-gray-900">{s.title}</p>
                      <p className="text-sm text-gray-600">{s.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <motion.div className="rounded-lg bg-white p-4 ring-1 ring-black/10" variants={item}>
                  <div className="flex items-center gap-2 text-gray-900 font-semibold"><Users2 size={16}/>Pipeline control</div>
                  <p className="text-gray-600 mt-1">Stages, tags, notes and automations built in.</p>
                </motion.div>
                <motion.div className="rounded-lg bg-white p-4 ring-1 ring-black/10" variants={item}>
                  <div className="flex items-center gap-2 text-gray-900 font-semibold"><GitBranch size={16}/>Source analytics</div>
                  <p className="text-gray-600 mt-1">Understand what delivers the best talent.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recruiter highlight */}
      <section id="recruiters" className="py-20 sm:py-24 bg-gradient-to-b from-fuchsia-50/50 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-xl backdrop-blur"
            >
              <motion.div
                className="aspect-[4/3] rounded-lg bg-gradient-to-br from-fuchsia-600/10 to-blue-600/10 grid place-content-center text-center"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                <p className="text-sm text-gray-600">Offer → Ranked candidates → Actions</p>
                <p className="mt-2 text-2xl font-semibold bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">Why they match — explained</p>
              </motion.div>
            </motion.div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Ranked matches with context</h3>
              <p className="mt-4 text-gray-600">Each candidate comes with a transparent score and the exact reasons they match: skills coverage, seniority, language fit, and more — plus an automatically tailored sub‑CV.</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-green-600" size={16}/>Audit‑ready explanations</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-green-600" size={16}/>One‑click shortlist or reject with reason</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-green-600" size={16}/>Schedule interviews and collect feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
