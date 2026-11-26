"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import type { Variante3D } from "./Fondo3D";

const Fondo3D = dynamic(() => import("./Fondo3D"), { ssr: false });

let puede3D: boolean | null = null;

/** Se calcula una sola vez por página: crear contextos WebGL en cada render sería caro. */
function comprobar3D() {
  if (puede3D !== null) return puede3D;
  puede3D = false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return puede3D;
  if (window.innerWidth < 640) return puede3D;
  try {
    const c = document.createElement("canvas");
    puede3D = Boolean(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    /* sin WebGL: la sección se queda con su fondo CSS */
  }
  return puede3D;
}

const sinSuscripcion = () => () => {};

/** Monta el fondo 3D solo cuando hay WebGL, la persona no pidió menos movimiento y la pantalla no es diminuta. */
export function Fondo3DCarga({ variante = "hero" }: { variante?: Variante3D }) {
  const activo = useSyncExternalStore(sinSuscripcion, comprobar3D, () => false);

  if (!activo) return null;
  return <Fondo3D variante={variante} />;
}
