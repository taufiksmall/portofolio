import { motion } from 'framer-motion'
import { Building2, Workflow, BarChart3, Palette, MapPin, GraduationCap } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { fadeInUp, staggerContainer } from '../lib/motion'

const pillars = [
  {
    title: 'Banking Analytics',
    body: 'Experience translating transaction banking operations into dashboards, reporting systems, and faster decisions.',
    icon: Building2,
  },
  {
    title: 'Automation Thinking',
    body: 'Comfortable turning manual reporting, matching, and recap flows into repeatable automation with Python and Apps Script.',
    icon: Workflow,
  },
  {
    title: 'Business Intelligence',
    body: 'Focused on making complex operational signals easier to read through clean visual hierarchy and KPI structure.',
    icon: BarChart3,
  },
  {
    title: 'Design Background',
    body: 'A creative foundation in visual communication that helps make analytical products look polished and easy to use.',
    icon: Palette,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="Data work shaped by operations,"
          accent="design, and execution."
          description="I build dashboards, reporting systems, and automation workflows that help teams see performance faster and act with more confidence. My background combines banking analytics, operational support, and creative communication into one practical toolkit."
        />

        <motion.div
          className="grid gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.article
            variants={fadeInUp}
            className="glass-panel overflow-hidden rounded-[2rem]"
          >
            <div className="grid gap-0 md:grid-cols-[0.42fr_0.58fr]">
              <div className="relative min-h-[22rem] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(0,91,172,0.20),transparent_55%)]">
                <img
                  src="portfolio/taufik-portrait.webp"
                  alt="Taufik Ismail portrait"
                  width="360"
                  height="450"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-white">Taufik Ismail</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-accent">Data Analyst</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                    <span className="inline-flex items-center gap-2 text-sm text-muted">
                      <MapPin size={16} />
                      Based in Makassar
                    </span>
                    <p className="mt-3 text-sm leading-7 text-subtle">
                      Experienced in large-scale transaction data, internal reporting, merchant performance monitoring, and dashboard automation.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                    <span className="inline-flex items-center gap-2 text-sm text-muted">
                      <GraduationCap size={16} />
                      Universitas Muslim Indonesia
                    </span>
                    <p className="mt-3 text-sm leading-7 text-subtle">
                      Education completed in 2022, with a career path spanning analytics, administration, multimedia, and operational leadership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.div variants={staggerContainer} className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon

              return (
                <motion.article
                  key={pillar.title}
                  variants={fadeInUp}
                  className="glass-panel rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <span className="inline-flex rounded-2xl border border-white/10 bg-white/8 p-3 text-accent">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-subtle">{pillar.body}</p>
                </motion.article>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
