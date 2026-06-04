import SectionWrapper from '../components/SectionWrapper'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    title: 'TransSmart',
    subtitle: 'Smart Logistics Platform',
    description:
      'A modern logistics management platform featuring AI-powered route optimization, real-time shipment tracking, and intelligent load planning. Built end-to-end with a React frontend and Node.js backend.',
    stack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Groq LLM'],
    highlights: ['AI-assisted logistics layer via Groq LLM', 'Real-time tracking dashboard', 'Smart load optimization'],
    type: 'Full Stack + AI',
    github: 'https://github.com/Keerthana-R786',
  },
  {
    title: 'MediFlow',
    subtitle: 'AI Patient Onboarding System',
    description:
      'An intelligent pre-visit platform that streamlines patient onboarding and generates pre-visit intelligence reports for healthcare providers. Reduces intake time and improves clinical preparedness.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI Integration'],
    highlights: ['Automated patient intake', 'Pre-visit intelligence generation', 'Physician briefing system'],
    type: 'Healthcare + AI',
    github: 'https://github.com/Keerthana-R786',
  },
  {
    title: 'Campus Complaint Management System',
    subtitle: 'MERN Stack Application',
    description:
      'A full-featured complaint tracking and resolution system for campus environments. Supports role-based access, complaint lifecycle management, and real-time status updates.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth'],
    highlights: ['Role-based access control', 'Complaint lifecycle tracking', 'Admin dashboard'],
    type: 'Full Stack',
    github: 'https://github.com/Keerthana-R786',
  },
  {
    title: 'Stock Price Prediction System',
    subtitle: 'Machine Learning',
    description:
      'A machine learning model that forecasts stock prices using historical data and regression techniques. Includes data preprocessing, feature engineering, and visual performance analysis.',
    stack: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Matplotlib'],
    highlights: ['Historical data analysis', 'ML-based forecasting', 'Visualized predictions'],
    type: 'Machine Learning',
    github: 'https://github.com/Keerthana-R786',
  },
]

function ProjectCard({ project, delay, inView }) {
  return (
    <div
      className={`card-base card-hover group flex flex-col transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="font-mono text-xs text-accent tracking-wider">{project.type}</span>
          <h3 className="text-lg font-semibold text-ink-50 mt-1 group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-ink-500">{project.subtitle}</p>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-600 hover:text-accent transition-colors duration-200 mt-1"
          aria-label={`GitHub for ${project.title}`}
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
      </div>

      <p className="text-ink-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

      <div className="space-y-4">
        <ul className="space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-ink-400">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-ink-800">
          {project.stack.map((tech) => (
            <span key={tech} className="tag text-xs">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <SectionWrapper id="projects">
      <div
        className={`mb-12 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="section-label mb-3">Projects</p>
        <h2 className="section-title">Selected Work</h2>
        <div className="section-divider" />
        <p className="text-ink-400 max-w-xl">
          Real-world applications built with production-grade architecture, 
          from AI-powered logistics to healthcare systems.
        </p>
      </div>

      <div ref={ref} className="grid md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} delay={i * 100} inView={inView} />
        ))}
      </div>
    </SectionWrapper>
  )
}
