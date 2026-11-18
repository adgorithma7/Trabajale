"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { site } from "@/config/site";
import { hero as textosHero } from "@/config/temporada";
import { Boton } from "./Boton";
import { Escena } from "./Escena";
import { Fondo3DCarga } from "./Fondo3DCarga";
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
  const reducido = useReducedMotion();

  // Entrada escalonada del texto: solo opacity y transform, rápida y con ease-out
  const contenedor: Variants = {
    oculto: {},
    visible: { transition: { staggerChildren: reducido ? 0 : 0.07, delayChildren: 0.05 } },
  };
  const item: Variants = {
    oculto: reducido ? { opacity: 0 } : { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.2, 0.7, 0.2, 1] } },
  };
  const escena: Variants = {
    oculto: reducido ? { opacity: 0 } : { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.2, 0.7, 0.2, 1], delay: 0.15 } },
  };

  return (
    <div className="malla-hero reticula relative overflow-hidden text-white">
      <Fondo3DCarga />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 md:grid-cols-[1.05fr_1fr] md:pb-20 md:pt-20 lg:gap-16">
        {/* Texto */}
        <motion.div className="relative z-10" variants={contenedor} initial="oculto" animate="visible">
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.12em]"
          >
            <span className="h-2 w-2 rounded-full bg-naranja shadow-[0_0_12px_#ff7a29]" aria-hidden="true" />
            {chip}
          </motion.p>
          <motion.h1 variants={item} className="text-[2.4rem] font-bold leading-[1.02] sm:text-5xl lg:text-[3.9rem]">
            {titular}{" "}
            <span className="bg-gradient-to-r from-[#ffb074] via-naranja to-[#ff9a4d] bg-clip-text text-transparent">
              {destacado}
            </span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-[36ch] text-lg font-medium text-white/85 sm:text-xl">
            {subtitulo}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Boton href={site.formulario} evento="Lead" className="sm:min-w-56">
              Regístrate gratis
            </Boton>
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
          variants={escena}
          initial="oculto"
          animate="visible"
          className="perspectiva relative mx-auto w-full max-w-[460px] md:max-w-none"
        >
          <Escena className="relative aspect-[4/5.2] w-full sm:aspect-[4/4.4]">
            <div
              className="capa-fondo absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-azul-vivo/40 blur-3xl"
              aria-hidden="true"
            />

            <article className="capa-1 absolute inset-x-[10%] top-[4%] bottom-[6%] overflow-hidden rounded-[28px] border border-white/15 bg-[#0e1d5a] shadow-vidrio sm:inset-x-[12%]">
              <div className="relative h-[58%] overflow-hidden bg-gradient-to-b from-azul-vivo to-azul sm:h-[60%]">
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
                  className="absolute bottom-0 left-1/2 h-[112%] w-auto -translate-x-1/2 object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-noche/90 to-transparent" aria-hidden="true" />
                <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-noche/80 px-3 py-1 font-mono text-[11px]">
                  <span className="animate-pulso h-2 w-2 rounded-full bg-verde" aria-hidden="true" />
                  En línea
                </span>
              </div>

              <div className="flex h-[42%] flex-col justify-between gap-3 bg-[#0e1d5a] p-4 sm:h-[40%] sm:p-5">
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

            <div className="capa-3 absolute -left-1 top-[40%] origin-left scale-90 sm:left-0 sm:scale-100">
              <div className="animate-flotar">
                <Chip icono={<IconoCampana size={18} />} titulo="Nueva vacante" texto="Atención al cliente · Remoto" />
              </div>
            </div>
            <div className="capa-2 absolute -right-1 top-[24%] origin-right scale-90 sm:right-0 sm:scale-100">
              <div className="animate-flotar-lento" style={{ animationDelay: "-3s" }}>
                <Chip icono={<IconoSinDinero size={18} />} titulo="Sin costo" texto="Hoy, mañana y siempre" />
              </div>
            </div>
            <div className="capa-2 absolute left-0 top-[7%] hidden sm:block">
              <div className="animate-flotar" style={{ animationDelay: "-5s" }}>
                <Chip icono={<IconoEscudo size={18} />} titulo="Tus datos" texto="Solo lo que tú escribes" />
              </div>
            </div>
          </Escena>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/10 to-transparent" aria-hidden="true" />
    </div>
  );
}

function Chip({ icono, titulo, texto }: { icono: React.ReactNode; titulo: string; texto: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white bg-white py-2.5 pl-2.5 pr-4 text-tinta shadow-flotante">
      <span className="relieve grid h-9 w-9 flex-none place-items-center rounded-xl bg-azul text-white">{icono}</span>
      <span className="min-w-0">
        <span className="block text-[13px] font-bold leading-tight">{titulo}</span>
        <span className="block text-xs font-medium text-gris">{texto}</span>
      </span>
    </div>
  );
}
