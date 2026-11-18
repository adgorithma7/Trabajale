import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { Marca } from "@/components/Logo";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Qué datos recoge Trabájale, para qué los usa, con quién los comparte y cómo puedes pedir que los borre.",
  alternates: { canonical: "/privacidad" },
};

const secciones: { titulo: string; contenido: React.ReactNode }[] = [
  {
    titulo: "Quién es responsable de tus datos.",
    contenido: (
      <>
        Trabájale, a través del sitio {site.dominio}. Para cualquier asunto sobre tus datos
        escríbenos por WhatsApp al {site.whatsappTexto} ({site.whatsappNumero}).
      </>
    ),
  },
  {
    titulo: "Qué datos recogemos.",
    contenido:
      "Solo los que escribes en el formulario de registro: nombre y apellido, edad, número de WhatsApp, ciudad o sector, vacante y puesto que te interesan, disponibilidad, equipo e internet con que cuentas, y un resumen corto de tu experiencia. No pedimos cédula, cuentas bancarias, contraseñas, fotos ni documentos. Si alguien te los pide en nombre de Trabájale, no somos nosotros.",
  },
  {
    titulo: "Para qué los usamos.",
    contenido:
      "Para contactarte cuando haya una oportunidad de empleo que encaje con tu perfil, y para contar cuántas personas se registran y de dónde vienen. No usamos tus datos para otra cosa, no te enviamos publicidad y no los vendemos.",
  },
  {
    titulo: "Con qué base los tratamos.",
    contenido:
      "Con tu consentimiento, que das al marcar la casilla de confirmación al final del formulario. Puedes retirarlo cuando quieras pidiendo que borremos tus datos.",
  },
  {
    titulo: "Registrarte es gratis y no garantiza un empleo.",
    contenido:
      "Trabájale no cobra a quienes se registran. Registrarte no asegura que vayas a recibir una oferta: te contactamos solo si surge una oportunidad para tu perfil. Trabájale no es el empleador; las condiciones de cada puesto las fija la empresa que ofrece la oportunidad.",
  },
  {
    titulo: "Dónde se guardan.",
    contenido:
      "El formulario es de Google Forms y las respuestas se guardan en una hoja de cálculo de Google que pertenece a Trabájale, con acceso restringido a las personas del equipo que gestionan los contactos y protegido con verificación en dos pasos. La web está alojada en Cloudflare. Estos proveedores guardan la información en servidores fuera de Venezuela, bajo sus propias medidas de seguridad y cifrado.",
  },
  {
    titulo: "Con quién se comparten.",
    contenido:
      "Con nadie fuera de Trabájale, con una sola excepción: la empresa que ofrezca una oportunidad concreta, y únicamente después de que tú nos digas que te interesa. Nunca entregamos tu perfil a una empresa sin hablar contigo primero. Nuestros proveedores (Google, Cloudflare, Meta, Telegram y WhatsApp) procesan datos técnicos para prestar su servicio, según sus propias políticas.",
  },
  {
    titulo: "Cómo te contactamos.",
    contenido:
      "Por WhatsApp, únicamente para hablar de oportunidades o de tu registro. Las conversaciones por WhatsApp están cifradas de extremo a extremo; WhatsApp, que pertenece a Meta, trata los datos de la conexión según su política de privacidad. Seguir nuestro canal de Telegram es voluntario y no requiere registrarte.",
  },
  {
    titulo: "Cookies y medición en la web.",
    contenido: (
      <>
        Cloudflare Web Analytics cuenta las visitas sin cookies y sin identificarte; funciona
        siempre. Además usamos el Pixel de Meta (Facebook e Instagram) para saber si nuestros
        anuncios funcionan. El Pixel guarda una cookie en tu navegador y envía a Meta tu dirección
        IP, datos de tu navegador y las páginas que visitas; no recibe nada de lo que escribes en
        el formulario. <strong>El Pixel solo se activa si lo aceptas en el aviso de cookies.</strong>{" "}
        Si lo rechazas, la web funciona exactamente igual. Puedes cambiar de opinión borrando las
        cookies del navegador, y puedes limitar los anuncios personalizados desde la configuración
        de tu cuenta de Facebook o Instagram, en &quot;Tu actividad fuera de Meta&quot;. Más
        información en la{" "}
        <a
          href="https://www.facebook.com/privacy/policies/cookies/"
          rel="noopener"
          target="_blank"
          className="font-bold text-azul hover:underline"
        >
          política de cookies de Meta
        </a>
        .
      </>
    ),
  },
  {
    titulo: "Cuánto tiempo los guardamos.",
    contenido:
      "Como máximo 24 meses desde tu registro o desde el último contacto contigo, lo que ocurra después. Pasado ese plazo los borramos de la hoja de cálculo. Si quieres que los borremos antes, pídelo y lo hacemos.",
  },
  {
    titulo: "Tus derechos.",
    contenido: (
      <>
        Puedes pedirnos, en cualquier momento y sin costo: saber qué datos tenemos tuyos,
        corregirlos, borrarlos, u oponerte a que los usemos. Escríbenos por WhatsApp al {site.whatsappTexto}
        indicando tu nombre y el número con que te registraste. Respondemos en un máximo de 15 días
        hábiles. Este derecho está reconocido en los artículos 28 y 60 de la Constitución, y si no
        respondiéramos puedes acudir a los tribunales mediante habeas data.
      </>
    ),
  },
  {
    titulo: "Seguridad.",
    contenido:
      "Limitamos quién puede ver los datos, usamos verificación en dos pasos en las cuentas que los guardan y no los descargamos a dispositivos personales. Ningún sistema es infalible; si ocurriera un acceso indebido, te avisaríamos.",
  },
  {
    titulo: "Mayores de 18 años.",
    contenido:
      "El registro es solo para personas mayores de 18 años. Si detectamos un registro de un menor, lo borramos.",
  },
  {
    titulo: "Tus datos deben ser tuyos.",
    contenido:
      "Al registrarte confirmas que los datos son ciertos y te pertenecen. No registres a otra persona sin su permiso.",
  },
  {
    titulo: "Cambios.",
    contenido: `Si esta política cambia, actualizamos la fecha de arriba. La versión vigente es siempre la publicada en ${site.dominio}/privacidad.`,
  },
];

export default function Privacidad() {
  return (
    <>
      <header className="border-b border-gris-claro bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Marca />
          <Link href="/" className="font-extrabold text-azul hover:underline">
            Volver al inicio
          </Link>
        </div>
      </header>
      <main className="flex-1 bg-white">
        <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 md:py-16">
          <h1 className="text-3xl font-black leading-tight text-azul md:text-4xl">
            Política de privacidad de Trabájale
          </h1>
          <p className="mt-3 text-gris">Última actualización: {site.privacidadActualizada}.</p>
          <div className="mt-10 flex flex-col gap-8">
            {secciones.map((s, i) => (
              <section key={s.titulo}>
                <h2 className="text-xl font-black text-tinta">
                  {i + 1}. {s.titulo}
                </h2>
                <p className="mt-2 leading-relaxed text-tinta/85">{s.contenido}</p>
              </section>
            ))}
          </div>
          <Link
            href="/"
            className="mt-12 inline-flex min-h-12 items-center rounded-boton bg-azul px-6 font-extrabold text-white hover:bg-azul-oscuro"
          >
            Volver al inicio
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
