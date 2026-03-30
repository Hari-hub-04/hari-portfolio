import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { Sun, Moon, Palette, ChevronDown } from 'lucide-react'

function ThemeToggle() {
  const { theme, setTheme, themes } = useTheme()
  const [open, setOpen] = useState(false)

  const toggleLightDark = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium transition-all hover:shadow-md md:px-4"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
        <Palette size={16} />
        {open && <ChevronDown size={16} className="-rotate-180" />}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-border bg-card p-2 shadow-xl backdrop-blur-sm md:w-52">
          <button
            onClick={toggleLightDark}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-accent hover:text-accent-foreground"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>

        </div>
      )}
    </div>
  )
}

export default ThemeToggle

