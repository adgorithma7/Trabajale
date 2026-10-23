# Trabájale: cómo está hecha la web, dónde quedan los datos y cómo publicarla

Actualizado: 23 de octubre de 2026.

---

## 1. Qué hay en la carpeta `sitio/`

Todo lo que se publica está ahí. No hay base de datos ni servidor propio: es una página estática.

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página completa: textos, estilos y enlaces. Es el único archivo que normalmente se edita. |
| `404.html` | Página que se muestra si alguien entra a una dirección que no existe. |
| `hero.jpg` | Foto de fondo de la portada. |
| `og.jpg` | Imagen de vista previa cuando se comparte el enlace en WhatsApp, Facebook, Instagram o Telegram. 1200 x 630 px. |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Ícono de la pestaña del navegador y de la pantalla de inicio del celular. |
| `_headers` | Cabeceras de seguridad y de caché que Cloudflare Pages aplica automáticamente. |
| `_redirects` | Redirige `www.trabajale.ai` a `trabajale.ai`. |
| `robots.txt`, `sitemap.xml` | Para que Google indexe la página correctamente. |

La carpeta `docs/` tiene estos documentos de trabajo y no se publica.

---

## 2. Dónde quedan los datos de las personas que se registran

**En tu formulario de Google y su hoja de cálculo.** La web no guarda nada.

- Los dos botones "Regístrate gratis" llevan al formulario de Google "Regístrate en Trabájale".
- Cada respuesta cae automáticamente en la hoja de cálculo vinculada a ese formulario. Se ve desde el formulario, pestaña "Respuestas", ícono de hoja de cálculo verde.
- Para exportar: en la hoja, Archivo, Descargar, Excel o CSV.
- Quién puede ver los datos: solo las cuentas de Google con las que compartas la hoja. Revisa que no esté compartida "con cualquiera que tenga el enlace".

**Cuidado al editar el formulario de Google:** puedes agregar, quitar o reordenar preguntas sin romper nada en la web, porque la web solo tiene el enlace. Si alguna vez cambias el formulario por otro nuevo, hay que actualizar el enlace en `index.html` en los dos botones.

---

## 3. Pendientes antes de publicar

Hay dos cosas marcadas con la palabra `PENDIENTE` dentro de `index.html`:

1. **Número de WhatsApp Business.** Buscar `58XXXXXXXXXX` y reemplazarlo por el número real con código de país, sin `+` ni espacios. Ejemplo: `584121234567`. Mientras no se cambie, el botón "Escríbenos por WhatsApp" lleva a un número inexistente. No publicar antes de reemplazarlo.
2. **Fragmento de Cloudflare Web Analytics.** Ver sección 6. Se puede publicar sin esto y agregarlo después.

Y una recomendación: reducir las preguntas del formulario de Google. Hoy tiene 14. Cuantas menos preguntas, más personas terminan el registro. Edad y sexo no son necesarias para contactar a alguien.

---

## 4. Cómo publicar en Cloudflare Pages

Hay dos caminos. Los dos son gratis y dan certificado HTTPS automático.

### Camino A: subir la carpeta a mano (más simple, sin GitHub)

1. Entra a tu panel de Cloudflare.
2. Menú lateral: **Workers & Pages**, botón **Create**, pestaña **Pages**, opción **Upload assets**.
3. Nombre del proyecto: `trabajale`. Clic en **Create project**.
4. Arrastra **el contenido de la carpeta `sitio/`** (los archivos, no la carpeta en sí) y clic en **Deploy site**.
5. Cloudflare te da una dirección temporal tipo `trabajale.pages.dev`. Ábrela en el celular y revisa que todo se vea bien.
6. Para conectar el dominio: en el proyecto, pestaña **Custom domains**, **Set up a custom domain**, escribe `trabajale.ai` y confirma. Repite con `www.trabajale.ai`. Como el dominio está en el mismo Cloudflare, se configura solo en unos minutos.

