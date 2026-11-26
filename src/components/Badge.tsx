import type { ReactNode } from 'react'

export default function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`inline-block rounded-full border border-line bg-panel px-3 py-1 text-xs text-slate-300 ${className}`}>{children}</span>
}
