import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import { SectionHeading } from './SectionHeading'
import { fadeInUp, staggerContainer } from '../lib/motion'

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Real systems built for dashboards,"
        accent="automation, and operational clarity."
        description="These projects come directly from the portfolio work in your CV, with real visuals adapted from the original document. The focus is on practical systems that help teams monitor, report, and act faster."
      />

      <motion.div
        className="mt-14 grid gap-6 lg:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className={`glass-panel group relative overflow-hidden rounded-[2rem] p-6 md:p-8 ${
              index === 0 || index === 1 ? 'lg:col-span-2' : ''
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
            <div className="relative grid h-full gap-8 lg:grid-cols-[1fr_0.95fr] lg:content-center lg:items-center">
              <div className="space-y-6">
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-muted">
                  {project.category}
                </span>
                <div>
                  <h3 className="text-3xl font-semibold text-white md:text-4xl">{project.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-subtle md:text-lg">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Detail
                  <ArrowUpRight size={16} />
                </a>
                <div className="flex flex-wrap gap-3">
                  {project.stats.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[18rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30">
                <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.40))]" />
                <img
                  src={project.image}
                  alt={project.title}
                  width="960"
                  height="720"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 z-20 p-5">
                  <div className="rounded-[1.25rem] border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">Portfolio Screenshot</p>
                    <p className="mt-2 text-sm leading-6 text-white/90">
                      Real visual adapted from the original CV portfolio, with figures already randomized for confidentiality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <p className="mt-8 text-sm leading-7 text-subtle">
        Note: All figures shown in the project screenshots are randomized dummy data, not actual figures, to protect company confidentiality.
      </p>
    </section>
  )
}
