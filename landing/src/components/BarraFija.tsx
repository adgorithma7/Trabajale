import { site } from "@/config/site";
import { IconoWhatsApp } from "./Iconos";

/** Barra inferior fija en celular con los dos medios principales. */
export function BarraFija() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gris-claro bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-[1.3fr_1fr] gap-2 px-3 py-2.5">
        <a
          href={site.formulario}
          target="_blank"
          rel="noopener"
          data-evento="Lead"
          className="inline-flex min-h-12 items-center justify-center rounded-boton bg-naranja px-4 font-extrabold text-white shadow-naranja"
        >
          Regístrate gratis
        </a>
        <a
          href={site.whatsappVacantes}
          target="_blank"
          rel="noopener"
          data-evento="Contact"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-boton border-2 border-verde bg-white px-3 font-extrabold text-verde-oscuro"
        >
          <IconoWhatsApp size={20} className="text-verde" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
