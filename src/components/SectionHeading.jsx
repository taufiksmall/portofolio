import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'

export function SectionHeading({ eyebrow, title, accent, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start'

  return (
    <motion.div
      className={`flex max-w-3xl flex-col gap-5 ${alignment}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeInUp}
    >
      <span className="eyebrow">{eyebrow}</span>
      <div className="space-y-3">
        <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {title}{' '}
          <span className="font-display text-white/90 italic">
            {accent}
          </span>
        </h2>
        <p className="section-copy">{description}</p>
      </div>
    </motion.div>
  )
}
