"use client";

import { useEffect, useState, type PointerEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, type Variants } from "motion/react";
import { usePrefiereMenosMovimiento } from "@/lib/usePrefiereMenosMovimiento";

export interface Diapositiva {
  /** Etiqueta pequeña en monoespaciada sobre el titular. */
  chip: string;
  titulo: string;
  /** Parte del titular en degradado naranja. */
  destacado: string;
  texto: ReactNode;
}

interface Props {
  diapositivas: Diapositiva[];
  /** Nivel del primer titular: h1 en la portada, h2 en secciones. Los demás van como párrafos. */
  nivel?: "h1" | "h2";
  /** Milisegundos por opción. */
  duracion?: number;
  /** Clases del titular (tamaño). */
  claseTitulo?: string;
  etiqueta: string;
}

const palabras = (t: string) => t.split(" ").filter(Boolean);

const cara: Variants = {
  entra: (dir: number) => ({ opacity: 0, rotateX: dir > 0 ? -70 : 70, y: dir > 0 ? 50 : -50, z: -120 }),
  quieta: { opacity: 1, rotateX: 0, y: 0, z: 0, transition: { type: "spring", stiffness: 110, damping: 18, staggerChildren: 0.045, delayChildren: 0.08 } },
  sale: (dir: number) => ({ opacity: 0, rotateX: dir > 0 ? 70 : -70, y: dir > 0 ? -50 : 50, z: -120, transition: { duration: 0.32, ease: [0.4, 0, 1, 1] } }),
};
const palabra: Variants = {
  entra: { opacity: 0, y: "0.6em", rotateX: -80 },
  quieta: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 200, damping: 18 } },
  sale: { opacity: 0 },
};
const linea: Variants = {
  entra: { opacity: 0, y: 14 },
  quieta: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 22, delay: 0.25 } },
  sale: { opacity: 0 },
};

/** Relieve del titular: capas de sombra que lo "extruyen" hacia atrás. Funciona también con texto en degradado. */
const RELIEVE = "drop-shadow(0 1px 0 #2a62f0) drop-shadow(0 2px 0 #163ba8) drop-shadow(0 3px 0 #0f2d8a) drop-shadow(0 16px 22px rgb(0 0 0 / 0.38))";

function Titular({ d, como, clase }: { d: Diapositiva; como: "h1" | "h2" | "p"; clase: string }) {
  const Etiqueta = como === "h1" ? motion.h1 : como === "h2" ? motion.h2 : motion.p;
  return (
    <Etiqueta className={`font-display font-bold leading-[1.02] [perspective:800px] ${clase}`} style={{ filter: RELIEVE }}>
      {palabras(d.titulo).map((w, i) => (
        <span key={`t${i}`}>
          <motion.span variants={palabra} className="inline-block origin-bottom">
            {w}
          </motion.span>{" "}
        </span>
      ))}
      {palabras(d.destacado).map((w, i, todas) => (
        <span key={`d${i}`}>
          <motion.span
            variants={palabra}
            className="inline-block origin-bottom bg-gradient-to-r from-[#ffb074] via-naranja to-[#ff9a4d] bg-clip-text text-transparent"
          >
            {w}
          </motion.span>
          {i < todas.length - 1 ? " " : ""}
        </span>
      ))}
    </Etiqueta>
  );
}

function Contenido({ d, como, clase }: { d: Diapositiva; como: "h1" | "h2" | "p"; clase: string }) {
  return (
    <>
      <motion.p
        variants={linea}
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.12em]"
      >
        <span className="h-2 w-2 rounded-full bg-naranja shadow-[0_0_12px_#ff7a29]" aria-hidden="true" />
        {d.chip}
      </motion.p>
      <Titular d={d} como={como} clase={clase} />
      <motion.div variants={linea} className="mt-6 max-w-[38ch] text-lg font-medium text-white/85 sm:text-xl">
        {d.texto}
      </motion.div>
    </>
  );
}

