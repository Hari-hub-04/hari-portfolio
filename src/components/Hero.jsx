import { ArrowRight, Download, Mail } from 'lucide-react'
import Reveal from './Reveal'

function Hero() {
  return (
    <section id="home" className="section-shell">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Full Stack Developer
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Hari Kumar E
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            I design and build production-ready web products with clean architecture,
            smooth UX, and scalable backend systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-indigo-400"
            >
              View About <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/70 px-6 py-3 font-semibold text-slate-100 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-slate-700"
            >
              Contact Me <Mail size={18} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass-card p-8 lg:p-10">
            <div className="inline-flex animate-float items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Open For Opportunities
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">Building polished digital products.</h3>
            <p className="mt-3 text-slate-300">
              Frontend engineering, API architecture, and deployment automation for
              modern SaaS and product teams.
            </p>
            <a
              href="#about"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-700 hover:shadow-xl"
            >
              Resume Snapshot <Download size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
