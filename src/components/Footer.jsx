import { Globe, Instagram, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/taufiksmail/', icon: Linkedin },
  { label: 'Behance', href: 'https://www.behance.net/ismailtaufe606', icon: Globe },
  { label: 'Instagram', href: 'https://www.instagram.com/taufiksmall', icon: Instagram },
  { label: 'Email', href: 'mailto:ismailtaufik808@gmail.com', icon: Mail },
]

export function Footer() {
  return (
    <footer className="section-shell pb-10 pt-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-xl md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              Turning raw data into beautiful,
              <br />
              <span className="font-display italic text-white/88">
                useful decisions through systems and insight.
              </span>
            </p>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition hover:-translate-y-0.5 hover:text-white"
                  aria-label={item.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
