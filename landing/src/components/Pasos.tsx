"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { site } from "@/config/site";
import { IconoCheck, IconoTelegram } from "./Iconos";

const DURACION = 5500;

const pasos = [
  {
    titulo: "Regístrate gratis",
    texto: "Llena el formulario en unos minutos: nombre, ciudad, el tipo de puesto que buscas y tu disponibilidad.",
    etiqueta: "formulario · 3 min",
  },
  {
    titulo: "Cuéntanos tu experiencia",
    texto: "Un resumen corto basta. Dinos qué sabes hacer y con qué equipo e internet cuentas.",
    etiqueta: "tu perfil",
  },
  {
    titulo: "Te contactamos cuando haya una oportunidad",
    texto: "Si surge una vacante que encaja con tu perfil, Luca te escribe por Telegram y una persona del equipo te explica los detalles.",
    etiqueta: "telegram · mensaje directo",
  },
  {
    titulo: "Sigue las vacantes en Telegram",
    texto: "Mientras tanto, en el canal publicamos cada nueva oportunidad para que no se te escape ninguna.",
    etiqueta: `telegram · ${site.telegramUsuario}`,
  },
];

/* ---------- Vistas previas de cada paso ---------- */

function Campo({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <div className="rounded-xl border border-gris-claro bg-white px-3 py-2">
      <p className="font-mono text-[10px] uppercase tracking-wider text-gris">{etiqueta}</p>
      <p className="text-[14px] font-semibold text-tinta">{valor}</p>
    </div>
  );
}

type VistaProps = { onSiguiente: () => void };

function BotonSiguiente({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-1 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-naranja font-bold text-white shadow-naranja transition-[transform,background-color] hover:bg-naranja-oscuro active:scale-[0.98]"
    >
      {children}
      <span aria-hidden="true">→</span>
    </button>
  );
}

function VistaFormulario({ onSiguiente }: VistaProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <p className="font-bold text-tinta">Registro en Trabájale</p>
        <span className="font-mono text-[11px] text-gris">paso 1 de 1</span>
      </div>
      <Campo etiqueta="Nombre y apellido" valor="María P." />
      <div className="grid grid-cols-2 gap-2.5">
        <Campo etiqueta="Ciudad o sector" valor="San Cristóbal" />
        <Campo etiqueta="Edad" valor="27" />
      </div>
      <Campo etiqueta="Puesto que te interesa" valor="Atención al cliente por chat" />
      <Campo etiqueta="Disponibilidad" valor="Tardes y fines de semana" />
      <label className="flex items-center gap-2 text-[13px] text-tinta">
        <span className="grid h-5 w-5 place-items-center rounded-md bg-azul text-white">
          <IconoCheck size={13} />
        </span>
        Acepto la política de privacidad
      </label>
      <BotonSiguiente onClick={onSiguiente}>Enviar registro</BotonSiguiente>
    </div>
  );
}

function VistaExperiencia({ onSiguiente }: VistaProps) {
  const chips = ["2 años en atención al cliente", "Excel básico", "Buena redacción", "Computadora propia", "Internet 20 Mb"];
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="font-bold text-tinta">Tu experiencia</p>
        <span className="font-mono text-[11px] text-gris">resumen corto</span>
      </div>
      <div className="rounded-xl border border-gris-claro bg-white p-3 text-[14px] leading-snug text-tinta">
        Trabajé dos años atendiendo clientes por chat y teléfono en una tienda. Manejo Excel básico y
        escribo bien. Tengo computadora e internet estable.
        <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-azul align-middle" aria-hidden="true" />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-wider text-gris">Lo que entendimos</p>
      <ul className="flex flex-wrap gap-1.5">
        {chips.map((c, i) => (
          <li
            key={c}
            className="entrar rounded-md bg-azul-claro px-2 py-1 text-xs font-bold text-azul"
            style={{ animationDelay: `${150 + i * 120}ms` }}
          >
            {c}
          </li>
        ))}
      </ul>
      <BotonSiguiente onClick={onSiguiente}>Guardar mi experiencia</BotonSiguiente>
    </div>
  );
}

