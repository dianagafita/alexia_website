"use client";
import Image from "next/image";
import { useRevealOnScroll } from "../lib/useRevealOnScroll";

const values = [
  {
    title: "Transparență",
    desc: "Explicăm fiecare pas, pe înțelesul tău, astfel încât deciziile să fie asumate în cunoștință de cauză.",
  },
  {
    title: "Profesionalism",
    desc: "Respectăm strict legislația și procedurile, cu verificări multiple înainte de depunere.",
  },
  {
    title: "Eficiență",
    desc: "Optimizăm timpul echipei tale și reducem riscurile prin procese clare și digitale.",
  },
  {
    title: "Parteneriat",
    desc: "Suntem alături de tine pe termen lung, nu doar pentru o singură procedură.",
  },
];

// const stats = [
//   { n: "100+", l: "proceduri finalizate" },
//   { n: "10+", l: "ani experiență" },
//   { n: "40+", l: "parteneri / furnizori" },
// ];

export default function AboutPage() {
  const ref = useRevealOnScroll();
  return (
    <main ref={ref} className="min-h-screen font-sans pt-20">
      <section className="px-10 py-16">
        <p className="tracking-widest text-xs opacity-60 reveal reveal-up">
          DESPRE NOI
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl leading-tight max-w-4xl reveal reveal-delay-1">
          Navigăm corect și sigur platforma SEAP, de la primii pași până la
          proceduri complexe.
        </h1>
        <p className="opacity-80 mt-5 max-w-3xl reveal reveal-delay-2 reveal-left">
          La Achip Consulting, ajutăm operatorii economici să navigheze corect
          și sigur platforma SEAP, de la primii pași până la participarea la
          proceduri complexe. Suntem o echipă specializată în consultanță pentru
          achiziții publice, cu focus pe claritate, eficiență și rezultate.
          Lucrăm 100% online, astfel încât procesul să fie simplu, rapid și
          adaptat nevoilor fiecărui client.
        </p>
        <p className="opacity-80 mt-4 max-w-3xl reveal reveal-delay-3 reveal-right">
          Ne ocupăm de partea tehnică și procedurală, pentru ca tu să te poți
          concentra pe dezvoltarea business-ului tău. Cu un proces bine
          structurat, comunicare clară și suport constant, achizițiile publice
          devin o oportunitate reală de creștere pentru orice companie.
        </p>
        {/* <div className="mt-8 grid sm:grid-cols-3 gap-6 w-full">
          {stats.map((stat, idx) => (
            <div
              key={stat.l}
              className="reveal reveal-scale"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <Stat {...stat} />
            </div>
          ))}
        </div> */}
      </section>

      <section className="px-10 pb-16 reveal">
        <div className="rounded-3xl border border-[#ededed]/12 px-8 py-10 reveal reveal-scale">
          <h2 className="text-2xl">Valorile noastre</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {values.map((value, idx) => (
              <article
                key={value.title}
                className={`reveal ${idx % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <p className="font-semibold text-lg">{value.title}</p>
                <p className="opacity-70 mt-2 text-sm">{value.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-10 pb-16 reveal">
        <div className="rounded-3xl border border-[#ededed]/12 px-8 py-10 reveal reveal-scale">
          <h2 className="text-2xl">Manifest</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8 opacity-85">
            <ul className="space-y-3">
              <li>
                — Transparență radicală: stadiu, riscuri și următorii pași.
              </li>
              <li>— Documente lizibile, nu doar conforme.</li>
              <li>— Termene ferme și asumate.</li>
            </ul>
            <ul className="space-y-3">
              <li>— Fără jargon inutil. Recomandări cu opțiuni.</li>
              <li>— Trasabilitate: fiecare decizie are un motiv clar.</li>
              <li>— Învățare continuă din fiecare procedură.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-10 pb-16 space-y-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden zoom-hover min-h-[280px] bg-[#0f0f0f] border border-[#ededed]/10 reveal reveal-left">
            <Image
              src="/images/document-signing.jpg"
              alt="Procese clare și trasabile"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="reveal reveal-right">
            <h3 className="text-xl">Procese clare, trasabile</h3>
            <p className="opacity-70 mt-3 max-w-[580px]">
              Operăm pe etape, cu livrabile și criterii de calitate. Fiecare
              decizie are context și justificare, arhivată pentru audit.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2 rounded-lg overflow-hidden zoom-hover min-h-[280px] bg-[#0f0f0f] border border-[#ededed]/10 reveal reveal-right">
            <Image
              src="/images/consultation-meeting.jpg"
              alt="Documente lizibile și utile"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:order-1 reveal reveal-left">
            <h3 className="text-xl">Documente lizibile</h3>
            <p className="opacity-70 mt-3 max-w-[580px]">
              Scriem pentru oameni, nu doar pentru conformitate: structuri
              clare, termeni expliciți și exemple acolo unde ajută.
            </p>
          </div>
        </div>
      </section>

      <section className="px-10 pb-20 reveal">
        <blockquote className="rounded-3xl border border-[#ededed]/12 p-8 md:p-10 italic text-lg reveal reveal-scale">
          „Calitatea documentelor și claritatea comunicării scurtează timpul de
          execuție și reduce riscurile. Aceasta este miza noastră în fiecare
          proiect.”
        </blockquote>
        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="px-6 py-3 rounded-full btn-outline reveal reveal-up"
          >
            Începem o discuție
          </a>
        </div>
      </section>
    </main>
  );
}

function Stat({ n, l }) {
  return (
    <div className="text-center rounded-lg border border-[#ededed]/10 py-5">
      <div className="text-3xl">{n}</div>
      <div className="opacity-60 text-sm">{l}</div>
    </div>
  );
}
