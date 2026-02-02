import type { ReactNode } from 'react'

interface EntryProps {
  title: string
  date: string
  detail?: ReactNode
  items: ReactNode[]
}

function Entry({ title, date, detail, items }: EntryProps) {
  return (
    <div className="entry">
      <div className="entry-line">
        <span className="entry-title">{title}</span>
        <span className="entry-date">{date}</span>
      </div>
      {detail && <div className="entry-detail">{detail}</div>}
      <ul className="entry-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Entry
