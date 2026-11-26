import Section from '../components/Section'
import { projects, tools } from '../data'
import type { Herramienta } from '../types/content'

// Skills y coordinador se explican en «Agentes + Skills»; aquí se agrupa el resto por función.
const shown = tools.filter((t) => !t.categoria.startsWith('Agent Skill') && !t.categoria.startsWith('Agente'))
const groups = shown.reduce<Record<string, Herramienta[]>>((acc, t) => { (acc[t.categoria] ??= []).push(t); return acc }, {})

export default function Tools() {
  return (
    <Section id="herramientas" eyebrow="Herramientas" title="Qué participa y para qué.">
      <div className="space-y-12">
        {Object.entries(groups).map(([cat, items]) => (
          <div key={cat}>
            <h3 className="mb-4 text-xs uppercase tracking-[.18em] text-slate-500">{cat}</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {items.map((t) => (
                <article key={t.id} className="rounded-2xl border border-line bg-panel p-6">
                  <h4 className="flex items-center justify-between gap-3 text-white">{t.nombre}{t.comando && <code className="rounded bg-ink px-2 py-0.5 text-xs text-eng">{t.comando}</code>}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{t.funcion}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{t.relacionConElProyecto}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[.18em] text-slate-500">Proyectos analizados</h3>
          <ul className="grid gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <li key={p.id} className="rounded-2xl border border-line bg-panel p-5">
                <p className="text-white">{p.nombre}</p>
                <p className="mt-1 text-sm text-slate-400">{p.subtitulo}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
