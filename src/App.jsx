import { ThemeProvider } from './contexts/ThemeContext'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <ThemeProvider>
      <div className="relative overflow-x-hidden bg-slate-950 text-slate-100 dark:bg-gray-50 dark:text-gray-900">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px] dark:bg-indigo-400/20" />
          <div className="absolute bottom-10 right-1/4 h-[28rem] w-[28rem] rounded-full bg-cyan-600/15 blur-[140px] dark:bg-cyan-400/15" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0)_0,rgba(15,23,42,.7)_40%,rgba(2,6,23,1)_90%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1)_0,rgba(248,250,252,.3)_40%,rgba(255,255,255,0.05)_90%)]" />
        </div>

        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
