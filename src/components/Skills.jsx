import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { skillGroups } from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Core Toolkit"
          title="Skills That Power My Builds"
          description="Focused on shipping robust full-stack applications with a strong product and performance mindset."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, idx) => (
            <Reveal key={group.title} delay={idx * 80}>
              <article className="glass-card p-6">
                <div className="mb-5 flex items-center gap-3">
                  <group.icon className="text-indigo-300" size={22} />
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <div className="space-y-3">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-700 hover:shadow-xl"
                    >
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <skill.icon
                        size={16}
                        className="text-cyan-400 transition-all duration-300 ease-in-out group-hover:rotate-6"
                      />
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
