import {
  Envelope,
  GithubLogo,
  Globe,
  LinkedinLogo,
  Phone,
  ReadCvLogo,
  XLogo,
} from '@phosphor-icons/react'

function Header() {
  return (
    <header className="title-block">
      <div className="title-wrapper">
        <hr className="title-rule-top" />
        <h1 className="title">Fanyi Pu (濮凡轶)</h1>
        <hr className="title-rule-bottom" />
      </div>

      <img
        src="/me.webp"
        alt="Fanyi Pu"
        className="author-photo"
        width="100"
        height="100"
      />
      <div className="affiliation">
        College of Computing and Data Science
        <br />
        Nanyang Technological University, Singapore
      </div>
      <div className="contact-info">
        <span className="contact-item">
          <Phone size={18} weight="duotone" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
          <a href="tel:+6583981454">+65 8398-1454</a>
        </span>
        <span className="separator"> | </span>
        <span className="contact-item">
          <Envelope size={18} weight="duotone" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
          <a href="mailto:FPU001@e.ntu.edu.sg">FPU001@e.ntu.edu.sg</a>
        </span>
      </div>

      <div className="links">
        <a href="https://pufanyi.com" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Homepage">
          <Globe size={24} weight="duotone" />
        </a>
        <a href="https://github.com/pufanyi" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
          <GithubLogo size={24} weight="duotone" />
        </a>
        <a href="https://scholar.google.com/citations?user=58tv6skAAAAJ" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Google Scholar">
          <ReadCvLogo size={24} weight="duotone" />
        </a>
        <a href="https://linkedin.com/in/pufanyi" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
          <LinkedinLogo size={24} weight="duotone" />
        </a>
        <a href="https://x.com/pufanyi" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="X (Twitter)">
          <XLogo size={24} weight="duotone" />
        </a>
      </div>
    </header>
  )
}

export default Header
