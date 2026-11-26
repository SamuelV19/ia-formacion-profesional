# IA en la Formación Profesional — Infraestructura Metodológica y Showcase

Repositorio del proyecto final de la materia **IA en la Formación Profesional**. Su objetivo es documentar, analizar y conectar conceptualmente tres proyectos académicos independientes para culminar posteriormente en un showcase/landing page con acceso directo a sus versiones desplegadas:

1. **ÉticaLab** — Evaluación ética asistida de decisiones tecnológicas.
2. **DevGuard AI** — Agent Skill de auditoría técnica de código y seguridad con enfoque *Human-in-the-Loop*.
3. **FuzzyDrive AI** — Simulador educativo de riesgo vial con lógica difusa Mamdani.

> [!NOTE]
> **Estado actual del repositorio (Fase 2 — Infraestructura Metodológica + Capa de Contenido Estructurado)**:
> Este repositorio contiene las Skills de trabajo, el agente coordinador (`showcase-agent`), el análisis técnico real de los tres proyectos fuente y la capa estructurada en [`content/`](content/) que consumirá posteriormente la landing. **No incluye todavía la landing page ni duplica código de los repositorios analizados.**

---

## 1. Arquitectura y Metodología del Repositorio

Para abordar el showcase de manera ordenada, reproducible y sin alucinaciones, el proyecto separa las capacidades en **cuatro Skills modulares** y **un agente coordinador**:

```text
ia-formacion-profesional/
├── .agents/
│   ├── skills/
│   │   ├── project-analysis/
│   │   │   └── SKILL.md       # Análisis en solo lectura de repositorios existentes
│   │   ├── documentation/
│   │   │   └── SKILL.md       # Estándar homogéneo de documentación y trazabilidad
│   │   ├── presentation/
│   │   │   └── SKILL.md       # Traducción técnica a narrativa académica clara
│   │   └── deployment/
│   │       └── SKILL.md       # Checklist de build, tests, rutas y despliegue
│   └── agents/
│       └── showcase-agent.md  # Agente coordinador del flujo completo
├── content/                   # Fuente estructurada de contenido para la futura landing
│   ├── projects.json          # Fichas verificadas de ÉticaLab, FuzzyDrive AI y DevGuard AI
│   ├── methodology.json       # Eje conceptual y flujo metodológico entre los proyectos
│   └── tools.json             # Herramientas, entornos, Skills y agente coordinador
└── README.md                  # Metodología, análisis real y referencia a Skills
```

### Flujo Metodológico

```text
[project-analysis] ──► [documentation] ──► [presentation] ──► [deployment]
  (Inspección real)     (Fichas + Skill)    (Hilo académico)    (Build + URLs)
         ▲                                                             │
         └────────────── Coordinado por showcase-agent ────────────────┘
```

- **[`project-analysis`](.agents/skills/project-analysis/SKILL.md)**: inspecciona repositorios reales sin modificarlos y extrae problema, objetivo, stack, arquitectura, enfoque de IA, agentes/Skills, resultados, despliegue y limitaciones.
- **[`documentation`](.agents/skills/documentation/SKILL.md)**: unifica el formato de las fichas técnicas y exige referenciar Skills externas sin copiarlas.
- **[`presentation`](.agents/skills/presentation/SKILL.md)**: convierte los hallazgos técnicos en contenido comprensible para audiencia académica, explicando con honestidad qué hace cada sistema y cómo se conectan.
- **[`deployment`](.agents/skills/deployment/SKILL.md)**: define las comprobaciones de compilación, pruebas, rutas base (`base`) para GitHub Pages y verificación de enlaces a los sitios desplegados.
- **[`showcase-agent`](.agents/agents/showcase-agent.md)**: orquesta las cuatro Skills manteniendo la inmutabilidad de los repositorios originales.

### Capa de Contenido Estructurado (`content/`)

Los archivos JSON en [`content/`](content/) constituyen la **fuente única de datos estructurados** que consumirá posteriormente el frontend de la landing page, generados exclusivamente a partir de la evidencia verificada:

