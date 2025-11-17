import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Interactive3DHR from './components/Interactive3DHR'
import HRGlobe from './components/HRGlobe'
import CTA from './components/CTA'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-blue-600 via-fuchsia-500 to-amber-400"
    />
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Interactive3DHR />
        <Sections />
        <HRGlobe />
        <CTA />
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Jobbydone. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="/test" className="hover:text-gray-900">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
