import { site } from "@/config/site";

export const preguntas = [
  {
    p: "¿Registrarme tiene algún costo?",
    r: "No. Registrarte es gratis y siempre lo será. Trabájale no cobra a quienes se registran, ni al inicio ni cuando consigues empleo. Si alguien te pide dinero en nombre de Trabájale, no somos nosotros.",
  },
  {
    p: "¿Me garantizan un empleo?",
    r: "No podemos prometerlo. Te contactamos solo cuando surge una oportunidad que encaja con tu perfil. Trabájale no es el empleador: las condiciones de cada puesto las fija la empresa que ofrece la oportunidad.",
  },
  {
    p: "¿Qué datos me piden?",
    r: "Solo lo que escribes en el formulario: nombre y apellido, edad, un número de contacto, ciudad o sector, el puesto que te interesa, tu disponibilidad, el equipo e internet con que cuentas y un resumen corto de tu experiencia. No pedimos cédula, cuentas bancarias, contraseñas, fotos ni documentos.",
  },
  {
    p: "¿Hay empleos remotos y presenciales?",
    r: "Sí. Publicamos oportunidades remotas, que puedes hacer desde casa con computadora e internet, y presenciales en distintas ciudades de Venezuela. En el formulario nos dices cuál prefieres.",
  },
  {
    p: "¿Cómo me van a contactar?",
    r: `Por WhatsApp, desde el ${site.whatsappTexto} (${site.whatsappNumero}), únicamente para hablar de oportunidades o de tu registro. Para enterarte de las vacantes nuevas, sigue nuestro canal de Telegram (${site.telegramUsuario}): ahí las publicamos y puedes revisarlas cuando quieras.`,
  },
  {
    p: "¿Dónde quedan guardados mis datos?",
    r: "Las respuestas del formulario se guardan en una hoja de cálculo de Google que pertenece a Trabájale, con acceso restringido al equipo y verificación en dos pasos. Los conservamos como máximo 24 meses y los borramos antes si tú lo pides.",
  },
  {
    p: "¿Comparten mi perfil con empresas?",
    r: "Solo con la empresa que ofrezca una oportunidad concreta, y únicamente después de que tú nos digas que te interesa. Nunca entregamos tu perfil sin hablar contigo primero.",
  },
  {
    p: "¿Puedo registrarme si soy menor de 18?",
    r: "No. El registro es solo para personas mayores de 18 años. Si detectamos un registro de un menor, lo borramos.",
  },
  {
    p: "¿Cómo sé que Trabájale no es una estafa?",
    r: `Tres señales: nunca pedimos dinero, nunca pedimos documentos ni cuentas bancarias, y siempre escribimos desde el WhatsApp ${site.whatsappTexto} (${site.whatsappNumero}); el canal de Telegram ${site.telegramUsuario} solo publica, nunca te escribe por privado. Si te escriben desde otro lado pidiendo algo de eso, no somos nosotros.`,
  },
];
