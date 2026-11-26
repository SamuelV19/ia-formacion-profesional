import type { ReactNode } from 'react'
import type { Proyecto } from '../types/content'
import { styleOf } from '../lib/stages'
import Badge from './Badge'

const Block = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="rounded-xl border border-line bg-panel p-5">
    <h4 className="mb-2 text-xs uppercase tracking-[.18em] text-slate-500">{title}</h4>
    <div className="text-sm leading-relaxed text-slate-300">{children}</div>
  </div>
)
const List = ({ items, dot }: { items: string[]; dot: string }) => (
  <ul className="space-y-2">
    {items.map((i) => (<li key={i} className="flex gap-3"><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} aria-hidden="true" />{i}</li>))}
  </ul>
)

export default function ProjectPanel({ p }: { p: Proyecto }) {
  const s = styleOf(p.id)
  const e = p.enfoqueIA
  const flags: [string, boolean][] = [['LLM', e.usaLLM], ['ML', e.usaML], ['Lógica difusa', e.usaLogicaDifusa], ['Agentes', e.usaAgentes]]
  return (
    <div className="space-y-4">
      <div className={`rounded-2xl border ${s.border} ${s.bg} p-6 sm:p-8`}>
        <p className={`text-sm ${s.text}`}>{p.subtitulo}</p>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-200">{p.descripcion}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={p.urlProduccion} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink hover:bg-slate-200">Abrir aplicación ↗</a>
          <a href={p.repositorioGitHub} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-500 px-5 py-2.5 text-sm text-white hover:border-white">Repositorio GitHub ↗</a>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Block title="Problema">{p.problema}</Block>
        <Block title="Objetivo">{p.objetivo}</Block>
      </div>
      <Block title="Enfoque de inteligencia">
        <p className={`mb-2 font-medium ${s.text}`}>{e.categoria}</p>
        <p>{e.detalle}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {flags.map(([l, on]) => (<Badge key={l} className={on ? `${s.border} text-white` : 'text-slate-500'}>{l}: {on ? 'Sí' : 'No'}</Badge>))}
        </div>
      </Block>
      <div className="grid gap-4 md:grid-cols-2">
        <Block title="Tecnologías"><div className="flex flex-wrap gap-2">{p.tecnologias.map((t) => <Badge key={t}>{t}</Badge>)}</div></Block>
        <Block title="Arquitectura">{p.arquitecturaResumida}</Block>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Block title="Agentes">{p.agentes ? <List items={p.agentes} dot={s.dot} /> : 'El proyecto no declara agentes.'}</Block>
        <Block title="Modelos">{p.modelos ? <List items={p.modelos} dot={s.dot} /> : 'El proyecto no declara modelos.'}</Block>
      </div>
      <Block title="Skills">
        {p.skills ? p.skills.map((k) => (
          <div key={k.nombre}>
            <p className="flex flex-wrap items-center gap-2"><code className={s.text}>{k.nombre}</code>{k.esAntecedenteCasoEstudio && <Badge>Skill existente · antecedente del caso de estudio</Badge>}</p>
            <p className="mt-2">{k.funcion}</p>
            <ol className="mt-4 grid gap-2 sm:grid-cols-5">
              {k.fases.map((f) => (<li key={f} className={`rounded-lg border ${s.border} px-3 py-2 text-xs text-slate-200`}>{f}</li>))}
            </ol>
            <p className="mt-4 text-xs text-slate-500">Recursos: {k.recursos.join(' · ')}</p>
            {k.notaCompatibilidad && <p className="mt-2 text-xs text-slate-500">{k.notaCompatibilidad}</p>}
          </div>
        )) : 'El proyecto no declara Skills.'}
      </Block>
      <div className="grid gap-4 md:grid-cols-2">
        <Block title="Resultados"><List items={p.resultados} dot={s.dot} /></Block>
        <Block title="Limitaciones"><List items={p.limitaciones} dot="bg-slate-500" /></Block>
      </div>
    </div>
  )
}
