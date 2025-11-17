import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#product' },
    { label: 'How it works', href: '#how' },
    { label: 'For recruiters', href: '#recruiters' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-fuchsia-500 grid place-content-center text-white">
              <Sparkles size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight">Jobbydone</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="/test" className="text-sm text-gray-600 hover:text-gray-900">Status</a>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black transition-colors"
            >
              Get started
            </a>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-black/5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <nav className="grid gap-2 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-2 py-2 rounded hover:bg-black/5">
                  {item.label}
                </a>
              ))}
              <a href="#get-started" className="px-2 py-2 rounded bg-gray-900 text-white text-center">Get started</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
