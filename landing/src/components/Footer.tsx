import Link from "next/link";
import { nav, site } from "@/config/site";
import { Marca } from "./Logo";
import { IconoWhatsApp } from "./Iconos";

export function Footer() {
  return (
    <footer className="bg-tinta text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Marca claro />
          <p className="mt-4 max-w-sm text-white/75">
            Bolsa de empleo gratuita para Venezuela. Te registras una vez y te avisamos por WhatsApp cuando haya una
            oportunidad, remota o presencial, que encaje con tu perfil.
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">gratis · sin documentos · mayores de 18</p>
        </div>

        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/60">Secciones</p>
          <ul className="mt-3 flex flex-col gap-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={`/${n.href}`} className="font-semibold text-white/85 hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/privacidad" className="font-semibold text-white/85 hover:text-white">
                Política de privacidad
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/60">Contacto</p>
          <ul className="mt-3 flex flex-col gap-3">
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener" data-evento="Contact" className="flex items-center gap-2 font-semibold text-white/85 hover:text-white">
                <IconoWhatsApp size={20} className="text-[#25d366]" />
                WhatsApp {site.whatsappTexto}
              </a>
            </li>
          </ul>
          <p className="mt-4 max-w-[28ch] text-[13px] text-white/60">
            Solo escribimos desde el WhatsApp {site.whatsappNumero}. Si te escriben desde otro lado en nuestro nombre, no somos nosotros.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 {site.nombre}. Registrarte es gratis y no garantiza un empleo.</p>
          <p>Trabájale no es el empleador. Las condiciones de cada puesto las fija la empresa.</p>
        </div>
      </div>
    </footer>
  );
}
