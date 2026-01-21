"use client"

import { motion } from "framer-motion"
import {
  Award,
  Shield,
  Trophy,
  Star,
  CheckCircle,
  Medal,
} from "lucide-react"

const certificationsData = [
  {
    title: "Technical Certifications",
    subtitle: "Industry-recognized technical skills and expertise",
    icon: Medal,
    items: [
      { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", icon: Shield },
      { name: "Google Cloud Professional Developer", issuer: "Google Cloud", icon: Star },
      { name: "Microsoft Azure Fundamentals", issuer: "Microsoft", icon: Trophy },
      { name: "Certified Kubernetes Administrator", issuer: "Cloud Native Computing Foundation", icon: CheckCircle },
    ],
  },
  {
    title: "Programming & Development",
    subtitle: "Programming languages and development frameworks",
    icon: Award,
    items: [
      { name: "React Developer Certification", issuer: "Meta", icon: Star },
      { name: "Node.js Certified Developer", issuer: "OpenJS Foundation", icon: CheckCircle },
      { name: "Python Programming Professional", issuer: "Python Institute", icon: Trophy },
      { name: "Full Stack Web Development", issuer: "FreeCodeCamp", icon: Medal },
    ],
  },
  {
    title: "Data Science & AI",
    subtitle: "Machine learning and data science credentials",
    icon: Trophy,
    items: [
      { name: "TensorFlow Developer Certificate", issuer: "Google", icon: Star },
      { name: "Machine Learning Specialization", issuer: "Coursera", icon: Award },
      { name: "Data Science Professional", issuer: "IBM", icon: Shield },
      { name: "Deep Learning Specialization", issuer: "Coursera", icon: CheckCircle },
    ],
  },
]

export function CertificationSection() {
  return (
    <section id="certifications" className="py-32 px-6">
      {/* SECTION HEADING */}
      <div className="max-w-7xl mx-auto mb-16 text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Certifications
        </h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          Professional certifications that validate my expertise and commitment to continuous learning
        </p>
      </div>

      {/* CERTIFICATIONS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationsData.map((section, index) => {
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

              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const ItemIcon = item.icon
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                      className="flex items-center gap-3 rounded-xl bg-black/30 border border-white/5 p-4 hover:border-primary/40 transition"
                    >
                      <ItemIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium truncate">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.issuer}</p>
                      </div>
                    </motion.div>
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