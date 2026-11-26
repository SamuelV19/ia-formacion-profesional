---
name: deployment
description: >-
  Checklist reproducible para validar build, TypeScript, rutas, enlaces internos y externos,
  diseño responsive, despliegue en GitHub Pages y URLs públicas de producción antes de
  liberar el showcase. Usar antes de publicar o verificar un despliegue.
---

# Skill: Deployment (`deployment`)

## Propósito

Verificar que la aplicación del showcase compile sin errores, pase las comprobaciones de TypeScript, funcione correctamente en diseño responsive, resuelva bien sus rutas y mantenga operativos todos los enlaces internos y las URLs externas de producción antes de publicar.

## Alcance

- **Incluye**: validación técnica de `ia-formacion-profesional` cuando exista interfaz web (dependencias, TypeScript, tests, build, responsive, rutas, CI/CD) y verificación HTTP de enlaces externos hacia ÉticaLab, FuzzyDrive AI y DevGuard AI.
- **Excluye**: modificar los repositorios externos de los tres proyectos vinculados o dar por aprobadas pruebas no ejecutadas tras el último cambio.

## Entradas Esperadas

- Código fuente del showcase (cuando la landing exista) y su configuración (`package.json`, `tsconfig.json`, `vite.config.ts`, `.github/workflows/deploy.yml`).
- URLs públicas y repositorios documentados en [`content/projects.json`](../../../content/projects.json).

## Reglas para Evitar Inventar Información

1. **Evidencia posterior al último cambio**: nunca reportes `build`, `tsc`, pruebas o validaciones responsive como aprobadas si no se ejecutaron después de la última edición.
2. **Registro literal de resultados**: reporta exactamente los códigos de salida, errores o códigos HTTP observados.
3. **URLs verificadas**: utiliza únicamente las URLs confirmadas en `content/projects.json` y compruébalas en vivo antes de liberar.

## Procedimiento

### 1. Validación de Dependencias, TypeScript y Build
1. Verifica estado de Git y ausencia de secretos rastreados (`git status`, `.gitignore`).
2. Ejecuta en el directorio de la aplicación web:
   ```bash
   npm ci
   npx tsc --noEmit
   npm test
   npm run build
   ```
3. Confirma que `dist/` se generó con salida `0` y sin errores de tipado.

### 2. Validación de Rutas y Configuración de Deployment
1. Verifica `vite.config.ts` (`base` acorde al repositorio en GitHub Pages, p. ej. `'/ia-formacion-profesional/'` o `'./'`) y `basename` del router si aplica.
2. Revisa `.github/workflows/deploy.yml`: permisos (`contents: read`, `pages: write`, `id-token: write`), rama disparadora, versión de Node.js y ruta de artefacto (`./dist`).

### 3. Validación Responsive
1. Levanta vista previa local (`npm run preview`) y comprueba la interfaz en al menos tres anchos representativos:
   - Móvil (`375px`)
   - Tablet (`768px`)
   - Escritorio (`1280px+`)
2. Verifica ausencia de desbordamiento horizontal, solapamiento de tarjetas/tablas, legibilidad tipográfica y accesibilidad táctil de botones y enlaces externos.

### 4. Validación de Enlaces Internos y URLs Externas
1. Verifica que los enlaces internos y referencias a archivos del repositorio existan.
2. Comprueba disponibilidad HTTP (`200`) de las URLs de producción y repositorios documentados en `content/projects.json`:
   ```bash
   for url in \
     "https://samuelv19.github.io/eticalab/" \
     "https://samuelv19.github.io/fuzzy-drive-ai/" \
     "https://samuelv19.github.io/devguard-ia/" \
     "https://github.com/SamuelV19/eticalab" \
     "https://github.com/SamuelV19/fuzzy-drive-ai" \
     "https://github.com/SamuelV19/devguard-ia"; do
     curl -sIL -o /dev/null -w "$url -> HTTP %{http_code}\n" --max-time 8 "$url"
   done
   ```

## Salida Esperada

Reporte de verificación previa al despliegue con el estado real (`APROBADO` / `FALLIDO`) de:
- TypeScript (`tsc --noEmit`) y tests;
- Build (`npm run build`);
- Rutas y workflow de deployment;
- Diseño responsive (móvil, tablet, escritorio);
- Enlaces internos y URLs externas de producción.

## Relación con el Resto de Skills

- **Consume**: URLs y metadatos validados desde [`content/projects.json`](../../../content/projects.json) (generado con [`documentation`](../documentation/SKILL.md)) y contenido narrativo revisado con [`presentation`](../presentation/SKILL.md).
- **Complemento opcional**: para auditar seguridad y calidad del código de la futura landing antes del despliegue, puede invocarse la Skill externa [`devguard`](/home/samuel/Proyectos/devguard-ai/.agents/skills/devguard/SKILL.md) sin copiarla en este repositorio.
- **Orquestada por**: [`showcase-agent`](../../agents/showcase-agent.md) en las fases *5. Validar* y *6. Preparar showcase*.
