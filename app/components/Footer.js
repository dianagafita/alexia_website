"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20">
      <section className="py-16 border-t hairline-b border-[#ededed]/15">
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="md:w-1/2 w-full flex flex-col ">
            <h4 className="opacity-70">Contact</h4>
            <ul className="mt-3 space-y-2 opacity-90">
              <li>
                Telefon:{" "}
                <a href="tel:+407852639214" className="link-underline">
                  +(07) 852 639 214
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:contact@exemplu.ro" className="link-underline">
                  contact@exemplu.ro
                </a>
              </li>
              <li>Adresă: București, RO</li>
              <li>Program: L–V 09:00 – 18:00</li>
            </ul>
            <div className="mt-4 opacity-70 flex gap-4">
              <a href="#" aria-label="Instagram">
                IG
              </a>
              <a href="#" aria-label="LinkedIn">
                IN
              </a>
              <a href="#" aria-label="Facebook">
                FB
              </a>
            </div>
            <div className="mt-6">
              <a href="/contact" className="px-5 py-2 rounded-full btn-outline">
                Solicită ofertă
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl">Hai să discutăm proiectul tău</h3>
            <p className="opacity-70 mt-2 max-w-[560px]">
              Completează adresa de email pentru noutăți și resurse utile despre
              achiziții publice.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                className="flex-1 bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none"
                placeholder="E-mail"
                type="email"
              />
              <button className="px-6 py-2 rounded-full border border-[#ededed]/40 hover:border-[#ededed]/70 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="py-6 opacity-60 text-sm border-t hairline-b border-[#ededed]/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span>© 2025 Brand Name. Toate drepturile rezervate.</span>
          <div className="space-x-4">
            <Link href="/privacy">Confidențialitate</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/terms">Termeni</Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
