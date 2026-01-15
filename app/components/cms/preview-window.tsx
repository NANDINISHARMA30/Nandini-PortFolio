"use client"

import { StarsBackground } from "@/app/components/stars-background"
import { Navbar } from "@/app/components/navbar"
import { HeroSection } from "@/app/components/hero-section"
import { AboutSection } from "@/app/components/about-section"
import { SkillsSection } from "@/app/components/skills-section"
import { ProjectsSection } from "@/app/components/projects-section"
import { ContactSection } from "@/app/components/contact-section"
import { Footer } from "@/app/components/footer"
import { Button } from "@/app/components/ui/button"
import { X } from "lucide-react"

interface PreviewWindowProps {
  onClose: () => void
}

export function PreviewWindow({ onClose }: PreviewWindowProps) {
  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto scroll-smooth">
      <div className="fixed top-6 right-6 z-[110]">
        <Button size="icon" variant="secondary" className="rounded-full glass h-12 w-12" onClick={onClose}>
          <X className="w-6 h-6" />
        </Button>
      </div>

      <main className="relative min-h-screen overflow-x-hidden">
        <StarsBackground />
        <Navbar />
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  )
}
