function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-slate-100 md:text-4xl">{title}</h2>
      <p className="mt-4 text-slate-300">{description}</p>
    </div>
  )
}

export default SectionTitle
