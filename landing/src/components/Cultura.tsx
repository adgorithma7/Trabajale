import Image from "next/image";
import { site } from "@/config/site";
import { Seccion, Titulo, Eyebrow } from "./Seccion";
import { Tilt } from "./Tilt";
import { Revelar } from "./Revelar";
import { IconoCampana, IconoCandado, IconoCheck, IconoEscudo, IconoTelegram } from "./Iconos";

/**
 * Reel vertical de 30 s (3,5 MB), servido desde este mismo sitio: public/reel.mp4.
 */
const REEL = "/reel.mp4";

const creencias = [
  "Buscar trabajo no debería costar dinero.",
  "Nadie debería entregar su cédula para que lo tomen en cuenta.",
  "Una respuesta honesta vale más que una promesa bonita.",
];

const principios = [
  {
    icono: IconoCheck,
    titulo: "Hablamos claro",
    texto: "Sin letra pequeña ni promesas de empleo seguro. Si no hay nada para ti todavía, te lo decimos.",
  },
  {
    icono: IconoCampana,
    titulo: "Te buscamos nosotros",
    texto: "No tienes que revisar cien páginas. Te registras una vez y, cuando aparece algo, te escribimos.",
  },
  {
    icono: IconoEscudo,
    titulo: "Nunca cobramos",
    texto: "Ni por registrarte ni por conseguirte empleo. Es la regla que más repetimos y la que nunca rompemos.",
  },
  {
    icono: IconoCandado,
    titulo: "Tus datos son tuyos",
    texto: "Pedimos lo mínimo, no los compartimos sin tu permiso y los borramos cuando tú lo pidas.",
  },
];

const comoTrabajamos = [
  { paso: "Escuchamos", texto: "Leemos cada registro. No hay filtros automáticos que te descarten por una palabra." },
  { paso: "Proponemos", texto: "Solo te escribimos cuando una vacante encaja de verdad con lo que nos contaste." },
  { paso: "Acompañamos", texto: "Una persona del equipo te explica el puesto antes de pasar tu perfil a la empresa." },
];

const charla = [
  { de: "persona", texto: "Hola, ¿esto es de verdad gratis?" },
  {
    de: "luca",
    texto: "Sí. Nunca te vamos a pedir dinero ni documentos. Las empresas cubren nuestro servicio, no tú.",
  },
  { de: "persona", texto: "¿Y si no hay nada para mi perfil?" },
  {
    de: "luca",
    texto: "Te lo digo sin rodeos y te aviso en cuanto salga algo. Mientras, en el canal @trabajale ves todas las vacantes nuevas.",
  },
];

function AvatarLuca({ tamano = 36 }: { tamano?: number }) {
  return (
    <span className="relative flex-none overflow-hidden rounded-full bg-azul" style={{ width: tamano, height: tamano }}>
      <Image src="/luca.webp" alt="" width={64} height={111} className="absolute left-1/2 top-[6%] h-[140%] w-auto -translate-x-1/2 object-cover object-top" />
    </span>
  );
}

