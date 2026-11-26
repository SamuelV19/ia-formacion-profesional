import projectsRaw from '../../content/projects.json'
import methodologyRaw from '../../content/methodology.json'
import toolsRaw from '../../content/tools.json'
import type { Herramienta, Metodologia, Proyecto } from '../types/content'

// content/*.json es la fuente de verdad: aquí solo se tipan y se exponen.
export const projects = (projectsRaw as unknown as { proyectos: Proyecto[] }).proyectos
export const methodology = methodologyRaw as unknown as Metodologia
export const tools = (toolsRaw as unknown as { herramientas: Herramienta[] }).herramientas
export const updatedAt: string = projectsRaw.actualizadoEn
export const projectById = (id: string) => projects.find((p) => p.id === id)
export const toolById = (id: string) => tools.find((t) => t.id === id)
