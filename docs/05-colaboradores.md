# Trabájale: cómo trabajar en la web como colaborador

Actualizado: 18 de noviembre de 2026.

Repositorio: https://github.com/adgorithma7/Trabajale (público, propiedad de Trabájale).
Web en producción: https://trabajale.ai. Se publica sola desde la rama `main` con Cloudflare Pages (proyecto `trabajale-web`, carpeta `sitio`).

---

## 1. La regla básica

**Nada llega a `main` sin una solicitud de cambios (pull request) aprobada por el dueño del repositorio.** La rama está protegida: no se puede subir directo, ni forzar, ni borrar. Esto no es desconfianza: es lo que evita que un error salga en vivo y deja registro de cada cambio.

## 2. Flujo de trabajo

1. **Clonar** el repositorio una sola vez:
   ```bash
   git clone https://github.com/adgorithma7/Trabajale.git
   ```
2. **Crear una rama** para cada cambio, con nombre descriptivo:
   ```bash
   git checkout main
   git pull
   git checkout -b cambio/nuevo-texto-portada
   ```
3. **Editar** los archivos dentro de `sitio/`. Probar en local:
   ```bash
   python -m http.server 8787 --bind 127.0.0.1 --directory sitio
   ```
   y abrir http://localhost:8787/ en el navegador. En local, las páginas se abren como `/gracias.html` y `/privacidad.html`; en producción son `/gracias` y `/privacidad`.
4. **Guardar y subir la rama:**
   ```bash
   git add -A
   git commit -m "Describir el cambio en una línea"
   git push -u origin cambio/nuevo-texto-portada
   ```
5. **Abrir la pull request** en GitHub (el propio `git push` muestra el enlace). En la descripción: qué cambia y por qué, y una captura si es visual.
6. **Esperar la vista previa.** Cloudflare publica en la pull request un enlace temporal tipo `https://xxxxxxxx.trabajale-web.pages.dev`. Revisar ahí en un celular real.
7. El dueño revisa, comenta si hace falta, y **aprueba y fusiona**. En uno o dos minutos está en trabajale.ai.

Si el dueño pide cambios: se corrige en la misma rama, se hace `git push` otra vez y la pull request se actualiza sola.

## 3. Qué hay en el repositorio

- `sitio/`: la web. Es lo único que se publica. Ver tabla de archivos en `docs/03-publicacion.md`.
- `docs/`: guías del proyecto. No se publican.
- `README.md`: resumen del proyecto.

## 4. Reglas del proyecto que todo cambio debe respetar

1. **No prometer empleo ni sueldos** en ningún texto. Solo: "regístrate y te contactamos cuando haya una oportunidad".
2. **No pedir cédula, cuentas bancarias ni fotos** en ningún formulario ni mensaje.
3. **El Pixel de Meta solo se carga con consentimiento.** Está en `sitio/consent.js`. No pegar el Pixel ni ningún otro rastreador directamente en el `<head>`; si hace falta otra herramienta de medición, se añade dentro de `consent.js`, detrás del mismo "Aceptar".
4. **No tocar** sin hablarlo antes: las etiquetas `og:` y `twitter:` (vista previa de WhatsApp), la etiqueta `facebook-domain-verification`, `_headers`, `robots.txt`, `sitemap.xml`, ni `.well-known/security.txt`.
5. **Si se reemplaza una imagen o el video conservando el nombre**, subir el número de versión en la referencia (`luca.webp?v=2` pasa a `?v=3`). Si no, los navegadores siguen mostrando el archivo viejo hasta 7 días.
6. **Peso:** imágenes en WebP o JPG optimizado, videos en H.264 por debajo de 5 MB. Mucha gente entra con datos móviles.
7. **Colores y tipografía:** azul `#1F4FD8`, naranja `#FF7A29`, blanco; fuente Nunito. Definidos en `:root` al inicio de cada página.
8. **Enlaces del formulario y de WhatsApp:** el formulario de Google y el número 0422-TRABAJA (`wa.me/584228722252`) aparecen en varios sitios; si cambian, buscar y reemplazar en todas las páginas.
9. **Cuentas y claves:** nunca se escriben en el repositorio. Es público.

## 5. Qué no hace falta

- No hay proceso de compilación: es HTML, CSS y JavaScript plano.
- No hay dependencias que instalar.
- No hay que tocar Cloudflare para publicar: la fusión en `main` lo hace sola.
