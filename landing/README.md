# Landing de Trabájale (Next.js + React + Tailwind)

Rediseño de [trabajale.ai](https://trabajale.ai) como landing completa de bolsa de empleo.
Mantiene la identidad actual (azul `#1F4FD8`, naranja `#FF7A29`, tinta `#14213D`, mascota Luca) con
tres roles tipográficos: Outfit para titulares, Plus Jakarta Sans para texto y DM Mono para etiquetas, números y horas y pone como medios principales el **formulario de Google** y el **WhatsApp 0422-TRABAJA**.

Repositorios: el principal está en la organización **trabajale** (https://github.com/trabajale/trabajale-landing, privado) y hay una copia
personal en https://github.com/galvysRodriguez/trabajale-landing. En la copia de trabajo local, `git push origin main` publica en los dos a la vez.

## Correr en local

```bash
git clone https://github.com/trabajale/trabajale-landing.git
cd trabajale-landing
npm install
npm run dev        # http://localhost:3000
npm run build      # compila para producción
npm start          # sirve la build
npm test           # pruebas Playwright en escritorio y móvil (compila y sirve en el puerto 3399)
```

La primera vez: `npx playwright install chromium`. Las capturas de página completa quedan en `tests/capturas/`
y el informe HTML en `tests/informe/` (`npm run test:informe`).

Requiere Node 20 o superior. Next 16 (App Router), React 19, Tailwind v4, TypeScript,
**shadcn/ui** sobre Radix (`src/components/ui`: button, badge, accordion, tabs, sheet, tooltip, separator),
Motion para animación, y para el 3D: Three.js con React Three Fiber y Drei.

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| Enlaces (formulario, WhatsApp y canal de Telegram), menú y **banner superior** | `src/config/site.ts` |
| Guía de marca (colores, tipografía, voz, reglas de interacción) | `BRAND.md` |
| Tema (tokens de shadcn mapeados a la marca, claro y oscuro) | `src/app/globals.css`, bloque `:root` / `.dark` |
| Componentes base shadcn/ui | `src/components/ui/*` (se añaden con `npx shadcn@latest add <componente>`) |
| Kit de logos (SVG) | `public/marca/` (isotipo, logo, logo sobre fondo oscuro) |
| Piezas publicitarias (OG 1200×630, cuadrado 1080×1080, historia 1080×1920) | `src/app/piezas/[pieza]/page.tsx` → `node tests/herramientas/piezas.mjs` genera `piezas/*.png` y `public/og.png` |
| Pruebas de navegador | `tests/landing.spec.ts`, `playwright.config.ts` |
| Vacantes destacadas y categorías de empleo | `src/data/vacantes.ts` |
| Preguntas frecuentes | `src/data/faq.ts` |
| Colores, radios, sombras, fuente (tokens de Tailwind) | `src/app/globals.css` |
| Metadatos SEO / Open Graph | `src/app/layout.tsx` |
| Orden de las secciones de la portada | `src/app/page.tsx` |
| Fondo 3D del hero (piezas, colores, luces) | `src/components/Fondo3D.tsx` (se monta desde `Fondo3DCarga.tsx` solo con WebGL y pantallas ≥ 640 px) |
| Tarjeta de Luca y chips flotantes con parallax | `src/components/Hero.tsx` + `Escena.tsx` |
| Tarjetas con inclinación 3D y aparición al hacer scroll | `src/components/Tilt.tsx`, `Revelar.tsx` |
| Sistema de tarjetas (`.tarjeta`, `.invertible`, `.subrayable`, `.marca-agua`) | `src/app/globals.css` |
| Garantías (tarjetas que invierten color y despliegan detalle) | `src/components/Garantias.tsx` |
| Recorrido interactivo de 4 pasos con vista previa | `src/components/Pasos.tsx` |
| Tipografías (cambiar familias o pesos) | `src/app/layout.tsx` |
| Sección "Así somos" (cultura, valores, charla con Luca, reel) | `src/components/Cultura.tsx` |
| Política de privacidad | `src/app/privacidad/page.tsx` |
| Imágenes (Luca, OG, póster del video) | `public/` |
| Favicon e icono de iOS | `src/app/icon.svg`, `src/app/apple-icon.png` |

## Secciones de la portada

0. **Banner superior** (cerrable, recuerda el cierre en el navegador; texto y enlace en `site.ts`).
1. **Header** fijo que se compacta al hacer scroll, con barra de progreso de lectura, menú que marca la sección activa,
   botón a WhatsApp y botón al formulario. Enlace "Saltar al contenido" para teclado.
2. **Hero 3D**: fondo con piezas Three.js que siguen el cursor, y una "tarjeta de equipo" de Luca
   (foto de perfil, nombre, rol y su mensaje) con chips flotantes en capas de profundidad y parallax.
3. **Nuestro compromiso**: cuatro garantías con el mismo tratamiento (numeral azul, línea naranja) que invierten el color
   al pasar el cursor y despliegan el detalle al tocarlas.
4. **Cómo funciona**: recorrido interactivo de cuatro pasos. Cada paso muestra en un teléfono cómo se ve en la práctica
   (formulario, resumen de experiencia, chat de WhatsApp con Luca, canal de Telegram); avanza solo, se pausa al pasar el cursor.
5. **WhatsApp** (`WhatsApp.tsx`): ventajas, un teléfono en perspectiva con mensajes de ejemplo y un recuadro al canal de Telegram.
6. **Nuestra cultura**: manifiesto del equipo ("en lo que creemos"), cuatro principios, "cómo trabajamos" en tres pasos,
   tarjeta de Luca con cita, conversación típica por WhatsApp y el reel de 30 segundos.
7. **Seguridad**: compromisos tomados de la política de privacidad y canales oficiales.
8. **Para empresas**: contacto por WhatsApp.
9. **Preguntas frecuentes** (acordeón sin JavaScript).
10. **CTA final** con fondo 3D propio (icosaedro de alambre), formulario, WhatsApp, canal de Telegram y botones para
    **compartir** la página (WhatsApp, Web Share o copiar enlace).
12. **Footer**, **barra inferior fija en celular** con formulario + WhatsApp, botón **volver arriba** y página **404** propia.

## Piezas gráficas (canvas-design)

Las piezas para anuncios se maquetan como páginas con el mismo sistema de la web (`/piezas/og`, `/piezas/cuadrado`,
`/piezas/historia`; no se indexan). Con el sitio sirviéndose (`npm start` en el puerto 3399 o `npm run dev` y pasar la URL):

```bash
node tests/herramientas/piezas.mjs            # escribe piezas/*.png y actualiza public/og.png
node tests/herramientas/capturas-ui.mjs       # capturas de menú móvil, filtro de vacantes y acordeón
```

Para una campaña nueva, cambia los textos en esa página y vuelve a generar.

## Animación

Librería `motion` (Framer Motion). Reglas: solo `transform` y `opacity`, 150–300 ms, ease-out, entradas escalonadas,
y con `prefers-reduced-motion` se conserva solo el cambio de opacidad. Dónde se usa: entrada del hero, transición de la
vista previa de los pasos, banner, botón volver arriba y barra de progreso del header.

## Comportamiento al pasar el cursor

Ninguna tarjeta se cubre de blanco. Hay dos comportamientos, definidos en `globals.css`:
- `.tarjeta.invertible`: el fondo pasa a azul marino y el texto a blanco (garantías, pasos, categorías, valores).
- `.tarjeta.subrayable`: el título se subraya en naranja y la tarjeta se eleva (vacantes, seguridad, empresas, preguntas).
Todas muestran un borde degradado azul→naranja al pasar el cursor. Los botones invierten su color.

## Canales

Todos los botones de contacto llevan al **WhatsApp 0422-TRABAJA** con un mensaje ya escrito: `site.whatsappVacantes`
(personas que buscan empleo), `site.whatsapp` (registro) y `site.whatsappEmpresas` (empresas). El **canal de Telegram**
(`site.telegram`, @trabajale) se promociona para mantenerse informado: banner, paso 4, sección de WhatsApp, CTA final,
menú móvil y pie. Sus enlaces no envían evento al Pixel. La web no publica correo; las pruebas fallan si aparece un `mailto:`.
Confirmar que `https://t.me/trabajale` es el canal oficial; si no, cambiarlo en `src/config/site.ts`.

## Versión de diciembre (temporada)

Todo está en `src/config/temporada.ts`. La temporada entra por el mensaje y el momento, no por la paleta: la guía de marca
("azul manda, naranja señala") se respeta tal cual. Qué cambia cuando `activa: true`:

| Elemento | Texto |
|---|---|
| Banner, etiqueta | Diciembre |
| Banner, texto | Las empresas están sumando personal para la temporada. Publicamos las vacantes nuevas en el canal de Telegram. |
| Titular | Empleos remotos o presenciales, **para empezar en diciembre** |
| Subtítulo | Regístrate gratis, cuéntanos qué sabes hacer y te avisamos cuando haya una oportunidad en Venezuela que encaje contigo. |
| Chip superior | Bolsa de empleo gratuita para Venezuela |

Lo que no se hace: cuenta regresiva, "últimos cupos", "solo por hoy", testimonios o cifras inventadas.

**Caducidad**: `hasta: "2027-01-07"`. Si la temporada sigue activa después de esa fecha, `npm test` falla con el aviso de
apagarla (`activa: false`) y redesplegar. Una web con adornos en febrero comunica abandono.

**Solo web general**: la página `/cucuta` se retiró (2026-11-17); la web atiende al público general de Venezuela.

**Vacantes fuera de la portada**: en esta versión no se muestran trabajos en la web; las vacantes van por el canal de Telegram. Los componentes `Empleos.tsx`, `VacantesLista.tsx` y `src/data/vacantes.ts` siguen en el repo sin usar, para retomarlos cuando se defina esa sección.

## Pendientes antes de publicar

- **Sección de vacantes** (por definir): decidir si vuelve a la web y cómo; mientras tanto no se muestra.
- **Video**: copiar `https://trabajale.ai/reel.mp4` a `public/reel.mp4` y cambiar la constante `REEL` en
  `src/components/Cultura.tsx` a `/reel.mp4` (ahora se carga desde el dominio actual).
- **3D**: el fondo Three.js pesa unos 200 KB extra de JavaScript y solo se carga en escritorio con WebGL;
  en celular y con `prefers-reduced-motion` se muestra la misma escena sin él. Si se quiere quitar,
  basta borrar `<Fondo3DCarga />` de `Hero.tsx`.
- **Aviso de cookies y Pixel de Meta**: `public/consent.js` (igual que en la web anterior), cargado desde `layout.tsx`.
  Los botones llevan `data-evento="Lead" | "Contact"` y un script del layout lo envía al Pixel si la persona aceptó.

## Despliegue

Repositorio propio de la landing (separado del scraper de Reddit/Telegram).

Es un sitio 100 % estático (todas las rutas se prerenderizan). Funciona en Vercel, Cloudflare Pages o
cualquier hosting de Next. Si se quiere exportar a HTML plano, añadir `output: "export"` en `next.config.ts`
y desactivar la optimización de imágenes (`images: { unoptimized: true }`).
