import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Variante = "naranja" | "telegram" | "blanco" | "whatsapp" | "azul-borde" | "vidrio";

/**
 * Botón de la marca construido sobre el Button de shadcn/ui (foco, estados y slot `asChild`),
 * con las variantes de Trabájale. Al pasar el cursor invierte el color; nunca se aclara.
 */
const variantes: Record<Variante, string> = {
  naranja:
    "bg-gradient-to-b from-[#ff9550] to-naranja text-white shadow-naranja hover:from-naranja hover:to-naranja-oscuro focus-visible:ring-white/60",
  vidrio: "vidrio text-white hover:bg-white/15 focus-visible:ring-white/60",
  telegram: "border-2 border-azul bg-white text-azul hover:bg-azul hover:text-white",
  blanco: "bg-white text-azul hover:bg-tinta hover:text-white",
  whatsapp: "border-2 border-verde bg-white text-verde-oscuro hover:bg-verde hover:text-white",
  "azul-borde": "border-2 border-white/70 bg-transparent text-white hover:bg-white/10",
};

interface Props {
  href: string;
  variante?: Variante;
  children: ReactNode;
  className?: string;
  externo?: boolean;
  /** Nombre del evento para medición (Lead, Contact, Canal). */
  evento?: string;
  tamano?: "md" | "lg";
}

export function Boton({ href, variante = "naranja", children, className, externo = true, evento, tamano = "lg" }: Props) {
  return (
    <Button
      asChild
      className={cn(
        "h-auto gap-2.5 rounded-boton font-bold transition-[background-color,transform,box-shadow,color] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] [&_svg:not([class*='size-'])]:size-5",
        tamano === "lg" ? "min-h-14 px-6 py-3.5 text-lg" : "min-h-11 px-4 py-2 text-base",
        variantes[variante],
        className,
      )}
    >
      <a href={href} data-evento={evento} {...(externo ? { target: "_blank", rel: "noopener" } : {})}>
        {children}
      </a>
    </Button>
  );
}
