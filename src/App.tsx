import './App.css'
import { useTheme } from './hooks/useTheme'
import {
  Header,
  Abstract,
  Education,
  Publications,
  Experience,
  Competitions,
  Teaching,
  Miscellaneous,
  Footer,
  ThemeToggle,
  TableOfContents,
  PrintButton,
} from './components'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <div className="toolbar">
        <PrintButton />
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>
      <TableOfContents />
      <div className="paper">
        <Header />
        <Abstract />
        <Education />
        <Publications />
        <Experience />
        <Competitions />
        <Teaching />
        <Miscellaneous />
        <Footer />
      </div>
    </>
  )
}

export default App
