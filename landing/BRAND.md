# Guía de marca de Trabájale (web)

Resumen operativo para que todo lo que se haga sobre la landing salga con el mismo estilo.
Los valores viven como tokens en `src/app/globals.css`; aquí se explica cuándo usar cada uno.

## Quiénes somos

Bolsa de empleo gratuita para Venezuela. Conectamos personas con empresas que necesitan gente.
**Luca** es la cara del equipo: el asistente que escribe por WhatsApp cuando hay una vacante.
No es una mascota publicitaria; es la forma en que hablamos. Aparece como *integrante del equipo*
(tarjeta de equipo, avatar en chats, retrato en "Así somos"), nunca como recorte decorativo suelto.

## Logo

Archivos en `public/marca/`: `isotipo.svg` (círculo azul con check naranja), `logo.svg` (isotipo + "trabajale.ai"
en Outfit 700 con el ".ai" en naranja) y `logo-blanco.svg` para fondos oscuros. Área de respeto: la altura del isotipo
a cada lado. Tamaño mínimo del isotipo: 24 px. No se recolorea, no se gira, no se le añade sombra.

## Color

| Token | Hex | Uso |
|---|---|---|
| `azul` | `#1F4FD8` | Marca, iconos, enlaces, botones secundarios. Todos los iconos de tarjeta van en este azul. |
| `azul-oscuro` | `#163BA8` | Degradados de marca. |
| `azul-vivo` | `#2A62F0` | Luces del hero, degradados. |
| `azul-claro` | `#EEF3FF` | Bandas de sección alternas, fondos de chip. |
| `noche` | `#0B1748` | Fondo de hero y cierre, teléfonos, tarjeta de Luca. |
| `naranja` | `#FF7A29` | **Una sola cosa**: la acción principal (botón "Regístrate gratis", subrayados, líneas de acento, barra de progreso). No se usa para iconos ni fondos grandes. |
| `tinta` | `#14213D` | Texto principal. Fondo de las tarjetas al invertirse. |
| `gris` | `#5A6580` | Texto secundario. |
| `verde` | `#1FA855` | Solo WhatsApp y estado "en línea". |
| `telegram` | `#2AABEE` | Sin uso (Telegram ya no aparece en la web). |

Regla: azul manda, naranja señala, verde y celeste identifican canales. Sin otros colores.

## Tipografía

| Rol | Familia | Dónde |
|---|---|---|
| Titulares | Outfit 600–800 | h1, h2, h3, cifras grandes, "Luca". |
| Texto | Plus Jakarta Sans 400–700 | Párrafos, botones, menú, formularios. |
| Etiquetas | DM Mono 400–500 | Eyebrows en mayúsculas con tracking, numerales de paso, horas, chips de metadatos. |

Tamaños: texto base 16 px / 1.5; h2 de sección 32–42 px; h3 de tarjeta 18–21 px. Siempre `text-wrap: balance` en títulos.

## Tarjetas e interacción

- Base `.tarjeta`: blanco, radio 24 px, borde fino, sombra profunda. Al pasar el cursor aparece un borde degradado azul→naranja.
- `.invertible` (interactivas): el fondo pasa a tinta y el texto a blanco. Garantías, pasos, categorías, valores.
- `.subrayable` (informativas): el título se subraya en naranja y la tarjeta se eleva. Vacantes, seguridad, empresas, preguntas.
- Prohibido: velos o brillos blancos al pasar el cursor, sombras `inset` que parezcan líneas, glassmorphism dentro de escenas 3D.
- Iconos: SVG de trazo 2 px, dentro de un cuadro azul 44–48 px con esquinas 12–16 px. Nunca emojis.

## Movimiento

- Solo `transform` y `opacity`. Duraciones de 150–300 ms, ease-out (`cubic-bezier(.2,.7,.2,1)`).
- Entradas escalonadas de 70 ms entre elementos. Nada de animaciones en acciones de teclado.
- Respetar `prefers-reduced-motion`: se conserva solo el cambio de opacidad; el 3D no se monta.
- El 3D (Three.js) acompaña, no protagoniza: piezas en colores de marca, lejos del texto, que siguen suavemente al cursor.

## Voz

- Cercana y directa, de tú. Frases cortas. Sin letra pequeña.
- Siempre decimos lo que **no** hacemos: no cobramos, no pedimos documentos, no garantizamos empleo.
- Luca habla en primera persona y con honestidad ("Prefiero decirte que todavía no hay nada…").
- Botones con verbo: "Regístrate gratis", "Escribir por WhatsApp", "Preguntar por WhatsApp".

## Componentes

La base es shadcn/ui sobre Radix (`src/components/ui`): aporta foco visible, teclado y ARIA. Encima van las clases de
marca (`.tarjeta`, `.invertible`, `.subrayable`) y el `Boton` con sus variantes. Los tokens de shadcn (`--primary`,
`--accent`, `--muted`, `--border`, `--ring`, `--radius`) están mapeados a la marca en `globals.css`, en claro y oscuro,
así cualquier componente nuevo que se añada con `npx shadcn@latest add` sale ya con el estilo de Trabájale.

## Piezas publicitarias

Mismo sistema que la web: fondo "malla" azul noche con retícula, logo blanco arriba a la izquierda, chip mono en
mayúsculas, titular Outfit con la frase clave en degradado naranja, Luca a la derecha o al centro, botón naranja
con la URL y pie mono con dominio y WhatsApp. Plantillas en `src/app/piezas/[pieza]/page.tsx`.

## Medios y prioridades

1. Formulario de Google (acción principal, siempre naranja).
2. WhatsApp 0422-TRABAJA (+58 422 872 2252): acción secundaria, siempre visible junto a la principal. Es el canal de
   contacto, de vacantes, de empresas y de reporte, y por el que Luca escribe.
La web no publica correo ni Telegram.

## Voz de la empresa en una frase

"Somos un equipo pequeño en Venezuela que conecta personas con empresas. Trabajamos gratis para quien busca empleo,
pedimos solo lo imprescindible y respondemos aunque la respuesta sea 'todavía no'." Todo texto nuevo debe poder
colgarse de esa frase.
