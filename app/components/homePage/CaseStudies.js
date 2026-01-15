 "use client";
import { useRevealOnScroll } from "../../lib/useRevealOnScroll";

const packages = [
  {
    name: "Pachet START – Prezență în SEAP",
    subtitle: "Ideal pentru companii la început de drum",
    features: [
      "Deschidere cont SEAP",
      "Configurare cont operator economic",
      "Publicare produse în catalogul electronic",
      "Ghidare inițială privind utilizarea SEAP",
    ],
    note: "Ideal pentru companii care vor să fie vizibile și eligibile pentru cumpărări directe.",
  },
  {
    name: "Pachet ACTIVE – Cumpărări directe & catalog",
    subtitle: "Pentru firme deja active în SEAP",
    features: [
      "Administrare catalog produse",
      "Acceptare și gestionare cumpărări directe",
      "Monitorizare anunțuri relevante",
      "Notificări personalizate",
    ],
    note: "Potrivit pentru firme care doresc continuitate și reacție rapidă.",
  },
  {
    name: "Pachet PRO – Participare la proceduri",
    subtitle: "Pentru firme care participă frecvent la licitații",
    features: [
      "Studierea documentației de atribuire",
      "Analiză și raport privind șansele de participare",
      "Întocmire solicitări de clarificări",
      "Elaborare ofertă tehnică și financiară",
      "Asistență pe toată durata procedurii",
    ],
    note: "Recomandat pentru proceduri simplificate și licitații deschise.",
  },
  {
    name: "Pachet COMPLEX – Proceduri avansate",
    subtitle: "Pentru proiecte cu grad ridicat de complexitate",
    features: [
      "Proceduri de negociere fără publicare",
      "Achiziții de lucrări",
      "Gestionare multiplă documentație",
      "Suport dedicat și comunicare cu autoritatea contractantă",
    ],
    note: "Soluție personalizată, adaptată fiecărui proiect.",
  },
];

export default function CaseStudies() {
  const ref = useRevealOnScroll();

  return (
    <section ref={ref} id="pachete" className="px-10 py-16">
      <p className="tracking-[0.4em] text-xs opacity-50 reveal">PACHETE ORIENTATIVE</p>
      <h2 className="text-3xl mt-3 reveal">Alege nivelul de suport potrivit etapei în care ești</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {packages.map((item, idx) => (
          <article
            key={item.name}
            className="border border-[#ededed]/15 rounded-3xl p-6 flex flex-col h-full card-hover reveal"
            style={{ transitionDelay: `${idx * 40}ms` }}
          >
            <div>
              <h3 className="text-2xl">{item.name}</h3>
              <p className="opacity-60 mt-1">{item.subtitle}</p>
              <ul className="mt-5 space-y-2 text-sm opacity-80 list-disc list-inside">
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <p className="mt-5 text-sm opacity-80">{item.note}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 border border-dashed border-[#ededed]/30 rounded-3xl p-6 md:p-8 reveal reveal-delay-3">
        <h3 className="text-2xl">⭐ Servicii personalizate</h3>
        <p className="opacity-80 mt-3">
          Ai nevoie de un serviciu punctual sau de o combinație diferită? Construim un pachet adaptat obiectivelor tale și
          resurselor disponibile.
        </p>
      </div>
    </section>
  );
}

