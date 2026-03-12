import { Send } from 'lucide-react'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { contacts } from '../data/portfolioData'

function Contact() {
  return (
    <section id="contact" className="section-shell pb-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let&apos;s Build Something Great"
          description="Open to full-time roles, freelance projects, and product collaborations."
        />

        <Reveal>
          <div className="glass-card p-8 md:p-10">
            <div className="grid gap-4 md:grid-cols-3">
              {contacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Email' ? undefined : '_blank'}
                  rel={item.label === 'Email' ? undefined : 'noreferrer'}
                  className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-700 hover:shadow-xl"
                >
                  <item.icon className="mb-3 text-cyan-300" size={20} />
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="font-semibold text-slate-100">{item.value}</p>
                </a>
              ))}
            </div>

            <a
              href="mailto:harikumarat04@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-indigo-400 hover:shadow-xl"
            >
              Contact Me <Send size={17} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
