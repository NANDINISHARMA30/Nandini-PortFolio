"use client"

import { motion } from "framer-motion"
import { initialData } from "@/lib/data"
import { Code, Server, Wrench, Palette } from "lucide-react"

const categoryIcons = {
  Frontend: Code,
  Backend: Server,
  Tools: Wrench,
  Design: Palette,
}

export function SkillsSection() {
  const categories = ["Frontend", "Backend", "Tools", "Design"] as const

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">Technical Arsenal</h2>
          <h3 className="text-4xl font-bold tracking-tight">Tools of the Craft</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, i) => {
            const Icon = categoryIcons[category]
            const skills = initialData.skills.filter((s) => s.category === category)

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 text-lg font-bold border-b border-white/5 pb-4">
                  <Icon className="w-5 h-5 text-primary" />
                  <h4>{category}</h4>
                </div>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.id} className="space-y-2 group">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="group-hover:text-primary transition-colors">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
