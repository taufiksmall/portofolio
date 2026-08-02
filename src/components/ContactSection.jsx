import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, Instagram, Linkedin, Mail } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { fadeInUp, staggerContainer } from '../lib/motion'

const contacts = [
  { label: 'Email', value: 'ismailtaufik808@gmail.com', href: 'mailto:ismailtaufik808@gmail.com', icon: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/taufiksmail', href: 'https://www.linkedin.com/in/taufiksmail/', icon: Linkedin },
  { label: 'Behance', value: 'behance.net/ismailtaufe606', href: 'https://www.behance.net/ismailtaufe606', icon: Globe },
  { label: 'Instagram', value: '@taufiksmall', href: 'https://www.instagram.com/taufiksmall', icon: Instagram },
]

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:ismailtaufik808@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section-shell py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Contact"
          title="Open to thoughtful work in data,"
          accent="dashboard, and automation systems."
          description="For collaborations around analytics, reporting products, data automation, or digital decision-support tools, feel free to reach out directly."
        />

        <motion.div
          className="glass-panel rounded-[2rem] p-6 md:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {contacts.map((item) => {
              const Icon = item.icon

              return (
                <motion.a
                  key={item.label}
                  variants={fadeInUp}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <span className="inline-flex rounded-2xl border border-white/10 bg-white/10 p-3 text-accent">
                    <Icon size={18} />
                  </span>
                  <p className="mt-4 text-sm uppercase tracking-[0.2em] text-subtle">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-white md:text-base">{item.value}</p>
                </motion.a>
              )
            })}
          </div>

          <motion.form variants={fadeInUp} className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                required
                value={form.name}
                onChange={handleChange('name')}
                placeholder="Your name"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-subtle focus:border-primary"
              />
              <input
                type="email"
                required
                value={form.email}
                onChange={handleChange('email')}
                placeholder="Your email"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-subtle focus:border-primary"
              />
            </div>
            <textarea
              rows="5"
              required
              value={form.message}
              onChange={handleChange('message')}
              placeholder="Tell me about your project or collaboration."
              className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-subtle focus:border-primary"
            />
            <button
              type="submit"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#0A6CC6]"
            >
              Start the Conversation
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
