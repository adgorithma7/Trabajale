import { site } from "@/config/site";
import { Boton } from "./Boton";
import { Seccion, Titulo } from "./Seccion";
import { IconoWhatsApp } from "./Iconos";

const beneficios = [
  {
    titulo: "Candidatos ya conversados",
    texto: "Antes de presentarte a alguien, una persona del equipo habló con esa persona y confirmó que le interesa el puesto.",
  },
  {
    titulo: "Remoto o presencial",
    texto: "Reclutamos para puestos desde casa o en tu ciudad, a tiempo completo o parcial, en toda Venezuela.",
  },
  {
    titulo: "Trato directo",
    texto: "Nos escribes, nos cuentas la vacante y nos encargamos. Sin plataformas que aprender ni planes que no necesitas.",
  },
];

export function Empresas() {
  return (
    <Seccion id="empresas">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <Titulo
            eyebrow="Para empresas"
            descripcion="Si tu empresa necesita personal en Venezuela, cuéntanos la vacante. Nosotros la publicamos, buscamos y preseleccionamos."
          >
            ¿Buscas gente para tu equipo?
          </Titulo>
          <div className="-mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Boton href={site.whatsappEmpresas} variante="whatsapp" evento="Contact">
              <IconoWhatsApp />
              Escribirnos por WhatsApp
            </Boton>
          </div>
        </div>
        <ul className="flex flex-col gap-3">
          {beneficios.map((b, i) => (
            <li key={b.titulo} className="tarjeta subrayable flex gap-4 overflow-hidden p-5">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-azul font-mono text-[15px] text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="sub-titulo font-display text-[18px] font-bold text-tinta">{b.titulo}</h3>
                <p className="mt-1 text-gris">{b.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Seccion>
  );
}
