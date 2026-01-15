"use client";
import { useRevealOnScroll } from "../../lib/useRevealOnScroll";

const packages = [
  {
    name: "START",
    subtitle: "Prezență în SEAP",
    focus: "Pentru firme aflate la început",
  },
  {
    name: "ACTIVE",
    subtitle: "Cumpărări directe & catalog",
    focus: "Pentru companii deja vizibile în SEAP",
  },
  {
    name: "PRO",
    subtitle: "Participare la proceduri",
    focus: "Pentru licitații și proceduri simplificate",
  },
  {
    name: "COMPLEX",
    subtitle: "Proceduri avansate",
    focus: "Pentru proiecte cu grad ridicat de complexitate",
  },
];

export default function HomePackagesPreview() {
  const ref = useRevealOnScroll();
  return (
    <section ref={ref} className="px-10 py-16" id="pachete-home">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal reveal-up">
        <div>
          <p className="tracking-[0.4em] text-xs opacity-50">PACHETE ORIENTATIVE</p>
          <h2 className="text-3xl mt-3">Alegi nivelul de suport potrivit</h2>
        </div>
        <a href="/services" className="px-5 py-2 rounded-full btn-outline self-start md:self-auto">
          Vezi toate detaliile
        </a>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {packages.map((pack, idx) => (
          <article
            key={pack.name}
            className={`border border-[#ededed]/12 rounded-3xl p-6 flex flex-col gap-2 card-hover reveal ${
              idx % 2 === 0 ? "reveal-left" : "reveal-right"
            }`}
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <div className="text-sm opacity-60">{pack.subtitle}</div>
            <h3 className="text-2xl">{pack.name}</h3>
            <p className="opacity-70 text-sm">{pack.focus}</p>
            <div className="mt-4 text-xs uppercase tracking-[0.3em] opacity-50">
              Livrabile detaliate în pagina de servicii
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


