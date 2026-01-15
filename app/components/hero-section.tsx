"use client"

import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Animated Nebulas */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full animate-pulse-slow mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-500/10 blur-[180px] rounded-full animate-pulse-slow delay-1000 mix-blend-screen pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl text-center z-10 space-y-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border-white/5 text-xs font-semibold tracking-[0.15em] uppercase text-primary/80 mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for Innovation
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] glow-text">
          Nandini <span className="text-primary italic opacity-90 block md:inline">Dev.</span>
        </h1>

        <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          Crafting high-fidelity <span className="text-foreground font-medium">digital artifacts</span> where precise
          engineering meets avant-garde interaction design.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="h-14 px-8 text-base gap-2 rounded-full">
            Explore My Work <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="h-14 px-8 text-base rounded-full hover:bg-white/5 transition-colors"
          >
            Read My Blog
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