Cada vez que haya un cambio en la web, se repite el paso 4 desde la pestaña **Deployments**, botón **Create deployment**. Toma un minuto.

### Camino B: conectar con GitHub (cada cambio se publica solo)

1. Crea un repositorio en tu cuenta de GitHub llamado `trabajale` y sube el contenido de esta carpeta.
2. En Cloudflare: **Workers & Pages**, **Create**, **Pages**, **Connect to Git**, elige el repositorio.
3. Configuración de build: framework **None**, build command vacío, **Build output directory**: `sitio`.
4. **Save and Deploy**. A partir de ahí, cada vez que se suba un cambio al repositorio, Cloudflare publica la nueva versión sola en uno o dos minutos.
5. El dominio se conecta igual que en el camino A, paso 6.

Recomendación: empezar por el camino A para salir rápido. Pasar al B cuando haya cambios frecuentes.

---

## 5. Cómo cambiar un texto

1. Abre `sitio/index.html` con cualquier editor de texto (Bloc de notas sirve; mejor VS Code).
2. Busca el texto que quieres cambiar, cámbialo, guarda.
3. Vuelve a publicar según el camino que uses.

Los colores están definidos al inicio del archivo, en la parte que empieza con `:root`. Azul `#1F4FD8`, naranja `#FF7A29`.

---

## 6. Métricas de visitas con Cloudflare Web Analytics

Gratis, sin cookies, sin aviso legal de cookies.

1. En el panel de Cloudflare: **Analytics & Logs**, **Web Analytics**, **Add a site**.
2. Escribe `trabajale.ai` y continúa. Cloudflare muestra un fragmento que empieza con `<script defer src='https://static.cloudflareinsights.com/beacon.min.js'`.
3. Copia ese fragmento completo y pégalo en `sitio/index.html`, justo donde dice `Cloudflare Web Analytics` cerca del final del archivo, reemplazando el comentario `PENDIENTE`.
4. Publica de nuevo. Las visitas empiezan a verse en unas horas en la misma sección de Web Analytics.

Si en el futuro se van a hacer anuncios en Facebook o Instagram, se agrega Meta Pixel. Eso sí requiere aviso de cookies; se hace en ese momento.

---

## 7. Correo profesional hola@trabajale.ai (gratis)

Cuando el dominio ya esté en Cloudflare:

1. En el panel: elige el dominio `trabajale.ai`, menú **Email**, **Email Routing**, **Get started**.
2. Crea la dirección `hola@trabajale.ai` y elige a qué correo real se reenvía (por ejemplo tu Gmail actual).
3. Cloudflare agrega los registros DNS solo. Verifica el correo de destino cuando llegue el aviso.
4. Cambia en `index.html` el `mailto:trabajale.ai@gmail.com` por `mailto:hola@trabajale.ai` en el pie de página, y publica.

Para **responder** desde hola@trabajale.ai también hay que configurarlo en Gmail como "Enviar como". Es un paso extra opcional; si no se hace, las respuestas saldrán desde el Gmail.

---

## 8. Checklist de salida a producción

- [ ] Número de WhatsApp reemplazado en `index.html`.
- [ ] Formulario de Google revisado: preguntas, casilla de consentimiento, hoja de cálculo no compartida públicamente.
- [ ] Dominio comprado en Cloudflare, con renovación automática y bloqueo de transferencia activados.
- [ ] Web publicada en Cloudflare Pages y probada en un celular real.
- [ ] Dominio `trabajale.ai` y `www` conectados al proyecto de Pages.
- [ ] Vista previa probada: enviarse el enlace por WhatsApp a uno mismo y confirmar que sale la imagen azul con el título.
- [ ] Web Analytics agregado.
- [ ] Correo hola@trabajale.ai creado y cambiado en el pie de página.
- [ ] Verificación en dos pasos activa en Cloudflare, Google y WhatsApp Business.
