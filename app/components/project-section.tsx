"use client"

import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { useState } from "react"
import { initialData } from "@/lib/data"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { ArrowUpRight, Github, Code } from "lucide-react"

export function ProjectsSection() {
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Backend", "AI", "Others"]

  const filteredProjects =
    filter === "All"
      ? initialData.projects
      : initialData.projects.filter((p) =>
          p.tags.some((tag) =>
            tag.toLowerCase().includes(filter.toLowerCase())
          )
        )

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Projects
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm">
            Explore my latest projects showcasing backend development,
            AI implementation, and system architecture.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-md text-xs font-semibold transition-all border
                ${
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-background/40 text-muted-foreground border-border hover:bg-background/70"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.35 }}
                >
                  <Card className="relative h-full bg-background/40 backdrop-blur-xl border border-border hover:border-primary/40 transition-all">

                    {/* Icons */}
                   <div className="absolute top-4 right-4 flex gap-3">
  {project.githubUrl && (
    <Github
      onClick={() => window.open(project.githubUrl, "_blank")}
      className="w-4 h-4 cursor-pointer text-muted-foreground hover:text-primary"
    />
  )}
  {project.liveUrl && (
    <ArrowUpRight
      onClick={() => window.open(project.liveUrl, "_blank")}
      className="w-4 h-4 cursor-pointer text-muted-foreground hover:text-primary"
    />
  )}
</div>


                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2 text-primary">
                        <Code className="w-4 h-4" />
                        <h3 className="text-lg font-semibold">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-[10px] uppercase bg-primary/10 text-primary border-primary/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <span className="text-sm font-medium text-primary hover:underline flex items-center gap-1 cursor-pointer">
                          View Project <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
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
