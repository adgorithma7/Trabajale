import { site } from "@/config/site";
import { Boton } from "./Boton";
import { Seccion, Titulo } from "./Seccion";
import { Pasos } from "./Pasos";
import { IconoTelegram } from "./Iconos";

export function ComoFunciona() {
  return (
    <Seccion id="como-funciona">
      <Titulo
        eyebrow="Así funciona"
        descripcion="Cuatro pasos, sin trámites ni letra pequeña. Tú te registras una sola vez y nosotros hacemos el resto. Toca cada paso para ver cómo se ve en la práctica."
      >
        Conseguir empleo no debería ser otro trabajo
      </Titulo>

      <Pasos />

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Boton href={site.formulario} evento="Lead">
          Empezar mi registro
        </Boton>
        <Boton href={site.telegram} variante="telegram" evento="Canal">
          <IconoTelegram className="text-telegram" />
          Unirme al canal
        </Boton>
      </div>
    </Seccion>
  );
}
