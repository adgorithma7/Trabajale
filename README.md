# Trabájale (trabajale.ai)

Página de registro para personas en Venezuela que buscan empleo remoto o presencial. Una sola página, estática, sin servidor propio. Los registros van a un formulario de Google y su hoja de cálculo.

## Carpetas

- `sitio/`: lo que se publica en Cloudflare Pages. Ver `docs/03-publicacion.md`.
- `docs/`: documentos de trabajo (comparativa de dominio, plan de registro, guía de publicación).

## Ver la página en local

```bash
python -m http.server 8787 --bind 127.0.0.1 --directory sitio
```

Luego abrir http://localhost:8787/

## Pendientes antes de publicar

Buscar `PENDIENTE` en `sitio/index.html`: número de WhatsApp y fragmento de Cloudflare Web Analytics.
