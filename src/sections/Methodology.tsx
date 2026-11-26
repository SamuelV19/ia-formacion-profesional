import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { methodology } from '../data'

export default function Methodology() {
  return (
    <Section id="metodologia" eyebrow="Metodología" title="Los proyectos se analizaron y documentaron antes de construir el showcase.">
      <ol className="relative space-y-6 border-l border-line pl-8">
        {methodology.flujoMetodologicoRepositorio.map((s, i) => (
          <li key={s.skill} className="relative">
            <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-eng text-[10px] font-bold text-ink" aria-hidden="true">{s.paso}</span>
            <Reveal delay={i * 100}>
              <h3 className="text-lg text-white"><code>{s.skill}</code></h3>
              <p className="mt-2 text-sm text-slate-400"><span className="text-slate-500">Entrada · </span>{s.entrada}</p>
              <p className="mt-1 text-sm text-slate-300"><span className="text-slate-500">Salida · </span>{s.salida}</p>
            </Reveal>
          </li>
        ))}
      </ol>
      <h3 className="mb-4 mt-16 text-xs uppercase tracking-[.18em] text-slate-500">Principios metodológicos</h3>
      <ul className="grid gap-4 md:grid-cols-2">
        {methodology.principiosMetodologicos.map((p) => (
          <li key={p} className="rounded-xl border border-line bg-panel p-5 text-sm leading-relaxed text-slate-300">{p}</li>
        ))}
      </ul>
    </Section>
  )
}
