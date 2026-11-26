---
name: project-analysis
description: >-
  Analiza repositorios académicos o de software existentes en modo solo lectura para extraer
  evidencia real sobre problema, objetivo, tecnologías, arquitectura, tipo de IA/sistema
  inteligente, modelos, agentes, Skills, herramientas, resultados, despliegue, repositorio,
  URL de producción y limitaciones. Usar antes de documentar o presentar un proyecto.
---

# Skill: Project Analysis (`project-analysis`)

## Propósito

Estandarizar la inspección técnica en modo solo lectura de repositorios existentes para obtener una ficha verificable de cada proyecto sin inventar datos ni modificar los archivos analizados.

## Alcance

- **Incluye**: inspección de código fuente, documentación, manifiestos (`package.json`), configuración de build/router (`vite.config.ts`), workflows CI/CD (`.github/workflows/`), directorios de agentes/Skills (`.agents/`, `.gemini/`) y remotos Git de repositorios locales o URLs públicas verificables.
- **Excluye**: modificación de los repositorios analizados, copia de código hacia `ia-formacion-profesional`, ejecución destructiva o inferencia de capacidades de IA no respaldadas por el código.

## Entradas Esperadas

- Ruta local del repositorio a analizar (por ejemplo `/home/samuel/eticalab`, `/home/samuel/fuzzy-drive-ai`, `/home/samuel/Proyectos/devguard-ai`).
- Opcionalmente, URL de producción candidata para comprobar disponibilidad HTTP real.

## Reglas para Evitar Inventar Información

1. **Solo lectura sobre repositorios externos**: nunca crees, edites ni elimines archivos dentro de los repositorios fuente.
2. **Evidencia textual obligatoria**: cada dato reportado debe citar el archivo donde fue observado (`README.md`, `package.json`, `src/...`, `docs/...`, `.github/workflows/...`).
3. **Clasificación estricta del enfoque de IA**: distingue explícitamente entre:
   - *Reglas deterministas* (validación/consistencia sin aprendizaje ni LLM);
   - *Lógica difusa* (IA simbólica con funciones de pertenencia, reglas IF-THEN y desfusificación);
   - *IA generativa / LLM* (llamadas a modelos de lenguaje o prompts ejecutados por modelos);
   - *Agentes* (orquestación autónoma o asistida por CLI/IDE);
   - *Skills* (paquetes `SKILL.md` descubribles por un agente).
   No clasifiques un proyecto como «IA generativa» ni le atribuyas agentes/LLM si el código no los utiliza.
4. **Datos ausentes explícitos**: si no existen modelos, agentes, Skills o URL verificada, registra `null` o `"pendiente"` (nunca completes por suposición).

## Procedimiento

### 1. Localización y Origen
1. Verifica la ruta local, remotos Git y commits recientes sin alterar el estado del repositorio:
   ```bash
   git -C <ruta_proyecto> status --short
   git -C <ruta_proyecto> remote -v
   git -C <ruta_proyecto> log --oneline -n 5
   ```
2. Lista la estructura raíz y carpetas relevantes (`src/`, `docs/`, `.agents/`, `.gemini/`, `.github/workflows/`).

### 2. Propósito, Stack y Arquitectura
1. Lee `README.md` y `docs/` (si existen) para extraer problema, objetivo, alcance y limitaciones declaradas.
2. Lee `package.json`, `tsconfig.json` y `vite.config.ts` para registrar lenguajes, frameworks, librerías, versiones y scripts (`dev`, `build`, `test`, `typecheck`).
3. Inspecciona `src/` para describir la arquitectura real (capas, módulos, estado/persistencia).

### 3. Auditoría de IA, Modelos, Agentes y Skills
1. Verifica en `src/` si existen llamadas a APIs/SDKs de LLM, modelos de ML entrenados, motor simbólico (por ejemplo lógica difusa) o reglas deterministas puras.
2. Revisa `.agents/` y `.gemini/`: si existe un `SKILL.md`, registra su ubicación canónica, `name`, función, fases, recursos asociados, agente/CLI compatible y **prohíbe copiarla**.

### 4. Resultados, Despliegue y URL de Producción
1. Identifica suites de pruebas (`*.test.ts`, `*.test.tsx`) y evidencias registradas en `docs/` (diferenciando pruebas definidas en código de ejecuciones observadas).
2. Revisa `.github/workflows/deploy.yml`, `vercel.json`, `netlify.toml` y `base` en `vite.config.ts`.
3. Si existe URL de producción candidata, compruébala con `curl -sIL` antes de marcarla como verificada.

## Salida Esperada

Ficha técnica estructurada con citas de archivo cubriendo exactamente:
1. Identificación (`id`, nombre, ruta local, repositorio GitHub)
2. Problema y objetivo
3. Tecnologías y herramientas
4. Arquitectura resumida
5. Tipo de IA / sistema inteligente (distinguiendo reglas deterministas, lógica difusa, IA generativa, agentes y Skills)
6. Modelos (o `null` si no aplica / no está fijado)
7. Agentes y Skills existentes (o `null` si no existen)
8. Resultados verificables
9. Despliegue y URL de producción verificada (o `null` / `"pendiente"`)
10. Limitaciones conocidas

## Relación con el Resto de Skills

- **Provee insumos a**: [`documentation`](../documentation/SKILL.md) (para redactar `README.md` y estructurar `content/projects.json`).
- **Orquestada por**: [`showcase-agent`](../../agents/showcase-agent.md) en la fase *1. Analizar proyectos*.
- **Verificación final**: comprueba que `git -C <ruta_proyecto> status --short` en los repositorios fuente permanece sin cambios.
