"use client";
import { useRevealOnScroll } from "../../lib/useRevealOnScroll";

const highlights = [
  {
    title: "Administrare SEAP cap‑coadă",
    desc: "De la deschiderea contului până la publicarea produselor și monitorizarea oportunităților.",
  },
  {
    title: "Documentație impecabilă",
    desc: "Transformăm cerințele legale în livrabile clare, ușor de validat de către echipa ta.",
  },
  {
    title: "Suport continuu",
    desc: "Rămânem alături de tine pe tot parcursul procedurii și gestionăm comunicarea cu autoritățile.",
  },
  {
    title: "Lucrăm 100% online",
    desc: "Coordonăm întâlniri, aprobări și livrabile la distanță, astfel încât proiectul să avanseze rapid.",
  },
];

export default function HomeHighlights() {
  const ref = useRevealOnScroll();
  return (
    <section ref={ref} className="px-10 py-16">
      <p className="tracking-[0.4em] text-xs opacity-50 reveal reveal-up">
        DE CE ACHIP CONSULTING
      </p>
      <h2 className="text-3xl mt-3 reveal reveal-delay-1">Tot ce ai nevoie pentru proceduri sigure</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {highlights.map((item, idx) => (
          <article
            key={item.title}
            className={`border border-[#ededed]/12 rounded-3xl p-6 card-hover reveal ${
              idx % 2 === 0 ? "reveal-left" : "reveal-right"
            }`}
            style={{ transitionDelay: `${idx * 70}ms` }}
          >
            <h3 className="text-xl">{item.title}</h3>
            <p className="opacity-70 mt-3 text-sm leading-relaxed">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}


