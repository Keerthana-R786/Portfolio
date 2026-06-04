import SectionWrapper from '../components/SectionWrapper'
import { useInView } from '../hooks/useInView'

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript (ES6+)'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'PHP'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'Database Design', 'Mongoose'],
  },
  {
    category: 'Languages',
    skills: ['C++', 'Python', 'JavaScript'],
  },
  {
    category: 'Data & ML',
    skills: ['Python', 'Data Analytics', 'Machine Learning', 'Stock Prediction'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Canva', 'VS Code', 'Postman'],
  },
  {
    category: 'Networking & Security',
    skills: ['CCNA', 'Cybersecurity', 'IoT', 'Digital Transformation'],
  },
  {
    category: 'AI & LLM',
    skills: ['Groq LLM', 'AI Integration', 'Prompt Engineering'],
  },
]

function SkillCard({ group, delay, inView }) {
  return (
    <div
      className={`card-base card-hover transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-mono text-xs text-accent mb-4 tracking-widest uppercase">
        {group.category}
      </p>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill} className="tag hover:border-accent/50 hover:text-ink-200 transition-colors duration-200 cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <SectionWrapper id="skills">
      <div
        className={`mb-12 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="section-label mb-3">Skills</p>
        <h2 className="section-title">Technical Stack</h2>
        <div className="section-divider" />
        <p className="text-ink-400 max-w-xl">
          Technologies I work with day-to-day, from full-stack web development 
          to data analytics and AI integration.
        </p>
      </div>

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((group, i) => (
          <SkillCard
            key={group.category}
            group={group}
            delay={i * 80}
            inView={inView}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
