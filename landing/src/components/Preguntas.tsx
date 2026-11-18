import { preguntas } from "@/data/faq";
import { Seccion, Titulo } from "./Seccion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/** Preguntas frecuentes con el acordeón de shadcn/ui (Radix: teclado, ARIA y animación de altura). */
export function Preguntas() {
  return (
    <Seccion id="preguntas" fondo="azul-claro">
      <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
        <Titulo
          eyebrow="Preguntas frecuentes"
          descripcion="Si tu duda no está aquí, escríbenos en el canal de Telegram y te respondemos."
        >
          Lo que más nos preguntan
        </Titulo>
        <Accordion type="single" collapsible defaultValue="p-0" className="gap-3">
          {preguntas.map((item, i) => (
            <AccordionItem
              key={item.p}
              value={`p-${i}`}
              className="tarjeta subrayable overflow-hidden border-b-0 data-open:border-azul"
            >
              <AccordionTrigger className="items-center gap-4 rounded-none px-5 py-4 font-display text-[18px] font-bold text-tinta hover:no-underline focus-visible:border-transparent focus-visible:ring-0 **:data-[slot=accordion-trigger-icon]:size-8 **:data-[slot=accordion-trigger-icon]:flex-none **:data-[slot=accordion-trigger-icon]:rounded-full **:data-[slot=accordion-trigger-icon]:bg-azul-claro **:data-[slot=accordion-trigger-icon]:p-1.5 **:data-[slot=accordion-trigger-icon]:text-azul aria-expanded:**:data-[slot=accordion-trigger-icon]:bg-azul aria-expanded:**:data-[slot=accordion-trigger-icon]:text-white">
                <span className="sub-titulo">{item.p}</span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-[15px] text-gris">{item.r}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Seccion>
  );
}
