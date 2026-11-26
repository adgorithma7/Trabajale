"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Gira su contenido en 3D según la posición en pantalla: entra inclinado y se endereza
 * al llegar al centro. Solo transform; con "reducir movimiento" MotionConfig lo deja quieto.
 */
export function GiroScroll({
  children,
  className = "",
  giroY = -26,
  giroX = 10,
}: {
  children: ReactNode;
  className?: string;
  giroY?: number;
  giroX?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.5 });
  const rotateY = useTransform(p, [0, 1], [giroY, -6]);
  const rotateX = useTransform(p, [0, 1], [giroX, 2]);
  const y = useTransform(p, [0, 1], [60, 0]);
  const scale = useTransform(p, [0, 1], [0.92, 1]);

  return (
    <div ref={ref} className={`[perspective:1200px] ${className}`}>
      <motion.div style={{ rotateY, rotateX, y, scale, transformStyle: "preserve-3d" }}>{children}</motion.div>
    </div>
  );
}
