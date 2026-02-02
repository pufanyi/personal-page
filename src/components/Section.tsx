import type { ReactNode } from 'react'

interface SectionProps {
  number: number
  title: string
  children: ReactNode
}

function Section({ number, title, children }: SectionProps) {
  return (
    <section className="section">
      <h2 className="section-heading">{number} &nbsp; {title}</h2>
      {children}
    </section>
  )
}

export default Section
