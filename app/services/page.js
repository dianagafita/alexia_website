"use client";
import { useRevealOnScroll } from "../lib/useRevealOnScroll";
import ServicesPreview from "../components/homePage/ServicesPreview";
import AboutUsContent from "../components/homePage/aboutUsContent";
import CaseStudies from "../components/homePage/CaseStudies";
import FAQ from "../components/homePage/FAQ";

export default function ServicesPage() {
  const ref = useRevealOnScroll();

  return (
    <main ref={ref} className="flex flex-col min-h-screen font-sans pt-20">
      <section className="px-10 py-16">
        <p className="tracking-widest text-xs opacity-60 reveal reveal-up">
          CONSULTANȚĂ ACHIZIȚII PUBLICE
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl leading-tight max-w-4xl reveal reveal-delay-1">
          Servicii complete pentru operatorii economici care vor rezultate în SEAP
        </h1>
        <p className="mt-5 opacity-80 max-w-3xl reveal reveal-delay-2 reveal-left">
          Acoperim administrarea SEAP, pregătirea dosarelor, participarea la proceduri și suportul continuu – totul online,
          cu pași clari și termene asumate. Alegi pachetul potrivit sau construim o soluție personalizată pentru proiectul
          tău.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 reveal reveal-delay-3 reveal-right">
          <a href="/contact" className="px-5 py-2 rounded-full btn-outline">
            Solicită ofertă
          </a>
          <a href="#pachete" className="px-5 py-2 rounded-full btn-outline">
            Vezi pachetele
          </a>
        </div>
      </section>
      <ServicesPreview />
      <AboutUsContent />
      <CaseStudies />
      <FAQ />
      <section className="px-10 pb-16 -mt-8 reveal">
        <div className="rounded-3xl border border-[#ededed]/15 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 card-hover reveal reveal-scale">
          <div className="reveal reveal-left">
            <h3 className="text-2xl">Ai un proiect în plan?</h3>
            <p className="opacity-70 mt-2 max-w-2xl">
              Spune-ne ce îți dorești, iar noi îți trimitem rapid pașii, livrabilele și resursele necesare pentru o procedură
              fără stres.
            </p>
          </div>
          <a href="/contact" className="px-5 py-2 rounded-full btn-outline reveal reveal-right">
            Trimite brief-ul
          </a>
        </div>
      </section>
    </main>
  );
}
