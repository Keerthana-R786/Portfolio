import SectionWrapper from '../components/SectionWrapper'
import { useInView } from '../hooks/useInView'

const certifications = [
  { name: 'CCNA', issuer: 'Cisco', category: 'Networking' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', category: 'Security' },
  { name: 'Introduction to DataScience', issuer: 'Cisco', category: 'Data Science' },
  { name: 'Introduction to IoT & Digital Transformation', issuer: 'Cisco', category: 'IoT' },
  { name: 'Introduction to IoT', issuer: 'NPTEL', category: 'IoT' },
  { name: 'Data Analytics with Python', issuer: 'NPTEL', category: 'Data & ML' },
  { name: 'Complete Web Development Course', issuer: 'Udemy', category: 'Web Dev' },
  { name: 'Google Android Developer', issuer: 'AICTE / Google', category: 'Mobile Dev' },
]

const issuers = ['All', 'Cisco', 'NPTEL', 'Udemy', 'AICTE / Google']

export default function Certifications() {
  const [ref, inView] = useInView()

  return (
    <SectionWrapper id="certifications">
      <div
        className={`mb-12 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="section-label mb-3">Certifications</p>
        <h2 className="section-title">Credentials</h2>
        <div className="section-divider" />
        <p className="text-ink-400 max-w-xl">
          Industry certifications across networking, cybersecurity, data science, 
          web development, and mobile platforms.
        </p>
      </div>

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert, i) => (
          <div
            key={cert.name}
            className={`card-base card-hover group transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="font-mono text-xs text-ink-600 bg-ink-800 px-2 py-0.5 rounded">
                {cert.category}
              </span>
              <svg
                className="text-ink-700 group-hover:text-accent transition-colors duration-200"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-ink-100 font-medium text-sm leading-snug mb-2 group-hover:text-ink-50 transition-colors">
              {cert.name}
            </h3>
            <p className="font-mono text-xs text-accent">{cert.issuer}</p>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div
        className={`mt-16 transition-all duration-700 delay-500 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="section-label mb-6">Achievements</p>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          {[
            {
              title: 'AQVH 2025 Finalist',
              desc: 'Selected as a finalist at AQVH 2025 — a national-level hackathon/competition',
            },
            {
              title: 'AWS ImpactX 2025 Finalist',
              desc: 'Reached the finals of AWS ImpactX 2025, competing in cloud innovation challenges',
            },
            {
              title: '400+ LeetCode Problems',
              desc: 'Consistently practising DSA on LeetCode, CodeChef, and SkillRack',
            },
            {
              title: '8.79 CGPA',
              desc: 'Maintaining a strong academic record at Chennai Institute of Technology',
            },
          ].map((a) => (
            <div key={a.title} className="card-base card-hover">
              <h4 className="text-ink-100 font-semibold text-sm mb-1">{a.title}</h4>
              <p className="text-ink-500 text-xs leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
