import { motion } from 'framer-motion'
import { experience } from '../data/experience'
import { SectionHeading } from './SectionHeading'
import { fadeInUp, staggerContainer } from '../lib/motion'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Experience"
        title="A timeline across analytics,"
        accent="operations, and creative execution."
        description="The through-line is consistent: building things that make information easier to process, communicate, and act on, whether inside banking, business operations, or visual projects."
      />

      <motion.div
        className="relative mt-14 space-y-8 before:absolute before:left-[1.05rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/10 md:before:left-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        {experience.map((item, index) => (
          <motion.div
            key={`${item.role}-${item.period}`}
            variants={fadeInUp}
            className={`relative grid gap-4 md:grid-cols-2 ${
              index % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'
            }`}
          >
            <div className="hidden md:block" />
            <span className="absolute left-0 top-6 z-10 h-8 w-8 rounded-full border border-white/10 bg-black/70 shadow-glow md:left-1/2 md:-translate-x-1/2" />

            <article className="glass-panel ml-12 rounded-[1.75rem] p-6 md:ml-0">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">{item.period}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.role}</h3>
              <p className="mt-1 text-sm text-muted">{item.company}</p>
              <p className="mt-4 text-sm leading-7 text-subtle">{item.summary}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.16em] text-white/80"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </article>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
