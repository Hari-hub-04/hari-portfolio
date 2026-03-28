import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks } from '../data/portfolioData'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <a
          href="#home"
          className="text-lg font-semibold tracking-wide text-slate-100 transition-all duration-300 ease-in-out hover:text-cyan-400"
        >
          DevPortfolio
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-lg border border-slate-700 p-2 text-slate-200 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-700 hover:shadow-xl md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
          <ThemeToggle />
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition-all duration-300 ease-in-out hover:scale-105 hover:text-cyan-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-800/80 bg-slate-900/90 transition-all duration-300 ease-in-out md:hidden ${
          open ? 'max-h-64 py-3' : 'max-h-0'
        }`}
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-6 md:px-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition-all duration-300 ease-in-out hover:bg-slate-700 hover:text-cyan-400"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
