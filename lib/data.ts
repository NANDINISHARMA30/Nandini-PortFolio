export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  slug: string
  publishedAt: string
  status: "Draft" | "Published"
  tags: string[]
}

export interface Skill {
  id: string
  name: string
  icon: string
  category: "Frontend" | "Backend" | "Tools" | "Design"
  proficiency: number
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  tags: string[]
}

export interface PortfolioData {
  profile: {
    name: string
    role: string
    bio: string
    avatar: string
    socials: {
      github: string
      linkedin: string
      twitter: string
    }
  }
  projects: Project[]
  blogPosts: BlogPost[]
  skills: Skill[]
  experience: Experience[] // Added experience array
}

export const initialData: PortfolioData = {
  profile: {
    name: "Nandini",
    role: "Full Stack Creative Developer",
    bio: "Crafting elegant digital experiences that bridge the gap between complex logic and artistic design.",
    avatar: "/creative-developer-portrait.png",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  projects: [
    {
      id: "1",
      title: "Nebula Dashboard",
      description: "A futuristic observability platform for cloud-native constellations.",
      image: "/observability-interface.png",
      tags: ["Next.js", "Three.js", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "2",
      title: "Quantum CMS",
      description: "Managing content across parallel dimensions with ease.",
      image: "/cms-dashboard-interface.jpg",
      tags: ["TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ],
  blogPosts: [
    {
      id: "b1",
      title: "The Future of Space-Based Computing",
      excerpt: "Exploring how quantum networks will revolutionize orbital data centers.",
      content: "Full content here...",
      slug: "future-of-space-computing",
      publishedAt: "2025-12-15",
      status: "Published",
      tags: ["Quantum", "Space", "Cloud"],
    },
    {
      id: "b2",
      title: "Building Resilient UI for Zero-G",
      excerpt: "Design principles for interfaces that work in weightless environments.",
      content: "Full content here...",
      slug: "ui-for-zero-g",
      publishedAt: "2026-01-02",
      status: "Draft",
      tags: ["Design", "Accessibility"],
    },
  ],
  skills: [
    { id: "s1", name: "React", icon: "atom", category: "Frontend", proficiency: 95 },
    { id: "s2", name: "Node.js", icon: "server", category: "Backend", proficiency: 88 },
    { id: "s3", name: "TypeScript", icon: "code", category: "Frontend", proficiency: 92 },
    { id: "s4", name: "Next.js", icon: "globe", category: "Frontend", proficiency: 94 },
    { id: "s5", name: "Tailwind CSS", icon: "wind", category: "Frontend", proficiency: 90 },
    { id: "s6", name: "PostgreSQL", icon: "database", category: "Backend", proficiency: 85 },
    { id: "s7", name: "Framer Motion", icon: "move", category: "Frontend", proficiency: 80 },
    { id: "s8", name: "Three.js", icon: "box", category: "Frontend", proficiency: 75 },
  ],
  experience: [
    {
      id: "e1",
      company: "Nebula Systems",
      role: "Senior Frontend Engineer",
      period: "2023 - Present",
      description: "Leading the development of a distributed cloud management interface using React and Three.js.",
      tags: ["React", "WebGL", "System Design"],
    },
    {
      id: "e2",
      company: "Orbit Creative",
      role: "Full Stack Developer",
      period: "2021 - 2023",
      description: "Designed and implemented interactive brand experiences for high-profile tech clients.",
      tags: ["Next.js", "Animation", "Node.js"],
    },
  ],
}
