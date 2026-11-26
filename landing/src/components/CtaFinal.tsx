import Image from "next/image";
import { site } from "@/config/site";
import { Boton } from "./Boton";
import { Revelar } from "./Revelar";
import { Compartir } from "./Compartir";
import { Fondo3DCarga } from "./Fondo3DCarga";
import { Carrusel3D } from "./Carrusel3D";
import { Magnetico } from "./Magnetico";
import { opcionesCierre } from "@/config/mensajes";
import { IconoTelegram, IconoWhatsApp } from "./Iconos";

export function CtaFinal() {
  return (
    <section className="malla-hero reticula relative overflow-hidden text-white">
      <Fondo3DCarga variante="cierre" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Revelar>
          <div className="grid items-end gap-8 overflow-hidden rounded-[30px] border border-white/15 bg-noche/70 p-7 shadow-vidrio md:grid-cols-[1.4fr_1fr] md:p-10">
            <div>
              <Carrusel3D
                etiqueta="Por qué registrarte"
                nivel="h2"
                duracion={7000}
                claseTitulo="max-w-2xl text-[2rem] md:text-[2.6rem]"
                diapositivas={opcionesCierre}
              />
              <div className="mt-8 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
                <Magnetico>
                  <Boton href={site.formulario} evento="Lead" className="w-full sm:min-w-52">
                    Regístrate gratis
                  </Boton>
                </Magnetico>
                <Boton href={site.whatsappVacantes} variante="blanco" evento="Contact" className="sm:min-w-52">
                  <IconoWhatsApp className="text-verde" />
                  Escribir al {site.whatsappTexto}
                </Boton>
                <Boton href={site.telegram} variante="azul-borde" className="sm:min-w-52">
                  <IconoTelegram className="text-[#7cd0ff]" />
                  Seguir el canal {site.telegramUsuario}
                </Boton>
              </div>
              <p className="mt-6 text-sm text-white/70">Mayores de 18 años. Trabájale no cobra a quienes se registran.</p>
              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">Compartir con quien busca trabajo</p>
                <Compartir claro />
              </div>
            </div>

            <div className="relative hidden h-full min-h-[260px] md:block">
              <div className="absolute inset-x-6 bottom-0 top-8 rounded-t-[120px] bg-gradient-to-b from-white/15 to-transparent" aria-hidden="true" />
              <Image
                src="/luca.webp"
                alt="Luca, del equipo de Trabájale"
                width={514}
                height={895}
                sizes="260px"
                className="absolute bottom-[-10%] left-1/2 h-[115%] w-auto -translate-x-1/2 object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,.45)]"
              />
              <p className="absolute left-0 top-0 max-w-[180px] rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-[14px] font-bold leading-snug text-tinta shadow-flotante">
                Cuando haya algo para ti, te escribo yo.
              </p>
            </div>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
