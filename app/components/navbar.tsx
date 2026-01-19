"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Layout,
  Moon,
  Github,
  Linkedin,
  Terminal,
  FileText,
} from "lucide-react"
import { Button } from "@/app/components/ui/button"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Learning", href: "#learning" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-purple-900/20 backdrop-blur-md border-b border-purple-500/20 py-4 shadow-sm"
      : "bg-transparent py-6"
  }`}
>
  <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
    {/* SOFT GLOW BEHIND NAV */}
    {scrolled && (
      <div className="absolute inset-0 -z-10 rounded-lg bg-purple-500/10 blur-2xl animate-pulse-slow" />
    )}

    {/* LOGO */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-2 font-bold text-xl tracking-tight relative z-10"
    >
      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
        <Layout className="w-5 h-5" />
      </div>
      <span>NANDINI.</span>
    </motion.div>

    {/* DESKTOP NAV */}
    <div className="hidden md:flex items-center gap-6 relative z-10">
      {navLinks.map((link, i) => (
        <motion.a
          key={link.name}
          href={link.href}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="text-sm font-medium text-white/80 hover:text-primary transition-colors"
        >
          {link.name}
        </motion.a>
      ))}
      <a
        href="#terminal"
        className="flex items-center gap-1 text-sm text-white/80 hover:text-primary transition-colors"
      >
        <Terminal className="w-4 h-4" />
        Terminal
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        className="flex items-center gap-1 text-sm text-white/80 hover:text-primary transition-colors"
      >
        <FileText className="w-4 h-4" />
        Resume
      </a>

      {/* SOCIALS */}
      <a href="https://github.com/" target="_blank">
        <Github className="w-4 h-4 text-white/80 hover:text-primary transition-colors" />
      </a>
      <a href="https://linkedin.com/" target="_blank">
        <Linkedin className="w-4 h-4 text-white/80 hover:text-primary transition-colors" />
      </a>

      {/* THEME TOGGLE */}
      <Button size="icon" variant="ghost">
        <Moon className="w-4 h-4" />
      </Button>
    </div>

    {/* MOBILE TOGGLE */}
    <button
      className="md:hidden text-white/80 relative z-10"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <X /> : <Menu />}
    </button>
  </div>

  {/* MOBILE MENU */}
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="md:hidden bg-purple-900/20 backdrop-blur-xl border-b border-purple-500/20 overflow-hidden"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white/80 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#terminal"
            className="flex items-center gap-2 text-white/80 hover:text-primary"
          >
            <Terminal className="w-5 h-5" /> Terminal
          </a>

          <a
            href="/resume.pdf"
            className="flex items-center gap-2 text-white/80 hover:text-primary"
          >
            <FileText className="w-5 h-5" /> Resume
          </a>

          <div className="flex gap-4 pt-4">
            <Github className="text-white/80 hover:text-primary" />
            <Linkedin className="text-white/80 hover:text-primary" />
            <Moon className="text-white/80 hover:text-primary" />
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>

  )
}
