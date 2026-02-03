import type { ReactNode } from 'react'

interface SectionProps {
  number: number
  title: string
  id?: string
  children: ReactNode
}

function Section({ number, title, id, children }: SectionProps) {
  const sectionId =
    id ?? title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  return (
    <section className="section" id={sectionId}>
      <h2 className="section-heading">{number} &nbsp; {title}</h2>
      {children}
    </section>
  )
}

export default Section
