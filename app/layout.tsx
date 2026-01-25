import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nandini | Creative Developer Portfolio",
  description: "Portfolio of Nandini, a Full Stack Creative Developer specializing in elegant digital experiences.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/developer-portrait.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/developer-portrait.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/developer-portrait.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}