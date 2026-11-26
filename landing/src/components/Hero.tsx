"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, type Variants } from "motion/react";
import { site } from "@/config/site";
import { hero as textosHero } from "@/config/temporada";
import { Boton } from "./Boton";
import { Escena } from "./Escena";
import { Fondo3DCarga } from "./Fondo3DCarga";
import { Magnetico } from "./Magnetico";
import { Carrusel3D } from "./Carrusel3D";
import { opcionesInicio } from "@/config/mensajes";
import { IconoCampana, IconoCheck, IconoEscudo, IconoSinDinero, IconoWhatsApp } from "./Iconos";

interface Props {
  chip?: string;
  titular?: string;
  destacado?: string;
  subtitulo?: string;
}

/** Hero de la portada. Sin props usa los textos de temporada (o los permanentes si no hay temporada). */
export function Hero({
  chip = textosHero.chip,
  titular = textosHero.titular,
  destacado = textosHero.destacado,
  subtitulo = textosHero.subtitulo,
}: Props = {}) {
  // Parallax con el scroll: al bajar, el texto sube más rápido y la tarjeta de Luca se inclina y se aleja.
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  const textoY = useTransform(p, [0, 1], [0, -90]);
  const textoOpacidad = useTransform(p, [0, 0.8], [1, 0.2]);
  const escenaY = useTransform(p, [0, 1], [0, 60]);
  const escenaGiroX = useTransform(p, [0, 1], [0, 18]);
  const escenaGiroY = useTransform(p, [0, 1], [0, -12]);
  const escenaEscala = useTransform(p, [0, 1], [1, 0.9]);

  // Entrada: textos escalonados y el titular palabra por palabra con un leve giro 3D.
  // Variantes fijas (mismo HTML en servidor y navegador); MotionConfig reduce el movimiento si hace falta.
  const contenedor: Variants = {
    oculto: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item: Variants = {
    oculto: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 170, damping: 22 } },
  };
  const escena: Variants = {
    oculto: { opacity: 0, scale: 0.9, rotateY: -18, rotateX: 8 },
    visible: { opacity: 1, scale: 1, rotateY: 0, rotateX: 0, transition: { type: "spring", stiffness: 90, damping: 16, delay: 0.25 } },
  };

  return (
    <div ref={ref} className="malla-hero reticula relative overflow-hidden text-white">
      <Fondo3DCarga />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Texto */}
        <motion.div className="relative z-10" variants={contenedor} initial="oculto" animate="visible" style={{ y: textoY, opacity: textoOpacidad }}>
          <motion.div variants={item}>
            <Carrusel3D
              etiqueta="Lo que ofrece Trabájale"
              nivel="h1"
              claseTitulo="text-[2.4rem] sm:text-5xl lg:text-[3.6rem]"
              diapositivas={[{ chip, titulo: titular, destacado, texto: subtitulo }, ...opcionesInicio.slice(1)]}
            />
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Magnetico>
              <Boton href={site.formulario} evento="Lead" className="w-full sm:min-w-56">
                Regístrate gratis
              </Boton>
            </Magnetico>
            <Boton href={site.whatsappVacantes} variante="vidrio" evento="Contact" className="sm:min-w-56">
              <IconoWhatsApp className="text-[#25d366]" />
              Escríbenos por WhatsApp
            </Boton>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-8 flex flex-col gap-2 text-[15px] font-medium text-white/80 sm:flex-row sm:flex-wrap sm:gap-x-6"
          >
            {["Gratis, siempre", "Sin documentos", "Te avisamos por WhatsApp"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <IconoCheck size={16} className="text-naranja" />
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Escena 3D: la tarjeta de equipo de Luca con chips flotantes */}
        <motion.div
          style={{ y: escenaY, rotateX: escenaGiroX, rotateY: escenaGiroY, scale: escenaEscala, transformPerspective: 1200 }}
          className="relative mx-auto w-full max-w-[460px] lg:max-w-none"
        >
        <motion.div
          variants={escena}
          initial="oculto"
          animate="visible"
          style={{ transformPerspective: 1200 }}
          className="perspectiva relative w-full"
        >
          <Escena className="relative aspect-[4/5] w-full sm:aspect-[4/4.5]">
            <div
              className="capa-fondo absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-azul-vivo/40 blur-3xl"
              aria-hidden="true"
            />

            {/* Tarjeta de Luca: la foto ocupa el espacio que sobra y el texto nunca se corta */}
            <article className="capa-1 absolute inset-x-[13%] bottom-[3%] top-[5%] flex flex-col overflow-hidden rounded-[28px] border border-white/15 bg-[#0e1d5a] shadow-vidrio">
              <div className="relative min-h-0 flex-1 overflow-hidden bg-gradient-to-b from-azul-vivo to-azul">
                <div
                  className="absolute inset-0 opacity-50"
                  style={{ backgroundImage: "radial-gradient(circle at 70% 30%, rgb(255 255 255 / .35), transparent 50%)" }}
                  aria-hidden="true"
                />
                <Image
                  src="/luca.webp"
                  alt="Luca, el asistente del equipo de Trabájale"
                  width={514}
                  height={895}
                  priority
                  sizes="(min-width: 768px) 420px, 80vw"
                  className="absolute left-1/2 top-[6%] h-[130%] w-auto max-w-none -translate-x-1/2 object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0e1d5a] to-transparent" aria-hidden="true" />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-noche/80 px-3 py-1 font-mono text-[11px]">
                  <span className="animate-pulso h-2 w-2 rounded-full bg-verde" aria-hidden="true" />
                  En línea
                </span>
              </div>

              <div className="flex flex-none flex-col gap-3 bg-[#0e1d5a] p-4 sm:p-5">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">Equipo Trabájale</p>
                  <p className="mt-1 font-display text-2xl font-bold leading-none">Luca</p>
                  <p className="mt-1 text-sm font-medium text-white/80">Te escribe cuando hay algo para ti</p>
                </div>
                <div className="rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-[13px] font-bold leading-snug text-tinta sm:text-[14px]">
                  Hola, soy Luca. Cuando aparezca una vacante para tu perfil, te aviso yo.
                </div>
              </div>
            </article>

            {/* Tarjetas flotantes: dentro de la escena, en una sola línea y sin tapar la etiqueta "En línea" */}
            <div className="capa-2 absolute left-0 top-[9%] hidden lg:block">
              <div className="animate-flotar" style={{ animationDelay: "-5s" }}>
                <Chip icono={<IconoEscudo size={18} />} titulo="Tus datos" texto="Solo lo que tú escribes" />
              </div>
            </div>
            <div className="capa-3 absolute right-0 top-[27%]">
              <div className="animate-flotar-lento" style={{ animationDelay: "-3s" }}>
                <Chip icono={<IconoSinDinero size={18} />} titulo="Sin costo" texto="Hoy, mañana y siempre" />
              </div>
            </div>
            <div className="capa-2 absolute left-0 top-[44%]">
              <div className="animate-flotar">
                <Chip icono={<IconoCampana size={18} />} titulo="Nueva vacante" texto="Atención al cliente · Remoto" />
              </div>
            </div>
          </Escena>
        </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/10 to-transparent" aria-hidden="true" />
    </div>
  );
}

function Chip({ icono, titulo, texto }: { icono: React.ReactNode; titulo: string; texto: string }) {
  return (
    <div className="flex w-max max-w-none items-center gap-2.5 rounded-2xl border border-white bg-white py-2 pl-2 pr-3.5 text-tinta shadow-flotante md:gap-3 md:py-2.5 md:pl-2.5 md:pr-4">
      <span className="relieve grid h-8 w-8 flex-none place-items-center rounded-xl bg-azul text-white md:h-9 md:w-9">{icono}</span>
      <span className="min-w-0 whitespace-nowrap">
        <span className="block text-[12px] font-bold leading-tight md:text-[13px]">{titulo}</span>
        <span className="block text-[11px] font-medium text-gris md:text-xs">{texto}</span>
      </span>
    </div>
  );
}
