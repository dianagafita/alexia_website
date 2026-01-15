"use client";
import { useRevealOnScroll } from "../../lib/useRevealOnScroll";

const steps = [
  {
    label: "1",
    title: "Analiză & prioritizare",
    desc: "Înțelegem obiectivele, calendarul și resursele pe care te bazezi.",
  },
  {
    label: "2",
    title: "Soluție personalizată",
    desc: "Recomandăm pachetul potrivit și livrabilele cu termene clare.",
  },
  {
    label: "3",
    title: "Implementare & documente",
    desc: "Configurăm SEAP, pregătim documentația și comunicăm cu autoritățile.",
  },
  {
    label: "4",
    title: "Depunere & suport",
    desc: "Depunem oferta și rămânem disponibili până la decizia finală.",
  },
];

export default function HomeProcessPreview() {
  const ref = useRevealOnScroll();
  return (
    <section ref={ref} className="px-10 py-16">
      <div className="rounded-3xl border border-[#ededed]/15 p-6 md:p-8 reveal reveal-scale">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="tracking-[0.4em] text-xs opacity-50">PROCES CLAR</p>
            <h2 className="text-3xl mt-3">Workflow rapid, 100% online</h2>
          </div>
          <a href="/contact" className="px-5 py-2 rounded-full btn-outline self-start md:self-auto">
            Programează o discuție
          </a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {steps.map((step, idx) => (
            <article
              key={step.title}
              className={`border border-[#ededed]/10 rounded-2xl p-5 card-hover reveal ${
                idx % 2 === 0 ? "reveal-left" : "reveal-right"
              }`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <div className="text-sm opacity-60">Pasul {step.label}</div>
              <h3 className="text-xl mt-1">{step.title}</h3>
              <p className="opacity-70 mt-2 text-sm leading-relaxed">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


