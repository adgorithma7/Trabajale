import { site } from "@/config/site";
import { Boton } from "./Boton";
import { Seccion, Titulo } from "./Seccion";
import { Pasos } from "./Pasos";
import { IconoWhatsApp } from "./Iconos";

export function ComoFunciona() {
  return (
    <Seccion id="como-funciona">
      <Titulo
        eyebrow="Así funciona"
        descripcion="Cuatro pasos y sin trámites. Tú te registras una sola vez y nosotros hacemos el resto. Toca cada paso para ver cómo se ve en la práctica."
      >
        Conseguir empleo no debería ser otro trabajo
      </Titulo>

      <Pasos />

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Boton href={site.formulario} evento="Lead">
          Empezar mi registro
        </Boton>
        <Boton href={site.whatsappVacantes} variante="whatsapp" evento="Contact">
          <IconoWhatsApp />
          Escribirnos por WhatsApp
        </Boton>
      </div>
    </Seccion>
  );
}
