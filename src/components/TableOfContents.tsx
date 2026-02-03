import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { sections } from '../constants/sections'
import { useScrollSpy } from '../hooks/useScrollSpy'

function TableOfContents() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(sections.map((s) => s.id))

  const handleClick = () => {
    setMobileOpen(false)
  }

  return (
    <>
      <button
        className="toc-mobile-toggle"
        onClick={() => setMobileOpen((o) => !o)}
        aria-label="Table of Contents"
        title="Table of Contents"
      >
        {mobileOpen ? <X size={20} /> : <List size={20} />}
      </button>

      <nav
        className={`toc ${mobileOpen ? 'toc--open' : ''}`}
        aria-label="Table of Contents"
      >
        <div className="toc-title">Contents</div>
        <ol className="toc-list">
          {sections.map((s) => (
            <li key={s.id} className={activeId === s.id ? 'toc-active' : ''}>
              <a href={`#${s.id}`} onClick={handleClick}>
                {s.number !== null && (
                  <span className="toc-number">{s.number}</span>
                )}
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {mobileOpen && (
        <div className="toc-backdrop" onClick={() => setMobileOpen(false)} />
      )}
    </>
  )
}

export default TableOfContents
