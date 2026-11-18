/**
 * Un solo lugar para todos los enlaces y datos de contacto de Trabájale.
 * Si cambia el formulario, el WhatsApp o el canal, se edita aquí y nada más.
 */
import { bannerActual } from "./temporada";

export const site = {
  nombre: "Trabájale",
  dominio: "trabajale.ai",
  url: "https://trabajale.ai",
  descripcion:
    "Regístrate gratis en Trabájale y te avisamos cuando haya una oportunidad de empleo remoto o presencial en Venezuela.",

  // Medios principales: el formulario de registro y el WhatsApp 0422-TRABAJA
  formulario:
    "https://docs.google.com/forms/d/e/1FAIpQLSeK_wIgj7PKlMWoMtL0XYpKYIUwqagMbIjv99GzLxpFBvQHJg/viewform",
  whatsappVacantes:
    "https://wa.me/584228722252?text=Hola%2C%20quiero%20saber%20qu%C3%A9%20vacantes%20hay%20disponibles",
  // Para mantenerse informado: canal de Telegram (solo publica; no escribimos por privado desde Telegram)
  telegram: "https://t.me/trabajale",
  telegramUsuario: "@trabajale",

  whatsapp:
    "https://wa.me/584228722252?text=Hola%2C%20quiero%20registrarme%20en%20Trab%C3%A1jale",
  whatsappEmpresas:
    "https://wa.me/584228722252?text=Hola%2C%20tengo%20una%20vacante%20y%20quiero%20publicarla%20en%20Trab%C3%A1jale",
  whatsappTexto: "0422-TRABAJA",
  whatsappNumero: "+58 422 872 2252",

  privacidadActualizada: "5 de noviembre de 2026",
} as const;

/**
 * Banner superior. Pon `activo: false` para ocultarlo. Los textos viven en `temporada.ts`:
 * en temporada usa los de diciembre; fuera de ella, los permanentes. La `version` hace que
 * vuelva a mostrarse a quien ya lo había cerrado.
 */
export const banner = {
  activo: true,
  ...bannerActual,
  enlace: site.telegram,
} as const;

/** `secundario: true`: el enlace no va en el menú de escritorio (sí en el menú móvil y en el footer). */
export const nav = [
  { href: "#garantias", label: "Compromiso", secundario: true },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#whatsapp", label: "Contacto" },
  { href: "#cultura", label: "Cultura" },
  { href: "#seguridad", label: "Seguridad", secundario: true },
  { href: "#empresas", label: "Empresas" },
  { href: "#preguntas", label: "Preguntas" },
] as const;
