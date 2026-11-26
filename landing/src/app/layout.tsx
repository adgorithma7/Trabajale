import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Movimiento } from "@/components/Movimiento";

/**
 * Tres roles tipográficos:
 * - Outfit: titulares y cifras grandes (geométrica, moderna, cercana).
 * - Plus Jakarta Sans: texto corrido y botones (muy legible en celular).
 * - DM Mono: etiquetas, números de paso, horas y chips (toque técnico, de producto).
 */
const display = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});
const cuerpo = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
const mono = DM_Mono({
  variable: "--font-dmmono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nombre} | Empleos remotos o presenciales en Venezuela`,
    template: `%s | ${site.nombre}`,
  },
  description: site.descripcion,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.nombre,
    locale: "es_VE",
    url: site.url,
    title: `${site.nombre}: empleos remotos o presenciales en Venezuela`,
    description:
      "Regístrate gratis y te avisamos cuando haya una oportunidad para ti. No tiene costo.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Trabájale: regístrate gratis y te avisamos cuando haya una oportunidad.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.nombre}: empleos remotos o presenciales en Venezuela`,
    description:
      "Regístrate gratis y te avisamos cuando haya una oportunidad para ti. No tiene costo.",
    images: ["/og.png"],
  },
  other: {
    "facebook-domain-verification": "3relvzim658yat4s6wmy69wkwogeqq",
  },
};

export const viewport = {
  themeColor: "#1F4FD8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={cn("h-full font-sans", display.variable, cuerpo.variable, mono.variable)}>
      <body className="min-h-full flex flex-col">
        <Movimiento>{children}</Movimiento>
        {/* Aviso de cookies y Pixel de Meta: solo carga el Pixel si la persona acepta. Ver public/consent.js */}
        <Script src="/consent.js?v=1" strategy="afterInteractive" />
        {/* Eventos del Pixel: usa data-evento del enlace (Lead, Contact); si no lo tiene, lo deduce del destino. Sin Pixel no hace nada. */}
        <Script id="eventos-pixel" strategy="afterInteractive">
          {`document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href]");if(!a||typeof window.tev!=="function")return;var ev=a.getAttribute("data-evento"),h=a.href;if(!ev){if(/forms\\.gle|docs\\.google\\.com\\/forms/.test(h))ev="Lead";else if(/wa\\.me\\//.test(h))ev="Contact";}if(ev)window.tev(ev);});`}
        </Script>
      </body>
    </html>
  );
}
