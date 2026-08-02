import { FloatingNav } from './components/FloatingNav'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { AchievementsSection } from './components/AchievementsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-text">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:64px_64px] opacity-[0.06]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(0,91,172,0.20),transparent_45%)]" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(245,185,66,0.10),transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute left-[-8rem] top-[34rem] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_60%)] blur-3xl" />

      <FloatingNav />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
