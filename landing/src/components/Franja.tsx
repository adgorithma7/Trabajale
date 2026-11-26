/**
 * Franja en movimiento continuo bajo el hero: las áreas de empleo y las promesas del servicio.
 * Solo CSS (transform), se pausa al pasar el cursor y se detiene con "reducir movimiento".
 */
const elementos = [
  "Atención al cliente",
  "Gratis, siempre",
  "Ventas",
  "Sin documentos",
  "Administración",
  "Te avisamos por WhatsApp",
  "Soporte técnico",
  "Mayores de 18",
  "Trabajo remoto",
  "Presencial en tu ciudad",
];

function Fila({ oculta = false }: { oculta?: boolean }) {
  return (
    <ul className="flex flex-none items-center gap-8 pr-8" aria-hidden={oculta || undefined}>
      {elementos.map((t, i) => (
        <li key={t} className="flex items-center gap-8 whitespace-nowrap font-display text-[1.35rem] font-bold text-tinta md:text-[1.6rem]">
          <span className={i % 2 ? "text-azul" : ""}>{t}</span>
          <span className="h-2.5 w-2.5 flex-none rotate-45 rounded-[3px] bg-naranja" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

export function Franja() {
  return (
    <div className="franja group relative overflow-hidden border-y border-gris-claro bg-white py-5" aria-label="Áreas y compromisos de Trabájale">
      <div className="franja-pista flex w-max">
        <Fila />
        <Fila oculta />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" aria-hidden="true" />
    </div>
  );
}
