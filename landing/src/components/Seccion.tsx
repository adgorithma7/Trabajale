import type { ReactNode } from "react";

interface Props {
  id?: string;
  children: ReactNode;
  /** Color de fondo de la banda completa. */
  fondo?: "blanco" | "azul-claro" | "azul";
  className?: string;
}

export function Seccion({ id, children, fondo = "blanco", className = "" }: Props) {
  const fondos = {
    blanco: "bg-white",
    "azul-claro": "bg-azul-claro",
    azul: "bg-azul text-white",
  };
  return (
    <section id={id} className={`${fondos[fondo]} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">{children}</div>
    </section>
  );
}

/** Etiqueta pequeña en monoespaciada con una línea naranja delante. */
export function Eyebrow({ children, claro = false }: { children: ReactNode; claro?: boolean }) {
  return (
    <p
      className={`mb-3 inline-flex items-center font-mono text-[12px] uppercase tracking-[0.18em] ${
        claro ? "text-white/75" : "text-naranja"
      }`}
    >
      {children}
    </p>
  );
}

export function Titulo({
  eyebrow,
  children,
  claro = false,
  centrado = false,
  descripcion,
}: {
  eyebrow?: string;
  children: ReactNode;
  claro?: boolean;
  centrado?: boolean;
  descripcion?: ReactNode;
}) {
  return (
    <div className={`mb-10 max-w-2xl ${centrado ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow claro={claro}>{eyebrow}</Eyebrow>}
      <h2
        className={`text-[2rem] font-bold leading-[1.1] md:text-[2.6rem] ${
          claro ? "text-white" : "text-azul"
        }`}
      >
        {children}
      </h2>
      {descripcion && (
        <p className={`mt-4 text-lg ${claro ? "text-white/90" : "text-gris"}`}>{descripcion}</p>
      )}
    </div>
  );
}
