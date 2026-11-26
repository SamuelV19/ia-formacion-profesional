# IA en la Formación Profesional

Showcase académico (React + Vite + TypeScript + Tailwind) que integra **ÉticaLab**, **FuzzyDrive AI** y **DevGuard AI** bajo la narrativa **Ética → Decisión → Ingeniería**.

## Requisitos
Node.js 18+ y npm.

## Instalación y desarrollo
```bash
npm install
npm run dev        # servidor local
```

## Build y preview
```bash
npm run build      # tsc --noEmit + vite build → dist/
npm run preview
```

## Deployment
`vite.config.ts` usa `base: './'`, por lo que `dist/` funciona en GitHub Pages (subruta) o cualquier hosting estático. Publica el contenido de `dist/`.

## Arquitectura
- `content/*.json`: **fuente de verdad** (projects, methodology, tools). La interfaz no inventa datos.
- `src/types/`: tipos TypeScript de los JSON. `src/data/`: carga tipada.
- `src/sections/`: una sección por bloque (Hero, Idea, Matrix, Projects, Agents, Methodology, Tools, Closing).
- `src/components/`: Nav, Section, Reveal (scroll reveal), ProjectPanel, Badge. `src/hooks/`, `src/lib/` (colores por etapa).
- `.agents/`: infraestructura de agentes y Skills del showcase (no se modifica desde el frontend). La Skill `devguard` pertenece al repositorio `devguard-ai` y **no** se copia aquí.

## Accesibilidad
HTML semántico, tabs con teclado (flechas), foco visible, enlace «Saltar al contenido» y `prefers-reduced-motion`.
