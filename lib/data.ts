// data.ts

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
  experience: Experience[]
}

export const initialData: PortfolioData = {
  profile: {
    name: "Nandini Sharma",
    role: "AI Engineer · Frontend Developer · Product Thinker",
    bio:
      "Designing and developing intelligent products where AI-driven logic powers clean, scalable, and human-centered digital experiences.",
    avatar: "/creative-developer-portrait.png",
    socials: {
      github: "https://github.com/NANDINISHARMA30",
      linkedin: "https://linkedin.com/in/nandini-sharma-92701a282",
      twitter: "https://twitter.com/yourusername",
    },
  },

  projects: [
    {
      id: "financial-analysis-rag",
      title: "Financial Analysis Assistant (RAG)",
      description:
        "A Retrieval-Augmented Generation (RAG) powered financial assistant that retrieves relevant financial documents and generates accurate, context-aware analytical insights.",
      image: "/projects/financial-rag.png",
      tags: [
        "AI",
        "RAG",
        "LangChain",
        "Vector Database",
        "LLM",
        "Backend",
        "GenAI",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/NANDINISHARMA30/Financial-Analysis-Assitant--RAG",
      featured: true,
    },

    {
      id: "mango-leaf-ai",
      title: "Mango Leaf AI Diagnosis",
      description:
        "A computer vision and deep learning solution for detecting and classifying mango leaf diseases using CNNs, enabling early diagnosis for precision agriculture.",
      image: "/projects/mango-leaf.png",
      tags: [
        "AI",
        "Computer Vision",
        "Deep Learning",
        "CNN",
        "TensorFlow",
        "OpenCV",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/NANDINISHARMA30/Mango-Leaf-AI-Diagnosis-",
      featured: true,
    },

    {
      id: "intelligent-log-classification",
      title: "Intelligent Log Classification & Monitoring System (DeepSeek NLP)",
      description:
        "Developed an AI-driven log classification system to categorize logs into errors, warnings, info, and security events. Used DeepSeek-based NLP models with text embeddings for unstructured log analysis. Implemented end-to-end ML pipeline (data prep, training, evaluation, deployment) with real-time alerts for server crashes and anomalies.",
      image: "/projects/log-classification.png",
      tags: [
        "AI",
        "NLP",
        "DeepSeek",
        "Machine Learning",
        "Monitoring",
        "Python",
        "Currently Building",
        "GenAI",
      ],
      liveUrl: "",
      githubUrl: "",
      featured: true,
    },

    {
      id: "agentic-genai-app-builder",
      title: "Agentic GenAI App Builder (LangGraph, LangChain, Grok Cloud)",
      description:
        "Built an agentic AI system that autonomously generates functional apps and codebases from natural language prompts. Used LangGraph for structured reasoning workflows and LangChain for LLM orchestration. Demonstrated a Lovable-style clone app generator for real-world GenAI engineering.",
      image: "/projects/genai-app-builder.png",
      tags: [
        "AI",
        "LangGraph",
        "LangChain",
        "Grok",
        "GenAI",
        "App Builder",
        "Currently Building",
      ],
      liveUrl: "",
      githubUrl: "",
      featured: true,
    },

    {
      id: "stress-detector-pss",
      title: "Stress Detector (PSS-Based)",
      description:
        "A machine learning–based stress detection system leveraging the Perceived Stress Scale (PSS) to classify psychological stress levels using structured scoring and predictive modeling.",
      image: "/projects/stress-detector.png",
      tags: [
        "AI",
        "Machine Learning",
        "Python",
        "Scikit-learn",
        "Flask",
        "Data Analysis",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/NANDINISHARMA30/Stress_Detection-PSS_Code-",
      featured: true,
    },

    {
      id: "blog-generator-llm",
      title: "Blog Generator (LLM)",
      description:
        "A generative AI application that produces high-quality blogs from minimal prompts using large language models, prompt engineering, and NLP pipelines.",
      image: "/projects/blog-generator.png",
      tags: [
        "AI",
        "LLM",
        "NLP",
        "LangChain",
        "FastAPI",
        "Python",
        "GenAI",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/NANDINISHARMA30/Blog-Generation-LLM-application",
      featured: true,
    },
  ],

  blogPosts: [
    {
      id: "b1",
      title: "How Retrieval-Augmented Generation Improves AI Accuracy",
      excerpt:
        "Understanding why RAG has become a critical architecture for building reliable, real-world AI systems.",
      content: "Full content here...",
      slug: "rag-improves-ai-accuracy",
      publishedAt: "2025-12-15",
      status: "Published",
      tags: ["AI", "RAG", "LLM"],
    },
    {
      id: "b2",
      title: "From Prompt to Product: Building with LLMs",
      excerpt:
        "A practical breakdown of designing scalable applications powered by large language models.",
      content: "Full content here...",
      slug: "building-products-with-llms",
      publishedAt: "2026-01-02",
      status: "Draft",
      tags: ["LLM", "Product", "AI Engineering"],
    },
  ],

  skills: [
    { id: "s1", name: "React", icon: "atom", category: "Frontend", proficiency: 95 },
    { id: "s2", name: "Next.js", icon: "globe", category: "Frontend", proficiency: 94 },
    { id: "s3", name: "TypeScript", icon: "code", category: "Frontend", proficiency: 92 },
    { id: "s4", name: "Tailwind CSS", icon: "wind", category: "Frontend", proficiency: 90 },
    { id: "s5", name: "Python", icon: "terminal", category: "Backend", proficiency: 93 },
    { id: "s6", name: "Machine Learning", icon: "brain", category: "Backend", proficiency: 90 },
    { id: "s7", name: "LangChain", icon: "link", category: "Tools", proficiency: 85 },
    { id: "s8", name: "TensorFlow", icon: "cpu", category: "Tools", proficiency: 82 },
  ],

  experience: [
    {
      id: "e1",
      company: "Microsoft AI Innovate Hackathon",
      role: "Frontend & AI Contributor",
      period: "2025",
      description:
        "Contributed to frontend development, product design, and AI research as part of an award-winning team.",
      tags: ["Frontend", "AI", "Hackathon"],
    },
    {
      id: "e2",
      company: "Open Source (GSSoC’25)",
      role: "Open Source Contributor",
      period: "2025",
      description:
        "Active contributor to open-source projects, collaborating on scalable features, bug fixes, and UI improvements.",
      tags: ["Open Source", "Git", "Collaboration"],
    },
  ],
}
