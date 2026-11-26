---
name: documentation
description: >-
  Transforma los hallazgos verificados de project-analysis en documentación homogénea y
  datos estructurados dentro de ia-formacion-profesional, sin inventar información ni
  duplicar Skills o código de repositorios externos. Usar al redactar o actualizar
  README.md, fichas técnicas y content/*.json.
---

# Skill: Documentation (`documentation`)

## Propósito

Garantizar que toda la documentación técnica y la capa estructurada (`content/*.json` y `README.md`) de `ia-formacion-profesional` mantengan un formato homogéneo, trazable y fiel a la evidencia extraída de los repositorios reales.

## Alcance

- **Incluye**: redacción y actualización de `README.md`, `content/projects.json`, `content/methodology.json` y `content/tools.json`, así como la referencia documentada a Skills externas.
- **Excluye**: copiar código fuente de ÉticaLab, FuzzyDrive AI o DevGuard AI, duplicar `.agents/skills/devguard/`, o redactar copy promocional sin respaldo técnico.

## Entradas Esperadas

- Fichas verificadas producidas con [`project-analysis`](../project-analysis/SKILL.md).
- Rutas canónicas y metadatos de Skills o agentes detectados en los repositorios.

## Reglas para Evitar Inventar Información

1. **Trazabilidad estricta**: todo dato documentado debe provenir de la salida verificada de `project-analysis`.
2. **Campos faltantes explícitos**: cualquier dato no confirmado (por ejemplo modelos no fijados o URLs no verificadas) se registra como `null` o `"pendiente"`.
3. **Diferenciar hechos de interpretaciones**: separa los hechos técnicos observables (versiones, archivos, enfoque real de IA) de las síntesis conceptuales del showcase.
4. **Referenciar sin duplicar**: la Skill `devguard` de DevGuard AI debe documentarse por su ubicación canónica (`/home/samuel/Proyectos/devguard-ai/.agents/skills/devguard/SKILL.md`), nombre, función y relación con el proyecto, **nunca copiándose** dentro de `ia-formacion-profesional/.agents/skills/`.
5. **Precisión terminológica**: nunca describir reglas deterministas o lógica difusa Mamdani como Machine Learning o IA generativa.

## Procedimiento

1. **Normalizar el esquema por proyecto**: ordena cada proyecto con los mismos campos (nombre, descripción, problema, objetivo, enfoque de IA, tecnologías, arquitectura, agentes, Skills, modelos, resultados, limitaciones, repositorio GitHub y URL de producción).
2. **Poblar la capa estructurada (`content/`)**:
   - Registra las fichas en `content/projects.json`.
   - Documenta la relación conceptual y el flujo metodológico en `content/methodology.json`.
   - Registra entornos, Skills externas, nuevas Skills y `showcase-agent` en `content/tools.json`.
3. **Documentar Skills externas existentes**: incluye una subsección dedicada para `devguard` indicando ubicación canónica, identificador YAML (`name`), función, agente/CLI compatible y relación como antecedente/caso de estudio.
4. **Actualizar `README.md`**: refleja la arquitectura del repositorio, el análisis real resumido de los tres proyectos y el enlace a `content/` como fuente de verdad de la futura landing.
5. **Validar consistencia**: comprueba sintaxis JSON y coherencia cruzada entre `content/*.json`, `.agents/` y `README.md`.

## Salida Esperada

- Documentación homogénea en `README.md`.
- Archivos JSON válidos y consistentes en `content/projects.json`, `content/methodology.json` y `content/tools.json`.
- Referencia documentada de la Skill `devguard` sin duplicación.

## Relación con el Resto de Skills

- **Consume**: fichas verificadas de [`project-analysis`](../project-analysis/SKILL.md).
- **Alimenta a**: [`presentation`](../presentation/SKILL.md) (proveyendo datos estructurados) y [`deployment`](../deployment/SKILL.md) (proveyendo URLs y rutas documentadas).
- **Orquestada por**: [`showcase-agent`](../../agents/showcase-agent.md) en las fases *2. Estructurar información* y *3. Documentar*.
