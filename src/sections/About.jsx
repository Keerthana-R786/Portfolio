import SectionWrapper from '../components/SectionWrapper'
import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <SectionWrapper id="about">
      <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
        <div
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <p className="section-label mb-3">About</p>
          <h2 className="section-title mb-4">Building things that matter</h2>
          <div className="section-divider" />

          <div className="space-y-4 text-ink-400 leading-relaxed">
            <p>
              I am a pre-final year Information Technology student at Chennai Institute 
              of Technology with a CGPA of 8.79. My interest sits at the intersection 
              of software engineering, product thinking, and real-world problem solving.
            </p>
            <p>
              I have built production-grade applications using the MERN stack, 
              worked on AI-powered systems, stock prediction models, and smart logistics 
              platforms. I take ownership of full product cycles — from architecture 
              decisions to deployment.
            </p>
            <p>
              Outside of building projects, I actively solve algorithmic challenges 
              on LeetCode (400+ problems), CodeChef, and SkillRack. I was a finalist 
              at AQVH 2025 and AWS ImpactX 2025.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="tag">Open to Work</span>
            <span className="tag">Chennai, India</span>
            <span className="tag">2024 – 2028 Batch</span>
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="space-y-4">
            {[
              {
                label: 'Education',
                value: 'B.Tech Information Technology',
                sub: 'Chennai Institute of Technology — CGPA 8.79',
              },
              {
                label: 'Competitive Programming',
                value: '400+ Problems Solved',
                sub: 'LeetCode, CodeChef, SkillRack',
              },
              {
                label: 'Achievements',
                value: 'AQVH 2025 Finalist',
                sub: 'AWS ImpactX 2025 Finalist',
              },
              {
                label: 'Contact',
                value: 'keerthanar.it2024@citchennai.net',
                sub: '+91 8438406246',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="card-base card-hover group"
              >
                <p className="font-mono text-xs text-accent mb-1 tracking-wider uppercase">
                  {item.label}
                </p>
                <p className="text-ink-100 font-medium">{item.value}</p>
                <p className="text-ink-500 text-sm mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
