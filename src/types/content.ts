export interface EnfoqueIA {
  categoria: string
  usaLLM: boolean
  usaML: boolean
  usaLogicaDifusa: boolean
  usaAgentes: boolean
  detalle: string
}
export interface SkillProyecto {
  nombre: string
  esAntecedenteCasoEstudio?: boolean
  ubicacionCanonica: string
  funcion: string
  fases: string[]
  recursos: string[]
  notaCompatibilidad?: string
}
export interface Proyecto {
  id: string
  nombre: string
  subtitulo: string
  descripcion: string
  problema: string
  objetivo: string
  enfoqueIA: EnfoqueIA
  tecnologias: string[]
  arquitecturaResumida: string
  agentes: string[] | null
  skills: SkillProyecto[] | null
  modelos: string[] | null
  resultados: string[]
  limitaciones: string[]
  repositorioGitHub: string
  repositorioVerificado: boolean
  urlProduccion: string
  urlProduccionVerificada: boolean
}
export interface Eje {
  orden: number
  proyectoId: string
  pilar: string
  etapa: string
  eje: string
  preguntaClave: string
  fundamento: string
  mecanismoReal: string
  usaAgentesOLLM: boolean
  conexionSiguiente: string
}
export interface PasoFlujo { paso: number; skill: string; entrada: string; salida: string }
export interface Metodologia {
  titulo: string
  arcoNarrativo: string
  proposito: string
  principiosMetodologicos: string[]
  ejeConceptual: Eje[]
  flujoMetodologicoRepositorio: PasoFlujo[]
  coordinador: string
}
export interface Herramienta {
  id: string
  nombre: string
  categoria: string
  comando?: string
  ubicacion?: string
  esAntecedente?: boolean
  funcion: string
  relacionConElProyecto: string
}
