import './App.css'
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
} from './components'

function App() {
  return (
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
  )
}

export default App
