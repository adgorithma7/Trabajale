import { hero } from "./temporada";

/**
 * Opciones que rotan en el carrusel 3D del inicio y del cierre.
 * La primera del inicio sale de `temporada.ts` (es el h1 y lo que indexan los buscadores);
 * el resto son mensajes permanentes del servicio. Sin cifras ni promesas inventadas.
 */
export const opcionesInicio = [
  {
    chip: hero.chip,
    titulo: hero.titular,
    destacado: hero.destacado,
    texto: hero.subtitulo,
  },
  {
    titulo: "Trabajo remoto",
    destacado: "con tu computadora y tu internet",
    texto: "Atención al cliente, ventas y soporte desde cualquier ciudad de Venezuela. Te contamos los requisitos antes de que te postules.",
  },
  {
    titulo: "Empleos presenciales",
    destacado: "cerca de donde vives",
    texto: "Dinos tu ciudad o sector y te avisamos cuando una empresa de la zona necesite gente.",
  },
  {
    titulo: "Gratis y sin documentos,",
    destacado: "te avisamos nosotros",
    texto: "No pedimos cédula, cuentas bancarias ni pagos. Cuando haya una vacante para tu perfil, te escribimos por WhatsApp.",
  },
];

export const opcionesCierre = [
  {
    titulo: "Regístrate hoy y deja que la próxima oportunidad",
    destacado: "te encuentre a ti",
    texto: "Toma unos minutos, no tiene costo y puedes pedir que borremos tus datos cuando quieras.",
  },
  {
    titulo: "¿Conoces a alguien",
    destacado: "que busca trabajo?",
    texto: "Pásale el enlace. Para esa persona también es gratis, y le avisamos igual que a ti.",
  },
  {
    titulo: "Si todavía no hay nada para ti,",
    destacado: "te lo decimos",
    texto: "Preferimos una respuesta honesta a una promesa bonita. Mientras, en el canal de Telegram ves cada vacante nueva.",
  },
];
