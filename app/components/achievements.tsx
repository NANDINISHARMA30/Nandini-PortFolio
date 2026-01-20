"use client"

import { motion } from "framer-motion"
import { initialData } from "@/lib/data"
import { Card, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { useState } from "react"
import { AnimatePresence, LayoutGroup } from "framer-motion"

export function ProjectsSection() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", ...new Set(initialData.projects.flatMap((p) => p.tags))]

  const filteredProjects =
    filter === "All" ? initialData.projects : initialData.projects.filter((p) => p.tags.includes(filter))

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary/60">Selected Work</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tight">Recent Experiments</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="group overflow-hidden border-white/5 bg-opacity-20 backdrop-blur-3xl hover:border-primary/30 transition-all duration-500 shadow-2xl hover:shadow-primary/10">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                        <Button size="icon" variant="secondary" className="rounded-full glass h-12 w-12">
                          <ArrowUpRight className="w-5 h-5" />
                        </Button>
                        <Button size="icon" variant="secondary" className="rounded-full glass h-12 w-12">
                          <Github className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                    <CardHeader className="p-6 pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                        <span className="text-xs text-muted-foreground uppercase tracking-widest">2024</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </CardHeader>
                    <CardFooter className="p-6 pt-4 gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-white/5 border-white/5 font-mono text-[10px] uppercase"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  )
}
