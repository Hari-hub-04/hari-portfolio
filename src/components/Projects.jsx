import { ChevronLeft, ChevronRight, ExternalLink, Globe } from 'lucide-react'
import { useState } from 'react'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { hardwareProjects, softwareProjects } from '../data/portfolioData'

function renderProjectVideo(video, projectTitle, index) {
  if (video.type === 'youtube') {
    return (
      <iframe
        className="aspect-video w-full"
        src={video.src}
        title={video.title || `${projectTitle} demo video ${index + 1}`}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    )
  }

  return (
    <video className="aspect-video w-full" controls preload="metadata">
      <source src={video.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

function StageMediaCard({ stage, projectTitle }) {
  const [activeImage, setActiveImage] = useState(0)

  const showPrevious = () => {
    setActiveImage((prev) => (prev === 0 ? stage.images.length - 1 : prev - 1))
  }

  const showNext = () => {
    setActiveImage((prev) => (prev === stage.images.length - 1 ? 0 : prev + 1))
  }

  return (
    <article className="mt-2 rounded-2xl border border-slate-700 bg-slate-900/70 p-5 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl md:p-6">
      <h4 className="text-lg font-semibold text-white md:text-xl">{stage.title}</h4>
      <p className="mt-3 text-sm text-slate-300 md:text-base">{stage.description}</p>

      <div className="mt-5">
        <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeImage * 100}%)` }}
          >
            {stage.images.map((img, index) => (
              <img
                key={`${stage.title}-${index}`}
                src={img}
                alt={`${stage.title} ${index + 1}`}
                className="h-56 w-full flex-shrink-0 object-cover"
              />
            ))}
          </div>

          {stage.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-600 bg-slate-950/70 p-2 text-slate-100 transition hover:bg-slate-800"
                aria-label="Previous image"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-600 bg-slate-950/70 p-2 text-slate-100 transition hover:bg-slate-800"
                aria-label="Next image"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}
        </div>

        {stage.images.length > 1 && (
          <div className="mt-3 flex items-center justify-center gap-2">
            {stage.images.map((_, dotIndex) => (
              <button
                key={`${stage.title}-dot-${dotIndex}`}
                type="button"
                onClick={() => setActiveImage(dotIndex)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  dotIndex === activeImage ? 'bg-cyan-300' : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Show image ${dotIndex + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {stage.videos?.length > 0 && (
        <div className="mt-5 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Demo Videos</p>
          <div className="grid gap-4">
            {stage.videos.map((video, index) => (
              <div
                key={`${stage.title}-video-${index}`}
                className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/70"
              >
                {renderProjectVideo(video, projectTitle, index)}
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

function HardwareProjectCard({ project, delay }) {
  const stages =
    project.stages ||
    [
      {
        title: `${project.title} - Project Build`,
        description: project.description,
        images: project.images || [],
        videos: project.videos || [],
      },
    ]

  return (
    <Reveal delay={delay} className={project.featured ? 'lg:col-span-2' : ''}>
      <article className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/50 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              {project.featured && (
                <span className="rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
                  Featured Hardware Project
                </span>
              )}
              {project.badges?.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100"
                >
                  {badge}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            {project.role && <p className="mt-2 text-sm font-medium text-cyan-300">Role: {project.role}</p>}
          </div>
        </div>

        <p className="mt-4 text-slate-300">{project.description}</p>

        {project.technologies?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={`${project.title}-${tech}`}
                className="rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-100"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-start">
          {stages.map((stage) => (
            <StageMediaCard key={`${project.title}-${stage.title}`} stage={stage} projectTitle={project.title} />
          ))}
        </div>
      </article>
    </Reveal>
  )
}

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="Hardware and Software Portfolio"
          description="A curated set of engineering projects across production software and practical hardware systems."
        />

        <div className="space-y-16">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-white">Software Projects</h3>
            <div className="grid gap-6 lg:grid-cols-2">
              {softwareProjects.map((project, index) => (
                <Reveal key={project.title} delay={index * 100}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/50 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl md:p-7">
                    <h4 className="text-xl font-semibold text-white">{project.title}</h4>

                    {project.role && (
                      <p className="mt-2 text-sm font-medium text-cyan-300">Role: {project.role}</p>
                    )}

                    {project.tagline && (
                      <p className="mt-2 text-sm italic text-slate-200">{project.tagline}</p>
                    )}

                    <p className="mt-3 text-slate-300">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={`${project.title}-${tech}`}
                          className="rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.linkType === 'live' && (
                      <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-300">
                        <Globe size={13} /> Live Website
                      </p>
                    )}

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-indigo-400 hover:shadow-xl"
                    >
                      {project.buttonLabel || 'View Project'} <ExternalLink size={15} />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-bold text-white">Hardware Projects</h3>
            <div className="mt-3 grid gap-10 lg:grid-cols-2 lg:items-start">
              {hardwareProjects.map((project, index) => (
                <HardwareProjectCard key={project.title} project={project} delay={index * 110} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects


