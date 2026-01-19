"use client"

import { m, motion } from "framer-motion"
import {
  Code2,
  Monitor,
  Server,
  Database,
  Boxes,
  Braces,
  FileCode,
  Cpu,
  FlaskConical,
  GitBranch,
  Leaf,
} from "lucide-react"

const skillsData = [
  {
    title: "Languages",
    subtitle: "Programming languages I'm proficient in",
    icon: Code2,
    items: [
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: FileCode },
      { name: "Python", icon: Cpu },
      { name: "C++", icon: Code2 },
      { name: "Java", icon: Braces },
    ],
  },
  {
    title: "Frontend",
    subtitle: "Technologies for building user interfaces",
    icon: Monitor,
    items: [
      { name: "React", icon: Braces },
      { name: "React Native", icon: Braces },
      { name: "Next.js", icon: FileCode },
      { name: "Tailwind CSS", icon: Leaf },
      { name: "HTML5", icon: FileCode },
      { name: "CSS3", icon: FileCode },
    ],
  },
  {
    title: "Backend",
    subtitle: "Server-side technologies and frameworks",
    icon: Server,
    items: [
      { name: "Node.js", icon: Cpu },
      { name: "Express", icon: Server },
      { name: "FastAPI", icon: FlaskConical },
      { name: "Flask", icon: FlaskConical },
    ],
  },
  {
    title: "Databases",
    subtitle: "Database systems and data storage solutions",
    icon: Database,
    items: [
      { name: "MongoDB", icon: Leaf },
      { name: "MySQL", icon: Database },
    ],
  },
  {
    title: "Artificial Intelligence",
    subtitle: "AI, ML, and data-driven technologies ",
    icon: GitBranch,
    items: [
      { name: "Machine Learning", icon: Code2  },
      { name: "Deep Learning", icon: Leaf   },
      { name: "TensorFlow", icon: Boxes },
      { name: "PyTorch", icon: Boxes },
      { name: "Scikit-learn", icon: Cpu },
      { name: "NLP", icon: FileCode },
      { name: "Computer Vision", icon: Cpu },
      { name: "OpenAI APIs", icon: Leaf  },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6">

      {/* SECTION HEADING */}
      <div className="max-w-7xl mx-auto mb-16 text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Tech Stack
        </h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          My technical proficiencies across multiple domains of software development
        </p>
      </div>

      {/* SKILLS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((section, index) => {
          const SectionIcon = section.icon
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <SectionIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {section.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {section.items.map((item) => {
                  const ItemIcon = item.icon
                  return (
                    <div
                      key={item.name}
                      className="flex flex-col items-center justify-center gap-2 rounded-xl bg-black/30 border border-white/5 py-4 hover:border-primary/40 transition"
                    >
                      <ItemIcon className="w-6 h-6 text-primary" />
                      <span className="text-xs font-medium text-center">
                        {item.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )
        })}
      </div>

    </section>
  )
}