- **[`content/projects.json`](content/projects.json)**: fichas técnicas estructuradas de ÉticaLab, FuzzyDrive AI y DevGuard AI (problema, objetivo, enfoque de IA, tecnologías, arquitectura, agentes, Skills, modelos, resultados, limitaciones, repositorio y URL de producción verificada).
- **[`content/methodology.json`](content/methodology.json)**: relación conceptual entre los tres proyectos y flujo de trabajo del repositorio, distinguiendo explícitamente qué proyectos utilizan agentes/LLM y cuáles no.
- **[`content/tools.json`](content/tools.json)**: inventario del ecosistema de herramientas (Antigravity, Gemini CLI, Skill `devguard`, las cuatro Skills de `ia-formacion-profesional` y `showcase-agent`).

---

## 2. Hilo Conceptual: Ética → Decisión → Ingeniería

Los tres proyectos representan momentos distintos y complementarios en la ingeniería de sistemas inteligentes y software responsable, articulados bajo el eje **Ética → Decisión → Ingeniería**:

| Dimensión | ÉticaLab (**Ética**) | FuzzyDrive AI (**Decisión**) | DevGuard AI (**Ingeniería**) |
| :--- | :--- | :--- | :--- |
| **Momento del ciclo** | **Antes de construir** (diseño y decisión) | **Dentro del motor** (inferencia transparente) | **Durante la ingeniería** (revisión y pruebas) |
| **Pregunta clave** | ¿Qué impacto ético, riesgos y alternativas tiene el sistema? | ¿Cómo razonar bajo incertidumbre de forma interpretable? | ¿Cómo auditar seguridad, calidad y pruebas con apoyo de IA? |
| **Tipo de IA / Lógica** | Reglas determinísticas de consistencia (evalúa sistemas de IA y agentes como temática) | **IA simbólica**: motor difuso Mamdani desde cero (27 reglas IF-THEN) | **Agent Skill** para agentes LLM (`agy` / `gemini`) con *Progressive Disclosure* |
| **Rol humano** | Autoevaluación obligatoria; no emite veredicto automático | Diseño experto de conjuntos difusos y base de reglas | *Human-in-the-Loop*: validación humana obligatoria sobre hallazgos |

---

## 3. Análisis Real de los Proyectos Existentes

Toda la información siguiente fue verificada directamente mediante inspección de solo lectura sobre los clones locales.

### 3.1 ÉticaLab · Laboratorio de Tecnología Responsable

