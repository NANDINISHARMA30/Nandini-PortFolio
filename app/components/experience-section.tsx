"use client"

import { motion } from "framer-motion"
import { initialData } from "@/lib/data"
import { Badge } from "@/app/components/ui/badge" // ✅ assumes named export

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-32 px-6 relative bg-white/5 backdrop-blur-[2px]"
    >
      <div className="max-w-5xl mx-auto space-y-16">

        {/* HEADER */}
        <div className="space-y-4 text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary/60">
            Career Journey
          </h2>
          <h3 className="text-5xl font-black tracking-tight">
            Professional Orbit
          </h3>
        </div>

        {/* TIMELINE */}
        <div className="space-y-12">
          {initialData.experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="
                relative pl-8 md:pl-0
                grid md:grid-cols-[1fr_2px_2fr]
                gap-8 md:gap-12
                group
              "
            >
              {/* LEFT COLUMN */}
              <div className="md:text-right flex flex-col justify-center">
                <span className="text-primary font-mono text-sm tracking-tighter mb-1">
                  {exp.period}
                </span>
                <h4 className="text-2xl font-bold text-foreground leading-none">
                  {exp.company}
                </h4>
              </div>

              {/* CENTER LINE */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/5 md:relative md:bg-white/5 flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />
              </div>

              {/* RIGHT CONTENT */}
              <div className="space-y-4 pb-12">
                <h5 className="text-lg font-semibold text-primary/80 uppercase tracking-widest">
                  {exp.role}
                </h5>

                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-white/10 text-[10px] uppercase font-bold tracking-wider px-3"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
