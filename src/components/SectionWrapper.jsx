export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`py-24 max-w-6xl mx-auto px-6 ${className}`}
    >
      {children}
    </section>
  )
}