- **Ruta local inspeccionada**: `/home/samuel/eticalab`
- **Repositorio origen**: `https://github.com/SamuelV19/eticalab.git` (rama `main`)
- **Problema que resuelve**: Ayudar a estudiantes y profesionales de Ingeniería Informática a analizar las implicaciones éticas de decisiones tecnológicas *antes* de llevarlas a producción (identificar riesgos, grupos afectados, principios y alternativas).
- **Objetivo**: Plataforma web educativa creada como actividad académica del V Congreso Internacional de Ética (*«Habitar juntos: ética, dignidad y cuidado para una convivencia plural»*, 22 y 23 de octubre de 2026), traduciendo sus temáticas en funciones concretas de evaluación.
- **Tecnologías**: React `18.3.1`, TypeScript `5.9.3`, Vite `5.4.21`, Tailwind CSS `3.4.19`, React Router DOM `6.30.6`, Lucide React `1.61.0`, fuentes locales `@fontsource-variable/*`, Vitest `2.1.9` y Testing Library.
- **Arquitectura**: SPA 100% del lado del cliente (`BrowserRouter` con `basename="/eticalab"`), organizada en `src/pages/` (panel, evaluaciones, evaluador, informe, casos, detalle de caso, matriz, fundamento, ajustes), `src/components/wizard/` (6 etapas), `src/data/` (10 principios, taxonomías, 6 casos prácticos, matriz de trazabilidad), `src/utils/` (`analysis.ts`, `storage.ts`, `validation.ts`, `factory.ts`, `download.ts`) y persistencia local en `localStorage` (`eticalab:evaluaciones:v1`).
- **Uso de IA y modelos**: **No utiliza modelos de ML ni APIs de LLM** en tiempo de ejecución. La función `summarize` (`src/utils/analysis.ts`) aplica comprobaciones determinísticas de consistencia para detectar vacíos de documentación sin calcular puntajes éticos. Aborda sistemas de IA y agentes autónomos como **objeto de análisis ético** (p. ej. tipos `'ia' | 'agente'` y el caso práctico `'agente-sin-supervision'`).
- **Agentes y Skills en el proyecto**: No cuenta con directorio `.agents/` ni Skills propias.
- **Herramientas**: Node.js (18+; CI configurado con Node 24), npm, Vite, TypeScript (`tsc --noEmit`), Vitest, Testing Library, GitHub Actions, configs de Vercel y Netlify.
- **Resultados verificables en el repo**: Implementa panel de indicadores reales, evaluador en 6 etapas con borradores, 6 casos educativos editables, matriz de 10 principios, exportación/importación JSON validada (máx. 5 MB), impresión/PDF desde navegador y pruebas definidas en `src/test/logic.test.ts` y `src/test/app.test.tsx`. *(Las pruebas no se ejecutaron en el clon externo para mantener intacto el repositorio).*
- **Despliegue**: Configurado para GitHub Pages en `.github/workflows/deploy.yml` (`npm run build`, publica `./dist`, `base: '/eticalab/'` en `vite.config.ts`), además de `vercel.json` y `netlify.toml` + `public/_redirects`. URL de producción verificada (HTTP 200): `https://samuelv19.github.io/eticalab/`.
- **Limitaciones**: Sin backend ni sincronización entre navegadores (límite aproximado de 5 MB en `localStorage`), generación de PDF dependiente de la impresión del navegador, herramienta estrictamente educativa (no certifica sistemas), 10 principios no exhaustivos, casos ficticios e interfaz únicamente en español.

---

### 3.2 FuzzyDrive AI · Simulador de Riesgo Vial con Lógica Difusa Mamdani

- **Ruta local inspeccionada**: `/home/samuel/fuzzy-drive-ai`
- **Repositorio origen**: `https://github.com/SamuelV19/fuzzy-drive-ai.git` (rama `main`)
- **Problema que resuelve**: Evaluar y explicar de forma transparente e interpretable el riesgo vial combinando variables continuas (velocidad, distancia y adversidad de la vía) sin depender de pesos fijos arbitrarios ni modelos de caja negra.
- **Objetivo**: Aplicación web educativa que implementa desde cero un motor de inferencia difusa Mamdani para simular y visualizar en tiempo real el cálculo del riesgo vial.
- **Tecnologías**: React `18.3.1`, TypeScript `5.5.4`, Vite `5.4.2`, Recharts `2.12.7`, Vitest `2.0.5`, CSS (`src/styles/app.css`).
- **Arquitectura**: Separación estricta entre el motor difuso puro en `src/fuzzy/` (`membership.ts`, `variables.ts`, `rules.ts`, `inference.ts`), la capa de simulación en `src/sim/` (`scenarios.ts`, `useSimulation.ts`) y los componentes React en `src/components/` (`Controls`, `EventLog`, `FuzzyExplorer`, `RiskChart`, `ui`). La interfaz solo invoca `inferRisk(entrada)`.
- **Uso de IA y modelos**: **IA simbólica / Lógica difusa Mamdani** implementada desde cero (sin librerías externas de lógica difusa, sin ML entrenado y sin LLMs). Modela 3 entradas (velocidad 0–140 km/h, distancia 1–100 m, adversidad 0–100) y 1 salida (riesgo 0–100) mediante funciones triangulares y trapezoidales, 27 reglas IF-THEN completas, operador AND por mínimo, implicación por mínimo, agregación por máximo y desfusificación por centroide (resolución `0.25`, 401 puntos).
- **Agentes y Skills en el proyecto**: No cuenta con directorio `.agents/` ni Skills propias.
- **Herramientas**: Node.js (18+; CI configurado con Node 22), npm, Vite, TypeScript, Vitest, Recharts, GitHub Actions.
- **Resultados verificables en el repo**: Simulador interactivo con modo automático (intervalos de 1, 3 o 5 s), modo manual con sliders, demo crítica reproducible de 9 pasos, explorador difuso, historial de lecturas y pruebas unitarias en `src/fuzzy/inference.test.ts` y `src/fuzzy/membership.test.ts` (cubren funciones de pertenencia, rango `[0, 100]`, monotonía, completitud de las 27 reglas y validación de entradas). *(Las pruebas no se ejecutaron en el clon externo).*
- **Despliegue**: Configurado para GitHub Pages mediante `.github/workflows/deploy.yml` (`npm run build`, publica `./dist`, `base: '/fuzzy-drive-ai/'` en `vite.config.ts`). URL de producción verificada (HTTP 200): `https://samuelv19.github.io/fuzzy-drive-ai/`.
- **Limitaciones**: Datos completamente simulados (sin sensores ni vehículo real), conjuntos y reglas didácticos no calibrados con datos reales ni normativa de tránsito, no aprende automáticamente, no debe usarse para conducción real y su base de reglas es lineal en la suma de niveles de peligro.

