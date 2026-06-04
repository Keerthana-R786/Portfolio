import { useTypewriter } from '../hooks/useTypewriter'
import { useInView } from '../hooks/useInView'

const roles = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'React Developer',
  'Problem Solver',
]

export default function Hero() {
  const typedText = useTypewriter(roles)
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-dot-bg opacity-40" />
      {/* Gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      <div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12 w-full"
      >
        <div
          className={`transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label mb-5">Chennai Institute of Technology, IT</p>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-ink-50 leading-none mb-4">
            Keerthana R
          </h1>
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-2 h-10 mb-8">
            <span className="text-xl md:text-2xl text-ink-400 font-light">
              {typedText}
            </span>
            <span className="w-0.5 h-6 bg-accent animate-cursor-blink" />
          </div>
        </div>

        <div
          className={`max-w-2xl transition-all duration-700 delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-ink-400 text-lg leading-relaxed mb-10">
            Pre-final year IT student with a strong foundation in full-stack development, 
            machine learning, and competitive programming. I build products that are 
            functional, well-engineered, and built to last.
          </p>
        </div>

        <div
          className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-outline"
          >
            Get in Touch
          </a>
          <a
            href="https://github.com/Keerthana-R786"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub
          </a>
        </div>

        {/* Stats row */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-[600ms] ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '8.79', label: 'CGPA', suffix: '' },
            { value: '400', label: 'LeetCode Problems', suffix: '+' },
            { value: '4', label: 'Major Projects', suffix: '' },
            { value: '3', label: 'Internships', suffix: '' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border-l border-ink-800 pl-4 hover:border-accent/50 transition-colors duration-300"
            >
              <p className="text-2xl font-semibold text-ink-50">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </p>
              <p className="text-xs text-ink-500 mt-1 font-mono">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-ink-500 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-ink-500 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
