import { animate, motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { SectionHeading } from './SectionHeading'
import { fadeInUp, staggerContainer } from '../lib/motion'

const stats = [
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 6, suffix: '+', label: 'Systems Built' },
  { value: 3.5, suffix: 'M+', label: 'Records Processed' },
  { value: 180, suffix: '', label: 'Branches Monitored' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.7 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.4,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => setDisplayValue(Number.isInteger(value) ? Math.round(latest) : Number(latest.toFixed(1))),
      })

      return () => controls.stop()
    }
  }, [isInView, value])

  return (
    <span ref={ref}>{displayValue}{suffix}</span>
  )
}

export function AchievementsSection() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="glass-panel rounded-[2rem] p-8 md:p-12">
        <SectionHeading
          eyebrow="Achievements"
          title="Metrics that reflect delivery,"
          accent="scale, and consistency."
          description="The strongest story here is measurable execution: the number of systems shipped, records processed, branches monitored, and years spent building practical data solutions."
        />

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-4xl font-semibold text-white md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-subtle">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
