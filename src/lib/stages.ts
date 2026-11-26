// Identidad visual por etapa: Ética (magenta), Decisión (verde azulado), Ingeniería (azul-violeta).
export interface StageStyle { hex: string; text: string; border: string; bg: string; dot: string }
export const stageStyle: Record<string, StageStyle> = {
  eticalab: { hex: '#f472b6', text: 'text-ethic', border: 'border-ethic/40', bg: 'bg-ethic/10', dot: 'bg-ethic' },
  'fuzzy-drive-ai': { hex: '#2dd4bf', text: 'text-decision', border: 'border-decision/40', bg: 'bg-decision/10', dot: 'bg-decision' },
  'devguard-ai': { hex: '#8b9cff', text: 'text-eng', border: 'border-eng/40', bg: 'bg-eng/10', dot: 'bg-eng' },
}
export const styleOf = (id: string): StageStyle => stageStyle[id] ?? stageStyle['devguard-ai']
