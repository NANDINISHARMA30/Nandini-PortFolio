"use client";

import { Github, Linkedin, Instagram, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function Footer() {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="bg-dark-bg text-white py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-lg font-bold">
            <span className="bg-primary text-dark-bg px-2 py-1 rounded">RS</span>{" "}
            nandini.codes_
          </h3>
          <p className="text-sm text-gray-400">
              AI-Explorer based in Greater Noida, India. Building robust systems and scalable server architectures. Specializing in API development, database optimization, and deployments.
          </p>

          {/* Theme Switch */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-sm font-medium">Theme:</span>
            <button
              onClick={() => setTheme("light")}
              className={`px-3 py-1 rounded ${theme === "light" ? "bg-primary text-dark-bg" : "bg-gray-700"}`}
            >
              <Sun size={16} />
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`px-3 py-1 rounded ${theme === "dark" ? "bg-primary text-dark-bg" : "bg-gray-700"}`}
            >
              <Moon size={16} />
            </button>
            <button
              onClick={() => setTheme("system")}
              className={`px-3 py-1 rounded ${theme === "system" ? "bg-primary text-dark-bg" : "bg-gray-700"}`}
            >
              System
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="text-gray-400 space-y-1">
            {["About", "Projects", "Skills", "Learning", "Certifications", "Contact", "Terminal"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-primary transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div className="space-y-2">
          <h4 className="text-lg font-bold">Connect</h4>
          <div className="flex gap-4 text-gray-400">
            <a href="https://github.com/NANDINISHARMA30" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/nandini-sharma-92701a282/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/_sharma_nandiniiiii/" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
          </div>
          <p className="text-sm mt-2">
            Email: nandiniisharma2005@gmail.com
            <br />
            Available for Internships and Collaboration
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        © 2026 Nandini Sharma. All rights reserved.
        <br />
        Code vibes, snack vibes, kinda sus but productive
      </div>
    </footer>
  );
}
