import Section from '../components/Section'
import Badge from '../components/Badge'
import { methodology, toolById } from '../data'

export default function Agents() {
  const coord = toolById('showcase-agent')
  const devguard = toolById('skill-devguard')
  return (
    <Section id="agentes" eyebrow="Agentes + Skills" title="La capa metodológica con la que se preparó este showcase.">
      {coord && (
        <div className="mx-auto max-w-xl rounded-2xl border border-eng/40 bg-eng/10 p-6 text-center">
          <p className="text-xs uppercase tracking-[.18em] text-eng">Agente coordinador</p>
          <h3 className="mt-2 text-xl text-white">{coord.nombre}</h3>
          <p className="mt-3 text-sm text-slate-300">{coord.funcion}</p>
          {coord.ubicacion && <code className="mt-3 block text-xs text-slate-500">{coord.ubicacion}</code>}
        </div>
      )}
      <div className="mx-auto h-8 w-px bg-line" aria-hidden="true" />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {methodology.flujoMetodologicoRepositorio.map((s) => {
          const t = toolById(`skill-${s.skill}`)
          return (
            <li key={s.skill} className="rounded-2xl border border-line bg-panel p-5">
              <p className="font-serif text-3xl text-slate-600">0{s.paso}</p>
              <code className="mt-2 block text-eng">{s.skill}</code>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{t?.funcion}</p>
            </li>
          )
        })}
      </ol>
      {devguard && (
        <div className="mt-10 rounded-2xl border border-dashed border-eng/50 p-6 sm:p-8">
          <Badge>Skill existente · externa a este showcase</Badge>
          <h3 className="mt-4 text-xl text-white">{devguard.nombre}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">{devguard.funcion}</p>
          <p className="mt-4 text-sm font-medium text-white">Es una Skill existente del proyecto DevGuard y no fue copiada ni creada nuevamente para este showcase.</p>
          <p className="mt-2 text-sm text-slate-400">{devguard.relacionConElProyecto}</p>
          {devguard.ubicacion && <code className="mt-3 block break-all text-xs text-slate-500">{devguard.ubicacion}</code>}
        </div>
      )}
    </Section>
  )
}
