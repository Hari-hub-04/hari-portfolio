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
          description="I enjoy transforming complex ideas into simple digital experiences. My goal is to build clean interfaces and reliable systems that make technology easier and more useful for people."
        />

        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <article className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-white">From Snippets to Systems</h3>
              <p className="mt-4 text-slate-300">
                From simple code snippets to building projects like YHMW, my journey as a developer has been driven by curiosity and hands-on learning. I enjoy breaking down complex ideas, writing clean logic, and turning concepts into practical, working systems.
              </p>
              <br />
              <p className="mt-4 text-slate-300">
                I specialize in frontend development, building responsive and interactive web applications using HTML, CSS, JavaScript, and React. I focus on creating clean interfaces and user-friendly experiences.
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
