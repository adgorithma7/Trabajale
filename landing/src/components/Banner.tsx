"use client";

import { useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { banner } from "@/config/site";
import { IconoCerrar, IconoTelegram } from "./Iconos";

const CLAVE = "trabajale-banner-cerrado";
const sinSuscripcion = () => () => {};

/** Banner superior: anuncio breve con enlace al canal. Se puede cerrar y lo recuerda en este navegador. */
export function Banner() {
  const [cerradoAhora, setCerradoAhora] = useState(false);
  const reducido = useReducedMotion();

  // En el servidor no hay localStorage: el banner se pinta al hidratar, sin cambiar estado en un efecto.
  const cerradoAntes = useSyncExternalStore(
    sinSuscripcion,
    () => {
      try {
        return localStorage.getItem(CLAVE) === banner.version;
      } catch {
        return false; // sin almacenamiento: se muestra igual
      }
    },
    () => true,
  );
  const visible = banner.activo && !cerradoAntes && !cerradoAhora;

  const cerrar = () => {
    setCerradoAhora(true);
    try {
      localStorage.setItem(CLAVE, banner.version);
    } catch {
      /* nada */
    }
  };

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          key="banner"
          role="region"
          aria-label="Aviso"
          initial={reducido ? { opacity: 0 } : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducido ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="relative z-50 bg-tinta text-white"
        >
          <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-2.5 pr-14 sm:px-6 sm:pr-16">
            <span className="hidden flex-none rounded-md bg-naranja px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white sm:inline-block">
              {banner.etiqueta}
            </span>
            <p className="min-w-0 flex-1 text-[13.5px] leading-snug font-medium text-white/90 sm:line-clamp-2 sm:text-[15px]">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-naranja sm:hidden">{banner.etiqueta} · </span>
              {banner.texto}
            </p>
            <a
              href={banner.enlace}
              target="_blank"
              rel="noopener"
              data-evento="Canal"
              aria-label={banner.enlaceTexto}
              className="inline-flex min-h-9 flex-none items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 font-bold text-white underline decoration-naranja decoration-2 underline-offset-4 transition-colors hover:bg-white hover:text-tinta hover:no-underline"
            >
              <IconoTelegram size={16} className="text-telegram" />
              <span className="hidden sm:inline">{banner.enlaceTexto}</span>
              <span className="sm:hidden">Canal</span>
            </a>
            <button
              type="button"
              onClick={cerrar}
              aria-label="Cerrar aviso"
              className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-lg text-white/70 transition-colors hover:bg-white hover:text-tinta sm:right-4"
            >
              <IconoCerrar size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