function AvatarLuca() {
  return (
    <span className="relative h-8 w-8 flex-none overflow-hidden rounded-full bg-azul">
      <Image src="/luca.webp" alt="" width={64} height={111} className="absolute left-1/2 top-0.5 h-[140%] w-auto -translate-x-1/2 object-cover object-top" />
    </span>
  );
}

function VistaMensaje({ onSiguiente }: VistaProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2.5 border-b border-gris-claro pb-2.5">
        <AvatarLuca />
        <div className="min-w-0">
          <p className="truncate text-[14px] font-bold text-tinta">Luca · Trabájale</p>
          <p className="font-mono text-[10px] text-telegram">mensaje directo · desde {site.telegramUsuario}</p>
        </div>
        <IconoTelegram size={20} className="ml-auto text-telegram" />
      </div>
      <div className="entrar max-w-[90%] rounded-2xl rounded-tl-md bg-azul-claro px-3 py-2 text-[13.5px] leading-snug text-tinta" style={{ animationDelay: "100ms" }}>
        Hola María, soy Luca, de Trabájale. Salió una vacante de atención al cliente por chat, remota y
        con turnos rotativos. Encaja con lo que nos contaste. ¿Te interesa?
        <span className="mt-1 block text-right font-mono text-[10px] text-gris">10:12</span>
      </div>
      <div className="entrar ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-azul-suave px-3 py-2 text-[13.5px] leading-snug text-tinta" style={{ animationDelay: "900ms" }}>
        ¡Sí! ¿Qué sigue?
        <span className="mt-1 block text-right font-mono text-[10px] text-gris">10:14</span>
      </div>
      <div className="entrar max-w-[90%] rounded-2xl rounded-tl-md bg-azul-claro px-3 py-2 text-[13.5px] leading-snug text-tinta" style={{ animationDelay: "1700ms" }}>
        Una persona del equipo te escribe hoy para explicarte horario, pago y la prueba. Nada de esto tiene costo.
        <span className="mt-1 block text-right font-mono text-[10px] text-gris">10:14</span>
      </div>
      <BotonSiguiente onClick={onSiguiente}>Ver el canal de vacantes</BotonSiguiente>
    </div>
  );
}

function VistaTelegram() {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2.5 border-b border-gris-claro pb-2.5">
        <AvatarLuca />
        <div className="min-w-0">
          <p className="truncate text-[14px] font-bold text-tinta">Trabájale</p>
          <p className="font-mono text-[10px] text-gris">canal · {site.telegramUsuario}</p>
        </div>
        <IconoTelegram size={20} className="ml-auto text-telegram" />
      </div>
      {[
        { t: "Nueva vacante: Asesor de ventas por WhatsApp", d: "Remoto · Medio tiempo · Tardes", h: "9:02" },
        { t: "Nueva vacante: Auxiliar administrativo", d: "Presencial · San Cristóbal · L-V", h: "12:40" },
        { t: "Cierra hoy: Atención al cliente por chat", d: "Si ya te registraste, no tienes que hacer nada más.", h: "17:15" },
      ].map((m, i) => (
        <div
          key={m.t}
          className="entrar max-w-[94%] rounded-2xl rounded-tl-md bg-azul-claro px-3 py-2 text-[13.5px] leading-snug text-tinta"
          style={{ animationDelay: `${100 + i * 500}ms` }}
        >
          <p className="font-bold text-azul">{m.t}</p>
          <p>{m.d}</p>
          <span className="mt-1 block text-right font-mono text-[10px] text-gris">{m.h}</span>
        </div>
      ))}
      <a
        href={site.telegram}
        target="_blank"
        rel="noopener"
        data-evento="Canal"
        className="mt-1 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-azul font-bold text-white transition-[transform,background-color] hover:bg-tinta active:scale-[0.98]"
      >
        <IconoTelegram size={18} className="text-[#7cd0ff]" />
        Unirme al canal {site.telegramUsuario}
      </a>
    </div>
  );
}

const vistas: Array<(p: VistaProps) => React.JSX.Element> = [VistaFormulario, VistaExperiencia, VistaMensaje, VistaTelegram];

/* ---------- Recorrido interactivo ---------- */

