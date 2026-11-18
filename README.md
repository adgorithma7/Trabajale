# Trabájale (trabajale.ai)

Página de registro para personas en Venezuela que buscan empleo remoto o presencial. Una sola página, estática, sin servidor propio. Los registros van a un formulario de Google y su hoja de cálculo.

## Carpetas

- `landing/`: código fuente de la web (Next.js + React + Tailwind). Se compila como sitio estático.
- `sitio/`: lo que se publica en Cloudflare Pages. En esta rama es la salida compilada de `landing/` (no se edita a mano). Ver `docs/03-publicacion.md`.
- `docs/`: guía de publicación y guía para colaboradores.
- `interno/` (solo en la copia local, no en GitHub): pendientes, guía de WhatsApp Business y documentos históricos.

## Ver la página en local

Requiere Node 20 o superior.

```bash
cd landing
npm install
npm run dev          # modo edición con recarga: http://localhost:3000
npm run publicar     # compila y copia el resultado a ../sitio
npx serve@14 ../sitio -l 8787   # ver sitio/ tal como lo sirve Cloudflare: http://localhost:8787
```

Para publicar un cambio: editar en `landing/src`, `npm run publicar`, y subir con Git los cambios de `landing/` y `sitio/` juntos.
Cloudflare Pages sigue igual: sin comando de build, carpeta de salida `sitio`.

## Estado

Publicada en https://trabajale.ai desde el 28 de octubre de 2026. Desde el 18 de noviembre de 2026 se publica sola desde este repositorio (Cloudflare Pages, proyecto `trabajale-web`, rama `main`, carpeta `sitio`). Ver `docs/03-publicacion.md`.
