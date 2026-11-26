import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { methodology, projectById } from '../data'
import { styleOf } from '../lib/stages'

export default function Idea() {
  return (
    <Section id="idea" eyebrow="La idea" title="¿Dónde puede intervenir la inteligencia dentro del proceso de creación tecnológica?">
      <p className="max-w-2xl text-slate-400">{methodology.proposito}</p>
      <ol className="mt-10 grid gap-5 lg:grid-cols-3">
        {methodology.ejeConceptual.map((e, i) => {
          const s = styleOf(e.proyectoId)
          return (
            <li key={e.proyectoId}>
              <Reveal delay={i * 120} className="h-full">
                <article className={`h-full rounded-2xl border ${s.border} bg-panel p-6`}>
                  <p className={`font-serif text-4xl ${s.text}`}>0{e.orden}</p>
                  <h3 className="mt-3 text-xl text-white">{e.etapa}</h3>
                  <p className={`mt-1 text-sm ${s.text}`}>{projectById(e.proyectoId)?.nombre}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{e.fundamento}</p>
                  <p className="mt-5 border-t border-line pt-4 text-sm italic text-slate-200">{e.preguntaClave}</p>
                </article>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
