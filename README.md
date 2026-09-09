# Herramiza

Base estática SEO-first para una publicación editorial. Está construida con Astro y Markdown, por lo que el contenido se publica como HTML estático y no requiere JavaScript de cliente para las rutas editoriales.

## Arquitectura

```
src/
  components/       # Bloques visuales reutilizables: cabecera, cards, SEO, anuncios y migas.
  content/articles/ # Contenido editorial en Markdown, agrupado por categoría.
  data/             # Datos estructurados no editoriales: sitio, categorías y fichas de herramientas.
  layouts/          # Estructuras de página reutilizables.
  pages/            # Rutas y generación estática.
  styles/           # Tokens de diseño globales y estilos base.
public/             # Archivos públicos estáticos (robots.txt e imágenes optimizadas futuras).
```

## Decisiones de escala

- **Contenido:** cada artículo vive en un Markdown con frontmatter validado por `content.config.ts`. No se mezclan datos, contenido y presentación.
- **URLs:** el artículo `src/content/articles/ia/mi-articulo.md` genera `/ia/mi-articulo/`. Las categorías están centralizadas en `src/data/site.ts`. `/herramientas/` se reserva al directorio de fichas de productos, para evitar competir con una categoría editorial.
- **SEO:** `BaseHead` controla title, description, canonical, Open Graph y Twitter. Las páginas relevantes emiten Schema.org real: WebSite, Organization, BreadcrumbList, Article y SoftwareApplication. `@astrojs/sitemap` genera el sitemap; `public/robots.txt` lo declara.
- **Imágenes:** guarda originales ligeros en `public/images/` y referencia una ruta absoluta (`/images/archivo.webp`) en el frontmatter. Reserva `width` y `height` para evitar CLS; convierte imágenes de producción a WebP/AVIF antes de publicarlas.
- **Anuncios:** `AdSlot.astro` está inactivo por defecto. Al integrar AdSense, activa la prop `enabled` o conéctala a una configuración única; no insertes código del proveedor dentro de los artículos.
- **Enlaces internos:** usa rutas de categoría y slugs consistentes. La propiedad `related` está preparada para resolver tarjetas relacionadas en una siguiente iteración.

## Desarrollo

```bash
npm install
npm run dev
npm run build
```

Define el dominio real en `astro.config.mjs` antes del despliegue; de ello dependen los canónicos y el sitemap.

## Operaciones habituales

- **Nuevo artículo:** crea `src/content/articles/<categoria>/<slug>.md`, copia el frontmatter de ejemplo y completa los campos. La categoría debe existir en el enum de `src/content.config.ts` y en `src/data/site.ts`.
- **Nueva categoría:** añade el objeto en `src/data/site.ts`, incorpora el slug al enum en `src/content.config.ts` y publica su primer artículo. La página de categoría se genera automáticamente.
- **Nueva herramienta:** agrega un objeto a `src/data/tools.ts`; la ficha y el directorio se generan automáticamente.
- **Nuevo anuncio:** importa `AdSlot` en el layout o componente que corresponda. No repitas snippets de AdSense: la futura integración se concentra en `src/components/AdSlot.astro`.
- **Header:** modifica únicamente `src/components/Header.astro`.
- **Diseño global:** cambia colores, espaciado, tipografía y dimensiones en `src/styles/tokens.css`.

## Siguiente fase recomendada

Antes de llegar a cientos de artículos, incorpora un CMS Git-based o headless que escriba el mismo esquema de contenido, un pipeline de optimización de imágenes y una búsqueda estática. Así se conserva esta arquitectura sin migrar las URLs ni las plantillas.
