"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Hace aparecer el contenido cuando entra en pantalla: sube y se endereza desde una leve
 * inclinación 3D (perspectiva). Solo opacity y transform. Con "reducir movimiento",
 * MotionConfig deja solo el fundido. `as="li"` permite usarlo dentro de listas.
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
  const Etiqueta = as === "li" ? motion.li : motion.div;
  return (
    <Etiqueta
      className={className}
      initial={{ opacity: 0, y: 28, rotateX: 12, transformPerspective: 900 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ type: "spring", stiffness: 140, damping: 20, mass: 0.6, delay: retraso / 1000 }}
      style={{ transformOrigin: "50% 100%" }}
    >
      {children}
    </Etiqueta>
  );
}
