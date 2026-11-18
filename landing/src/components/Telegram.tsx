import Image from "next/image";
import { site } from "@/config/site";
import { Boton } from "./Boton";
import { Tilt } from "./Tilt";
import { Revelar } from "./Revelar";
import { IconoCheck, IconoTelegram } from "./Iconos";

const ventajas = [
  "Cada vacante nueva, el mismo día que la abrimos",
  "Avisos cuando una convocatoria cierra o cambia",
  "Consejos cortos del equipo para entrevistas y pruebas",
  "Sin ruido: solo publicamos cuando hay algo que contar",
];

export function Telegram() {
  return (
    <section id="telegram" className="malla-hero reticula relative overflow-hidden text-white">
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-2 font-mono text-[12px] uppercase tracking-[0.18em] text-white/70">
            Canal de Telegram
          </p>
          <h2 className="font-display text-[2rem] font-bold leading-[1.1] md:text-[2.6rem]">
            Las vacantes se publican primero en{" "}
            <span className="text-[#7cd0ff]">{site.telegramUsuario}</span>
          </h2>
          <p className="mt-4 text-lg text-white/85">
            El canal es gratis, no hace falta registrarte para seguirlo y puedes salir cuando
            quieras. Es la forma más rápida de enterarte de una oportunidad.
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
            <Boton href={site.telegram} variante="blanco" evento="Canal">
              <IconoTelegram className="text-telegram" />
              Unirme al canal
            </Boton>
            <Boton href={site.formulario} evento="Lead">
              Regístrate gratis
            </Boton>
          </div>
        </div>

        {/* Teléfono en perspectiva con una publicación de ejemplo */}
        <Revelar className="perspectiva">
          <div className="mx-auto w-full max-w-[340px] [transform:rotateY(-14deg)_rotateX(4deg)] md:ml-auto">
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
                    <p className="truncate font-bold">Trabájale</p>
                    <p className="font-mono text-[10px] text-gris">canal · {site.telegramUsuario}</p>
                  </div>
                  <IconoTelegram className="ml-auto text-telegram" />
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
                    Ejemplo de cómo se ven las publicaciones
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
