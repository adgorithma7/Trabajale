"use client";

import { useSyncExternalStore } from "react";

const CONSULTA = "(prefers-reduced-motion: reduce)";

function suscribir(cambio: () => void) {
  const mq = window.matchMedia(CONSULTA);
  mq.addEventListener("change", cambio);
  return () => mq.removeEventListener("change", cambio);
}

/**
 * Preferencia de movimiento reducido, segura para la hidratación: el servidor y el primer render
 * del navegador devuelven `false` (mismo HTML), y justo después React toma el valor real.
 * Úsalo en lugar de `useReducedMotion` de Motion cuando el valor cambie texto o estilos iniciales.
 */
export function usePrefiereMenosMovimiento() {
  return useSyncExternalStore(
    suscribir,
    () => window.matchMedia(CONSULTA).matches,
    () => false,
  );
}
