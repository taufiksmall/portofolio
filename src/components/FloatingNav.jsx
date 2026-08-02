import { Download } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function FloatingNav() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 shadow-glass backdrop-blur-2xl md:px-6">
        <a href="#hero" className="flex items-center gap-3 text-sm font-semibold tracking-[0.24em] text-white/90 uppercase">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-primary/15 text-base text-white">
            T
          </span>
          <span className="hidden sm:inline">Taufik Ismail</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="./cv.pdf"
            download
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10 md:inline-flex"
          >
            <Download size={16} />
            Download CV
          </a>
          <div className="flex items-center gap-2 md:hidden">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-muted transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
