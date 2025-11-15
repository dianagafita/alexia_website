"use client";
import { useRevealOnScroll } from "../../lib/useRevealOnScroll";

export default function ContactSection() {
  const ref = useRevealOnScroll();
  return (
    <section ref={ref} id="contact" className="px-10 py-16">
      <h2 className="text-3xl reveal">CONTACT</h2>
      <p className="opacity-70 mt-2 max-w-[560px] reveal reveal-delay-1">
        Completează formularul și revenim cu o propunere.
      </p>
      <form className="mt-8 grid md:grid-cols-2 gap-6 max-w-3xl reveal reveal-delay-2">
        <input
          className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none"
          placeholder="Nume"
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
          placeholder="Telefon"
        />
        <textarea
          className="md:col-span-2 bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none"
          rows={4}
          placeholder="Mesaj"
        />
        <div className="md:col-span-2">
          <button type="submit" className="px-6 py-2 rounded-full btn-outline">
            Solicită ofertă
          </button>
        </div>
      </form>
    </section>
  );
}
