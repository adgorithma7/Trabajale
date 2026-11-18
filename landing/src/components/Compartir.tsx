"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { IconoWhatsApp } from "./Iconos";

const MENSAJE = `${site.nombre} es una bolsa de empleo gratuita para Venezuela: te registras una vez y te avisan por WhatsApp cuando hay una vacante para tu perfil.`;

/** Compartir la página: WhatsApp, Web Share si existe, y copiar enlace. */
export function Compartir({ claro = false }: { claro?: boolean }) {
  const [copiado, setCopiado] = useState(false);
  const base = `inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-boton border-2 px-4 font-bold transition-colors ${
    claro ? "border-white/60 text-white hover:bg-white hover:text-tinta" : "border-azul text-azul hover:bg-azul hover:text-white"
  }`;

  const compartirNativo = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: site.nombre, text: MENSAJE, url: site.url });
        return;
      }
    } catch {
      /* cancelado por la persona */
    }
    await copiar();
  };

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(site.url);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 1800);
    } catch {
      window.prompt("Copia este enlace:", site.url);
    }
  };

  return (
    <div className="flex flex-wrap gap-2.5">
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${MENSAJE} ${site.url}`)}`}
        target="_blank"
        rel="noopener"
        className={base}
      >
        <IconoWhatsApp size={18} className={claro ? "text-[#25d366]" : "text-verde"} />
        Enviar por WhatsApp
      </a>
      <button type="button" onClick={compartirNativo} className={base} aria-live="polite">
        {copiado ? "Enlace copiado" : "Compartir enlace"}
      </button>
    </div>
  );
}
