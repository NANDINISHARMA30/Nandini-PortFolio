"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)

  const cursorX = useSpring(0, { damping: 20, stiffness: 300 })
  const cursorY = useSpring(0, { damping: 20, stiffness: 300 })

  useEffect(() => {
    setMounted(true)
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [cursorX, cursorY])

  if (!mounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-primary/30 rounded-full blur-xl pointer-events-none z-[9999] mix-blend-screen"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  )
}
