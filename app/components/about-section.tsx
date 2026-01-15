"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/app/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">The Visionary</h2>
            <h3 className="text-4xl md:text-5xl font-bold">
              Crafting experiences that transcend traditional boundaries.
            </h3>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              My journey began in the vibrant world of front-end experimentation, where I discovered that code isn't
              just a logic-driven medium, but an artistic one. Believing that understanding the technical foundations
              leads to more thoughtful designs.
            </p>
            <p>
              In the past I&apos;ve developed modern design systems, fluid dashboard interfaces, and interactive
              experiments that focus on the intersection of usability and aesthetic beauty.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <p className="text-3xl font-bold text-foreground">08+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">42+</p>
              <p className="text-sm text-muted-foreground">Projects Launched</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full z-0 opacity-30" />
          <Card className="relative z-10 overflow-hidden border-white/5 bg-card/50 backdrop-blur-xl group">
            <CardContent className="p-0">
              <img
                src="/developer-portrait.jpeg"
                alt="Profile"
                className="w-full aspect-[4/5] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xl font-bold">Nandini Sharma</p>
                <p className="text-sm text-muted-foreground">AI Explorer | Frontend Developer | Product Designer</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
