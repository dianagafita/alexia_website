"use client";
import { useRevealOnScroll } from "../lib/useRevealOnScroll";
export default function ContactPage() {
  const ref = useRevealOnScroll();
  return (
    <main ref={ref} className="min-h-screen px-10 py-20">
      <section className="reveal">
        <div className="rounded-lg border border-[#ededed]/12 px-8 py-10 grid md:grid-cols-2 gap-12 items-start">
          {/* Left: intro + details */}
          <div>
            <p className="tracking-widest text-xs opacity-60">CONTACT</p>
            <h1 className="mt-3 text-4xl leading-tight">Stăm la o discuție?</h1>
            <div className="mt-3 h-px w-24 bg-[#ededed]/40 line-reveal" />
            <p className="mt-5 opacity-70 max-w-[560px]">
              Spune-ne pe scurt despre proiectul tău, iar noi revenim rapid cu
              pașii următori.
            </p>
            <div className="mt-8 space-y-2 opacity-80">
              <div>
                Email:{" "}
                <a href="mailto:contact@exemplu.ro" className="link-underline">
                  contact@exemplu.ro
                </a>
              </div>
              <div>
                Telefon:{" "}
                <a href="tel:+407852639214" className="link-underline">
                  +(07) 852 639 214
                </a>
              </div>
              <div>București, RO</div>
            </div>
          </div>

          {/* Right: form */}
          <form className="space-y-4 reveal reveal-delay-1">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-sm opacity-70">Nume</span>
                <input
                  name="name"
                  className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none"
                  placeholder="Numele tău"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm opacity-70">Email</span>
                <input
                  name="email"
                  type="email"
                  className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none"
                  placeholder="exemplu@mail.com"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-sm opacity-70">Companie</span>
              <input
                name="company"
                className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none"
                placeholder="Numele companiei"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm opacity-70">Mesaj</span>
              <textarea
                name="message"
                className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none min-h-[140px]"
                placeholder="Scrie câteva detalii relevante..."
              />
            </label>
            <div className="flex items-center justify-between gap-4">
              <span className="opacity-60 text-sm">
                Răspundem de regulă în 24–48h.
              </span>
              <button type="button" className="px-5 py-2 rounded-full btn-outline">
                Trimite mesajul
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}


