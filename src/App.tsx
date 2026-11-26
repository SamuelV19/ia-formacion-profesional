import Nav from './components/Nav'
import Hero from './sections/Hero'
import Idea from './sections/Idea'
import Matrix from './sections/Matrix'
import Projects from './sections/Projects'
import Agents from './sections/Agents'
import Methodology from './sections/Methodology'
import Tools from './sections/Tools'
import Closing from './sections/Closing'
import { updatedAt } from './data'

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-ink">Saltar al contenido</a>
      <Nav />
      <main id="contenido">
        <Hero /><Idea /><Matrix /><Projects /><Agents /><Methodology /><Tools /><Closing />
      </main>
      <footer className="border-t border-line px-5 py-8 text-center text-xs text-slate-500">
        IA en la Formación Profesional · Contenido actualizado el {updatedAt}
      </footer>
    </>
  )
}