export function Pasos() {
  const [activo, setActivo] = useState(0);
  const [pausado, setPausado] = useState(false);
  // null = sin elección de la persona: avanza solo, salvo con movimiento reducido.
  const [autoplayElegido, setAutoplay] = useState<boolean | null>(null);
  // Cuenta cada elección manual: reinicia el temporizador y la barra de progreso.
  const [vuelta, setVuelta] = useState(0);
  const reducido = useReducedMotion();
  const autoplay = autoplayElegido ?? !reducido;

  useEffect(() => {
    if (!autoplay || pausado) return;
    const t = window.setTimeout(() => setActivo((a) => (a + 1) % pasos.length), DURACION);
    return () => window.clearTimeout(t);
  }, [activo, autoplay, pausado, vuelta]);

  const elegir = (i: number) => {
    setVuelta((v) => v + 1);
    setActivo(i);
  };

  const Vista = vistas[activo];

  return (
    <div
      className={`grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12 ${pausado ? "pausado" : ""}`}
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocusCapture={() => setPausado(true)}
      onBlurCapture={() => setPausado(false)}
    >
      <ol className="flex flex-col gap-3" aria-label="Pasos para conseguir empleo con Trabájale">
        {pasos.map((p, i) => {
          const esActivo = i === activo;
          return (
            <li key={p.titulo}>
              <button
                type="button"
                onClick={() => elegir(i)}
                aria-current={esActivo ? "step" : undefined}
                className={`tarjeta invertible relative w-full overflow-hidden p-5 text-left sm:p-6 ${esActivo ? "activa" : ""}`}
              >
                <span className="flex gap-4">
                  <span
                    className={`relieve grid h-12 w-12 flex-none place-items-center rounded-2xl font-mono text-lg font-medium transition-colors ${
                      esActivo ? "bg-naranja text-white" : "inv-icono bg-azul-claro text-azul"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="inv-titulo block font-display text-[19px] font-bold leading-snug text-tinta">{p.titulo}</span>
                      <span className="inv-etiqueta hidden whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.14em] text-gris sm:block">{p.etiqueta}</span>
                    </span>
                    <span className="inv-texto mt-1.5 block text-[15px] text-gris">{p.texto}</span>
                  </span>
                </span>
                {esActivo && autoplay && (
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-white/15" aria-hidden="true">
                    <span
                      key={`${activo}-${vuelta}`}
                      className="progreso block h-full bg-naranja"
                      style={{ ["--dur" as string]: `${DURACION}ms` }}
                    />
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ol>

      {/* Vista previa en un "teléfono" */}
      <div className="perspectiva order-first lg:order-none lg:sticky lg:top-24 lg:self-start">
        <div className="mx-auto w-full max-w-[380px] rounded-[34px] bg-noche p-2.5 shadow-flotante ring-1 ring-tinta/20 [transform:rotateY(-8deg)_rotateX(3deg)]">
          <div className="min-h-[380px] overflow-hidden rounded-[26px] bg-azul-claro p-4 lg:min-h-[430px]">
            <div className="mb-3 flex items-center justify-between font-mono text-[11px] text-gris">
              <span>trabajale.ai</span>
              <span>paso {activo + 1} / {pasos.length}</span>
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activo}
                initial={reducido ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducido ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <Vista onSiguiente={() => elegir(Math.min(activo + 1, pasos.length - 1))} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Elegir paso">
          {pasos.map((p, i) => (
            <button
              key={p.titulo}
              type="button"
              role="tab"
              aria-selected={i === activo}
              aria-label={`Paso ${i + 1}: ${p.titulo}`}
              onClick={() => elegir(i)}
              className={`h-2.5 rounded-full transition-all ${i === activo ? "w-8 bg-naranja" : "w-2.5 bg-gris-claro hover:bg-azul/40"}`}
            />
          ))}
          <button
            type="button"
            onClick={() => setAutoplay(!autoplay)}
            className="ml-3 font-mono text-[11px] text-gris underline-offset-4 hover:text-azul hover:underline"
          >
            {autoplay ? "pausar" : "reproducir"}
          </button>
        </div>
      </div>
    </div>
  );
}
