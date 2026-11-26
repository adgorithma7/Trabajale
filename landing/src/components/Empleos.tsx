import { site } from "@/config/site";
import { categorias, type Zona } from "@/data/vacantes";
import { VacantesLista } from "./VacantesLista";
import { Boton } from "./Boton";
import { Seccion, Titulo } from "./Seccion";
import { Revelar } from "./Revelar";
import { IconoDeCategoria, IconoTelegram } from "./Iconos";

export function Empleos({ zona = "venezuela" }: { zona?: Zona }) {
  return (
    <Seccion id="empleos" fondo="azul-claro">
      <Titulo
        eyebrow="Oportunidades"
        descripcion="Las vacantes nuevas se publican en el canal de Telegram. Aquí te mostramos las destacadas y los tipos de empleo que solemos publicar."
      >
        Empleos para empezar ya, remotos o en tu ciudad
      </Titulo>

      <VacantesLista zona={zona} />

      <p className="mt-4 text-sm text-gris">
        Las empresas se muestran como confidenciales hasta que hablamos contigo. Trabájale no es el
        empleador: las condiciones de cada puesto las fija la empresa.
      </p>

      <div className="mt-14">
        <h3 className="font-display text-2xl font-bold text-azul">¿Qué tipo de empleo buscas?</h3>
        <p className="mt-2 max-w-2xl text-gris">
          Estas son las áreas donde más oportunidades publicamos. Si la tuya no aparece, regístrate
          igual: nos cuentas tu experiencia y te avisamos si surge algo.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categorias.map((c, i) => (
            <Revelar as="li" key={c.nombre} retraso={i * 50} className="min-w-0">
              <a
                href={site.formulario}
                target="_blank"
                rel="noopener"
                className="tarjeta invertible flex h-full flex-col gap-4 p-4"
              >
                <span className="flex items-center justify-between">
                  <span className="inv-icono relieve grid h-11 w-11 place-items-center rounded-xl bg-azul text-white transition-colors">
                    <IconoDeCategoria icono={c.icono} />
                  </span>
                  <span className="inv-flecha text-lg leading-none text-azul transition-transform" aria-hidden="true">→</span>
                </span>
                <span className="min-w-0">
                  <span className="inv-titulo block font-display text-[16px] font-bold leading-tight text-tinta">{c.nombre}</span>
                  <span className="inv-texto mt-1 block text-[13px] leading-snug text-gris">{c.detalle}</span>
                </span>
              </a>
            </Revelar>
          ))}
        </ul>
      </div>

      <div className="malla-hero mt-10 flex flex-col items-start gap-4 overflow-hidden rounded-[26px] p-6 text-white shadow-flotante sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="font-display text-xl font-bold">¿No ves nada para ti todavía?</p>
          <p className="text-white/80">
            Cada semana publicamos vacantes nuevas en el canal. Únete y te enteras primero.
          </p>
        </div>
        <Boton href={site.telegram} variante="blanco" className="flex-none">
          <IconoTelegram className="text-telegram" />
          Ir al canal {site.telegramUsuario}
        </Boton>
      </div>
    </Seccion>
  );
}
