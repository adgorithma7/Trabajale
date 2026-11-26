import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { VolverArriba } from "@/components/VolverArriba";
import { Hero } from "@/components/Hero";
import { Franja } from "@/components/Franja";
import { Garantias } from "@/components/Garantias";
import { ComoFunciona } from "@/components/ComoFunciona";
import { WhatsApp } from "@/components/WhatsApp";
import { Cultura } from "@/components/Cultura";
import { Seguridad } from "@/components/Seguridad";
import { Empresas } from "@/components/Empresas";
import { Preguntas } from "@/components/Preguntas";
import { CtaFinal } from "@/components/CtaFinal";
import { Footer } from "@/components/Footer";
import { BarraFija } from "@/components/BarraFija";

export default function Inicio() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-tinta focus:px-4 focus:py-2 focus:font-bold focus:text-white"
      >
        Saltar al contenido
      </a>
      <Banner />
      <Header />
      <main id="contenido" className="flex-1 pb-20 md:pb-0">
        <Hero />
        <Franja />
        <Garantias />
        <ComoFunciona />
        <WhatsApp />
        <Cultura />
        <Seguridad />
        <Empresas />
        <Preguntas />
        <CtaFinal />
      </main>
      <Footer />
      <BarraFija />
      <VolverArriba />
    </>
  );
}
