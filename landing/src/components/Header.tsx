"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { nav, site } from "@/config/site";
import { Marca } from "./Logo";
import { Boton } from "./Boton";
import { IconoMenu, IconoTelegram, IconoWhatsApp } from "./Iconos";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

/**
 * Header que nunca se corta: en escritorio solo van los seis enlaces principales (los secundarios
 * quedan en el menú móvil y el footer) y los botones acortan su texto en pantallas medianas.
 */
export function Header() {
  const [compacto, setCompacto] = useState(false);
  const [activa, setActiva] = useState<string>("");
  const [abierto, setAbierto] = useState(false);

  const { scrollYProgress } = useScroll();
  const progreso = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setCompacto(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const secciones = nav
      .map((n) => document.getElementById(n.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!secciones.length) return;
    const obs = new IntersectionObserver(
      (entradas) => {
        const visible = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiva(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );
    secciones.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-gris-claro bg-white/95 backdrop-blur">
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] origin-left bg-gradient-to-r from-azul via-azul-vivo to-naranja"
        style={{ scaleX: progreso }}
      />
      <div
        data-testid="header-fila"
        className={`mx-auto flex w-full max-w-6xl items-center gap-4 px-4 transition-[padding] duration-200 sm:px-6 lg:gap-6 ${
          compacto ? "py-2" : "py-3"
        }`}
      >
        <div className="flex-none">
          <Marca tamano={compacto ? 30 : 34} />
        </div>

        {/* Enlaces principales desde lg */}
        <nav aria-label="Secciones" className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex">
          {nav.filter((item) => !("secundario" in item && item.secundario)).map((item) => {
            const esActiva = activa === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={esActiva ? "true" : undefined}
                className={`rounded-lg px-2.5 py-2 text-[13.5px] font-semibold whitespace-nowrap transition-colors hover:bg-azul-claro hover:text-azul xl:px-3 ${
                  esActiva ? "bg-azul-claro text-azul" : "text-tinta/75"
                } inline-flex`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto hidden flex-none items-center gap-2 md:flex">
          <Boton href={site.whatsappVacantes} variante="whatsapp" tamano="md" evento="Contact" className="px-3 lg:px-4">
            <IconoWhatsApp size={18} />
            <span className="hidden xl:inline">Escríbenos por </span>WhatsApp
          </Boton>
          <Boton href={site.formulario} tamano="md" evento="Lead" className="px-3 lg:px-4">
            Regístrate<span className="hidden xl:inline"> gratis</span>
          </Boton>
        </div>

        {/* Menú móvil: panel lateral accesible (Radix Dialog) */}
        <Sheet open={abierto} onOpenChange={setAbierto}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-xl text-azul transition-colors hover:bg-azul hover:text-white md:hidden"
              aria-label="Abrir menú"
            >
              <IconoMenu />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] max-w-sm gap-0 overflow-y-auto border-l-0 bg-white p-0">
            <div className="flex items-center justify-between border-b border-gris-claro px-5 py-4">
              <SheetTitle className="font-display text-lg font-bold text-tinta">Menú</SheetTitle>
            </div>
            <nav aria-label="Secciones" className="flex flex-col px-3 py-3">
              {nav.map((item, i) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-[17px] font-semibold text-tinta transition-colors hover:bg-tinta hover:text-white"
                  >
                    <span className="font-mono text-[11px] text-gris">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 border-t border-gris-claro px-5 py-5">
              <Boton href={site.formulario} evento="Lead">
                Regístrate gratis
              </Boton>
              <Boton href={site.whatsappVacantes} variante="whatsapp" evento="Contact">
                <IconoWhatsApp />
                Escríbenos por WhatsApp
              </Boton>
              <Boton href={site.telegram} variante="telegram">
                <IconoTelegram className="text-telegram" />
                Canal de vacantes en Telegram
              </Boton>
              <p className="mt-2 text-center font-mono text-[11px] text-gris">gratis · sin documentos · 18+</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
