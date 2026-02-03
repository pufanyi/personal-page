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
        College of Computing and Data Science<br />
        Nanyang Technological University, Singapore
      </div>
      <div className="contact-info">
        <a href="tel:+6583981454">+65 8398-1454</a> |{' '}
        <a href="mailto:FPU001@e.ntu.edu.sg">FPU001@e.ntu.edu.sg</a>
      </div>

      <div className="links">
        [<a href="https://pufanyi.com" target="_blank" rel="noopener noreferrer">Homepage</a>]
        [<a href="https://github.com/pufanyi" target="_blank" rel="noopener noreferrer">GitHub</a>]
        [<a href="https://scholar.google.com/citations?user=58tv6skAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>]
        [<a href="https://linkedin.com/in/pufanyi" target="_blank" rel="noopener noreferrer">LinkedIn</a>]
        [<a href="https://x.com/pufanyi" target="_blank" rel="noopener noreferrer">X</a>]
      </div>
    </header>
  )
}

export default Header
