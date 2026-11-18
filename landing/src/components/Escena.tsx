"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Contenedor con parallax: sigue el cursor (o la inclinación del teléfono si el
 * navegador lo permite sin pedir permiso) y expone --rx/--ry en [-1, 1].
 */
export function Escena({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let rx = 0;
    let ry = 0;
    const pintar = () => {
      el.style.setProperty("--rx", rx.toFixed(3));
      el.style.setProperty("--ry", ry.toFixed(3));
      frame = 0;
    };
    const programar = () => {
      if (!frame) frame = requestAnimationFrame(pintar);
    };

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      rx = Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth / 2)));
      ry = Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight / 2)));
      programar();
    };
    const onLeave = () => {
      rx = 0;
      ry = 0;
      programar();
    };
    const onOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      rx = Math.max(-1, Math.min(1, e.gamma / 30));
      ry = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
      programar();
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("deviceorientation", onOrientation, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("deviceorientation", onOrientation);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={`escena preservar-3d ${className}`}>
      {children}
    </div>
  );
}
