"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Configuración global de Motion: con "reducir movimiento" activado en el dispositivo,
 * Motion omite desplazamientos, giros y escalas y conserva solo los cambios de opacidad.
 * Así ningún componente tiene que decidir sus estilos iniciales según la preferencia
 * (eso provocaba errores de hidratación, porque el servidor no la conoce).
 */
export function Movimiento({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
