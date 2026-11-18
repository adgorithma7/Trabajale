"use client";

import { useState } from "react";
import { Revelar } from "./Revelar";
import { Eyebrow } from "./Seccion";

interface Garantia {
  etiqueta: string;
  titulo: string;
  corto: string;
  detalle: string;
}

const garantias: Garantia[] = [
  {
    etiqueta: "costo",
    titulo: "Gratis, siempre",
    corto: "Registrarte y que te propongamos una vacante no cuesta nada.",
    detalle:
      "Ni al inicio, ni para reservar un puesto, ni cuando empiezas a trabajar. Las empresas son quienes cubren nuestro servicio; a ti nunca te pediremos dinero.",
  },
  {
    etiqueta: "datos",
    titulo: "Solo lo necesario",
    corto: "No pedimos cédula, cuentas bancarias, fotos ni contraseñas.",
    detalle:
      "Trabajamos con lo que escribes en el formulario: nombre, edad, ciudad, el puesto que buscas, tu disponibilidad y un resumen corto de tu experiencia. Nada más.",
  },
  {
    etiqueta: "contacto",
    titulo: "Te avisamos nosotros",
    corto: "Cuando hay una vacante para tu perfil, Luca te escribe por Telegram.",
    detalle:
      "Publicamos cada vacante en el canal @trabajale y, si tu perfil encaja, te escribimos directamente. Si no hay nada para ti todavía, no te llenamos de mensajes.",
  },
  {
    etiqueta: "requisito",
    titulo: "Mayores de 18",
    corto: "Trabajamos solo con personas mayores de edad.",
    detalle:
      "Es la condición de las empresas con las que trabajamos y también la nuestra. No necesitas enviar ningún documento para demostrarlo.",
  },
];

function Tarjeta({ g, i }: { g: Garantia; i: number }) {
  const [abierta, setAbierta] = useState(false);
  const numero = String(i + 1).padStart(2, "0");
  return (
    <Revelar as="li" retraso={i * 70} className="min-w-0">
      <button
        type="button"
        onClick={() => setAbierta((v) => !v)}
        aria-expanded={abierta}
        className={`tarjeta invertible block h-full w-full overflow-hidden p-6 text-left ${abierta ? "abierta activa" : ""}`}
      >
        <span className="relative flex items-center justify-between">
          <span className="inv-icono relieve grid h-11 w-11 place-items-center rounded-xl bg-azul font-mono text-[15px] text-white transition-colors">
            {numero}
          </span>
          <span className="inv-etiqueta font-mono text-[11px] uppercase tracking-[0.16em] text-gris">{g.etiqueta}</span>
        </span>

        <span className="mt-6 block h-px w-10 bg-naranja" aria-hidden="true" />

        <span className="inv-titulo mt-4 block font-display text-[20px] font-bold leading-tight text-tinta">{g.titulo}</span>
        <span className="inv-texto mt-1.5 block text-[15px] leading-snug text-gris">{g.corto}</span>

        <span className="desplegable">
          <span className="inv-texto block text-[14.5px] leading-snug text-gris">
            <span className="block pt-3">{g.detalle}</span>
          </span>
        </span>

        <span className="inv-etiqueta mt-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-azul">
          {abierta ? "cerrar" : "ver detalle"}
          <span className="inv-flecha text-base leading-none transition-transform" aria-hidden="true">
            {abierta ? "↑" : "→"}
          </span>
        </span>
      </button>
    </Revelar>
  );
}

/** Las cuatro reglas del servicio. Sección propia, con aire respecto al hero. */
export function Garantias() {
  return (
    <section id="garantias" className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 max-w-2xl">
          <Eyebrow>Nuestro compromiso</Eyebrow>
          <h2 className="font-display text-[2rem] font-bold leading-[1.1] text-azul md:text-[2.6rem]">
            Cuatro cosas que no cambian
          </h2>
          <p className="mt-4 text-lg text-gris">
            Son las reglas con las que trabajamos desde el primer día. Están en cada vacante que publicamos y en cada mensaje que enviamos.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {garantias.map((g, i) => (
            <Tarjeta key={g.titulo} g={g} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