---

### 3.3 DevGuard AI · Asistente de Auditoría, Calidad y Seguridad de Código

- **Ruta local inspeccionada**: `/home/samuel/Proyectos/devguard-ai`
- **Repositorio origen**: `git@github.com:SamuelV19/devguard-ia.git` (rama `main`)
- **Problema que resuelve**: Reducir revisiones de código superficiales, vulnerabilidades críticas recurrentes (OWASP Top 10 / CWE), deuda técnica (violaciones SOLID) y ausencia de pruebas estructuradas, evitando al mismo tiempo que un asistente de IA invente hallazgos sin respaldo en el código.
- **Objetivo**: Proveer una **Agent Skill** (`devguard`) con enfoque *Human-in-the-Loop* y *Cero Alucinación* para asistir auditorías técnicas de software, acompañada de una landing page explicativa e interactiva.
- **Tecnologías**:
  - *Subsistema Agent Skill*: estándar Antigravity Agent Skills / Gemini CLI Skills (Markdown + frontmatter YAML).
  - *Subsistema Landing (`landing/`)*: React `18.3.1`, TypeScript `5.6.2`, Vite `6.1.0`, Tailwind CSS `3.4.17`, Lucide React `0.475.0`, `clsx`, `tailwind-merge`.
- **Arquitectura**: Arquitectura desacoplada en dos subsistemas (`docs/ARCHITECTURE.md`):
  1. **Agent Skill Subsystem** (`.agents/skills/devguard/`): `SKILL.md` en 5 fases (*Contexto & Stack → Análisis Multi-Vector → Calibración & Evidencia → Propuestas & Tests → Informe Estructurado*) con carga bajo demanda (**Progressive Disclosure**) de `references/`, `templates/` y `examples/`.
  2. **Landing Subsystem** (`landing/src/`): 10 secciones modulares (`HeroSection` a `Footer`) con configuración centralizada en `landing/src/config/siteConfig.ts`.
- **Uso de IA y modelos**: La Skill está diseñada para ser interpretada por agentes basados en LLMs compatibles con Antigravity (`agy`) y Gemini CLI (`gemini`). La landing page (`landing/`) es estática y no realiza llamadas a LLMs en producción (su visor demo muestra un caso ilustrativo precalculado).
- **Agentes y Skills**: Posee la Skill existente **`devguard`** (documentada en detalle en la sección 4).
- **Herramientas**: Antigravity CLI (`agy`), Gemini CLI (`gemini`), Node.js `v22.16.0`, npm, Vite 6, TypeScript, Tailwind CSS, GitHub Actions.
- **Resultados verificados (registrados en `docs/TESTING.md` y `docs/DELIVERABLES.md`)**: 24 entregables documentados, descubrimiento confirmado con `gemini skills list --all` (`devguard [Enabled]`), compilación limpia de `landing/` (`tsc && vite build` en `2.25s`), auditoría básica de secretos sin hallazgos, banco completo de ejemplo (`vulnerable-auth-endpoint.ts` → `vulnerable-auth-report.md` → `fixed-auth-endpoint.ts`) e infografía/video configurados en `siteConfig.ts` (`isReady: true`).
- **Despliegue**: Landing page configurada para GitHub Pages mediante `.github/workflows/deploy.yml` (`working-directory: landing`, `npm run build -- --base "/${GITHUB_REPOSITORY#*/}/"`, publica `landing/dist`). URL de producción verificada (HTTP 200): `https://samuelv19.github.io/devguard-ia/`.
- **Limitaciones**: Soporte asistido que no sustituye auditorías dinámicas (DAST), *pentesting* ni criterio de ingeniería; posible aparición de falsos positivos; no emite garantías legales ni certificaciones de seguridad.

