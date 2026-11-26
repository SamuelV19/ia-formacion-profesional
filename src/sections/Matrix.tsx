import Section from '../components/Section'
import { methodology, projectById } from '../data'
import { styleOf } from '../lib/stages'

const yn = (v: boolean) => (v ? 'Sí' : 'No')

export default function Matrix() {
  return (
    <Section id="formas" eyebrow="Formas de inteligencia" title="“Inteligencia” no significa necesariamente “LLM”.">
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[820px] text-left text-sm">
          <caption className="sr-only">Comparación de la aproximación de inteligencia de cada proyecto</caption>
          <thead className="bg-panel text-xs uppercase tracking-wider text-slate-500">
            <tr>
              {['Proyecto', 'Aproximación', 'Mecanismo real', 'LLM', 'ML', 'Lógica difusa', 'Agentes'].map((h) => (<th key={h} scope="col" className="px-4 py-3 font-medium">{h}</th>))}
            </tr>
          </thead>
          <tbody>
            {methodology.ejeConceptual.map((e) => {
              const p = projectById(e.proyectoId)
              if (!p) return null
              const a = p.enfoqueIA
              return (
                <tr key={p.id} className="border-t border-line align-top">
                  <th scope="row" className={`px-4 py-4 font-medium ${styleOf(p.id).text}`}>{p.nombre}</th>
                  <td className="px-4 py-4 text-slate-200">{a.categoria}</td>
                  <td className="px-4 py-4 text-slate-400">{e.mecanismoReal}</td>
                  <td className="px-4 py-4">{yn(a.usaLLM)}</td>
                  <td className="px-4 py-4">{yn(a.usaML)}</td>
                  <td className="px-4 py-4">{yn(a.usaLogicaDifusa)}</td>
                  <td className="px-4 py-4">{yn(a.usaAgentes)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