/**
 * Carrusel de mensajes en 3D: cada opción gira como la cara de un cubo, el titular entra palabra
 * por palabra con relieve y el bloque se inclina hacia el cursor. Avanza solo con barra de
 * progreso; se pausa al pasar el cursor o al enfocar con teclado. Con "reducir movimiento" no
 * avanza solo (y MotionConfig deja solo fundidos). Todas las opciones están en el HTML.
 */
export function Carrusel3D({ diapositivas, nivel = "h1", duracion = 6500, claseTitulo = "", etiqueta }: Props) {
  const [[actual, dir], setEstado] = useState<[number, number]>([0, 1]);
  const [pausado, setPausado] = useState(false);
  const [vuelta, setVuelta] = useState(0);
  const reducido = usePrefiereMenosMovimiento();
  const avanza = !reducido && !pausado && diapositivas.length > 1;
  const n = diapositivas.length;

  const ir = (i: number, d: number) => {
    setEstado([((i % n) + n) % n, d]);
    setVuelta((v) => v + 1);
  };

  useEffect(() => {
    if (!avanza) return;
    const t = window.setTimeout(() => setEstado(([i]) => [(i + 1) % n, 1]), duracion);
    return () => window.clearTimeout(t);
  }, [actual, avanza, duracion, n, vuelta]);

  // Inclinación del bloque hacia el cursor, con muelle
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 16 });
  const sry = useSpring(ry, { stiffness: 120, damping: 16 });
  const mover = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
  };
  const salir = () => {
    rx.set(0);
    ry.set(0);
    setPausado(false);
  };

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label={etiqueta}
      onPointerEnter={() => setPausado(true)}
      onPointerMove={mover}
      onPointerLeave={salir}
      onFocusCapture={() => setPausado(true)}
      onBlurCapture={() => setPausado(false)}
      className="relative"
    >
      <motion.div style={{ rotateX: srx, rotateY: sry, transformPerspective: 1100 }} className="[transform-style:preserve-3d]">
        <div className="grid [perspective:1100px]">
          {/* Medidores invisibles: reservan la altura de la opción más alta para que nada salte */}
          {diapositivas.map((d, i) => (
            <div key={`m${i}`} aria-hidden="true" className="invisible [grid-area:1/1]">
              <Contenido d={d} como="p" clase={claseTitulo} />
            </div>
          ))}
          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={actual}
              custom={dir}
              variants={cara}
              initial="entra"
              animate="quieta"
              exit="sale"
              aria-live={avanza ? "off" : "polite"}
              className="[grid-area:1/1] [transform-origin:50%_50%_-80px] [transform-style:preserve-3d]"
            >
              <Contenido d={diapositivas[actual]} como={actual === 0 ? nivel : "p"} clase={claseTitulo} />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {n > 1 && (
        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => ir(actual - 1, -1)}
            aria-label="Opción anterior"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-tinta"
          >
            <span aria-hidden="true">←</span>
          </button>
          <div className="flex items-center gap-2">
            {diapositivas.map((d, i) => (
              <button
                key={i}
                type="button"
                onClick={() => ir(i, i >= actual ? 1 : -1)}
                aria-label={`Opción ${i + 1} de ${n}: ${d.chip}`}
                aria-current={i === actual ? "true" : undefined}
                className={`relative h-2.5 overflow-hidden rounded-full transition-[width,background-color] ${
                  i === actual ? "w-12 bg-white/25" : "w-2.5 bg-white/30 hover:bg-white/60"
                }`}
              >
                {i === actual && (
                  <span
                    key={`${actual}-${vuelta}`}
                    className={`absolute inset-y-0 left-0 block w-full bg-naranja ${avanza ? "progreso" : ""}`}
                    style={{ ["--dur" as string]: `${duracion}ms` }}
                  />
                )}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => ir(actual + 1, 1)}
            aria-label="Opción siguiente"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-tinta"
          >
            <span aria-hidden="true">→</span>
          </button>
          <span className="ml-1 font-mono text-[11px] text-white/60" aria-hidden="true">
            {String(actual + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}
