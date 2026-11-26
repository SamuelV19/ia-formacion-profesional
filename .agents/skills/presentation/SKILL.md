---
name: presentation
description: >-
  Convierte la documentación y los datos estructurados del repositorio en narrativa
  académica clara siguiendo el eje Ética -> Decisión -> Ingeniería para conectar
  ÉticaLab, FuzzyDrive AI y DevGuard AI. Usar al redactar contenido del showcase,
  comparativas o textos de la landing page.
---

# Skill: Presentation (`presentation`)

## Propósito

Traducir fichas técnicas verificadas en contenido claro, riguroso y comprensible para audiencia académica (estudiantes, docentes y evaluadores), articulando los tres proyectos bajo la narrativa **Ética → Decisión → Ingeniería**.

## Alcance

- **Incluye**: redacción de narrativa conceptual, resúmenes ejecutivos, tablas comparativas, microcopy técnico y textos para las secciones de la futura landing page consumiendo `content/*.json`.
- **Excluye**: modificar código de los repositorios originales, exagerar capacidades de IA o inventar métricas/resultados no documentados.

## Entradas Esperadas

- Fichas técnicas verificadas de [`content/projects.json`](../../../content/projects.json).
- Eje conceptual de [`content/methodology.json`](../../../content/methodology.json).
- Inventario de herramientas y Skills de [`content/tools.json`](../../../content/tools.json).

## Narrativa Académica: Ética → Decisión → Ingeniería

Presenta los tres proyectos como etapas complementarias en la construcción de software y sistemas inteligentes responsables:

1. **Ética (`ÉticaLab`) — Análisis previo a la construcción**: evaluación de riesgos, personas afectadas, principios éticos y alternativas antes de producir o desplegar un sistema. Opera con reglas deterministas de consistencia (sin LLM ni ML), abordando sistemas de IA y agentes como objeto de análisis ético.
2. **Decisión (`FuzzyDrive AI`) — Razonamiento interpretable**: apoyo a la toma de decisiones mediante IA simbólica (motor de inferencia difusa Mamdani con 27 reglas IF-THEN y desfusificación por centroide), mostrando cómo calcular salidas cuantitativas trazables sin cajas negras ni aprendizaje automático.
3. **Ingeniería (`DevGuard AI`) — Asistencia agéntica durante el desarrollo**: uso real de IA generativa, agentes (`agy` / `gemini`) y la Agent Skill `devguard` para auditar seguridad (OWASP/CWE), calidad (SOLID) y pruebas (AAA) bajo evidencia textual obligatoria y validación *Human-in-the-Loop*.

## Reglas para Evitar Inventar Información

1. **Fidelidad al dato técnico**: toda afirmación sobre tecnologías, modelos, resultados o URLs debe coincidir exactamente con `content/projects.json`.
2. **Honestidad sobre el tipo de IA**: nunca presentar `ÉticaLab` como aplicación basada en LLM ni `FuzzyDrive AI` como Machine Learning.
3. **Diferenciar hechos de interpretaciones**: distingue claramente qué es un hecho técnico del repositorio (p. ej. 27 reglas Mamdani, Skill `devguard` en 5 fases) y qué es la lectura conceptual del showcase (**Ética → Decisión → Ingeniería**).
4. **Visibilidad de límites**: conserva explícitas las limitaciones educativas y la necesidad de criterio humano en cada proyecto.

## Procedimiento

1. **Extraer hechos base**: lee `content/projects.json`, `content/methodology.json` y `content/tools.json`.
2. **Estructurar el hilo Ética → Decisión → Ingeniería**: redacta la conexión entre evaluación ética previa, lógica difusa para decisión y asistencia agéntica en ingeniería de software.
3. **Destilar por niveles para la audiencia**:
   - Titular breve (1 línea);
   - Problema y solución en lenguaje claro (2–3 líneas);
   - Ficha técnica honesta (stack, tipo real de IA, agentes/Skills si existen, límite principal, enlace a repositorio y demo en producción).
4. **Integrar el ecosistema de Skills**: presenta la Skill existente `devguard` como antecedente/caso de estudio y explica el rol de las Skills propias de `ia-formacion-profesional` junto al `showcase-agent`.

## Salida Esperada

- Textos y comparativas claras listas para mostrar en el showcase o en la interfaz web, alineadas al 100 % con `content/*.json` y sin contradicciones técnicas.

## Relación con el Resto de Skills

- **Consume**: datos estructurados y documentación generada mediante [`documentation`](../documentation/SKILL.md).
- **Precede a**: [`deployment`](../deployment/SKILL.md) antes de publicar la interfaz final.
- **Orquestada por**: [`showcase-agent`](../../agents/showcase-agent.md) en la fase *4. Construir narrativa*.