export function Cultura() {
  return (
    <Seccion id="cultura" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-azul/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-naranja/10 blur-3xl" aria-hidden="true" />

      <Titulo
        eyebrow="Nuestra cultura"
        descripcion="Somos un equipo pequeño en Venezuela que conecta personas con empresas que necesitan gente. Luca es nuestra cara y nuestra forma de hablar: directa, honesta y cercana."
      >
        Una bolsa de empleo con cara, nombre y palabra
      </Titulo>

      {/* Manifiesto */}
      <Revelar>
        <div className="malla-hero reticula relative overflow-hidden rounded-[30px] p-7 text-white shadow-flotante md:p-12">
          <div className="relative grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
            <div>
              <Eyebrow claro>En lo que creemos</Eyebrow>
              <p className="font-display text-[1.9rem] font-bold leading-[1.08] md:text-[2.7rem]">
                Conseguir trabajo no debería costar dinero, ni dignidad, ni semanas de silencio.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {creencias.map((c, i) => (
                  <li key={c} className="flex items-start gap-3 text-[17px] font-medium text-white/90">
                    <span className="mt-0.5 font-mono text-[12px] text-naranja">{String(i + 1).padStart(2, "0")}</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 md:items-end md:text-right">
              <p className="max-w-[30ch] text-[15px] text-white/75">
                Por eso trabajamos gratis para quien busca empleo, pedimos solo lo imprescindible y respondemos aunque la respuesta sea &quot;todavía no&quot;.
              </p>
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 md:flex-row-reverse">
                <AvatarLuca tamano={44} />
                <div className="md:text-right">
                  <p className="font-display text-[15px] font-bold leading-tight">Equipo Trabájale</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">Venezuela · desde 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Revelar>

      {/* Principios */}
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {principios.map(({ icono: Icono, titulo, texto }, i) => (
          <Revelar as="li" key={titulo} retraso={i * 70} className="min-w-0">
            <div className="tarjeta invertible h-full overflow-hidden p-5">
              <span className="marca-agua inv-marca" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <span className="inv-icono relieve relative grid h-12 w-12 place-items-center rounded-2xl bg-azul text-white transition-colors">
                <Icono size={24} />
              </span>
              <h3 className="inv-titulo mt-4 font-display text-[19px] font-bold leading-snug text-tinta">{titulo}</h3>
              <p className="inv-texto mt-1.5 text-[15px] text-gris">{texto}</p>
            </div>
          </Revelar>
        ))}
      </ul>

      {/* Cómo trabajamos + Luca */}
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
        <div className="flex flex-col gap-6">
          <Revelar>
            <div className="tarjeta p-6 sm:p-8">
              <Eyebrow>Cómo trabajamos</Eyebrow>
              <ol className="grid gap-6 sm:grid-cols-3">
                {comoTrabajamos.map((c, i) => (
                  <li key={c.paso} className="relative border-l-2 border-azul-claro pl-4 sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-naranja">paso {i + 1}</span>
                    <h3 className="mt-1 font-display text-[19px] font-bold text-tinta">{c.paso}</h3>
                    <p className="mt-1.5 text-[15px] text-gris">{c.texto}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Revelar>

          <Revelar retraso={100}>
            <div className="tarjeta p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-gris">Una conversación típica</p>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-gris">
                  <IconoTelegram size={14} className="text-telegram" />
                  {site.telegramUsuario}
                </span>
              </div>
              <ol className="mt-4 flex flex-col gap-3">
                {charla.map((m, i) => (
                  <li key={i} className={`flex items-end gap-2.5 ${m.de === "persona" ? "justify-end" : ""}`}>
                    {m.de === "luca" && <AvatarLuca />}
                    <p
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[15px] leading-snug ${
                        m.de === "luca" ? "rounded-bl-md bg-azul text-white" : "rounded-br-md bg-azul-suave text-tinta"
                      }`}
                    >
                      {m.texto}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Revelar>
        </div>

        <div className="flex flex-col gap-6">
          <Revelar>
            <Tilt className="overflow-hidden rounded-[28px] bg-gradient-to-br from-azul-vivo via-azul to-azul-oscuro text-white shadow-tarjeta">
              <div className="relative grid grid-cols-[1fr_auto] items-end gap-3 p-6 pb-0">
                <div className="pb-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/70">Equipo Trabájale</p>
                  <p className="mt-1 font-display text-3xl font-bold leading-none">Luca</p>
                  <p className="mt-2 max-w-[22ch] text-[15px] font-medium text-white/85">
                    Es quien te escribe. Detrás hay personas que leen tu registro y te acompañan.
                  </p>
                  <blockquote className="mt-4 border-l-4 border-naranja pl-3 text-[15px] font-bold leading-snug">
                    “Prefiero decirte que todavía no hay nada, a prometerte algo que no es.”
                  </blockquote>
                </div>
                <Image
                  src="/luca.webp"
                  alt="Luca, asistente del equipo de Trabájale"
                  width={514}
                  height={895}
                  sizes="200px"
                  className="h-[230px] w-auto self-end object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,.35)]"
                />
              </div>
            </Tilt>
          </Revelar>

          <Revelar retraso={120}>
            <div className="perspectiva">
              <Tilt className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[26px] bg-black shadow-flotante" max={5}>
                <video controls playsInline preload="metadata" poster="/poster.jpg" src={REEL} className="block aspect-[9/16] h-auto w-full" />
              </Tilt>
              <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-gris">Míralo en 30 segundos</p>
            </div>
          </Revelar>
        </div>
      </div>
    </Seccion>
  );
}
