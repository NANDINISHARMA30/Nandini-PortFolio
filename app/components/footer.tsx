export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <p>© 2025 Crafted with care by Alex.</p>
          <div className="h-4 w-px bg-white/10 hidden md:block" />
          <p className="hidden md:block">Based in Parallel Earth-616</p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Imprint
          </a>
        </div>
      </div>
    </footer>
  )
}
