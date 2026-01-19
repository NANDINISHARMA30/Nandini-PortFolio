"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import {
  ArrowRight,
  ChevronDown,
  Activity,
  Server,
  Database,
  Cpu,
  Users,
} from "lucide-react"

export function HeroSection() {
  // Typing effect for name
  const fullText = "Nandini Sharma"
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, index + 1))
        setIndex(index + 1)
      }, 120)
      return () => clearTimeout(timeout)
    }
  }, [index])

  const [firstName, lastName] = text.split(" ")

  // Typing-loop effect for roles
  const roles = ["AI Engineer", "Frontend Developer", "Product Thinker"]
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleText, setRoleText] = useState("")
  const [roleCharIndex, setRoleCharIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRoleText(roles[roleIndex].slice(0, roleCharIndex + 1))
      if (roleCharIndex + 1 === roles[roleIndex].length) {
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length)
          setRoleCharIndex(0)
        }, 1500)
      } else {
        setRoleCharIndex(roleCharIndex + 1)
      }
    }, 100)
    return () => clearTimeout(timeout)
  }, [roleCharIndex, roleIndex])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 px-6 overflow-hidden">
      {/* BACKGROUND ORBS */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full mix-blend-screen" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-emerald-500/10 blur-[180px] rounded-full mix-blend-screen" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT TERMINAL INTRO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative space-y-8"
        >
          {/* PURPLE LIGHT GLOW */}
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-purple-500/20 blur-3xl animate-pulse-slow" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs tracking-widest text-primary relative z-10">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            System Status: Online
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight relative z-10">
            Hi, I’m{" "}
            <span className="text-primary relative z-10">
              {firstName}
              {lastName && ` ${lastName}`}
            </span>
            <span className="animate-pulse ml-1">|</span>
          </h1>

          {/* Animated Roles */}
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium relative z-10">
            {roleText}
            <span className="animate-pulse ml-1">|</span>
          </h2>

          <p className="max-w-xl text-muted-foreground leading-relaxed relative z-10">
            Backend logic by discipline, AI by curiosity, frontend by craft.
            I design and engineer systems where performance, intelligence,
            and experience intersect.
          </p>

          <div className="flex gap-4 relative z-10">
            <Button size="lg" className="rounded-full gap-2">
              Explore Projects <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full border border-white/10"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>

        {/* RIGHT SYSTEM DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-6"
        >
          <div className="flex justify-between items-center">
            <span className="text-xs tracking-widest text-primary">
              USER.PROFILE v4.5.1
            </span>
            <span className="flex items-center gap-2 text-xs text-green-400">
              <Activity className="w-3 h-3" /> SYS: ACTIVE
            </span>
          </div>

          {/* PROFILE HEADER */}
          <div className="flex items-center gap-4 pb-4 border-b border-white/10">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/20">
              <Image
                src="/developer-portrait.jpeg"
                alt="Developer portrait"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Nandini Sharma
              </p>
              <p className="text-xs text-muted-foreground">
                Noida   
              </p>
            </div>
          </div>

          {/* METRICS */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Metric label="Uptime" value="1337d:13h:37m" />
            <Metric label="Active Users" value="1,390" />
            <Metric label="Total Requests" value="12,462,760" />
            <Metric label="Avg Response" value="46ms" />
          </div>

          {/* SERVER STATUS */}
          <div className="space-y-4">
            <StatusBar
              icon={Server}
              label="api-server-01"
              cpu={100}
              mem={98}
              load={86}
            />
            <StatusBar
              icon={Database}
              label="db-primary"
              cpu={76}
              mem={100}
              load={95}
            />
          </div>
        </motion.div>
      </div>

      {/* SCROLL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-widest">
          Available for Interships
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ---------- SMALL COMPONENTS ---------- */
function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-black/30 border border-white/5 px-3 py-2">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-semibold text-primary">{value}</p>
    </div>
  )
}

function StatusBar({
  icon: Icon,
  label,
  cpu,
  mem,
  load,
}: {
  icon: any
  label: string
  cpu: number
  mem: number
  load: number
}) {
  return (
    <div className="rounded-xl bg-black/30 border border-white/5 p-4 space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-primary" />
          {label}
        </span>
        <span className="text-green-400 text-xs">Active</span>
      </div>

      <Progress label="Load" value={load} />
      <Progress label="Mem" value={mem} />
      <Progress label="CPU" value={cpu} />
    </div>
  )
}

function Progress({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[10px] text-muted-foreground">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-1 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-primary"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}
