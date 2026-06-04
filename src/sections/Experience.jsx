import SectionWrapper from '../components/SectionWrapper'
import { useInView } from '../hooks/useInView'

const experiences = [
  {
    role: 'Web Developer Intern',
    company: 'ZYRE Home Automations',
    duration: 'Two Months',
    year: '2024',
    description:
      'Designed and developed the company website from scratch. Handled both the UI/UX design using Canva and the complete frontend implementation using HTML, CSS, and JavaScript.',
    points: [
      'Created UI/UX wireframes and design mockups using Canva',
      'Built responsive frontend with HTML, CSS, and vanilla JavaScript',
      'Collaborated with the team to meet client requirements and timelines',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Canva', 'UI/UX Design'],
  },
  {
    role: 'Web Developer Intern',
    company: 'Ayantrix Solutions',
    duration: 'Short-term',
    year: '2024',
    description:
      'Worked on a live production website and PHP backend files. Gained hands-on experience with real-world codebases and client-facing deployments.',
    points: [
      'Contributed to a live production website',
      'Worked with PHP backend files and server-side rendering',
      'Navigated an existing codebase and implemented feature additions',
    ],
    stack: ['PHP', 'HTML', 'CSS', 'Web Development'],
  },
  {
    role: 'Google Android Developer Virtual Intern',
    company: 'AICTE',
    duration: 'Virtual',
    year: '2024',
    description:
      'Completed the Google Android Developer virtual internship program under AICTE. Gained foundational knowledge in Android development, mobile UI patterns, and Kotlin basics.',
    points: [
      'Completed Android development coursework under AICTE program',
      'Earned the Google Android Developer certification',
      'Built foundational Android application projects',
    ],
    stack: ['Android', 'Kotlin', 'Mobile Development'],
  },
]

function ExperienceItem({ item, index, inView }) {
  return (
    <div
      className={`relative pl-6 border-l border-ink-800 hover:border-accent/40 transition-all duration-700 group ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full border-2 border-ink-700 bg-ink-950 group-hover:border-accent transition-colors duration-300" />

      <div className="pb-10">
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <h3 className="text-ink-50 font-semibold">{item.role}</h3>
          <span className="font-mono text-xs text-accent">{item.year}</span>
        </div>
        <p className="text-ink-400 text-sm font-medium mb-3">
          {item.company} &middot; {item.duration}
        </p>

        <p className="text-ink-400 text-sm leading-relaxed mb-4">{item.description}</p>

        <ul className="space-y-1.5 mb-4">
          {item.points.map((pt) => (
            <li key={pt} className="flex items-start gap-2 text-sm text-ink-500">
              <span className="mt-2 w-1 h-1 rounded-full bg-ink-600 flex-shrink-0" />
              {pt}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {item.stack.map((t) => (
            <span key={t} className="tag text-xs">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <SectionWrapper id="experience">
      <div
        className={`mb-12 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="section-label mb-3">Experience</p>
        <h2 className="section-title">Work History</h2>
        <div className="section-divider" />
      </div>

      <div ref={ref} className="max-w-2xl">
        {experiences.map((item, i) => (
          <ExperienceItem key={item.company} item={item} index={i} inView={inView} />
        ))}
      </div>
    </SectionWrapper>
  )
}
