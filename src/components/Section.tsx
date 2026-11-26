import type { ReactNode } from 'react'
import Reveal from './Reveal'

export default function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-t`} className="mx-auto max-w-6xl scroll-mt-14 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[.22em] text-slate-500">{eyebrow}</p>
        <h2 id={`${id}-t`} className="mt-3 max-w-3xl font-serif text-3xl leading-tight text-white sm:text-5xl">{title}</h2>
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  )
}
