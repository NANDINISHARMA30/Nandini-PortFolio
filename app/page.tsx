import { StarsBackground } from "@/app/components/stars-background"
import { Navbar } from "@/app/components/navbar"
import { HeroSection } from "@/app/components/hero-section"
import { AboutSection } from "@/app/components/about-section"
import { SkillsSection } from "@/app/components/skills-section"
import { ProjectsSection } from "@/app/components/projects-section"
import { ExperienceSection } from "@/app/components/experience-section"
import { ContactSection } from "@/app/components/contact-section"
import { Footer } from "@/app/components/footer"
import { CustomCursor } from "@/app/components/custom-cursor"
import { ScrollProgress } from "@/app/components/scroll-progress"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <CustomCursor />
      <StarsBackground />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
