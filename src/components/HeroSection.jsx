import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, BarChart3, Database, BriefcaseBusiness } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../lib/motion'

const highlights = [
  ['Dashboard Development', 'Web, mobile, and Excel surfaces for high-clarity reporting'],
  ['Data Automation', 'Python workflows that compress hours of manual work into minutes'],
  ['Business Intelligence', 'KPI storytelling built for faster operational decisions'],
]

const statCards = [
  { title: 'Experience', value: '8 Years', detail: 'Across data, operations, and creative execution', icon: BriefcaseBusiness },
  { title: 'Records Processed', value: '3.5M+', detail: 'Large-scale operational rows automated with Python', icon: Database },
  { title: 'Systems Built', value: '6+', detail: 'Dashboards, apps, and reporting flows delivered', icon: BarChart3 },
]

export function HeroSection() {
  return (
    <section id="hero" className="section-shell relative pb-16 pt-14 md:pb-24 md:pt-24">
      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="eyebrow">
            Taufik Ismail Portfolio
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Turning operational data
            <br />
            <span className="font-display italic text-white/88">
              into beautiful, useful decisions.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-8 max-w-2xl text-lg leading-8 text-muted md:text-xl"
          >
            Data Analyst with a proven track record at PT Bank Mandiri (Persero) Tbk,
            transforming large-scale transaction data into dashboards, automation systems,
            and insights that make decision-making easier.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#0A6CC6]"
            >
              View Portfolio
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact Me
              <Mail size={16} />
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-14 grid gap-4 sm:grid-cols-3"
          >
            {highlights.map(([title, detail]) => (
              <div key={title} className="glass-panel rounded-3xl p-5">
                <p className="text-sm font-medium text-white">{title}</p>
                <p className="mt-2 text-sm leading-6 text-subtle">{detail}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative min-h-[38rem]"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="absolute inset-0 m-auto h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,91,172,0.22),transparent_65%)] blur-3xl animate-ambient-pulse" />
          <div className="absolute right-8 top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(245,185,66,0.12),transparent_70%)] blur-3xl" />

          <motion.div
            variants={fadeInUp}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-panel relative overflow-hidden rounded-[2rem] p-4 md:absolute md:right-2 md:top-10 md:w-[28rem]"
          >
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/35">
              <img
                src="/portfolio/project-1.webp"
                alt="Banking performance dashboard preview"
                width="960"
                height="773"
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute left-8 top-8 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/80 backdrop-blur-xl">
              Live dashboard preview
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-panel relative flex items-end justify-center overflow-hidden rounded-[2rem] p-0 md:absolute md:left-2 md:top-28 md:w-[15rem]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_50%)]" />
            <img
              src="/portfolio/taufik-portrait.webp"
              alt="Portrait of Taufik Ismail"
              width="360"
              height="450"
              decoding="async"
              fetchPriority="high"
              className="relative h-[19rem] w-full object-cover object-top"
            />
          </motion.div>

          {statCards.map((card, index) => {
            const Icon = card.icon
            const positions = [
              'md:absolute md:left-10 md:bottom-24 md:w-[16rem]',
              'md:absolute md:right-12 md:bottom-10 md:w-[18rem]',
              'md:absolute md:left-52 md:top-[28rem] md:w-[17rem]',
            ]

            return (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                animate={{ y: [0, index % 2 === 0 ? -6 : 6, 0] }}
                transition={{ duration: 6 + index, repeat: Infinity, ease: 'easeInOut' }}
                className={`glass-panel relative rounded-[1.75rem] p-5 ${positions[index]}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted">{card.title}</p>
                    <p className="mt-3 text-2xl font-semibold text-white">{card.value}</p>
                    <p className="mt-2 text-sm leading-6 text-subtle">{card.detail}</p>
                  </div>
                  <span className="rounded-2xl border border-white/10 bg-white/10 p-3 text-accent">
                    <Icon size={18} />
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
