"use client";
import { useRevealOnScroll } from "../lib/useRevealOnScroll";
export default function ContactPage() {
  const ref = useRevealOnScroll();
  return (
    <main ref={ref} className="min-h-screen px-10 py-20">
      <section className="grid md:grid-cols-2 gap-12 items-start">
        <div className="reveal">
          <p className="tracking-widest text-xs opacity-60">CONTACT</p>
          <h1 className="mt-3 text-4xl leading-tight">Stăm la o discuție?</h1>
          <div className="mt-3 h-px w-24 bg-[#ededed]/40 line-reveal" />
          <p className="mt-5 opacity-70 max-w-[560px]">
            Spune-ne pe scurt despre proiectul tău, iar noi revenim rapid cu
            pașii următori.
          </p>

          <div className="mt-8 space-y-2 opacity-80">
            <div>contact@exemplu.ro</div>
            <div>+(07) 852 639 214</div>
            <div>București, RO</div>
          </div>
        </div>

        <form className="reveal reveal-delay-1 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none" placeholder="Nume" />
            <input className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none" placeholder="Email" type="email" />
          </div>
          <input className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none" placeholder="Companie" />
          <textarea className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none min-h-[120px]" placeholder="Mesaj" />
          <button type="button" className="px-5 py-2 rounded-full btn-outline">
            Trimite mesajul
          </button>
        </form>
      </section>
    </main>
  );
}


