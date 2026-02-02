function Footer() {
  return (
    <footer className="footer">
      Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
    </footer>
  )
}

export default Footer
