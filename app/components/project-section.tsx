"use client"

import { useState } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { initialData } from "@/lib/data"
import {
  Github,
  ArrowUpRight,
  Database,
  Brain,
  Server,
  Layers
} from "lucide-react"

const categoryIcons: Record<string, any> = {
  Backend: Server,
  AI: Brain,
  Others: Layers,
}

export function ProjectsSection() {
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Backend", "AI", "Others"]

  const filteredProjects =
    filter === "All"
      ? initialData.projects
      : initialData.projects.filter((project) =>
          project.tags.some((tag) =>
            tag.toLowerCase().includes(filter.toLowerCase())
          )
        )

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-semibold tracking-tight text-primary">
            Projects
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            A curated selection of Research projects, AI products, and
            production-ready applications.
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="flex justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-1.5 text-xs rounded-full border transition-all
                ${
                  filter === cat
                    ? "bg-primary/10 border-primary text-primary shadow-[0_0_14px_rgba(var(--ring),0.45)]"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => {
                const Icon =
                  categoryIcons[
                    project.tags.find((t) =>
                      categories.includes(t)
                    ) || "Others"
                  ] || Database

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {/* CARD */}
                    <div
                      className="
                        relative h-full
                        rounded-xl
                        bg-card
                        border border-primary/25
                        shadow-[0_0_24px_rgba(var(--ring),0.2)]
                        hover:shadow-[0_0_40px_rgba(var(--ring),0.4)]
                        transition-all
                      "
                    >
                      {/* ACTION ICONS */}
                      <div className="absolute top-4 right-4 flex gap-3 text-muted-foreground">
                        {project.githubUrl && (
                          <Github
                            className="w-4 h-4 cursor-pointer hover:text-primary"
                            onClick={() =>
                              window.open(project.githubUrl, "_blank")
                            }
                          />
                        )}
                        {project.liveUrl && (
                          <ArrowUpRight
                            className="w-4 h-4 cursor-pointer hover:text-primary"
                            onClick={() =>
                              window.open(project.liveUrl, "_blank")
                            }
                          />
                        )}
                      </div>

                      {/* CONTENT */}
                      <div className="p-7 space-y-5">

                        {/* TITLE ROW */}
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {project.title}
                          </h3>
                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>

                        {/* TAGS */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="
                                px-2.5 py-0.5
                                text-[11px]
                                rounded-full
                                border border-primary/25
                                text-primary
                                bg-primary/10
                              "
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* FOOTER CTA */}
                        <div className="pt-4">
                          <span
                            onClick={() =>
                              project.liveUrl &&
                              window.open(project.liveUrl, "_blank")
                            }
                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline cursor-pointer"
                          >
                            View Project <ArrowUpRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  )
}
