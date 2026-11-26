import Section from '../components/Section'

const points = [
  'Comprender diferentes paradigmas', 'Reconocer sus límites', 'Decidir cuándo utilizarlos',
  'Evaluar consecuencias', 'Integrar tecnología con criterio', 'Mantener supervisión humana',
]

export default function Closing() {
  return (
    <Section id="cierre" eyebrow="Reflexión" title="La formación profesional no consiste solo en aprender a usar herramientas de IA.">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p, i) => (
          <li key={p} className="rounded-xl border border-line bg-panel p-5 text-slate-200"><span className="mr-3 font-serif text-slate-600">0{i + 1}</span>{p}</li>
        ))}
      </ul>
      <a href="#proyectos" className="mt-10 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-slate-200">Explorar los proyectos</a>
    </Section>
  )
}
