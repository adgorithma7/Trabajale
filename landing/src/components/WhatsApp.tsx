import Image from "next/image";
import { site } from "@/config/site";
import { Boton } from "./Boton";
import { Tilt } from "./Tilt";
import { GiroScroll } from "./GiroScroll";
import { IconoCheck, IconoTelegram, IconoWhatsApp } from "./Iconos";

const ventajas = [
  "Te contamos las vacantes abiertas que encajan contigo",
  "Avisos cuando una convocatoria cierra o cambia",
  "Consejos cortos del equipo para entrevistas y pruebas",
  "Te responde una persona del equipo, no un robot",
];

export function WhatsApp() {
  return (
    <section id="whatsapp" className="malla-hero reticula relative overflow-hidden text-white">
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-2 font-mono text-[12px] uppercase tracking-[0.18em] text-white/70">
            WhatsApp de Trabájale
          </p>
          <h2 className="font-display text-[2rem] font-bold leading-[1.1] md:text-[2.6rem]">
            Pregunta por las vacantes al{" "}
            <span className="text-[#25d366]">{site.whatsappTexto}</span>
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Escribir es gratis y no hace falta registrarte para preguntar. Es la forma más rápida
            de enterarte de una oportunidad y resolver tus dudas.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {ventajas.map((v) => (
              <li key={v} className="flex items-start gap-3 font-semibold">
                <span className="relieve mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-naranja">
                  <IconoCheck size={14} className="text-white" />
                </span>
                {v}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Boton href={site.whatsappVacantes} variante="blanco" evento="Contact">
              <IconoWhatsApp className="text-verde" />
              Escribir por WhatsApp
            </Boton>
            <Boton href={site.formulario} evento="Lead">
              Regístrate gratis
            </Boton>
          </div>
          <a
            href={site.telegram}
            target="_blank"
            rel="noopener"
            className="mt-6 flex max-w-xl items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-4 py-3 transition-colors hover:bg-white hover:text-tinta"
          >
            <IconoTelegram size={28} className="flex-none text-telegram" />
            <span className="text-[15px] leading-snug">
              <span className="font-bold">Para mantenerte informado, sigue el canal {site.telegramUsuario} en Telegram.</span>{" "}
              Ahí publicamos cada vacante nueva y los avisos de cierre. Es gratis y puedes salir cuando quieras.
            </span>
          </a>
        </div>

        {/* Teléfono en perspectiva con una conversación de ejemplo */}
        <GiroScroll>
          <div className="mx-auto w-full max-w-[340px] md:ml-auto">
            <Tilt className="rounded-[36px] bg-noche p-2.5 shadow-flotante ring-1 ring-white/20" max={6}>
              <div className="overflow-hidden rounded-[28px] bg-white text-tinta">
                <div className="flex items-center gap-3 bg-azul-claro px-4 py-3">
                  <span className="relative h-10 w-10 flex-none overflow-hidden rounded-full bg-azul">
                    <Image
                      src="/luca.webp"
                      alt=""
                      width={64}
                      height={111}
                      className="absolute left-1/2 top-1 h-[140%] w-auto -translate-x-1/2 object-cover object-top"
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-bold">Luca · Trabájale</p>
                    <p className="font-mono text-[10px] text-gris">whatsapp · {site.whatsappTexto}</p>
                  </div>
                  <IconoWhatsApp className="ml-auto text-verde" />
                </div>
                <div className="flex flex-col gap-2.5 px-3 py-4">
                  <div className="max-w-[94%] rounded-2xl rounded-tl-md bg-azul-claro px-3.5 py-2.5 text-[14px] leading-snug">
                    <p className="font-bold text-azul">Nueva vacante: Atención al cliente por chat</p>
                    <p className="mt-1">
                      Remoto · Tiempo completo · Turnos rotativos. Pedimos computadora, internet
                      estable y buena redacción.
                    </p>
                    <p className="mt-1.5 font-bold text-azul">
                      Regístrate en el formulario y escribe &quot;chat&quot; en el puesto que te interesa.
                    </p>
                    <p className="mt-1 text-right font-mono text-[10px] text-gris">9:40 a. m.</p>
                  </div>
                  <div className="max-w-[94%] rounded-2xl rounded-tl-md bg-azul-claro px-3.5 py-2.5 text-[14px] leading-snug">
                    <p>
                      Recordatorio: Trabájale nunca pide dinero ni documentos. Si alguien te los pide
                      en nuestro nombre, no somos nosotros.
                    </p>
                    <p className="mt-1 text-right font-mono text-[10px] text-gris">9:42 a. m.</p>
                  </div>
                  <p className="mt-1 text-center text-[11px] font-semibold text-gris">
                    Ejemplo de cómo se ven los mensajes
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
        </GiroScroll>
      </div>
    </section>
  );
}
