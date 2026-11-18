import Link from "next/link";
import { site } from "@/config/site";
import { Seccion, Titulo } from "./Seccion";
import { IconoCandado, IconoEscudo, IconoReloj, IconoSinDinero } from "./Iconos";

const compromisos = [
  {
    icono: IconoSinDinero,
    titulo: "Nunca pedimos dinero",
    texto: "Ni para registrarte, ni para reservar un puesto, ni cuando consigues empleo. Las empresas cubren nuestro servicio.",
  },
  {
    icono: IconoEscudo,
    titulo: "Solo los datos necesarios",
    texto: "No pedimos cédula, cuentas bancarias, contraseñas, fotos ni documentos. Nada más que lo que escribes en el formulario.",
  },
  {
    icono: IconoCandado,
    titulo: "Tu perfil no se comparte sin permiso",
    texto: "Lo ve solo el equipo de Trabájale. Se lo pasamos a una empresa únicamente después de que tú nos digas que esa oportunidad te interesa.",
  },
  {
    icono: IconoReloj,
    titulo: "Lo borramos cuando quieras",
    texto: "Guardamos tus datos como máximo 24 meses. Puedes pedir que los corrijamos o los borremos antes, sin costo, y respondemos en 15 días hábiles.",
  },
];

export function Seguridad() {
  return (
    <Seccion id="seguridad" fondo="azul-claro">
      <Titulo
        eyebrow="Tus datos, protegidos"
        descripcion="Sabemos que en internet abundan las ofertas falsas. Por eso te decimos con claridad qué hacemos y qué no hacemos con tu información."
      >
        Puedes confiar, y te damos razones para hacerlo
      </Titulo>

      <ul className="grid gap-4 sm:grid-cols-2">
        {compromisos.map(({ icono: Icono, titulo, texto }, i) => (
          <li key={titulo} className="tarjeta subrayable flex gap-4 overflow-hidden p-5 sm:p-6">
            <span className="marca-agua" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <span className="relieve relative grid h-12 w-12 flex-none place-items-center rounded-2xl bg-azul text-white">
              <Icono size={24} />
            </span>
            <div className="relative min-w-0">
              <h3 className="sub-titulo font-display text-[19px] font-bold leading-snug text-tinta">{titulo}</h3>
              <p className="mt-1.5 text-gris">{texto}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="tarjeta mt-8 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <p className="text-tinta">
          <span className="font-bold">Canal oficial:</span> el WhatsApp {site.whatsappTexto} ({site.whatsappNumero}).
          Si alguien te escribe desde otro lado en nombre de Trabájale, no somos nosotros.
        </p>
        <Link href="/privacidad" className="flex-none font-bold text-azul decoration-naranja decoration-2 underline-offset-4 hover:underline">
          Leer la política de privacidad
        </Link>
      </div>
    </Seccion>
  );
}
