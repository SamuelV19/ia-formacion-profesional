import { useState, type KeyboardEvent } from 'react'
import Section from '../components/Section'
import ProjectPanel from '../components/ProjectPanel'
import { projects } from '../data'
import { styleOf } from '../lib/stages'

export default function Projects() {
  const [i, setI] = useState(0)
  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    let n = i
    if (e.key === 'ArrowRight') n = (i + 1) % projects.length
    else if (e.key === 'ArrowLeft') n = (i - 1 + projects.length) % projects.length
    else return
    e.preventDefault()
    setI(n)
    document.getElementById(`tab-${projects[n].id}`)?.focus()
  }
  const p = projects[i]
  return (
    <Section id="proyectos" eyebrow="Proyectos" title="Tres proyectos, tres formas distintas de inteligencia.">
      <div role="tablist" aria-label="Proyectos" className="mb-6 flex gap-2 overflow-x-auto pb-1">
        {projects.map((x, k) => {
          const s = styleOf(x.id)
          const on = k === i
          return (
            <button key={x.id} id={`tab-${x.id}`} role="tab" type="button" aria-selected={on} aria-controls={`panel-${x.id}`} tabIndex={on ? 0 : -1}
              onClick={() => setI(k)} onKeyDown={onKey}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm transition ${on ? `${s.border} ${s.bg} text-white` : 'border-line text-slate-400 hover:text-white'}`}>
              <span className={`mr-2 inline-block h-2 w-2 rounded-full ${s.dot}`} aria-hidden="true" />{x.nombre}
            </button>
          )
        })}
      </div>
      <div role="tabpanel" id={`panel-${p.id}`} aria-labelledby={`tab-${p.id}`} tabIndex={0}>
        <ProjectPanel key={p.id} p={p} />
      </div>
    </Section>
  )
}
