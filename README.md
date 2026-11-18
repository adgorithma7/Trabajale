# Trabájale (trabajale.ai)

Página de registro para personas en Venezuela que buscan empleo remoto o presencial. Una sola página, estática, sin servidor propio. Los registros van a un formulario de Google y su hoja de cálculo.

## Carpetas

- `sitio/`: lo que se publica en Cloudflare Pages. Ver `docs/03-publicacion.md`.
- `docs/`: documentos de trabajo (comparativa de dominio, plan de registro, guía de publicación, guía de WhatsApp Business).
- `recursos/`: imágenes para redes y perfiles (no se publican en la web).

## Ver la página en local

```bash
python -m http.server 8787 --bind 127.0.0.1 --directory sitio
```

Luego abrir http://localhost:8787/

## Estado

Publicada en https://trabajale.ai desde el 28 de octubre de 2026. Desde el 18 de noviembre de 2026 se publica sola desde este repositorio (Cloudflare Pages, proyecto `trabajale-web`, rama `main`, carpeta `sitio`). Ver `docs/03-publicacion.md`.
