import type { Metadata } from "next";

/** Piezas gráficas (OG, anuncios). No se indexan ni se enlazan: se renderizan a PNG con tests/herramientas/piezas.mjs */
export const metadata: Metadata = {
  title: "Piezas gráficas",
  robots: { index: false, follow: false },
};

export default function PiezasLayout({ children }: LayoutProps<"/piezas">) {
  return <div className="min-h-full bg-[#e9edf7] p-6">{children}</div>;
}
