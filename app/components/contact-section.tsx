"use client"

import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">Get in Touch</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
              Let&apos;s build something <span className="italic">magical</span>.
            </h3>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            Whether you have a project in mind, want to discuss interfaces, or just say hi, I&apos;m always down to
            chat.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-foreground group cursor-pointer">
              <div className="w-12 h-12 rounded-full glass border-white/5 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xl font-medium">nandiniisharma2005@gmail.com</span>
            </div>

            <div className="flex gap-4 pt-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <Button
                  key={i}
                  size="icon"
                  variant="outline"
                  className="rounded-full glass border-white/10 h-12 w-12 group bg-transparent"
                >
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form className="space-y-6 glass border-white/5 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full" />

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <Input
                  placeholder="Your name"
                  className="bg-white/5 border-white/5 focus-visible:ring-primary/50 h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <Input
                  placeholder="your@email.com"
                  className="bg-white/5 border-white/5 focus-visible:ring-primary/50 h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <Textarea
                placeholder="Tell me about your project..."
                className="bg-white/5 border-white/5 focus-visible:ring-primary/50 min-h-[160px] resize-none"
              />
            </div>

            <Button size="lg" className="w-full h-14 text-base gap-2 group">
              Send Message <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
