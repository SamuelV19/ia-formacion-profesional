import { useState } from 'react'
import { useScrollProgress } from '../hooks/useScrollProgress'

const links: [string, string][] = [
  ['idea', 'La idea'], ['formas', 'Formas de inteligencia'], ['proyectos', 'Proyectos'],
  ['agentes', 'Agentes + Skills'], ['metodologia', 'Metodología'], ['herramientas', 'Herramientas'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const progress = useScrollProgress()
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
      <nav aria-label="Principal" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="font-serif text-white">IA en la Formación Profesional</a>
        <button type="button" className="rounded border border-line px-3 py-1.5 text-sm md:hidden" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? 'Cerrar' : 'Menú'}
        </button>
        <ul id="menu" className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-14 flex-col gap-1 border-b border-line bg-ink p-4 md:static md:flex md:flex-row md:gap-5 md:border-0 md:bg-transparent md:p-0`}>
          {links.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2 text-sm text-slate-400 hover:text-white md:py-0">{label}</a></li>
          ))}
        </ul>
      </nav>
      <div className="h-px bg-line" aria-hidden="true"><div className="h-px bg-eng" style={{ width: `${progress}%` }} /></div>
    </header>
  )
}
