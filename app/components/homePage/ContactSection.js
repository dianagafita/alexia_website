"use client";
import { useRevealOnScroll } from "../../lib/useRevealOnScroll";

export default function ContactSection() {
  const ref = useRevealOnScroll();
  return (
    <section ref={ref} id="contact" className="px-10 py-16">
      <h2 className="text-3xl reveal">Ai un proiect în plan?</h2>
      <p className="opacity-80 mt-2 max-w-[720px] reveal reveal-delay-1">
        Spune-ne ce îți dorești, iar noi ne ocupăm de restul — simplu, online și fără stres. Lucrăm 100% digital, cu
        livrabile clare și termene asumate.
      </p>
      <form className="mt-8 grid md:grid-cols-2 gap-6 max-w-3xl reveal reveal-delay-2">
        <input
          className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none"
          placeholder="Nume și prenume"
        />
        <input
          className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none"
          placeholder="Companie"
        />
        <input
          className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none"
          placeholder="Email"
          type="email"
        />
        <input
          className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none"
          placeholder="Tip proiect / domeniu"
        />
        <textarea
          className="md:col-span-2 bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none"
          rows={4}
          placeholder="Cum te putem ajuta?"
        />
        <div className="md:col-span-2">
          <button type="submit" className="px-6 py-2 rounded-full btn-outline">
            Solicită ofertă
          </button>
        </div>
      </form>
      <div className="mt-8 opacity-70 text-sm reveal reveal-delay-3 max-w-3xl">
        Lucrăm 100% online, iar proiectele sunt gestionate într-un spațiu colaborativ la care ai acces permanent.
      </div>
    </section>
  );
}
