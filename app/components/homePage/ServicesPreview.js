"use client";
import { useRevealOnScroll } from "../../lib/useRevealOnScroll";

export default function ServicesPreview() {
  const ref = useRevealOnScroll();
  const highlights = [
    {
      icon: "🧾",
      title: "De la A la Z în Achiziții Publice",
      desc: "Coordonăm fiecare pas al procedurii – de la strategie, la depunerea ofertei și raportarea finală.",
    },
    {
      icon: "⚖️",
      title: "Suport juridic și strategic",
      desc: "Traducem cerințele legale în acțiuni clare și soluții pragmatice pentru echipa ta.",
    },
    {
      icon: "📚",
      title: "Expertiză profundă în legislație",
      desc: "Actualizăm permanent interpretările astfel încât documentația să fie impecabilă.",
    },
    {
      icon: "📈",
      title: "Soluții personalizate",
      desc: "Adaptăm proiectele la buget, calendar și resurse, indiferent de domeniu.",
    },
    {
      icon: "🤝",
      title: "Asistență pe întreg parcursul",
      desc: "Răspundem rapid întreaga procedură și gestionăm comunicarea cu autoritățile.",
    },
    {
      icon: "🔐",
      title: "Confidențialitate totală",
      desc: "Datele și strategiile tale rămân protejate. Lucrăm cu fluxuri sigure și trasabile.",
    },
    {
      icon: "💻",
      title: "Desfășurare exclusiv online",
      desc: "Organizăm întâlniri, livrabile și aprobări remote – rapid și ușor de urmărit.",
    },
  ];

  return (
    <section ref={ref} id="ce-facem" className="px-10 py-16 max-w-[1200px] m-auto">
      <p className="tracking-[0.4em] text-xs opacity-50 reveal">
        CE FACEM PENTRU TINE
      </p>
      <h2 className="text-3xl mt-3 reveal">Consultanță completă, 100% digitală</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item, idx) => (
          <article
            key={item.title}
            className="border border-[#ededed]/15 rounded-2xl p-6 flex flex-col gap-3 card-hover reveal"
            style={{ transitionDelay: `${idx * 40}ms` }}
          >
            <span className="text-2xl" aria-hidden>
              {item.icon}
            </span>
            <h3 className="text-xl">{item.title}</h3>
            <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
