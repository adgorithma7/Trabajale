import Link from "next/link";
import { site } from "@/config/site";
import { Marca } from "@/components/Logo";
import { Boton } from "@/components/Boton";
import { IconoTelegram } from "@/components/Iconos";

export default function NoEncontrada() {
  return (
    <main className="malla-hero reticula relative flex flex-1 flex-col text-white">
      <div className="mx-auto flex w-full max-w-6xl items-center px-4 py-4 sm:px-6">
        <Marca claro />
      </div>
      <div className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col items-start justify-center px-4 py-16 sm:px-6">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-naranja">Error 404</p>
        <h1 className="mt-3 text-[2.4rem] font-bold leading-[1.05] sm:text-5xl">Esta página no existe, pero las vacantes sí</h1>
        <p className="mt-5 max-w-[40ch] text-lg text-white/85">
          Puede que el enlace esté mal escrito o que la página haya cambiado. Vuelve al inicio o mira las vacantes en el canal.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-14 items-center justify-center rounded-boton bg-naranja px-6 text-lg font-bold text-white shadow-naranja hover:bg-naranja-oscuro"
          >
            Volver al inicio
          </Link>
          <Boton href={site.telegram} variante="blanco" evento="Canal">
            <IconoTelegram className="text-telegram" />
            Ver vacantes en Telegram
          </Boton>
        </div>
      </div>
    </main>
  );
}
