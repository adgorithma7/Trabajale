"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Hace aparecer el contenido con un leve desplazamiento cuando entra en pantalla.
 * Lo que ya está a la vista al cargar se muestra de inmediato; sin JavaScript todo es visible.
 * `as="li"` permite usarlo dentro de listas sin romper el HTML.
 */
export function Revelar({
  children,
  className = "",
  retraso = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  retraso?: number;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    document.documentElement.classList.add("js");

    const mostrar = () => el.classList.add("visible");
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined" ||
      el.getBoundingClientRect().top < window.innerHeight
    ) {
      mostrar();
      return;
    }
    const obs = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((en) => en.isIntersecting)) {
          mostrar();
          obs.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    obs.observe(el);
    const t = window.setTimeout(mostrar, 4000);
    return () => {
      obs.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  const Etiqueta = as;
  return (
    <Etiqueta ref={ref} className={`revelar ${className}`} style={{ transitionDelay: `${retraso}ms` }}>
      {children}
    </Etiqueta>
  );
}
