"use client";
import Image from "next/image";
import { useRevealOnScroll } from "../lib/useRevealOnScroll";
export default function AboutPage() {
  const ref = useRevealOnScroll();
  return (
    <main ref={ref} className="min-h-screen px-10 py-20">
      {/* Hero - centered editorial band, distinct from Services */}
      <section className="reveal">
        <div className="rounded-lg border border-[#ededed]/12 bg-[#0f0f0f] px-8 py-12 flex flex-col items-center text-center">
          <p className="tracking-widest text-xs opacity-60">DESPRE NOI</p>
          <h1 className="mt-3 text-5xl leading-tight max-w-[940px]">
            Construim procese de achiziții publice care inspiră încredere.
          </h1>
          <div className="mt-4 h-px w-28 bg-[#ededed]/40 line-reveal" />
          <p className="mt-5 opacity-70 max-w-[760px]">
            Suntem un studio boutique cu ADN operațional. Îmbinăm rigoarea
            juridică, managementul proiectelor și comunicarea clară, pentru ca
            deciziile tale să fie simple și documentate.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-6 w-full">
            <Stat n="100+" l="proceduri finalizate" />
            <Stat n="10+" l="ani experiență" />
            <Stat n="40+" l="parteneri / furnizori" />
          </div>
        </div>
      </section>

      {/* Manifesto band - different section style */}
      <section className="mt-16 reveal">
        <div className="rounded-lg border border-[#ededed]/12 px-8 py-10">
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

      {/* Alternating editorial blocks */}
      <section className="mt-16 space-y-10">
        <div className="grid md:grid-cols-2 gap-8 items-center reveal">
          <div className="rounded-lg overflow-hidden zoom-hover min-h-[280px] bg-[#0f0f0f] border border-[#ededed]/10">
            <Image
              src="/images/img1.jpg"
              alt="Procese clare și trasabile"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div>
            <h3 className="text-xl">Procese clare, trasabile</h3>
            <p className="opacity-70 mt-3 max-w-[580px]">
              Operăm pe etape, cu livrabile și criterii de calitate. Fiecare
              decizie are context și justificare, arhivată pentru audit.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center reveal">
          <div className="md:order-2 rounded-lg overflow-hidden zoom-hover min-h-[280px] bg-[#0f0f0f] border border-[#ededed]/10">
            <Image
              src="/images/img1.jpg"
              alt="Documente lizibile și utile"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:order-1">
            <h3 className="text-xl">Documente lizibile</h3>
            <p className="opacity-70 mt-3 max-w-[580px]">
              Scriem pentru oameni, nu doar pentru conformitate: structuri
              clare, termeni expliciți și exemple acolo unde ajută.
            </p>
          </div>
        </div>
      </section>

      {/* Quote + CTA - distinct visual */}
      <section className="mt-16 reveal">
        <blockquote className="rounded-lg border border-[#ededed]/12 p-8 md:p-10 italic text-lg">
          „Calitatea documentelor și claritatea comunicării scurtează timpul de
          execuție și reduce riscurile. Aceasta este miza noastră în fiecare
          proiect.”
        </blockquote>
        <div className="mt-8 flex justify-center">
          <a href="/contact" className="px-6 py-3 rounded-full btn-outline">
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
