/**
 * Versión de temporada (diciembre). Entra por el mensaje y el momento, nunca por la paleta:
 * ni rojo y verde, ni cuenta regresiva, ni "últimos cupos", ni testimonios o cifras inventadas.
 *
 * Para apagarla: `activa: false` y redesplegar. Caduca sola: la prueba `tests/landing.spec.ts`
 * falla si sigue activa después de `hasta`, para que no quede una web con adornos en febrero.
 */
export const temporada = {
  activa: true,
  /** Último día en que debe mostrarse (primera semana de enero). */
  hasta: "2027-01-07",
  banner: {
    etiqueta: "Diciembre",
    texto: "Las empresas están sumando personal para la temporada. Pregúntanos por WhatsApp qué vacantes hay abiertas.",
    enlaceTexto: "Preguntar por WhatsApp",
    version: "2026-12-temporada-whatsapp",
  },
  hero: {
    chip: "Bolsa de empleo gratuita para Venezuela",
    titular: "Empleos remotos o presenciales,",
    destacado: "para empezar en diciembre",
    subtitulo:
      "Regístrate gratis, cuéntanos qué sabes hacer y te avisamos cuando haya una oportunidad en Venezuela que encaje contigo.",
  },
} as const;

/** Textos permanentes, fuera de temporada. */
export const textosBase = {
  banner: {
    etiqueta: "Esta semana",
    texto: "Vacantes nuevas de atención al cliente y ventas, remotas desde toda Venezuela. Pregúntalas por WhatsApp.",
    enlaceTexto: "Preguntar por WhatsApp",
    version: "2026-11-18-whatsapp",
  },
  hero: {
    chip: "Bolsa de empleo gratuita para Venezuela",
    titular: "Empleos remotos o presenciales,",
    destacado: "pensados para ti",
    subtitulo:
      "Regístrate gratis, cuéntanos qué sabes hacer y te avisamos cuando haya una oportunidad en Venezuela que encaje contigo.",
  },
} as const;

/** Fecha de caducidad como objeto Date (fin del día). */
export function fechaCaducidad() {
  return new Date(`${temporada.hasta}T23:59:59`);
}

export const hero = temporada.activa ? temporada.hero : textosBase.hero;
export const bannerActual = temporada.activa ? temporada.banner : textosBase.banner;
