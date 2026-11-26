"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import type { PointerEvent, ReactNode } from "react";

/**
 * Atrae suavemente su contenido hacia el cursor (efecto "magnético") con un muelle.
 * Solo con ratón: en pantallas táctiles no hace nada. Con movimiento reducido, MotionConfig lo anula.
 */
export function Magnetico({ children, fuerza = 0.25, className = "" }: { children: ReactNode; fuerza?: number; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  const mover = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * fuerza);
    y.set((e.clientY - (r.top + r.height / 2)) * fuerza);
  };
  const salir = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div onPointerMove={mover} onPointerLeave={salir} style={{ x: sx, y: sy }} className={`inline-flex ${className}`}>
      {children}
    </motion.div>
  );
}
