import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { stats } from '../data/portfolioData'

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About Me"
          title="Developer Story"
          description="I enjoy turning complex ideas into clear interfaces and reliable systems that users trust."
        />

        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <article className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-white">From haidea to shipped product.</h3>
              <p className="mt-4 text-slate-300">
                I work across frontend and backend to deliver complete, production-grade
                applications. My approach combines scalable architecture, thoughtful
                interactions, and maintainable code.
              </p>
              <p className="mt-4 text-slate-300">
                I primarily build with React, TypeScript, Java, Spring Boot, Node.js,
                PostgreSQL, and cloud-native tooling for CI/CD and deployment.
              </p>
            </article>

            <article className="glass-card p-8">
              <h3 className="text-xl font-semibold text-white">Experience Snapshot</h3>
              <div className="mt-5 space-y-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-700 hover:shadow-xl"
                  >
                    <p className="text-2xl font-bold text-cyan-300">{stat.value}</p>
                    <p className="text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
