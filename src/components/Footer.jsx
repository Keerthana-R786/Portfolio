export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-800 py-8 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-500">
          &copy; {year} Keerthana R. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Keerthana-R786"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-ink-500 hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/keerthana-r"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-ink-500 hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:keerthanar.it2024@citchennai.net"
            className="font-mono text-xs text-ink-500 hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