---

## 4. Documentación de la Skill Existente de DevGuard AI

En cumplimiento de la regla de **no duplicar** la Skill existente, `ia-formacion-profesional` la referencia y documenta directamente desde su repositorio origen:

- **Ubicación canónica**: [`devguard-ai/.agents/skills/devguard/SKILL.md`](/home/samuel/Proyectos/devguard-ai/.agents/skills/devguard/SKILL.md)
  - Recursos vinculados (Progressive Disclosure):
    - `references/security-checklist.md` (OWASP Top 10 y CWE)
    - `references/code-quality-checklist.md` (principios SOLID, manejo de errores, *code smells*)
    - `references/testing-guide.md` (pirámide de pruebas, patrón AAA, casos adversarios)
    - `templates/report-template.md` (plantilla estándar de informe técnico)
    - `examples/` (`vulnerable-auth-endpoint.ts`, `vulnerable-auth-report.md`, `fixed-auth-endpoint.ts`)
  - *Nota de compatibilidad*: La documentación de `devguard-ai` describe además el enlace simbólico `.gemini/skills/devguard` para Gemini CLI (en el clon local actual la carpeta `.gemini/skills/` se encuentra vacía).
- **Nombre de la Skill**: `devguard` (frontmatter YAML `name: devguard`).
- **Función que cumple**: Ejecuta un flujo de auditoría en 5 fases sobre código fuente (comprensión de stack y fronteras de confianza, análisis multi-vector de seguridad/calidad/pruebas, calibración de severidad en 5 niveles y nivel de certidumbre, propuesta de correcciones con diffs/tests AAA y generación de informe estructurado) bajo reglas de evidencia textual obligatoria y validación humana.
- **Agente / modelo que la utiliza**: Agentes ejecutados mediante **Antigravity CLI / IDE (`agy`)** y **Gemini CLI (`gemini`)** (registrado en `docs/DEVELOPMENT_LOG.md` con `agy 1.3.6` y `gemini 0.64.0`). `SKILL.md` es agnóstico al modelo concreto: el modelo LLM utilizado corresponde al configurado en la sesión del agente que activa la Skill.
- **Relación con `ia-formacion-profesional`**:
  1. **Objeto de showcase**: `devguard` es la pieza central de DevGuard AI que se explicará conceptualmente en la futura landing del curso.
  2. **Referencia arquitectónica**: su estructura (`SKILL.md` + Progressive Disclosure) sirve de antecedente práctico dentro de la misma materia, sin crear copias ni versiones divergentes en este repositorio.
  3. **Uso opcional futuro**: cuando se desarrolle la landing de `ia-formacion-profesional`, la Skill `devguard` original podrá invocarse para auditar su código antes del despliegue.

---

## 5. Próximos Pasos

Con la infraestructura metodológica y la capa de contenido estructurado listas (incluyendo las URLs públicas verificadas en GitHub Pages de ÉticaLab, FuzzyDrive AI y DevGuard AI):
1. Construir la landing page de showcase en `ia-formacion-profesional` consumiendo `content/projects.json`, `content/methodology.json` y `content/tools.json`, siguiendo [`presentation`](.agents/skills/presentation/SKILL.md).
2. Ejecutar el checklist de [`deployment`](.agents/skills/deployment/SKILL.md) y publicar en GitHub Pages.
