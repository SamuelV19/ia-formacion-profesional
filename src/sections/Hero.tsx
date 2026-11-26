import { methodology } from '../data'
import { styleOf } from '../lib/stages'

export default function Hero() {
  const nodes = methodology.ejeConceptual
  return (
    <div id="inicio" className="hero-glow">
      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[.22em] text-slate-500">Showcase académico · Ingeniería Informática</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-white sm:text-7xl">IA en la Formación Profesional</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Un recorrido por tres proyectos que exploran diferentes formas de aplicar sistemas inteligentes e IA dentro de la formación y el desarrollo tecnológico.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#proyectos" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition hover:bg-slate-200">Explorar proyectos</a>
            <a href="#metodologia" className="rounded-full border border-slate-500 px-6 py-3 text-sm text-white transition hover:border-white">Ver metodología</a>
          </div>
        </div>
        <svg viewBox="0 0 280 400" role="img" aria-label={`Recorrido: ${nodes.map((n) => n.pilar).join(', ')}`} className="mx-auto w-full max-w-xs">
          {nodes.map((n, i) => {
            const y = 60 + i * 140
            const c = styleOf(n.proyectoId).hex
            return (
              <g key={n.proyectoId}>
                {i < nodes.length - 1 && <line x1="40" y1={y + 18} x2="40" y2={y + 122} stroke={c} strokeWidth="2" strokeDasharray="6 6" className="flow" />}
                <circle cx="40" cy={y} r="10" fill={c} />
                <text x="70" y={y - 2} fill="#f1f5f9" fontSize="18" letterSpacing="3">{n.pilar.toUpperCase()}</text>
                <text x="70" y={y + 20} fill="#94a3b8" fontSize="13">{n.etapa}</text>
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
