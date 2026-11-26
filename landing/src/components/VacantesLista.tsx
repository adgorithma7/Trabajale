"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { vacantesPara, type Modalidad, type Zona } from "@/data/vacantes";
import { Boton } from "./Boton";
import { IconoMaletin, IconoPin, IconoReloj } from "./Iconos";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Filtro = "todas" | Modalidad;

const colorModalidad: Record<Modalidad, string> = {
  Remoto: "bg-verde-claro text-verde-oscuro",
  Presencial: "bg-naranja-claro text-naranja-oscuro",
  Híbrido: "bg-azul-claro text-azul",
};

function iniciales(nombre: string) {
  return nombre
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

/** Vacantes destacadas con filtro por modalidad (pestañas de shadcn/ui), etiquetas y tooltip en las de muestra. */
export function VacantesLista({ zona = "venezuela" }: { zona?: Zona }) {
  const vacantes = vacantesPara(zona);
  const [filtro, setFiltro] = useState<Filtro>("todas");
  const modalidades = Array.from(new Set(vacantes.map((v) => v.modalidad)));
  const visibles = vacantes.filter((v) => filtro === "todas" || v.modalidad === filtro);

  return (
    <TooltipProvider>
      <Tabs value={filtro} onValueChange={(v) => setFiltro(v as Filtro)} className="gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <TabsList aria-label="Filtrar vacantes por modalidad" className="h-auto rounded-full bg-white p-1 shadow-tarjeta">
            {(["todas", ...modalidades] as Filtro[]).map((f) => (
              <TabsTrigger
                key={f}
                value={f}
                className="h-auto rounded-full px-4 py-2 text-[14px] font-bold text-gris data-active:bg-tinta! data-active:text-white! data-active:shadow-none"
              >
                {f === "todas" ? `Todas (${vacantes.length})` : `${f} (${vacantes.filter((v) => v.modalidad === f).length})`}
              </TabsTrigger>
            ))}
          </TabsList>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gris" aria-live="polite">
            {visibles.length} {visibles.length === 1 ? "vacante" : "vacantes"}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3" role="list">
          {visibles.map((v) => (
            <article key={v.id} role="listitem" className="tarjeta subrayable entrar flex h-full flex-col overflow-hidden">
              <div className="flex items-center justify-between gap-3 border-b border-tinta/8 bg-azul-claro/60 px-5 py-3.5">
                <Badge className={`h-auto rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${colorModalidad[v.modalidad]}`}>
                  {v.modalidad}
                </Badge>
                <span className="flex items-center gap-2 font-mono text-[11px] text-gris">
                  {v.ejemplo && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button type="button" className="rounded-full border border-dashed border-gris/50 px-2 py-0.5 underline-offset-2 hover:border-azul hover:text-azul" aria-label="Qué significa ejemplo">
                          ejemplo
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="top">Vacante de muestra: así se ve una publicación real.</TooltipContent>
                    </Tooltip>
                  )}
                  {v.publicada}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-to-br from-azul-vivo to-azul-oscuro font-display text-sm font-bold text-white">
                    {iniciales(v.empresa)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-semibold text-tinta">{v.empresa}</p>
                    <p className="font-mono text-[11px] text-gris">nombre visible tras hablar contigo</p>
                  </div>
                </div>

                <h3 className="sub-titulo mt-4 font-display text-[21px] font-bold leading-tight text-tinta">{v.titulo}</h3>

                <dl className="mt-4 grid grid-cols-1 gap-2 text-[14.5px] text-tinta/85">
                  <div className="flex items-center gap-2.5">
                    <dt className="sr-only">Ubicación</dt>
                    <IconoPin size={18} className="flex-none text-azul" />
                    <dd>{v.ciudad}</dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <dt className="sr-only">Jornada</dt>
                    <IconoMaletin size={18} className="flex-none text-azul" />
                    <dd>{v.jornada}</dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <dt className="sr-only">Publicada</dt>
                    <IconoReloj size={18} className="flex-none text-azul" />
                    <dd>Publicada {v.publicada}</dd>
                  </div>
                </dl>

                <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.16em] text-gris">Lo que piden</p>
                <ul className="mt-1.5 flex flex-wrap gap-1.5">
                  {v.requisitos.map((r) => (
                    <li key={r}>
                      <Badge variant="outline" className="h-auto rounded-lg border-azul/15 bg-white px-2 py-1 text-xs font-semibold text-azul">
                        {r}
                      </Badge>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-tinta/8 pt-4">
                  <span className="font-mono text-[11px] text-gris">sin costo · 18+</span>
                  <Boton href={site.formulario} tamano="md" evento="Lead">
                    Me interesa
                  </Boton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Tabs>
    </TooltipProvider>
  );
}
