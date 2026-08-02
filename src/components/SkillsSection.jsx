import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { fadeInUp, staggerContainer } from '../lib/motion'

const skills = [
  'Data Analysis',
  'Business Intelligence',
  'Dashboard Development',
  'Python · Pandas',
  'Microsoft Excel Expert',
  'Data Visualization',
  'Automation',
  'Web Dashboard',
  'Mobile Dashboard',
  'Google Apps Script',
  'UI/UX Design',
  'Adobe Creative Suite',
]

export function SkillsSection() {
  return (
    <section className="section-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Skills"
        title="A toolkit built for clarity,"
        accent="speed, and decision support."
        description="From Excel and Python to internal web, mobile, and Google Sheets systems, the work is centered on making operational data easier to process, monitor, and communicate."
        align="center"
      />

      <motion.div
        className="mt-14 flex flex-wrap justify-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            variants={fadeInUp}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl ${
              index % 3 === 0 ? 'bg-primary/12' : index % 3 === 1 ? 'bg-white/5' : 'bg-accent/10'
            }`}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
