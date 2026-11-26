"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  /** Inclinación máxima en grados. */
  max?: number;
  as?: "div" | "article" | "li";
}

/**
 * Tarjeta que se inclina hacia el cursor (efecto 3D ligero).
 * En pantallas táctiles no hace nada y con `prefers-reduced-motion` la CSS lo anula.
 */
export function Tilt({ children, className = "", max = 10, as = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  const mover = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    ref.current.style.setProperty("--tx", String(x * max));
    ref.current.style.setProperty("--ty", String(y * max));
  };
  const salir = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("--tx", "0");
    ref.current.style.setProperty("--ty", "0");
  };

  const Etiqueta = as;
  return (
    <Etiqueta
      ref={ref as React.RefObject<HTMLDivElement & HTMLLIElement>}
      onPointerMove={mover}
      onPointerLeave={salir}
      className={`inclinable relative ${className}`}
    >
      {children}
    </Etiqueta>
  );
}
