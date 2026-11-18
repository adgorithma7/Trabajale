import Image from "next/image";
import { notFound } from "next/navigation";
import { site } from "@/config/site";

/**
 * Plantillas de piezas (canvas-design) hechas con el mismo sistema de la web:
 * - og: 1200×630, vista previa al compartir el enlace.
 * - cuadrado: 1080×1080, publicación de Instagram/Facebook/WhatsApp.
 * - historia: 1080×1920, historia o reel estático.
 * Se generan a PNG con `node tests/herramientas/piezas.mjs`.
 */
export const PIEZAS = {
  og: { ancho: 1200, alto: 630 },
  cuadrado: { ancho: 1080, alto: 1080 },
  historia: { ancho: 1080, alto: 1920 },
} as const;

export type NombrePieza = keyof typeof PIEZAS;

export function generateStaticParams() {
  return Object.keys(PIEZAS).map((pieza) => ({ pieza }));
}

function Isotipo({ tamano }: { tamano: number }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 34 34" aria-hidden="true">
      <circle cx="17" cy="17" r="17" fill="#FFFFFF" />
      <path d="M9 18l6 6 11-13" stroke="#FF7A29" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Marca({ tamano }: { tamano: number }) {
  return (
    <div className="flex items-center" style={{ gap: tamano * 0.3 }}>
      <Isotipo tamano={tamano} />
      <span className="font-display font-bold tracking-tight text-white" style={{ fontSize: tamano * 0.72 }}>
        trabajale<span className="text-naranja">.ai</span>
      </span>
    </div>
  );
}

function Garantias({ tamano }: { tamano: number }) {
  return (
    <ul className="flex flex-wrap" style={{ gap: tamano * 0.6, fontSize: tamano }}>
      {["Gratis, siempre", "Sin documentos", "Mayores de 18"].map((t) => (
        <li key={t} className="flex items-center font-semibold text-white/90" style={{ gap: tamano * 0.4 }}>
          <span className="rounded-full bg-naranja" style={{ width: tamano * 0.5, height: tamano * 0.5 }} aria-hidden="true" />
          {t}
        </li>
      ))}
    </ul>
  );
}

function Boton({ tamano, children }: { tamano: number; children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#ff9550] to-naranja font-bold text-white"
      style={{ fontSize: tamano, padding: `${tamano * 0.55}px ${tamano * 1.2}px`, boxShadow: `0 ${tamano * 0.5}px ${tamano * 1.2}px -${tamano * 0.3}px rgb(255 122 41 / .55)` }}
    >
      {children}
    </span>
  );
}

function Pie({ tamano }: { tamano: number }) {
  return (
    <div className="flex items-center justify-between font-mono uppercase tracking-[0.16em] text-white/70" style={{ fontSize: tamano }}>
      <span>{site.dominio}</span>
      <span>whatsapp · {site.whatsappTexto}</span>
    </div>
  );
}

export default async function Pieza({ params }: PageProps<"/piezas/[pieza]">) {
  const { pieza } = await params;
  if (!(pieza in PIEZAS)) notFound();
  const nombre = pieza as NombrePieza;
  const { ancho, alto } = PIEZAS[nombre];

  return (
    <div
      id="pieza"
      data-pieza={nombre}
      className="malla-hero reticula relative overflow-hidden text-white"
      style={{ width: ancho, height: alto }}
    >
      {nombre === "og" && (
        <div className="relative grid h-full grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col justify-between p-16">
            <Marca tamano={48} />
            <div>
              <p className="mb-5 inline-flex whitespace-nowrap rounded-full border border-white/25 bg-white/10 px-5 py-2 font-mono text-[17px] uppercase tracking-[0.14em]">
                Bolsa de empleo gratuita · Venezuela
              </p>
              <h1 className="font-display text-[64px] font-bold leading-[1.02]">
                Empleos remotos o presenciales,{" "}
                <span className="bg-gradient-to-r from-[#ffb074] via-naranja to-[#ff9a4d] bg-clip-text text-transparent">pensados para ti</span>
              </h1>
              <p className="mt-6 max-w-[34ch] text-[26px] font-medium text-white/85">
                Regístrate gratis y te avisamos cuando haya una oportunidad para ti.
              </p>
            </div>
            <Garantias tamano={19} />
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-azul-vivo/50 blur-3xl" aria-hidden="true" />
            <Image src="/luca.webp" alt="" width={514} height={895} priority className="absolute bottom-0 left-1/2 h-[98%] w-auto -translate-x-1/2 object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,.45)]" />
          </div>
        </div>
      )}

      {nombre === "cuadrado" && (
        <div className="relative flex h-full flex-col justify-between p-20">
          <Marca tamano={56} />
          <div className="relative z-10 max-w-[560px]">
            <p className="mb-6 inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-2 font-mono text-[20px] uppercase tracking-[0.14em]">
              Vacantes nuevas cada semana
            </p>
            <h1 className="font-display text-[84px] font-bold leading-[0.98]">
              ¿Buscas <span className="bg-gradient-to-r from-[#ffb074] via-naranja to-[#ff9a4d] bg-clip-text text-transparent">trabajo</span> en Venezuela?
            </h1>
            <p className="mt-8 max-w-[22ch] text-[30px] font-medium text-white/85">
              Te registras una vez. Cuando haya algo para ti, te escribimos.
            </p>
            <div className="mt-10">
              <Boton tamano={30}>Regístrate gratis en {site.dominio}</Boton>
            </div>
          </div>
          <Image src="/luca.webp" alt="" width={514} height={895} priority className="absolute -right-6 bottom-0 h-[72%] w-auto object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,.45)]" />
          <div className="relative z-10 flex flex-col gap-6">
            <Garantias tamano={24} />
            <Pie tamano={18} />
          </div>
        </div>
      )}

      {nombre === "historia" && (
        <div className="relative flex h-full flex-col justify-between p-20 pb-24">
          <div className="flex flex-col gap-12">
            <Marca tamano={64} />
            <div>
              <p className="mb-7 inline-flex rounded-full border border-white/25 bg-white/10 px-6 py-3 font-mono text-[24px] uppercase tracking-[0.14em]">
                Bolsa de empleo gratuita
              </p>
              <h1 className="max-w-[9ch] font-display text-[100px] font-bold leading-[0.96]">
                Empleos remotos o presenciales,{" "}
                <span className="bg-gradient-to-r from-[#ffb074] via-naranja to-[#ff9a4d] bg-clip-text text-transparent">pensados para ti</span>
              </h1>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-azul-vivo/50 blur-3xl" aria-hidden="true" />
            <Image src="/luca.webp" alt="" width={514} height={895} priority className="absolute bottom-0 left-1/2 h-[90%] w-auto -translate-x-1/2 object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,.45)]" />
            <p className="absolute left-0 top-[22%] max-w-[340px] rounded-[28px] rounded-bl-md bg-white px-7 py-5 text-[28px] font-bold leading-tight text-tinta shadow-flotante">
              Hola, soy Luca. Cuando haya algo para ti, te aviso yo.
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-10">
            <Boton tamano={38}>Regístrate gratis · {site.dominio}</Boton>
            <Garantias tamano={28} />
            <Pie tamano={20} />
          </div>
        </div>
      )}
    </div>
  );
}
